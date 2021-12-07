import { useState, useEffect } from "react"
import { useParams, Link, } from "react-router-dom"
import { rollDicePlayer, rollDiceComp, rollRandomResult, } from "../../services"
import axios from "axios"


export default function Level(props) {
  
  const [level, setLevel] = useState(1)
  const [character, setCharacter] = useState({})
  const [hp, setHp] = useState(100)
  const [enemyHp, setEnemyHp] = useState(100)
  const [enemy, setEnemy] = useState()
  const params = useParams()
  const createEnemy = async () => {
    const noun = await axios.get('https://random-word-form.herokuapp.com/random/noun')
    const adject = await axios.get('https://random-word-form.herokuapp.com/random/adjective')
    console.log(noun.data)
    console.log(adject.data)
    setEnemy(`The ${adject.data} ${noun.data}`)
  }
  useEffect(() => {
    createEnemy()
    setTurn(1)
    if (props.characterList) {
      const foundCharacter = props.characterList.find((char) => { return char.id === params.id })
      setCharacter(foundCharacter)
      if (character?.fields) {
        
        setDefense(character.fields.defense)
      }
      if (props.level) {
        setLevel(props.level)
      }
      setHp(100)
      setEnemyHp(100)
      }
  }, [params.id, props.characterList, level])




  const [currentTurn, setCurrentTurn] = useState('')
  const [prevTurn, setPrevTurn] = useState('')
 
  const [attack, setAttack] = useState('')
  const [defense, setDefense] = useState('')
  const [gameOver, setGameOver] = useState(false)
  const [levelComplete, setLevelComplete] = useState(false)
  const [action, setAction] = useState()
  const [turn, setTurn] = useState(1)


  
  


  
  let random  = 'Magic Space'
  const action1 = () => {
    let resultPlayer = rollDicePlayer(level)
    let resultComp = rollDiceComp(level)
    let modify = 0
 
    setPrevTurn(currentTurn)
   
    if (resultPlayer > resultComp) {
      modify = resultPlayer - resultComp
      setCurrentTurn(`You deal ${modify} damage with your ${attack}!`)
      setEnemyHp(enemyHp - modify)
      checkFightStatus(hp, enemyHp - modify)
    } else if (resultComp > resultPlayer) {
      modify = resultComp - resultPlayer
      setCurrentTurn(`${enemy} deals ${modify} damage to you!`)
      setHp(hp - modify)
      checkFightStatus(hp-modify, enemyHp)
    } else if (resultPlayer === resultComp) {
      setCurrentTurn(`It's a tie! Your ${attack} clashes with their strike!`)
    }
    
  }
  const checkFightStatus=(a, b) => {
    if (a <= 0) {
      setGameOver(true)
    } else if (b <= 0) {
      setLevelComplete(true)
    } 
  }

  const action2 = () => {
    setPrevTurn(currentTurn)
    
    let result = rollRandomResult()
    if (result === 'med1') {
      setCurrentTurn('You Roll decently and do fine')
    } else if (result === 'med2') {
      setCurrentTurn('You Roll med2')
      setHp(90)
    } else if (result === 'average1') {
      setCurrentTurn('You roll higher than average')
      setHp(32)
    } else if (result === 'average2') {
      setCurrentTurn('You roll higher than average2')
      setHp(25)
    } else if (result === 'fumble1') {
      setCurrentTurn('You mess the whole thing up')
      setHp(22)
    } else if (result === 'fumble2') {
      setCurrentTurn('You mess the whole thing up2')
      setHp(73)
    }else if (result === 'crit1') {
      setCurrentTurn(`You use your ${random} power to recover ALL Your HP`)
      setHp(100)
    } else if (result === 'crit2') {
      setCurrentTurn(`You use your ${random} power to Deal 50 Damage to the enemy!`)
      setEnemyHp(enemyHp - 50)
    } else if (result === 'high1') {
      
      setCurrentTurn('High 1')
      setHp(52)
    } else if (result === 'high2') {
      setHp(11)
      setCurrentTurn('High 2')
    } else if (result === 'low1') {
      setCurrentTurn('You Rolled Low1')
      setHp(9)
      } else if (result === 'low2') {
      setCurrentTurn('You Rolled Low2')
    } else {
      console.log(result)
    }
  }
  const test = () => {
    if (action === false) {
      action1()
    } else if (action === true) {
      action2()
    }
    setTurn(e=>e+1)
  }

  const setAction2 = () => {
    setAttack(character?.fields.attack)
    setDefense(character?.fields.defense)
    setAction(true)
  }
  const setAction1= () => {
    setAttack(character?.fields.attack)
    setDefense(character?.fields.defense)
    setAction(false)
  }
  return (
    <div className='level'>{level &&
      <h1>{`Level ${level}`}</h1>    
    }
      <h1>{`Turn ${turn}`}</h1>
      <button onClick={test}>test</button>
      <h1>{character?.fields?.name}</h1>
      <h1>{hp}</h1>
      <h1>{currentTurn}</h1>
      <h2>{enemy}</h2>
      <h2>{enemyHp}</h2>
      <p>Last turn, you</p>
      <h2>{prevTurn}</h2>
      <button onClick={setAction1}>Action 1</button>
      <button onClick={setAction2}>Action 2</button>
      <p>This Turn, you will..</p>{
        action === false ? <p>{attack}</p> : <p>{defense}</p>
      }
      {
        gameOver === true && <Link to='/'><button>Say goodbye!</button></Link>
      }
      {
        levelComplete === true && 
    
        <Link to={`/battle/${params.id}/${level+1}`}><button onClick={()=>setLevel(level +1)}>next level</button></Link>
        
      }

  </div>)
}

