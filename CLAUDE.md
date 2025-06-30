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

## Planned Improvements (from TODOS.txt)

- Add F2 and WSBK schedules
- Refactor to use element ID prefixes and iteration instead of manual DOM updates
- Add push notifications before races
- Improve PWA manifest with ID and screenshots
- Enhanced accessibility with semantic HTML elements