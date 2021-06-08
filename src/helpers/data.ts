/*
 * @Author: fjt
 * @Date: 2021-06-07 21:27:33
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-08 21:33:22
 */
import { isPlainObject } from './utils'

export function tranformRequest(data: any): any {
  // 是普通对象
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

export function tranformResponse(data: any): any {
  if (typeof data === 'string') {
    // 字符串不一定是json数据
    try {
      data = JSON.parse(data)
    } catch (e) {
      // do nothting
    }
  }
  return data
}
