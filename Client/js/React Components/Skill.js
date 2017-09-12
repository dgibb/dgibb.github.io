import React from 'react';
import PropTypes from 'prop-types';

export class Skill extends React.Component {

  render() {

    const classname = 'skill ' + this.props.color

    return (
      <div className="skill-container col-lg-2 col-md-2 col-sm-3 col-xs-4">
        <div className={classname}>
          <img src={this.props.filepath} alt={this.props.name}/>
          <div className="slider">
            <p>{this.props.name}</p>
          </div>
        </div>
      </div>
    );
  }
}
