// tabBarComponent/tabBar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbar: {
      type: Object,
      value: {
        "backgroundColor": "#ffffff",
        "color": "#999999",
        "selectedColor": "#E73735",
        "list": [
          {
            "selectedIconPath": "static/tabbar/index-hover.png",
            "iconPath": "static/tabbar/index.png",
            "pagePath": "/pages/index/index",
            "text": "首页"
          },
          {
            "selectedIconPath": "static/tabbar/fuwu-hover.png",
            "iconPath": "static/tabbar/fuwu.png",
            "pagePath": "/pages/spider/spider",
            "text": "爬虫"
          },
          {
            "selectedIconPath": "static/tabbar/faxian-hover.png",
            "iconPath": "static/tabbar/faxian.png",
            "pagePath": "/pages/blog/blog",
            "text": "博客"
          },
          {
            "selectedIconPath": "static/tabbar/wode-hover.png",
            "iconPath": "static/tabbar/wode.png",
            "pagePath": "/pages/my/my",
            "text": "我的"
          }
        ]
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
