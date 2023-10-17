const isAuthenticated = ()=>{
  return localStorage.getItem("token") ? true :false
}

export const getError = (error) => {
  return error.response && error.response.data.message
  ? error.response.data.message
  : error.message;
};

export { isAuthenticated}