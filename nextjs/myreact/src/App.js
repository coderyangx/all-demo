import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';

import './App.css';

import MRouter from './routes'; // 导入路由
import Home from './views/home';
import About from './views/about';
import Login, { Article, Board } from './views/login';

import Tailwind from './views/tailwind/index';

// 1.导入 counterStore
import counterStore from './store/counter';
// 2.导入中间件，连接 react 和 mobx
import { observer } from 'mobx-react-lite';
// 3.包裹 App 组件

// 使用统一的 rootStore
import useStore from './store';

const Context = createContext();

function App() {
  const store = useStore();
  console.log('全局rootStore：', store);

  const [state, setState] = useState('传递给Son的信息');
  const [count, setCount] = useState(999);
  const refSon = useRef(); // 拿到class组件实例   函数组件没有实例
  const msg = '来自App的msg';

  const getMsg = () => {
    console.log('来自父组件msg');
  };
  // 子传父
  const getSonMsg = (sonMsg) => {
    console.log(sonMsg);
    setState(sonMsg);
  };

  // 发起请求
  useEffect(() => {
    // 打印组件实例 refSon
    console.log(refSon.current);

    const request = async () => {
      const tmp = (await fetch('http://geek.itheima.net/v1_0/channels')).json();
      const res = (await tmp).data;
      console.log(res);
    };
    request();
  }, []);

  return (
    // 使用非 hash 路由模式
    // <MRouter />    router/index.js
    // <BrowserRouter>
    //   <MRouter />
    // </BrowserRouter>

    <BrowserRouter>
      {/* 指定跳转的组件以及对应地址 Link 最终渲染出来的就是 a 标签 */}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/'>
        <button>首页</button>
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to='/about'>
        <button>关于</button>
      </Link>
      &nbsp;&nbsp;
      <Link to='/tailwind'>
        <button>Tailwind</button>
      </Link>
      {/* 路由出口，对应的组件在这里渲染 */}
      <Routes>
        {/* 完成路由匹配：指定路径和组件的映射关系 path-element */}
        <Route path='/' element={<Home msg={'App给Home组件的msg'} />}></Route>
        <Route path='/about/:id?' element={<About />}></Route>

        {/* tailwindcss */}
        <Route
          path='/tailwind'
          element={
            <Tailwind>
              <div>children1111</div>
              <div>children2222</div>
            </Tailwind>
          }
        />

        <Route path='/login' element={<Login />}>
          {/* 定义二级路由嵌套 index代表默认显示 */}
          <Route index element={<Board />}></Route>
          <Route path='article' element={<Article />}></Route>
        </Route>
        {/* 404页 */}
        <Route path='*' element={<div>404 Not-Found</div>}></Route>
      </Routes>
      <hr style={{ marginBottom: '500px' }}></hr>
      {/* // createContext 适合祖父孙组件的嵌套 获取数据 */}
      <Context.Provider value={[count, state]}>
        <div className='App'>
          {/* mobx 使用 */}
          <div style={{ background: 'pink' }}>
            mobx 使用：{counterStore.count}
            --<button onClick={counterStore.addCount}>count++</button>
            {counterStore.list.join('-')}******筛选大于2的：
            {counterStore.filterList.join('-')}
            {/* <button onClick={ counterStore.list }>修改list</button> */}
          </div>
          {/* 传递 JSX 就相当于 Vue 的插槽 */}
          <Home
            msg={msg}
            getMsg={getMsg}
            jsxChildren={<div>传递JSX</div>}
            getSonMsg={getSonMsg}
          />
          {/* 兄弟通信，借助同一个父组件实现  函数组件没有实例 */}
          <Son toSon={state} cnt={100} />
          <ClassSon toSon={state} cnt={100} ref={refSon} />

          <Item>
            <i>children1111</i>
            <div>children2222</div>
          </Item>
        </div>
      </Context.Provider>
    </BrowserRouter>
  );
}

const Son = (props) => {
  // 子孙组件使用父亲传过来的 context，并且数据是响应式
  const context = useContext(Context);
  const [cnt, setCnt] = useState(() => {
    // 这里体现该值经过一定的计算得到，并不给定 初始值
    return props.cnt;
  });

  return (
    <div style={{ background: 'pink' }}>
      <h1>Son 组件</h1>
      {props.toSon} <br></br>
      值：{cnt}
      <button onClick={() => setCnt(cnt + 100)}> 修改count</button>
      <br></br>
      <h3>
        来自父组件的context： {console.log(context)} {context}
      </h3>
    </div>
  );
};

// 组件里面传东西就相当于 vue 的插槽： <Item> <Son /> </Item>
const Item = ({ children }) => {
  return (
    <div style={{ background: 'skyblue' }}>
      <h1>Item 组件</h1>
      {children}
    </div>
  );
};

class ClassSon extends React.Component {
  state = {
    name: '类组件son的state',
  };
  render() {
    return <div>我是类组件Son</div>;
  }
}
export default observer(App);
