
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/index.html'));
});

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
        return 'The current weather is sunny with a temperature of 30°C.';
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
    console.log(`Server running at http://localhost:${port}`);
});





// const express = require('express');
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');
// const { Configuration, OpenAIApi } = require('openai');
// const path = require('path');

// dotenv.config();

// const app = express();
// const port = 3000;

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/html/index.html'));
// });

// app.post('/chatbot', async (req, res) => {
//   const userMessage = req.body.message;

//   try {
//     const completion = await openai.createChatCompletion({
//       model: 'gpt-3.5-turbo',
//       messages: [{ role: 'user', content: userMessage }],
//       max_tokens: 150,
//       temperature: 0.7,
//     });

//     const botReply = completion.data.choices[0].message.content.trim();
//     res.json({ reply: botReply });
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'An error occurred while processing your request.' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });