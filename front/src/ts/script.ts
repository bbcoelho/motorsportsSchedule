import { EventsData } from "./types";

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
    let element = document.getElementById('motoGPDate');
    if (element) {
        element.textContent = content.motoGP.date;
    }
    element = document.getElementById('motoGPTrack');
    if (element) {
        element.textContent = content.motoGP.track;
    }
    element = document.getElementById('motoGPQualyTime');
    if (element && content.motoGP.qualifyingTime) {
        element.textContent = content.motoGP.qualifyingTime;
    }
    element = document.getElementById('motoGPSprintRaceTime');
    if (element && content.motoGP.sprintRaceTime) {
        element.textContent = content.motoGP.sprintRaceTime;
    }
    element = document.getElementById('motoGPMainRaceTime');
    if (element && content.motoGP.mainRaceTime) {
        element.textContent = content.motoGP.mainRaceTime;
    }

    // F1
    element = document.getElementById('f1Date');
    if (element) {
        element.textContent = content.f1.date;
    }
    element = document.getElementById('f1Track');
    if (element) {
        element.textContent = content.f1.track;
    }
    element = document.getElementById('f1QualyTime');
    if (element && content.f1.qualifyingTime) {
        element.textContent = content.f1.qualifyingTime;
    }
    element = document.getElementById('f1SprintRaceTime');
    if (element && content.f1.sprintRaceTime) {
        element.textContent = content.f1.sprintRaceTime;
    }
    element = document.getElementById('f1MainRaceTime');
    if (element && content.f1.mainRaceTime) {
        element.textContent = content.f1.mainRaceTime;
    }

    // WEC
    element = document.getElementById('wecDate');
    if (element) {
        element.textContent = content.wec.date;
    }
    element = document.getElementById('wecTrack');
    if (element) {
        element.textContent = content.wec.track;
    }
    element = document.getElementById('wecQualyTime');
    if (element && content.wec.qualifyingTime) {
        element.textContent = content.wec.qualifyingTime;
    }
    element = document.getElementById('wecMainRaceTime');
    if (element && content.wec.mainRaceTime) {
        element.textContent = content.wec.mainRaceTime;
    }

    // WRC
    element = document.getElementById('wrcDate');
    if (element) {
        element.textContent = content.wrc.date;
    }
    element = document.getElementById('wrcTrack');
    if (element) {
        element.textContent = content.wrc.track;
    }
}
