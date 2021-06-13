/*
 * @Author: fjt
 * @Date: 2021-06-09 21:53:39
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-09 21:59:44
 */
import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types/index'
import xhr from './xhr'
import { buildURL } from '../helpers/url'
import { tranformRequest, tranformResponse } from '../helpers/data'
import { processHeaders } from '../helpers/headers'

export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

// 处理config
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  // 放在data处理城json字符串前
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

// 处理URL
function transformURL(config: AxiosRequestConfig): string {
  let { url, params } = config

  return buildURL(url!, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  return tranformRequest(config.data)
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = tranformResponse(res.data)
  return res
}

function transformHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}
