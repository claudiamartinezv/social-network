import { eventsCollection, deleteDocument, fetchPost, onSnapshot } from "./lib/index";

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
    const headerMsj = document.createElement('h1');
    const divHeader = document.createElement('div');
    const mainWall = document.createElement('main');
    const footer = document.createElement('footer');
  
     //Style wall
     section.setAttribute('id', 'wallStyle');
     headerWall.setAttribute('id', 'header');
     divHeader.setAttribute('id', 'divHeader');
     imgHeader.setAttribute('id', 'imgLogo');
     mainWall.setAttribute('id', 'mainWall');

      //Post 
      newPost.setAttribute('id', 'divNewPost');
      inputPost.setAttribute('id', 'inputNewPost');
      divPost.setAttribute('id', 'post');
      btnPost.setAttribute('id', 'btnPost'); 

      //Header
      headerMsj.setAttribute('id', 'headerMsj');
      headerMsj.textContent = 'Bienvenida a Viajerapp';
  
     //Btn LogOut
     btnLogOut.setAttribute('id', 'btnLogOut');
     btnLogOut.textContent = 'Cerrar sesión';
     btnLogOut.addEventListener('click', () => {
        navigateTo('/');
      });

     inputPost.placeholder = '¡Comparte tus viajes con la comunidad!';

    //Actualizar datos
    onSnapshot(fetchPost, (querySnapshot) => {
      divPost.innerHTML = '';

    //Crear elementos de publicaciones
    querySnapshot.forEach((doc) => {
      const liPost = document.createElement('p');
      liPost.setAttribute('id', 'newPost');
      const postData = doc.data();

      liPost.textContent = postData.publicaciones;
      divPost.appendChild(liPost);

      //Crear boton borrar
      const btnDelete = document.createElement('button');
      btnDelete.setAttribute('class', 'deletePublication');
      btnDelete.textContent = 'Borrar';
      liPost.appendChild(btnDelete);

      //borrar publicacion
      btnDelete.addEventListener('click', () => {
        const idPost = doc.id;

        deleteDocument(idPost);
      });
    });
  });

    //crear publicación
    btnPost.textContent = 'Publicar';
    btnPost.addEventListener('click', () => {
      const newPosts = inputPost.value;

      eventsCollection(newPosts).then((posts) => {
        inputPost.value = '';

        return posts;
      });
    });

    //Footer
    footer.setAttribute('id', 'footer');
    footer.textContent= "Creado por Claudia Martínez @claumartinezv";

     newPost.append(inputPost, btnPost);
     section.append(newPost, divPost);
     headerWall.append(divHeader, btnLogOut, headerMsj);
     mainWall.append(headerWall, section, footer);
     return mainWall;
    }
    
export default wall;