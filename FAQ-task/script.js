const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const answer = btn.previousElementSibling;

    if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'block';
      btn.textContent = 'Hide';
    } else {
      answer.style.display = 'none';
      btn.textContent = 'Show';
    }
  });
});
