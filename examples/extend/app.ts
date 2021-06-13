/*
 * @Author: fjt
 * @Date: 2021-06-11 22:03:45
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-12 22:20:08
 */
import axios, { AxiosResponse } from "../../src/index";

axios({
    url: '/extend/post',
    method: 'post',
    data: {
        msg: 'hi'
    }
});

axios.request({
    url: '/extend/post',
    method: 'post',
    data: {
        msg: 'hello'
    }
});

axios.get('/extend/get');

axios.options('/extend/options');

axios.delete('/extend/delete');

axios.head('/extend/head');

axios.post('/extend/post', {
    msg: 'post'
});

axios.put('/extend/put', { msg: 'put' });

axios.patch('/extend/patch', {
    msg: 'patch'
});

axios('/extend/post', {
    method: 'post',
    data: {
        msg: 'hello'
    }
});
interface ResponseData<T = any> {
    code: number
    result: T
    message: string
}
interface User {
    name: string
}

function getUser<T>() {
    return axios<ResponseData<T>>('/extend/user').then(res => res.data).catch(err => {

    })
}

async function text() {
    const user = await getUser<User>();
    if (user) {
        console.log(user.result.name);
    }
}

text();
