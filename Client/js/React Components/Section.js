import React from 'react';
import PropTypes from 'prop-types';
import { Skill } from './Skill';
import { Project } from './Project';
import { Button } from './Button';

export class Section extends React.Component {

  render() {
    switch (this.props.type) {

      case 'skills':

        const skills = this.props.skills.map(
          (skill, i) => (
            <Skill
              key={i}
              name={skill.name}
              filepath={skill.filepath}
              color={(this.props.color === 'white') ? 'grey' : 'white'}
            />));

        const skillsClass = 'outer-container row ' + this.props.color;

        return (
          <div className={skillsClass}>
            <div className="row">
              <div className="inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12">
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
              </div>
            </div>

            <div className="row">
              <div className="projects-inner-container col-centered col-lg-8 col-md-10 col-sm-12 col-xs-12" >
                {skills}
              </div>
            </div>
            <Button text={this.props.buttonText} link={this.props.buttonLink} />
          </div>
        );

      case 'projects':

        const projects = this.props.projects.map(
          (project, i) => (
            <Project
              key={i}
              title={project.title}
              link={project.link}
              imgPath={project.imgPath}
              description={project.description}
            />));

        const projectsClass = 'outer-container row ' + this.props.color;

        return (
          <div className={projectsClass}>
            <div className="row">
              <div className="inner-container col-lg-10 col-md-10 col-sm-12 col-xs-12">
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
              </div>
            </div>

            <div className="row">
              <div className="projects-inner-container col-lg-10 col-md-10 col-sm-12 col-xs-12" >
                {projects}
              </div>
            </div>
            <Button text={this.props.buttonText} link={this.props.buttonLink} />
          </div>
        );

      case 'title':

        const titleClass = 'page-title-container outer-container row ' + this.props.color;

        return (
          <div className={titleClass}>
            <div className="col-lg-2 col-md-1 col-sm-0 col-xs-0" />
            <div className="title-inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12">
              <div className="title-container">
                <h1>{this.props.title}</h1>
              </div>
            </div>
          </div>
        );

      case 'text':

        const textClass = 'outer-container row ' + this.props.color;

        return (
          <div className={textClass}>
            <div className="row">
              <div className="inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12">
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
              </div>
            </div>
            <Button text={this.props.buttonText} link={this.props.buttonLink} />
          </div>
        );

      case 'links':

        const linksClass = 'outer-container row ' + this.props.color;

        return (
          <div className={linksClass}>
            <div className="inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12">
              <div className="link-container col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <button><a href={this.props.sourceLink}> Source Code</a></button>
              </div>
              <div className="link-container col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <button><a href={this.props.demoLink}>Live Demo</a></button>
              </div>
            </div>
          </div>
        );

      case 'Email':

        const emailClass = 'outer-container row ' + this.props.color;

        return (
          <div className="outer-container grey row">
            <div className="inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12">
              <h2>Send Me a Message</h2>
            </div>
            <div className="projects-inner-container col-lg-8 col-md-10 col-sm-12 col-xs-12" >
              <form action="mailto:dgibb802@gmail.com" method="post" encType="text/plain">
                <input className="input-field" type="text" name="name" placeholder=" Name" /><br />
                <br />
                <input className="input-field" type="text" name="mail" placeholder=" Email" /><br />
                <textArea className="input-field message" type="text" name="comment" placeholder=" Message" />
                <br /><br />
                <div className="button-container col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <input type="submit" value="Send" />
                </div>
                <div className="button-container col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <input type="reset" value="Reset" />
                </div>
              </form>

            </div>
          </div>
        );

      default:
        return null;
    }
  }
}

Section.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  color: PropTypes.string.isRequired,
  description: PropTypes.string,
  skills: PropTypes.array,
  projects: PropTypes.array,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  sourceLink: PropTypes.string,
  demoLink: PropTypes.string,
};

Section.defaultProps = {
  tite: '',
  skills: [],
  projects: [],
  text: '',
  description: '',
  buttonText: 'no button',
  buttonLink: '',
  sourceLink: '',
  demoLink: '',
};
