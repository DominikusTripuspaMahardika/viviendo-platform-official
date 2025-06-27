// === Scroll Progress NavBar ===
window.addEventListener("scroll", () => {
  const scrollProgressBar = document.getElementById("scrollProgressBar");
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgressBar.style.width = `${scrollPercent}%`;
});

// Hamburger & menu overlay toggle
const hamburger = document.getElementById("hamburger");
const navbarMenu = document.getElementById("navbarMenu");
const menuOverlay = document.getElementById("menuOverlay");

hamburger.addEventListener("click", () => {
  const expanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", !expanded);
  navbarMenu.classList.toggle("active");
  menuOverlay.classList.toggle("active");

  const icon = hamburger.querySelector("i");
  if (navbarMenu.classList.contains("active")) {
    icon.classList.replace("fa-bars", "fa-xmark");
  } else {
    icon.classList.replace("fa-xmark", "fa-bars");
  }
});

menuOverlay.addEventListener("click", () => {
  navbarMenu.classList.remove("active");
  menuOverlay.classList.remove("active");
  hamburger.setAttribute("aria-expanded", false);
  hamburger.querySelector("i").classList.replace("fa-xmark", "fa-bars");
});

// Dropdown toggle on desktop and mobile
const dropdownItems = document.querySelectorAll(".navbar-item.dropdown");

dropdownItems.forEach((item) => {
  const btn = item.querySelector(".dropbtn");
  const dropdownContent = item.querySelector(".dropdown-content");

  // Toggle dropdown on click of button
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    // For mobile: toggle open class on dropdown-content
    if (window.innerWidth <= 768) {
      const isOpen = dropdownContent.classList.contains("open");
      if (isOpen) {
        dropdownContent.classList.remove("open");
        item.classList.remove("dropdown-open");
        btn.setAttribute("aria-expanded", "false");
      } else {
        // Close other open dropdowns in mobile menu
        dropdownItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem
              .querySelector(".dropdown-content")
              .classList.remove("open");
            otherItem.classList.remove("dropdown-open");
            otherItem
              .querySelector(".dropbtn")
              .setAttribute("aria-expanded", "false");
          }
        });
        dropdownContent.classList.add("open");
        item.classList.add("dropdown-open");
        btn.setAttribute("aria-expanded", "true");
      }
    } else {
      // Desktop: toggle dropdown-open class on item
      const isOpen = item.classList.contains("dropdown-open");
      if (isOpen) {
        item.classList.remove("dropdown-open");
        btn.setAttribute("aria-expanded", "false");
      } else {
        // Close other open dropdowns on desktop
        dropdownItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("dropdown-open");
            otherItem
              .querySelector(".dropbtn")
              .setAttribute("aria-expanded", "false");
          }
        });
        item.classList.add("dropdown-open");
        btn.setAttribute("aria-expanded", "true");
      }
    }
  });

  // Optional: Close dropdown if clicking outside dropdown on desktop
  document.addEventListener("click", (e) => {
    if (!item.contains(e.target)) {
      item.classList.remove("dropdown-open");
      btn.setAttribute("aria-expanded", "false");
      dropdownContent.classList.remove("open");
    }
  });
});

// Optional: close mobile menu and dropdowns on resize larger than 768px
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navbarMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
    hamburger.setAttribute("aria-expanded", false);
    hamburger.querySelector("i").classList.replace("fa-xmark", "fa-bars");

    dropdownItems.forEach((item) => {
      item.classList.remove("dropdown-open");
      item.querySelector(".dropbtn").setAttribute("aria-expanded", "false");
      item.querySelector(".dropdown-content").classList.remove("open");
    });
  }
});

//Smooth Scroll Navbar
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});