//Loader Animation
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.classList.add("fade-out");
  setTimeout(() => loader.remove(), 800);
});