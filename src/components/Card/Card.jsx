export default function Card(props){
    console.log(props)
    return   <div className="card">
    <h2>Rick Sanchez</h2>
   <div className='Tags'> 
    <div className='Tag'> Status: Vivo</div>
    <div className='Tag'> Espécie: Humana</div>
    <div className='Tag'> Origem: Terra C-137</div>
  </div>
    <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />  
    </div>
}
