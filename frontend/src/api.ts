import axios from 'axios';

const APIService = axios.create({
  baseURL: 'http://localhost:8080/api',
});

APIService.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default APIService;
