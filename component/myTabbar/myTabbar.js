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
        "backgroundColor": "red",
        "color": "white",
        "selectedColor": "green",
        "list": [
          {
            "selectedIconPath": "../../pages/static/tabbar/index-hover.png",
            "iconPath": "../../pages/static/tabbar/index.png",
            "pagePath": "/pages/index/index",
            "text": "首页1"
          },
          {
            "selectedIconPath": "static/tabbar/fuwu-hover.png",
            "iconPath": "../../pages/static/tabbar/faxian-hover.pngg",
            "pagePath": "/pages/spider/spider",
            "text": "爬虫"
          },
          {
            "selectedIconPath": "../../pages/static/tabbar/faxian-hover.png",
            "iconPath": "../../pages/static/tabbar/faxian.png",
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
