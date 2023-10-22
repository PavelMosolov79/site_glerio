"use client";
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './Home';
import ProjectPage from './projectPage';
import { useRef } from "react";


function App() {
  const fullpage = useRef(null);
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/projectPage/:id" component={ProjectPage} />
      </Switch>
    </Router>
  );
}

export default App;