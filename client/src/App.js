import './Normalize.css';
import './App.css';

import { Routes, Route } from 'react-router-dom'
import CharacterList from './components/CharacterList';
import Home from './components/Home/Home';
import Header from './components/Header';
import Help from './components/Help';
import Create from './components/Create';
import Details from './components/Details';
import axios from 'axios';
import {characterURL,config} from './services/index'
import { useState, useEffect } from 'react';


function App() {
  const [characterList, setCharacterList] = useState([])
  const [toggle, setToggle] = useState(false)
  

  useEffect(() => {
    const getCharacterList = async () => {
      const res = await axios.get(characterURL, config)
      setCharacterList(res?.data?.records)
    }
    getCharacterList()
    
},[toggle])

  return (
    <div className="App">
      <Routes>
        <Route path='/help' element={<><Header /><Help /></>}/>
        <Route path='/charlist' element={<><Header /><CharacterList characterList={characterList} setToggle={setToggle}/></>} />
        <Route path='/' element={<Home setToggle={setToggle}/>} />
        <Route path='/create' element={<><Header /><Create setToggle={setToggle}/></>} />
        <Route path='/details/:id' element={<><Header /><Details characterList={characterList} setToggle={setToggle}/></>}/>
      </Routes>
    </div>
  );
}

export default App;
