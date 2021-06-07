/*
 * @Author: fjt
 * @Date: 2021-06-07 21:27:33
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-07 21:33:13
 */
import { isPlainObject } from './utils'

export function tranformRequest(data: any): any {
  // 是普通对象
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}
