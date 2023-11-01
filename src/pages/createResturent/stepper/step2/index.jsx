const { Formik, ErrorMessage, Field, Form } = require("formik");
const FormStep2 = ({ children }) => {
  return (
    <Formik
      initialValues={{ dateTime: "" }}
      onSubmit={(values, actions) => {
        // Handle step 2 submission
        console.log(values.dateTime);
        actions.setSubmitting(false);
      }}
    >
      <Form>
        <Field type="text" name="dateTime" placeholder="Date & Time" />
        <ErrorMessage name="dateTime" component="div" />
        {/* {children} */}
      </Form>
    </Formik>
  );
};

export { FormStep2 };
