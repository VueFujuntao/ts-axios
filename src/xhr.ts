/*
 * @Author: fjt
 * @Date: 2021-06-06 13:33:26
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-06 13:39:19
 */
import { AxiosRequestConfig } from './types/index'
export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get' } = config

  const request = new XMLHttpRequest()

  //  toUpperCase 大写
  request.open(method.toUpperCase(), url, true)

  request.send(data)
}
