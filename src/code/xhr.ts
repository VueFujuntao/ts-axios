/*
 * @Author: fjt
 * @Date: 2021-06-06 13:33:26
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-19 20:19:11
 */
import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types/index'
import { parseHeaders } from '../helpers/headers'
import { createError } from '../helpers/error'
import { isURLSameOrigin } from './../helpers/url'
import cookie from './../helpers/cookie'

export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const {
      data = null,
      url,
      method = 'get',
      headers,
      responseType,
      timeout,
      cancelToken,
      withCredentials,
      xsrfCookieName,
      xsrfHeaderName
    } = config

    const request = new XMLHttpRequest()

    if (responseType) {
      request.responseType = responseType
    }

    if (timeout) {
      request.timeout = timeout
    }

    if (withCredentials) {
      request.withCredentials = withCredentials
    }
    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) {
        return
      }

      // 网络错误
      if (request.status === 0) {
        return
      }
      const responseHeaders = parseHeaders(request.getAllResponseHeaders())
      const responseData = responseType !== 'text' ? request.response : request.responseText
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      }
      hanldeResponse(response)
    }

    // 报错处理
    request.onerror = function handleError() {
      reject(createError('Network Error', config, null, request))
    }

    // 超时处理
    request.ontimeout = function handleTimeout() {
      reject(createError(`Timeout of ${timeout} ms exceeded`, config, 'ECONNABORTED', request))
    }

    request.onprogress = function() {
      // console.log(event);
    }
    //  toUpperCase 大写
    request.open(method.toUpperCase(), url!, true)
    // 设置headers

    if ((withCredentials || isURLSameOrigin(url!)) && xsrfCookieName) {
      console.log(xsrfCookieName)

      const xsrfValue = cookie.read(xsrfCookieName)
      console.log(xsrfValue)

      if (xsrfValue && xsrfHeaderName) {
        headers[xsrfHeaderName] = xsrfValue
      }
    }

    Object.keys(headers).forEach((name: string) => {
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        request.setRequestHeader(name, headers[name])
      }
    })

    if (cancelToken) {
      cancelToken.promise.then(reason => {
        request.abort()
        reject(reason)
      })
    }

    request.send(data)

    function hanldeResponse(response: AxiosResponse): void {
      if (response.status >= 200 && response.status < 300) {
        resolve(response)
      } else {
        reject(
          createError(
            `Request failed with status code ${response.status}`,
            config,
            null,
            request,
            response
          )
        )
      }
    }
  })
}
