import React, { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { MODAL } from "../../constant";
import { getCurrentModal, ModalContext } from "../../utils";
import "./style.css";

export const AuthenticationModals = ({ modal = MODAL.SIGN_UP }) => {
  const [show, setShow] = useState(false);
  const { currentModal, setCurrentModal } = useContext(ModalContext);

  const handleClose = () => {
    setShow(false);
    setCurrentModal(
      modal === MODAL.SIGN_UP ? MODAL.SIGN_UP : MODAL.LOGIN_PHONE
    );
  };
  const handleShow = () => {
    setShow(true);
    setCurrentModal(modal);
  };
  const GetModal = getCurrentModal(currentModal || modal);
  return (
    <>
      {modal === MODAL.LOGIN_PHONE ? (
        <button
          type="button"
          className="btn btn-outline-light"
          onClick={handleShow}
        >
          Login
        </button>
      ) : (
        <Button className="btn" onClick={handleShow}>
          Create Account
        </Button>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="fs-3" style={{ color: "rgb(79, 79, 79)" }}>
            {GetModal.title}
          </Modal.Title>
        </Modal.Header>
        {GetModal.Component}
      </Modal>
    </>
  );
};
