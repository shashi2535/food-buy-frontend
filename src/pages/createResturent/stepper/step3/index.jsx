const { Formik, ErrorMessage, Field, Form } = require("formik");
const FormStep3 =({ onNext })=> {
  return (
    <Formik
    initialValues={{ selectRooms: "" }}
    onSubmit={(values, actions) => {
      // Handle step 3 submission
      console.log(values.selectRooms);
      actions.setSubmitting(false);
    }}
  >
    <Form>
      <Field type="text" name="selectRooms" placeholder="Select Rooms" />
      <ErrorMessage name="selectRooms" component="div" />
    </Form>
  </Formik>
  );
  }

  export{FormStep3}