import { getLastPost } from "./apiFront.js";

getLastPost()
  .then((dataLastPost) => {
    
    const { lastPost } = dataLastPost;
    const mainPicture = document.querySelector("#mainPicture");
    const titlePost = document.querySelector('#title-link');
    const imageSecondPost = document.querySelector('#imageSecondPost');
    const secondTitlePost = document.querySelector('#title-link2');
    if (lastPost) {
      //console.log('image:..',lastPost[0].urlImage);
      mainPicture.src = lastPost[0].urlImage;
      titlePost.textContent= lastPost[0].titlePost;
      imageSecondPost.src = lastPost[1].urlImage;
      secondTitlePost.textContent = lastPost[1].titlePost;

      const dataMainPost = lastPost[0];
      titlePost.addEventListener('click',()=>{
            console.log('Mostraremos el Post que corresponda:..',dataMainPost);
            window.location.href=`../projectJS/articule.html?id=${dataMainPost._id}`;
      })
    } 
  })
  .catch((err) => {
    console.log(err);
  });
