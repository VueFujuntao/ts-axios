/*
 * @Author: fjt
 * @Date: 2021-06-06 12:56:33
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-06 22:05:58
 */
import { AxiosRequestConfig } from './types/index'
import xhr from './xhr'
import { buildURL } from './helpers/url'

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

// 处理config
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
}

// 处理URL
function transformURL(config: AxiosRequestConfig): string {
  let { url, params } = config

  return buildURL(url, params)
}

export default axios
