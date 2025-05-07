
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://14.225.207.29:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Gắn token vào mọi request
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;
