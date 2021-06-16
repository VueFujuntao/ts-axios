/*
 * @Author: fjt
 * @Date: 2021-06-09 21:53:39
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-16 23:16:12
 */
import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types/index'
import xhr from './xhr'
import { buildURL } from '../helpers/url'
import { flattenHeaders } from '../helpers/headers'
import transform from './transform'

export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  console.log(config.headers)

  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

// 处理config
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.data = transform(config.data, config.headers, config.transformRequest)
  config.headers = flattenHeaders(config.headers, config.method!)
}

// 处理URL
function transformURL(config: AxiosRequestConfig): string {
  let { url, params } = config

  return buildURL(url!, params)
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transform(res.data, res.headers, res.config.transformResponse)
  return res
}
