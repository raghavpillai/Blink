import React from "react";
import { Link } from 'react-router-dom';
import LogoText from "../images/Link_logo_name.png";
function Home(){
    return(
        <div className = "h-screen bg-red-200"> 
            <div className = "absolute top-4/10 left-1/2 transform -translate-x-1/4">
                <img className = "w-1/2" src={LogoText}  />
            </div>
            <Link to="/login" className = "absolute left-1/2 top-3/4 transform -translate-x-1/2 bg-blue-200 px-10 py-2 rounded-full text-2xl">
                Login
            </Link>
            
        </div>
    )
}

export default Home;