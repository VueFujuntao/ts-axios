/*
 * @Author: fjt
 * @Date: 2021-06-13 16:31:10
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-13 19:05:38
 */
import { read } from "fs";
import axios from "../../src/index";

axios.interceptors.request.use((config) => {
    config.headers.test += '1'
    return config;
});

axios.interceptors.request.use((config) => {
    config.headers.test += '2'
    return config;
});

axios.interceptors.request.use((config) => {
    config.headers.test += '3'
    return config;
});

axios.interceptors.response.use(res => {
    res.data += '1';
    return res;
});

let interceptor = axios.interceptors.response.use(res => {
    res.data += '2';
    return res;
});

axios.interceptors.response.use(res => {
    res.data += '3';
    return res;
});

axios.interceptors.response.eject(interceptor);

axios({
    url: '/interceptor/get',
    method: 'get',
    headers: {
        test: ''
    }
}).then(res => {
    console.log(res.data);
});

