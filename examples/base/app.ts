/*
 * @Author: fjt
 * @Date: 2021-06-06 21:52:06
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-06 22:07:27
 */
import axios from '../../src/index';

axios({
    method: 'get',
    url: '/base/get',
    params: {
        foo: ['bar', 'baz']
    }
});

axios({
    method: 'get',
    url: '/base/get',
    params: {
        foo: {
            bar: 'baz'
        }
    }
});

const date = new Date();

axios({
    method: 'get',
    url: '/base/get',
    params: {
        date
    }
});

axios({
    method: 'get',
    url: '/base/get',
    params: {
        foo: 'bar',
        baz: null
    }
});

axios({
    method: 'get',
    url: '/base/get',
    params: {
        foo: '@:$, '
    }
})

axios({
    method: 'get',
    url: '/base/get#hash',
    params: {
        bar: 'baz'
    }
});

axios({
    method: 'get',
    url: '/base/get?foo=baz',
    params: {
        bar: 'baz'
    }
})