/*
 * @Author: fjt
 * @Date: 2021-06-06 21:52:06
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-19 20:18:00
 */
import axios from '../../src/index';

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

const otherInstall = axios.create({
    xsrfHeaderName: 'X-XSFR-TOKEN-D',
    xsrfCookieName: 'XSFR-TOKEN-D',
})
 otherInstall.get('/more/get').then(response => {
     console.log(response);
 });
