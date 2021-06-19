/*
 * @Author: fjt
 * @Date: 2021-06-08 22:58:43
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-19 18:56:45
 */
import axios, { AxiosError } from "../../src/index";

axios({
    url: '/error/get1',
}).then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
});

axios({
    url: '/error/get',
}).then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
    console.log(error.response);
});

setTimeout(() => {
    axios({
        method: 'get',
        url: '/error/get'
    }).then(res => {
        console.log(res);
        console.log('延时');
    }).catch(err => {
        console.log(err);
    });
}, 5000);


axios({
    url: '/error/timeout',
    timeout: 2000
}).then((res) => {
    console.log(res);

}).catch((err: AxiosError) => {
    console.log(err.message);
    console.log(err.request);
});