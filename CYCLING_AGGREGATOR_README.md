# Cycling Aggregator README
**Oahu Cycle Hub – File Guide**

This document explains every important item in the `cycling-aggregator` folder.  
It is written so you can safely update the website without needing to understand code.

**Most important rule:**  
The only files you should normally edit are the two JSON data files. Everything else is the website’s structure and design.

---

## Quick Overview – What You Can Safely Edit

| File | Safe to edit? | What it controls on the website |
|------|---------------|---------------------------------|
| `src/data/events.json` | **Yes – primary** | All rides, races, group rides, and events |
| `src/data/clubs.json` | **Yes – primary** | All cycling clubs and groups |
| Everything else | No (unless you know code) | Layout, design, colors, navigation, forms |

---

## Folder & File Guide

### Root Folder Files

| File | Purpose | Editable? |
|------|---------|-----------|
| `package.json` | Lists the technical tools the site needs (Next.js, React, etc.) | No |
| `tsconfig.json` | TypeScript settings | No |
| `next.config.ts` | Next.js configuration | No |
| `postcss.config.mjs` | CSS processing settings | No |
| `eslint.config.mjs` | Code quality rules | No |
| `.gitignore` | Tells Git which files to ignore | No |
| `README.md` | Original project notes | Optional |
| `CYCLING_AGGREGATOR_README.md` | **This guide** | Yes (you can update notes here) |

---

### `public/` Folder
Contains static images (Next.js logos and icons).  
**Do not edit.** These are only used as placeholders.

---

### `src/data/` – **THE MOST IMPORTANT FOLDER**

This is where the actual content of the website lives.

#### 1. `src/data/events.json`
**What it does:**  
Controls every event, group ride, race, and clinic shown on the website (Home page + Events page).

**How the website uses it:**
- Events with a `date` that is today or in the future appear under “Upcoming Events”
- Events marked `"featured": true` get a special “Featured” badge
- The Home page shows the next few upcoming events
- The Events page shows all of them (plus a few recent past ones)

**Fields you can change:**

| Field | Example | Effect on website |
|-------|---------|-------------------|
| `id` | `"mauka-sunday-aug"` | Unique internal name (keep it simple, no spaces) |
| `title` | `"Mauka Sunday Group Ride"` | Big heading people see |
| `date` | `"2026-08-02"` | Must be YYYY-MM-DD. Controls whether it shows as upcoming |
| `startTime` | `"07:00"` | Shown next to the date |
| `location` | `"Waipahu start"` | Location line on the card |
| `type` | `"Group Ride"` | Category tag |
| `distance` | `"30-50 miles"` | Shown with the type |
| `club` | `"Mauka Cycling Club"` | Organizer name |
| `description` | Short paragraph | Text under the title |
| `link` | `"https://..."` | “Details / Register →” button (leave empty `""` if none) |
| `featured` | `true` or `false` | Adds “Featured” badge when true |

**How to add a new event:**  
Copy an existing block, change the values, and keep the commas and brackets correct.

#### 2. `src/data/clubs.json`
**What it does:**  
Controls the Clubs page and the “Featured Clubs” section on the Home page.

**How the website uses it:**
- All clubs appear on the Clubs page
- Clubs with `"featured": true` also appear on the Home page

**Fields you can change:**

| Field | Example | Effect on website |
|-------|---------|-------------------|
| `id` | `"mauka"` | Unique internal name |
| `name` | `"Mauka Cycling Club"` | Club title |
| `location` | `"Oahu (Waipahu / Central & Windward)"` | Location line |
| `type` | `["Road", "Group Rides"]` | Tags (keep the square brackets and quotes) |
| `description` | Short paragraph | Club description text |
| `website` | `"https://..."` | Website link (or `""`) |
| `facebook` | `"https://..."` | Facebook link (or `""`) |
| `strava` | `"https://..."` | Strava link (or `""`) |
| `contact` | `"via local rides..."` | Contact info text |
| `meetingPoint` | `"Waipahu area starts common"` | Typical start location |
| `featured` | `true` or `false` | Shows on Home page when true |

---

### `src/lib/` – Helper Code (Do Not Edit)

| File | Purpose |
|------|---------|
| `types.ts` | Defines the shape of an Event and a Club (the field names) |
| `data.ts` | Loads the JSON files and provides functions such as “get upcoming events” and “format date” |

These files make the data work. Changing them can break the site.

---

### `src/components/` – Building Blocks of the Pages

| File | What it shows on the website | Editable? |
|------|------------------------------|-----------|
| `Header.tsx` | Top navigation bar (logo + Events / Clubs / Submit links) | Advanced only |
| `Footer.tsx` | Bottom footer text | Advanced only |
| `EventCard.tsx` | The individual event “card” design | Advanced only |
| `ClubCard.tsx` | The individual club “card” design | Advanced only |

These control how things look, not the actual data.

---

### `src/app/` – The Actual Pages

| File / Folder | What it is | Editable? |
|---------------|------------|-----------|
| `page.tsx` | Home page (hero, upcoming events, featured clubs) | Advanced only |
| `events/page.tsx` | Full Events listing page | Advanced only |
| `clubs/page.tsx` | Full Clubs directory page | Advanced only |
| `submit/page.tsx` | The “Submit an Event or Club” form | Advanced only |
| `layout.tsx` | Overall page wrapper (header + footer + fonts) | Advanced only |
| `globals.css` | Colors, background, and basic styling | Advanced only |
| `favicon.ico` | Browser tab icon | Optional |

---

## How Edits Appear on the Live Website

1. You edit `events.json` or `clubs.json` (via GitHub website or GitHub Desktop).
2. You commit and push the change.
3. If the site is deployed on Vercel, it automatically rebuilds within 1–2 minutes.
4. The new event or club appears on the live site.

**Important technical notes for data files:**
- Always keep the square brackets `[ ]` and curly braces `{ }` balanced.
- Every field except the last one in a list needs a comma after it.
- Dates must be in `YYYY-MM-DD` format (example: `2026-08-15`).
- `true` / `false` must be lowercase and without quotes.
- Empty links should be written as `""` (two quotes).

---

## Recommended Workflow for You

1. Open the project in **GitHub Desktop**.
2. Open the folder and go to `src/data/`.
3. Edit `events.json` or `clubs.json` with a simple text editor.
4. Save the file.
5. In GitHub Desktop → write a short note → **Commit to main** → **Push origin**.
6. Wait 1–2 minutes and refresh the live website.

---

## Summary – What Matters Most

- **Want to add or change a ride?** → Edit `src/data/events.json`
- **Want to add or change a club?** → Edit `src/data/clubs.json`
- **Want something featured on the Home page?** → Set `"featured": true`
- **Everything else** can stay exactly as it is.

If you ever want to change colors, wording on the home page, or the form, just tell me and I can update those files for you.

Mahalo — keep the wheels turning.
