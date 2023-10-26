import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { APP_NAME, MODAL } from "../../../constant";
import { AuthenticationModals } from "../../../pages";
import { ModalContext } from "../../../utils";
import "./style.css";

export const RestaurantNavBar = () => {
  const [currentModal, setCurrentModal] = useState("");
  const [userData, setUserData] = useState({});
  return (
    <ModalContext.Provider
      value={{ currentModal, setCurrentModal, userData, setUserData }}
    >
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
            <AuthenticationModals modal={MODAL.LOGIN_PHONE} />
            <AuthenticationModals modal={MODAL.SIGN_UP} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </ModalContext.Provider>
  );
};
