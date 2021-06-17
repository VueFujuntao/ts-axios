/*
 * @Author: fjt
 * @Date: 2021-06-17 22:54:36
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-17 22:56:36
 */
export default class Cancel {
  message?: string

  constructor(message?: string) {
    this.message = message
  }
}

export function isCancel(value: any): boolean {
  return value instanceof Cancel
}
