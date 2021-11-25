const closeMenu = document.querySelectorAll('.mobile-menu-toggle');

closeMenu.forEach((element) => {
  element.addEventListener('click', () => {
    const overlay = document.querySelector('.menu-overlay');
    overlay.classList.toggle('hide-menu');

    const hamburgerMenu = document.querySelector('.mobile-menu');
    hamburgerMenu.classList.toggle('hide-hamburger');
  });
});
