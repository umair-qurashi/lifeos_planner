/* LifeOS local-first storage. All application data stays in this browser profile. */
(function(){
  'use strict';
  const DB_NAME='lifeos-planner-db';
  const DB_VERSION=1;
  let dbPromise;
  const memory={state:null,photos:new Map()};
  function openDB(){
    if(!('indexedDB' in window)) return Promise.resolve(null);
    if(dbPromise) return dbPromise;
    dbPromise=new Promise(resolve=>{
      try{
        const request=indexedDB.open(DB_NAME,DB_VERSION);
        request.onupgradeneeded=()=>{
          const db=request.result;
          if(!db.objectStoreNames.contains('state')) db.createObjectStore('state');
          if(!db.objectStoreNames.contains('photos')) db.createObjectStore('photos');
        };
        request.onsuccess=()=>resolve(request.result);
        request.onerror=()=>resolve(null);
      }catch(e){resolve(null);}
    });
    return dbPromise;
  }
  function txRequest(store,mode,action){
    return openDB().then(db=>{
      if(!db) return action(null);
      return new Promise(resolve=>{
        try{
          const tx=db.transaction(store,mode);
          const result=action(tx.objectStore(store));
          if(result&&typeof result.onsuccess!=='undefined'){
            result.onsuccess=()=>resolve(result.result);
            result.onerror=()=>resolve(null);
          }else{
            tx.oncomplete=()=>resolve(true);tx.onerror=()=>resolve(null);
          }
        }catch(e){resolve(null);}
      });
    });
  }
  async function saveState(state){
    memory.state=state;
    const result=await txRequest('state','readwrite',store=>{
      if(!store){try{localStorage.setItem('lifeos-state',JSON.stringify(state));return true;}catch(e){return false;}}
      return store.put(state,'main');
    });
    if(result===null){try{localStorage.setItem('lifeos-state',JSON.stringify(state));}catch(e){}}
    return true;
  }
  async function loadState(){
    const result=await txRequest('state','readonly',store=>{
      if(!store){try{return JSON.parse(localStorage.getItem('lifeos-state')||'null');}catch(e){return null;}}
      return store.get('main');
    });
    if(result&&typeof result==='object') memory.state=result;
    if(result===null){try{const raw=localStorage.getItem('lifeos-state');if(raw){memory.state=JSON.parse(raw);return memory.state;}}catch(e){}}
    return result||memory.state||null;
  }
  async function savePhoto(id,blob,meta={}){
    memory.photos.set(id,{blob,meta});
    const record={id,blob,meta};
    const result=await txRequest('photos','readwrite',store=>store?store.put(record,id):true);
    return result!==null;
  }
  async function getPhoto(id){
    if(memory.photos.has(id)) return memory.photos.get(id);
    const record=await txRequest('photos','readonly',store=>store?store.get(id):null);
    if(record){memory.photos.set(id,{blob:record.blob,meta:record.meta||{}});return memory.photos.get(id);}
    return null;
  }
  async function deletePhoto(id){
    memory.photos.delete(id);
    await txRequest('photos','readwrite',store=>store?store.delete(id):true);
  }
  async function allPhotos(){
    const db=await openDB();
    if(!db) return [...memory.photos.entries()].map(([id,v])=>({id,...v}));
    return new Promise(resolve=>{
      try{
        const tx=db.transaction('photos','readonly');const req=tx.objectStore('photos').getAll();
        req.onsuccess=()=>resolve(req.result||[]);req.onerror=()=>resolve([]);
      }catch(e){resolve([]);}
    });
  }
  function blobToDataURL(blob){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(blob);});}
  function dataURLToBlob(dataURL){const [meta,data]=dataURL.split(',');const mime=(meta.match(/data:(.*?);/)||[])[1]||'application/octet-stream';const bytes=atob(data);const array=new Uint8Array(bytes.length);for(let i=0;i<bytes.length;i++)array[i]=bytes.charCodeAt(i);return new Blob([array],{type:mime});}
  async function exportBackup(state){
    const photos=await allPhotos();const encoded=[];
    for(const p of photos){if(p.blob) encoded.push({id:p.id,meta:p.meta||{},data:await blobToDataURL(p.blob)});}
    return {format:'LifeOS Backup',version:1,exportedAt:new Date().toISOString(),state,photos:encoded};
  }
  async function importBackup(payload){
    if(!payload||payload.format!=='LifeOS Backup'||!payload.state||!Array.isArray(payload.state.records)) throw new Error('This file is not a valid LifeOS backup.');
    for(const p of (payload.photos||[])){
      if(p.id&&p.data) await savePhoto(p.id,dataURLToBlob(p.data),p.meta||{});
    }
    await saveState(payload.state);
    return payload.state;
  }
  window.LifeOSDB={openDB,saveState,loadState,savePhoto,getPhoto,deletePhoto,allPhotos,exportBackup,importBackup};
})();
