function wall(navigateTo) {

    //Crear elementos
    const section = document.createElement('section');
    const imgHeader = document.createElement('img');
    const btnLogOut = document.createElement('button');
    const newPost = document.createElement('div');
    const inputPost = document.createElement('input');
    const btnPost = document.createElement('button');
    const divPost = document.createElement('div');
    const headerWall = document.createElement('header');
    const divHeader = document.createElement('div');
    const mainWall = document.createElement('main');
  
     //Style wall
     section.setAttribute('id', 'wallStyle');
     headerWall.setAttribute('id', 'header');
     divHeader.setAttribute('id', 'divHeader');
     imgHeader.setAttribute('id', 'imgLogo');

      //Post 
      newPost.setAttribute('id', 'divNewPost');
      inputPost.setAttribute('id', 'inputNewPost');
      divPost.setAttribute('id', 'post');
      btnPost.setAttribute('id', 'btnPost'); 
  
     //Btn LogOut
     btnLogOut.setAttribute('id', 'btnLogOut');
     btnLogOut.textContent = 'Cerrar sesión';
     btnLogOut.addEventListener('click', () => {
        navigateTo('/');
      });

    
     inputPost.placeholder = '¡Comparte tus viajes con la comunidad!';
     btnPost.textContent = 'Publicar';


     newPost.append(inputPost, btnPost);
     section.append(newPost, divPost);
     headerWall.append(divHeader, btnLogOut);
     mainWall.append(headerWall, section);
     return mainWall;
    }
    
export default wall;