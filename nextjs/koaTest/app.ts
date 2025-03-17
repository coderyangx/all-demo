declare var require: any;

const Koa = require('koa');
const koaBody = require('koa-body');
const KoaRouter = require('koa-router');

const app = new Koa();
const router = new KoaRouter();

router.get('/user', async (ctx) => {
  const user = {
    username: 'zhangjinlu',
    password: '1234567',
  };
  let html = `
    <div>
      <h1>Username: ${user.username}</h1>
      <h3>Password: ${user.password}</h3>
      <h3>测试测试</h3>
    </div>
  `;
  ctx.body = html;
});
app.use(router.routes());
app.use(router.allowedMethods());

// 洋葱
app.use(async (ctx, next) => {
  console.log('接收到一次请求！');
  console.log('我是中间件1！');
  await next();
});

app.use(async (ctx, next) => {
  console.log('我是中间件2！');
  ctx.response.status = 200;
  ctx.response.body = '<h2>Hello World</h2>';
  // await next();
});

// app.listen(8888, '127.0.0.1', () => {
//   console.log('服务器启动了！');
// });

app.listen(3000);

// logger
// app.use(async (ctx, next) => {
//   await next();
//   const rt = ctx.response.get('X-Response-Time');
//   console.log(`${ctx.method} ${ctx.url} - ${rt}`);
// });

// // x-response-time
// app.use(async (ctx, next) => {
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   ctx.set('X-Response-Time', `${ms}ms`);
// });

// response
