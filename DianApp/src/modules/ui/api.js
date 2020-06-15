import axios from '../../axios/index'
/**Images list api */
export async  function getImagesData(){
    console.log("api hit")
  return await  axios.get()
    .then(function(response){
        return response
    })
    .catch(function(errorMsz){
        return errorMsz
    })
}