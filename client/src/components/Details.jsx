import { useParams } from "react-router"
import { useEffect, useState } from "react/cjs/react.development"
import { Link } from "react-router-dom"



export default function Details(props) {
  const [character, setCharacter] = useState({})
  const params = useParams()

  useEffect(() => {
    if (props.characterList) {
      const foundCharacter = props.characterList.find((char) => { return char.id === params.id })
     setCharacter(foundCharacter)
    }
    
  },[params.id, props.characters])
  
  return(
    <div>{
      character?.fields &&
      <div className='character-details'>
        <h1>{`The Wonderful ${character.fields.name}`}</h1>
        <h2>Primary Attack:</h2>
        <h2>{character.fields.attack}</h2>
        <h2>Defensive Move:</h2>
        <h2>{character.fields.defense}</h2>
        <h3>Character Description:</h3>
        <p>{character.fields.description}</p>
        <img src={character.fields.image}/>
      </div>
    
      
    }
  <Link to='/charlist'><button onClick={props.setToggle(e=>!e)}>Back to List</button></Link>
    </div>
  )
}