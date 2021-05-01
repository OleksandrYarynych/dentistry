import React from 'react';
import {BrowserRouter as Router, Route,Redirect } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import MobileNav from './Components/Nav/MobileNav'

import './App.css';
import Main from './Components/Main/Main';

function App() {
  return (
    <Router >
      <Nav />
      <MobileNav />

      <Route path='/main' component={Main} />
      <Route path="/" exact render={() => <Redirect to="/main" />} />

      <Footer />
    </Router>
  );
}

export default App;
