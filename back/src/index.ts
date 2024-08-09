import { readFileSync } from 'fs';

const server = Bun.serve({
    port: 3000,
    fetch(req) {
        const jsonFilePath = "./data/data.json";
        // Read the JSON file
        const jsonData = readFileSync(jsonFilePath, "utf-8");
        // Respond with the JSON data
        return new Response(jsonData, {
            headers: { "Content-Type": "application/json" },
        });
    },
});

console.log(`Listening on http://localhost:${server.port} ...`);