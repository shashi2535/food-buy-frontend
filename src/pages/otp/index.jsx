// import { HStack, PinInput, PinInputField } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import {
  API_ROUTES,
  getVerificationContent,
  OTP_LENGTH,
  OTP_RESEND_TIMEOUT,
  // PAGE_URLS,
} from "../../constant";
import { agent, authService } from "../../servcies";
// import { useNavigate } from "react-router-dom";
import { ModalContext } from "../../utils";
import "./style.css";

export const OtpModal = () => {
  const [counter, setCounter] = React.useState(OTP_RESEND_TIMEOUT);
  const [resent, setResent] = useState(false);
  const [otp, setOtp] = useState({ currentIndex: -1, values: [] });
  // const navigate = useNavigate();
  const { setShow } = useContext(ModalContext);
  const userData = authService.getUserDetails();

  React.useEffect(() => {
    counter > 0
      ? setTimeout(() => setCounter(`${counter - 1}`.padStart(2, "0")), 1000)
      : setResent(false);
  }, [counter]);

  function handleResend() {
    agent
      .post(API_ROUTES.RESEND_OTP, {
        email: userData?.email,
      })
      .then(({ data }) => {
        console.log("🚀 ~ file: index.jsx:54 ~ .then ~ res:", data);
      })
      .catch((err) => {
        console.error(err);
      });
    setCounter(OTP_RESEND_TIMEOUT);
    setResent(true);
  }

  function handleChange(value, index) {
    const copiedOtpValues = [...otp.values];
    copiedOtpValues[index] = value?.slice(value.length - 1);
    const updatedData = {
      values: copiedOtpValues,
      currentIndex: index + 1,
    };
    setOtp(updatedData);
    if (updatedData.values[index]) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    } else {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
    if (updatedData?.values?.filter((i) => i).length === OTP_LENGTH) {
      agent
        .post(API_ROUTES.VALIDATE_OTP, {
          email: userData?.email,
          phone: userData?.phone,
          otp: updatedData?.values.join(""),
        })
        .then(({ data }) => {
          authService.setAuthToken(data?.result?.token);
          setShow(false);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  return (
    <Modal.Body className="p-4 pt-0">
      <div>
        <div className="text-center text-secondary mt-4 fw-light">
          {getVerificationContent({ email: userData?.email })}
        </div>
        <div className="row mt-4">
          {Array.from(new Array(OTP_LENGTH), (_, idx) => (
            <div
              key={idx + 1}
              className="col-2"
              style={{ height: "3rem", border: "none" }}
            >
              <input
                id={`otp-${idx}`}
                className="w-100 border rounded border-secondary h-100 border-blue"
                style={{
                  paddingLeft: "50%",
                }}
                onChange={(e) => handleChange(e.target.value, idx)}
                value={otp.values[idx]}
              />
            </div>
          ))}
        </div>
        {/* <HStack>
          <PinInput size="sm" className="row">
            <PinInputField className="col-2" />
            <PinInputField className="col-2" />
            <PinInputField className="col-2" />
            <PinInputField className="col-2" />
            <PinInputField className="col-2" />
            <PinInputField />
          </PinInput>
        </HStack> */}
        {resent && (
          <div className="position-relative d-flex justify-content-center align-content-center">
            <span
              className="text-blue position-absolute"
              style={{ top: "8px", fontSize: "small" }}
            >
              A new OTP has been sent
            </span>
          </div>
        )}
        <div className="text-center mt-5 fs-3 fw-light mb-3">00:{counter}</div>
        <div className="text-center mb-2">
          <span className="text-secondary">Not received OTP?</span>
          <span
            className={`${
              !+counter ? "resend-available" : "text-light-gray"
            } ms-2`}
            {...(!+counter && { role: "button" })}
            disabled={!+counter}
            onClick={handleResend}
          >
            Resend Now
          </span>
        </div>
      </div>
    </Modal.Body>
  );
};
