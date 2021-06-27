/*
 * @Author: fjt
 * @Date: 2021-06-06 12:56:33
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-26 22:33:21
 */
import Axios from './code/Axios'
import { extend } from './helpers/utils'
import { AxiosInstance, AxiosRequestConfig, AxiosStatic } from './types'
import defaults from './defaults'
import mergeConfig from './code/mergeConfig'
import cancelToken from './cancel/cancelToken'
import { isCancel } from './cancel/Cancel'

function createInstance(config: AxiosRequestConfig): AxiosStatic {
  const context = new Axios(config)
  //  request this 指向问题 通过bind 指向 实例
  const instance = Axios.prototype.request.bind(context)

  // axios({}); axios.get();
  extend(instance, context)

  return instance as AxiosStatic
}

const axios = createInstance(defaults)

axios.create = function(config: AxiosRequestConfig): AxiosInstance {
  // 创建一个新的实例
  return createInstance(mergeConfig(defaults, config))
}

axios.CancelToken = cancelToken
axios.isCancel = isCancel

axios.all = function all(promises) {
  return Promise.all(promises)
}

axios.spread = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr)
  }
}

axios.Axios = Axios

export default axios
