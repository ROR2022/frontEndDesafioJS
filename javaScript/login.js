import { enviarLogin } from "./apiUser";

console.log('Hola desde Login:..');


const emailUser = document.querySelector('#emailUser');
const passwordUser = document.querySelector('#passwordUserLogin');

const botonLogin = document.querySelector('#botonLogin');

if (botonLogin){
  botonLogin.addEventListener('click',async()=>{
    const dataUser = {
      email: emailUser.value,
      password: passwordUser.value
    }
    try {
      const getLogin = await enviarLogin(dataUser);
      console.log('getLogin:..',getLogin);
    } catch (error) {
      console.log(error);
    }
  })
}