import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export function Navbar(){


    return(
        <div className="flex md:text-2xl text:lg justify-between bg-gradient-to-r from-yellow-400 to-yellow-100 ">
        <div className=" p-3 mx-2 justify-self-start transition duration-500 ease-in-out transform hover:-translate-y-1">
          <Link to="/">Home</Link>
        </div>
        <div className="flex md:pr-3 ">
          <div className=" md:p-3 p-2 mx-2 transition duration-500 ease-in-out transform hover:-translate-y-1">
            <Link to="/chat">Chat</Link>
          </div>
          <div className=" md:p-3 p-2 mx-2 transition duration-500 ease-in-out transform hover:-translate-y-1">
            <Link to="/organizations">Organizations</Link>
          </div>
          <div className=" md:p-3 p-2 mx-2 transition duration-500 ease-in-out transform hover:-translate-y-1">
            <Link to="/call">Call</Link>
          </div>
          <div className=" md:p-3 p-2 mx-2 transition duration-500 ease-in-out transform hover:-translate-y-1">
            <Link to="/test">Test</Link>
          </div>
          
        </div>
      </div>
    )
}
export default Navbar;