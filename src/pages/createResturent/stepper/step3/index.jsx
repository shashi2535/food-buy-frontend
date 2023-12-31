import { Formik, Form, Field, useFormik } from 'formik';
import { useEffect, useRef } from 'react';
import Dropzone, { useDropzone } from 'react-dropzone';
import { useSelector } from 'react-redux';

const FormStep3 =({ activeStep })=> {
  const toggle = useSelector((state) => state.toggle.toggle);
  const submitButtonRef = useRef(null);
  const firstUpdate = useRef(true);
  const {
    handleSubmit,
    values,
    setFieldValue
  } = useFormik({
    initialValues: {
      menu_images: [],
      resturent_image:[],
      food_images:[]
    },
    onSubmit: (values) => {
      console.log(">>>values", values);
    },
  });
  const onDrop = (acceptedFiles,fieldName) => {
    console.log("accepted files", acceptedFiles)
    console.log("section key", fieldName)
    setFieldValue(fieldName, values[fieldName].concat(acceptedFiles));
  };
  useEffect(() => {
    console.log("activestep>>>>",activeStep)
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if(activeStep === 2) {
      if (submitButtonRef.current) {
        submitButtonRef.current.click();
      }
    }
  }, [toggle, activeStep]);
  return (
    <>
      <div className="row">
        <h2 className="mt-5 ml-2"> Upload images</h2>
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
                      <h5>Menu images</h5>
                    </div>
                    <div className="row">
                      <h6>
                      Your menu will be directly visible to customers on Zomato
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
                  <div className='row'>
                <Dropzone onDrop={(acceptedFiles) => onDrop(acceptedFiles, 'menu_images')}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="dropzone">
              <input {...getInputProps()} />
              <i class="bi bi-plus-lg"></i>
            </div>
          )}
        </Dropzone> 
                  </div>
      <div className='row'>
        {values.menu_images.map((file, index) => (
          <div  key={index}>
            <img src={URL.createObjectURL(file)} width="100" />
          </div>
        ))}
      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* accordian for resturent images */}
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
                      <h5>Restaurant images</h5>
                    </div>
                    <div className="row">
                      <h6>
                      Please upload atleast one facade shot (picture of the restaurant front)
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
                <div className='row'>
                <Dropzone onDrop={(acceptedFiles) => onDrop(acceptedFiles, 'resturent_image')}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="dropzone">
              <input {...getInputProps()} />
              <i class="bi bi-plus-lg"></i>
            </div>
          )}
        </Dropzone> 
                  </div>
      <div className='row'>
        {values.resturent_image.map((file, index) => (
          <div  key={index}>
            <img src={URL.createObjectURL(file)} width="100" />
          </div>
        ))}
      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* accordian for operational hour for restaurant */}
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
                      <h5>Food images</h5>
                    </div>
                    <div className="row">
                      <h6>Please do not put images of raw ingredients</h6>
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
                <div className='row'>
                <Dropzone onDrop={(acceptedFiles) => onDrop(acceptedFiles, 'food_images')}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="dropzone">
              <input {...getInputProps()} />
              <i class="bi bi-plus-lg"></i>
            </div>
          )}
        </Dropzone> 
                  </div>
      <div className='row'>
        {values.food_images.map((file, index) => (
          <div  key={index}>
            <img src={URL.createObjectURL(file)} width="100" />
          </div>
        ))}
      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {children} */}
        <button type="submit" style={{display:"none"}} ref={submitButtonRef}> submit</button>
      </form>
    </>
  );
  }

  export{FormStep3}