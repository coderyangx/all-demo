import React, { useEffect, useRef, useState, useUnmountedRef } from "react";
// import '../App.css'

export default function Home(props) {
  // console.log(props);
  const {msg, getMsg, jsxChildren, getSonMsg} = props
  function clickHandle () {
    getSonMsg('来自子组件的 msg')
  }
  
  const iptRef = useRef()
  const index = useRef(0)
  const [imgUrl, setImgUrl] = useState('')
  
  // input要给初值，否则会报错尝试修改非受控组件为受控组件
  const [value, setValue] = useState('')
  const handleChange = (e) => {
    console.log('input: ', e.target.value);
  }
  setTimeout(() => {
    setValue('定时修改input - value')
  }, 2000);

  // const unmountRef = useUnmountedRef();
  // useEffect(() => {
  //   if(unmountRef.current) {
  //     console.log('组件alive----');
  //   }
  // })


  // URL.createObjectURL(Blob | MediaSource)  比FileReader.readAsDataURL(file)速度快，且是同步
  // 用于浏览器中加载一个文件或创建下载链接   在线生成图片预览
  useEffect(() => {
    const inputElement = document.querySelector('#ipt');
    const handleChange = (e) => {
      console.log(e, e.target.files[0]);
      const file = e.target.files[0];
      const objectURL = URL.createObjectURL(file);
      console.log(objectURL);
      setImgUrl(objectURL);
    };
    inputElement.addEventListener('change', handleChange);
  
    return () => {
      // 在组件卸载时释放资源
      if (imgUrl) {
        URL.revokeObjectURL(imgUrl);
      }
      inputElement.removeEventListener('change', handleChange);
    };
  }, [imgUrl]);

  const txt = '握手呜呜呜呜呜呜呜'
  const blob = new Blob([txt], { type: 'text/plain;charset=utf-8'})
  const txturl = URL.createObjectURL(blob)
  console.log(txturl);
  const a = document.createElement('a')
  a.href = txturl
  a.download = '下载'
  // a.click()
  URL.revokeObjectURL(txturl);

  return (
    <div style={{background: ''}}>
      <h1 className='bgc-pink'>Home</h1>
      <div>{msg}</div>
      <input type="text" value={value} onChange={e => {handleChange(e)}} />
      <input type="file" id="ipt" ref={iptRef} />
      <img src={imgUrl} width={100} alt=""/>
      <button onClick={getMsg}>得到父组件msg</button>
      {jsxChildren}
      <button onClick={() => getSonMsg('来自子组件的 msg')}>传递给父组件msg 1</button>&nbsp;
      <button onClick={clickHandle}>传递给父组件msg 2</button>

    </div>
  )
}
// 函数组件渲染过程
// 1.首次渲染：组件内的代码会执行一次，useState也会执行，初始值只在首次渲染生效
// 2.更新渲染：setCnt会执行，app组件会再次渲染，useState 再次执行，值是修改之后的cnt值，模板会用新值渲染