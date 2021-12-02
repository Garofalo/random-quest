import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header>
      <Link to='/'><button>Home</button></Link>
    </header>
  )
}