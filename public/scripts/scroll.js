
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const modal = document.querySelector(".modal-overlay");
    const modalContent = modal.querySelector(".modal-content");


    modal.classList.add("show");

    modalContent.scrollTop = 0;
  });
});

document.getElementById("close-modal").addEventListener("click", () => {
  document.querySelector(".modal-overlay").classList.remove("show");
});