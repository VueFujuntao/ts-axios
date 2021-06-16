/*
 * @Author: fjt
 * @Date: 2021-06-16 21:39:15
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-16 23:38:16
 */
import axios, { AxiosTransformer } from "../../src/index";
import qs from "qs"

axios.defaults.headers.common['test2'] = 123;
console.log(qs.stringify({
    a: 1
}));

// axios({
//     url: '/config/post',
//     method: 'post',
//     data: qs.stringify({
//         a: 1
//     }),
//     headers: {
//         test: '321',
//     }
// }).then(res => {
//     console.log(res);
// });

axios({
    transformRequest: [
        (function (data) {
            return qs.stringify(data);
        }), ...(axios.defaults.transformRequest as AxiosTransformer[])
    ],
    transformResponse: [
        ...(axios.defaults.transformResponse as AxiosTransformer[]),
        function (data) {
            if (typeof data === 'object') {
                data.b = 2;
            }
            return data;
        }
    ],
    url: '/config/post',
    method: 'post',
    data: {
        b: 1,
        c: 2
    }
}).then(res => {
    console.log(res);
});

