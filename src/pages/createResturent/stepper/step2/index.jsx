import {useFormik } from "formik";
import { FormikRadioGroup } from "../../../../component/radioGroup";
import { CheckBoxCustom } from "../../../../component/checkBox";
import {
  dayConstant,
  PAGE_URLS,
  redioConstant,
  resturentType,
  timeSlot,
  typeCusion,
} from "../../../../constant";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { step2Schema } from "../../../../validation/user";
import { ShowErrorMessage } from "../../../../component";
import { getEntityType, saveTheDataOfStep2 } from "../../../../servcies";
import {useParams,useNavigate} from "react-router-dom"
import { toast } from "react-toastify";
const FormStep2 = ({ activeStep, setActiveStep }) => {
  const firstEle = resturentType.slice(0,7)
  const firstEleOfTypeCusion = typeCusion.slice(0,7)
  const [resturent_type_state, setResturent_type_state ] = useState(firstEle)
  const [cusion_type_state, setcusion_type_state ] = useState(firstEleOfTypeCusion)
  const toggle = useSelector((state) => state.toggle.toggle);
  const submitButtonRef = useRef(null);
  const firstUpdate = useRef(true);
  const {id} = useParams()
  const navigate = useNavigate()
  const {
    handleSubmit,
    values,
    handleChange,
    setFieldValue,
    getFieldProps,
    errors,
    touched
  } = useFormik({
    initialValues: {
      restaurantType: "",
      outletType: [],
      cusion_type: [],
      days:[],
      opens_at:"",
      close_at:"",
      times:[{opens_at:"",close_at:""}]
    },
    onSubmit: async(values) => {
      // values.time.push({opens_at:values.opens_at,close_at:values.close_at})
      console.log(">>>values in form 2", values);
      const getData = await getEntityType({type:["cuisine","outlets","kitchen_type"]})
      const data = getData.data
      const payload = {
        kitchenType:[],
        outlets:[],
        cuisines:[],
        timings:[]
      }
      for(let element of data){
        if(element.type === "cuisine"){
          for(let item of values.cusion_type){
            element.slugs.forEach((ele)=>{
              if(ele.slug === item){
                payload.cuisines.push(ele.id)
                 }}
                )
              }
          }
          if(element.type === "outlets"){
            for(let item of values.outletType){
              element.slugs.forEach((ele)=>{
                if(ele.slug === item){
                  payload.outlets.push(ele.id)
                   }}
                  )
                }
            }
            if(element.type === "kitchen_type"){
               element.slugs.forEach((ele)=>{
                 if(ele.slug === values.restaurantType){
                  return  payload.kitchenType.push(ele.id)   
               }
           }
                    ) 
              }
      }
      for(let ele of values.days){
         const obj ={
          day:"",
          shifts:[]
         }
       for(let item of values.times){
          const timing ={openingTime:"",closingTime:""}
          obj.day = ele
          timing.openingTime = item.opens_at
          timing.closingTime = item.close_at
          obj.shifts.push(timing)
          payload.timings.push(obj)
        }
       }
    const step2Data = await saveTheDataOfStep2(id,payload)
    if(step2Data.status === false){
      if(step2Data.message ==="unauthorized"){
        navigate(PAGE_URLS.PARTNERS_LANDING_PAGE)
      } 
      toast.error(step2Data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    if(step2Data.status === true ){
      navigate(`${PAGE_URLS.ADD_RESTURENT}/${id}`);
      setActiveStep(activeStep + 1);
    }
    },
    validationSchema:step2Schema
  });
  useEffect(() => {
    console.log("activestep>>>>inform2",activeStep)
    
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if(activeStep === 1) {
      if (submitButtonRef.current) {
        submitButtonRef.current.click();
      }
    }
  }, [toggle]);
  const handleAddTimeSlot = ()=>{
if(values.times.length <=2){
  setFieldValue("times", [...values.times,{opens_at:"",close_at:""}])
}
  }
return (
    <>
      <div className="row">
        <h2 className="mt-5 ml-2"> Restaurant Type & Timings</h2>
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
                      <h5>Establishment type</h5>
                    </div>
                    <div className="row">
                      <h6>
                        Select most relevant category for your restaurant type
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
                  {redioConstant.map((ele, index) => {
                    return (
                      <>
                        <div className="row mt-3">
                          <FormikRadioGroup
                            handleChange={handleChange}
                            text={ele.text}
                            value={ele.value}
                            name="restaurantType"
                          />
                        </div>
                      </>
                    );
                  })}
                  {(values.restaurantType === "dineout" ||
                    values.restaurantType === "both") && (
                    <div className="mt-3">
                      <h6>Select options which best describe your outlet</h6>
                      <div className="row mt-2">
                        {resturent_type_state.map((ele, idx) => {
                          return (
                              <div className="col-md-4 mt-2" key={idx}>
                                  <input class="form-check-input custom" type="checkbox" id={idx} value={ele.text} name="outletType"  onChange={handleChange} disabled={values.outletType.length >=2 ? values.outletType.includes(ele.text) ? false :true : false}/>
                                 <label class="form-check-label" htmlFor={idx}>{ele.text}</label>
                              </div>
                          );
                        })}
                        {resturent_type_state?.length === 7 && <a href="#" onClick={()=>setResturent_type_state([...resturent_type_state, ...resturentType.slice(7,resturentType.length)])}> show more</a> }
                        {(errors.outletType || touched.outletType) && (
                      <ShowErrorMessage errors={errors.outletType} />
                    )}
                      </div>
                    </div>
                  )}
                     {(errors.restaurantType || touched.restaurantType) && (
                      <ShowErrorMessage errors={errors.restaurantType} />
                    )}
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
                      <h5>Type of cuisines</h5>
                    </div>
                    <div className="row">
                      <h6>
                        Select options which best describe food your serve
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
                  <div className="row mt-2">
                    {cusion_type_state.map((ele, idx) => {
                      return (
                          <div className="col-md-4 mt-2" key={idx}>
   <input class="form-check-input custom" type="checkbox" id={idx} value={ele.text} name="cusion_type"  onChange={handleChange} disabled={values.cusion_type.length >=2 ? values.cusion_type.includes(ele.text) ? false :true : false}/>
<label class="form-check-label" htmlFor={idx}>{ele.text}</label>
                          </div>
                      );
                    })}
                     {cusion_type_state?.length === 7 && <a href="#" onClick={()=>setcusion_type_state([...cusion_type_state, ...typeCusion.slice(7,typeCusion.length)])}> show more</a> }
                     {(errors.cusion_type || touched.cusion_type) && (
                      <ShowErrorMessage errors={errors.cusion_type} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                      <h5>Restaurant operational hours</h5>
                    </div>
                    <div className="row">
                      <h6>Mark restaurant opening and closing hours</h6>
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
                  <div className="row mt-3">
                    <div className="col">
                      {
                        values.times.map((ele,idx)=>{
                          return(
                            <>
                          <div className="row">
                          <div className="col">
                          <div className="d-flex flex-column">
                            <label htmlFor="opens_at">opens at</label>
                            <select {...getFieldProps(`times[${idx}].opens_at`)}>
                              {timeSlot.map((element, idx) => {
                                return (
                                  <>
                                    <option value={element} label={element}>
                                      {element}
                                    </option>
                                  </>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                        <div className="col">to</div>
                        <div className="col">
                          <div className="d-flex flex-column">
                            <label htmlFor="close_at">close at</label>
                            <select {...getFieldProps(`times[${idx}].close_at`)}>
                              {timeSlot.map((element, idx) => {
                                return (
                                  <>
                                    <option value={element} label={element}>
                                      {element}
                                    </option>
                                  </>
                                );
                              })}
                            </select>
                          </div>
                       
                        </div>
                      </div>
                          </>
                           )
                        })
                      }
              {values.times.length < 3 ?  <button  onClick={()=>handleAddTimeSlot()}> +Add time slots</button> :""} 
                    </div>
                    <div className="col"></div>
                  </div>
                  <div className="row mt-4">
            <div className="col">
              <div className="row mt-2"><h5>Mark open days</h5></div>
              <div className="row mt-2"><h6>Don't forget to uncheck your off-day</h6></div>
              <div className="row mt-2">
              {dayConstant.map((ele, idx) => {
                      return (
                        <>
                          <div className="col-md-6 mt-2" key={idx}>
                            <CheckBoxCustom
                              value={ele.value}
                              text={ele.text}
                              name="days"
                              idx={idx}
                              handleChange={handleChange}
                              disable={false}
                            />
                          </div>
                        </>
                      );
                    })}
                         {(errors.days || touched.days) && (
                      <ShowErrorMessage errors={errors.days} />
                    )}
              </div>
            </div>
            <div className="col"></div>
         </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" style={{display:"none"}} ref={submitButtonRef}> submit</button>
      </form>
    </>
  );
};

export { FormStep2 };
