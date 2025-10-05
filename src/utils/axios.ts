import axios, {AxiosInstance, InternalAxiosRequestConfig, AxiosError, AxiosResponse} from "axios";
import {ElNotification} from 'element-plus'

const service: AxiosInstance = axios.create({
    // baseURL: import.meta.env.VITE_API_URL, //后面我们会把它替换成环境变量
    baseURL: "http://localhost:8080",
    timeout: 5000
});

// 请求拦截器
service.interceptors.request.use((config: InternalAxiosRequestConfig) => {
        return config
    }, (error: AxiosError) => {
        ElNotification({
            title: "Axios Error request",
            message: error.message,
            type: 'error',
        });
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use((response: AxiosResponse) => {
    console.log(response)
    return response.data
}, (error: AxiosError) => {
    ElNotification({
        title: "Axios Error response",
        message: error.message,
        type: 'error',
    });
    return Promise.reject(error)
})

export default service