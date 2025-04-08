// index.js 
Page({
  data: {
    bannerList: [],
    loading: false,
    statusBarHeight: 40, //  顶部状态栏高度
    navBarHeight: 85, // 顶部高度
    appList: [{
        id: "wx20250407_001",
        name: "BOSS直聘找工作",
        icon: "/images/banners/BOSS.svg",
        desc: "精准分钟级天气预报，支持全球10万+城市",
        isCollected: false,
        swipeOffset: 0
      },
      {
        id: "wx20250407_002",
        name: "懂车帝",
        icon: "/images/banners/dcd.svg",
        desc: "连接智能手环，实时监测心率/血氧",
        isCollected: true,
        swipeOffset: 0
      },
      {
        id: "wx20250407_003",
        name: "腾讯体育+",
        icon: "/images/banners/01.svg",
        desc: "连接智能手环，实时监测心率/血氧",
        isCollected: true,
        swipeOffset: 0
      },
      {
        id: "wx20250407_004",
        name: "京东购物",
        icon: "/images/banners/jdgw.svg",
        desc: "连接智能手环，实时监测心率/血氧",
        isCollected: true,
        swipeOffset: 0
      },
      {
        id: "wx20250407_005",
        name: "拼多多",
        icon: "/images/banners/pdd.svg",
        desc: "连接智能手环，实时监测心率/血氧",
        isCollected: true,
        swipeOffset: 0
      },
      {
        id: "wx20250407_006",
        name: "顺丰速运+",
        icon: "/images/banners/sfsy.svg",
        desc: "连接智能手环，实时监测心率/血氧",
        isCollected: true,
        swipeOffset: 0
      },
      {
        id: "wx20250407_007",
        name: "微博热搜",
        icon: "/images/banners/xinlang.svg",
        desc: "连接智能手环，实时监测心率/血氧",
        isCollected: true,
        swipeOffset: 0
      },
      {
        id: "wx20250407_008",
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
  handleTapItem(e) {
    console.log(e)
    const {
      detail: {
        item,        // 当前点击的完整数据项 
        index,       // 数据索引 
        position     // 点击位置坐标（新增AR坐标支持）
      }
    } = e 
    // 页面JS文件 
    wx.navigateToMiniProgram({
      appId: item.appId, // 必填 
      // path: 'pages/index/index', // 跳转路径 
      extraData: { // 传递参数 
        from: 'jingjianqian',
        timestamp: new Date().getTime()
      },
      envVersion: 'release', // 版本控制：develop/trial/release 
      success(res) {
        console.log(' 跳转成功', res)
      },
      fail(err) {
        console.error(' 跳转失败', err)
        wx.showToast({
          title: '服务暂不可用',
          icon: 'none'
        })
      }
    })
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
