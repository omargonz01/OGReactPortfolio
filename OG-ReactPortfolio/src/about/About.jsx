import React from 'react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import Avatar from "../avatar/Avatar.jsx";
import AboutMenu from "./AboutMenu.jsx";

const About = () => {
  let location = useLocation();

  return (
    <CSSTransition key={location.key} classNames="fade" timeout={300}>
      <>
        <Avatar page="about" />
        <AboutMenu />
      </>
    </CSSTransition>
  );
};

export default About;
