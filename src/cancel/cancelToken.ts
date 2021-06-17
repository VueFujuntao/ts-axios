/*
 * @Author: fjt
 * @Date: 2021-06-17 21:20:52
 * @LastEditors: fjt
 * @LastEditTime: 2021-06-17 23:11:44
 */
import { Canceler, CancelExecutor, CancelTokenSource } from '../types'
import Cancel from './Cancel'

interface ResolvePromise {
  (resaon?: Cancel): void
}

export default class CancelToken {
  promise: Promise<Cancel>
  resaon?: Cancel

  constructor(executor: CancelExecutor) {
    let resolvePromise: ResolvePromise

    this.promise = new Promise<Cancel>(resolve => {
      resolvePromise = resolve
    })

    executor(message => {
      if (this.resaon) {
        return
      }
      this.resaon = new Cancel(message)
      resolvePromise(this.resaon)
    })
  }

  throwIfRequested() {
    if (this.resaon) {
      throw this.resaon
    }
  }

  static source(): CancelTokenSource {
    let cancel: Canceler
    const token = new CancelToken(c => {
      cancel = c
    })
    return {
      cancel: cancel!,
      token
    }
  }
}
