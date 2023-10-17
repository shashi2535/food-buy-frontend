import { ErrorMessage } from "formik";

export const ShowErrorMessage = ({ name }) => {
  return (
    <div
      className="mb-3"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ErrorMessage
        name={name}
        component="div"
        style={{ color: "red", width: "60%" }}
      />
    </div>
  );
};
