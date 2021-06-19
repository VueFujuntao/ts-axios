/*
 * @Author: fjt
 * @Date: 2021-06-13 20:04:36
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-19 19:38:48
 */
import { AxiosRequestConfig } from './types'
import { processHeaders } from './helpers/headers'
import { tranformRequest, tranformResponse } from './helpers/data'

/**
 * @name: 默认参数
 * @test: test font
 * @msg:
 * @param {string} method
 * @param {number} timeout
 * @param {object} headers
 * @param {string} xsrfCookieName
 * @param {string} xsrfHeaderName
 * @param {Array} transformRequest
 * @param {Array} transformResponse
 * @return {void}
 */
const defaults: AxiosRequestConfig = {
  method: 'get',

  timeout: 3000,

  headers: {
    common: {
      Accept: 'application/json, text/plain, */*'
    }
  },

  xsrfCookieName: 'XSRF-TOKEN',

  xsrfHeaderName: 'X-XSRF-TOKEN',

  // 请求数据默认处理配置
  transformRequest: [
    function(data: any, headers: any): any {
      processHeaders(headers, data)
      return tranformRequest(data)
    }
  ],

  // 响应数据默认处理配置
  transformResponse: [
    function(data: any): any {
      return tranformResponse(data)
    }
  ]
}

const methodsNoData = ['delete', 'get', 'head', 'options']
methodsNoData.forEach(method => {
  defaults.headers[method] = {}
})

const methodsWithData = ['post', 'put', 'patch']
methodsWithData.forEach(method => {
  defaults.headers[method] = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export default defaults
