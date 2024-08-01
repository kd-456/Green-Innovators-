
// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const app = express();
// const port = 3000;

// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/html/index.html'));
// });

// app.post('/chatbot', (req, res) => {
//     const userMessage = req.body.message;
//     const botReply = generateBotReply(userMessage);
//     res.json({ reply: botReply });
// });

// function generateBotReply(userMessage) {
//     const lowerCaseMessage = userMessage.toLowerCase();

//     if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
//         return 'Hello! How can I assist you today?';
//     }
//     if (lowerCaseMessage.includes('weather')) {
//         return 'The current weather is sunny with a temperature of 30°C.';
//     }
//     if (lowerCaseMessage.includes('help')) {
//         return 'I am here to help you with your farming needs. Ask me anything!';
//     }
//     if (lowerCaseMessage.includes('fertilizer')) {
//         return 'For your crops, I recommend using organic fertilizers such as compost or manure.';
//     }
//     if (lowerCaseMessage.includes('pesticide')) {
//         return 'It is best to use eco-friendly pesticides to minimize environmental impact.';
//     }
//     if (lowerCaseMessage.includes('crop rotation')) {
//         return 'Crop rotation helps improve soil health and reduce pests. Consider rotating legumes with cereals.';
//     }

//     return 'I am sorry, I do not understand. Could you please rephrase?';
// }

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });





// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const dotenv = require('dotenv');
// // const { Configuration, OpenAIApi } = require('openai');
// // const path = require('path');

// // dotenv.config();

// // const app = express();
// // const port = 3000;

// // const configuration = new Configuration({
// //   apiKey: process.env.OPENAI_API_KEY,
// // });
// // const openai = new OpenAIApi(configuration);

// // app.use(bodyParser.json());
// // app.use(express.static(path.join(__dirname, 'public')));

// // app.get('/', (req, res) => {
// //   res.sendFile(path.join(__dirname, 'public/html/index.html'));
// // });

// // app.post('/chatbot', async (req, res) => {
// //   const userMessage = req.body.message;

// //   try {
// //     const completion = await openai.createChatCompletion({
// //       model: 'gpt-3.5-turbo',
// //       messages: [{ role: 'user', content: userMessage }],
// //       max_tokens: 150,
// //       temperature: 0.7,
// //     });

// //     const botReply = completion.data.choices[0].message.content.trim();
// //     res.json({ reply: botReply });
// //   } catch (error) {
// //     console.error('Error:', error);
// //     res.status(500).json({ error: 'An error occurred while processing your request.' });
// //   }
// // });

// // app.listen(port, () => {
// //   console.log(`Server is running on http://localhost:${port}`);
// // });
//
//


// const WEATHER_API_KEY = '433d9883719a4001b0495725242807'




// import express from 'express';
// import bodyParser from 'body-parser';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import fetch from 'node-fetch';

// const app = express();
// const port = 3000;
// const WEATHER_API_KEY = '433d9883719a4001b0495725242807'; // Replace with your WeatherAPI key

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/html/index.html'));
// });

// app.post('/chatbot', (req, res) => {
//     const userMessage = req.body.message;
//     const botReply = generateBotReply(userMessage);
//     res.json({ reply: botReply });
// });

// app.post('/weather', async (req, res) => {
//     const { location } = req.body;

//     try {
//         const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${location}`);
//         const data = await response.json();

//         if (data.error) {
//             res.status(400).json({ error: data.error.message });
//         } else {
//             res.json(data);
//         }
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//         res.status(500).json({ error: 'An error occurred while fetching weather data.' });
//     }
// });

// function generateBotReply(userMessage) {
//     const lowerCaseMessage = userMessage.toLowerCase();

//     if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
//         return 'Hello! How can I assist you today?';
//     }
//     if (lowerCaseMessage.includes('weather')) {
//         return 'Please enter your location to get the current weather.';
//     }
//     if (lowerCaseMessage.includes('help')) {
//         return 'I am here to help you with your farming needs. Ask me anything!';
//     }
//     if (lowerCaseMessage.includes('fertilizer')) {
//         return 'For your crops, I recommend using organic fertilizers such as compost or manure.';
//     }
//     if (lowerCaseMessage.includes('pesticide')) {
//         return 'It is best to use eco-friendly pesticides to minimize environmental impact.';
//     }
//     if (lowerCaseMessage.includes('crop rotation')) {
//         return 'Crop rotation helps improve soil health and reduce pests. Consider rotating legumes with cereals.';
//     }

//     return 'I am sorry, I do not understand. Could you please rephrase?';
// }

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });





// import express from 'express';
// import bodyParser from 'body-parser';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import fetch from 'node-fetch';

// const app = express();
// const port = 3000;
// const WEATHER_API_KEY = '433d9883719a4001b0495725242807'; // Replace with your WeatherAPI key

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Handle root URL requests
// app.get('/', (req, res) => {
//     console.log('Received request for root URL');
//     res.sendFile(path.join(__dirname, 'public/html/index.html'));
// });

// // Handle Dialogflow webhook requests
// app.post('/webhook', async (req, res) => {
//     console.log('Received webhook request:', req.body);
//     const intent = req.body.queryResult.intent.displayName; 
//     const parameters = req.body.queryResult.parameters; 

//     let responseText = '';

//     switch (intent) {
//         case 'Weather':
//             const location = parameters.location;
//             responseText = await getWeather(location);
//             break;
//         // Handle other intents...
//         default:
//             responseText = 'I am sorry, I do not understand. Could you please rephrase?';
//             break;
//     }

//     console.log('Response text:', responseText);
//     res.json({
//         fulfillmentText: responseText
//     });
// });

// async function getWeather(location) {
//     try {
//         const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${location}`);
//         const data = await response.json();

//         if (data.error) {
//             return `Error: ${data.error.message}`;
//         } else {
//             return `The current weather in ${location} is ${data.current.condition.text} with a temperature of ${data.current.temp_c}°C.`;
//         }
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//         return 'An error occurred while fetching weather data.';
//     }
// }

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });







// import express from 'express';
// import bodyParser from 'body-parser';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import fetch from 'node-fetch';
// import { SessionsClient } from '@google-cloud/dialogflow';
// import { v4 as uuidv4 } from 'uuid';
// import dotenv from 'dotenv'; // Import dotenv

// dotenv.config(); // Load environment variables from .env file

// const app = express();
// const port = 3000;
// const WEATHER_API_KEY = '433d9883719a4001b0495725242807'; // Replace with your WeatherAPI key
// const PROJECT_ID = 'greeninnovatorsbot-jr9n'; // Replace with your Dialogflow project ID

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/html/index.html'));
// });

// app.post('/chatbot', async (req, res) => {
//     const userMessage = req.body.message;
//     const sessionId = uuidv4(); // Generate a unique session ID for each request

//     try {
//         const response = await detectIntent(userMessage, sessionId);
//         res.json({ reply: response });
//     } catch (error) {
//         console.error('Error communicating with Dialogflow:', error);
//         res.status(500).json({ reply: 'An error occurred while processing your request.' });
//     }
// });

// app.post('/weather', async (req, res) => {
//     const { location } = req.body;

//     try {
//         const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${location}`);
//         const data = await response.json();

//         if (data.error) {
//             res.status(400).json({ error: data.error.message });
//         } else {
//             res.json(data);
//         }
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//         res.status(500).json({ error: 'An error occurred while fetching weather data.' });
//     }
// });

// async function detectIntent(message, sessionId) {
//     const sessionClient = new SessionsClient();
//     const sessionPath = sessionClient.projectAgentSessionPath(PROJECT_ID, sessionId);

//     const request = {
//         session: sessionPath,
//         queryInput: {
//             text: {
//                 text: message,
//                 languageCode: 'en-US',
//             },
//         },
//     };

//     try {
//         const responses = await sessionClient.detectIntent(request);
//         const result = responses[0].queryResult;

//         if (result.fulfillmentText) {
//             return result.fulfillmentText;
//         } else {
//             return 'I am sorry, I do not understand. Could you please rephrase?';
//         }
//     } catch (error) {
//         console.error('Error detecting intent:', error);
//         throw new Error('Error detecting intent');
//     }
// }

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });




import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';
import { SessionsClient } from '@google-cloud/dialogflow';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv'; // Import dotenv

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = 3000;
const WEATHER_API_KEY = '433d9883719a4001b0495725242807'; // Replace with your WeatherAPI key
const PROJECT_ID = 'greeninnovatorsbot-jr9n'; // Replace with your Dialogflow project ID

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/index.html'));
});

app.post('/chatbot', async (req, res) => {
    const userMessage = req.body.message;
    const sessionId = uuidv4(); // Generate a unique session ID for each request

    try {
        const response = await detectIntent(userMessage, sessionId);
        res.json({ reply: response });
    } catch (error) {
        console.error('Error communicating with Dialogflow:', error);
        res.status(500).json({ reply: 'An error occurred while processing your request.' });
    }
});

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

async function detectIntent(message, sessionId) {
    const sessionClient = new SessionsClient();
    const sessionPath = sessionClient.projectAgentSessionPath(PROJECT_ID, sessionId);

    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: message,
                languageCode: 'en-US',
            },
        },
    };

    try {
        const responses = await sessionClient.detectIntent(request);
        const result = responses[0].queryResult;

        if (result.intent.displayName === 'WeatherIntent') {
            const location = result.parameters.fields.location.stringValue;
            const weatherData = await getWeather(location);
            return weatherData;
        } else if (result.fulfillmentText) {
            return result.fulfillmentText;
        } else {
            return 'I am sorry, I do not understand. Could you please rephrase?';
        }
    } catch (error) {
        console.error('Error detecting intent:', error);
        throw new Error('Error detecting intent');
    }
}

async function getWeather(location) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${location}`);
        const data = await response.json();

        if (data.error) {
            return `Sorry, I couldn't get the weather for ${location}. ${data.error.message}`;
        } else {
            return `The current weather in ${location} is ${data.current.condition.text} with a temperature of ${data.current.temp_c}°C (${data.current.temp_f}°F).`;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return 'An error occurred while fetching the weather data.';
    }
}

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
