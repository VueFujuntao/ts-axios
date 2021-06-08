/*
 * @Author: fjt
 * @Date: 2021-06-06 13:26:22
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-08 20:55:43
 */

export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
}

export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}
// Promise<> 范形接口返回
export interface AxiosPromise extends Promise<AxiosResponse> {}
