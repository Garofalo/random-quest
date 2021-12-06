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

// need function that calculates outcome
// need dice roller takes level as argument
// need function to display preview
export const rollDicePlayer = (level) => {
  return (Math.floor((Math.random()*20))*5 + (level*5)+5)
}

export const rollDiceComp = (level) => {
  return ((Math.floor((Math.random()*20))*5)+(level*5))
}
