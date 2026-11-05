# LifeOS Planner — Offline Edition (v1.4)

LifeOS is an original, local-first personal life planner. It is designed to run from the extracted folder without an account, server, internet connection, CDN, or external JavaScript library.

## Open LifeOS

1. Extract the ZIP file to a normal folder.
2. Open the extracted folder containing `index.html`.
3. Double-click `index.html` and choose Chrome or Edge if prompted.
4. Use the left sidebar to open the 15 modules.
5. Open **Settings & Backup** and export a JSON backup regularly.

The app is designed for current Chrome, Edge, Firefox and Safari desktop browsers. Some browser storage policies vary for `file://` pages and mobile browsers. Test it on the target browser before relying on stored data.

## Included modules

1. Dashboard
2. Today
3. Week
4. Month
5. Year (default planner year 2027)
6. Habits
7. Routines
8. Glow Up (90-day challenge, skincare, self-care menu, before/after photos)
9. Wellness & Cycle (manual logs; not a medical tool)
10. Finance
11. Meals & Groceries
12. Goals & Vision (photo board)
13. Journal
14. Reading List
15. OOTD & Wishlist

## Included app features
- Local-time dashboard greeting (morning, afternoon and evening), localized in all five supported languages
- 365 date-selected, offline motivational quote combinations, localized in all five supported languages; stable throughout each local day

- Six visual modes: Blush, Latte, Sage, Lilac, Cherry and Dark Mode
- Full app-interface localization for English, Spanish, French, German and Arabic (RTL), including all 15 modules, dashboards, card headings, action labels, form labels, placeholders, dropdown options, settings, quick-add dialogs, confirmations, notifications, tooltips and document metadata
- Automatic local saving
- IndexedDB storage for records and image files, with localStorage fallback for the main state
- Full JSON backup and restore, including saved photos
- Sample/demo data
- Browser print dialog (choose Save as PDF)
- Responsive layout for desktop, tablet and mobile
- Redesigned photo-led dashboard with larger, more readable typography
- Settings controls for Small, Standard, Large and Extra large text sizes
- Settings controls for Compact, Comfortable and Spacious layout density
- Full-interface color themes: Blush, Latte, Sage, Lilac, Cherry and Dark Mode recolor the sidebar, cards, buttons, icons, charts, progress indicators, forms and navigation
- Profile photo upload, update and removal; photo is stored locally and included in full JSON backups
- Quick theme swatches and language selector in the top toolbar
- Built-in original cozy bedroom hero image, with an option to replace it using a local photo
- No account, subscription, analytics or cloud upload
- No guaranteed background/push reminders or external calendar synchronization

## Privacy and storage notes

All planner content is stored in the browser profile on the device where it is entered. There is no cross-device synchronization. Clearing browser data, using a different browser/profile, or moving to another device can make the saved data unavailable. Export a LifeOS JSON backup before clearing data or changing devices and import it on the destination device.

Uploaded photos are stored locally in browser IndexedDB and included in JSON backups. Large backups may take longer to export/import. Individual uploaded images are limited to 8 MB.

The Wellness & Cycle module is a personal record-keeping tool only. It does not predict ovulation, diagnose conditions, or provide medical advice.

## Important compatibility note

Opening a local `index.html` file uses the browser's `file://` origin. Browser vendors do not all apply storage behavior identically to local files, especially on mobile. For a commercial release, test the exact ZIP on current Chrome, Edge, Firefox, Safari, iOS Safari and Android Chrome, and keep the backup/restore workflow visible to buyers.

## Language coverage in v1.4

The interface can be switched between English, Spanish, French, German and Arabic. The selected language is applied throughout the app, including the dashboard, all 15 modules, settings, generated forms, field labels, placeholders, dropdown choices, buttons, empty states, quick-add dialogs, confirmation prompts, notifications, tooltips, accessibility labels, document title and metadata. Arabic switches the document to right-to-left direction. Dates and currency use the selected locale.

Predefined categories, statuses, built-in prompts and demo/sample entries are translated for display. Personal information typed by the buyer—such as names, journal entries, notes, custom task titles, recipe text and other free-text content—is intentionally preserved exactly as entered. Changing the interface language does not rewrite or machine-translate a buyer’s personal content. Browser-native file pickers, browser menus and operating-system dialogs follow the buyer’s device language, not the app language.

## Localization verification

Automated Chromium checks verified all 16 app routes (15 modules plus Settings) across the five supported languages, 19 create-form types across Spanish, French, German and Arabic, translated quick-add dialogs and destructive confirmation prompts, Arabic right-to-left document direction, localized document metadata, and preservation of personal free-text entries when changing language. No JavaScript page errors were detected in these tested flows. These checks do not replace a human translation review by native speakers.

## Package structure

- `index.html` — app entry point
- `assets/css/styles.css` — themes and responsive interface
- `assets/js/app.js` — application modules and interactions
- `assets/js/db.js` — local persistence and backup/restore
- `assets/js/i18n.js` — language dictionaries
- `assets/images/lifeos-hero-bedroom.jpg` — built-in original dashboard hero image
- `docs/` — supplementary documentation


## Dynamic dashboard greeting and daily quote

The dashboard greeting changes automatically with the device's local time (morning, afternoon and evening) and is localized in all five supported interface languages. The motivational quote is selected from a built-in offline quote bank using the local calendar date. The same date always shows the same quote; the quote changes on the next local date. There is no internet request, account, or quote API. The quote bank supports English, Spanish, French, German and Arabic.

## Profile photo
Open Settings & Backup → Profile → Upload profile photo. Square JPG, PNG and WebP images are recommended. The file is stored in the browser's local IndexedDB and is included in the full JSON backup. Use Remove to delete it.

## Client delivery and mobile compatibility
For desktop delivery, send the complete ZIP without renaming or removing its folders. The buyer extracts it first and opens `index.html` with Chrome, Edge, Firefox or Safari. All `assets` files must remain beside `index.html`.

On Android, the buyer should extract the ZIP with a file manager and choose Open with → Chrome for `index.html`; some file managers show HTML as text instead of launching the browser. If the browser still shows source code or blocks local assets/storage, use a local HTTP server app or a hosted HTTPS/PWA version. On iPhone/iPad, the Files preview is not a reliable way to run a local multi-file HTML app; provide a hosted HTTPS version (optionally installable as a PWA) for the smoothest mobile experience. The ZIP by itself is primarily a desktop offline delivery format. Test mobile browser behavior before advertising full mobile offline support.

## Theme behavior
Changing a theme updates the full app palette, including page background, sidebar, navigation states/icons, cards, dashboard panels, progress bars, circular score, form controls, buttons, chips and borders. The selected theme is saved in local settings.


## Delivering LifeOS to a client

### ZIP / offline desktop delivery
1. Send the complete `LifeOS_Offline_Planner_v1.4.zip` file. Do not send only `index.html` and do not remove the `assets` folder.
2. The client extracts the ZIP to a normal folder.
3. On Windows, they double-click `index.html` and choose Chrome or Edge. On macOS, they use Open With → Safari or Chrome. Keep all extracted files in the same folder structure.
4. Client data stays in that browser profile on that device. The client should export JSON backups regularly.

### Android and iPhone/iPad delivery
The ZIP is primarily a desktop offline package. A phone's file manager may preview an `.html` file as plain source/text rather than running it. That is an operating-system file-preview behavior, not a signal that the HTML itself is invalid.

For Android, the client can extract the ZIP and try Open with → Chrome. This is not guaranteed across file managers and Android versions because local-file permissions and relative asset loading vary. If Chrome still displays code or the page is missing styles, use the PWA delivery method below.

For iPhone/iPad, opening `index.html` from the Files app is not a reliable way to run a multi-file HTML application. Use the PWA delivery method.

### Recommended cross-device mobile method: host as a PWA
This package includes `manifest.webmanifest`, `sw.js` and app icons. Upload the complete extracted folder to a static HTTPS host such as a client's own website or a static hosting service. The client opens the HTTPS link once while online; the service worker caches the app shell. They can then use the browser's Add to Home Screen / Install option. On Android, open the link in Chrome and choose Install app or Add to Home screen. On iPhone/iPad, open the link in Safari, tap Share, then Add to Home Screen.

The PWA needs HTTPS (or localhost for development) for service-worker installation; it cannot install its service worker from a `file://` ZIP. After the first successful online load, the cached app shell can open offline. User records and photos still remain local to each device/browser profile; this is not cloud sync. Moving from a computer to a phone requires exporting a LifeOS JSON backup on the old device and importing it on the new device.

### Device support summary
- Windows desktop/laptop: recommended direct ZIP + Chrome/Edge.
- macOS desktop/laptop: direct ZIP + Safari/Chrome.
- Android phone/tablet: recommended HTTPS PWA; direct ZIP opening may vary.
- iPhone/iPad: recommended HTTPS PWA added to Home Screen; local Files preview is not the supported run path.
- Chromebooks: Chrome browser or hosted PWA.

Do not advertise ZIP-only mobile support as guaranteed. For clients who need phone use, provide a hosted HTTPS PWA link or a hosting arrangement alongside the ZIP.


## Client handoff
See `CLIENT-DELIVERY-GUIDE.txt` for Windows/macOS desktop steps, Android/iPhone PWA guidance, profile-photo instructions, backup transfer and theme information.
