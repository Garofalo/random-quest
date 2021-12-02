import axios from "axios"
import { useState, useEffect } from "react"
import {characterURL, config} from '../services/index'



export default function CharacterList() {
  const [characterList, setCharacterList] = useState([])
  

  useEffect(() => {
    const getCharacterList = async () => {
      const res = await axios.get(characterURL, config)
      setCharacterList(res.data)
    }
    getCharacterList()
    console.log(characterList)
},[])
console.log(characterList)

  return (
    <div>

    </div>
  )
}