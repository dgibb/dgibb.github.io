import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class Button extends React.Component {

  render() {
    if (this.props.text === 'no button') {
      return null;
    }
    
    return (
      <div className="button-container row">
        <button><Link to={this.props.link}>{this.props.text}</Link></button>
      </div>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
};

Button.defaultProps = {
  link: '',
};
