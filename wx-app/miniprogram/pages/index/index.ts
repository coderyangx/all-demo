// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    userInfo: {},
    menuItems: [
      { name: '我的文章' },
      { name: '关于我' },
      { name: '项目展示' },
      { name: '联系我' },
    ],
  },

  onLoad: function () {
    // 获取用户信息
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
        });
      },
      fail: (err) => {
        console.log('获取用户信息失败', err);
      },
    });
  },

  onMenuItemTap: function (e:any) {
    const index = e.currentTarget.dataset.index;
    const menuItem = this.data.menuItems[index];

    // 根据点击的菜单项执行相应的操作
    switch (menuItem.name) {
      case '我的文章':
        wx.navigateTo({
          url: '/pages/articles/articles', // 跳转到文章列表页
        });
        break;
      case '关于我':
        wx.navigateTo({
          url: '/pages/about/about', // 跳转到关于我页面
        });
        break;
      case '项目展示':
        wx.navigateTo({
          url: '/pages/projects/projects', // 跳转到项目展示页
        });
        break;
      case '联系我':
        wx.navigateTo({
          url: '/pages/contact/contact', // 跳转到联系我页面
        });
        break;
      default:
        console.log(`点击了菜单项：${menuItem.name}`);
    }
  },
})

// Component({
//   data: {
//     motto: 'Hello World',
//     userInfo: {
//       avatarUrl: defaultAvatarUrl,
//       nickName: '',
//     },
//     hasUserInfo: false,
//     canIUseGetUserProfile: wx.canIUse('getUserProfile'),
//     canIUseNicknameComp: wx.canIUse('input.type.nickname'),
//   },
//   methods: {
//     // 事件处理函数
//     bindViewTap() {
//       wx.navigateTo({
//         url: '../logs/logs',
//       })
//     },
//     onChooseAvatar(e: any) {
//       const { avatarUrl } = e.detail
//       const { nickName } = this.data.userInfo
//       this.setData({
//         "userInfo.avatarUrl": avatarUrl,
//         hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
//       })
//     },
//     onInputChange(e: any) {
//       const nickName = e.detail.value
//       const { avatarUrl } = this.data.userInfo
//       this.setData({
//         "userInfo.nickName": nickName,
//         hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
//       })
//     },
//     getUserProfile() {
//       // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
//       wx.getUserProfile({
//         desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
//         success: (res) => {
//           console.log(res)
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     },
//   },
// })
