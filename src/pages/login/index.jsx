import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { MODAL } from "../../constant";
import { PhoneLogin } from "./PhoneLogin";
import { EmailLogin } from "./EmailLogin";
import "./style.css";

export const Login = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-light"
        onClick={handleShow}
      >
        Login
      </button>

      <Modal show={show} onHide={handleClose} className="">
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="fs-3" style={{ color: "rgb(79, 79, 79)" }}>
            Login
          </Modal.Title>
        </Modal.Header>
        {true === MODAL.EMAIL ? <EmailLogin /> : <PhoneLogin />}
      </Modal>
    </>
  );
};
