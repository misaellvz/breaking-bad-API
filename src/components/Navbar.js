import logo from "../images/breaking-bad.png"
import "../index.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/"><img className="navbar-logo" src={logo} alt="breaking-bad-logo" /></Link>
      <div className="navbar-titles">
      <Link to="/">Home</Link>
      <Link to="/characters">Characters</Link>
      {/* <Link to="/grid">Grid</Link>
      <Link to="/character">Single</Link> */}
    </div>
    </div>
  );
}

export default Navbar;