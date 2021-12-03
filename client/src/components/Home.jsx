import { Link } from "react-router-dom"
import logo from './tre.png'


export default function Home(props) {

  const toggle = () => {
    props.setToggle(e=>!e)
  }

  return (
    <div>
      <img src={logo} />
      <Link to='/help'><button onClick={toggle}>Help</button></Link>
      <Link to='/charlist'><button onClick={toggle}>Play!</button></Link>
  </div>
  )
}