import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>Navbar</div>
      <Link to="/signup">Sign Up</Link>
    </nav>
  )
}

export default Navbar