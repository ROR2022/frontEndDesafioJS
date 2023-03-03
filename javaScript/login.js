import { homeFront } from "./apiFront.js";
import { enviarLogin } from "./apiUser.js";
//import { dataUserLogged } from "./apiFrontIndex.js";

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
          window.dataUserLogged.name= getLogin.findUser.name;
          window.dataUserLogged.avatarUrl= getLogin.findUser.avatarUrl;
          window.dataUserLogged.email= getLogin.findUser.email;
          window.dataUserLogged.logged= true;
        
      }
      //if (getLogin) window.location.href = homeFront;
    } catch (error) {
      console.log(error);
    }
  })
}