import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { rollDicePlayer, rollDiceComp, rollRandomResult, randomWinWord, randomLossWord, randomContestWord, randomNum, deleteCharacer} from "../../services"
import axios from "axios"


export default function Level(props) {
  
  const [level, setLevel] = useState(1)
  const [character, setCharacter] = useState({})
  const [hp, setHp] = useState(100)
  const [enemyHp, setEnemyHp] = useState(100)
  const [enemy, setEnemy] = useState()
  const [prevEnemy, setPrevEnemy]=useState('')
  const params = useParams()
  const nav = useNavigate()
  const [prevTurn, setPrevTurn] = useState('')
  const [currentTurn, setCurrentTurn] = useState('')
  const [attack, setAttack] = useState('')
  const [defense, setDefense] = useState('')
 

  const createEnemy = async () => {
    const noun = await axios.get('https://random-word-form.herokuapp.com/random/noun')
    const adject = await axios.get('https://random-word-form.herokuapp.com/random/adjective')
    console.log(noun.data)
    console.log(adject.data)
    setEnemy(`The ${adject.data} ${noun.data}`)
  }

  //This Sets The Player
  useEffect(() => {
    
    if (props.characterList) {
      const foundCharacter = props.characterList.find((char) => { return char.id === params.id })
      setCharacter(foundCharacter)
    }
  }, [params.id, props.characterList, level])


  //This Sets The Game
  useEffect(() => {
    
      
    
    setDefense(character?.fields?.defense)
    setAttack(character?.fields?.attack)
    createEnemy()
    setTurn(1)
    setCurrentTurn('')
    if (props.level) {
      setLevel(props.level)
    }
    
    setHp(100)
    setEnemyHp(100)
  
},[character, level])





  const [gameOver, setGameOver] = useState(false)
  const [levelComplete, setLevelComplete] = useState(false)
  const [action, setAction] = useState()
  const [turn, setTurn] = useState(1)


  
  


  
  let randomWin = randomWinWord()
  let randomLoss= randomLossWord()
  const action1 = () => {
    let resultPlayer = rollDicePlayer(level)
    let resultComp = rollDiceComp(level)
    let modify = 0
 
    setPrevTurn(currentTurn)
   
    if (resultPlayer > resultComp) {
      modify = resultPlayer - resultComp
      setCurrentTurn(`Your ${attack} ${randomWin} their strike to deal ${modify} damage!`)
      setEnemyHp(enemyHp - modify)
      checkFightStatus(hp, enemyHp - modify)
    } else if (resultComp > resultPlayer) {
      modify = resultComp - resultPlayer
      setCurrentTurn(`${enemy} ${randomLoss} and deals ${modify} damage to you!`)
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
    let randomContest = randomContestWord()
    let randNum25 = randomNum(25)
    let randNum50 = randomNum(50)
    let randomWin = randomWinWord()
    let randomLoss= randomLossWord()
    let result = rollRandomResult() 
    if (result === 'med1') {
      setCurrentTurn(`${randomContest} turns in your favor, causing ${randNum25} damage!`)
      setEnemyHp(enemyHp - randNum25)
      checkFightStatus(hp, enemyHp-randNum25)
    } else if (result === 'med2') {
      setCurrentTurn(`${defense} makes ${enemy} think twice about attacking, letting you recover ${randNum25} HP!`)
      setHp(hp+randNum25>100 ? 100:hp+randNum25)
    } else if (result === 'average1') {
      setCurrentTurn(`You both engage in ${randomContest} but nothing much comes of it`)
    } else if (result === 'average2') {
      setCurrentTurn(`Your ${defense} doesn't cut the mustard. ${enemy} ${randomLoss} and evens it out.`)
    } else if (result === 'fumble1') {
      setCurrentTurn(`Oh Daaaamn. Your ${defense} rolled a One. Check your HP`)
      setHp(1)
    } else if (result === 'fumble2') {
      setCurrentTurn(`${enemy} talks badly about some deep dark secrets you have. It stings, bad.`)
      setHp(1)
    }else if (result === 'crit1') {
      setCurrentTurn(`${defense} gives you the spirit to continue! You recover ALL Your HP`)
      setHp(100)
    } else if (result === 'crit2') {
      setCurrentTurn(`Your ${defense} absolutely confounds ${enemy}, ${enemy} will take years of therapy to overcome this!`)
      setEnemyHp(1)
    } else if (result === 'high1') {
      
      setCurrentTurn(`Nice! ${randomContest} gets ugly and deals ${randNum50} damage to ${enemy}`)
      setEnemyHp(enemyHp - randNum50)
      checkFightStatus(hp, enemyHp-randNum50)
    } else if (result === 'high2') {
      setCurrentTurn(`Your ${defense} ${randomWin} ${enemy} long enough to catch your breath! You recover ${randNum50} HP!`)
      setHp(hp+randNum50)
    } else if (result === 'low1') {
      setCurrentTurn(`You are bested in ${randomContest}, and suffer ${randNum25} damage!`)
      setHp(hp - randNum25)
      checkFightStatus(hp-randNum25, enemyHp)
      } else if (result === 'low2') {
      setCurrentTurn(`Try as you might, your ${defense} has no effect, and you suffer ${randNum25} damage!`)
      setHp(hp - randNum25)
      checkFightStatus(hp-randNum25, enemyHp)
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
    setTurn(e => e + 1)
    setPrevEnemy(enemy)
  }


  const handleGameOver = async () => {
    const res = await deleteCharacer(params.id)
    if (res) {
      props.setToggle(e=>!e)
      nav('/')
    }
  }
  return (
    <div className='level'>{level &&
      <h1>{`Level ${level}`}</h1>    
    }
      <div className='player'>
      <h1>{character?.fields?.name}</h1>
        <button onClick={test}>Submit Move</button>
        <h1>{hp}</h1>
      <button onClick={()=>setAction(false)}>{attack}</button>
      <button onClick={()=>setAction(true)}>{defense}</button>
      </div>
      <div className='enemy'>
      <h2>{enemy}</h2>
      <h2>{enemyHp}</h2>
      </div>
      <h1>{`Turn ${turn}`}</h1> 
      {gameOver === false && levelComplete === false &&
      <div className='turn-recap'>
      <h1>{currentTurn}</h1>
    
       <p>Last turn, you</p>
      <h2>{prevTurn}</h2>
        <p>This Turn, you will..</p>
        {
      action === false ? <p>{attack}</p> : <p>{defense}</p>
        }
      </div>
      
      
        }
      {
        gameOver === true && <>
          <h1>{`Say Goodbye to ${character.fields.name} Forever!`}</h1>
          <button onClick={handleGameOver}>Goodbye!</button>
        </>
      }
      {
        levelComplete === true && 
    
        <Link to={`/battle/${params.id}/${level + 1}`}><button onClick={() => { setLevel(level + 1); setPrevTurn(`Defeated ${prevEnemy}`); setGameOver(false); setLevelComplete(false)}}>next level</button></Link>
        
      }

  </div>)
}

