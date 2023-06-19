// file login.js
function login() {
    const section = document.createElement('section');
    const title = document.createElement('h2');
    const buttonReturn = document.createElement('button');
    const form = document.createElement('form');
    const inputEmail = document.createElement('input');
    const inputPass = document.createElement('input');
    const buttonLogin = document.createElement('button');
  
    inputEmail.placeholder = 'Escriba su mail';
    inputPass.placeholder = 'Contraseña';
  
    title.textContent = 'Login';
    buttonLogin.textContent = 'go';
  
    buttonReturn.textContent = 'Volver a la página de inicio';
  
    form.append(inputEmail, inputPass, buttonLogin);
    section.append(title, form, buttonReturn);
  
    return section;
  }
  
  export default login;