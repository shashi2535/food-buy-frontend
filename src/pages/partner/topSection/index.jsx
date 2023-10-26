import React from "react";
import './style.css';
import { APP_NAME } from "../../../constant";
export const TopSection = () => {
  return (
    <div
      style={{ width: "inherit" }}
      className="d-flex flex-column mt-4 align-items-center"
    >
      <div className="first-div mb-md-2">
        <div className="row discount-heading ">
          <span className="col-12">Partner with {APP_NAME}</span>
          <span className="col-12">at 0% commission for the 1st month!</span>
        </div>
        <div className="mt-md-4 mb-md-4" style={{ fontSize: "15px" }}>
          And get ads worth INR 1500. Valid for new restaurant partners in
          select cities.
        </div>
        <div className="row" style={{ width: "660px", marginLeft: 0 }}>
          <button className="btn btn-primary col">
            Register Your restaurant
          </button>
          <button className="btn btn-light col-md-6 ms-md-3">
            Login to view your existing restaurants
          </button>
        </div>
        <div className="contact-email mt-1">
          <span>Need help? Please email us at</span>
          <a href="##" className="ms-1 text-light">
            merchantonboarding@{APP_NAME.toLowerCase()}.com
          </a>
        </div>
      </div>
    </div>
  );
};
