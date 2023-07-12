import { login } from "./lib/fxFirebase";

// File home.js
function home(navigateTo) {
    //Crear elementos
    const section = document.createElement('section');
    const divImg = document.createElement('div');
    const logo = document.createElement('img');
    const btnGoogle = document.createElement('button');
    const footer = document.createElement('footer');

    //Id style home
    section.setAttribute('id', 'homeStyle');

    //Logo app
    logo.setAttribute('id', 'logo');
    logo.src = ('./img/logo.png');
    logo.alt = ('logo-app');
    divImg.appendChild(logo);

    //Btn google
    btnGoogle.textContent = 'Iniciar sesión con Google';
    btnGoogle.setAttribute('id', 'btnGoogle');
    btnGoogle.addEventListener('click', ()=>{
      login().then(()=>navigateTo('/wall')).catch(()=>navigateTo('/'));
    });

    //Footer
    footer.setAttribute('id', 'footer');
    footer.textContent= "Creado por Claudia Martínez @claumartinezv";


    section.append(divImg, btnGoogle, footer);
    return section;
  }
  
export default home;