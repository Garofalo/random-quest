import { Link } from "react-router-dom"
import logoThin from './logo-thin.png'

export default function Header() {
  return (
    <header>
      
      <Link to='/'><img src={logoThin} id='head-logo' alt='random quest'/></Link>
    </header>
  )
}