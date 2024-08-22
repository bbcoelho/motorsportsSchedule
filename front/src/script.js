document.addEventListener('DOMContentLoaded', function() {
    // URL of the JSON file
    const url = 'http://127.0.0.1:3000';

    // Fetch the JSON file
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            // Convert JSON data to a string with pretty print
            const jsonString = JSON.stringify(data, null, 2);

            // Set the JSON string as the content of the HTML element
            document.getElementById('motoGPDate').textContent = jsonString;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            document.getElementById('motoGPDate').textContent = 'Error loading JSON data.';
        });
});
