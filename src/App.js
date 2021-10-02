import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Test from './components/Test';
// import Error from './components/Error';
// import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          {/* <Navigation /> */}
            <Switch>
             <Route path="/" component={Test} exact/>
             <Route path="/test" component={Test} exact/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;