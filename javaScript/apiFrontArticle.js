import { publicUrl } from "./apiFront.js";

console.log('Hola desde el Article Principal:..');

const mySearch = window.location.search;

//console.log('mySearch:..',mySearch);

const myQuery = new URLSearchParams(mySearch);
const id = myQuery.get('id');

//console.log('id:..',id);



const recuperaData = async (id)=>{
  try {
    const response = await fetch(`${publicUrl}getPost/${id}`); //`http://localhost:4000/getPost/${id}`
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

const showDataPost = ({titlePost,textPost,urlImage}) =>{
  const titlePostElement = document.querySelector('.titlePostElement');
  const textPostElement = document.querySelector('#textPostElement');
  const imagePostElement = document.querySelector('#imagePostElement');

  //console.log('urlImage:..',urlImage);
  
  titlePostElement.textContent=titlePost;
  textPostElement.textContent=textPost;
  if (urlImage) imagePostElement.src=urlImage;
  //console.log('imagePostElement:..',imagePostElement.src);

}