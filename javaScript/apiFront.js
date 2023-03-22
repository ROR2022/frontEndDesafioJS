console.log('Cargando apiFront:..');
import { dataUserLogged } from "./apiFrontIndex.js";

const urlImage = document.querySelector('#urlImage');
const titlePost = document.querySelector('#titlePost');
const postText = document.querySelector('#postText');

const publishPost = document.querySelector('#publishPost');

//export const publicUrl = 'https://apibackenddesafiojs-production.up.railway.app/';

//export const publicUrl = 'https://devto-api-raf4-production.up.railway.app/api/v1/posts';

 export const publicUrl= 'http://3.145.15.215/api/v1/posts/';

export const homeFront = 'https://front-end-desafio-js.vercel.app/';


if(publishPost){
  publishPost.addEventListener('click',()=>{
    const dataPost={
      urlImage: urlImage.value,
      titlePost: titlePost.value,
      textPost: postText.value.trim(),
      user: dataUserLogged.id
    } 
    //getSaludo();
    publishDataPost(dataPost);
    console.log('Enviaremos datos:..',dataPost);

    
    //window.location.href='http://127.0.0.1:5500/projectJS/index.html';
  })
}



const getSaludo = async ()=>{
  try {
    const response = await fetch(publicUrl);  //'http://localhost:4000'
    const result = await response.json();
    console.log('result:..',result);
  } catch (error) {
    console.log(error);
  }
}

export const publishDataPost = async(data)=>{
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  try {
    const response = await fetch(`${publicUrl}`,options);//'http://localhost:4000/createPost' //createPost
    const result = await response.json();
    console.log('Result createPost:..',result);
    if (result) window.location.href= homeFront; //'http://127.0.0.1:5500/projectJS/index.html'
  } catch (error) {
    console.log(error)
  }
}

export const editDataPost = async(data)=>{
  const options = {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  try {
    const response = await fetch(`${publicUrl}/${data.id}`,options);//'http://localhost:4000/createPost' //createPost
    const result = await response.json();
    console.log('Result editPost:..',result);
    if (result) window.location.href= homeFront; //'http://127.0.0.1:5500/projectJS/index.html'
  } catch (error) {
    console.log(error)
  }
}

export const getLastPost = async ()=>{
  try {
    const response = await fetch(`${publicUrl}`); //'http://localhost:4000/getLastPost' //getLastPost
    const result = await response.json();
    console.log('Result getLastPost:..',result);
    return result
  } catch (error) {
    console.log(error);
    return error
  }
}

export const deletePost = async(id)=>{
  const options = {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    }
  }
  try {
    const response = await fetch(`${publicUrl}/${id}`,options);//'http://localhost:4000/createPost' //createPost
    const result = await response.json();
    console.log('Result deletePost:..',result);
    if (result) window.location.href= homeFront; //'http://127.0.0.1:5500/projectJS/index.html'
  } catch (error) {
    console.log(error)
  }
}

