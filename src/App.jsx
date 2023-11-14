import './App.css'
import Card from './components/Card/Card'

function App() {
 const item1 = {name:'Rick Sanchez',
 imageUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"}

 const item2 = {name:'Morty Sanchez',
 imageUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"}

 const item3 = {name:'3 Sanchez',
 imageUrl: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"}
 
 const item4 = {name:'4 Sanchez',
 imageUrl: "https://rickandmortyapi.com/api/character/avatar/4.jpeg"}
return (
    <>
   
    <br></br>
<Card item={item1}/>
<br></br>
<Card item={item2}/>
<br></br>
<Card item={item3}/>
<br></br>
<Card item={item4}/>
    </>
  )
}

export default App
