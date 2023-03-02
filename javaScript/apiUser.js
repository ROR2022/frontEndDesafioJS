
export const publicUrlUsers = 'https://devto-api-raf4-production.up.railway.app/api/v1/users';


export const enviarRegistro = async (dataUser)=>{
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(dataUser)
  }
  try {
    const response = await fetch(`${publicUrlUsers}`,options);
    const result = await response.json();
    console.log('Result createUser:..',result);
    //if (result) window.location.href= homeFront;
  } catch (error) {
    console.log(error);
  }
}