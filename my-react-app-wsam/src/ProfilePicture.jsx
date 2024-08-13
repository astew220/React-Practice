
function ProfilePicture(){

const imageUrl = './src/assets/alexhotdog.jpeg'

const handleClick = (e) => {
   e.target.style.border = '1px solid red'
}

    return(<img onClick={handleClick} src={imageUrl}/>)

}

export default ProfilePicture;