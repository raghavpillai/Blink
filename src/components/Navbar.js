import { Link } from "react-router-dom";

function Navbar() {
  
    return(
      <div className = "h-20 bg-gradient-to-r from-green-500 to-green-300 flex items-center">
        <Link to="/" className = "text-4xl font-bold pl-7">
          Home
        </Link>
      </div>
    )
}

export default Navbar;
