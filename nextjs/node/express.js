import express from 'express';
import path from 'path';

import fs from 'node:fs';
// console.log(fs);

const app = express();

app.use((req, res, next) => {
  console.log('中间件1');
  res.setHeader('Access-Control-Allow-Origin', '*');
  // 允许前端获取哪些头部信息
  res.setHeader('Access-Control-Expose-Headers', 'yangxu');
  next();
});

app.get('/g', (req, res) => {
  const { url, method } = req;
  console.log(url, method);
  // res.setHeader('Content-Type', 'text/html;charset=utf-8');
  // res.send('Hello World!');
  // res.setHeader('Content-Type', 'text/json');
  // 设置缓存过期时间
  res.json({
    code: 200,
    data: {
      url,
      method,
      name: 'MCopilot',
      profession: 'coding tool',
      fs,
    },
  });
});
// 所有请求路径都匹配
// app.get('*', (req, res) => {
//   res.send('all');
// });

app.all('/p', (req, res) => {
  res.setHeader('Cache-Control', 'max-age=3600');
  // 自定义响应头，首字母不区分大小写
  res.setHeader('Yangxu', 66666);
  res.send(`<h4>我是返回的 h1</h4>`);
});

app.post('/p', (req, res) => {
  res.setHeader('Cache-Control', 'max-age=3600');
  // 自定义响应头，首字母不区分大小写
  res.setHeader('Yangxu', 66666);
  res.send(`<h4>我是返回的 h1</h4>`);
});

app.listen(3000, () => {
  console.log('服务器启动成功');
});

// sse: server send event 服务器推送

// Path: node/express.js
