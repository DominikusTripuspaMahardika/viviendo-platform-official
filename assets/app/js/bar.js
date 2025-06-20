// === Scroll Progress Bar ===
window.addEventListener("scroll", () => {
  const scrollProgressBar = document.getElementById("scrollProgressBar");
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgressBar.style.width = `${scrollPercent}%`;
});