
document.addEventListener('DOMContentLoaded', () => {
  const mailIcon = document.getElementById('mail-icon');
  const contactPopup = document.getElementById('contact-popup');

  mailIcon.addEventListener('click', (e) => {
    e.preventDefault();
    if (contactPopup.style.display === 'block') {
      contactPopup.style.display = 'none';
    } else {
      contactPopup.style.display = 'block';
    }
  });

  document.addEventListener('click', (e) => {
    if (!contactPopup.contains(e.target) && !mailIcon.contains(e.target)) {
      contactPopup.style.display = 'none';
    }
  });
});
