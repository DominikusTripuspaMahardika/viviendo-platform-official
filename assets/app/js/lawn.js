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