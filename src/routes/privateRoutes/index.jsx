import { useEffect } from "react"
import {useNavigate} from "react-router-dom"
import { isAuthenticated } from "../../utils"

const PrivateRoutes = ({Component})=>{
const navigate = useNavigate()
    useEffect(()=>{
      if(!isAuthenticated()){
        navigate("/")
      }  
    },[navigate])
    return ( 
        <Component/>
    )
}

export { PrivateRoutes}