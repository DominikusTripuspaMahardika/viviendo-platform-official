const ACCESS_CODE = "UyZxxmhxLMjKZg9EWtUEED1VTGd9zzKkuFgk1C5wWV8iwEPOY51lqe5baZGImoloJh99DkAhFojyt7yqOKu4CrkCmeGjvtL4bfEU"; // Kode akses yang benar
  const galleryGrid = document.getElementById("galleryGrid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const accessModal = document.getElementById("accessModal");
  const openAccessBtn = document.getElementById("openAccessBtn");
  const submitAccessBtn = document.getElementById("submitAccessBtn");
  const accessStatus = document.getElementById("accessStatus");
  const accessCodeInput = document.getElementById("accessCodeInput");

  let hasAccess = localStorage.getItem("galleryAccess") === "granted";

  const allImages = [];

  // Direktori dan jumlah
  const galleries = [
    { dir: "../gallery/pvz2itr/", total: 278, category: "pvz2itr" },
    { dir: "../gallery/pvz2rfl/", total: 705, category: "pvz2rfl" }
  ];

  // Generate gambar
  galleries.forEach(gallery => {
    for (let i = 1; i <= gallery.total; i++) {
      allImages.push({
        src: `${gallery.dir}img (${i}).jpg`,
        category: gallery.category,
        index: allImages.length + 1
      });
    }
  });

  function renderGallery(filter = "all") {
    galleryGrid.innerHTML = "";
    const filteredImages = filter === "all" ? allImages : allImages.filter(img => img.category === filter);

    filteredImages.forEach(imgData => {
      if (hasAccess || imgData.index <= 7) {
        const anchor = document.createElement("a");
        anchor.href = imgData.src;
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";

        const img = document.createElement("img");
        img.src = imgData.src;
        img.alt = `Gambar ${imgData.index}`;
        img.loading = "lazy";

        anchor.appendChild(img);
        galleryGrid.appendChild(anchor);
      } else {
        const div = document.createElement("div");
        div.classList.add("gallery-item-locked");

        const img = document.createElement("img");
        img.src = imgData.src;
        img.alt = `Gambar ${imgData.index}`;
        img.loading = "lazy";

        div.appendChild(img);
        galleryGrid.appendChild(div);
      }
    });
  }

  // Filter handler
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderGallery(btn.dataset.filter);
    });
  });

  // Buka Modal Kode Akses
  openAccessBtn.addEventListener("click", () => {
    if (hasAccess) return;
    accessModal.classList.add("active");
  });

  // Proses input kode akses
  submitAccessBtn.addEventListener("click", () => {
    const inputCode = accessCodeInput.value.trim();
    if (inputCode === ACCESS_CODE) {
      hasAccess = true;
      localStorage.setItem("galleryAccess", "granted");

      // Update UI
      renderGallery(document.querySelector(".filter-btn.active").dataset.filter);
      accessStatus.style.display = "block";
      openAccessBtn.classList.add("disabled");
      openAccessBtn.textContent = "Akses Diberikan";
      accessModal.classList.remove("active");
    } else {
      accessCodeInput.value = "";
      accessCodeInput.placeholder = "Kode salah, coba lagi...";
    }
  });

  // Render awal
  renderGallery();
  if (hasAccess) {
    openAccessBtn.classList.add("disabled");
    openAccessBtn.textContent = "Akses Diberikan";
  }