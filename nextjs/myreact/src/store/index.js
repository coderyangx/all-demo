// 组合子模块

import React from 'react'

import counterStore from './counter'
import listStore from './list'


// 1.声明一个 rootStore
class RootStore {
  constructor() {
    // 2.对子模块实例化
    // 这样 RootStore 实例化的时候，就包含 CounterStore 和 ListStore 的实例
    this.counterStore = counterStore
    this.listStore = listStore
  }
}

// 3.实例化 RootStore，并通过 react-context 机制完成统一的封装
const rootStore = new RootStore() 

// Provider value={value}
// 查找机制：useContext优先从 Provider value 找，如果找不到，就会找 React.createContext() 里传递过来的参数
const context = React.createContext(rootStore)

// 这里通过 useContext 拿到 rootStore 实例对象，然后返回，业务组件中调用 useStore 即可拿到
const useStore = () => React.useContext(context)

export default useStore