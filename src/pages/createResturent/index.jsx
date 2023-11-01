
import React from 'react'
import { RestaurantNavBar } from '../../component'
import { ResturentFooter } from './Resturent-Footer'
import "./style.css"
import { MultiStepForm} from './stepper/indx';

const AddResturent = ()=> {


  return (
    <>
   <RestaurantNavBar className="partner-remove-bg-color"/>
   <MultiStepForm/>
    </>
  )
}

export {AddResturent} 