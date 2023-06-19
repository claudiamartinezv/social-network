// file home.js
function home(navigateTo) {
    //Crear elementos
    const section = document.createElement('section');
    const divImg = document.createElement('div');
    const logo = document.createElement('img');
    const button = document.createElement('button');

    //Id style home
    section.setAttribute('id', 'home-style');

    //Logo app
    logo.setAttribute = ('id', 'logo');
    logo.src = ('./img/logo.png');
    logo.alt = ('logo-app');
    divImg.appendChild(logo);

    //Btn home
    button.textContent = 'Iniciar sesión';
    button.setAttribute = ('id', 'btn-home')

    section.append(divImg, button);
    return section;
  }
  
  export default home;