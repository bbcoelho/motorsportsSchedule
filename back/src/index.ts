import { readFileSync } from 'fs';

const server = Bun.serve({
    port: 3000,
    fetch(req) {
        const jsonFilePath = "./data/data.json";

        // Add CORS headers
        const headers = {
            "Access-Control-Allow-Origin": "*", // Allow all origins
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
            "Content-Type": "application/json",
        };

        // Read the JSON file
        const jsonData = readFileSync(jsonFilePath, "utf-8");
        // Respond with the JSON data
        return new Response(jsonData, { headers });
    },
});

console.log(`Listening on http://localhost:${server.port} ...`);