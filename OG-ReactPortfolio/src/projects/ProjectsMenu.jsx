import React, { Component } from 'react';

export default class ProjectsMenu extends Component {
constructor(props) {
    super(props);
    this.state = {
        activeProject: 1,
};
}

handleProjectClick = (project) => {
    this.setState({
        activeProject: project,
    });
}

renderContent = (props) => {
    return projects.map((project, index) => (
        <div key={index} className={`project-sub-container-${index + 1}`}>
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
            <div>{project.description}</div>
            <div className="link-continer">
                <a href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
            </div>
        </div>
    ))
}
  render() {
    return (
      <div>ProjectsMenu</div>
    )
  }
}
