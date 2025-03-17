// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// SSE 接口
app.get('/api/analyze-stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  const { text } = req.query;

  if (!text) {
    res.write(`data: ${JSON.stringify({ error: '请输入文本' })}\n\n`);
    return res.end();
  }

  // 模拟情感分析并实时推送结果
  const intervalId = setInterval(() => {
    // 非常简单的“情感分析”模拟：
    const sentiment = Math.random() > 0.5 ? 'Positive' : 'Negative';
    // const data = {
    //   sentiment: `<span class=${sentiment === "Positive" ? "positive": "negative"}">${sentiment} \n</span>${new Date().toLocaleTimeString()}`,
    // };
    const randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26)); // 小写字母 a-z
    const data = {
      // sentiment: `<span class=${
      //   sentiment === 'Positive' ? 'positive' : 'negative'
      // }">${sentiment}</span>`,
      sentiment: randomLetter,
      time: new Date().toLocaleTimeString(),
    };

    res.write(`data: ${JSON.stringify(data)}\n\n`);
  }, 100); // 每隔 1 秒推送一次模拟结果

  // 客户端断开连接时清理定时器
  req.on('close', () => {
    clearInterval(intervalId);
    console.log('Client disconnected from SSE');
  });
});

app.listen(port, () => {
  console.log(`后端服务运行在 http://localhost:${port}`);
});
