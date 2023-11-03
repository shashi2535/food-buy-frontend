import { Field } from "formik";

const FormikRadioGroup = ({
  text,
  value,
  handleChange,
  name
}) => {
  return (
    <>
      <label>
        <input
          className="form-check-input"
          type="radio"
          onChange={handleChange}
          name={name}
          value={value}
          // checked={value===redioValue}
        />
        {text}
      </label>
    </>
  );
};

export { FormikRadioGroup };
