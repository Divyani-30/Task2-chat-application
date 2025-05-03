const socket = io();

function sendMessage() {
  const input = document.getElementById('message');
  const msg = input.value;
  if (msg.trim() !== "") {
    socket.emit('chat message', msg);
    input.value = '';
  }
}

socket.on('chat message', function(msg) {
  const chatBox = document.getElementById('chat-box');
  const messageElement = document.createElement('div');
  messageElement.textContent = msg;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
});
