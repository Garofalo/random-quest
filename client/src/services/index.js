const airTableBase = process.env.REACT_APP_AIRTABLE_BASE
const airTableKey = process.env.REACT_APP_AIRTABLE_KEY

export const characterURL = `https://api.airtable.com/v0/${airTableBase}/characters`

export const config = {
  headers: {
    Authorization: `Bearer ${airTableKey}`
  }
}