//Loader Animation
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.classList.add("fade-out");
  setTimeout(() => loader.remove(), 800);
});

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

//Tahun Otomatis
document.getElementById("year").textContent = new Date().getFullYear();

// === Tombol Download ===
const downloadBtn = document.getElementById("downloadBtn");
const countdownSeconds = 5;
let countdownInterval;

downloadBtn.addEventListener("click", () => {
  let remaining = countdownSeconds;

  // Nonaktifkan tombol
  downloadBtn.disabled = true;
  downloadBtn.textContent = `Mohon tunggu ${remaining} detik...`;

  // Hitung mundur
  countdownInterval = setInterval(() => {
    remaining--;
    if (remaining > 0) {
      downloadBtn.textContent = `Mohon tunggu ${remaining} detik...`;
    } else {
      clearInterval(countdownInterval);
      downloadBtn.textContent = "Mengalihkan...";
      // Ganti URL sesuai kebutuhan
      window.location.href = "assets/unlock/index.html";
    }
  }, 1000);
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

// === Scroll Progress Bar ===
window.addEventListener("scroll", () => {
  const scrollProgressBar = document.getElementById("scrollProgressBar");
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgressBar.style.width = `${scrollPercent}%`;
});

//Button scroll untuk mengunduh
function scrollToDownload() {
  const button = document.querySelector(".scroll-to-download");
  const target = document.getElementById("unduhan");
  const offset = target.getBoundingClientRect().top + window.pageYOffset - 100;

  // Scroll ke bagian unduhan
  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });

  // Nonaktifkan tombol setelah ditekan
  button.disabled = true;
}

//Button untuk scrolling halaman
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("scroll-toggle");
  const arrowIcon = btn.querySelector(".arrow-icon");
  const hero = document.getElementById("beranda");
  const footer = document.querySelector(".footer");
  let lastScrollTop = window.scrollY;

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function updateScrollDirection() {
    const st = window.scrollY || document.documentElement.scrollTop;
    const goingDown = st > lastScrollTop;

    // Ganti kelas untuk rotasi
    if (goingDown) {
      btn.classList.add("rotate-down");
      btn.classList.remove("rotate-up");
      btn.setAttribute("aria-label", "Scroll ke bawah");
    } else {
      btn.classList.add("rotate-up");
      btn.classList.remove("rotate-down");
      btn.setAttribute("aria-label", "Scroll ke atas");
    }

    lastScrollTop = st <= 0 ? 0 : st;
  }

  function toggleVisibility() {
    const inHero = isInViewport(hero);
    const inFooter = isInViewport(footer);

    if (inHero || inFooter) {
      btn.classList.add("hidden");
    } else {
      btn.classList.remove("hidden");
    }
  }

  function onScroll() {
    updateScrollDirection();
    toggleVisibility();
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", toggleVisibility);
  onScroll(); // Inisialisasi pertama

  btn.addEventListener("click", () => {
    const isDown = btn.classList.contains("rotate-down");
    const direction = isDown ? 1 : -1;
    window.scrollBy({
      top: window.innerHeight * direction,
      behavior: "smooth",
    });
  });
});

// === Statistik Dinamis Harian (Profesional + Berkembang Tiap Hari) ===
document.addEventListener("DOMContentLoaded", () => {
  const statMax = {
    "stat-pengunjung": 500,
    "stat-aktif": 500,
    "stat-gratis": 500,
    "stat-premium": 500,
    "stat-komunitas": 500,
  };

  const today = new Date().toISOString().split("T")[0]; // yyyy-mm-dd
  const statsKey = "viviendoStats";
  const stats = JSON.parse(localStorage.getItem(statsKey) || "{}");

  // Inisialisasi jika belum ada
  if (!stats.lastUpdated || stats.lastUpdated !== today) {
    stats.lastUpdated = today;

    for (const id in statMax) {
      const prev = stats[id] || Math.floor(Math.random() * 50); // awal: 0–49
      const increment = Math.floor(Math.random() * 20) + 1; // naik 1–20
      stats[id] = Math.min(prev + increment, statMax[id]);
    }

    localStorage.setItem(statsKey, JSON.stringify(stats));
  }

  // Tampilkan nilai
  for (const id in statMax) {
    const el = document.getElementById(id);
    if (el && stats[id] !== undefined) {
      el.textContent = stats[id].toLocaleString("id-ID");
    }
  }
});

// Lawn atau Rumput
document.addEventListener("DOMContentLoaded", () => {
  const lawnModal = document.getElementById("lawnModal");
  const lawnImage = document.getElementById("lawnImage");
  const modalClose = document.getElementById("modalClose");

  document.querySelectorAll(".btn-lawn").forEach((button) => {
    button.addEventListener("click", () => {
      const lawnSrc = button.getAttribute("data-lawn");
      lawnImage.src = lawnSrc;
      lawnModal.classList.remove("hidden");
    });
  });

  modalClose.addEventListener("click", () => {
    lawnModal.classList.add("hidden");
    lawnImage.src = "";
  });

  lawnModal.addEventListener("click", (e) => {
    if (e.target === lawnModal) {
      lawnModal.classList.add("hidden");
      lawnImage.src = "";
    }
  });
});

// World atau Dunia
document.addEventListener("DOMContentLoaded", () => {
  const lawnModal = document.getElementById("lawnModal");
  const lawnImage = document.getElementById("lawnImage");
  const modalClose = document.getElementById("modalClose");

  document.querySelectorAll(".btn-world").forEach((button) => {
    button.addEventListener("click", () => {
      const lawnSrc = button.getAttribute("data-lawn");
      lawnImage.src = lawnSrc;
      lawnModal.classList.remove("hidden");
    });
  });

  modalClose.addEventListener("click", () => {
    lawnModal.classList.add("hidden");
    lawnImage.src = "";
  });

  lawnModal.addEventListener("click", (e) => {
    if (e.target === lawnModal) {
      lawnModal.classList.add("hidden");
      lawnImage.src = "";
    }
  });
});

let currentDownloadLink = "#"; // Default link kosong

// Fungsi Toast Notifikasi Profesional
function showToast(message = "Berhasil") {
  const toast = document.getElementById("toastNotif");
  toast.textContent = "";
  toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
  toast.classList.remove("hidden");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hidden");
  }, 3000);
}

// Saat tombol "Unduh Modifikasi" ditekan
document.querySelectorAll(".btn-download-mod").forEach((btn) => {
  btn.addEventListener("click", () => {
    const rawLink = btn.getAttribute("data-link");
    const masked = rawLink
      .replace(/[^\/]+(?=\/?$)/, "*********")
      .replace(/:\/\/.*?\//, "://***.***/");

    currentDownloadLink = rawLink; // Simpan tautan aktif

    document.getElementById("maskedLink").textContent = masked;
    document.getElementById("modDownloadModal").classList.remove("hidden");
  });
});

// Tombol Salin
document.getElementById("copyLinkBtn").addEventListener("click", () => {
  navigator.clipboard.writeText(currentDownloadLink).then(() => {
    showToast("Tautan berhasil disalin ke clipboard.");
  });
});

// Tombol Buka → gunakan window.open agar tidak tergantung pada <a href>
document.getElementById("openLinkBtn").addEventListener("click", (e) => {
  e.preventDefault(); // Hindari default anchor
  if (currentDownloadLink && currentDownloadLink !== "#") {
    window.open(currentDownloadLink, "_blank", "noopener,noreferrer");
  } else {
    showToast("Tautan tidak tersedia.");
  }
});

// Tombol Tutup Modal
document.getElementById("closeModModal").addEventListener("click", () => {
  document.getElementById("modDownloadModal").classList.add("hidden");
});

//PWA
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  // Tampilkan prompt setiap halaman dimuat
  setTimeout(() => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => {
        deferredPrompt = null;
      });
    }
  }, 1000); // 1 detik setelah halaman dimuat
});

//musik autoplay
const musicList = [
  "assets/audio/Plants_vs_Zombies_Soundtrack_1.mp3",
  "assets/audio/Plants_vs_Zombies_Soundtrack_2.mp3",
  "assets/audio/Plants_vs_Zombies_Soundtrack_3.mp3",
  "assets/audio/Plants_vs_Zombies_Soundtrack_4.mp3",
  "assets/audio/Plants_vs_Zombies_Soundtrack_5.mp3",
  "assets/audio/Plants_vs_Zombies_Soundtrack_6.mp3"
];

let currentTrack = Math.floor(Math.random() * musicList.length);
const audio = document.getElementById("audioPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
const playPauseIcon = playPauseBtn.querySelector("i");

function loadTrack(index) {
  audio.src = musicList[index];
  audio.load();
}

function playTrack() {
  audio.play();
  playPauseIcon.classList.replace("fa-play", "fa-pause");
  playPauseIcon.classList.add("fa-animated"); // Optional: custom animation class
}

function pauseTrack() {
  audio.pause();
  playPauseIcon.classList.replace("fa-pause", "fa-play");
  playPauseIcon.classList.add("fa-animated"); // Optional: custom animation class
}

document.getElementById("prevBtn").addEventListener("click", () => {
  currentTrack = (currentTrack - 1 + musicList.length) % musicList.length;
  loadTrack(currentTrack);
  playTrack();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentTrack = (currentTrack + 1) % musicList.length;
  loadTrack(currentTrack);
  playTrack();
});

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    playTrack();
  } else {
    pauseTrack();
  }
});

// Auto-load musik random pertama
loadTrack(currentTrack);

//Gallery Image
// === GALLERY DINAMIS UNTUK GAMBAR "img (1).jpg" S.D. "img (266).jpg" ===
document.addEventListener("DOMContentLoaded", () => {
  const galleryGrid = document.getElementById("galleryGrid");
  const totalImages = 266; // Jumlah gambar Anda

  for (let i = 1; i <= totalImages; i++) {
    const anchor = document.createElement("a");
    anchor.href = `assets/gallery/img (${i}).jpg`;
    anchor.target = "_blank"; // Buka gambar di tab baru untuk zoom
    anchor.rel = "noopener noreferrer";

    const img = document.createElement("img");
    img.src = `assets/gallery/img (${i}).jpg`;
    img.alt = `Gambar ${i}`;
    // img.loading = "lazy"; // Tidak digunakan lagi

    anchor.appendChild(img);
    galleryGrid.appendChild(anchor);
  }
});

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
