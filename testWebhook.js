import fetch from 'node-fetch';

const url = 'https://bbf4-103-25-231-126.ngrok-free.app/webhook';

const payload = {
    queryResult: {
        intent: {
            displayName: 'Weather'
        },
        parameters: {
            location: 'Mumbai'
        }
    }
};

async function testWebhook() {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        console.log('Response:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

testWebhook();
