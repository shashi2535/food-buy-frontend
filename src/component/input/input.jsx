import { Field } from "formik";
import './style.css';

export const Input = ({name, type}) => {
  return (
    <>
     <div style={{height:"10vh", width:"100%", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
          <label htmlFor={name}>{name}</label>
          <Field style={{width:"60%", outline:"none" }} type={type} id={name} name={name}  />
        </div>
        <br/>
    </>
  );
};
