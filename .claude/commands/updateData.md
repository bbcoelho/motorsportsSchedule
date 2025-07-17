# Update data.json file

This command allows automatic updating of race schedules without manual data entry.

## Steps

1. Use WebSearch tool to find the next upcoming MotoGP race information:
   1. Search at MotoGP official web site: https://www.motogp.com/en/calendar
   2. Identify the next race from today's date  
   3. In the next race page, identify the information to update data.json file
    - "date": is the Grand Prix date and place. For Czechia race, as an exemple, it would be: "date": "Date: Sun, Jul 20 - Czech GP" 

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