// pages/articles.ts
Page({
  data: {
    articles: [
      {
        id: 1,
        title: '我的第一篇文章',
        date: '2023-10-26',
        summary: '这是我的第一篇文章的摘要...',
        cover: 'https://example.com/article1-cover.jpg',
      },
      {
        id: 2,
        title: '关于微信小程序开发的技巧',
        date: '2023-10-25',
        summary: '分享一些微信小程序开发的实用技巧...',
        cover: 'https://example.com/article2-cover.jpg',
      },
      // ... 更多文章
    ],
  },

  onArticleTap: function (e: any) {
    const articleId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/article-detail/article-detail?id=${articleId}`,
    });
  },
});