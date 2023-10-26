import React from "react";
import "./style.css";
import { STEPS } from "../../../constant";

export const Workings = () => {
  return (
    <div className="how-it-work" style={{ height: "83vh" }}>
      <div className="first_div h-50"></div>
      <div className="second_div"></div>
      <div className="work-steps">
        <span className="fs-3 fw-medium text-center"> How it works? </span>
        <div className=" d-flex justify-content-center align align-items-center">
          {STEPS.map((steps, index) => (
            <div
              key={steps.heading}
              className="work-steps-container rounded shadow"
            >
              <div className="work-steps-img-div mt-4">
                <img src={steps.image} alt={steps.heading} />
              </div>
              <div
                className="d-flex flex-column"
                style={{
                  maxWidth: "100%",
                  wordWrap: "break-word",
                }}
              >
                <span className="fw-medium fs-6 mt-3 mb-2">
                  Step {index + 1}
                </span>
                <span className="steps-main-heading mb-2">{steps.heading}</span>
                <span className="steps-sub-heading text-secondary fw-light">
                  {steps.subHeading}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
