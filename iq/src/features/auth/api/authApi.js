import axiosClient from '../../../api/axiosClient';

export const loginApi  = (data) => axiosClient.post('http://14.225.207.29:3001/login',);

export const registerApi = (data) => {
    return axiosClient.post('http://14.225.207.29:3001/register', data);
};