import axios from 'axios';

const APIService = axios.create({
  baseURL: 'http://localhost:8080',
});

export default APIService;
