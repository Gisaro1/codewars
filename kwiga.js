const userLeft = true;
const userWatchingCatMeme = false;

function watchingVideoPromises(){
    return new Promise((resolve, reject) => {
         if(userLeft){
            reject({
                name:"user left",
                message:":("
            })
        } else if(userWatchingCatMeme){
            reject({
                name:"User watching video meme",
                message:"cccxlvii...."
            })
        } else{
            resolve('Thumbs up and subscribe')
        }
    })
}

watchingVideoPromises().then((message) =>{
    console.log('Succes' + message)
}).catch((error)=>{
    console.log(error.name + '   ' + error.message)
}) 