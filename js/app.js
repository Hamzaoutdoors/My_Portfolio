const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const menu = document.querySelector('.header .nav-bar .nav-list ul');
const menuItem = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const closeIcon1 = document.querySelector('.menu-icon1');
const closeIcon2 = document.querySelector('.menu-icon2');
const openPopupButtons = document.querySelectorAll('.popup-btn');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  closeIcon1.classList.toggle('d-none');
  closeIcon2.classList.toggle('d-none');
});

menuItem.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    closeIcon1.classList.toggle('d-none');
    closeIcon2.classList.toggle('d-none');
  });
});

const projects = [
  {
    name: 'first project',
    title: 'Profesional Art Printing Data',
    image: './image_icons/Img_Placeholder.svg',
    technologies: ['css', 'Bootstrap', 'Git & Github'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque porro aliquam quod repellat harum distinctio quas voluptates eligendi maiores at facilis asperiores, voluptatem placeat cum nostrum nisi quae, natus neque? Minus expedita, aliquid repellat recusandae laboriosam natus culpa odit. Dolorum excepturi',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Second project',
    title: 'Profesional Art Printing Data',
    image: './image_icons/Img_Placeholder.svg',
    technologies: ['html', 'Bootstrap', 'JavaScript ES6'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque porro aliquam quod repellat harum distinctio quas voluptates eligendi maiores at facilis asperiores, voluptatem placeat cum nostrum nisi quae, natus neque? Minus expedita, aliquid r',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Thirth project',
    title: 'Website Protfolio',
    image: './image_icons/Img_Placeholder.svg',
    technologies: ['Sass', 'Codekit', 'Terminal'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque porro aliquam quod repellat harum distinctio quas voluptates eligendi maiores at facilis asperiores, voluptatem placeat cum nostrum nisi quae, natus neque? Minus expedita,',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Forth project',
    title: 'Data Dashboard Healthcare',
    image: './image_icons/Img_Placeholder.svg',
    technologies: ['Sass', 'Bootstrap', 'JQuery'],
    description:
     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque porro aliquam quod repellat harum distinctio quas voluptates eligendi maiores at facilis asperiores, voluptatem placeat cum nostrum nisi quae, natus neque? Minus expedita,',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    name: 'Fifth project',
    title: 'Website Protfolio',
    image: './image_icons/Img_Placeholder.svg',
    technologies: ['Terminal', 'Codepen', 'Github'],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque porro aliquam quod repellat harum distinctio quas voluptates eligendi maiores at facilis asperiores, voluptatem placeat cum nostrum nisi quae, natus neque? Minus expedita, aliquid repellat recusandae laboriosam natus culpa odit. ',
    liveLink: '#',
    sourceLink: '#',
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
  for (let i = 0; i < openPopupButtons.length; i + 1) {
    openPopupButtons[i].addEventListener('click', (ev) => {
      const projectId = ev.target.id;
      divProject.classList.add('popup-overlay-objects');
      document.querySelector('.popup-bg').style.display = 'flex';
      let techsHTML = '';
      for (let k = 0; k < projects[i].technologies.length; k + 1) {
        techsHTML += `<li><p>${projects[i].technologies[k]}</p></li>`;
      }
      divProject.innerHTML = '<div class="close-btn">+</div>'
      + `<h3 class="intru-title">${projects[projectId].title}</h3>`
      + `<ul class="languages">${techsHTML}</ul>`
      + '<div class="content d-flex flex-dir-col">'
      + '<div class="content-image">'
      + `<img src="${projects[projectId].image}" alt="modal-image" />`
      + '</div>'
      + '<div class="body d-flex flex-dir-col">'
      + `<p>${projects[projectId].description}</p>`
      + '<div class="d-flex pop-buttons">'
      + '<button class="btn-primary btn-pop d-flex" type="button">'
      + 'See Live <i class="fa fa-clock-o"></i></button>'
      + '<button class="btn-primary btn-pop d-flex" type="button">'
      + 'See Source <i class="fa fa-github"></i></button>'
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
