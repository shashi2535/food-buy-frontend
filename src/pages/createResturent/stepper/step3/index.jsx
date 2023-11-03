import { Formik, Form, Field, useFormik } from 'formik';
import { useDropzone } from 'react-dropzone';

const FormStep3 =({ onNext })=> {
  const {
    handleSubmit,
    values,
    handleChange,
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
  const onDrop = (acceptedFiles,sectionKey) => {
    console.log("accepted files", acceptedFiles)
    console.log("section key", sectionKey)
    setFieldValue('menu_images', values.menu_images.concat(acceptedFiles));
  };
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*', // Specify the accepted file types (e.g., images)
    multiple: true,     // Allow multiple file uploads
  });
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
                <div className='row' {...getRootProps({ className: 'dropzone' })}>
           <input {...getInputProps()} />
          <i class="bi bi-plus-lg"></i>
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
                <div className='row' {...getRootProps({ className: 'dropzone' })}>
           <input {...getInputProps()} />
          <i class="bi bi-plus-lg"></i>
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
                <div className='row' {...getRootProps({ className: 'dropzone' })}>
           <input {...getInputProps()} />
          <i class="bi bi-plus-lg"></i>
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
        <button type="submit"> submit</button>
      </form>
    </>
  );
  }

  export{FormStep3}