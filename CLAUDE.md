# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Progressive Web App (PWA) that displays motorsports event schedules for F1, F2, MotoGP, and WEC. The project consists of a Bun-based backend API serving static data and a Vite-powered frontend with TypeScript and PWA capabilities.

## Architecture

**Monorepo Structure:**
- `back/` - Bun server serving JSON data via simple HTTP API
- `front/` - Vite + TypeScript frontend with PWA configuration

**Backend (`back/`):**
- Simple Bun HTTP server (`src/index.ts`) serving static JSON data from `data/data.json`
- CORS-enabled API endpoint that returns motorsports schedule data
- Single endpoint serves all race information

**Frontend (`front/`):**
- TypeScript application with DOM manipulation for displaying race data
- PWA configured with Vite PWA plugin and service worker
- Fetches data from backend API (switchable between dev/prod URLs)
- Manual DOM updates using `getElementById` pattern for each race series

## Common Development Commands

**Backend Development:**
```bash
cd back
bun run dev          # Start development server on port 3000
```

**Frontend Development:**
```bash
cd front
bun run dev          # Start Vite dev server
bun run build        # Build for production (runs tsc + vite build)
bun run preview      # Preview production build
```

## Data Structure

The application expects race data in this TypeScript structure:
```typescript
type RaceData = {
    date: string
    track: string
    qualifyingTime?: string
    sprintRaceTime?: string
    mainRaceTime?: string
}

type EventsData = {
    motoGP: RaceData
    f1: RaceData
    f2: RaceData
    wec: RaceData
}
```

## Key Implementation Details

- Frontend uses hardcoded element IDs following pattern: `{series}{DataType}` (e.g., `f1Date`, `motoGPTrack`)
- API URL is configured in `front/src/ts/script.ts` (toggle between dev/prod)
- PWA manifest configured in `front/vite.config.js` with caching for API endpoint
- No frameworks used for DOM manipulation - plain TypeScript with direct element access
- All race data updates happen in `setData()` function in `front/src/ts/script.ts`

## Custom Slash Commands

### /update-races
When the user types `/update-races`, perform the following steps:
1. Use WebSearch tool to find the next upcoming race information for:
   - MotoGP: Search for "next MotoGP race 2025 schedule qualifying sprint main race times"
   - Formula 1: Search for "next Formula 1 race 2025 schedule qualifying sprint main race times"  
   - Formula 2: Search for "next Formula 2 race 2025 schedule qualifying sprint main race times"
   - WEC: Search for "next WEC World Endurance Championship race 2025 schedule qualifying main race times"

2. Extract the following information for each category:
   - Race date and name
   - Track/circuit name
   - Qualifying time
   - Sprint race time (if applicable, use "------" if not)
   - Main race time

3. Format the data according to the existing structure in `back/data/data.json`

4. Use the Edit tool to update `back/data/data.json` with the new race information

5. Confirm the update was successful

**IMPORTANT**: Web search results are often inaccurate or incomplete. Always verify information from multiple sources and cross-reference with official websites. If uncertain about timing details, use "TBC" (To Be Confirmed) rather than incorrect information.

**Reference Example (July 2025):**
```json
{
    "motoGP": {
        "date": "Date: Sun, Jul 13 - German GP",
        "track": "Track: Sachsenring",
        "qualifyingTime": "Qualifying: 12/07 - 05:50",
        "sprintRaceTime": "Sprint Race: 12/07 - 10:00",
        "mainRaceTime": "Main Race: 13/07 - 09:00"
    },
    "f1": {
        "date": "Date: Sun, Jul 27 - Belgian GP",
        "track": "Track: Spa-Francorchamps",
        "qualifyingTime": "Qualifying: 26/07 - 11:00",
        "sprintRaceTime": "Sprint Race: 26/07 - 17:00",
        "mainRaceTime": "Main Race: 27/07 - 10:00"
    },
    "f2": {
        "date": "Date: Sun, Jul 27 - Belgian GP",
        "track": "Track: Spa-Francorchamps",
        "qualifyingTime": "Qualifying: 25/07 - TBC",
        "sprintRaceTime": "Sprint Race: 26/07 - TBC",
        "mainRaceTime": "Main Race: 27/07 - TBC"
    },
    "wec": {
        "date": "Date: Sun, Jul 13",
        "track": "6 Hours of São Paulo",
        "qualifyingTime": "Qualifying: 12/07 - 14:45",
        "mainRaceTime": "Main Race: 13/07 - 11:30"
    }
}
```

This command allows automatic updating of race schedules without manual data entry.

## Planned Improvements (from TODOS.txt)

- Add F2 and WSBK schedules
- Refactor to use element ID prefixes and iteration instead of manual DOM updates
- Add push notifications before races
- Improve PWA manifest with ID and screenshots
- Enhanced accessibility with semantic HTML elements