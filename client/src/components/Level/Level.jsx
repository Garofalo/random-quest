import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { rollDicePlayer, rollDiceComp } from "../../services"


export default function Level(props) {
  let turn = 1
  
  const [character, setCharacter] = useState({})
  const params = useParams()
  useEffect(() => {
    if (props.characterList) {
      const foundCharacter = props.characterList.find((char) => { return char.id === params.id })
      setCharacter(foundCharacter)
      }
  }, [params.id, props.characterList])



  const [hp, setHp] = useState(100)
  const [enemyHp, setEnemyHp] = useState(100)
  const [playerTurn, setPlayerTurn] = useState('')
  const [level, setLevel] = useState(1)
  const [attack, setAttack] = useState('')
  const [gameOver, setGameOver] = useState(false)
  const [levelComplete, setLevelComplete] = useState(false)



  


  // const rollRandomResult = () => {
  //   let d20 = Math.ceil(Math.random() * 20)
  //   let d4 = Math.ceil(Math.random() * 4)
  //   if (d20 === 1) {
  //     if (d4 === 1||d4===4) {
  //       return 'fumble1'
  //     } else if (d4 === 2||d4===3) {
  //       return 'fumble2'
  //     } 
  //   } else if (d20 >= 1 && d20 < 5) {
  //     if (d4 === 1||d4===4) {
  //       return 'low1'
  //     } else if (d4 === 2||d4===3) {
  //       return 'low2'
  //     } 
  //   } else if (d20 >= 5 && d20 < 10) {
  //     if (d4 === 1||d4===4) {
  //       return 'average1'
  //     } else if (d4 === 2||d4===3) {
  //       return 'average2'
  //     } 
  //   } else if (d20 >= 10 && d20 < 15) {
  //     if (d4 === 1||d4===4) {
  //       return 'med1'
  //     } else if (d4 === 2||d4===3) {
  //       return 'med2'
  //     } 
  //   } else if (d20 >= 15 && d20 < 20) {
  //     if (d4 === 1||d4===4) {
  //       return 'high1'
  //     } else if (d4 === 2||d4===3) {
  //       return 'high2'
  //     } 
  //   } else {
  //     if (d4 === 1||d4===4) {
  //       return 'crit1'
  //     } else if (d4 === 2||d4===3) {
  //       return 'crit2'
  //     } 
  //   }
    //checkFightStatus()
  // }
  
  // let random  = 'Magic Space'
  const test = () => {
    let resultPlayer = rollDicePlayer(level)
    let resultComp = rollDiceComp(level)
    let modify = 0
    console.log(resultPlayer)
    console.log(resultComp)

    if (resultPlayer > resultComp) {
      modify = resultPlayer - resultComp
      setPlayerTurn(`You deal ${modify} damage with your ${attack}!`)
      setEnemyHp(enemyHp - modify)
    } else if (resultComp > resultPlayer) {
      modify = resultComp - resultPlayer
      setPlayerTurn(`The Enemy deals ${modify} damage to you!`)
      setHp(hp - modify)
      
    } else if (resultPlayer === resultComp) {
      setPlayerTurn(`It's a tie! Your ${attack} clashes with their strike!`)
      
    }
    checkFightStatus()
  }
  const checkFightStatus=() => {
    if (hp <= 0) {
      setGameOver(true)
    } else if (enemyHp <= 0) {
      setLevelComplete(true)
    } 
  }
// const test = () => {
//     let result = rollRandomResult()
//     if (result === 'med1') {
//       setPlayerTurn('You Roll decently and do fine')
//     } else if (result === 'med2') {
//       setPlayerTurn('You Roll med2')
//       setHp(90)
//     } else if (result === 'average1') {
//       setPlayerTurn('You roll higher than average')
//       setHp(32)
//     } else if (result === 'average2') {
//       setPlayerTurn('You roll higher than average2')
//       setHp(25)
//     } else if (result === 'fumble1') {
//       setPlayerTurn('You mess the whole thing up')
//       setHp(22)
//     } else if (result === 'fumble2') {
//       setPlayerTurn('You mess the whole thing up2')
//       setHp(73)
//     }else if (result === 'crit1') {
//       setPlayerTurn(`You use your ${random} power to recover ALL Your HP`)
//       setHp(100)
//     } else if (result === 'crit2') {
//       setPlayerTurn(`You use your ${random} power to Deal 50 Damage to the enemy!`)
//       setEnemyHp(enemyHp - 50)
//     } else if (result === 'high1') {
      
//       setPlayerTurn('High 1')
//       setHp(52)
//     } else if (result === 'high2') {
//       setHp(11)
//       setPlayerTurn('High 2')
//     } else if (result === 'low1') {
//       setPlayerTurn('You Rolled Low1')
//       setHp(9)
//       } else if (result === 'low2') {
//       setPlayerTurn('You Rolled Low2')
//     } else {
//       console.log(result)
//     }
    
    
//     console.log(hp)
//   }

  
  return (
    <div className='level'>
      <h1>{`Turn ${turn}`}</h1>
      <button onClick={test}>test</button>
      <h1>{character?.fields?.name}</h1>
      <h1>{hp}</h1>
      <h1>{playerTurn}</h1>
      <h2>Enemy</h2>
      <h2>{enemyHp}</h2>
      {
        gameOver === true && <h1>Game Over</h1>
      }
      {
        levelComplete === true && <h1>You Win!</h1>
      }

  </div>)
}

