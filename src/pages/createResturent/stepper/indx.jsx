import { steps } from "../../../constant";
import { useState } from "react";
import { ResturentFooter } from "../Resturent-Footer";
import { FormStep1 } from "./step1";
import { FormStep2 } from "./step2";
import { FormStep3 } from "./step3";
import "./style.css";
//

function StepContent(activeStep,setActiveStep) {
  switch (activeStep) {
    case 0:
      return <FormStep1 activeStep={activeStep} setActiveStep={setActiveStep} />;

    case 1:
      return <FormStep2 activeStep={activeStep} setActiveStep={setActiveStep} />;

    case 2:
      return <FormStep3 activeStep={activeStep} setActiveStep={setActiveStep} />;
    default:
      return null;
  }
}

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const CurrentForm = StepContent(activeStep,setActiveStep);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-3">
            <div
              className="stepper d-flex flex-column mt-5 ml-2 p-2"
              style={{ width: "89%" }}
            >
              <div style={{ height: "5rem" }}>
                <h4>1. Create your restaurant page</h4>
              </div>
              {steps.map((element, index) => {
                return (
                  <div style={{ marginTop: "1%" }}>
                    <div className="d-flex mb-1" key={index}>
                      <div
                        className={`d-flex flex-column pr-4 align-items-center ${
                          activeStep === index && "border-left"
                        }`}
                      >
                        <div
                          className={`rounded-circle py-1.5 px-2 text-white mb-0 ${
                            activeStep === index
                              ? " bg-primary"
                              : "bg-secondary"
                          }`}
                          onClick={() => {
                            if (index < activeStep) {
                              setActiveStep(index);
                            }
                          }}
                        >
                          {index + 1}
                        </div>
                        {/* <div className="line h-100"></div> */}
                      </div>
                      <div style={{ marginLeft: "3%" }}>
                        <h6 className="text-dark" style={{ fontSize: "86%" }}>
                          {element.title}
                        </h6>
                        <p className="text-dark" style={{ fontSize: "75%" }}>
                          {element.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className="stepper d-flex flex-column mt-5 ml-2 p-2"
              style={{ width: "89%" }}
            >
              <div>
                <h6 style={{ fontSize: "85%" }}>
                  2. Register for Online ordering
                </h6>
              </div>
            </div>
          </div>
          <div className="col col-9 h-75">
            {CurrentForm}
          </div>
        </div>
      </div>
      <ResturentFooter setActiveStep={setActiveStep} activeStep={activeStep} />
    </>
  );
};
export { MultiStepForm };
