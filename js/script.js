const navMenu = document.querySelector('#menu-icon');
const navItems = document.querySelector('#nav-menu');
const closeButton = document.querySelector('#close-icon');

navMenu.addEventListener('click', () => {
  navItems.classList.add('display');
});
closeButton.addEventListener('click', () => {
  navItems.classList.remove('display');
});
const data = [
  {
    Name: 'Paul Kagame',
    Title: 'President of the Republic of Rwanda',
    Description: 'Paul Kagame is a Rwandan politician and former military officer who is the fourth and current president of Rwanda since 2000.',
    Img: './images/speaker1.png',
    Alt: 'speaker1',
  },

  {
    Name: 'Gianni Infantino',
    Title: 'FIFA President',
    Description: 'Giovanni Vincenzo "Gianni" Infantino is a Swiss football administrator and the current president of FIFA. He was first elected to the office during the 2016.',
    Img: './images/speaker2.png',
    Alt: 'speaker2',
  },

  {
    Name: 'Fatma Samoura',
    Title: 'Secretary General',
    Description: 'Fatma Samba Diouf Samoura is a Senegalese former diplomat and senior executive. She was appointed as the first female Secretary General of FIFA by President Gianni Infantino.',
    Img: './images/fifaspeaker2.png',
    Alt: 'speaker3',
  },

  {
    Name: 'Gianni Infantino',
    Title: 'FIFA President',
    Description: 'Giovanni Vincenzo "Gianni" Infantino is a Swiss football administrator and the current president of FIFA. He was first elected to the office during the 2016.',
    Img: './images/speaker2.png',
    Alt: 'speaker4',
  },

  {
    Name: 'Fatma Samoura',
    Title: 'Secretary General',
    Description: 'Fatma Samba Diouf Samoura is a Senegalese former diplomat and senior executive. She was appointed as the first female Secretary General of FIFA by President Gianni Infantino.',
    Img: './images/fifaspeaker2.png',
    Alt: 'speaker5',
  },

  {
    Name: 'Paul Kagame',
    Title: 'President of the Republic of Rwanda',
    Description: 'Paul Kagame is a Rwandan politician and former military officer who is the fourth and current president of Rwanda since 2000.',
    Img: './images/speaker1.png',
    Alt: 'speaker6',
  },
];

const sectionContainer = document.querySelector('.feature-container');
const moreButton = document.querySelector('#load-more');
const mobileMaxWidth = 768;
const mobileSpeakersToShow = 2;
const desktopSpeakersToShow = 6;
let speakersToShow = getInitialSpeakersToShow(); 
let speakersDisplayed = speakersToShow;

function loadSpeakers() {
  let content = '';
  for (let i = 0; i < speakersDisplayed; i++) {
    const item = data[i];
    content += `
      <div class="card">
        <span class="card-image">
          <img src=${item.Img} class="card-image-x">
        </span>
        <div class="about-speaker">
          <h1 class="abt-title">${item.Name}</h1>
          <p class="abt-para1">${item.Title}</p>
          <hr class="dynamic-line">
          <p class="abt-para2">${item.Description}</p>
        </div>
      </div>
    `;
  }
  sectionContainer.innerHTML = content;
}

function getInitialSpeakersToShow() {
  return window.innerWidth <= mobileMaxWidth ? mobileSpeakersToShow : desktopSpeakersToShow;
}

loadSpeakers();

moreButton.addEventListener('click', () => {
  speakersDisplayed += speakersToShow;
  if (speakersDisplayed >= data.length) {
    moreButton.style.display = 'none';
  }
  loadSpeakers();
});

window.addEventListener('resize', () => {
  const newSpeakersToShow = getInitialSpeakersToShow();
  if (speakersToShow !== newSpeakersToShow) {
    speakersToShow = newSpeakersToShow;
    speakersDisplayed = speakersToShow;
    moreButton.style.display = 'inline-block';
    loadSpeakers();
  }
});