import React from 'react';
import {BrowserRouter as Router, Route,Redirect } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import MobileNav from './Components/Nav/MobileNav'
import Main from './Components/Main/Main';
import Blog from './Components/Blog/Blog';
import FirstFullArticle from './Components/FullArticles/FirstFullArticle';
import SecondFullArticle from './Components/FullArticles/SecondFullArticle';
import ThirdFullArticle from './Components/FullArticles/ThirdFullArticle';
import Service from './Components/ServicePage/Service';

import './App.css';

function App() {
  return (
    <Router >
      <Nav />
      <MobileNav />

      <Route path='/main' component={Main} />
      <Route path='/blog' component={Blog} />
      <Route path='/service' component={Service} />
      <Route path='/blogarticle1' component={FirstFullArticle} />
      <Route path='/blogarticle2' component={SecondFullArticle} />
      <Route path='/blogarticle3' component={ThirdFullArticle} />
      <Route path="/" exact render={() => <Redirect to="/main" />} />

      <Footer />
    </Router>
  );
}

export default App;
