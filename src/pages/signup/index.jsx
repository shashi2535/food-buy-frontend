import { ErrorMessage, Form, Formik } from "formik";
import { Input, CustomButton, ShowErrorMessage } from "../../component/";
import { signupSchema } from "../../validation";

export const Signup = () => {
  const initialValues = {
    firstName: "",
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log("values", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signupSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <Input name="firstName" type="text" />
        <ShowErrorMessage name={"firstName"}/>
        <Input name="email" type="text" />
        <ShowErrorMessage name={"email"}/>
        <Input name="password" type="password" />
        <ShowErrorMessage name={"password"}/>
        <CustomButton color={"primary"} value={"Submit"} type={"submit"} />
      </Form>
    </Formik>
  );
};
