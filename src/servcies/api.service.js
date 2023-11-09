import axios from 'axios';
import { PAGE_URLS, STORAGE_KEYS } from '../constant';
import { authService } from './auth.service';
import { storageService } from './storage.service';

export const agent = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:4000',
    withCredentials: false,
});

const responseBody = (response) => response?.data;

agent.interceptors.request.use((config) => {
    const token = storageService.getFromLocalStorage(STORAGE_KEYS.AUTH_TOKEN);
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

agent.interceptors.response.use(
    async (response) => response,
    (error) => {
        const SOMETHING_WENT_WRONG = 'Something went wrong';
        const { data, status } = error?.response ?? {};

        if (data?.detail) {
            data.message = data?.detail;
        }
        const errorObject = data?.errors;
        let errorMessage = data?.message || error?.message || SOMETHING_WENT_WRONG;
        if (errorObject) {
            if (Object.keys(errorObject)?.length > 0) {
                Object.entries(errorObject).forEach(([_, value]) => {
                    if (value?.length > 0) {
                        errorMessage = value[0];
                    }
                });
            }
        }
        switch (status) {
            case 400:
                console.error(errorMessage);
                break;
            case 404:
                console.error(errorMessage);
                break;
            case 401:
                authService.logout();
                window.location.href = PAGE_URLS.PARTNERS_LANDING_PAGE;
                break;
            case 403:
                console.error('You are not allowed to do that!');
                break;
            case 500:
                console.error(errorMessage);
                break;
            default:
                console.error(errorMessage);
                break;
        }
        return Promise.reject(error?.response?.data || error);
    }
);

const multipartHeaders = {
    headers: { 'Content-type': 'multipart/form-data' },
};

const getQueryString = (queryParams) => {
    if (!queryParams || Object.keys(queryParams).length === 0) {
        return '';
    }
    const filteredParams = Object.entries(queryParams).reduce(
        (acc, [key, value]) => {
            if (value) {
                acc[key] = value;
            }
            return acc;
        },
        {}
    );

    const queryString = Object.keys(filteredParams)
        .map((param) => `${param}=${filteredParams[param]}`)
        .join('&');
    return queryString ? `?${queryString}` : queryString;
};

export const apiService = {
    get: (url, params) =>
        agent.get(url + getQueryString(params)).then(responseBody),
    post: (url, body = {}) => {
        return agent.post(url, body).then(responseBody)
    },
    put: (url, body = {}) => agent.put(url, body).then(responseBody),
    delete: (url) => agent.delete(url).then(responseBody),
    postForm: (url, data) =>
        agent.post(url, data, multipartHeaders).then(responseBody),
    putForm: (url, data) =>
        agent.put(url, data, multipartHeaders).then(responseBody),
};

export function createFormData(item) {
    const formData = new FormData();
    for (const key in item) {
        formData.append(key, item[key]);
    }
    return formData;
}
