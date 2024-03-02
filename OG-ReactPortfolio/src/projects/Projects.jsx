import React from 'react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import ProjectsMenu from "./ProjectsMenu";

const Projects = () => {
  let location = useLocation();

  return (
    <CSSTransition key={location.key} classNames="fade" timeout={300}>
      <ProjectsMenu/>
    </CSSTransition>
  );
};

export default Projects;
