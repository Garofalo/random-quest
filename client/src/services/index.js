import axios from "axios"

const airTableBase = process.env.REACT_APP_AIRTABLE_BASE
const airTableKey = process.env.REACT_APP_AIRTABLE_KEY

export const characterURL = `https://api.airtable.com/v0/${airTableBase}/characters`

export const config = {
  headers: {
    Authorization: `Bearer ${airTableKey}`
  }
}
export const createNewCharacter = async (body)=>{
  const res = await axios.post(`${characterURL}`, {fields: body}, config)
  return res.data
}


export const rollDicePlayer = (level) => {
  return (Math.floor((Math.random()*20))*5 + (level*5)+5)
}

export const rollDiceComp = (level) => {
  return ((Math.floor((Math.random()*20))*5)+(level*5)+(level*2))
}

export const rollRandomResult = () => {
  let d20 = Math.ceil(Math.random() * 20)
  let d4 = Math.ceil(Math.random() * 4)
  if (d20 === 1) {
    if (d4 === 1||d4===4) {
      return 'fumble1'
    } else if (d4 === 2||d4===3) {
      return 'fumble2'
    } 
  } else if (d20 >= 1 && d20 < 5) {
    if (d4 === 1||d4===4) {
      return 'low1'
    } else if (d4 === 2||d4===3) {
      return 'low2'
    } 
  } else if (d20 >= 5 && d20 < 10) {
    if (d4 === 1||d4===4) {
      return 'average1'
    } else if (d4 === 2||d4===3) {
      return 'average2'
    } 
  } else if (d20 >= 10 && d20 < 15) {
    if (d4 === 1||d4===4) {
      return 'med1'
    } else if (d4 === 2||d4===3) {
      return 'med2'
    } 
  } else if (d20 >= 15 && d20 < 20) {
    if (d4 === 1||d4===4) {
      return 'high1'
    } else if (d4 === 2||d4===3) {
      return 'high2'
    } 
  } else {
    if (d4 === 1||d4===4) {
      return 'crit1'
    } else if (d4 === 2||d4===3) {
      return 'crit2'
    } 
  }
}
