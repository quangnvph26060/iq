import axiosClient from '../../../api/axiosClient';

export const loginApi  = (data) => axiosClient.post('/login', data);

export const registerApi = (data) => {
    return axiosClient.post('/register', data);
};