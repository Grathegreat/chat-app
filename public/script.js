const socket = io();

let username = null;

function joinChat() {
    const input = document.getElementById('usernameInput').value.trim();
    if (input.length > 0) {
        socket.emit('new_user', input);
        username = input;
        document.getElementById('usernameModal').style.display = 'none';
        document.getElementById('chat').style.display = 'flex';
    }
}

socket.on('username_error', (error) => {
    alert(error);
});

function sendMessage() {
    const message = document.getElementById('messageInput').value.trim();
    if (message.length > 0) {
        socket.emit('chat_message', { username: username, message: message });
        document.getElementById('messageInput').value = '';
    }
}

socket.on('chat_message', (data) => {
    const messagesDiv = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = `${data.username}: ${data.message}`;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
});

socket.on('user_connected', (users) => {
    console.log(users);
});

socket.on('user_disconnected', (users) => {
    console.log(users);
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('usernameModal').style.display = 'block';
});
