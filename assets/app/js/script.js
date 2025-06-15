















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








