import { useState } from "react"
import { useNavigate } from "react-router"
import { createNewCharacter } from "../../services"
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
  const [toggleImg, setToggleImg] = useState(false)

  const createCharacter = async (e) => {
    e.preventDefault()
    const newChar = {
      name,
      attack,
      defense,
      image,
      description
    }
    const res = await createNewCharacter(newChar)
    
    if (res) {
      nav('/charlist')
    }
    props.setToggle(e=>!e)
  }
  const getRandomPic = () => {
    if (toggleImg) {
      setImage('https://random.imagecdn.app/500/500')
    } else {
      setImage('https://source.unsplash.com/random/500x500/?img=1')
    }
    setToggleImg(e=>!e)
  }
  return (

    <div className='create'>
      <div className='left'>
        <form >
          <h2>Name Yourself </h2>
        <input type='text' maxlength="20" id='name' value={name} 
            onChange={(e) => { setName(e.target.value) }} placeholder="What's your name?" />
          <h2>On offense, you:</h2>
        <input type='text' maxlength="50" id='attack' value={attack}
            onChange={(e) => { setAttack(e.target.value) }} placeholder="What's your primary attack?" />
          <h2>To defend yourself, you:</h2>
        <input type='text' maxlength="50" id='defense' value={defense}
            onChange={(e) => { setDefense(e.target.value) }} placeholder="What's your defensive move?" />
          <h2>Your heroic biography would say:</h2>
        <input type='text' maxlength="150" id='description' value={description}
          onChange={(e) => { setDescription(e.target.value) }} placeholder="Describe your character" />
        <input type='text' id='image' value={image} 
          onChange={(e) => { setImage(e.target.value) }} placeholder="Add an image URL" />
        
      </form>
      </div>
      <div className='right'>
        <div className='portrait-holder'>
          <div className='frame'>{image &&
            <img id='portrait' src={image} />}</div>
          <div>
          <Button size='large' variant='contained' theme={theme}  onClick={() => { getRandomPic() }}>Random Image</Button>
          </div>
        </div>
        <div className='preview-holder'>
          <h1 id='title'>Introducing...</h1>
          <h1 id='namepre'>{name}</h1>
          <h2 className='prev-move'>Primary Attack</h2>
          <h2>{attack}</h2>
          <h2 className='prev-move'>Defensive Move</h2>
          <h2>{defense}</h2>
          <h3>Biography:</h3>
          <p id="prev-desc">{description}</p>
        </div>
        
        <div className='create-holder'><Button size='large' variant='contained' theme={theme} id='create-button'onClick={createCharacter}>Create!</Button></div>
        </div>
    </div>
  )
}