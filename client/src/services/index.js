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
export const deleteCharacer = async (id) => {
   
    const res = await axios.delete(`${characterURL}/${id}`, config)
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

let randomWin = ['','outflosses','overpowers', 'beats', 'deregulates', 'overcomes', 'gives a whoopin to', 'catches unawares', 'defeats', 'gets a zinger in on', 'blindsides', 'outpaces', 'steals the freaky license from', 'gets one over on', 'outfuries']

export const randomWinWord = () => {
  let random = Math.ceil(Math.random() * randomWin.length)
  return randomWin[random]
}

let randomLoss = ['', 'tricks you', 'hoodwinks you', 'bamboozles you', 'gets you good', 'catches you slippin, dog', 'beats you to the punch', 'punches you in the face', 'calls some buddies from uptown', 'lures you into a false sense of security', 'wants to talk about your cars extended warranty', "knows you didnt read the terms of service"]

export const randomLossWord = () => {
  let random = Math.ceil(Math.random() * randomLoss.length)
  return randomLoss[random]
}
let randomContest = ['', 'a Staring Contest', 'a Dance Off', 'Loudest Singer-off', 'a Pushup Contest', 'a Fastest to Knit a Sweater Contest', 'a Hot Yoga For the Longest Contest', 'a Guess that Smell Contest', "a Thumb Wrasslin' Match", "a Great Brexit Bake Off", "a Loop, Swoop & Pull Off", "a Game of Hot Hands", "Extreme Jenga", "Greenest Lifestyle Competition", "Whose Hair is That? Contest"]

export const randomContestWord = () => {
  let random = Math.ceil(Math.random() * randomContest.length)
  return randomContest[random]
}

export const randomNum = (mult) => {
  let rand = Math.ceil(Math.random() * mult)
  return rand
}
export const getRandomPic = () => {
  let randID = randomNum(1035)
  if (randID > 100) {
    return `https://picsum.photos/id/${randID}/200/200`
  } else {
    let randID2 = randomNum(999)
    if (randID2 > 100) {
      return `https://picsum.photos/id/${randID}/200/200`
    } else {
      return false
    }
  }
}