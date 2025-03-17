// const http = require('http');
// const mysql = require('mysql');
import http from 'http';


// console.log(http);

// 创建一个http服务器
const server = http.createServer((req, res) => {
  // 获取请求的路径
  const url = req.url;
  // 获取请求的方法
  const method = req.method;
  console.log(url, method);
  if (method === 'GET') {
    // 响应文件内容
    let data = {
      code: 200,
      url: url,
      method: method
    };
    res.end(JSON.stringify(data));
  } else if (method === 'POST') {
    // 设置响应头
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    // 响应文件内容
    res.end('content');
  } else {
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.end('<h1>404 Not Found</h1>');
  }
});
server.listen(3000, () => {
  console.log('服务器启动成功');
});

// const options = {
//   host: 'localhost',
//   // port:"3306", //可选，默认3306
//   user: 'root',
//   password: 'xxx', // 这里改成你自己的数据库连接密码
//   database: 'test_database',
// };
// 创建与数据库进行连接的连接对象
// const connection = mysql.createConnection(options);

// connection.connect((err) => {
//   if (err) {
//     // 数据库连接失败
//     console.log(err);
//   } else {
//     // 数据库连接成功
//     console.log('数据库连接成功');
//   }
// });
