export type RaceData = {
    date: string
    track: string
    qualifyingTime?: string
    sprintRaceTime?: string
    mainRaceTime?: string
}

export type EventsData = {
    motoGP: RaceData
    f1: RaceData
    wec: RaceData
    wrc: RaceData
}