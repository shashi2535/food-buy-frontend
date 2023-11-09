import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { ShowErrorMessage } from "../../../../component";
import { step1Schema } from "../../../../validation/user";
import { step1Create, step1UpdateDataById, stepGetDataById } from "../../../../servcies";
import "./style.css";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { PAGE_URLS } from "../../../../constant";
const { useFormik } = require("formik");
const FormStep1 = ({ activeStep, setActiveStep }) => {
  let { id } = useParams();
  const toggle = useSelector((state) => state.toggle.toggle);
  const submitButtonRef = useRef(null);
  const nevigate = useNavigate();
  const firstUpdate = useRef(true);
  const { handleSubmit, values, handleChange, errors, setValues } = useFormik({
    initialValues: {
      name: "",
      address: "",
      latitude: "",
      longitude: "",
      phone: "",
      country: "",
      pinCode: "",
      state: "",
      district: "",
      whatsAppNotifications: "",
    },
    onSubmit: (values) => {
      const payload = {
        name: values.name,
        whatsAppNotifications: values.whatsAppNotifications,
        phoneNumber: values.phone,
        phoneNumberCountryCode: "+91",
        address: {
          address: values.address,
          latitude: Number(values.latitude),
          longitude: Number(values.longitude),
          country: values.country,
          pinCode: values.pinCode,
          district: values.district,
          state: values.state,
        },
      };
       if(id){
        const data = step1UpdateDataById(id,payload);
        data
          .then((result) => {
            if (result.status === false) {
              toast.error(result.message, {
                position: toast.POSITION.TOP_RIGHT,
              });
            }
            if (result.status === true) {
              nevigate(`${PAGE_URLS.ADD_RESTURENT}/${id}`);
              setActiveStep(activeStep + 1);
            }
          })
          .catch((err) => {
            console.log("err", err);
          });
          return
       }
      const data = step1Create(payload);
      data
        .then((result) => {
          if (result.status === false) {
            toast.error(result.message, {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
          if (result.status === true) {
            nevigate(`${PAGE_URLS.ADD_RESTURENT}/${result.data.id}`);
            setActiveStep(activeStep + 1);
          }
        })
        .catch((err) => {
          toast.error(err.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        });
    },
    validationSchema: step1Schema,
  });
  useEffect(() => {
    if (id) {
      const data = stepGetDataById(id);
      data.then((result) => {
        if(result.status === true){
          setValues({
            ...values,
            name: result.data.name,
            address: result.data.address[0].address,
            latitude: result.data.address[0].latitude,
            longitude: result.data.address[0].longitude,
            phone: result.data.phoneNumber,
            country: result.data.address[0].country,
            pinCode: result.data.address[0].pinCode,
            state: result.data.address[0].state,
            district: result.data.address[0].district,
          });
        }
      })
    }
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (activeStep === 0) {
      if (submitButtonRef.current) {
        submitButtonRef.current.click();
      }
    }
  }, [toggle, activeStep]);
  return (
    <>
      <div className="row">
        <h2 className="mt-5 ml-2"> Restaurant Information </h2>
      </div>
      <form onSubmit={handleSubmit}>
        {/* accordian for Restaurant details at restaurant */}
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
                      <h5>Restaurant details</h5>
                    </div>
                    <div className="row">
                      <h6>Name, address and location</h6>
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
                  <div className="row mt-2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Resturent Name"
                      className={`mt-2 rounded w-100 form-input-field p-2 ${
                        errors.name ? "border-red" : "border"
                      }`}
                      style={{ height: "3rem", borderColor: "red" }}
                      onChange={handleChange}
                      value={values.name}
                    />
             
                    {errors.name ? (
                      <ShowErrorMessage errors={errors.name} />
                    ) : null}
                  </div>
                  <div className="row mt-4">
                    <input
                      id="filter"
                      type="text"
                      name="address"
                      placeholder="Resturent Complete Address"
                      className={`mt-2 rounded w-100 form-input-field p-2 ${
                        errors.address ? "border-red" : "border"
                      }`}
                      style={{ height: "3rem", borderColor: "" }}
                      onChange={handleChange}
                      value={values.address}
                    />
                    {errors.address ? (
                      <ShowErrorMessage errors={errors.address} />
                    ) : null}
                  </div>
                  <div className="row mt-4">
                    <div className="col">
                      <input
                        type="text"
                        name="latitude"
                        placeholder="latitude"
                        className={`mt-2 rounded w-100 form-input-field p-2 ${
                          errors.latitude ? "border-red" : "border"
                        }`}
                        onChange={handleChange}
                        value={values.latitude}
                        style={{ height: "3rem", borderColor: "red" }}
                      />
                      {errors.latitude ? (
                        <ShowErrorMessage errors={errors.latitude} />
                      ) : null}
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        name="longitude"
                        placeholder="longitude"
                        className={`mt-2 rounded w-100 form-input-field p-2 ${
                          errors.latitude ? "border-red" : "border"
                        }`}
                        style={{ height: "3rem", borderColor: "red" }}
                        onChange={handleChange}
                        value={values.longitude}
                      />
                      {errors.longitude ? (
                        <ShowErrorMessage errors={errors.latitude} />
                      ) : null}
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="row mt-2">
                      <div className="col">
                        <input
                          type="text"
                          name="country"
                          placeholder="country"
                          className={`mt-2 rounded w-100 form-input-field p-2 ${
                            errors.country ? "border-red" : "border"
                          }`}
                          style={{ height: "3rem", borderColor: "red" }}
                          onChange={handleChange}
                          value={values.country}
                        />
                        {errors.country ? (
                          <ShowErrorMessage errors={errors.country} />
                        ) : null}
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          name="pinCode"
                          placeholder="pinCode"
                          className={`mt-2 rounded w-100 form-input-field p-2 ${
                            errors.pinCode ? "border-red" : "border"
                          }`}
                          style={{ height: "3rem", borderColor: "red" }}
                          onChange={handleChange}
                          value={values.pinCode}
                        />
                        {errors.pinCode ? (
                          <ShowErrorMessage errors={errors.pinCode} />
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="row mt-2">
                      <div className="col">
                        <input
                          type="text"
                          name="state"
                          placeholder="state"
                          className={`mt-2 rounded w-100 form-input-field p-2 ${
                            errors.state ? "border-red" : "border"
                          }`}
                          style={{ height: "3rem", borderColor: "red" }}
                          onChange={handleChange}
                          value={values.state}
                        />
                        {errors.state ? (
                          <ShowErrorMessage errors={errors.state} />
                        ) : null}
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          name="district"
                          placeholder="district"
                          className={`mt-2 rounded w-100 form-input-field p-2 ${
                            errors.district ? "border-red" : "border"
                          }`}
                          style={{ height: "3rem", borderColor: "red" }}
                          onChange={handleChange}
                          value={values.district}
                        />
                        {errors.district ? (
                          <ShowErrorMessage errors={errors.district} />
                        ) : null}
                      </div>
                    </div>
                  </div>
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
                      <h5>Restaurant owner details</h5>
                    </div>
                    <div className="row">
                      <h6>
                        These will be used to share revenue related
                        communications
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
                    <input
                      id="filter"
                      type="text"
                      name="phone"
                      placeholder="Mobile Number At resturent"
                      className={`mt-2 rounded w-100 form-input-field p-2 ${
                        errors.phone ? "border-red" : "border"
                      }`}
                      style={{ height: "3rem", borderColor: "red" }}
                      onChange={handleChange}
                      value={values.phone}
                    />
                    {errors.phone ? (
                      <ShowErrorMessage errors={errors.phone} />
                    ) : null}
                  </div>
                  {/* working */}
                  <div className="row mt-2">
                    <label htmlFor="whatsAppNotifications">
                      <input
                        type="checkbox"
                        name="whatsAppNotifications"
                        id="whatsAppNotifications"
                        onChange={handleChange}
                        value={values.whatsAppNotifications}
                      />
                      Yes, I would like to receive important updates and
                      notifications from Zomato on my WhatsApp
                    </label>

                    {errors.whatsAppNotifications ? (
                      <ShowErrorMessage errors={errors.whatsAppNotifications} />
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" style={{ display: "none" }} ref={submitButtonRef}>
          submit
        </button>
      </form>
    </>
  );
};
export { FormStep1 };
