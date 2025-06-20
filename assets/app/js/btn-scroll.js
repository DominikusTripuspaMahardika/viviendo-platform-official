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