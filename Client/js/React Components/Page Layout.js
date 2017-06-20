import React from 'react';
import PropTypes from 'prop-types';
import { Footer } from './Footer';
import { Header } from './Header';
import { Section } from './Section';


export class PageLayout extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const sections = this.props.layout.sections.map(
      (section, i) => (
        <Section
          key={i}
          type={section.type}
          title={section.title}
          color={(section.color) ? section.color : (i % 2) ? 'white' : 'grey'}
          description={(section.description) ? section.description : null}
          projects={(section.projects) ? section.projects : null}
          skills={(section.skills) ? section.skills : null}
          buttonText={(section.buttonText) ? section.buttonText : null}
          buttonLink={(section.buttonLink) ? section.buttonLink : null}
          sourceLink={(section.sourceLink) ? section.sourceLink : null}
          demoLink={(section.demoLink) ? section.demoLink : null}
        />
      ),
    );


    return (

      <div className="content">

        <Header />

        <div id="middle-content"className="row">
          {sections}
        </div>

        <Footer />

      </div>

    );
  }
}

PageLayout.propTypes = {
  layout: PropTypes.object.isRequired,
};
