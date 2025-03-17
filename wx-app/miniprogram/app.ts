// app.ts
App<IAppOption>({
  globalData: {
   //如:可以把很多经常用的的字段设为全局变量,后面的页面可直接调用,
   userInfo: null,
   access_token: '',
   account: '',
   code: '',
   unionid: '',
   sessionKey: '',
   openId: '',
   id: '',
   username: '',
  },
  onLaunch() {
    // 展示本地存储能力
    console.log('小程序启动。。。')
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },
})