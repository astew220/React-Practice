

function Button(){
const handleClick = (e) => {
e.target.textContent = "you clicked me"
}


    return(
        <button onDoubleClick={(alex)=>handleClick(alex)}>Click Me</button>
    )

}

export default Button