import axios from 'axios';

const coltivareApi = axios.create({
    baseURL: 'https://localhost:8080'
});

coltivareApi.interceptors.request.use(config => {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
    return config;
})

export default coltivareApi;