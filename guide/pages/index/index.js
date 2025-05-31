// index.js 
Page({
  data: {
    bannerList: [],
    loading: false,
    statusBarHeight: 40, //  顶部状态栏高度
    navBarHeight: 85, // 顶部高度
    appList: [{
        appid: "wxf1b97b2df301a1c8",
        name: "BOSS直聘找工作",
        icon: "/images/banners/BOSS.svg",
        desc: "精准分钟级天气预报，支持全球10万+城市",
        isCollected: false,
        swipeOffset: 0
      },
      {
        appid: "wxf1b97b2df301a1c8",
        name: "懂车帝",
        icon: "/images/banners/dcd.svg",
        desc: "连接智能手环，实时监测心率/血氧",
        isCollected: true,
        swipeOffset: 0
      },
      {
        appid: "wxf1b97b2df301a1c8",
        name: "腾讯体育+",
        icon: "/images/banners/01.svg",
        desc: "连接智能手环，实时监测心率/血氧",
        isCollected: true,
        swipeOffset: 0
      },
      {
        appid: "wxf1b97b2df301a1c8",
        name: "京东购物",
        icon: "/images/banners/jdgw.svg",
        desc: "连接智能手环，实时监测心率/血氧",
        isCollected: true,
        swipeOffset: 0
      },
      {
        appid: "wxf1b97b2df301a1c8",
        name: "拼多多",
        icon: "/images/banners/pdd.svg",
        desc: "连接智能手环，实时监测心率/血氧",
        isCollected: true,
        swipeOffset: 0
      },
      {
        appid: "wxf1b97b2df301a1c8",
        name: "顺丰速运+",
        icon: "/images/banners/sfsy.svg",
        desc: "连接智能手环，实时监测心率/血氧",
        isCollected: true,
        swipeOffset: 0
      },
      {
        appid: "wxf1b97b2df301a1c8",
        name: "微博热搜",
        icon: "/images/banners/xinlang.svg",
        desc: "连接智能手环，实时监测心率/血氧",
        isCollected: true,
        swipeOffset: 0
      },
      {
        appid: "wxf1b97b2df301a1c8",
        name: "知乎+",
        icon: "/images/banners/zhihu.svg",
        desc: "连接智能手环，实时监测心率/血氧",
        isCollected: true,
        swipeOffset: 0
      }
    ]
  },
  onLoad() {
    this.initNavBarHeight()
    this.fetchBannerData();
  },
  // 获取数据
  fetchBannerData() {
    // console.log("fetchBannerData")
    const _this = this;
    wx.request({
      url: '/api/top-apps',
      success(res) {
        _this.setData({
          bannerList: res.bannerList
        });
      }
    });
  },
  //处理点击
  handleTapItem(_item) {
    // console.log(item)
    // console.log(_item.currentTarget.dataset.item)
    const e = _item.currentTarget.dataset.item;
    // console.log(e.appid)
    wx.navigateToMiniProgram({
      appId: e.appid,
      envVersion: 'release',
      success(res) {
        //TODO 
        console.log("打开成功");
        console.log(res.errMsg)
      },
      fail(res){
         //TODO 
        console.log("打开失败")
        console.log(res.errMsg)
      }
    })
},
test(_item){
  console.log(_item.currentTarget.dataset.item)
  const e = _item.currentTarget.dataset.item;
},
  //自动头部高度
  initNavBarHeight() {
    // 在app.js 或页面onLoad中执行 
    const systemInfo = wx.getSystemInfoSync();
    const statusBarHeight = systemInfo.statusBarHeight; // 状态栏高度（单位px）
    this.setData({
      statusBarHeight: statusBarHeight
    })
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect(); // 胶囊按钮位置 
    const navBarHeight = menuButtonInfo.height + (menuButtonInfo.top - statusBarHeight) * 3; // 导航栏高度 
    this.setData({
      navBarHeight: 3 * navBarHeight
    })
  },
  // temp


  // 滑动事件处理 
  handleSwipe(e) {
    const index = e.currentTarget.dataset.index
    const newX = Math.min(0, Math.max(-120, e.detail.x))

    this.setData({
      [`appList[${index}].swipeOffset`]: newX
    })
  },

  // 滑动结束处理 
  handleSwipeEnd(e) {
    const index = e.currentTarget.dataset.index
    const currentX = this.data.appList[index].swipeOffset
    const targetX = currentX < -60 ? -120 : 0

    this.setData({
      [`appList[${index}].swipeOffset`]: targetX
    })
  },

  // 收藏/取消收藏 
  toggleCollect(e) {
    wx.showToast({
      title: '开发中!',
    })
    const id = e.currentTarget.dataset.id
    this.setData({
      appList: this.data.appList.map(item => {
        if (item.id === id) {
          wx.vibrateShort({
            type: 'light'
          })
          return {
            ...item,
            isCollected: !item.isCollected,
            swipeOffset: 0 // 操作后复位 
          }
        }
        return item
      })
    })
  }
});
