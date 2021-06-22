/*
 * @Author: fjt
 * @Date: 2021-06-06 20:52:36
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-22 22:55:30
 */
import { isDate, isPlainObject, isURLSearchParams } from './utils'

interface URLOrigin {
  protocol: string
  host: string
}

/**
 * @name: 特殊符号转译回来
 * @test: test font
 * @msg:
 * @param {string} val
 * @return {string}
 */
function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2c/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

export function isAbsoluteURL(url: string): boolean {
  return /(^[a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
}

export function combineURL(baseURL: string, relativeURL?: string): string {
  return relativeURL ? baseURL.replace(/\/+&/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL
}

export function buildURL(
  url: string,
  params?: any,
  paramsSerialzer?: (params: any) => string
): string {
  if (!params) {
    return url
  }
  let serializedParams

  if (paramsSerialzer) {
    serializedParams = paramsSerialzer(params)
  } else if (isURLSearchParams(params)) {
    serializedParams = params.toString()
  } else {
    const parts: string[] = []

    Object.keys(params).forEach(function(key) {
      const val = params[key]
      if (val === null || typeof val === 'undefined') {
        // 跳到下一个循环
        return
      }
      let values = []
      if (Array.isArray(val)) {
        values = val
        key += '[]'
      } else {
        values = [val]
      }

      values.forEach(function(val) {
        if (isDate(val)) {
          val = val.toISOString()
        } else if (isPlainObject(val)) {
          val = JSON.stringify(val)
        }
        parts.push(`${encode(key)}=${encode(val)}`)
      })
    })
    serializedParams = parts.join('&')
  }

  if (serializedParams) {
    //  去除hash值后面参数
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }

  return url
}

/**
 * @name: 判断是否同源
 * @test: test font
 * @msg:
 * @param {string} requestURL
 * @return {boolean}
 */
export function isURLSameOrigin(requestURL: string): boolean {
  const parsedOrigin = resolveFn(requestURL)
  return (
    parsedOrigin.protocol === currentOrigin.protocol && parsedOrigin.host === currentOrigin.host
  )
}

const urlParsingNode = document.createElement('a')
// 当前页面的源
const currentOrigin = resolveFn(window.location.href)
/**
 * @name: 获取协议 域名
 * @test: test font
 * @msg:
 * @param {string} url
 * @return {Object}
 */
function resolveFn(url: string): URLOrigin {
  urlParsingNode.setAttribute('href', url)
  const { protocol, host } = urlParsingNode
  return {
    protocol,
    host
  }
}
