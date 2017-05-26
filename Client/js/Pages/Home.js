import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../React Components/Footer';
import { Header } from '../React Components/Header';


export class Home extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (

      <div className="content">

        <Header />

        <div id="middle-content"className="row">

          <div className="page-title-container home outer-container row">
            <div className="col-lg-2 col-md-1 col-sm-0 col-xs-0" />
            <div className="title-inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12">
              <div className="title-container">
                <h1>Welcome</h1>
              </div>
            </div>
          </div>

          <div className="outer-container white row">
            <div className="inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12">
              <h2>About Me</h2>
              <p>
              Hi my name is David Gibb and Im a 24 year old software developer based out of the
              Boston area. I have an education computer systems engineering and a strong passion
              for learning that drives me to take on extracurricuar projects and use new
              technologies. I enjoy writing all kinds of programs from microprocessor simulators
              and console emulators to browser based games and tools. Take a look around my website
              to find out more about who I am and what I do!
            </p>
            </div>
          </div>


          <div className="outer-container grey row">
            <div className="row">
              <div className="inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12">
                <h2>Projects</h2>
                <p>Here are a few of the projects Ive been working on recently.</p>
              </div>
            </div>

            <div className="projects-inner-container row">
              <div className=" col-lg-3 col-md-3 col-sm-6 col-xs-6 project">
                <div className="project-container">
                  <Link to="/Moes">
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

              <div className=" col-lg-3 col-md-3 col-sm-6 col-xs-6 project">
                <div className="project-container">
                  <Link to="/Flappy">
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

              <div className=" col-lg-3 col-md-3 col-sm-6 col-xs-6 project">
                <div className="project-container">
                  <Link to="/Clock">
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

              <div className=" col-lg-3 col-md-3 col-sm-6 col-xs-6 project">
                <div className="project-container">
                  <Link to="/Drumkit">
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

            <div className="button-container row">
              <button><Link to="/Projects"> See All Projects</Link></button>
            </div>

          </div>

          <div className="outer-container white row">
            <div className="row">
              <div className="inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12">
                <h2>Skills and Proficiencies</h2>
                <p>Here are some of the Languages and Tools Ive worked with.</p>
              </div>
            </div>

            <div className="row">
              <div className="projects-inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12" >

                <div className="skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill">
                    <img src="/img/Skills/js.png" alt="Javascript" />
                    <div className="slider">
                      <p>Javascript</p>
                    </div>
                  </div>
                </div>

                <div className="skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill">
                    <img src="/img/Skills/css.png" alt="CSS" />
                    <div className="slider">
                      <p>CSS</p>
                    </div>
                  </div>
                </div>

                <div className="skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill">
                    <img src="/img/Skills/html.png" alt="HTML" />
                    <div className="slider">
                      <p>HTML</p>
                    </div>
                  </div>
                </div>

                <div className="skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill">
                    <img src="/img/Skills/react.png" alt="React.js" />
                    <div className="slider">
                      <p>React.js</p>
                    </div>
                  </div>
                </div>

                <div className="skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill">
                    <img src="/img/Skills/Bootstrap.png" alt="Bootstrap" />
                    <div className="slider">
                      <p>Bootstrap</p>
                    </div>
                  </div>
                </div>

                <div className="skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill">
                    <img src="/img/Skills/sass.png" alt="SASS" />
                    <div className="slider">
                      <p>SASS</p>
                    </div>
                  </div>
                </div>

                <div className="skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill">
                    <img src="/img/Skills/node.png" alt="Node.js" />
                    <div className="slider">
                      <p>Node.js</p>
                    </div>
                  </div>
                </div>


                <div className="skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill">
                    <img src="/img/Skills/express.png" alt="Express.js" />
                    <div className="slider">
                      <p>Express.js</p>
                    </div>
                  </div>
                </div>

                <div className="skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill">
                    <img src="/img/Skills/webpack.png" alt="Webpack" />
                    <div className="slider">
                      <p>Webpack</p>
                    </div>
                  </div>
                </div>

                <div className="skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill">
                    <img src="/img/Skills/grunt.png" alt="Grunt" />
                    <div className="slider">
                      <p>Grunt</p>
                    </div>
                  </div>
                </div>

                <div className="skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill">
                    <img src="/img/Skills/java.png" alt="Java" />
                    <div className="slider">
                      <p>Java</p>
                    </div>
                  </div>
                </div>

                <div className="skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
                  <div className="skill">
                    <img src="/img/Skills/cpp.png" alt="C++" />
                    <div className="slider">
                      <p>C++</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="button-container row">
              <button><Link to="/Skills"> See All Skills</Link></button>
            </div>

          </div>

          <div className="outer-container grey row">
            <div className="row">
              <div className="inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12">
                <h2>Contact</h2>
                <p>
                If you need to get in contact with me for any reason I prefer that you do so by
                Email. My Email address is
                <a href="mailto:dgibb802@gmail.com"> dgibb802@gmail.com </a>
                and I usally respond within 24 hours.
                </p>
              </div>
            </div>
            <div className="button-container row">
              <button><Link to="/Contact"> See Contact Info</Link></button>
            </div>
          </div>

        </div>

        <Footer />

      </div>

    );
  }
}
