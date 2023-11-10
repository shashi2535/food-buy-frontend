import { apiService } from "./api.service";

export const step1Create = (values)=>{
    return apiService.post('/save-basic-details', values);
}
export const stepGetDataById = (id)=>{
    return apiService.get(`/get-basic-details/${id}`);
}
export const step1UpdateDataById = (id,values)=>{
    return apiService.post(`/update-basic-details/${id}`, values);
}

export const getEntityType = (values)=>{
    return apiService.post(`/misc/get-entity-type`, values);
}

export const saveTheDataOfStep2 = (id,values)=>{
    return apiService.post(`/save-restaurant-details/${id}`, values);
}

export const getTheDataOfStep2 = (id)=>{
    return apiService.get(`/save-restaurant-details/${id}`);
}