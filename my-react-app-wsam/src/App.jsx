import Card from './Card.jsx'
import Spencer from './assets/spencer.jpg'
import Alex from './assets/alexheadshot2020.jpg'
import HotDog from './assets/alexhotdog.jpeg'
function App() {

  return (
    <div>
    <Card image={Alex}/>
    <Card image={Spencer}/>
    <Card image={HotDog}/>
    </div>
  )
}

export default App
