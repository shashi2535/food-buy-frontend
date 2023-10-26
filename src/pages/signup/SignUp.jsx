import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { SignUpBody } from "./SignUpBody";
import "./style.css";

export const SignUp = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="btn" onClick={handleShow}>
        Create Account
      </Button>
      <Modal show={show} onHide={handleClose} className="">
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="fs-3" style={{ color: "rgb(79, 79, 79)" }}>
            Sign Up
          </Modal.Title>
        </Modal.Header>
        <SignUpBody />
      </Modal>
    </>
  );
};
