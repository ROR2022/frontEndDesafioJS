import { enviarRegistro } from "./apiUser.js";

console.log('Hola desde register:...');

const nameUser = document.querySelector('#nameUser');
const avatarUser = document.querySelector('#avatarUser');
const emailUser = document.querySelector('#emailUser');
const passwordUser = document.querySelector('#passwordUserRegister');
const passwordUserConfirm = document.querySelector('#passwordUserRegisterConfirm');

const botonRegister = document.querySelector('#botonRegister');

if (botonRegister){
  botonRegister.addEventListener('click',async (e)=>{
    e.preventDefault();
    if (passwordUser.value===passwordUserConfirm.value){
      const dataUser = {
        avatarUrl: avatarUser.value,
        name: nameUser.value,
        email: emailUser.value,
        password: passwordUser.value
      }
      console.log('Enviando Registro:..',dataUser);
      await enviarRegistro(dataUser);
    }else{
      console.log('no coincide el password:..');
    }
  })
}