// index.js 
Page({
  data: {
    bannerList: [],
    loading: false,
    statusBarHeight: 40, //  顶部状态栏高度
    navBarHeight: 85, // 顶部高度
    appList: [
      {
        id: "wx20250407_001",
        name: "智能天气助手",
        icon: "/images/banners/BOSS.svg", 
        desc: "精准分钟级天气预报，支持全球10万+城市",
        isCollected: false,
        swipeOffset: 0 
      },
      {
        id: "wx20250407_002",
        name: "健康管理Pro",
        icon: "/images/banners/dcd.svg", 
        desc: "连接智能手环，实时监测心率/血氧",
        isCollected: true,
        swipeOffset: 0 
      },
      {
        id: "wx20250407_002",
        name: "健康管理Pro",
        icon: "/images/banners/dcd.svg", 
        desc: "连接智能手环，实时监测心率/血氧",
        isCollected: true,
        swipeOffset: 0 
      },
      {
        id: "wx20250407_002",
        name: "健康管理Pro",
        icon: "/images/banners/dcd.svg", 
        desc: "连接智能手环，实时监测心率/血氧",
        isCollected: true,
        swipeOffset: 0 
      },
      {
        id: "wx20250407_002",
        name: "健康管理Pro",
        icon: "/images/banners/dcd.svg", 
        desc: "连接智能手环，实时监测心率/血氧",
        isCollected: true,
        swipeOffset: 0 
      },
      {
        id: "wx20250407_002",
        name: "健康管理Pro",
        icon: "/images/banners/dcd.svg", 
        desc: "连接智能手环，实时监测心率/血氧",
        isCollected: true,
        swipeOffset: 0 
      },
      {
        id: "wx20250407_002",
        name: "健康管理Pro",
        icon: "/images/banners/dcd.svg", 
        desc: "连接智能手环，实时监测心率/血氧",
        isCollected: true,
        swipeOffset: 0 
      },
      {
        id: "wx20250407_002",
        name: "健康管理Pro",
        icon: "/images/banners/dcd.svg", 
        desc: "连接智能手环，实时监测心率/血氧",
        isCollected: true,
        swipeOffset: 0 
      },
      {
        id: "wx20250407_002",
        name: "健康管理Pro",
        icon: "/images/banners/dcd.svg", 
        desc: "连接智能手环，实时监测心率/血氧",
        isCollected: true,
        swipeOffset: 0 
      },
      {
        id: "wx20250407_002",
        name: "健康管理Pro",
        icon: "/images/banners/dcd.svg", 
        desc: "连接智能手环，实时监测心率/血氧",
        isCollected: true,
        swipeOffset: 0 
      },
      {
        id: "wx20250407_002",
        name: "健康管理Pro",
        icon: "/images/banners/dcd.svg", 
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
    console.log("fetchBannerData")
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
  handleTapItem(item) {
    wx.showToast({
      title: '点击',
    });
  },
  //自动头部高度
  initNavBarHeight() {
    // 在app.js 或页面onLoad中执行 
    const systemInfo = wx.getSystemInfoSync();
    const statusBarHeight = systemInfo.statusBarHeight; // 状态栏高度（单位px）
    this.setData({ statusBarHeight: statusBarHeight })
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect(); // 胶囊按钮位置 
    const navBarHeight = menuButtonInfo.height + (menuButtonInfo.top - statusBarHeight) * 2; // 导航栏高度 
    this.setData({ navBarHeight: 2 * navBarHeight })
  },
// temp


  // 滑动事件处理 
  handleSwipe(e) {
    const index = e.currentTarget.dataset.index  
    const newX = Math.min(0,  Math.max(-120,  e.detail.x)) 
    
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
    const id = e.currentTarget.dataset.id  
    this.setData({ 
      appList: this.data.appList.map(item  => {
        if (item.id  === id) {
          wx.vibrateShort({  type: 'light' })
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