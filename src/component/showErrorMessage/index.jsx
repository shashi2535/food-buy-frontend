import { ErrorMessage } from "formik";

export const ShowErrorMessage = ({ errors }) => {
  return (
    <div> <h6 style={{color:"red", fontSize:"74%"}}>{errors}</h6></div>
  );
};
