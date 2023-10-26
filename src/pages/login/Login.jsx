import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { MODAL } from "../../constant";
import { getCurrentModal, ModalContext } from "../../utils";
import "./style.css";

export const Login = () => {
  const [show, setShow] = useState(false);
  const { currentModal, setCurrentModal } = useContext(ModalContext);
  const handleClose = () => {
    setShow(false);
    setCurrentModal(MODAL.LOGIN_PHONE);
  };
  const handleShow = () => setShow(true);
  const GetModal = getCurrentModal(currentModal);
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
            {GetModal.title}
          </Modal.Title>
        </Modal.Header>
        {GetModal.Component}
      </Modal>
    </>
  );
};
