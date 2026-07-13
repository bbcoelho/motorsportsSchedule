---
description: Search the web and update motorsports race data.
agent: build
---

Search the web and update `back/data/data.json` with the next/current motorsports race schedule.

Requirements:

- Update only `back/data/data.json` unless the user explicitly asks for another file.
- Preserve the existing JSON schema and top-level series keys: `motoGP`, `f1`, `f2`, and `wec`.
- Keep the current display string format used by the app:
  - `date`: `Date: Sun, Jul 12 - German GP`
  - `track`: `Track: Sachsenring`
  - `qualifyingTime`: `Qualifying: 11/07 - 05:50`
  - `sprintRaceTime`: `Sprint Race: 11/07 - 10:00`
  - `mainRaceTime`: `Main Race: 12/07 - 09:00` or `Feature Race: 19/07 - TBC` when appropriate.
- Convert all times to Brazilian time, using the `America/Sao_Paulo` timezone.
- Prefer official sources first:
  - MotoGP: `motogp.com`
  - F1: `formula1.com`
  - F2: `fiaformula2.com`
  - WEC: `fia.com`, `fiawec.com`, or official event pages
- Use reliable public sources only when official pages do not expose enough information.
- Use `TBC` when session times are unavailable or not confidently confirmed.
- Remove optional session fields when the event does not include that session, such as no F1 sprint weekend.
- Keep JSON indentation with tabs.
- Validate the JSON after editing.
- Summarize the changed series, sources used, and any `TBC` or uncertain values.

If the user passes extra instructions, apply them as constraints:

`$ARGUMENTS`
