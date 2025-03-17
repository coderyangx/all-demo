//
import { makeAutoObservable } from 'mobx'

class CounterStore {
  // 定义数据
  count = 0
  list = [1, 2, 3, 4]
  constructor() {
    // 把数据变成响应式
    makeAutoObservable(this)
  }
  get filterList() {
    return this.list.filter((v) => v > 2)
  }
  // 定义 action 函数
  addCount = () => {
    this.count++
  }
}
// 实例化 store，给 react 使用
const counterStore = new CounterStore()

export default counterStore
