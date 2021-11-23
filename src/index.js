import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Top from './Components/Top';
import Footer from './Components/Footer';
import Profile from './Components/Profile';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Contact  from './Components/Contact';
import PDetails from './Components/PDetails';

import Home from './Components/Home';
import ColorChange from './Components/ColorChange';
import EffectHook from './Components/EffectHook';
import AllPosts from './Components/AllPosts';

ReactDOM.render(
  <React.StrictMode>
    
    <Router>
        <Top/>
        <Switch>
        <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/profile">
              <Profile/>
            </Route>
            <Route exact path="/contact">
              <Contact/>
            </Route>
            <Route exact path="/product/:id">
              <PDetails/>
            </Route>
            <Route exact path="/color">
              <ColorChange/>
            </Route>
            <Route exact path="/effect">
              <EffectHook/>
            </Route>
            <Route exact path="/posts">
              <AllPosts/>
            </Route>
        </Switch>
        <Footer/>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
