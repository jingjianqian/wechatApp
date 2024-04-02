Page({
    onLaunch: function () {
        wx.hideTabBar();
    },
  data: {
    tabs: [
        {
            icon: 'EyeOutline',
            activeIcon: 'EyeFill',
            pagePath: "/pages/index/index",
            text: '精选',
        },
        {
            icon: 'StarOutline',
            activeIcon: 'StarFill',
            pagePath: "/pages/collect/collect",
            text: '收藏',
        },
        {
            icon: 'UserSetOutline',
            activeIcon: 'TeamFill',
            pagePath: "/pages/my/my",
            text: '我的',
        }
        
    ],
    tabIndex: 0
  },
  handleChange(e) {
        const url = this.data.tabs[e.detail].pagePath;
        console.log(url)
        wx.switchTab({
          url: url,
          success:function(data){
          },
          fail:function(data){
          }
        })
    },
  attached() {
  },
  methods: {
  }
})