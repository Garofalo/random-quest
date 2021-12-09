import './Normalize.css';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import CharacterList from './components/List/CharacterList';
import Home from './components/Home/Home';
import Header from './components/Header';
import Help from './components/Help/Help';
import Create from './components/Create/Create';
import Details from './components/details/Details';
import axios from 'axios';
import {characterURL,config, hallURL} from './services/index'
import { useState, useEffect } from 'react';
import Level from './components/Level/Level';


function App() {
  const [characterList, setCharacterList] = useState([])
  const [hall, setHall] = useState([])
  const [toggle, setToggle] = useState(false)
  

  useEffect(() => {
    const getCharacterList = async () => {
      const res = await axios.get(characterURL, config)
      setCharacterList(res?.data?.records)
      const win = await axios.get(hallURL, config)
      setHall(win?.data?.records[0])
    }
    getCharacterList()
    
},[toggle])

  return (
    <div className="App">
      <Routes>
        <Route path='/help' element={<><Header /><Help /></>}/>
        <Route path='/charlist' element={<><Header /><CharacterList characterList={characterList} setToggle={setToggle}/></>} />
        <Route path='/' element={<Home hall={hall} setToggle={setToggle}/>} />
        <Route path='/create' element={<><Header /><Create setToggle={setToggle}/></>} />
        <Route path='/details/:id' element={<><Header /><Details characterList={characterList} setToggle={setToggle} /></>} />
        <Route path='/battle/:id' element={<><Header /><Level characterList={characterList} setToggle={setToggle} hall={hall} setHall={setHall}/></>} />
        <Route path='/battle/:id/:level' element={<><Header /><Level characterList={characterList} setToggle={setToggle} hall={hall} setHall={setHall}/></>}/>
      </Routes>
    </div>
  );
}

export default App;
