document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    
    document.querySelectorAll('.accordion-header').forEach(item => {
      item.setAttribute('aria-expanded', 'false');
      item.nextElementSibling.style.maxHeight = null;
    });

    if (!expanded) {
      button.setAttribute('aria-expanded', 'true');
      button.nextElementSibling.style.maxHeight = button.nextElementSibling.scrollHeight + 'px';
    }
  });
});
