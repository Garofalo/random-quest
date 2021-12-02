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