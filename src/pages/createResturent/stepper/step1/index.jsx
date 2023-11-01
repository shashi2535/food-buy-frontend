import { ShowErrorMessage } from "../../../../component";
import { step1Schema } from "../../../../validation/user";
import "./style.css";
const { Formik, Field, Form } = require("formik");

const FormStep1 = ({ children }) => {
  console.log("dfsdafsdf");
  return (
    <>
      <div className="row">
        <h2 className="mt-5 ml-2"> Restaurant Information </h2>
      </div>
      <Formik
        initialValues={{
          name: "",
          address: "",
          latitude: "",
          longitude: "",
          phone: "",
          country: "",
          pinCode: "",
          state: "",
          district: "",
        }}
        onSubmit={(values) => {
          console.log(">>hgfhgfhfhfhfh>>>", values);
          console.log(values);
        }}
        validationSchema={step1Schema}
      >
        {({ errors, touched }) => (
          console.log("valie", touched, "errors", errors),
          (
            <Form>
              {/* accordian for Restaurant details at restaurant */}
              <div className="row mt-4">
                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingOne"
                    >
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
                          <Field
                            type="text"
                            name="name"
                            placeholder="Resturent Name"
                            className={`mt-2 rounded w-100 form-input-field p-2 ${
                              errors.name && touched.name
                                ? "border-red"
                                : "border"
                            }`}
                            style={{ height: "3rem", borderColor: "red" }}
                          />
                          {errors.name && touched.name ? (
                            <ShowErrorMessage errors={errors.name} />
                          ) : null}
                        </div>
                        <div className="row mt-4">
                          <Field
                            id="filter"
                            type="text"
                            name="address"
                            placeholder="Resturent Complete Address"
                            className={`mt-2 rounded w-100 form-input-field p-2 ${
                              errors.address && touched.address
                                ? "border-red"
                                : "border"
                            }`}
                            style={{ height: "3rem", borderColor: "" }}
                          />
                          {errors.address && touched.address ? (
                            <ShowErrorMessage errors={errors.address} />
                          ) : null}
                        </div>
                        <div className="row mt-4">
                          <div className="col">
                            <Field
                              type="text"
                              name="latitude"
                              placeholder="latitude"
                              className={`mt-2 rounded w-100 form-input-field p-2 ${
                                errors.latitude && touched.latitude
                                  ? "border-red"
                                  : "border"
                              }`}
                              style={{ height: "3rem", borderColor: "red" }}
                            />
                            {errors.latitude && touched.latitude ? (
                              <ShowErrorMessage errors={errors.latitude} />
                            ) : null}
                          </div>
                          <div className="col">
                            <Field
                              type="text"
                              name="longitude"
                              placeholder="longitude"
                              className={`mt-2 rounded w-100 form-input-field p-2 ${
                                errors.latitude && touched.latitude
                                  ? "border-red"
                                  : "border"
                              }`}
                              style={{ height: "3rem", borderColor: "red" }}
                            />
                            {errors.longitude && touched.longitude ? (
                              <ShowErrorMessage errors={errors.latitude} />
                            ) : null}
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="row mt-2">
                            <div className="col">
                              <Field
                                type="text"
                                name="country"
                                placeholder="country"
                                className={`mt-2 rounded w-100 form-input-field p-2 ${
                                  errors.country && touched.country
                                    ? "border-red"
                                    : "border"
                                }`}
                                style={{ height: "3rem", borderColor: "red" }}
                              />
                              {errors.country && touched.country ? (
                                <ShowErrorMessage errors={errors.country} />
                              ) : null}
                            </div>
                            <div className="col">
                              <Field
                                type="text"
                                name="pinCode"
                                placeholder="pinCode"
                                className={`mt-2 rounded w-100 form-input-field p-2 ${
                                  errors.pinCode && touched.pinCode
                                    ? "border-red"
                                    : "border"
                                }`}
                                style={{ height: "3rem", borderColor: "red" }}
                              />
                              {errors.pinCode && touched.pinCode ? (
                                <ShowErrorMessage errors={errors.pinCode} />
                              ) : null}
                            </div>
                          </div>
                        </div>
                        <div className="row mt-4">
                          <div className="row mt-2">
                            <div className="col">
                              <Field
                                type="text"
                                name="state"
                                placeholder="state"
                                className={`mt-2 rounded w-100 form-input-field p-2 ${
                                  errors.state && touched.state
                                    ? "border-red"
                                    : "border"
                                }`}
                                style={{ height: "3rem", borderColor: "red" }}
                              />
                              {errors.state && touched.state ? (
                                <ShowErrorMessage errors={errors.state} />
                              ) : null}
                            </div>
                            <div className="col">
                              <Field
                                type="text"
                                name="district"
                                placeholder="district"
                                className={`mt-2 rounded w-100 form-input-field p-2 ${
                                  errors.district && touched.district
                                    ? "border-red"
                                    : "border"
                                }`}
                                style={{ height: "3rem", borderColor: "red" }}
                              />
                              {errors.district && touched.district ? (
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
                    <h2
                      className="accordion-header"
                      id="panelsStayOpen-headingTwo"
                    >
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
                            <h5>Restaurant details</h5>
                          </div>
                          <div className="row">
                            <h6>Name, address and location</h6>
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
                          <Field
                            id="filter"
                            type="text"
                            name="phone"
                            placeholder="Mobile Number At resturent"
                            className={`mt-2 rounded w-100 form-input-field p-2 ${
                              errors.phone && touched.phone
                                ? "border-red"
                                : "border"
                            }`}
                            style={{ height: "3rem", borderColor: "red" }}
                          />
                          {errors.phone && touched.phone ? (
                            <ShowErrorMessage errors={errors.phone} />
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* {children} */}
            </Form>
          )
        )}
      </Formik>
    </>
  );
};
export { FormStep1 };
