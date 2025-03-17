import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Guide from './com/guide'
import { useEffect, useState } from 'react'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />}></Route> */}
        <Route index element={<Iframe />} />
        <Route path="/" element={<Guide />} />
      </Routes>
    </BrowserRouter>
  )
}

const Iframe = () => {
  // useEffect(() => {
  //   fetch('/app2/render.js')
  //     .then((res) => res.text())
  //     .then((script) => {
  //       const render = eval(script)
  //       console.log(render);
  //       render()
  //     })
  // })
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const handleIframeLoad = () => {
    setIframeLoaded(true);
  }

  const sendMessageToApp2 = (message) => {
    // 需保证 iframe 加载完毕 
    if (!iframeLoaded) {
      return;
    }
    const iframe = document.querySelector('iframe');
    iframe.contentWindow.postMessage(message, '*');
  }

  const receiveMessageFromApp2 = (e) => {
    // 处理消息
    console.log('来自iframe的data:', e, e.data);
  }
  window.addEventListener('message', receiveMessageFromApp2);
  useEffect(() => {
    sendMessageToApp2({name: 'app1', toApp2: 'from app1 的信息'})
    return () => {
      window.removeEventListener('message', receiveMessageFromApp2);
    }
  }, [])
  
  return (
    <div>
      <h1>iframe</h1>
      <iframe width={500} height={400} title="app2"
        onLoad={handleIframeLoad}
        src="http://localhost:3001"></iframe>
    </div>
  )
}
export default App
