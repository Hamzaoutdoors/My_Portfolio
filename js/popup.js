const openPopupButtons = document.querySelectorAll('.popup-btn');
const popDiv = document.createElement('div');

openPopupButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
    popDiv.id = 'pop-body';
    popDiv.className = 'overlay-pop';
   popDiv.innerHTML = '<div class="multi-poste d-flex flex-dir-col">' +
             '<ul class="languages">' +
             ' <li><p>css</p></li>' +
           '<li><p>html</p></li>' +
           ' <li><p>bootsrap</p></li>' +
           '<li><p>Ruby</p></li></ul>' +
          '<img src="./image_icons/Img_Placeholder.svg" alt="image_Placeholder"/>' +
          '<article class="d-flex flex-dir-col">' + 
          '<h3 class="intru-title">Multi-Post Stories</h3>' +
          '<p> A daily selection of privately personalized reads; no accounts or sign-ups' + 
          'required. has been the industry standard dummy text ever since the 1500 when an unknown printer took a standard dummy text.</p>' +
          '<div class="d-flex">' +
          '<button class="btn-primary btn-project" type="button">See Live</button>' +
           '<button class="btn-primary btn-project" type="button">See Source</button></div>' +
           '</article>'+
        '</div>'

  });
})
