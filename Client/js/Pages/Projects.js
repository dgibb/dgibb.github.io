import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../React Components/Footer';
import { Header } from '../React Components/Header';

export class Projects extends React.Component {
  render() {
    return (
      <div className="content">

        <Header />

        <div id="middle-content" className="row">

          <div className="page-title-container projects outer-container row">
            <div className="col-lg-2 col-md-1 col-sm-0 col-xs-0" />
            <div className="title-inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12">
              <div className="title-container">
                <h1>Projects</h1>
              </div>
            </div>
          </div>

          <div className="outer-container grey row">
            <div className="inner-container col-lg-10 col-md-10 col-sm-12 col-xs-12">
              <h2>All Projects</h2>
              <br /><br />

              <div className=" col-lg-4 col-md-4 col-sm-6 col-xs-6 project">
                <div className="project-container">
                  <Link to="/Projects/Moes">
                    <img className="moes"src="/img/SMB3.png" alt="MOES" />
                    <div className="project-text">
                      <h1>MOES</h1>
                      <div className="project-description">
                        <p>Multiplayer Online Emulator Suite</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className=" col-lg-4 col-md-4 col-sm-6 col-xs-6 project">
                <div className="project-container">
                  <Link to="/Projects/Flappy">
                    <img className="flappy" src="/img/Flappy.png" alt="Flappy" />
                    <div className="project-text">
                      <h1>Flappy</h1>
                      <div className="project-description">
                        <p>Flappy Bird Clone Game</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className=" col-lg-4 col-md-4 col-sm-6 col-xs-6 project">
                <div className="project-container">
                  <Link to="/Projects/Clock">
                    <img className="clock" src="/img/Clock.png" alt="Clock" />
                    <div className="project-text">
                      <h1>Clock</h1>
                      <div className="project-description">
                        <p>Customizable analog clock</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className=" col-lg-4 col-md-4 col-sm-6 col-xs-6 project">
                <div className="project-container">
                  <Link to="/Projects/Drumkit">
                    <img className="drumkit" src="/img/Drumkit.png" alt="Drumkit" />
                    <div className="project-text">
                      <h1>Drumkit</h1>
                      <div className="project-description">
                        <p>Virtual Drumkit Project</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>

        <Footer />

      </div>
    );
  }
}
