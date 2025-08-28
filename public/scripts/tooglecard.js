document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const modalText = document.getElementById('modal-text');
  const closeBtn = document.getElementById('close-modal');

  function loadImages(card) {
    if (!card) return;
    const imgs = card.querySelectorAll('img[data-src]');
    imgs.forEach(img => {
      if (!img.dataset.src) return;
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }

  document.querySelectorAll('.card.main-card, .card.small-card').forEach(card => {
    card.addEventListener('click', () => {
      loadImages(card);

      const img = card.querySelector('img');
      const detailsElement = card.querySelector('.card-details');
      let details = '';

      if (detailsElement) {
        details = detailsElement.innerHTML.trim();
      } else {
        details = card.getAttribute('data-description') || card.querySelector('.description').textContent.trim();
      }

      modalImage.src = img.src;
      modalText.innerHTML = details;
      modal.classList.add('show');

      modal.scrollTo(0, 0);
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });

  const helpButton = document.getElementById('help-button');
  if (helpButton) {
    helpButton.addEventListener('click', () => {
      modalImage.src = '/media/ImagesDiv/104.avif';
      modalText.innerHTML = `
        <h2>What is this project?</h2>
        <p>This build is based on an anime/visual novel I saw a while ago, Steins;gate, which has a function within it, which I'll let you discover on your own if you're interested in watching it (recommended :) ). Apart from that you could also say that it will have double use as a nixie tube clock as the chip itself that allows this costs relatively little and in the original project they show how to install it. <br><br></p>
        <p>This project is possible thanks to Tom, as well as all the design, PCBs, steps that I do in the assembly... and a lot of things more, which I am very grateful and I invite you to visit <a href="http://brotoro.com/dm/" style="color: orange;">the original project.</a></p>
      `;
      modal.classList.add('show');
      modal.scrollTo(0, 0);
    });
  }

});
