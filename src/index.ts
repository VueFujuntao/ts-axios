/*
 * @Author: fjt
 * @Date: 2021-06-06 12:56:33
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-06 13:40:24
 */
import { AxiosRequestConfig } from './types/index'
import xhr from './xhr'

function axios(config: AxiosRequestConfig): void {
  xhr(config)
}

export default axios
