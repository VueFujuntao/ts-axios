/*
 * @Author: fjt
 * @Date: 2021-06-06 21:52:06
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-08 20:59:44
 */
import axios from '../../src/index';

// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//         foo: ['bar', 'baz']
//     }
// });

// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//         foo: {
//             bar: 'baz'
//         }
//     }
// });

// const date = new Date();

// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//         date
//     }
// });

// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//         foo: 'bar',
//         baz: null
//     }
// });

// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//         foo: '@:$, '
//     }
// })

// axios({
//     method: 'get',
//     url: '/base/get#hash',
//     params: {
//         bar: 'baz'
//     }
// });

// axios({
//     method: 'get',
//     url: '/base/get?foo=baz',
//     params: {
//         bar: 'baz'
//     }
// });

// axios({
//     method: 'post',
//     url: '/base/post',
//     data: {
//         a: 1,
//         b: 2
//     }
// });

// const arr = new Int32Array([21.23]);
// axios({
//     method: 'post',
//     url: '/base/buffer',
//     data: arr
// })


// axios({
//     method: 'post',
//     url: '/base/post',
//     headers: {
//         'content-type': 'application/json',
//         'Accept': 'application/json, text/plain, */*'
//     },
//     data: {
//         a: 1,
//         b: 2
//     }
// });

// const paramsString = 'q=URILtils.searchParams&topic=api';
// const searchParams = new URLSearchParams(paramsString);

// axios({
//     method: 'POST',
//     url: '/base/post',
//     data: searchParams
// });


// axios({
//     method: 'post',
//     url: '/base/post',
//     data: {
//         q: 1, e: 3
//     }
// }).then(function (response) {
//     console.log(response);
// });

axios({
    method: 'post',
    url: '/base/post',
    responseType: 'json',
    data: {
        a: 3,
        b: 4
    }
}).then(function (response) {
    console.log(response);
});

