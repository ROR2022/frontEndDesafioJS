import { publicUrl } from "./apiFront.js";
import { editDataPost } from "./apiFront.js";

console.log('Hola desde el Edit Post:..');

const mySearch = window.location.search;

console.log('mySearch:..',mySearch);

const myQuery = new URLSearchParams(mySearch);
const id = myQuery.get('id');

const recuperaData = async (id)=>{
    try {
      const response = await fetch(`${publicUrl}/${id}`); //`http://localhost:4000/getPost/${id}`
      const result = await response.json();
      if(result.dataPost?.titlePost) showDataPost(result.dataPost);
      console.log('result recuperarData:..',result);
      return result
    } catch (error) {
      console.log(error)
    }
  }

  if(id){
    //mostraremos los datos en article.html
    //primero recuperamos los datos correspodientes al "id"
    recuperaData(id);
    //console.log('dataArticle:..',dataArticle);
  }

  const titlePostElement = document.querySelector('#titlePost');
  const textPostElement = document.querySelector('#postText');
  const imagePostElement = document.querySelector('#urlImage');

  const showDataPost = ({titlePost,textPost,urlImage}) =>{

    //console.log('urlImage:..',urlImage);
    
    titlePostElement.value=titlePost;
    textPostElement.value=textPost;
    imagePostElement.value=urlImage;
    //console.log('imagePostElement:..',imagePostElement.src);
  
  }

  const botonSave = document.querySelector("#publishEditPost")
  if(botonSave){
    botonSave.addEventListener('click',()=>{
        const dataPost={
          urlImage: imagePostElement.value,
          titlePost: titlePostElement.value,
          textPost: textPostElement.value.trim(),
          id
        } 
        //getSaludo();
        editDataPost(dataPost);
        console.log('Enviaremos datos:..',dataPost);
    
        
        //window.location.href='http://127.0.0.1:5500/projectJS/index.html';
      })
}