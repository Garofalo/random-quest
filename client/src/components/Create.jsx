import { useState } from "react"
import { useNavigate } from "react-router"
import { createNewCharacter } from "../services"

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
      setImage('https://random.imagecdn.app/200/200')
    } else {
      setImage('https://source.unsplash.com/random/200x200/?img=1')
    }
    setToggleImg(e=>!e)
  }
  return (
    <div>
      <form onSubmit={createCharacter}>
        <input type='text' id='name' value={name} 
        onChange={(e) => { setName(e.target.value) }} placeholder="What's your name?" />
        <input type='text' id='attack' value={attack}
          onChange={(e) => { setAttack(e.target.value) }} placeholder="What's your primary attack?" />
        <input type='text' id='defense' value={defense}
          onChange={(e) => { setDefense(e.target.value) }} placeholder="What's your defensive move?" />
        <input type='text' id='description' value={description}
          onChange={(e) => { setDescription(e.target.value) }} placeholder="Describe your character" />
        <input type='text' id='image' value={image} 
          onChange={(e) => { setImage(e.target.value) }} placeholder="Add an image URL" />
        <button>Create!</button>
      </form>
      <img src={image} />
      <button onClick={()=>{getRandomPic()}}>Random Image</button>
    </div>
  )
}