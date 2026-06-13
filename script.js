document.addEventListener('DOMContentLoaded', () => {

    // Lien actif dans la navbar
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar-links a').forEach(link => {
      if (link.getAttribute('href') === page) {
        link.classList.add('active');
      }
    });
  
    // Menu burger mobile
    const btn = document.querySelector('.navbar-menu-btn');
    const links = document.querySelector('.navbar-links');
    if (btn && links) {
      btn.addEventListener('click', () => links.classList.toggle('open'));
    }
  
    // Animations reveal au scroll
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
        }
      });
    }, { threshold: 0 });
    reveals.forEach(el => observer.observe(el));
  
  });