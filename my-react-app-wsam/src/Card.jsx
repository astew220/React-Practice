import profilePic from './assets/spencer.jpg'

function Card(props){

return(
    
    <div className="card">
        <img className="card-image" alt="profile picture" src={props.image}></img>
        <h2 className="card-title">Alex Joseph Stewart</h2>
        <p className="card-text">I fish and eat a lot</p>
    </div>
  
)

}

export default Card;