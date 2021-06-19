/*
 * @Author: fjt
 * @Date: 2021-06-17 23:16:39
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-19 19:30:35
 */
import axios, { Canceler } from "../../src/index";

axios.defaults.headers.common['abc'] = '123';
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/cancel/get', {
    cancelToken: source.token,

}).catch(e => {
    if (axios.isCancel(e)) {
        console.log(e);
        console.log('Request canceled ', e.message);
    }
});

// 用的相同source post发不出去
setTimeout(() => {
    // source.cancel('Operation canceled by the uer');
    axios.post('/cancel/post', { a: 1 }, { cancelToken: source.token }).catch(e => {
        if (axios.isCancel(e)) {
            console.log(e);
            console.log(e.message);
        }
    })
}, 1000);

let cancel: Canceler

axios.get('/cancel/get', {
    cancelToken: new CancelToken(c => {
        cancel = c;
    })
}).catch(e => {
    if (axios.isCancel(e)) {
        console.log('Request canceled');
        
    }
});

setTimeout(()=> {
    cancel()
}, 1000)