Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [
      {
      pagePath: "/pages/index/index.wxml",
      iconPath: "static/tabbar/index.png",
      selectedIconPath: "static/tabbar/index-hover.png",
      text: "首页1"
    }, 
    {
      pagePath: "/pages/spider/spider.wxml",
      iconPath: "static/tabbar/wode.png",
      selectedIconPath: "static/tabbar/wode-hover.png",
      text: "爬虫2"
    },
    {
      pagePath: "/pages/blog/blog.wxml",
      iconPath: "static/tabbar/wode.png",
      selectedIconPath: "static/tabbar/wode-hover.png",
      text: "博客3"
    },
    {
      pagePath: "/pages/my/my.wxml",
      iconPath: "static/tabbar/wode.png",
      selectedIconPath: "static/tabbar/wode-hover.png",
      text: "我的4"
    }
  ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})