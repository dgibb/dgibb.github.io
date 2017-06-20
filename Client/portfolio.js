import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PageLayout } from './js/React Components/Page Layout';
import Home from './js/Pages/Home.json';
import Projects from './js/Pages/Projects.json';
import Contact from './js/Pages/Contact.json';
import Moes from './js/Pages/Moes.json';
import Flappy from './js/Pages/Flappy.json';
import Clock from './js/Pages/Clock.json';
import Drumkit from './js/Pages/Drumkit.json';
import Skills from './js/Pages/Skills.json';
import Chat from './js/Pages/Chat.json';
import OthelloClient from './js/Pages/Othello Client.json';
import PortfolioWebsite from './js/Pages/Portfolio Website.json';

const app = document.getElementById('app');

const home = () => {
  return (
    <PageLayout layout={Home} />
  );
};

const skills = () => {
  return (
    <PageLayout layout={Skills} />
  );
};

const projects = () => {
  return (
    <PageLayout layout={Projects} />
  );
};

const moes = () => {
  return (
    <PageLayout layout={Moes} />
  );
};

const clock = () => {
  return (
    <PageLayout layout={Clock} />
  );
};

const flappy = () => {
  return (
    <PageLayout layout={Flappy} />
  );
};

const drumkit = () => {
  return (
    <PageLayout layout={Drumkit} />
  );
};

const chat = () => {
  return (
    <PageLayout layout={Chat} />
  );
};


const othelloclient = () => {
  return (
    <PageLayout layout={OthelloClient} />
  );
};

const portfoliowebsite = () => {
  return (
    <PageLayout layout={PortfolioWebsite} />
  );
};

const contact = () => {
  return (
    <PageLayout layout={Contact} />
  );
};

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" render={home} />
      <Route path="/Projects" render={projects} />
      <Route path="/Contact" render={contact} />
      <Route path="/Moes" render={moes} />
      <Route path="/Flappy" render={flappy} />
      <Route path="/Clock" render={clock} />
      <Route path="/Drumkit" render={drumkit} />
      <Route path="/Skills" render={skills} />
      <Route path="/Chat" render={chat} />
      <Route path="/Othello Client" render={othelloclient} />
      <Route path="/Portfolio Website" render={portfoliowebsite} />
    </div>
  </Router>,
   app);
