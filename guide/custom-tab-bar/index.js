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
            text: '首页',
        },
        {
            icon: 'StarOutline',
            activeIcon: 'StarFill',
            pagePath: "/pages/collect/collect",
            text: '收藏',
        }
    ],

    
    tabIndex: 0
  },
  handleChange(e) {
        
        const url = this.data.tabs[e.detail].pagePath;
        const _this = this
        wx.switchTab({
          url: url,
          success:function(data){
            console.log(data)
            console.log(12313)
            _this.setData({
                tabIndex: e.detail
            })
            console.log(_this.data.tabIndex)
          },
          fail:function(data){
            console.log(data)
          }
        })

       

    },



  attached() {
  },
  methods: {

  }
})