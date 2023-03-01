console.log('Cargando apiFront:..');

const urlImage = document.querySelector('#urlImage');
const titlePost = document.querySelector('#titlePost');
const postText = document.querySelector('#postText');
const publishPost = document.querySelector('#publishPost');

//export const publicUrl = 'https://apibackenddesafiojs-production.up.railway.app/';

export const publicUrl = 'https://devto-api-raf4-production.up.railway.app/api/v1/users';

export const homeFront = 'https://front-end-desafio-js.vercel.app/';


if(publishPost){
  publishPost.addEventListener('click',()=>{
    const dataPost={
      urlImage: urlImage.value,
      titlePost: titlePost.value,
      textPost: postText.value.trim()
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

const publishDataPost = async(data)=>{
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  try {
    const response = await fetch(`${publicUrl}createPost`,options);//'http://localhost:4000/createPost'
    const result = await response.json();
    console.log('Result createPost:..',result);
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
