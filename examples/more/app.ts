/*
 * @Author: fjt
 * @Date: 2021-06-06 21:52:06
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-22 22:59:58
 */
import axios, { AxiosError } from '../../src/index';
import 'nprogress/nprogress.css';
import NProgress from "nprogress";
import qs from "qs";

// document.cookie = 'a=b'
// const instal = axios.create();

// instal.get('/more/get').then((response) => {
//     console.log(response);
// });

// instal.post('http://localhost:8088/more/server2', {
//     a: 1
// }, {
//     withCredentials: true
// }).then(function(response) {
//     console.log(response);
// }).catch(erro => {
//     console.log(erro);
// });

// const otherInstall = axios.create({
//     xsrfHeaderName: 'X-XSFR-TOKEN-D',
//     xsrfCookieName: 'XSFR-TOKEN-D',
// })
//  otherInstall.get('/more/get').then(response => {
//      console.log(response);
//  });

const instance = axios.create({
    paramsSerializer(params) {
        return qs.stringify(params, {arrayFormat: 'brackets'})
    }
});

// function calculatePercentage(loaded: number, total: number): number {
//     return Math.floor(loaded * 1.0) / total;
// }

// function loadProgressBar() {
//     const setupSsartProgress = (): void => {
//         instance.interceptors.request.use(config => {
//             NProgress.start();
//             return config;
//         });
//     }

//     const setupUpdateProgress = (): void => {
//         const update = (e: ProgressEvent) => {
//             NProgress.set(calculatePercentage(e.loaded, e.total))
//         }
//         instance.defaults.onDownloadProgress = update;
//         instance.defaults.onUploadProgress = update;
//     }

//     const setupStopProgress = (): void  => {
//         instance.interceptors.response.use(response => {
//             NProgress.done();
//             return response;
//         }, error => {
//             NProgress.done();
//             return Promise.reject(error);
//         });
//     }

//     setupSsartProgress();
//     setupUpdateProgress();
//     setupStopProgress();
// }

// loadProgressBar();

// const downLoadEl = document.getElementById('download');

// downLoadEl.addEventListener('click', e => {
//     instance.get('https://img.mukewang.com/5cc01a7b0001a33718720632.jpg');
// });

// const uploadEl = document.getElementById('upload');

// uploadEl.addEventListener('click', e => {
//     const data = new FormData();
//     const fileEl = document.getElementById('file') as HTMLInputElement;

//     if (fileEl.files) {
//         data.append('file', fileEl.files[0]);

//         instance.post('/more/upload', data);
//     }
// })

// instance.post('/more/post', {
//     a: 1,
// }, {
//     auth: {
//         username: 'fjt',
//         password: '123456'
//     }
// }).then(response => {
//     console.log(response);
// }).catch(err => {
//     console.log(err);
// });

// instance.get('/more/304').then(response => {
//     console.log(response);
// }).catch((error: AxiosError) => {
//     console.log(error);
// });

// instance.get('/more/304', {
//     validateStatus(status) {
//         return status >= 200 && status < 400;
//     }
// }).then(response => {
//     console.log(response);
// }).catch((error: AxiosError) => {
//     console.log(error);
// });

// axios.get('/more/get', {
//     params: new URLSearchParams('a=b&c=d')
// }).then(res => {
//     console.log(res);
// });

// axios.get('/more/get', {
//     params: {
//         a:1,
//         b:2,
//         c: ['a', 'b', 'c']
//     }
// }).then(response => {
//     console.log(response);
// }).catch(error => {
//     console.log(error);
// });

// instance.get('/more/get', {
//     params: {
//         a: 1,
//         b: 2,
//         c: ['a', 'b', 'c']
//     }
// }).then(response => {
//     console.log(response);
// })


const instan = axios.create({
    baseURL: 'https://img1.mukewang.com/'
});

instan.get('/60cffece00019d4217920764.jpg')

instan.get('https://img1.mukewang.com/60cffece00019d4217920764.jpg')