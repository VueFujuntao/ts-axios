/*
 * @Author: fjt
 * @Date: 2021-06-06 21:03:38
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-09 22:51:49
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

// 判断是否为普通对象
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}
// T U 范型 T & U 交叉类型
export function extend<T, U>(to: T, from: U): T & U {
  // for in 可以遍历class原型属性
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}
