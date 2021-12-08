import logo from './logo.png'
import './Home.css'
import { Button } from '@mui/material'
import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Link, useNavigate } from 'react-router-dom';

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

export default function Home(props) {
  const nav = useNavigate()

  const navHelp = () => {
    props.setToggle(e => !e)
    nav('./help')
  }


  return (
    <div className='home'>
      <div className='logo-holder'>
        <Link to='/charlist' ><img id='logo' src={logo} alt='random quest'/></Link>
      </div>
      <nav-help><p>New? Get Help!</p><Button size='large' variant='contained' theme={theme} onClick={navHelp}>Help</Button></nav-help>
      
  </div>
  )
}