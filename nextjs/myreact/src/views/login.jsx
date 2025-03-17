import React from 'react'
import { useNavigate, Outlet, useRouteError, Form } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()


  const goAbout = () => {
    navigate('/about/?searchParams=100', {
      replace: true  // 跳转时不加历史记录
    })

    navigate('/about/useParams')
  }
  
  return (
    <div>login
      <button onClick={goAbout}>跳转About</button>

      <button onClick={() => {navigate('/login/board')}}>跳转看板</button>
      {/* 耳机路由出口 */}
      <Outlet></Outlet>

    </div>
  )
}

const Board = () => {
  return (
    <div>看板</div>
  )
}
const Article = () => {
  return (
    <div>文章</div>
  )
}
export { Board, Article }