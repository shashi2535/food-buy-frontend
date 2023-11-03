
import "./index.css"
const CheckBoxCustom= ({value,text,name,idx,handleChange,disable})=>{
    return(
        <>
<input class="form-check-input custom" type="checkbox" id={idx} value={value} name={name}  onChange={handleChange} disabled={disable} />
<label class="form-check-label" htmlFor={idx}>{text}</label>
        </>
    )
}
export {CheckBoxCustom}