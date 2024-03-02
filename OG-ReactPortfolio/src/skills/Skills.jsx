import React from 'react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import Avatar from "../avatar/Avatar.jsx";
import SkillsMenu from "./SkillsMenu.jsx";

const Skills = () => {
  let location = useLocation();

  return (
    <CSSTransition key={location.key} classNames="fade" timeout={300}>
      <>
        <Avatar page="skills" />
        <SkillsMenu />
      </>
    </CSSTransition>
  );
};

export default Skills;
