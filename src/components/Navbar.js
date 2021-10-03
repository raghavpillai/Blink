import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export function Navbar(){


    return(
        <div className="flex text-2xl justify-between border-2 border-black border-solid">
        <div className="border-2 p-3 mx-2 justify-self-start">
          <Link to="/">Home</Link>
        </div>
        <div className="flex">
          <div className="border-2 p-3 mx-2">
            <Link to="/chat">Chat</Link>
          </div>
          <div className="border-2 p-3 mx-2">
            <Link to="/organizations">Organizations</Link>
          </div>
          <div className="border-2 p-3 mx-2">
            <Link to="/call">Call</Link>
          </div>
          <div className="border-2 p-3 mx-2">
            <Link to="/test">Test</Link>
          </div>
          
        </div>
      </div>
    )
}
export default Navbar;