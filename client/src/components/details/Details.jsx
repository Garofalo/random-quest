import {  useNavigate, useParams } from "react-router"
import { useEffect, useState } from "react"
import { Button } from "@mui/material"
import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './Details.css'
const theme = createTheme({
  palette: {
    primary: {
      main: '#5271ff',
    },
    secondary: {
      main: '#00e5ff',
  }
  },
});



export default function Details(props) {
  const [character, setCharacter] = useState({})
  const params = useParams()
  const nav = useNavigate()

  useEffect(() => {
    if (props?.characterList) {
      const foundCharacter = props.characterList.find((char) => { return char.id === params.id })
      setCharacter(foundCharacter)
    }
    
  }, [params.id, props.characterList])
  
  
  function returnHome() {
    props.setToggle(e => !e)
    nav('/charlist')
  }
  
  function startGame() {
    nav(`/battle/${character.id}`)
  }


  return(
    <div>{
      character?.fields &&
      <div className='character-details'>
        <div className='det-title'>
          <div id='title-holder'><h1 >The Wonderful </h1><h1 id='name'>{character.fields.name}</h1>
          </div>
          <div className='frame-detail'>
          <img id='char-pic' src={character.fields.image} alt='character portrait'/>
          </div>
        </div>
        <div className='det-moves'>
        <h2>Primary Attack:</h2>
        <h2 className='inputs'>{character.fields.attack}</h2>
        <h2>Defensive Move:</h2>
          <h2 className='inputs'>{character.fields.defense}</h2>
        </div>
        <div className='det-desc'>
        <h3>Character Description:</h3>
          <p className='inputs'>{character.fields.description}</p>
        </div>
        <div className='select' id='select'><Button size='large' variant='contained' theme={theme}id='select' onClick={startGame}>Start the Game</Button></div>
        <div className='det-right'>
        <h1>HP</h1>
        <h1 id='hp'>{character.fields.hp}</h1>
        <h1>Level</h1>
        <h1 id='level'>{character.fields.level}</h1>
        </div>
        <div className='button-div'><Button size='large' variant='contained' theme={theme}  onClick={returnHome}>Back to List</Button></div>
      </div>
    
    
    }
  
    </div>
  )
}