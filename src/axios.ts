/*
 * @Author: fjt
 * @Date: 2021-06-06 12:56:33
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-09 22:32:05
 */
import Axios from './code/Axios'
import { extend } from './helpers/utils'
import { AxiosInstance } from './types'

function createInstance(): AxiosInstance {
  const context = new Axios()
  //  request this 指向问题 通过bind 指向 实例
  const instance = Axios.prototype.request.bind(context)

  // axios({}); axios.get();
  extend(instance, context)

  return instance as AxiosInstance
}

const axios = createInstance()

export default axios
