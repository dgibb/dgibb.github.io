import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class Project extends React.Component {

  render() {
    return (
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 project">
          <div className="project-container">
            <Link to={this.props.link}>
              <img className={this.props.title.toLowerCase()} src={this.props.imgPath} alt={this.props.title} />
              <div className="project-text">
                <h1>{this.props.title}</h1>
                <div className="project-description">
                  <p>{this.props.description}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
    );
  }
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
