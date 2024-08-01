// document.addEventListener('DOMContentLoaded', () => {
//     const sendButton = document.getElementById('send-btn');
//     const userInput = document.getElementById('user-input');
//     const chatOutput = document.getElementById('chat-output');

//     sendButton.addEventListener('click', () => {
//         const message = userInput.value;
//         if (message.trim() !== '') {
//             addUserMessage(message);
//             sendMessageToServer(message);
//             userInput.value = '';
//         }
//     });

//     userInput.addEventListener('keypress', (e) => {
//         if (e.key === 'Enter') {
//             sendButton.click();
//         }
//     });

//     function addUserMessage(message) {
//         const messageElement = document.createElement('div');
//         messageElement.classList.add('user-message');
//         messageElement.textContent = message;
//         chatOutput.appendChild(messageElement);
//     }

//     function addBotReply(reply) {
//         const replyElement = document.createElement('div');
//         replyElement.classList.add('bot-reply');
//         replyElement.textContent = reply;
//         chatOutput.appendChild(replyElement);
//     }

//     async function sendMessageToServer(message) {
//         try {
//             const response = await fetch('/chatbot', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ message })
//             });
//             const data = await response.json();
//             addBotReply(data.reply);
//         } catch (error) {
//             console.error('Error:', error);
//             addBotReply('Sorry, there was an error processing your request.');
//         }
//     }
// });



// document.addEventListener('DOMContentLoaded', () => {
//     const sendButton = document.getElementById('send-btn');
//     const userInput = document.getElementById('user-input');
//     const chatOutput = document.getElementById('chat-output');

//     sendButton.addEventListener('click', () => {
//         const message = userInput.value;
//         if (message.trim() !== '') {
//             addUserMessage(message);
//             sendMessageToServer(message);
//             userInput.value = '';
//         }
//     });

//     userInput.addEventListener('keypress', (e) => {
//         if (e.key === 'Enter') {
//             sendButton.click();
//         }
//     });

//     function addUserMessage(message) {
//         const messageElement = document.createElement('div');
//         messageElement.classList.add('user-message');
//         messageElement.textContent = message;
//         chatOutput.appendChild(messageElement);
//     }

//     function addBotReply(reply) {
//         const replyElement = document.createElement('div');
//         replyElement.classList.add('bot-reply');
//         replyElement.textContent = reply;
//         chatOutput.appendChild(replyElement);
//     }

//     async function sendMessageToServer(message) {
//         try {
//             const response = await fetch('/chatbot', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ message })
//             });
//             const data = await response.json();
//             addBotReply(data.reply);
//         } catch (error) {
//             console.error('Error:', error);
//             addBotReply('Sorry, there was an error processing your request.');
//         }
//     }
// });
/*
document.addEventListener('DOMContentLoaded', () => {
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const chatOutput = document.getElementById('chat-output');

    // Function to handle the user's input and generate responses
    async function handleUserInput(message) {
        // Define common greetings and responses
        const greetings = ['hi', 'hello', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'];
        const statusQuestions = ['what\'s up', 'how are you', 'how are you doing', 'how\'s it going', 'what\'s happening'];
        const weatherKeywords = ['weather', 'temperature', 'forecast', 'weather in'];

        const lowerCaseMessage = message.toLowerCase();

        if (greetings.includes(lowerCaseMessage)) {
            return "Hi! How can I assist you today?";
        }

        if (statusQuestions.includes(lowerCaseMessage)) {
            return "I’m good, how can I help you today?";
        }

        if (weatherKeywords.some(keyword => lowerCaseMessage.includes(keyword))) {
            // Extract location from the message
            const locationMatch = lowerCaseMessage.match(/weather in (\w+)/);
            const location = locationMatch ? locationMatch[1] : null;

            if (location) {
                return await fetchWeather(location);
            } else {
                return "Please provide a location for the weather information.";
            }
        }

        return "I'm not sure how to respond to that. Can you please provide more details or ask something else?";
    }

    // Function to fetch weather information from the server
    async function fetchWeather(location) {
        try {
            const response = await fetch('/weather', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ location })
            });

            const data = await response.json();
            
            if (data.error) {
                return `Error: ${data.error}`;
            }

            const weather = data.current;
            const locationInfo = data.location;

            return `
                Weather in ${locationInfo.name}, ${locationInfo.region}, ${locationInfo.country}:
                Temperature: ${weather.temp_c}°C
                Condition: ${weather.condition.text}
                Humidity: ${weather.humidity}%
                Wind: ${weather.wind_kph} kph
            `;
        } catch (error) {
            console.error('Error:', error);
            return "Error: Could not retrieve weather data.";
        }
    }

    // Function to append messages to chat output
    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.className = `${sender}-message`;
        messageElement.innerHTML = message; // Use innerHTML to allow multiline responses
        chatOutput.appendChild(messageElement);
        chatOutput.scrollTop = chatOutput.scrollHeight; // Scroll to the bottom
    }

    // Handle the send button click
    sendBtn.addEventListener('click', async () => {
        const message = userInput.value.trim();
        if (message) {
            appendMessage('user', message);

            // Generate bot response based on user input
            const botResponse = await handleUserInput(message);
            appendMessage('bot', botResponse);

            userInput.value = '';
        }
    });

    // Handle pressing 'Enter' key to send message
    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendBtn.click();
        }
    });
});

*/
document.addEventListener('DOMContentLoaded', () => {
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const chatOutput = document.getElementById('chat-output');

    // Function to handle the user's input and generate responses
    async function handleUserInput(message) {
        const lowerCaseMessage = message.toLowerCase();
        const greetings = ['hi', 'hello', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'];
        const statusQuestions = ['what\'s up', 'how are you', 'how are you doing', 'how\'s it going', 'what\'s happening'];
        const weatherKeywords = ['weather', 'temperature', 'forecast', 'weather in'];
        const predefinedQuestions = ['best crops to grow','soil fertility', 'improve soil fertility', 'latest farming techniques'];

        if (greetings.includes(lowerCaseMessage)) {
            return "Hi! How can I assist you today?";
        }

        if (statusQuestions.includes(lowerCaseMessage)) {
            return "I’m good, how can I help you today?";
        }

        if (weatherKeywords.some(keyword => lowerCaseMessage.includes(keyword))) {
            return "For weather updates, please go to the Weather Update panel on the navigation bar and search for the location you're interested in.";
        }

        if (predefinedQuestions.some(q => lowerCaseMessage.includes(q))) {
            return "For information on soil fertility or the latest farming techniques, please go to the Education Resources section on the navigation bar.";
        }

        return "I'm not sure how to respond to that. Can you please provide more details or ask something else?";
    }

    // Function to fetch weather information from the server
    async function fetchWeather(location) {
        try {
            const response = await fetch('/weather', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ location })
            });

            const data = await response.json();
            
            if (data.error) {
                return `Error: ${data.error}`;
            }

            const weather = data.current;
            const locationInfo = data.location;

            return `
                Weather in ${locationInfo.name}, ${locationInfo.region}, ${locationInfo.country}:
                Temperature: ${weather.temp_c}°C
                Condition: ${weather.condition.text}
                Humidity: ${weather.humidity}%
                Wind: ${weather.wind_kph} kph
            `;
        } catch (error) {
            console.error('Error:', error);
            return "Error: Could not retrieve weather data.";
        }
    }

    // Function to fetch FAQ answers from the server
    async function fetchFAQ(question) {
        try {
            const response = await fetch('/faq', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ question })
            });

            const data = await response.json();
            return data.answer;
        } catch (error) {
            console.error('Error:', error);
            return "Error: Could not retrieve answer.";
        }
    }

    // Function to append messages to chat output
    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.className = `${sender}-message`;
        messageElement.innerHTML = message; // Use innerHTML to allow multiline responses
        chatOutput.appendChild(messageElement);
        chatOutput.scrollTop = chatOutput.scrollHeight; // Scroll to the bottom
    }

    // Handle the send button click
    sendBtn.addEventListener('click', async () => {
        const message = userInput.value.trim();
        if (message) {
            appendMessage('user', message);

            // Generate bot response based on user input
            const botResponse = await handleUserInput(message);
            appendMessage('bot', botResponse);

            userInput.value = '';
        }
    });

    // Handle pressing 'Enter' key to send message
    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendBtn.click();
        }
    });
});
