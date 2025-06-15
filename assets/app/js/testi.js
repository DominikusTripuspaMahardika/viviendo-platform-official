document.addEventListener("DOMContentLoaded", () => {
  const chatWindow = document.getElementById("chatWindow");
  const typingIndicator = document.getElementById("typingIndicator");

  const messages = [
    { sender: "user", text: "Aplikasi ini keren banget! Bener-bener bantu install PvZ2 tanpa ribet." },
    { sender: "system", text: "Terima kasih! Kami senang ViVienDo membantu kamu." },
    { sender: "user", text: "Fitur modifikasinya lengkap, gak nyesel install." },
    { sender: "system", text: "Jangan lupa cek juga update terbaru dari komunitas ya!" },
  ];

  let messageIndex = 0;

  function showTypingIndicator(show) {
    typingIndicator.style.visibility = show ? "visible" : "hidden";
  }

  function addMessage(message) {
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${message.sender}`;
    bubble.textContent = message.text;
    chatWindow.appendChild(bubble);
    bubble.scrollIntoView({ behavior: "smooth" });
  }

  function showNextMessage() {
    if (messageIndex >= messages.length) return;

    showTypingIndicator(true);

    setTimeout(() => {
      showTypingIndicator(false);
      addMessage(messages[messageIndex]);
      messageIndex++;
      setTimeout(showNextMessage, 1200); // jeda antar pesan
    }, 1500); // durasi animasi "typing"
  }

  showNextMessage();
});
