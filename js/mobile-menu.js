const closeMenu = document.querySelectorAll('.mobile-menu-toggle');

closeMenu.forEach((element) => {
  element.addEventListener('click', () => {
    const overlay = document.querySelector('.menu-overlay');
    overlay.classList.toggle('hide-menu');

    const hamburgerMenu = document.querySelector('.mobile-menu');
    hamburgerMenu.classList.toggle('hide-hamburger');
  });
});

const speakers = [
  {
    image: '/src-image/drzekri.jpg',
    name: 'Abdel Rahman',
    description: ' Vice President for Reasearch and Postgraduates Affairs',
  },
  {
    image: '/src-image/profa.jpg',
    name: 'Mohamed Samy ',
    description:
      ' Cairo University Vice President for Community Service and Environment Development Affairs',
  },
  /*  {
    image: '/src-image/salma.jpg',
    name: 'Salima Ikram',
    description:
      'Distinguished University Professor of Egyptology at The American University in Cairo',
  },
  {
    image: '/src-image/nagw.jpg',
    name: 'Nagwa Sherif',
    description:
      'professor of Architectural Engineering at The American University in Cairo',
  }, */
];

speakers.forEach((speaker) => {
  const div = document.querySelector('.feature-speak');
  const dynamicContent = `
     <card class="speaker ">
                <img src=${speaker.image} alt="Speaker" class="speaker-img">
                <div class="speaker-info">
                  <h3 class="speaker-name">${speaker.name}</h3>
                  <p class="speaker-desc">${speaker.description}
                  </p>
                  <p>Holds a masters in Divinity from Afric Inland University.</p>
                </div>
              </card>
            </div>
`;
  div.innerHTML += dynamicContent;
});
