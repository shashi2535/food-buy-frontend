import { apiService } from "./api.service";

export const step1Create = (values)=>{
    return apiService.post('/save-basic-details', values);
}
export const stepGetDataById = (id)=>{
    return apiService.get(`/get-basic-details/${id}`);
}