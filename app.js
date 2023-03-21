// app.js
App({
  globalData: {
    baseUrl: 'https://zjls.spj.gxls.gov.cn/thirdapi/',
    sessionId: '',
    access_token: '',
    tokenid: '',
    userName: '',
    userData: wx.getStorageSync('userData'),
    openid: '',
    temporary: false,
    systemInfo: null,//客户端设备信息
    tabBar: {
      "backgroundColor": "#ffffff",
      "color": "#999999",
      "selectedColor": "#E73735",
      "list": [
        {
          "selectedIconPath": "/static/tabbar/index-hover.png",
          "iconPath": "/static/tabbar/index.png",
          "pagePath": "/pages/page/page",
          "text": "首页"
        },
        {
          "selectedIconPath": "/static/tabbar/fuwu-hover.png",
          "iconPath": "/static/tabbar/fuwu.png",
          "pagePath": "/pages/service/service",
          "text": "爬虫"
        },
        {
          "selectedIconPath": "/static/tabbar/faxian-hover.png",
          "iconPath": "/static/tabbar/faxian.png",
          "pagePath": "/pages/find/find",
          "text": "博客"
        },
        {
          "selectedIconPath": "/static/tabbar/wode-hover.png",
          "iconPath": "/static/tabbar/wode.png",
          "pagePath": "/pages/my/my",
          "text": "我的"
        }
      ]
    },
})
