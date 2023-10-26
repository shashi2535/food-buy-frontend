import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { REQUIRED_DOCS } from "../../../constant";
import "./style.css";

export const DocSection = () => {
  return (
    <div className="main-doc-div d-md-flex justify-content-center align-items-center">
      <div className="doc-container rounded row">
        <span className="fs-3">Get started with online ordering</span>
        <span
          className="text-secondary"
          style={{ fontSize: 14, fontWeight: 500 }}
        >
          Please keep the documents ready for a smooth signup
        </span>
        <div className="row">
          {REQUIRED_DOCS.map((doc) => {
            return (
              <div
                key={doc}
                className="col-md-6 pt-4 fw-medium"
                style={{ fontSize: 14 }}
              >
                <span>
                  <BsCheckCircleFill className="check-icon me-2" />
                </span>
                <span>{doc}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
