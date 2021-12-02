import './App.css';
import { Routes, Route } from 'react-router-dom'
import CharacterList from './components/CharacterList';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<CharacterList />}/>
      </Routes>
    </div>
  );
}

export default App;
