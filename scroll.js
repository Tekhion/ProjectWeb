const video = document.getElementById('animacion');
let scrollTimeout;

window.addEventListener('scroll', () => {
  if (video.paused) {
    video.play();
  }

  clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(() => {
    video.pause();
  }, 50);
});
