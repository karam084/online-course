const speakers = [
  {
    name: 'Abdel Rahman',
    image: './src-image/drzekri.jpg',
    text: ' Vice President for Reasearch and Postgraduates Affairs',
    description: 'ational Cancer Institute Verified email at nci.cu.edu.eg',
  },
  {
    name: 'Mohamed Samy ',
    image: './src-image/profa.jpg',
    text: ' Cairo University Vice President for Community Service and Environment Development Affairs',
    description:
      'Doctor of Philosophy in Law from Faculty of Pharmacy, Cairo University, June 2000.',
  },
];
speakers.forEach((speaker) => {
  const div = document.querySelector('.speaker-info');
  const dynamicContent = `
       <card class="speaker ">
                  <img src=${speaker.image} alt="Speaker" class="speaker-img">
                  <div class="speaker-info">
                    <h3 class="speaker-name">${speaker.name}
                    </h3>
                    <p class="speaker-desc">${speaker.text}
                    </p>
                    <p class="speaker-mor">${speaker.description}
                    </p>
                  </div>
                </card>
              </div>
  `;
  div.innerHTML += dynamicContent;
});

const speakers2 = [
  {
    image: './src-image/salma.jpg',
    name: 'Salima Ikram',
    text: 'Distinguished University Professor of Egyptology at The American University in Cairo',
    description:
      ' worked as an archaeologist in Turkey, Sudan, Greece and the United States',
  },
  {
    image: './src-image/nagw.jpg',
    name: 'Nagwa Sherif',
    text: 'Architectural Engineering at The American University in Cairo',
    description:
      'She holds a PhD degree from University of Montreal, Canada in 1984',
  },
];
speakers2.forEach((speaker1) => {
  const div = document.querySelector('.col');
  const dynamicContent = `
       <card class="speaker1 ">
                  <img src=${speaker1.image} alt="Speaker" class="speaker1-img">
                  <div class="col">
                    <h3 class="speaker-name1">${speaker1.name}
                    </h3>
                    <p class="speaker-desc1">${speaker1.text}
                    </p>
                    <p class="speaker-mor1">${speaker1.description}
                    </p>
                  </div>
                </card>
              </div>
  `;
  div.innerHTML += dynamicContent;
});
function showImage() {
  const elems = document.getElementsByClassName('showHide');
  for (let i = 0; i < elems.length; i += 1) {
    if (
      elems[i].style.visibility === 'visible' ||
      elems[i].style.visibility === ''
    ) {
      elems[i].style.visibility = 'hidden';
    } else if (elems[i].style.visibility === 'hidden') {
      elems[i].style.visibility = 'visible';
    }
  }
}
document.addEventListener('DOMContentLoaded', showImage);
