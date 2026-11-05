# LifeOS Planner — Complete Product Specification

**Product:** LifeOS Planner — Offline Edition  
**Version:** 1.1 visual refinement build  
**Product category:** Downloadable, local-first personal life-management web application  
**Primary delivery:** ZIP archive with `index.html` at the archive root  
**Default planner year:** 2027  
**Visual direction:** Soft feminine editorial dashboard — photo-led welcome panel, blush/cream/sage palette, serif display typography, spacious cards and clear readable controls  
**Navigation:** Fixed left sidebar on desktop; collapsible sidebar on smaller screens  
**Identity:** LifeOS

---

## 1. Product objective

LifeOS is a private, offline-first personal planning workspace. It combines planning, routines, habits, wellness logs, household organization, finances, journaling, reading and personal style in one browser application.

The application is intended to be opened from an extracted folder. Core features do not require an account, hosted backend, subscription, remote API, CDN, or internet connection.

### Intended users

- People who want one personal dashboard for everyday planning.
- Users balancing work, home, family, health routines and personal goals.
- Buyers who prefer a one-time digital download rather than an ongoing subscription.

### Product principles

1. **Local-first privacy:** user entries remain in the current browser profile on the current device.
2. **Low friction:** open `index.html`; no installation or login.
3. **Practical functionality:** entries can be created, edited, checked off and deleted.
4. **Consistent design:** one reusable visual system across every module.
5. **Portable data:** full JSON export and restore, including uploaded photos where available.
6. **Readable by default:** Extra large text is the default, with user-selectable Small, Standard, Large and Extra large sizes.
7. **Personal layout:** Compact, Comfortable and Spacious density options are available in Settings.

---

## 2. Information architecture

The primary navigation contains 15 modules plus Settings & Backup.

### Overview

#### 2.1 Dashboard
- Personalized time-of-day greeting and user name.
- Today's date.
- Open-task count and tasks planned today.
- Daily habit completion summary.
- Current-month income, expenses and net balance.
- Savings-goal progress summary.
- Up to three unfinished priority tasks, with high-priority tasks first.
- Upcoming calendar events.
- Quick view of today's mood, water and sleep check-ins.
- Quick actions to add tasks, events and wellness entries.

#### 2.2 Today
- Date-specific task list, sorted by time.
- Task completion checkboxes.
- Priority, category and notes on tasks.
- Today's events and appointments.
- Quick check-in cards for mood, sleep, water, steps and workout.
- Photo of the day, stored locally.
- Daily focus note, saved to the planner.

#### 2.3 Week
- Monday-to-Sunday overview for the current week.
- Tasks and events displayed on their dates.
- Weekly focus field.
- Weekly reflection/review field.
- Weekly task and event counts.

#### 2.4 Month
- Interactive month calendar.
- Month navigation and Today shortcut.
- Event markers and task markers.
- Select a date to view events and tasks for that date.
- Add events for the selected date.

#### 2.5 Year
- Twelve-month overview for the selected planner year.
- Default planner year 2027.
- Month cards show event and goal-deadline counts.
- Select any month to open the interactive Month module.
- Yearly goal list with progress bars.

### Personal Growth

#### 2.6 Habits
- Create, edit and delete custom habits.
- Category assignment.
- Seven-day check-in grid.
- Per-day completion toggles.
- Current streak calculation.
- Seven-day completion progress.

#### 2.7 Routines
- Create morning, night and custom routines.
- Multi-step routines (one step per line on creation).
- Daily step checkboxes.
- Completion count and progress bar.
- Routine steps and daily completion state are saved.

#### 2.8 Glow Up
- Create a 90-day or custom-duration personal challenge.
- Start date and elapsed-day progress.
- Skincare routine list with AM, PM, AM & PM or Weekly frequency.
- Built-in self-care menu; selected activities are added to the wellness log.
- Before and after photo gallery.
- Local photo storage.

#### 2.9 Wellness & Cycle
- Manual wellness check-ins for mood, sleep, water, steps and workout.
- Dated wellness history, with a 14-day view.
- Manual period/cycle records with start date, optional end date, symptoms and notes.
- Separate workout log view.
- No medical diagnosis, ovulation prediction or medical recommendations.

### Life Management

#### 2.10 Finance
- Income and expense transactions.
- Transaction date, description, amount, category and notes.
- Current-month income, expenses and net balance.
- Monthly budget setting.
- Savings rate calculation from current-month income and expenses.
- Category-level spending breakdown.
- Multiple savings goals with target, saved amount, target date and progress.

#### 2.11 Meals & Groceries
- Weekly meal planning for breakfast, lunch, dinner and snacks.
- Date-specific meal entries and recipe names.
- Grocery checklist with categories and completion toggles.
- Recipe cards with ingredients and instructions.

#### 2.12 Goals & Vision
- Goals with reason, next action, progress percentage and target date.
- Editable goal progress slider.
- Twelve vision-board spaces.
- Vision items can contain a title, life area, notes and locally stored photo.
- Six-color vision palette selector.

#### 2.13 Journal
- Dated journal entries.
- Title and mood selection.
- Gratitude field and longer journal text.
- Built-in writing prompts.
- Separate gratitude note quick form.
- Saved entry list.

#### 2.14 Reading List
- Book title and author.
- Status: Want to read, Currently reading, Finished or Paused.
- Star rating.
- Reading goal / notes.
- Annual reading goal setting and completion summary.

#### 2.15 OOTD & Wishlist
- Outfit diary entries with date, occasion/title and notes.
- Local outfit photo uploads.
- Wishlist items with category, price, product URL and notes.
- Mark wishlist items as purchased.

### 2.16 Settings & Backup
- User display name.
- Theme selection.
- Language selection.
- Currency selection.
- Planner year selection.
- Monthly budget setting.
- Annual reading goal setting.
- Full JSON backup export.
- JSON backup import/restore.
- Current-page print / Save as PDF.
- Demo data loader.
- Clear-all-data action with confirmation.
- Privacy and storage guidance.

---

## 3. Visual design system

### Brand
- Product name: **LifeOS**.
- Wordmark: serif-style product name with a soft rounded initial mark.
- Tone: calm, organized, supportive and non-clinical.

### Layout
- Desktop: fixed left navigation sidebar and sticky top utility bar.
- Tablet/mobile: collapsible navigation, responsive content grids and stacked cards.
- Content: modular white/soft-surface cards with consistent spacing and borders.

### Themes
1. Blush — soft pink accents.
2. Latte — warm beige and brown.
3. Sage — muted botanical greens.
4. Lilac — soft purple.
5. Cherry — deeper rosy red accents.
6. Dark Mode — dark neutral surfaces with accessible contrast accents.

### Component patterns
- Page heading and context text.
- Primary and secondary buttons.
- Metric cards.
- List rows with edit/delete actions.
- Form dialogs.
- Progress bars and tags.
- Calendar cells and date markers.
- Empty states.
- Photo cards and vision-board tiles.

---

## 4. Data model

The application uses a generic record collection with a type discriminator and stable record ID. Current record types include:

`task`, `event`, `habit`, `routine`, `glow`, `skincare`, `cycle`, `wellness`, `finance`, `financeGoal`, `meal`, `grocery`, `recipe`, `goal`, `vision`, `journal`, `book`, `outfit`, `wishlist`, `weekly`, `dailyFocus`, and `glowPhoto`.

Settings include:

- `name`
- `theme`
- `language`
- `currency`
- `year`
- `monthlyBudget`
- `readingGoal`
- `cycleLength` (reserved for personal settings; no cycle prediction is provided)
- `visionPalette`

Records use IDs and timestamps. User-entered values are stored as entered. Photos are stored separately in IndexedDB and referenced from records by a photo ID.

---

## 5. Storage, backup and privacy architecture

### Storage
- Primary storage: IndexedDB.
- Fallback for core state: localStorage where available.
- Photos: IndexedDB Blob records.
- No remote database, API, analytics or cloud sync.

### Backup format
A LifeOS backup is a JSON document with:

- `format`: `LifeOS Backup`
- `version`: backup schema version
- `exportedAt`: ISO timestamp
- `state`: app settings and records
- `photos`: photo IDs, metadata and encoded photo data

### Restore behavior
- Validate the backup marker and required record array.
- Ask for confirmation before replacing existing planner data.
- Restore app state and photo records.
- Re-render the planner using restored settings.

### Privacy disclosures required in customer-facing listing
- Data stays in the browser profile on the device where it is entered.
- There is no automatic cross-device sync.
- Clearing browser data can delete planner data.
- Buyers should export a backup regularly.
- Uploaded photos are stored locally and included in JSON backup exports.

---

## 6. Localization

The current build includes language selection for:

- English
- Spanish
- French
- German
- Arabic with right-to-left document direction

**v1.4 localization coverage:** the app interface is translated across all 15 modules and Settings, including dashboard/card content, page headings and descriptions, action labels, form labels, placeholders, dropdown choices, empty states, quick-add dialogs, confirmation prompts, notifications, tooltips, accessibility labels and document metadata. Dates and currency formatting use the selected locale. Arabic switches the document to right-to-left direction.

Built-in labels, fixed categories/statuses, sample entries and system-generated prompts are translated for display. Buyer-authored free text (for example, names, journal entries, notes, custom task titles and recipe content) is intentionally not machine-translated or altered when the UI language changes. Browser-native dialogs and file pickers use the operating-system/browser language. Translation quality should still receive native-speaker review before broad commercial claims.

---

## 7. Offline and browser requirements

- All application JavaScript and CSS are local files.
- No remote fonts, CDNs, libraries, image sources or API calls.
- ZIP extraction should expose `index.html` at the extracted folder root.
- Recommended initial use: current desktop Chrome or Edge.
- Mobile and tablet layouts are responsive, but storage behavior must be tested in the buyer's specific browser.
- Local-file (`file://`) storage policies differ between browser vendors and versions. The customer guide should explain device-local storage and recommend a backup.

---

## 8. Delivery package

The ZIP should contain:

- `index.html`
- `assets/css/styles.css`
- `assets/js/app.js`
- `assets/js/db.js`
- `assets/js/i18n.js`
- `README.md`
- `docs/QUICK-START.txt`
- `docs/PRODUCT-SPEC.md`

The delivered product should include a buyer guide explaining extraction, browser opening, photo upload, backup, restore, printing and storage limitations.

---

## 9. Verification performed for v1.4 development build

A Chromium browser smoke test was run against an in-memory page build with the local application files embedded. The following were verified:

- All 15 modules plus Settings route render.
- Task creation and completion toggle.
- Finance transaction creation.
- Habit creation.
- Manual cycle record creation.
- Vision item creation and image upload flow.
- JSON backup export containing records and photo data.
- No JavaScript console errors during the tested flows.

### Not yet independently verified

- Persistent storage across a real browser restart from `file://` in every supported browser.
- Full cross-browser testing on Safari, Firefox, iOS Safari and Android Chrome.
- Every individual form combination and edge case.
- Native-speaker translation review.
- Very large photo libraries / large backup stress tests.
- Full accessibility audit and keyboard-only navigation audit.

These checks are recommended before treating the app as a fully production-certified commercial release.

---

## 10. Known v1.4 limitations

1. There is no cloud sync, login, multi-device synchronization or shared family account.
2. Buyer-entered free-text content is preserved in the language in which it was written; it is not machine-translated when the interface language changes.
3. Cycle information is a manual personal log only; it does not make predictions or medical recommendations.
4. Reminders are visible as planner entries; the app does not currently provide guaranteed background/push notifications.
5. Finance tracking is manual and does not connect to banks or payment providers.
6. The meal planner does not generate grocery items automatically from recipes yet; groceries are maintained as a separate editable checklist.
7. Calendar tasks/events are manually entered; there is no external calendar synchronization.
8. Browser print uses the browser's print dialog; page-specific print templates can be refined in a later release.

---

## 11. Commercial readiness checklist

Before publishing on Etsy:

- [ ] Test extracted ZIP on current Windows Chrome and Edge.
- [ ] Test persistence after closing and reopening the browser.
- [ ] Test JSON backup and restore with text records and photos.
- [ ] Test mobile/tablet layout on actual devices.
- [ ] Create original listing mockups and a setup tutorial video.
- [ ] Verify every advertised feature against the delivered app.
- [ ] Clearly disclose local-only storage and no cloud sync.
- [ ] Arrange native-speaker review of translations before making quality claims about localization.
- [ ] Add a version number and a customer support / troubleshooting guide.
- [ ] Confirm Etsy digital-download file-size and file-count constraints at upload time.

## 10. Version 1.1 visual refinement

- Rebuilt the dashboard with a photo-led welcome area, personalized greeting, affirmation, quick links, glow score, top-three priorities, habit progress, upcoming events and monthly finance summary.
- Added an original locally bundled cozy bedroom hero image; users can replace it with their own dashboard photo.
- Added top-toolbar language selector and quick theme swatches.
- Increased navigation, page headings, card titles, form controls and planner text sizes.
- Added Settings controls for text size (Small, Standard, Large, Extra large) and layout density (Compact, Comfortable, Spacious), including live preview before saving.
- The default text size is Extra large.
- Kept all 15 planner modules and existing local-first data model.


## 12. Version 1.2 full-interface localization

- Expanded localization from navigation-only strings to every app-generated interface screen and all 15 modules.
- Added translations for generated forms, form field labels, dropdown options, placeholders, action controls, empty states, descriptions, metadata, quick-add, toasts and confirmation prompts.
- Added accessibility attribute translation for labels, titles, alt text and placeholders.
- Localized document title and description metadata.
- Kept user-authored personal free text unchanged to protect the buyer’s content.
- Added automated checks for 16 routes across five languages, 19 generated form types across four non-English languages, quick-add, confirmation prompts, Arabic RTL and user-text preservation.


## v1.4 additions
- Unified theme tokens recolor the complete interface, not only primary buttons.
- Profile image upload/change/remove, local IndexedDB storage and backup/restore inclusion.
- Delivery guidance distinguishes desktop ZIP use from mobile local-file limitations.


## Daily greeting and quote behavior (v1.4)
- Greeting changes from morning to afternoon to evening using the device local clock.
- Greeting is localized for English, Spanish, French, German and Arabic.
- Daily motivational quote is selected deterministically from a built-in offline bank using the local calendar date.
- Same date produces the same quote; next date produces a different quote.
- 365 distinct daily quote combinations are available before the sequence cycles.
- App schedules a refresh at noon, evening and local midnight when the dashboard remains open, and refreshes when the tab becomes visible again.
- No remote API or internet connection is used for greeting or quotes.
