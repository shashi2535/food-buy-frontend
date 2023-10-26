import React from "react";
import "./style.css";
import { APP_NAME, FEATURES } from "../../../constant";

export const PartnersFeatures = () => {
  return (
    <div className="features-div d-flex justify-content-center align-items-center row text-center pb-4 mb-2">
      <span className="fw-medium fs-2 mt-md-5 col-12 mb-3">
        Why should you partner with {APP_NAME}?
      </span>
      <div
        className="text-secondary mb-5 fs-6"
        style={{ wordWrap: "break-word", width: "60%" }}
      >
        {APP_NAME} enables you to get 60% more revenue, 10x new customers and
        boost your brand visibility by providing insights to improve your
        business.
      </div>
      <div className="d-flex justify-content-center">
        {FEATURES.map((data) => (
          <div key={data.heading} className="m-2 shadow mb-5 bg-white rounded d-flex align-items-center ps-4 pe-5 pt-3 pb-3">
            <img
              className="me-4"
              src={data.icon}
              alt={data.heading}
              style={{
                height: "30px",
                aspectRatio: "auto 30 / 30",
                width: "30px",
              }}
            />
            <div className="d-flex flex-column text-start">
              <span className="text-primary fs-5">{data.heading}</span>
              <span className="text-secondary">{data.subHeading}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
