/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const navList = document.getElementById('nav-list');
const menu = document.querySelector('.header .nav-bar .nav-list ul');
const menuItem = document.querySelectorAll('.header .nav-bar .nav-list menu-icon2 ul li a');
const closeIcon1 = document.querySelector('.menu-icon1');
const closeSideBar = document.getElementById('close-navbar');
const openPopupButtons = document.querySelectorAll('.popup-btn');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  closeIcon1.classList.toggle('d-none');
  closeSideBar.classList.toggle('d-none');
});

menuItem.forEach((item) => {
  item.addEventListener('click', () => {
    navList.classList.toggle('d-none');
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    closeIcon1.classList.toggle('d-none');
    closeSideBar.classList.toggle('d-none');
  });
});

const projects = [
  {
    name: 'HTML & CSS Capstone',
    title: 'Coding & Outdoors meeting Website',
    image: './image_icons/Projects_ss/first_project/project1_ss.png',
    technologies: ['HTML', 'Bootstrap', 'JavaScript'],
    description:
      'The project is about a website of travelling and coding meetings, a place where passionate people about travelling meet, learn, and enjoy. The website contains 2 pages, main page where I introduced the idea about the meeting, the about page where I presented the meeting and some previous activities, all the pages are responsive (breakpoint 768px)',
    liveLink: 'https://hamzaoutdoors.github.io/Code_Outdoors_Meetings/',
    sourceLink: 'https://github.com/Hamzaoutdoors/Code_Outdoors_Meetings',
  },
  {
    name: 'HTML & CSS Capstone',
    title: 'Coding & Outdoors Website',
    image: './image_icons/Projects_ss/first_project/project1_ss.png',
    technologies: ['HTML', 'Bootstrap', 'JavaScript'],
    description:
    'The project is about a website of travelling and coding meetings, a place where passionate people about travelling meet, learn, and enjoy. The website contains 2 pages, main page where I introduced the idea about the meeting.',
    liveLink: 'https://hamzaoutdoors.github.io/Code_Outdoors_Meetings/',
    sourceLink: 'https://github.com/Hamzaoutdoors/Code_Outdoors_Meetings',
  },
  {
    name: 'JavaScript Capstone',
    title: 'Serie lover Website',
    image: './image_icons/Projects_ss/js-project/js-project.png',
    technologies: ['API', 'Bootstrap', 'JS - ES6'],
    description:
      'The Series lover website displays scores submitted by different series. It also allows users to submit their comments in every serie show. All data is preserved thanks to the external <a href="https://www.tvmaze.com/api" class="link-popup">TVmaze API</a>, the user can like his favourite serie thanks to <a href="https://www.notion.so/Involvement-API-869e60b5ad104603aa6db59e08150270" class="link-popup">Involvement API</a>',
    liveLink: 'https://hamzaoutdoors.github.io/Serie_Lovers---JS-Capstone-/',
    sourceLink: 'https://github.com/Hamzaoutdoors/Serie_Lovers---JS-Capstone-',
  },
  {
    name: 'React & Redux Project',
    title: 'Math Magicians',
    image: 'https://user-images.githubusercontent.com/80895497/134748890-29d5e63a-e1e4-4438-b23b-244824012a17.png',
    technologies: ['Sass', 'Bootstrap', 'React.js'],
    description:
    'Math magicians" is a website for all students and fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations, read/sahre a random math-related quote, and create a to-do list for the day',
    liveLink: 'https://hamzaoutdoors-math-magicians.herokuapp.com/',
    sourceLink: 'https://github.com/Hamzaoutdoors/math-magicians',
  },
  {
    name: 'React & Redux Capstone Project',
    title: 'Corona Tracker',
    image: './image_icons/Projects_ss/react-projects/popup-corona.png',
    technologies: ['Redux', 'React.js', 'Bootstrap'],
    description:
      'A SPA web application for checking and tracking daily information about COVID 19 in the big European Countries using React & Redux. The webapp have several pages Home page with a list of european countries that can be filtered by the country, and detail page for more detail about the country by clicking on it with number of infected and deaths. </br> For this project I interacted with <a href="https://covid19tracking.narrativa.com/index_en.html" class="link-popup">Narrativa API</a>',
    liveLink: 'https://ho-coronatracker21.netlify.app/',
    sourceLink: 'https://github.com/Hamzaoutdoors/Corona-Tracker__react-capstone',
  },
  {
    name: 'Sixth project',
    title: 'Data Dashboard Healthcare',
    image: './image_icons/Img_Placeholder.svg',
    technologies: ['css', 'Codepen', 'Git & Github'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque porro aliquam quod repellat harum distinctio quas voluptates eligendi maiores at facilis asperiores, voluptatem placeat cum nostrum nisi quae, natus neque? Minus expedita, aliquid repellat recusandae laboriosam natus culpa odit.',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'last project',
    title: 'Data Dashboard Healthcare',
    image: './image_icons/Img_Placeholder.svg',
    technologies: ['css', 'Codepen', 'Git & Github'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque porro aliquam quod repellat harum distinctio quas voluptates eligendi maiores at facilis asperiores, voluptatem placeat cum nostrum nisi quae, natus neque? Minus expedita, aliquid repellat recusandae laboriosam natus culpa odit.',
    liveLink: '#',
    sourceLink: '#',
  },
];

const divProject = document.createElement('div');

function addEvents() {
  for (let i = 0; i < openPopupButtons.length; i += 1) {
    openPopupButtons[i].addEventListener('click', (ev) => {
      const projectId = ev.target.id;
      divProject.classList.add('popup-overlay-objects');
      document.querySelector('.popup-bg').style.display = 'flex';
      let techsHTML = '';
      for (let k = 0; k < projects[i].technologies.length; k += 1) {
        techsHTML += `<li><p>${projects[i].technologies[k]}</p></li>`;
      }
      divProject.innerHTML = '<div class="close-btn">+</div>'
      + `<h3 class="intru-title">${projects[projectId].title}</h3>`
      + `<ul class="languages">${techsHTML}</ul>`
      + '<div class="content d-flex flex-dir-col">'
      + '<div class="content-image d-flex">'
      + `<img src="${projects[projectId].image}" alt="modal-image" />`
      + '</div>'
      + '<div class="body d-flex flex-dir-col">'
      + `<p>${projects[projectId].description}</p>`
      + '<div class="d-flex pop-buttons">'
      + `<a href="${projects[projectId].liveLink}" target="_blank"><button class="btn-primary btn-pop d-flex" type="button">See Live<i class="fa fa-clock-o"></i></button></a>`
      + `<a href="${projects[projectId].sourceLink}" target="_blank"><button class="btn-primary btn-pop d-flex" type="button">`
      + 'See Source <i class="fa fa-github"></i></button></a>'
      + '</div>'
      + '</div>'
      + '</div>';

      document.getElementById('overlay').appendChild(divProject);

      const deleteDetail = document.querySelector('.close-btn');
      deleteDetail.addEventListener('click', () => {
        divProject.remove();
        document.querySelector('.popup-bg').style.display = 'none';
      });
    });
  }
}
addEvents();

// Validate email Section

const contactForm = document.getElementById('signup');
const emailInvalid = 'Please enter a correct email address format';

const hasValue = (input) => {
  if (input.value === '') {
    return false;
  }
  return true;
};

const showAlertMessage = (input, message) => {
  const msg = input.parentNode.querySelector('small');
  msg.innerText = message;
};

const validateEmail = (input, emailInvalid) => {
	 if (!hasValue(input)) {
    return false;
  }

  const regex = /[A-Z]/g;

  const email = input.value.trim();
  if (regex.test(email)) {
    return showAlertMessage(input, emailInvalid);
  }
	  return true;
};

const deleteAlertMessage = () => {
  const emailInput = contactForm.elements[1];
  const msg = document.querySelector('small');

  while (emailInput.value === '') {
    msg.innerHTML = '';
  }
};

contactForm.addEventListener('submit', (ev) => {
  const emailInput = contactForm.elements[1];
  if (validateEmail(emailInput, emailInvalid)) {
    deleteAlertMessage();
  } else {
    ev.preventDefault();
  }
});

// Local Storage

function isLocalStorageAvailable() {
  try {
    const valueToStore = 'test';
    const mykey = 'key';
    localStorage.setItem(mykey, valueToStore);
    const recoveredValue = localStorage.getItem(mykey);
    localStorage.removeItem(mykey);

    return recoveredValue === valueToStore;
  } catch (e) {
    return false;
  }
}

let formData = {};
// eslint-disable-next-line no-unused-vars
const signUp = () => {
  if (isLocalStorageAvailable()) {
    const nameInput = contactForm.elements[0].value;
    const emailInput = contactForm.elements[1].value;
    const messageInput = contactForm.elements[2].value;
    formData = { nameInput, emailInput, messageInput };
    localStorage.setItem('formData', JSON.stringify(formData));
  }
};

const displayData = () => {
  const inputs = document.querySelectorAll('.input');
  const savedData = JSON.parse(localStorage.getItem('formData'));
  const data = { ...savedData };

  if (!Object.values(data).every((o) => o === '')) {
    for (let i = 0; i < inputs.length; i += 1) {
      inputs[i].value = Object.values(data)[i];
    }
  }
};
displayData();

// Additional features
const borderDisplay = () => {
  document.querySelector('textarea').style.border = '1px solid #333';
};
borderDisplay();