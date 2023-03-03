import { getLastPost } from "./apiFront.js";
import { getDataUser } from "./apiUser.js";
import { card } from "./card.js";

export const dataUserLogged ={
  name: window.localStorage.getItem('nameUser')||'',
  avatarUrl: window.localStorage.getItem('avatarUrl')||'',
  email: window.localStorage.getItem('emailUser')||'',
  id: window.localStorage.getItem('idUser')||''
}

const showPosts = async ()=>{
  try {
    const getPosts = await getLastPost();
    if (getPosts){
      const { lastPost } = getPosts;
      if (lastPost) {
        lastPost.map(async (item)=>{
          
            const getDataUserResult = await getDataUser(String(item.user));
            console.log('getDataUserResult:..',getDataUserResult);
            if (getDataUserResult){
              card(item,getDataUserResult);
            }

        })
      }
    }
  } catch (error) {
    console.log (error);
  }
}



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


  showPosts();
  

  