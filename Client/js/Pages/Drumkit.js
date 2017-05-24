import React from 'react';
import { Footer } from '../React Components/Footer';
import { Header } from '../React Components/Header';


export class Drumkit extends React.Component {
  render() {
    return (
      <div className="content">

        <Header />

        <div id="middle-content"className="row">

          <div className="page-title-container drumkit outer-container row">
            <div className="col-lg-2 col-md-1 col-sm-0 col-xs-0" />
            <div className="title-inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12">
              <div className="title-container">
                <h1>Drumkit </h1>
              </div>
            </div>
          </div>

          <div className="outer-container grey row">
            <div className="inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12">
              <div className="link-container col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <button><a href="http://github.com/dgibb/Drum-Kit"> Source Code</a></button>
              </div>
              <div className="link-container col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <button><a href="http://dgibb.github.io/Drum-Kit">Live Demo</a></button>
              </div>
            </div>
          </div>

          <div className="outer-container white row">
            <div className="inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12">
              <h2>About Drumkit</h2>
              <p>
                Drumkit is an online virtual drum machine that plays drum sounds as you type on
                your keyboard. It was written in javascript by grabbing elements from the DOM and
                assigning keydown events to them.
              </p>
            </div>
          </div>

          <div className="outer-container grey row">

            <div className="row">
              <div className="inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12">
                <h2>Technologies Used</h2>
                <p>Here are the Languages and tools I used to make this project</p>
              </div>
            </div>

            <div className="row">
              <div className="projects-inner-container col-centered col-lg-8 col-md-10 col-sm-12
   col-xs-12" >

                <div className=" skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill white">
                    <img src="/Client/img/Skills/js.png" alt="JavaScript" />
                    <div className="slider">
                      <p>Javascript</p>
                    </div>
                  </div>
                </div>

                <div className=" skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill white">
                    <img src="/Client/img/Skills/css.png" alt="CSS" />
                    <div className="slider">
                      <p>CSS</p>
                    </div>
                  </div>
                </div>

                <div className=" skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill white">
                    <img src="/Client/img/Skills/html.png" alt="HTML" />
                    <div className="slider">
                      <p>HTML</p>
                    </div>
                  </div>
                </div>

                <div className=" skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill white">
                    <img src="/Client/img/Skills/react.png" alt="React.js" />
                    <div className="slider">
                      <p>React.js</p>
                    </div>
                  </div>
                </div>

                <div className=" skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill white">
                    <img src="/Client/img/Skills/Bootstrap.png" alt="Bootstrap" />
                    <div className="slider">
                      <p>Bootstrap</p>
                    </div>
                  </div>
                </div>

                <div className=" skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill white">
                    <img src="/Client/img/Skills/sass.png" alt="SASS" />
                    <div className="slider">
                      <p>SASS</p>
                    </div>
                  </div>
                </div>

                <div className=" skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill white">
                    <img src="/Client/img/Skills/webpack.png" alt="Webpack" />
                    <div className="slider">
                      <p>Webpack</p>
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
