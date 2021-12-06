import { useState, useEffect } from "react"
import { useParams } from "react-router"


export default function Level(props) {
  let turn = 1
  const [character, setCharacter] = useState({})
  const [hp, setHp] = useState(100)
  const [playerTurn, setPlayerTurn] = useState('')
  const params = useParams()


  useEffect(() => {
    if (props.characterList) {
      const foundCharacter = props.characterList.find((char) => { return char.id === params.id })
      setCharacter(foundCharacter)
      }
  }, [params.id, props.characterList])


  const rollRandomResult = () => {
    let d20 = Math.ceil(Math.random() * 20)
    let d4 = Math.ceil(Math.random() * 4)
    if (d20 === 1) {
      return ('fumble')
    } else if (d20 >= 1 && d20 < 5) {
      return ('low')
    } else if (d20 >= 5 && d20 < 10) {
      return ('med')
    } else if (d20 >= 10 && d20 < 15) {
      return ('average')
    } else if (d20 >= 15 && d20 < 20) {
      return ('high')
    } else {
      return 'crit'
    }
    //checkFightStatus()
  }
  

  
  const test = () => {
    let result = rollRandomResult()
    if (result === 'med') {
      setPlayerTurn('You Roll decently and do fine')
    } else if (result === 'average') {
      setPlayerTurn('You roll higher than average')
    } else if (result === 'fumble') {
      setPlayerTurn('You mess the whole thing up')
    } else if (result === 'crit') {
      setPlayerTurn('CRITICAL')
    } else if (result === 'low') {
      setPlayerTurn('You Rolled Low')
    }
    
    setHp(character.fields.hp)
    console.log(hp)
  }
  
  return (
    <div className='level'>
      <h1>{turn}</h1>
      <button onClick={test}>test</button>
      <h1>{character?.fields?.name}</h1>
      <h1>{hp}</h1>
      <h1>{playerTurn}</h1>

  </div>)
}

