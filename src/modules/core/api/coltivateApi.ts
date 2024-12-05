import axios from 'axios';
import * as jose from 'jose';

const coltivareApi = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

coltivareApi.interceptors.request.use((config) => {
  const accessToken = JSON.stringify(localStorage.getItem('accessToken'));
  const isAccessTokenExpired = jose.decodeJwt(accessToken).exp < (new Date().getTime() + 1) / 1000;
  const tokenString = !isAccessTokenExpired ? `Bearer ${accessToken}` : '';
  config.headers['Authorization'] = tokenString;
  return config;
});

export default coltivareApi;
