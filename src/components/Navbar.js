import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export function Navbar(){


    return(
        <div className="flex md:text-2xl text:lg justify-between bg-gradient-to-r from-purple-700 to-pink-600 ">
        <div className=" text-white p-3 mx-2 justify-self-start transition duration-500 ease-in-out transform hover:-translate-y-1">
          <Link to="/">Home</Link>
        </div>
        <div className="flex md:pr-3 ">
          <div className=" text-white md:p-3 p-2 mx-2 transition duration-500 ease-in-out transform hover:-translate-y-1">
            <a href = "#aboutUs">About Us</a>
          </div>
          <div className=" text-white md:p-3 p-2 mx-2 transition duration-500 ease-in-out transform hover:-translate-y-1">
            <a href = "#start">Start</a>
          </div>
          
        </div>
      </div>
    )
}
export default Navbar;