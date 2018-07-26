// @flow
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import FadeInRoute from './FadeInRoute';
import Home from './Home';
import Subpage from './Subpage';
import AboutMe from './Components/aboutme';
import Contact from './Components/contact';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__nav">
          <Link to="/">Home</Link>
          <Link to="/subpage">Subpage</Link>
          <Link to="/aboutme">About Me</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="App__children">
          <FadeInRoute exact path="/" component={Home} />
          <FadeInRoute exact path="/subpage" component={Subpage} />
          <FadeInRoute exact path="/aboutme" component={AboutMe} />
          <FadeInRoute exact path="/contact" component={Contact} />
        </div>
      </div>
    );
  }
}
