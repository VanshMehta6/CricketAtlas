document.addEventListener('click', (e) => {
  const btn = e.target.closest('.expand-btn');
  if (btn) {
    const content = btn.parentElement.querySelector('.expand-content');
    if (content) content.classList.toggle('show');
  }
});