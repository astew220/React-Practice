import List from './List.jsx'

function App() {
  const fruits = [{id: 1,name:'apple', calories:95},
    {id: 2,name:'orange', calories:"orange"}, 
    {id: 3, name:'sam', calories:2000}, 
    {id: 4, name:'banana', calories:105}, 
    {id: 5, name:'coconut', calories:159},
    {id: 6, name:'pineapple', calories:37}]

    const vegetables = [{id: 6,name:'apple', calories:95},
      {id: 7,name:'potatoes', calories:45}, 
      {id: 8, name:'celery', calories:2000}, 
      {id: 9, name:'carrots', calories:105}, 
      {id: 10, name:'corn', calories:159},
      {id: 11, name:'brocolli', calories:37}]
  return (
   <>
    {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
    {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
    </>
  )
}

export default App
