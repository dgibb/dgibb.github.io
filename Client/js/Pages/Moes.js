import React from 'react';
import { Footer } from '../React Components/Footer';
import { Header } from '../React Components/Header';


export class Moes extends React.Component {
  render() {
    return (
      <div className="content">

        <Header />

        <div id="middle-content"className="row">

          <div className="page-title-container moes outer-container row">
            <div className="col-lg-2 col-md-1 col-sm-0 col-xs-0" />
            <div className="title-inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12">
              <div className="title-container">
                <h1>MOES </h1>
              </div>
            </div>
          </div>

          <div className="outer-container grey row">
            <div className="inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12">
              <div className="link-container col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <button><a href="http://github.com/dgibb/MOES"> Source Code</a></button>
              </div>
              <div className="link-container col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <button><a href="http://dgibb.github.io/MOES">Live Demo</a></button>
              </div>
            </div>
          </div>

          <div className="outer-container white row">
            <div className="inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12">
              <h2>About MOES</h2>
              <p>
                MOES, the Multiplayer Online Emulation Suite, is a project that strives to provide
                its users with a clean and accurate web based emulation experience. It currently
                consists of two browser based emulators written in Javascript, one for Nintendo
                Gameboy, and one for Nintendo Entertainment System.
              </p>
            </div>
          </div>

          <div className="outer-container grey row">
            <div className="inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12">
              <h2>Features</h2>
              <p>Here are some of the key features of MOES</p>
            </div>
            <div className="projects-inner-container col-lg-10 col-md-10 col-sm-12 col-xs-12" >

              <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12 project">
                <div className="feature-list-container">
                  <div className="project-text">
                    <h1>GameBoy</h1>
                    <div className="feature-list">
                      <ul>
                        <li>100% accurate Z80 emulation</li>
                        <li>MBC 0 and 1 suppport</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12 project">
                <div className="feature-list-container">
                  <div className="project-text">
                    <h1>NES</h1>
                    <div className="feature-list">
                      <ul>
                        <li>100% accurate 6502 emulation</li>
                        <li>mapper 0,1,4 support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12 project">
                <div className="feature-list-container">
                  <div className="project-text">
                    <h1>In Progress</h1>
                    <div className="feature-list">
                      <ul>
                        <li>GBA support</li>
                        <li>N64 support</li>
                        <li>server based emulation</li>
                        <li>custom graphics</li>
                        <li>debuggers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="outer-container white row">

            <div className="row">
              <div className="inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12">
                <h2>Technologies Used</h2>
                <p>Here are the Languages and tools I used in the production of this project</p>
              </div>
            </div>

            <div className="row">
              <div className="projects-inner-container col-centered col-lg-8 col-md-10 col-sm-12
   col-xs-12" >

                <div className="skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill">
                    <img src="/Client/img/Skills/js.png" alt="JavaScript" />
                    <div className="slider">
                      <p>Javascript</p>
                    </div>
                  </div>
                </div>

                <div className="skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill">
                    <img src="/Client/img/Skills/css.png" alt="CSS" />
                    <div className="slider">
                      <p>CSS</p>
                    </div>
                  </div>
                </div>

                <div className="skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill">
                    <img src="/Client/img/Skills/html.png" alt="JavaScript" />
                    <div className="slider">
                      <p>HTML</p>
                    </div>
                  </div>
                </div>

                <div className="skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill">
                    <img src="/Client/img/Skills/Bootstrap.png" alt="JavaScript" />
                    <div className="slider">
                      <p>Bootstrap</p>
                    </div>
                  </div>
                </div>

                <div className="skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill">
                    <img src="/Client/img/Skills/sass.png" alt="JavaScript" />
                    <div className="slider">
                      <p>SASS</p>
                    </div>
                  </div>
                </div>

                <div className="skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill">
                    <img src="/Client/img/Skills/grunt.png" alt="JavaScript" />
                    <div className="slider">
                      <p>Grunt</p>
                    </div>
                  </div>
                </div>

                <div className="skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill">
                    <img src="/Client/img/Skills/z80.png" alt="JavaScript" />
                    <div className="slider">
                      <p>Z80 Assembly</p>
                    </div>
                  </div>
                </div>

                <div className="skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill">
                    <img src="/Client/img/Skills/6502.png" alt="JavaScript" />
                    <div className="slider">
                      <p>6502 Assembly</p>
                    </div>
                  </div>
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
