import React from 'react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import ContactMenu from "./ContactMenu";
import "../styles/contact.css";

const Contact = () => {
  let location = useLocation();

  return (
    <CSSTransition key={location.key} classNames="fade" timeout={300}>
      <ContactMenu />
    </CSSTransition>
  );
};

export default Contact;
