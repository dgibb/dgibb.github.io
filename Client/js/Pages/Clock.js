import React from 'react';
import { Footer } from '../React Components/Footer';
import { Header } from '../React Components/Header';


export class Clock extends React.Component{

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="content">

        <Header />

        <div id="middle-content"className="row">

          <div className="page-title-container clock outer-container row">
            <div className="col-lg-2 col-md-1 col-sm-0 col-xs-0" />
            <div className="title-inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12">
              <div className="title-container">
                <h1>Clock </h1>
              </div>
            </div>
          </div>

          <div className="outer-container grey row">
            <div className="inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12">
              <div className="link-container col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <button><a href="http://github.com/dgibb/JavaScript-Analog-Clock"> Source Code</a></button>
              </div>
              <div className="link-container col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <button><a href="http://dgibb.github.io/JavaScript-Analog-Clock">Live Demo</a></button>
              </div>
            </div>
          </div>

          <div className="outer-container white row">
            <div className="inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12">
              <h2>About Clock</h2>
              <p>
                Clock is an analog clock written in Javascript and CSS. Clock has 3 hands one for
                hours, minutes and seconds that get updated on a 1000 millisecond interval. With
                each update the hands run an animation to move them to the position that will show
                the correct time. Clock also has interchangable backgrounds to choose from.
              </p>
            </div>
          </div>

          <div className="outer-container grey row">

            <div className="row">
              <div className="inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12">
                <h2>Technologies Used</h2>
                <p>Here are the languages and tools I used to make this project</p>
              </div>
            </div>

            <div className="row">
              <div className="projects-inner-container col-centered col-lg-8 col-md-10 col-sm-12
   col-xs-12" >

                <div className=" skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill white">
                    <img src="/img/Skills/js.png" alt="JavaScript" />
                    <div className="slider">
                      <p>Javascript</p>
                    </div>
                  </div>
                </div>

                <div className=" skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill white">
                    <img src="/img/Skills/css.png" alt="CSS" />
                    <div className="slider">
                      <p>CSS</p>
                    </div>
                  </div>
                </div>

                <div className=" skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill white">
                    <img src="/img/Skills/html.png" alt="HTML" />
                    <div className="slider">
                      <p>HTML</p>
                    </div>
                  </div>
                </div>

                <div className=" skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill white">
                    <img src="/img/Skills/react.png" alt="React.js" />
                    <div className="slider">
                      <p>React.js</p>
                    </div>
                  </div>
                </div>

                <div className=" skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill white">
                    <img src="/img/Skills/Bootstrap.png" alt="Bootstrap" />
                    <div className="slider">
                      <p>Bootstrap</p>
                    </div>
                  </div>
                </div>

                <div className=" skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill white">
                    <img src="/img/Skills/sass.png" alt="SASS" />
                    <div className="slider">
                      <p>SASS</p>
                    </div>
                  </div>
                </div>

                <div className=" skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill white">
                    <img src="/img/Skills/webpack.png" alt="Webpack" />
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
