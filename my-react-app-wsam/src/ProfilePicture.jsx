
function ProfilePicture(){

const imageUrl = './src/assets/alexhotdog.jpeg'
const imageUrl2 = './src/assets/profilepic.jpeg'
const handleClick = (e) => {
    if(e.target.src.endsWith('hotdog.jpeg')){
        console.log('it worked')
        e.target.src = imageUrl2
    } else {
        e.target.src = imageUrl;
    }
}
  


    return(<img onClick={handleClick} src={imageUrl}/>)

}

export default ProfilePicture;