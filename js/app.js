// Função para rolar suavemente para as âncoras
  function scrollToSection(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Event listener para os links do navbar
  document.addEventListener('DOMContentLoaded', function () {
    const navbarLinks = document.querySelectorAll('.nav-link');
    navbarLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
      });
    });
  });
