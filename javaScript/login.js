import { homeFront } from "./apiFront.js";
import { enviarLogin } from "./apiUser.js";
import { dataUserLogged } from "./apiFrontIndex.js";

console.log('Hola desde Login:..');


const emailUser = document.querySelector('#emailUser');
const passwordUser = document.querySelector('#passwordUserLogin');

const botonLogin = document.querySelector('#botonLogin');

if (botonLogin){
  botonLogin.addEventListener('click',async(e)=>{
    e.preventDefault();
    const dataUser = {
      email: emailUser.value,
      password: passwordUser.value
    }
    try {
      const getLogin = await enviarLogin(dataUser);
      console.log('getLogin:..',getLogin);
      if (getLogin.findUser?.email){
          window.localStorage.setItem('avatartUrl',getLogin.findUser.avatarUrl);
          window.localStorage.setItem('nameUser',getLogin.findUser.name);
          window.localStorage.setItem('idUser',getLogin.findUser._id);
          window.localStorage.setItem('emailUser',getLogin.findUser.email);

         /*  const dataContainer = document.querySelector('#dataUserContainer');
          const avatarUser = document.querySelector('#imageUserLogged');
          const nameUserLogged = document.querySelector('#nameUserLogged');

          dataContainer.className= 'd-block ms-auto me-auto mt-3';
          avatarUser.src= dataUserLogged.avatarUrl;
          nameUserLogged.textContent = dataUserLogged.name; */
        
      }
      if (getLogin) window.location.href = homeFront;
    } catch (error) {
      console.log(error);
    }
  })
}