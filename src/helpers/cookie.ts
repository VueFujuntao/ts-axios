/*
 * @Author: fjt
 * @Date: 2021-06-19 19:41:17
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-20 18:45:22
 */

const cookie = {
  /**
   * @name: 读取cookie
   * @test: test font
   * @msg:
   * @param {string} name
   * @return {string | null}
   */
  read(name: string): string | null {
    const match = document.cookie.match(new RegExp(`(^|;\\s*)(${name})=([^;]*)`))
    return match ? decodeURIComponent(match[3]) : null
  }
}

export default cookie
