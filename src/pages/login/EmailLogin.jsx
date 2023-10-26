import * as Yup from "yup";
import { Modal } from "react-bootstrap";
import React, { useContext, useState } from "react";
import { EMAIL_ICON, MODAL } from "../../constant";
import { ModalContext } from "../../utils";

export const EmailLogin = () => {
  const [email, setEmail] = useState("");
  const [validationError, setValidationError] = useState("");
  const { userData, setUserData, setCurrentModal } = useContext(ModalContext);

  function handleLoginWithEmail() {
    const validatePhone = Yup.string("Please enter an email")
      .email("Invalid Email id")
      .required("Please enter an email");
    validatePhone
      .validate(email)
      .then((result) => {
        setUserData({ ...userData, email });
        setValidationError("");
        setCurrentModal(MODAL.OTP_EMAIL);
      })
      .catch((error) => {
        setValidationError(error.message);
      });
  }

  return (
    <>
      <Modal.Body className="p-4 pt-0">
        <div className="d-grid gap-3">
          <div
            className="d-flex justify-content-center"
            style={{ height: "9rem" }}
          >
            <img src={EMAIL_ICON} alt="login with email" />
          </div>
          <input
            placeholder="Email"
            className={`form-control ${validationError && "border-danger"}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="position-relative">
            <span
              className="position-absolute text-danger"
              style={{ fontSize: "10px", top: "-0.8rem" }}
            >
              {validationError}
            </span>
          </div>
          <button
            className="forms-button btn border bg-pink"
            type="button"
            onClick={handleLoginWithEmail}
          >
            Send One Time Password
          </button>
        </div>
      </Modal.Body>
      <Modal.Footer className="align-self-start mb-2 mt-2">
        <span className="ms-3 text-body fw-light">
          Already have an account?
        </span>
        <span
          className="fw-light text-pink"
          role="button"
          onClick={() => setCurrentModal(MODAL.LOGIN_PHONE)}
        >
          Login
        </span>
      </Modal.Footer>
    </>
  );
};
