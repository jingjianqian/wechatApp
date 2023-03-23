Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [
      {
      pagePath: "/pages/index/index",
      iconPath: "static/tabbar/index.png",
      selectedIconPath: "static/tabbar/index-hover.png",
      text: "首页1"
    }, 
    {
      pagePath: "/pages/spider/spider",
      iconPath: "static/tabbar/wode.png",
      selectedIconPath: "static/tabbar/wode-hover.png",
      text: "爬虫2"
    },
    {
      pagePath: "/pages/blog/blog",
      iconPath: "static/tabbar/wode.png",
      selectedIconPath: "static/tabbar/wode-hover.png",
      text: "博客3"
    },
    {
      pagePath: "/pages/my/my",
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
      console.log(e)
      const data = e.currentTarget.dataset
      const url = data.path
      console.log(url)
      wx.switchTab(
        {
          url:url,
          success: res => {
            console.log(res)
          },
          fail:res => {
            console.log(res)
          },
          complete: res => {
            console.log("12312321321312312")
           console.log(this.getPageId)
          },
        }
      )
      this.setData({
        selected: data.index
      })
      console.log(data.index)
    }
  }
})