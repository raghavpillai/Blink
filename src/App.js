import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Test from './components/Test';
import Home from './components/Home';
// import Error from './components/Error';
// import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          {/* <Navigation /> */}
            <Switch>
              <Route path="" component={Home} exact/>
             <Route path="/" component={Home} exact/>
             <Route path="/test" component={Test} exact/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;