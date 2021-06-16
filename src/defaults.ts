/*
 * @Author: fjt
 * @Date: 2021-06-13 20:04:36
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-16 23:03:51
 */
import { AxiosRequestConfig } from './types'
import { processHeaders } from './helpers/headers'
import { tranformRequest, tranformResponse } from './helpers/data'

const defaults: AxiosRequestConfig = {
  method: 'get',

  timeout: 3000,

  headers: {
    common: {
      Accept: 'application/json, text/plain, */*'
    }
  },

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
