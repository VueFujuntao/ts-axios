/*
 * @Author: fjt
 * @Date: 2021-06-06 13:33:26
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-07 22:42:55
 */
import { AxiosRequestConfig } from './types/index'

export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get', headers } = config

  const request = new XMLHttpRequest()

  //  toUpperCase 大写
  request.open(method.toUpperCase(), url, true)

  // 设置headers
  console.log(data)

  Object.keys(headers).forEach(name => {
    if (data === null && name.toLowerCase() === 'content-type') {
      delete headers[name]
    } else {
      request.setRequestHeader(name, headers[name])
    }
  })

  request.send(data)
}
