import { Link } from "react-router-dom"


export default function Home(props) {

  const toggle = () => {
    props.setToggle(e=>!e)
  }

  return (
    <div>
      <Link to='/help'><button onClick={toggle}>Help</button></Link>
      <Link to='/charlist'><button onClick={toggle}>Play!</button></Link>
  </div>
  )
}