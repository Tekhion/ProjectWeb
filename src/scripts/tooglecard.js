document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalImage = document.getElementById('modal-image');
  const modalText = document.getElementById('modal-text');
  const closeBtn = document.getElementById('close-modal');

  document.querySelectorAll('.card.main-card, .card.small-card').forEach(card => {
    card.addEventListener('click', () => {
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
});
