import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { APP_NAME, FLAGS, MODAL } from "../../constant";
import * as Yup from "yup";
import { FormButton } from "../../component/button/formButton";
import { ModalContext } from "../../utils";
import { authService, userApi } from "../../servcies";

export const PhoneLogin = () => {
  const { setCurrentModal } = useContext(ModalContext);

  const [phone, setPhone] = useState("");
  const [validationError, setValidationError] = useState("");
  function handlePhoneInput(e) {
    let updatedPhone = e.target.value?.slice(0, 10);
    setPhone(updatedPhone);
    setValidationError("");
  }

  function handleLoginWithPhone() {
    setCurrentModal(MODAL.OTP_EMAIL);
    const validatePhone = Yup.string().matches(
      /^[789]\d{9}$/,
      "Enter a valid phone number"
    );
    validatePhone
      .validate(phone)
      .then((result) => {
        userApi
          .login({
            phone,
          })
          .then((res) => {
            if (res.status) {
              setValidationError("");
              console.log(phone, res);
              authService.setUserDetails({ phone });
              // setCurrentModal(MODAL.OTP_EMAIL);
            }
          })
          .catch((err) => {
            console.log(err);
          });
        setValidationError("");
      })
      .catch((error) => {
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
          <FormButton
            text="Continue with Email"
            onClick={() => setCurrentModal(MODAL.LOGIN_EMAIL)}
          >
            <MdEmail className="fs-3 me-3 ms-5 text-pink" />
          </FormButton>

          <FormButton text="Continue with Google">
            <FcGoogle className="fs-3 me-3 ms-5" />
          </FormButton>
        </div>
      </Modal.Body>
      <Modal.Footer className="align-self-start mb-2 mt-2">
        <span className="ms-3 text-body fw-light">New to {APP_NAME}?</span>
        <span
          role="button"
          className="fw-light text-pink"
          onClick={() => setCurrentModal(MODAL.SIGN_UP)}
        >
          Create account
        </span>
      </Modal.Footer>
    </>
  );
};
