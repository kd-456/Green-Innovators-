

import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import fetch from 'node-fetch';

const app = express();
const port = 3000;
const WEATHER_API_KEY = '433d9883719a4001b0495725242807'; // Replace with your WeatherAPI key
const SERP_API_KEY = '8e1f0f9595e2a84041700b680c8f026288c16e0d21b04f15ed76f485c2c16d8f';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

mongoose.connect('mongodb://localhost:27017/userData', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userProfileSchema = new mongoose.Schema({
    fullName: String,
    contactInfo: String,
    location: String
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve the homepage (welcome page)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/welcome.html'));
});

// Serve the signup page
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/signup.html'));
});

// Serve the user profile edit page
app.get('/user-profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/user-profile.html'));
});

// Submit or update user profile
app.post('/api/submit-profile', async (req, res) => {
    const { fullName, contactInfo, location } = req.body;

    console.log("Received profile submission: ", req.body);

    try {
        let userProfile = await UserProfile.findOne({ contactInfo });

        if (userProfile) {
            // Update existing profile
            userProfile.fullName = fullName;
            userProfile.location = location;
            await userProfile.save();
            res.status(200).json({ success: true, message: 'Profile updated successfully' });
        } else {
            // Create new profile
            userProfile = new UserProfile({ fullName, contactInfo, location });
            await userProfile.save();
            res.status(201).json({ success: true, message: 'Profile created successfully' });
        }
    } catch (error) {
        console.error("Error submitting profile: ", error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});


app.get('/search', async (req, res) => {
    const query = req.query.q;
    const url = `https://serpapi.com/search.json?q=${query}&api_key=${SERP_API_KEY}`;

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

// Weather endpoint
app.post('/weather', async (req, res) => {
    const { location } = req.body;

    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${location}`);
        const data = await response.json();

        if (data.error) {
            res.status(400).json({ error: data.error.message });
        } else {
            res.json(data);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ error: 'An error occurred while fetching weather data.' });
    }
});

// Chatbot endpoint
app.post('/chatbot', (req, res) => {
    const userMessage = req.body.message;
    const botReply = generateBotReply(userMessage);
    res.json({ reply: botReply });
});

function generateBotReply(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
        return 'Hello! How can I assist you today?';
    }
    if (lowerCaseMessage.includes('weather')) {
        return 'Please enter your location to get the current weather.';
    }
    if (lowerCaseMessage.includes('help')) {
        return 'I am here to help you with your farming needs. Ask me anything!';
    }
    if (lowerCaseMessage.includes('fertilizer')) {
        return 'For your crops, I recommend using organic fertilizers such as compost or manure.';
    }
    if (lowerCaseMessage.includes('pesticide')) {
        return 'It is best to use eco-friendly pesticides to minimize environmental impact.';
    }
    if (lowerCaseMessage.includes('crop rotation')) {
        return 'Crop rotation helps improve soil health and reduce pests. Consider rotating legumes with cereals.';
    }

    return 'I am sorry, I do not understand. Could you please rephrase?';
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});