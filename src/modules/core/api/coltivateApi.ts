import axios from 'axios';

const coltivareApi = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Credentials': true,
    "Access-Control-Allow-Headers": "*", 
    "Access-Control-Allow-Methods": "*" ,
    "Content-Type": "application/json" 
  },
  withCredentials: true
});

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

coltivareApi.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('accessToken');
  const tokenString = accessToken ? `Bearer ${accessToken}` : '';
  config.headers['Authorization'] = tokenString;
  return config;
})

export default coltivareApi;