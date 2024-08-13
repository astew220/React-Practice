import React, {useState} from 'react';

function MyComponent(){
    const [car, setCar] = useState({Year:2024, 
                                    Make:'Ford', 
                                    Model:'Mustang'})


  function handleYearChange(event){
    setCar(c => c = ({...c, Year : event.target.value}))
  }             
  function handleMakeChange(event){
    setCar(c => c = ({...c, Make: event.target.value}))
  }  
  function handleModelChange(event){
    setCar(c => c = ({...c, Model: event.target.value}))
  }                      
return (<div>
    <p>Your favorite car is: {car.Year} {car.Make} {car.Model}</p>
    <input type="number" value={car.Year} onChange={handleYearChange}/><br/>
    <input type="text" value={car.Make} onChange={handleMakeChange}/><br/>
    <input type="text" value={car.Model} onChange={handleModelChange}/><br/>
</div>)


}

export default MyComponent