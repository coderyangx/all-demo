#! /usr/bin/env node
// 配合package.json里面的 bin：pptest 命令使用，告诉电脑执行环境使用 node，只能写在文件第一行
// 由于没有发布到npm仓库，所以本地运行的时候需要执行 npm link 一下，再执行 pptest
const a = {};

import * as pp from 'puppeteer-core';

/**
 * puppeteer      jest-puppeteer(browser、page、context)
 * https://blog.logrocket.com/end-to-end-testing-react-jest-puppeteer
 * 1、测试页面内容
 * 2、测试页面跳转
 * 3、测试表单提交
 * 4、测试性能
 */

// async function run() {
//   const browser = await pp.launch({
//     headless: false,
//     slowMo: 5000,
//     defaultViewport: {
//       width: 1280,
//       height: 800,
//     },
//     executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
//   });
//   const page = await browser.newPage();
//   // const iPhone = puppeteer.devices['iPhone 6'];
//   // page.emulate(iPhone);
//   // page.emulate({
//   //   viewport: {
//   //     width: 500,
//   //     height: 900,
//   //   },
//   //   userAgent:
//   //     'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
//   //   deviceScaleFactor: 1,
//   //   isMobile: false,
//   //   hasTouch: false,
//   //   isLandscape: false,
//   // });

//   const startTime = performance.now();
//   try {
//     console.log('pptest携带的参数：', process.argv);
//     await page.goto(process.argv[2] || 'http://127.0.0.1:5500/nodejs/web3.html'); // 换成本地运行地址即可
//     // 1、测试页面某个列表渲染完成的 时间
//     // await page.waitForSelector('.list-item');
//     // const listTiming = JSON.parse(
//     //   await page.evaluate(() => JSON.stringify(window.performance.timing))
//     // );
//     // console.log('列表渲染时间：', performance.now - startTime, 'ms');

//     // 2、测试某个链路的完成时间：比如从用户登录之后到进入首页渲染完成的时间
//     const username = await page.waitForSelector('#username');
//     await username.type('admin');
//     const password = await page.$('#password');
//     await password.type('1234567');
//     const loginBtn = await page.$('#login'); // $ 获取页面上已经存在的元素
//     await loginBtn.click();
//     // 登陆之后页面会发生跳转，需要等待跳转完成
//     await page.waitForNavigation({ waitUntil: 'networkidle0' });
//     console.log('流程运行时间：', performance.now() - startTime);
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
//   browser.close(); // 测试完成关闭浏览器

//   // const windowTiming = JSON.parse(
//   //   await page.evaluate(() => JSON.stringify(window.performance.timing))
//   // );
//   // console.log('白屏时间：', windowTiming.domLoading - windowTiming.navigationStart, 'ms');
//   // console.log('网页打开时间：', performance.now() - startTime);
// }

// run();

const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({
    // headless: false, slowMo: 100, // Uncomment to visualize test
  });
  const page = await browser.newPage();

  // Load "https://tt.sankuai.com/ticket/list"
  await page.goto('https://tt.sankuai.com/ticket/list');

  // Resize window to 2282 x 1233
  await page.setViewport({ width: 2282, height: 1233 });

  // Click on <img> .mtd-table-row:nth-child(2) .ticket-sla-icon
  await page.waitForSelector('.mtd-table-row:nth-child(2) .ticket-sla-icon');
  await page.click('.mtd-table-row:nth-child(2) .ticket-sla-icon');

  // Click on <a> "我申请了轻松数的权限，且已经完成了审批，但仍提示我..."
  await page.waitForSelector('[href="/ticket/detail?id=310712280"]');
  await page.click('[href="/ticket/detail?id=310712280"]');

  // Click on <input> [placeholder="\5728\5F53\524D\5217\8868\4E2D\641C\7D22\6807\9898"]
  await page.waitForSelector('[placeholder="\5728\5F53\524D\52178868\4E2D\641C\7D22\68079898"]');
  await page.click('[placeholder="\5728\5F53\524D\52178868\4E2D\641C\7D22\68079898"]');

  // Fill "对对对" on <input> [placeholder="\5728\5F53\524D\5217\8868\4E2D\641C\7D22\6807\9898"]
  await page.waitForSelector(
    '[placeholder="\5728\5F53\524D\52178868\4E2D\641C\7D22\68079898"]:not([disabled])'
  );
  await page.type('[placeholder="\5728\5F53\524D\52178868\4E2D\641C\7D22\68079898"]', '对对对');



  // Press Enter on input
  await page.waitForSelector('[placeholder="\5728\5F53\524D\52178868\4E2D\641C\7D22\68079898"]');
  await Promise.all([page.keyboard.press('Enter'), page.waitForNavigation()]);

  // Hover over <div> "我的待处理   重置 导出数据        未处..."
  await page.waitForSelector('.ticket-list-container');
  await page.hover('.ticket-list-container');

  await browser.close();
})();
