import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Chat from './components/Chat';
import Home from './components/Home';
import Login from './components/Login';
import Organizations from './components/Organizations'
// import Error from './components/Error';
// import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          {/* <Navigation /> */}
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/login" component={Login} exact/>
             <Route path="/organizations" component={Organizations} exact/>
             <Route path="/chat" component={Chat} exact/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;