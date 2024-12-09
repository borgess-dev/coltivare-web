import axios from 'axios';
import { LoginResponse } from '../../signin/types/LoginReponse';

const coltivareApi = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Credentials': true,
    "Access-Control-Allow-Headers": "*", 
    "Access-Control-Allow-Methods": "*" ,
    "Content-Type": "application/json" 
  },
  withCredentials: true
});

coltivareApi.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('accessToken');
  if(accessToken){
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

const refreshToken = async () => {
  return (await coltivareApi.post<LoginResponse>("/v1/auth/refresh")).data;
};

coltivareApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshTokenResponse = await refreshToken();

      const { accessToken } = refreshTokenResponse;

      localStorage.setItem('accessToken', accessToken);

      coltivareApi.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${accessToken}`;
      return coltivareApi(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default coltivareApi;