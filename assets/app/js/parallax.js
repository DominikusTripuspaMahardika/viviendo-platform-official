//Background Parallax
const heroBg = document.getElementById("heroBg");

let latestScrollY = 0;
let ticking = false;

function updateParallax() {
  const offset = latestScrollY * 0.3; // Parallax factor
  const blur = Math.min(latestScrollY / 100, 5); // Blur max 5px

  heroBg.style.transform = `translateY(${offset}px)`;
  heroBg.style.filter = `blur(${blur}px)`;

  ticking = false;
}

window.addEventListener("scroll", () => {
  latestScrollY = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(updateParallax);
    ticking = true;
  }
});