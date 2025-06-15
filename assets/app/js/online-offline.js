//Simulasi Online/Offline
function toggleRandomStatus() {
  const allDots = document.querySelectorAll(".status-dot");
  allDots.forEach((dot) => {
    const isOnline = Math.random() > 0.5;
    dot.setAttribute("data-status", isOnline ? "online" : "offline");
  });
}

// Ganti status setiap 5–10 detik (randomized interval)
function loopStatusToggle() {
  toggleRandomStatus();
  const nextDelay = Math.floor(Math.random() * 5000) + 5000;
  setTimeout(loopStatusToggle, nextDelay);
}

document.addEventListener("DOMContentLoaded", loopStatusToggle);