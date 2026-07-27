# Oahu Cycle Hub

Lightweight custom Next.js site that aggregates cycling **clubs** and **events** for Oʻahu / Hawaiʻi.

Built with:
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Local JSON data files (easy to edit or later swap for Airtable / Supabase)

## Quick Start

```bash
cd cycling-aggregator
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/
    page.tsx          # Home (upcoming events + featured clubs)
    events/page.tsx   # Full events list
    clubs/page.tsx    # Clubs directory
    submit/page.tsx   # Simple submit form (client-side demo)
  components/         # Header, Footer, EventCard, ClubCard
  data/
    events.json       # Edit this to add/update events
    clubs.json        # Edit this to add/update clubs
  lib/
    types.ts
    data.ts           # Helpers (upcoming filter, date format, etc.)
```

## Adding Content

### Events
Edit `src/data/events.json`. Required fields:

```json
{
  "id": "unique-slug",
  "title": "Ride name",
  "date": "2026-08-15",
  "startTime": "07:00",
  "location": "Start point",
  "type": "Group Ride",
  "distance": "30-40 miles",
  "club": "Club name",
  "description": "Short blurb",
  "link": "https://...",
  "featured": false
}
```

### Clubs
Edit `src/data/clubs.json` similarly.

## Deploy

Easiest path: push to GitHub → import into Vercel (free).  
Zero config needed for this stack.

## Next Upgrades (when you want them)

1. **Real form backend**  
   - Formspree / Basin (easiest)  
   - or Next.js API route that writes to Airtable / Notion / a Google Sheet

2. **Airtable as CMS**  
   - Create a base with Events + Clubs tables  
   - Use the Airtable API (or their official JS client) in `lib/data.ts`  
   - Non-technical people can then edit the data in Airtable

3. **Map view**  
   - Add Mapbox or Leaflet and plot start locations

4. **Filters**  
   - Type (road / gravel / MTB), area (Windward / Central / North Shore), date range

5. **Calendar export**  
   - .ics download or Google Calendar links

## Notes

- Data is static JSON → rebuild or revalidate when you change it.
- The submit form currently only shows a success state (no real persistence). Wire it up when ready.
- Sample data includes Mauka Cycling Club, HBL, OCC, Tradewind, and Hawaii Cycling Club plus a few real/near-term events (Honolulu Century Ride etc.).

Mahalo — keep the wheels turning.
