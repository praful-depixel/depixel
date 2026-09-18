(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const toast = document.getElementById('toast');
  const year = document.getElementById('year');
  const form = document.getElementById('notify-form');

  year.textContent = new Date().getFullYear();

  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });

  nav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton?.setAttribute('aria-expanded', 'false');
    });
  });

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('notify-email').value.trim();
    if (!email) return;

    const subject = encodeURIComponent('Depixel launch updates');
    const body = encodeURIComponent(`Hi Depixel,\n\nPlease add ${email} to your launch update list.\n\nThanks!`);
    toast.textContent = 'Opening your email app to confirm the request…';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
    window.location.href = `mailto:contact@depixel.in?subject=${subject}&body=${body}`;
  });
})();
