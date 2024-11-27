import axios from 'axios';

const coltivareApi = axios.create({
    baseURL: 'https://localhost:8080'
});

coltivareApi.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('accessToken');
  config.headers['Authorization'] = `Bearer `;
  return config;
})

export default coltivareApi;