# motorsportsSchedule

A simple mobile-first motorsports weekend race schedule, built as a PWA so it can be installed and used like a mobile app.

The goal is to keep upcoming race weekend information updated in one place, including dates, tracks, qualifying sessions, sprint races, and main races for supported championships.

## Updating race schedules with OMP

Run `/update-races` in OMP from the project root to research and update `back/data/data.json`. Optional instructions can follow the command, for example `/update-races only update F1`.

The command lives in `.omp/commands/update-races.md`. Restart OMP or run `/reload-plugins` after adding or changing it.
