import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { APP_NAME, DEFAULT_PROFILE_PIC, MODAL } from "../../../constant";
import { AuthenticationModals } from "../../../pages";
import { authService } from "../../../servcies/auth.service";
import { ModalContext } from "../../../utils";
import { FormButton } from "../../button";
import "./style.css";

export const RestaurantNavBar = () => {
  const [currentModal, setCurrentModal] = useState("");
  const [userData, setUserData] = useState({});
  const userDetails = authService.getUserDetails();

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
            {!userDetails?.token ? (
              <>
                <AuthenticationModals modal={MODAL.LOGIN_PHONE} />
                <AuthenticationModals modal={MODAL.SIGN_UP} />
              </>
            ) : (
              <div class="dropdown">
                <div
                  class="dropdown-toggle d-flex align-items-center"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={DEFAULT_PROFILE_PIC}
                    alt="user_profile_pic"
                    className="m-0"
                    style={{ height: "2rem" }}
                  />
                  <span>Restaurant</span>
                </div>
                <div
                  class="dropdown-menu"
                  style={{ width: "16rem", top: "3rem" }}
                >
                  <div className="d-flex flex-column">
                    <div
                      className="d-flex justify-content-center mt-3 mb-2"
                      style={{ height: "3rem" }}
                    >
                      <img
                        src={DEFAULT_PROFILE_PIC}
                        alt="user_profile_pic"
                        className="m-0"
                        style={{ height: "100%" }}
                      />
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <p
                        className="mb-1"
                        style={{ fontWeight: 500, fontSize: "0.9rem" }}
                      >
                        Restaurant Owner
                      </p>
                      <p
                        className="text-heading-2"
                        style={{ fontSize: "0.75rem", fontWeight: 400 }}
                      >
                        Add phone number
                      </p>
                      <p
                        className="text-gray mb-2"
                        style={{ fontSize: "0.8rem", fontWeight: 300 }}
                      >
                        {userDetails?.email ?? "dummy.email.com"}
                      </p>
                    </div>
                    <hr className="text-light-gray" />
                    <p
                      className="text-center text-heading-2 m-1"
                      style={{ fontSize: "0.8rem" }}
                    >
                      My Restaurants
                    </p>
                    <hr className="text-light-gray" />
                    <FormButton
                      text={"Logout"}
                      className="border bg-pink m-2 text-light rounded ms-4 me-4"
                      onClick={authService.logout}
                    />
                    <hr className="text-light-gray" />
                  </div>
                  <div
                    className="d-flex text-gray mt-3 mb-1"
                    style={{ fontSize: "0.45rem" }}
                  >
                    <p className="hover-blue">Terms of Service</p>
                    <p className="m-0">|</p>
                    <p className="hover-blue">Privacy Policy</p>
                    <p className="m-0">|</p>
                    <p className="hover-blue">Code of Conduct</p>
                  </div>
                </div>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </ModalContext.Provider>
  );
};
