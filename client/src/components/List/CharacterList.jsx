import { Link} from "react-router-dom"
import { Button } from '@mui/material'
import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './list.css'


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



export default function CharacterList(props) {
  

  return (
    <div className='character-list'>
       <Link id='new-char' to='/create'>
        <Button size='large' variant='contained'  theme={theme} onClick={props.setToggle(e => !e)}>Create a New Character</Button>
      </Link>
      <div className='list'>
      {props.characterList &&
        props.characterList.map((character) => {
          return (<div className='char-card'>
          <h1>{character.fields.name}</h1><div className='list-frame'>
            <img src={character.fields.image} alt='character portrait'/></div>
            <Link to={`/details/${character.id}`}>
              <Button size='large' variant='contained' theme={theme}>Select This Character</Button>
            </Link>
            </div>
          )
        })
      }</div>

     
    </div>
  )
}