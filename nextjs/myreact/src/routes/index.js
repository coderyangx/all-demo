// 导入路由管理工具
// import { RouteConfig } from 'react-router-dom'
import { useRoutes } from 'react-router-dom' // 替代 RouteConfig

// 导入路由组件
import Home from '../views/home.jsx'
import About from '../views/about.jsx'

import Tailwind from '../views/tailwind'

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/tailwind',
    element: <Tailwind />,
  },
]

export default function MRouter() {
  return useRoutes(routes)
}
