import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav style={{display:"flex", gap:"20px", justifyContent:"center", margin:"20px"}}>

      <Link to="/">Home</Link>
      <Link to="/weather">Weather</Link>
      <Link to="/about">About</Link>
      <Link to="/signup">Signup</Link>

    </nav>
  );
}

export default Navbar;