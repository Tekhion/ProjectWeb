const images = document.querySelectorAll('.zoomable');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalBg = modal.querySelector('.modal-background');

images.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
  });
});

modalBg.addEventListener('click', () => {
  modal.style.display = 'none';
  modalImg.src = '';
});

modalImg.addEventListener('click', () => {
  modal.style.display = 'none';
  modalImg.src = '';
});
