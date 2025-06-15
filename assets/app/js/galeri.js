//Gallery Image
document.addEventListener("DOMContentLoaded", () => {
  const galleryGrid = document.getElementById("galleryGrid");
  const totalImages = 278; // Jumlah gambar Anda

  for (let i = 1; i <= totalImages; i++) {
    const anchor = document.createElement("a");
    anchor.href = `../gallery/img (${i}).jpg`;
    anchor.target = "_blank"; // Buka gambar di tab baru untuk zoom
    anchor.rel = "noopener noreferrer";

    const img = document.createElement("img");
    img.src = `../gallery/img (${i}).jpg`;
    img.alt = `Gambar ${i}`;
    img.loading = "lazy";

    anchor.appendChild(img);
    galleryGrid.appendChild(anchor);
  }
});