import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getRandomPic, rollDicePlayer, rollDiceComp, rollRandomResult, randomWinWord, randomLossWord, randomContestWord, randomNum, deleteCharacer, levelUp, highScore} from "../../services"
import axios from "axios"
import './Level.css'
import { Button } from "@mui/material"
import { createTheme } from '@mui/material/styles';
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


export default function Level(props) {
  
  const [level, setLevel] = useState(1)
  const [character, setCharacter] = useState({})
  const [hp, setHp] = useState(100)
  const [enemyHp, setEnemyHp] = useState('??')
  const [enemy, setEnemy] = useState()
  const [prevEnemy, setPrevEnemy]=useState('')
  const params = useParams()
  const nav = useNavigate()
  const [prevTurn, setPrevTurn] = useState('')
  const [currentTurn, setCurrentTurn] = useState('')
  const [attack, setAttack] = useState('')
  const [defense, setDefense] = useState('')
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [totalDamage, setTotalDamage] = useState(0)
  const [enemyImg, setEnemyImg] = useState('')
  const [high, setHigh] = useState(0)
  const [tempLevel, setTempLevel] = useState('')
  

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

  useEffect(() => {

    setEnemyHp(parseInt(tempLevel * 50))
  },[level, enemy, tempLevel])

  //This Sets The Game
  useEffect(() => {
    setTempLevel(parseInt(character?.fields?.level))
    
    setHigh(parseInt(props?.hall?.fields?.level))
    const randPic = getRandomPic()
    setEnemyImg(randPic)
    setDefense(character?.fields?.defense)
    setAttack(character?.fields?.attack)
    setName(character?.fields?.name)
    setImage(character?.fields?.image)
    setDescription(character?.fields?.description)
    setTotalDamage(parseInt(character?.fields?.totalDamage))
    createEnemy()
    setTurn(1)
    setCurrentTurn('')
    setHp(100)
  }, [character, level,props?.hall?.fields?.level,  ])





  const [gameOver, setGameOver] = useState(false)
  const [levelComplete, setLevelComplete] = useState(false)
  const [action, setAction] = useState()
  const [turn, setTurn] = useState(1)


  
  


  
  
  const action1 = () => {
    let randomWin = randomWinWord()
    let randomLoss= randomLossWord()
    let resultPlayer = rollDicePlayer(tempLevel)
    let resultComp = rollDiceComp(tempLevel)
    let modify = 0
    setPrevTurn(currentTurn)
    

    if (resultPlayer > resultComp) {
      modify = resultPlayer - resultComp
      setCurrentTurn(`Your ${attack} ${randomWin ? randomWin: 'beats'} their strike to deal ${modify} damage!`)
      setEnemyHp(enemyHp - modify)
      setTotalDamage(totalDamage + modify)
      checkFightStatus(hp, enemyHp - modify)
    } else if (resultComp > resultPlayer) {
      modify = resultComp - resultPlayer
      setCurrentTurn(`${enemy} ${randomLoss ? randomLoss: 'smacks you upside your head'} and deals ${modify} damage to you!`)
      setHp(hp - modify)
      checkFightStatus(hp-modify, enemyHp)
    } else if (resultPlayer === resultComp) {
      setCurrentTurn(`It's a tie! Your ${attack} clashes with their strike!`)
    }
    
  }
  const checkFightStatus=(a, b) => {
    if (a <= 0) {
      setGameOver(true)
      setHp('You Dead')
      setEnemyHp(`Dances over your defeated form`)
    } else if (b <= 0) {
      setLevelComplete(true)
      setEnemyHp('DEAD!!')
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
      setTotalDamage(totalDamage + randNum25)
      checkFightStatus(hp, enemyHp-randNum25)
    } else if (result === 'med2') {
      setCurrentTurn(`${defense} makes ${enemy} think twice about attacking, letting you recover ${randNum25} HP!`)
      setHp(hp+randNum25>100 ? 100:hp+randNum25)
    } else if (result === 'average1') {
      setCurrentTurn(`You both engage in ${randomContest ? randomContest: 'horseplay'} but nothing much comes of it`)
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
      setTotalDamage(damage => (enemyHp-1)+damage)
      setEnemyHp(1)
    } else if (result === 'high1') {
      setCurrentTurn(`Nice! ${randomContest ? randomContest: 'horseplay'} gets ugly and deals ${randNum50} damage to ${enemy}`)
      setEnemyHp(enemyHp - randNum50)
      setTotalDamage(totalDamage + randNum50)
      checkFightStatus(hp, enemyHp-randNum50)
    } else if (result === 'high2') {
      setCurrentTurn(`Your ${defense} ${randomWin ? randomWin: 'beats'} ${enemy} long enough to catch your breath! You recover ${randNum50} HP!`)
      setHp(hp+randNum50)
    } else if (result === 'low1') {
      setCurrentTurn(`You are bested in ${randomContest ? randomContest: 'horseplay'}, and suffer ${randNum25} damage!`)
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
    console.log(typeof enemyHp)
    setTurn(e => e + 1)
    setPrevEnemy(enemy)
  }


  const handleGameOver = async () => {
    const res = await deleteCharacer(params.id)

    const newHigh = {
      name,
      level: parseInt(level) 
    }
    if (level >= high) {
      const up = await highScore(newHigh, props?.hall?.id)
      return up
    }
    if (res) {
      props.setToggle(e=>!e)
      nav('/')
    }
  }
  const handleLevelComplete = async () => {
    setLevel(level + 1);
    setTempLevel(tempLevel + 1)
    setPrevTurn(`Defeated ${prevEnemy}`);
    setGameOver(false);
    setLevelComplete(false)
    setEnemyHp(50*(level+1))
    const levelUpChar = {
      name,
      attack,
      defense,
      image,
      description,
      hp: '100',
      level: parseInt(level),
      totalDamage: parseInt(totalDamage),
    }
    const response = await levelUp(levelUpChar, params.id)
      props.setToggle(e=>!e)
      if (response) {
        nav(`/battle/${params.id}/${level + 1}`)
      }
  }
  return (
    <div className='level'>{level &&
      <div id='current'>
       <div id='level'>
        <h1>Level</h1>
        <h1>{tempLevel}</h1>
      </div>
      <div id='turn'>
        <h1>Turn</h1>
        <h1>{turn}</h1>
      </div>
     <div id='total-dam'>
        <h1>Total Damage</h1>
        <h1 className='red'>{totalDamage}</h1>
      </div>
    </div>
    } { levelComplete===false && gameOver ===false &&
        <div className='player'>
          <div className='name'><h1 >{character?.fields?.name}</h1></div>
          <Button size='large' variant='contained' theme={theme} id='submit' onClick={test}>Submit Move</Button>
          <div className='hp'>
            <h1>HP Remaining</h1>
            <h1 id='hp'>{hp}</h1>
          </div>
          <div className='selectors'>
            <div className='selector-button'><Button size='large' variant='contained' theme={theme} id='primary' onClick={() => setAction(false)}>{attack}</Button></div>
            <div className='selector-button'><Button size='large' variant='contained' theme={theme} id='defense' onClick={() => setAction(true)}>{defense}</Button></div>
          </div>
        </div>}
      <h2 className='enemy-name red'>{enemy}</h2>
      <div className='enemy'>
        
        <div className='enemy-bottom'>
        { enemyImg !== undefined &&
            <div className='frame-enemy'>
            <div className='frame-pic'>
              <img src={enemyImg} alt='something random' />
            </div>
            <div className='enemy-hp'>
              { gameOver === false && levelComplete === false &&
              <h2>HP</h2>}
              <h2>{enemyHp}</h2>
            </div>
            </div>}
          <div className='current-turn'>
            <h1>{currentTurn}</h1>
          </div>
        </div>
        
      </div>
      
      {gameOver === false && levelComplete === false &&
      <div className='turn-recap'>
      
        <div className='recap-left'>
      <p>Last turn,</p>
      <p>{prevTurn}</p></div>
        <div id='recap-right'><p >This Turn, you will use..</p>
        {
      action === false ? <p>{attack}</p> : <p>{defense}</p>
        }</div>
      </div>
      
      
        }
      {
        gameOver === true && <div className='goodbye'>
          <h1>{`Say Goodbye to ${character.fields.name} Forever!`}</h1>
          <Button size='large' variant='contained' theme={theme} onClick={handleGameOver}>Goodbye!</Button>
          <h1>{`HP: ${hp}`}</h1>
        </div>
      }
      {
        levelComplete === true && 
      <div className='levelup'><Button size='large' variant='contained' theme={theme}  onClick={handleLevelComplete}>Level Up!</Button></div>
        
      }

  </div>)
}

