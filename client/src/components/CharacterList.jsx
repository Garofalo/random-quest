import axios from "axios"
import { useState, useEffect } from "react"
import { characterURL, config } from '../services/index'
import { Link } from "react-router-dom"



export default function CharacterList(props) {
//   const [characterList, setCharacterList] = useState([])
  

//   useEffect(() => {
//     const getCharacterList = async () => {
//       const res = await axios.get(characterURL, config)
//       setCharacterList(res?.data?.records)
//     }
//     getCharacterList()
//     console.log(characterList)
// },[])
// console.log(characterList)

  return (
    <div className='character-list'>
      {props.characterList &&
        props.characterList.map((character) => {
          return (<div className='char-card'>
          <h1>{character.fields.name}</h1>
            <img src={character.fields.image} />
            <Link to={`/details/${character.id}`}><button>Select This Character</button></Link>
            </div>
          )
        })
      }
      <Link to='/create'><button onClick={props.setToggle(e=>!e)}>Create a Character</button></Link>
    </div>
  )
}