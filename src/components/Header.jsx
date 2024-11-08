import { Link } from "react-router-dom"
const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/PROFILE">Profile</Link>
      <Link to="/myjob">My Job</Link>
    </nav>
  )
}

export default Header