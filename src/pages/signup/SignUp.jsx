import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { BiSquareRounded, BiCheckboxChecked } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { InputLabel, FormButton } from "../../component";
import { APP_NAME, MODAL } from "../../constant";
import { ModalContext } from "../../utils";
import { signUpSchema } from "../../validation/user";
import "./style.css";

export const SignUp = () => {
  const { setCurrentModal } = useContext(ModalContext);
  const { userData, setUserData } = useContext(ModalContext);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const {
    handleSubmit,
    getFieldProps,
    errors,
    touched,
    isValid,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      isTermAccepted: false,
    },
    onSubmit: handleSubmission,
    validationSchema: signUpSchema,
  });

  function handleTerms() {
    setTermsAccepted((preAccepted) => !preAccepted);
    setFieldValue("isTermAccepted", termsAccepted);
  }
  const noError = isValid && Object.keys(touched).length;
  function getFormikError(name) {
    return (
      touched[name] &&
      errors[name] && (
        <span
          className="position-absolute text-danger"
          style={{ fontSize: "10px", top: "3.2rem" }}
        >
          {errors[name]}
        </span>
      )
    );
  }
  function handleSubmission(values) {
    setUserData({ ...userData, ...values });
  }
  return (
    <>
      <Modal.Body className="p-4 pt-0">
        <form onSubmit={handleSubmit}>
          <div className="d-grid gap-3 mt-4">
            <div className="position-relative">
              <InputLabel
                label={"Full Name"}
                {...getFieldProps("name")}
                className="border-blue"
              />
              {getFormikError("name")}
            </div>
            <div className="position-relative">
              <InputLabel
                label={"Email"}
                {...getFieldProps("email")}
                className="border-blue"
              />
              {getFormikError("email")}
            </div>
            <div>
              <div style={{ fontSize: "0.7rem" }}>
                {!termsAccepted ? (
                  <BiCheckboxChecked
                    className="text-pink me-2"
                    style={{ fontSize: "1.9rem" }}
                    onClick={handleTerms}
                  />
                ) : (
                  <BiSquareRounded
                    className="text-gray check-icon me-2"
                    onClick={handleTerms}
                    style={{ fontSize: "1.3rem" }}
                  />
                )}
                <span className="text-gray">I agree to {APP_NAME}'s</span>
                <span className="text-pink">Terms of Service</span>,
                <span className="text-pink">Privacy Policy </span>
                <span className="text-gray">and</span>
                <span className="text-pink"> Content Policies</span>
              </div>
            </div>
            <button
              className={`forms-button btn border ${noError && "bg-pink"}`}
              type="submit"
              disabled={!noError}
              {...(!noError && { style: { backgroundColor: "lightgray" } })}
            >
              Create Account
            </button>
            <div className="divider text-secondary">or</div>
            <FormButton text="Continue with Google">
              <FcGoogle className="fs-3 me-3 ms-5" />
            </FormButton>
          </div>
        </form>
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
