import axios, { AxiosRequestHeaders } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AxiosIntance = (contentType = 'application/json') => {
    const axiosInstance = axios.create({
        baseURL: 'https://stayapi-production.up.railway.app/api'
    });
    axiosInstance.interceptors.request.use(
        async config => {
            const token = await AsyncStorage.getItem('token');
            config.headers = {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': contentType
            } as AxiosRequestHeaders; // Explicitly type headers
            return config;
        },
        err => Promise.reject(err)
    );
    axiosInstance.interceptors.response.use(
        res => res.data,
        err => Promise.reject(err)
    ); // callback
    return axiosInstance;
}

export default AxiosIntance;