import React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
  render() {
    return (
      <div id="header-container"className="container-fluid row">
        <div className="col-lg-1 col-md-1 col-sm-0 col-xs-0" />
        <div id="header" className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
          <div id="name">
            <a><Link to="/">David Gibb</Link></a>
          </div>
          <div id="header-links">
            <Link to="/">Home</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Skills">Skills</Link>
            <Link to="/Contact">Contact</Link>
          </div>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="ham-menu" data-toggle="dropdown">
              <img src="../Client/img/hm.png" height="25" alt="dropdown-menu" />
            </button>
            <div className="dropdown-menu">
              <li className="dropdown-item" href="#"><Link to="/">Home</Link></li>
              <li className="dropdown-item" href="#"><Link to="/Projects">Projects</Link></li>
              <li className="dropdown-item" href="#"><Link to="/Skills">Skills</Link></li>
              <li className="dropdown-item" href="#"><Link to="/Contact">Contact</Link></li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
