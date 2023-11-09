import './style.css';

export const CustomInput = ({name, type, placelholder,handleChange,values, style,errors }) => {
  console.log("style",style)
  return (
    <>
     <input
                      type={type}
                      name={name}
                      placeholder={placelholder}
                      className={`mt-2 rounded w-100 form-input-field p-2 ${
                        errors ? "border-red" : "border"
                      }`}
                      style={{style}}
                      onChange={handleChange}
                      value={values}
                    />
      
    </>
  );
};
