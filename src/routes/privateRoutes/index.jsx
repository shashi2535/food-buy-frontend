import { useEffect } from "react"
import {useNavigate} from "react-router-dom"
import { isAuthenticated } from "../../utils"

const PrivateRoutes = ({Component})=>{
const nevigate = useNavigate()
    useEffect(()=>{
      if(!isAuthenticated()){
        nevigate("/")
      }  
    },[])
    return ( 
        <Component/>
    )
}

export { PrivateRoutes}