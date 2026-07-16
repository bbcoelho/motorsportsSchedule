import { registerSW } from "virtual:pwa-register";
import { EventsData } from "./types";

// Reloads the app when a new precached version is ready.
const updateServiceWorker = registerSW({
	immediate: true,
	onNeedRefresh() {
		void updateServiceWorker(true);
	},
});

document.addEventListener('DOMContentLoaded', async function () {
    // URL of the JSON file: DEV or Prod
    // const url = 'http://127.0.0.1:3000';
    const url = 'https://motorsportsschedule.onrender.com';

    // Fetch the JSON file
    let content: EventsData | undefined = undefined;

    await fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse the JSON response
        })
        .then((data) => {
            content = data as EventsData;
            setData(content);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});

function setData(content: EventsData): void {
	// MotoGP
	setText('motoGPDate', content.motoGP.date);
	setText('motoGPTrack', content.motoGP.track);
	setText('motoGPQualyTime', content.motoGP.qualifyingTime);
	setText('motoGPSprintRaceTime', content.motoGP.sprintRaceTime);
	setText('motoGPMainRaceTime', content.motoGP.mainRaceTime);

	// F1
	setText('f1Date', content.f1.date);
	setText('f1Track', content.f1.track);
	setText('f1QualyTime', content.f1.qualifyingTime);
	setText('f1SprintRaceTime', content.f1.sprintRaceTime);
	setText('f1MainRaceTime', content.f1.mainRaceTime);

	// F2
	setText('f2Date', content.f2.date);
	setText('f2Track', content.f2.track);
	setText('f2QualyTime', content.f2.qualifyingTime);
	setText('f2SprintRaceTime', content.f2.sprintRaceTime);
	setText('f2MainRaceTime', content.f2.mainRaceTime);

	// WEC
	setText('wecDate', content.wec.date);
	setText('wecTrack', content.wec.track);
	setText('wecQualyTime', content.wec.qualifyingTime);
	setText('wecMainRaceTime', content.wec.mainRaceTime);
}

function setText(id: string, value?: string): void {
	const element = document.getElementById(id);

	if (!element || !value) {
		return;
	}

	// Apply content and flag uncertain times for badge styling.
	element.textContent = value;
	element.classList.toggle('is-tbc', value.includes('TBC'));
}
