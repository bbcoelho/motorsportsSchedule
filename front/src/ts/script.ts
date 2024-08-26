import { RaceData } from "./RaceData";

document.addEventListener('DOMContentLoaded', async function () {
    // URL of the JSON file
    const url = 'http://127.0.0.1:3000';

    // Fetch the JSON file
    let content: RaceData = {
        date: "",
        track: "",
        mainRaceTime: ""
    };

    await fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse the JSON response
        })
        .then((data) => {
            console.log(data);
            content = data as RaceData;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            content.date = 'Error loading JSON data.';
        });

    const element = document.getElementById('motoGPDate');
    if (element) {
        element.textContent = content.date;
    }
});
