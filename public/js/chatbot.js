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



document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const chatOutput = document.getElementById('chat-output');

    sendButton.addEventListener('click', () => {
        const message = userInput.value;
        if (message.trim() !== '') {
            addUserMessage(message);
            sendMessageToServer(message);
            userInput.value = '';
        }
    });

    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });

    function addUserMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('user-message');
        messageElement.textContent = message;
        chatOutput.appendChild(messageElement);
    }

    function addBotReply(reply) {
        const replyElement = document.createElement('div');
        replyElement.classList.add('bot-reply');
        replyElement.textContent = reply;
        chatOutput.appendChild(replyElement);
    }

    async function sendMessageToServer(message) {
        try {
            const response = await fetch('/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message })
            });
            const data = await response.json();
            addBotReply(data.reply);
        } catch (error) {
            console.error('Error:', error);
            addBotReply('Sorry, there was an error processing your request.');
        }
    }
});
