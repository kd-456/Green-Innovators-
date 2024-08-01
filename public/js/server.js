import express from 'express';
import path from 'path';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static(__dirname)); // Serve static files from the current directory

app.get('/search', async (req, res) => {
    const query = req.query.q;
    const apiKey = '8e1f0f9595e2a84041700b680c8f026288c16e0d21b04f15ed76f485c2c16d8f'; // Replace with your SerpApi API key
    const url = `https://serpapi.com/search.json?q=${query}&api_key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send(`Error fetching data: ${error.message}`);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
