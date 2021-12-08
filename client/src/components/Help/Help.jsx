import { useState } from "react"
import './Help.css'
import { Button } from "@mui/material"
import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5271ff',
    },
    secondary: {
      main: '#00e5ff',
  }
  },
});


export default function Help() {

  const [showMore1, setShowMore1] = useState(false)
  const [showMore2, setShowMore2] = useState(false)
  const [showMore3, setShowMore3] = useState(false)
  const [showMore4, setShowMore4] = useState(false)
  const [showMore5, setShowMore5] = useState(false)
  const [showMore6, setShowMore6] = useState(false)
  const [showMore7, setShowMore7] = useState(false)
  const [showMore8, setShowMore8] = useState(false)



  return (
    <div>
      
      <div className='quest-card'>
      <h2>What's the Deal here?</h2>{showMore1 === false &&
          <Button size='small' variant='contained' theme={theme} onClick={() => { setShowMore1(e => !e); }}>Explain Yourself</Button>}
      {
        showMore1 === true && <>
        <h3>Random Quest is very simple- create or select a character and start the quest!</h3>
        <Button size='small' variant='contained' theme={theme} onClick={() => { setShowMore1(e => !e);}}>Fine, you don't have to yell</Button>
      </>}
      </div>
      <div className='quest-card'>
      <h2>It won't let me create a character</h2>{showMore2 === false &&
        <Button size='small' variant='contained' theme={theme} onClick={() => { setShowMore2(e => !e);}}>Explain Yourself</Button>}
      {
        showMore2 === true && <>
            <h3>You gotta fill out all the information. Every box. Yep. Even the Image. Just push random image if you're
              gonna complain about it, sheesh.
            </h3>
        <Button size='small' variant='contained' theme={theme} onClick={() => { setShowMore2(e => !e);}}>Fine, you don't have to yell</Button>
      </>}
      </div>
      <div className='quest-card'>
      <h2>How do I play?</h2>{showMore8 === false &&
        <Button size='small' variant='contained' theme={theme} onClick={() => { setShowMore8(e => !e);}}>Explain Yourself</Button>}
      {
        showMore8 === true && <>
            <h3>Each turn, a character will select either its primary attack, or call on it's powers of randomness and hope for the best.
            </h3>
        <Button size='small' variant='contained' theme={theme} onClick={() => { setShowMore8(e => !e);}}>Fine, you don't have to yell</Button>
      </>}
      </div>
      <div className='quest-card'>
      <h2>What happens if I win?</h2>{showMore3 === false &&
        <Button size='small' variant='contained' theme={theme} onClick={() => { setShowMore3(e => !e);}}>Explain Yourself</Button>}
      {
        showMore3 === true && <>
            <h3>You Level Up! The character is updated at the end of each level. You are fully healed and do a bit more damage.
              Of course, the enemies do too. </h3>
       
        <Button size='small' variant='contained' theme={theme} onClick={() => { setShowMore3(e => !e)}}>Fine, you don't have to yell</Button>
      </>}
      </div>
      <div className='quest-card'>
      <h2>What happens if I lose?</h2>{showMore4 === false &&
        <Button size='small' variant='contained' theme={theme} onClick={() => { setShowMore4(e => !e)}}>Explain Yourself</Button>}
      {
        showMore4 === true && <>
            <h3>No big deal, just start over. With a new character, because if a character is defeated,
              it gets deleted. Bars.
            </h3>
       
        <Button size='small' variant='contained' theme={theme} onClick={() => { setShowMore4(e => !e)}}>Fine, you don't have to yell</Button>
      </>}
      </div>
      <div className='quest-card'>
      <h2>My image is showing up strangely</h2>{showMore5 === false &&
        <Button size='small' variant='contained' theme={theme} onClick={() => { setShowMore5(e => !e)}}>Explain Yourself</Button>}
      {
        showMore5 === true && <>
            <h3>Not really a question, friend, but just refresh the page.</h3>
        <Button size='small' variant='contained' theme={theme} onClick={() => { setShowMore5(e => !e)}}>Fine, you don't have to yell</Button>
      </>}
      </div>
      <div className='quest-card'>
      <h2>Is my progress saved?</h2>{showMore6 === false &&
        <Button size='small' variant='contained' theme={theme} onClick={() => { setShowMore6(e => !e)}}>Explain Yourself</Button>}
      {
        showMore6 === true && <>
            <h3>It **Should** be tracked, so if you quit, the character is on the same level with the proper damage dealt.</h3>
        <Button size='small' variant='contained' theme={theme} onClick={() => { setShowMore6(e => !e)}}>Fine, you don't have to yell</Button>
      </>}
      </div>
      <div className='quest-card'>
      <h2>Hows your day going?</h2>{showMore7 === false &&
        <Button size='small' variant='contained' theme={theme} onClick={() => { setShowMore7(e => !e)}}>Explain Yourself</Button>}
      {
        showMore7 === true && <>
            <h3>Just peachy. Shouldn't you be sacrificing characters to the random gods?</h3>
        <Button size='small' variant='contained' theme={theme} onClick={() => { setShowMore7(e => !e)}}>Fine, you don't have to yell</Button>
      </>}
      </div>
    </div>
  )
}