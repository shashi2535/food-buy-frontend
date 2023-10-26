import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { APP_NAME } from "../../../constant";
import { Login, SignUp } from "../../../pages";
import { ModalContext } from "../../../utils";
import "./style.css";

export const RestaurantNavBar = () => {
  const [currentModal, setCurrentModal] = useState("");
  return (
    <ModalContext.Provider value={{ currentModal, setCurrentModal }}>
      <Navbar expand="lg" className="partner-navbar navbar-dark">
        <Navbar.Brand href="#home">
          <div>
            <span className="logo-heading">{APP_NAME}</span>
            <span className="logo-sub-heading">for business</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-list">
            <span>Advertise</span>
            <Login />
            <SignUp />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </ModalContext.Provider>
  );
};
