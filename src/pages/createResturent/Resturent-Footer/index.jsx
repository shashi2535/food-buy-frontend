import React, { useState } from "react";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleAction } from "../../../redux/toggleSlice";

const ResturentFooter = ({ setActiveStep, activeStep }) => {
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    {
      activeStep == 0 ? setDisabled(true) : setDisabled(false);
    }
  }, [activeStep]);
  return (
    <div
      className="row d-flex justify-content-center"
      style={{ borderTop: "1px solid #E8E8E8" }}
    >
      <div className="col" style={{ paddingLeft: "17%" }}>
        <Button
          variant="outline-primary"
          style={{ width: "24%", height: "3.2rem" }}
          disabled={disabled}
          onClick={() => setActiveStep(activeStep - 1)}
        >
          <GoTriangleLeft />
          Go back
        </Button>
      </div>
      <div className="col" style={{ paddingLeft: "8%" }}>
        <Button
          variant="primary"
          style={{ width: "24%", height: "3.2rem" }}
          onClick={() => dispatch(toggleAction())}
        >
          Next
          <GoTriangleRight />
        </Button>
      </div>
    </div>
  );
};

export { ResturentFooter };
