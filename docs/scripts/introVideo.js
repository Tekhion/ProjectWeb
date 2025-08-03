window.addEventListener("load", () => {
  const blackOverlay = document.getElementById("black-overlay");
  const video = document.getElementById("bg-video");
  const mainCard = document.querySelector(".main-card-container");
  const cardsContainer = document.querySelector(".cards-container");


  setTimeout(() => {
    blackOverlay.style.opacity = "0";
  }, 100);

  setTimeout(() => {
    video.style.filter = "blur(10px)";
  }, 500);

  setTimeout(() => {
    video.pause();

    mainCard.classList.add("visible");
    cardsContainer.classList.add("visible");

    requestAnimationFrame(() => {
      mainCard.classList.remove("hidden");
      cardsContainer.classList.remove("hidden");
    });
  }, 1500);
});
