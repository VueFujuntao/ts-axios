/*
 * @Author: fjt
 * @Date: 2021-06-06 12:56:33
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-16 23:17:19
 */
import Axios from './code/Axios'
import { extend } from './helpers/utils'
import { AxiosInstance, AxiosRequestConfig } from './types'
import defaults from './defaults'

function createInstance(config: AxiosRequestConfig): AxiosInstance {
  const context = new Axios(config)
  //  request this 指向问题 通过bind 指向 实例
  const instance = Axios.prototype.request.bind(context)

  // axios({}); axios.get();
  extend(instance, context)

  return instance as AxiosInstance
}
console.log(defaults)

const axios = createInstance(defaults)

export default axios
