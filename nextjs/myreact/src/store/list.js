//
import { makeAutoObservable } from 'mobx'

class ListStore {
  // 定义数据
  list = ['react', 'vue', 'angular']
  constructor() {
    // 把数据变成响应式
    makeAutoObservable(this)
  }
  get filterList() {
    return this.list.filter((v) => v > 2)
  }
  // 定义 action 函数
  addList = () => {
    this.list.push('xxxx')
  }
}
// 实例化 store，给 react 使用
const counterStore = new ListStore()

export default counterStore
