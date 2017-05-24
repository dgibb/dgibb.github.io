import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './Client/js/Pages/Home';
import { Projects } from './Client/js/Pages/Projects';
import { Contact } from './Client/js/Pages/Contact';
import { Moes } from './Client/js/Pages/Moes';
import { Flappy } from './Client/js/Pages/Flappy';
import { Clock } from './Client/js/Pages/Clock';
import { Drumkit } from './Client/js/Pages/Drumkit';
import { Skills } from './Client/js/Pages/Skills';

const app = document.getElementById('app');

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/Projects" component={Projects} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Projects/Moes" component={Moes} />
      <Route path="/Projects/Flappy" component={Flappy} />
      <Route path="/Projects/Clock" component={Clock} />
      <Route path="/Projects/Drumkit" component={Drumkit} />
      <Route path="/Skills" component={Skills} />
    </div>
  </Router>,
   app);
