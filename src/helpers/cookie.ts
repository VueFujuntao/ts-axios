/*
 * @Author: fjt
 * @Date: 2021-06-19 19:41:17
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-19 20:24:14
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
    console.log(document.cookie)
    // const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
    const match = document.cookie.match(new RegExp(`(^|;\\s*)(${name})=([^;]*)`))
    console.log(match)
    // document.cookie.match(new RegExp('(^|;\\s*)(XSRF-TOKEN-D)=([^;]*)'))
    return match ? decodeURIComponent(match[3]) : null
  }
}

export default cookie
