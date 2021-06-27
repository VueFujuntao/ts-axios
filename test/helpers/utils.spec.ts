/*
 * @Author: fjt
 * @Date: 2021-06-27 10:02:44
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-27 10:28:49
 */
import {
  extend,
  isDate,
  isFormData,
  isPlainObject,
  isURLSearchParams
} from '../../src/helpers/utils'

describe('helpers:utils', () => {
  describe('isXX', () => {
    test('should validate Date', () => {
      expect(isDate(new Date())).toBeTruthy()
      expect(isDate(Date.now())).toBeFalsy()
    })

    test('should validate PlainObject', () => {
      expect(isPlainObject({})).toBeTruthy()
      expect(isPlainObject(new Date())).toBeFalsy()
    })

    test('should validate FormData', () => {
      expect(isFormData(new FormData())).toBeTruthy()
      expect(isFormData({})).toBeFalsy()
    })

    test('should validate FormData', () => {
      expect(isURLSearchParams(new URLSearchParams())).toBeTruthy()
      expect(isURLSearchParams('foo=1&bar=2')).toBeFalsy()
    })
  })

  describe('extend', () => {
    test('should be mutable', () => {
      const a = Object.create(null)
      const b = { foo: 123 }
      extend(a, b)

      expect(a.foo).toBe(123)
    })
  })
})
