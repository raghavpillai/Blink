import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Chat from './components/Chat';
import Home from './components/Home';
import Organizations from './components/Organizations';
import Test from './components/Test';
import Call from './components/Call';
import Login from './components/Login';
import StudentView from './components/StudentView';
import TeacherView from './components/TeacherView';
import TeacherQuestion from './components/TeacherQuiz'


export default function App() {
  return (
    <Router>
      {/* <div className="flex text-2xl justify-between border-2 border-black border-solid">
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
      </div> */}

      <hr />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
        <Route path="/organizations">
          <Organizations />
        </Route>
        <Route path="/call">
          <Call />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/studentview">
          <StudentView />
        </Route>
        <Route path="/teacherview">
          <TeacherView />
        </Route>
        <Route path="/teacherquestion">
          <TeacherQuestion />
        </Route>
      </Switch>
    </Router>
  );
}

