import { getLastPost } from "./apiFront.js";
import { card } from "./card.js";

export const dataUserLogged ={
  name: window.localStorage.getItem('nameUser')||'',
  avatarUrl: window.localStorage.getItem('avatarUrl')||'',
  email: window.localStorage.getItem('emailUser')||'',
  id: window.localStorage.getItem('idUser')||''
}

getLastPost()
  .then((dataLastPost) => {
    
    const { lastPost } = dataLastPost;
    // const mainPicture = document.querySelector("#mainPicture");
    // const titlePost = document.querySelector('#title-link');
    // const imageSecondPost = document.querySelector('#imageSecondPost');
    // const secondTitlePost = document.querySelector('#title-link2');
    if (lastPost) {
      //console.log('image:..',lastPost[0].urlImage);
      // mainPicture.src = lastPost[0].urlImage;
      // titlePost.textContent= lastPost[0].titlePost;
      // imageSecondPost.src = lastPost[1].urlImage;
      // secondTitlePost.textContent = lastPost[1].titlePost;
      lastPost.map((item)=>{
        card(item);
      })
      // const dataMainPost = lastPost[0];
      // titlePost.addEventListener('click',()=>{
      //       console.log('Mostraremos el Post que corresponda:..',dataMainPost);
      //       window.location.href=`../articule.html?id=${dataMainPost._id}`;
      // })
    } 
  })
  .catch((err) => {
    console.log(err);
  });

  const botonCreatePost = document.querySelector('#botonCreatePost');

  if(dataUserLogged.id){
    console.log('dataUserLogged:..',dataUserLogged);
    const avatarUserLogo = document.querySelector('#avatarUserLogo');
    if (avatarUserLogo){
      avatarUserLogo.src= dataUserLogged.avatarUrl;
    }
    
  }
  
  if (botonCreatePost&&dataUserLogged.id){
    botonCreatePost.className = 'btn btn-outline-primary';
}else if(botonCreatePost&&!dataUserLogged.id){
      botonCreatePost.className = 'd-none';
  }

  

  