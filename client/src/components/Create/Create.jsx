import {  useState } from "react"
import { useNavigate } from "react-router"
import { createNewCharacter, getRandomPic } from "../../services"
import { Button } from '@mui/material'
import { createTheme } from '@mui/material/styles';
import './Create.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
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

export default function Create(props) {
  const [name, setName] = useState('')
  const [attack, setAttack] = useState('')
  const [defense, setDefense]= useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const nav = useNavigate()
  
  
  const randPic = () => {
    const pic = getRandomPic()
    setImage(pic)
  }
  

  const createCharacter = async (e) => {
    e.preventDefault()
    const newChar = {
      name,
      attack,
      defense,
      image,
      description,
      hp: '100',
      level: parseInt(1),
      totalDamage: parseInt(0),

    }
    const res = await createNewCharacter(newChar)
    
    if (res) {
      nav('/charlist')
    }
    props.setToggle(e=>!e)
  }

  return (

    <div className='create'>
      <div className='left-form' >
        <form className='left' >
          <h2>Introducing..</h2>
        <input type='text' maxlength="20" id='name' value={name} 
            onChange={(e) => { setName(e.target.value) }} placeholder="What's your name?" />
          <h2>Primarily, on offense, you:</h2>
        <input type='text' maxlength="50" id='attack' value={attack}
            onChange={(e) => { setAttack(e.target.value) }} placeholder="What's your primary attack?" />
          <h2>Your Random style of battle:</h2>
        <input type='text' maxlength="50" id='defense' value={defense}
            onChange={(e) => { setDefense(e.target.value) }} placeholder="From where does your randomness hail?" />
          <h2>Your random biography would say:</h2>
        <input type='text' maxlength="150" id='description' value={description}
          onChange={(e) => { setDescription(e.target.value) }} placeholder="Describe your character" />
        <input type='text' id='image' value={image} 
          onChange={(e) => { setImage(e.target.value) }} placeholder="Add an image URL" />
        
      </form>
      </div>
      <div className='right'>
        <div className='image-section'>
          <div className='frame'>{image &&
            <img id='portrait' src={image} alt='character'/>}</div>
          <div>
          <Button size='large' variant='contained' theme={theme}  onClick={randPic}>Random Image</Button>
          </div>
        </div>
        <div className='preview-holder'>
          <h1 id='title'>{'The Exuberant'}</h1>
          <h1 className='input' id='namepre'>{name}</h1>
          <h2 className='prev-move'>Go To Move</h2>
          <h2 className='input'>{attack}</h2>
          <h2 className='prev-move'>Source of Randomness</h2>
          <h2 className='input'>{defense}</h2>
          <h3>Biography:</h3>
          <p id="prev-desc" className='input'>{description}</p>
      </div>
        {name !== '' && attack !== '' && defense !== '' && description !== '' && image !== '' &&
          <div className='create-holder'><Button size='large' variant='contained' theme={theme} id='create-button' onClick={createCharacter}>Create!</Button></div>
        }</div>
    </div>
  )
}