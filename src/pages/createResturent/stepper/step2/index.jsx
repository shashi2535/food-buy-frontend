import {useFormik } from "formik";
import { FormikRadioGroup } from "../../../../component/radioGroup";
import { CheckBoxCustom } from "../../../../component/checkBox";
import {
  dayConstant,
  redioConstant,
  resturentType,
  timeSlot,
  typeCusion,
} from "../../../../constant";
import { useState } from "react";
const FormStep2 = ({ children }) => {
  const firstEle = resturentType.slice(0,7)
  const firstEleOfTypeCusion = typeCusion.slice(0,7)
  const [resturent_type_state, setResturent_type_state ] = useState(firstEle)
  const [cusion_type_state, setcusion_type_state ] = useState(firstEleOfTypeCusion)
  const {
    handleSubmit,
    values,
    handleChange,
  } = useFormik({
    initialValues: {
      restaurantType: "",
      outletType: [],
      cusion_type: [],
      days:[],
      opens_at:"",
      close_at:""
    },
    onSubmit: (values) => {
      console.log(">>>values", values);
    },
  });
  return (
    <>
      <div className="row">
        <h2 className="mt-5 ml-2"> Restaurant Type & Timings</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row mt-4">
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  <div className="d-flex flex-column">
                    <div className="row">
                      <h5>Establishment type</h5>
                    </div>
                    <div className="row">
                      <h6>
                        Select most relevant category for your restaurant type
                      </h6>
                    </div>
                  </div>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body d-flex flex-column">
                  {redioConstant.map((ele, index) => {
                    return (
                      <>
                        <div className="row mt-3">
                          <FormikRadioGroup
                            handleChange={handleChange}
                            text={ele.text}
                            value={ele.value}
                            name="restaurantType"
                          />
                        </div>
                      </>
                    );
                  })}
                  {(values.restaurantType === "dineInOnly" ||
                    values.restaurantType === "BothDelivery") && (
                    <div className="mt-3">
                      <h6>Select options which best describe your outlet</h6>
                      <div className="row mt-2">
                        {resturent_type_state.map((ele, idx) => {
                          return (
                            <>
                              <div className="col-md-4 mt-2" key={idx}>
                                {" "}
                                <CheckBoxCustom
                                  value={ele.value}
                                  text={ele.text}
                                  name="outletType"
                                  idx={idx}
                                  handleChange={handleChange}
                                  disable={
                                    values.outletType.length === 2
                                      ? true
                                      : false
                                  }
                                />
                              </div>
                            </>
                          );
                        })}
                        {resturent_type_state?.length === 7 && <a href="#" onClick={()=>setResturent_type_state([...resturent_type_state, ...resturentType.slice(7,resturentType.length)])}> show more</a> }
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* accordian for Contact number at restaurant */}
        <div className="row mt-5">
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  <div className="d-flex flex-column">
                    <div className="row">
                      <h5>Type of cuisines</h5>
                    </div>
                    <div className="row">
                      <h6>
                        Select options which best describe food your serve
                      </h6>
                    </div>
                  </div>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className="accordion-body d-flex flex-column">
                  <div className="row mt-2">
                    {cusion_type_state.map((ele, idx) => {
                      return (
                        <>
                          <div className="col-md-4 mt-2" key={idx}>
                            <CheckBoxCustom
                              value={ele.value}
                              text={ele.text}
                              name="cusion_type"
                              idx={idx}
                              handleChange={handleChange}
                              disable={
                                values.outletType.length === 2 ? true : false
                              }
                            />
                          </div>
                        </>
                      );
                    })}
                     {cusion_type_state?.length === 7 && <a href="#" onClick={()=>setcusion_type_state([...cusion_type_state, ...typeCusion.slice(7,typeCusion.length)])}> show more</a> }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  <div className="d-flex flex-column">
                    <div className="row">
                      <h5>Restaurant operational hours</h5>
                    </div>
                    <div className="row">
                      <h6>Mark restaurant opening and closing hours</h6>
                    </div>
                  </div>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body d-flex flex-column">
                  <div className="row mt-3">
                    <div className="col">
                      <div className="row">
                        <div className="col">
                          <div className="d-flex flex-column">
                            <label htmlFor="opens_at">opens at</label>
                            <select name="opens_at" value={values.opens_at} onChange={handleChange}>
                              {timeSlot.map((element, idx) => {
                                return (
                                  <>
                                    <option value={element} label={element}>
                                      {element}
                                    </option>
                                  </>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                        <div className="col">to</div>
                        <div className="col">
                          <div className="d-flex flex-column">
                            <label htmlFor="close_at">close at</label>
                            <select name="close_at" value={values.close_at} onChange={handleChange}>
                              {timeSlot.map((element, idx) => {
                                return (
                                  <>
                                    <option value={element} label={element}>
                                      {element}
                                    </option>
                                  </>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col"></div>
                  </div>
                  <div className="row mt-4">
            <div className="col">
              <div className="row mt-2"><h5>Mark open days</h5></div>
              <div className="row mt-2"><h6>Don't forget to uncheck your off-day</h6></div>
              <div className="row mt-2">
              {dayConstant.map((ele, idx) => {
                      return (
                        <>
                          <div className="col-md-6 mt-2" key={idx}>
                            <CheckBoxCustom
                              value={ele.value}
                              text={ele.text}
                              name="days"
                              idx={idx}
                              handleChange={handleChange}
                              disable={
                                values.outletType.length === 2 ? true : false
                              }
                            />
                          </div>
                        </>
                      );
                    })}
              </div>
            </div>
            <div className="col"></div>
         </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {children} */}
        <button type="submit"> submit</button>
      </form>
    </>
  );
};

export { FormStep2 };
