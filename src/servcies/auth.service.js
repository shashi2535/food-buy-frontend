import { API_ROUTES, STORAGE_KEYS } from '../Constants';
import { apiService } from './api.service';
import { storageService } from './storage.service';

const isAuthenticated = () => {
  const token = storageService.getFromLocalStorage(STORAGE_KEYS.AUTH_TOKEN);
  return !!token && token;
};

const getUserDetails = () => {
  const userData =
    storageService.getFromLocalStorage(STORAGE_KEYS.USER_DETAILS) ?? null;
  return userData;
};

const logout = () => {
  storageService.removeFromLocalStorage(STORAGE_KEYS.AUTH_TOKEN);
  storageService.removeFromLocalStorage(STORAGE_KEYS.USER_DETAILS);
};

const login = (values) => {
  return apiService.post('/users/auth', values);
};
const loginAdmin = (values) => {
  return apiService.post(API_ROUTES.LOGIN, values);
};

export const setUserDetails = (user) => {
  storageService.setToLocalStorage(STORAGE_KEYS.USER_DETAILS, user);
};

export const setAuthToken = (token) => {
  storageService.setToLocalStorage(STORAGE_KEYS.AUTH_TOKEN, token);
};

export const authService = {
  isAuthenticated,
  getUserDetails,
  logout,
  login,
  loginAdmin
};