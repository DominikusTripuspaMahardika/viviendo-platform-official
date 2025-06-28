document.addEventListener("DOMContentLoaded", function () {
    const tombolUnduhGratis = document.getElementById("unduhan-data-btn-gratis");
    const filePath = "../data/pp.gbl.dat"; // Ganti sesuai direktori Anda
    tombolUnduhGratis.addEventListener("click", function () {
        // Mencegah aksi ganda
        if (tombolUnduhGratis.disabled) return;
        // Simpan teks asli
        const teksAwal = tombolUnduhGratis.innerHTML;
        let hitung = 15;
        // Ubah gaya tombol
        tombolUnduhGratis.disabled = true;
        tombolUnduhGratis.style.backgroundColor = "#aaa";
        tombolUnduhGratis.style.cursor = "not-allowed";
        tombolUnduhGratis.innerHTML = `Mohon Tunggu (${hitung})`;
        const countdown = setInterval(() => {
            hitung--;
            if (hitung > 0) {
                tombolUnduhGratis.innerHTML = `Mohon Tunggu (${hitung})`;
            } else {
                clearInterval(countdown);
                tombolUnduhGratis.innerHTML = `<i class="fas fa-check-circle"></i> Mengunduh...`;
                // Buat dan klik elemen <a> untuk mengunduh otomatis
                const unduh = document.createElement("a");
                unduh.href = filePath;
                unduh.download = "pp_gbl.dat";
                document.body.appendChild(unduh);
                unduh.click();
                document.body.removeChild(unduh);
                // Kembalikan tombol ke semula setelah 3 detik (opsional)
                setTimeout(() => {
                    tombolUnduhGratis.innerHTML = teksAwal;
                    tombolUnduhGratis.disabled = false;
                    tombolUnduhGratis.style.backgroundColor = ""; // Reset warna
                    tombolUnduhGratis.style.cursor = "";
                }, 3000);
            }
        }, 1000);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const tombolPremium = document.getElementById("unduhan-data-btn-premium");
    const redirectURL = "https://trakteer.id/ViVienDoChannel";
    tombolPremium.addEventListener("click", function () {
        if (tombolPremium.disabled) return;
        const teksAwal = tombolPremium.innerHTML;
        let hitung = 5;
        tombolPremium.disabled = true;
        tombolPremium.style.backgroundColor = "#aaa";
        tombolPremium.style.cursor = "not-allowed";
        tombolPremium.innerHTML = `Mohon Tunggu (${hitung})`;
        const countdown = setInterval(() => {
            hitung--;
            if (hitung > 0) {
                tombolPremium.innerHTML = `Mohon Tunggu (${hitung})`;
            } else {
                clearInterval(countdown);
                tombolPremium.innerHTML = `<i class="fas fa-star"></i> Mengarahkan...`;
                window.location.href = redirectURL;
            }
        }, 1000);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const gratisCount = document.querySelectorAll(".fitur-gratis-list li").length;
    const premiumCount = document.querySelectorAll(".fitur-premium-list li").length;
    const countDisplays = document.querySelectorAll(".fitur-count");
    countDisplays.forEach((span) => {
        const target = span.dataset.target;
        const count = target === "gratis" ? gratisCount : premiumCount;
        span.textContent = `(${count} Fitur)`;
    });
});

function formatTanggalGlobal(date) {
    return new Intl.DateTimeFormat(navigator.language || 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }).format(date);
}
// Isi ke semua elemen dengan ID "fileUpdateTime"
const tanggalSekarang = new Date();
const elemenUpdateList = document.querySelectorAll("#fileUpdateTime");
elemenUpdateList.forEach(el => {
    el.textContent = formatTanggalGlobal(tanggalSekarang);
});

const carousel = document.getElementById("carouselPreview");
  const pagination = document.getElementById("carouselPagination");
  const totalImages = 55;
  const basePath = "../images/download/preview/pvz2itr/";
  const buttonsPerPage = 5;
  let currentPage = 1;

  // Buat semua item gambar
  for (let i = 1; i <= totalImages; i++) {
    const item = document.createElement("div");
    item.classList.add("unduhan-data-carousel-item");
    item.id = `image-${i}`;

    const img = document.createElement("img");
    const fileName = `img (${i}).jpg`;
    img.src = basePath + encodeURIComponent(fileName);
    img.alt = `Cuplikan Gameplay ${i}`;
    item.appendChild(img);
    carousel.appendChild(item);
  }

  function renderPagination(page) {
    pagination.innerHTML = ""; // Bersihkan

    const totalPages = Math.ceil(totalImages / buttonsPerPage);
    const start = (page - 1) * buttonsPerPage + 1;
    const end = Math.min(start + buttonsPerPage - 1, totalImages);

    // Tombol Sebelumnya
    if (page > 1) {
      const prev = document.createElement("button");
      prev.textContent = "« Sebelumnya";
      prev.classList.add("nav-btn");
      prev.onclick = () => renderPagination(page - 1);
      pagination.appendChild(prev);
    }

    // Tombol Angka
    for (let i = start; i <= end; i++) {
      const button = document.createElement("button");
      button.textContent = i;
      button.onclick = () => {
        document.getElementById(`image-${i}`).scrollIntoView({
          behavior: "smooth",
          inline: "start"
        });

        // Aktifkan tombol yang diklik
        pagination.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
      };
      pagination.appendChild(button);
    }

    // Tombol Berikutnya
    if (page < totalPages) {
      const next = document.createElement("button");
      next.textContent = "Berikutnya »";
      next.classList.add("nav-btn");
      next.onclick = () => renderPagination(page + 1);
      pagination.appendChild(next);
    }
  }

  // Tampilkan halaman pertama
  renderPagination(currentPage);