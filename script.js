const chatOutput = document.getElementById("chat-output");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");
let isDark = true;

sendBtn.addEventListener("click", function () {
  const text = chatInput.value.trim();
  if (text !== "") {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${isDark ? "dark" : "light"}`;
    messageDiv.textContent = text;
    chatOutput.appendChild(messageDiv);
    chatOutput.scrollTop = chatOutput.scrollHeight;
    chatInput.value = "";
    isDark = !isDark;
  }
});
