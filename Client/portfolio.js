import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './js/Pages/Home';
import { Projects } from './js/Pages/Projects';
import { Contact } from './js/Pages/Contact';
import { Moes } from './js/Pages/Moes';
import { Flappy } from './js/Pages/Flappy';
import { Clock } from './js/Pages/Clock';
import { Drumkit } from './js/Pages/Drumkit';
import { Skills } from './js/Pages/Skills';

const app = document.getElementById('app');

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/Projects" component={Projects} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Moes" component={Moes} />
      <Route path="/Flappy" component={Flappy} />
      <Route path="/Clock" component={Clock} />
      <Route path="/Drumkit" component={Drumkit} />
      <Route path="/Skills" component={Skills} />
    </div>
  </Router>,
   app);
