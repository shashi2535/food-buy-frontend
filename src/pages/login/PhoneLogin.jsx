import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { APP_NAME, FLAGS } from "../../constant";
import * as Yup from "yup";
import { FormButton } from "../../component/button/formButton";

export const PhoneLogin = () => {
  const [phone, setPhone] = useState("");
  const [validationError, setValidationError] = useState("");
  function handlePhoneInput(e) {
    let updatedPhone = e.target.value?.slice(0, 10);
    setPhone(updatedPhone);
    setValidationError("");
  }

  function handleLoginWithPhone() {
    const validatePhone = Yup.string().matches(
      /^[789]\d{9}$/,
      "Enter a valid phone number"
    );
    validatePhone
      .validate(phone)
      .then((result) => {
        console.log("🚀 ~ result:", result);
        setValidationError("");
      })
      .catch((error) => {
        console.log(
          "🚀 ~ file: PhoneLogin.jsx:26 ~ handleLoginWithPhone ~ error:",
          error
        );
        // if(!min)
        setValidationError(error?.message);
      });
  }

  return (
    <>
      <Modal.Body className="p-4">
        <div
          className={`border rounded  d-flex align-items-center p-2 ${
            validationError && "border-danger"
          }`}
        >
          <img
            src={FLAGS.INDIA}
            alt="india-flag"
            className="me-1"
            style={{ height: "17px" }}
          />
          <span
            className="ps-2 pe-3"
            style={{ borderRight: "1px solid lightgray" }}
          >
            +91
          </span>
          <input
            className="hide-border ms-2 w-100"
            value={phone}
            placeholder="Phone"
            onChange={handlePhoneInput}
          />
        </div>
        <div className="d-grid gap-4 mt-4 position-relative">
          <span
            className="position-absolute text-danger"
            style={{ fontSize: "10px", top: "-1.4rem" }}
          >
            {validationError}
          </span>
          <FormButton
            text="Send One Time Password"
            className="forms-button border bg-pink"
            onClick={handleLoginWithPhone}
          />
          <div className="divider text-secondary">or</div>
          <FormButton text="Continue with Email">
            <MdEmail className="fs-3 me-3 ms-5 text-pink" />
          </FormButton>

          <FormButton text="Continue with Google">
            <FcGoogle className="fs-3 me-3 ms-5" />
          </FormButton>
        </div>
      </Modal.Body>
      <Modal.Footer className="align-self-start mb-2 mt-2">
        <span className="ms-3 text-body fw-light">New to {APP_NAME}?</span>
        <span role="button" className="fw-light text-pink">
          Create account
        </span>
      </Modal.Footer>
    </>
  );
};
