import { Link } from "react-router-dom"
import logoThin from './logo-thin.png'

export default function Header() {
  return (
    <header>
      <img src={logoThin} id='head-logo'/>
      <Link to='/'><button>Home</button></Link>
    </header>
  )
}