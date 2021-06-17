/*
 * @Author: fjt
 * @Date: 2021-06-07 21:52:59
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-17 20:16:48
 */
import { Method } from '../types'
import { deepMerge, isPlainObject } from './utils'

function normalizeHeaderName(headers: any, normalizedName: string): void {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach(name => {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = headers[name]
      delete headers[name]
    }
  })
}

export function processHeaders(headers: any, data: any): any {
  // 大小写匹配处理
  normalizeHeaderName(headers, 'Content-Type')

  // 是普通对象
  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return headers
}

export function parseHeaders(headers: string): any {
  let parsed: any = Object.create(null)
  if (!headers) {
    return parsed
  }

  headers.split('\r\n').forEach(function(line) {
    let [key, value]: string[] = line.split(':')
    // 转换城小写 去除空格
    key = key.trim().toLowerCase()
    if (!key) {
      return
    }
    if (value) {
      value = value.trim()
    }
    parsed[key] = value
  })

  return parsed
}

export function flattenHeaders(headers: any, method: Method): any {
  if (!headers) {
    return headers
  }

  headers = deepMerge(headers.common, headers[method], headers)
  // 删除
  const methodsToDelete = ['delete', 'get', 'head', 'options', 'post', 'put', 'patch', 'common']
  methodsToDelete.forEach(method => {
    delete headers[method]
  })

  return headers
}
