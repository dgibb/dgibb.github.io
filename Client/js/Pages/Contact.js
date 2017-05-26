import React from 'react';
import { Footer } from '../React Components/Footer';
import { Header } from '../React Components/Header';

export class Contact extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (

      <div className="content">

        <Header />

        <div id="middle-content"className="row">

          <div className="page-title-container contact outer-container row">
            <div className="col-lg-2 col-md-1 col-sm-0 col-xs-0" />
            <div className="title-inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12">
              <div className="title-container">
                <h1>Contact</h1>
              </div>
            </div>
          </div>

          <div className="outer-container white row">
            <div className="inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12">
              <h2>Contact Me</h2>
              <p>
                If you need to get in contact with me for any reason I prefer that you do so by
                Email. My Email address is
                <a href="mailto:dgibb802@gmail.com"> dgibb802@gmail.com </a>
                and I usally respond within 24 hours. Feel free to also add me on social media or
                follow me on GitHub, there are links to my profiles in the page footer.
              </p>
            </div>
          </div>

          <div className="outer-container grey row">
            <div className="inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12">
              <h2>Send Me a Message</h2>
            </div>
            <div className="projects-inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12" >
              <form action="mailto:dgibb802@gmail.com" method="post" encType="text/plain">
                Name: <input className="input-field" type="text" name="name" /><br />
                <br />
                Email: <input className="input-field" type="text" name="mail" /><br /><br />
                Body: <textArea className="input-field message" type="text" name="comment" />
                <br /><br />
                <div className="button-container col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <input type="submit" value="Send" />
                </div>
                <div className="button-container col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <input type="reset" value="reset" />
                </div>
              </form>

            </div>
          </div>

        </div>

        <Footer />

      </div>
    );
  }
}
