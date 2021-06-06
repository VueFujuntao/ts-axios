/*
 * @Author: fjt
 * @Date: 2021-06-06 21:03:38
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-06 21:14:36
 */
// 缓存方法
const toString = Object.prototype.toString
// 类型保护 val is Date
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}
