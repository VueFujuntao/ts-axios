/*
 * @Author: fjt
 * @Date: 2021-06-16 22:57:01
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-16 23:01:58
 */

import { AxiosTransformer } from '../types'

export default function transform(
  data: any,
  headers: any,
  fns?: AxiosTransformer | AxiosTransformer[]
): any {
  if (!fns) {
    return data
  }

  if (!Array.isArray(fns)) {
    fns = [fns]
  }

  fns.forEach(fn => {
    // data 处理返回 管道式链式链式调用
    data = fn(data, headers)
  })

  return data
}
