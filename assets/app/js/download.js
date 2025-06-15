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