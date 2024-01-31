// client.js
const socket = new WebSocket('ws://localhost:3000');

socket.addEventListener('open', (event) => {
    console.log('WebSocket connection opened');
});

socket.addEventListener('message', (event) => {
    const chatDiv = document.getElementById('chat');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = event.data;
    chatDiv.appendChild(messageDiv);
});

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;

    if (message.trim() !== '') {
        // Send the message to the server
        socket.send(message);
        messageInput.value = '';
    }
}
