const WXAPI = require('apifm-wxapi')
const Mock = require("utils/WxMock.js"); 


const CONFIG = require('config.js')
App({
  onLaunch: function() {
    // ---------------检测navbar高度
    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    console.log("小程序胶囊信息",menuButtonObject)
    wx.getAppBaseInfo({
      success: res => {
        let statusBarHeight = res.statusBarHeight,
          navTop = menuButtonObject.top,//胶囊按钮与顶部的距离
          navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight)*2;//导航高度
        this.globalData.navHeight = navHeight;
        this.globalData.navTop = navTop;
        this.globalData.windowHeight = res.windowHeight;
        this.globalData.menuButtonObject = menuButtonObject;
        console.log("navHeight",navHeight);
      },
      fail(err) {
        console.log(err);
      }
    })
  },

  globalData: {
    isConnected: true,
    sdkAppID: CONFIG.sdkAppID,
    apiUserInfoMap: undefined, // 当前登陆用户信息: base/ext/idcard/saleDistributionTeam
  }
})





// 模拟Banner数据（8个圆形按钮）
const bannerData = {
  bannerList: [
    {
      title: '腾讯体育',
      id:'wxf1b97b2df301a1c8',
      icon: 'http://jingjianqian.top/images/banners/01.svg',
    },
    {
      title: 'BOSS直聘',
      id:'wxf1b97b2df301a1c8',
      icon: 'http://jingjianqian.top/images/banners/BOSS.svg',
    },
    {
      title: '懂车帝',
      id:'wxf1b97b2df301a1c8',
      icon: 'http://jingjianqian.top/images/banners/dcd.svg',
    },
    {
      title: '京东购物',
      id:'wxf1b97b2df301a1c8',
      icon: 'http://jingjianqian.top/images/banners/jdgw.svg',
    },
    {
      title: '拼多多',
      id:'wxf1b97b2df301a1c8',
      icon: 'http://jingjianqian.top/images/banners/pdd.svg',
    },
    {
      title: '微博热搜',
      id:'wxf1b97b2df301a1c8',
      icon: 'http://jingjianqian.top/images/banners/xinlang.svg',
    },
    {
      title: '顺丰速运',
      id:'wxf1b97b2df301a1c8',
      icon: 'http://jingjianqian.top/images/banners/sfsy.svg',
    },
    {
      id: '知乎',
      id:'wxf1b97b2df301a1c8',
      icon: 'http://jingjianqian.top/images/banners/zhihu.svg',
    }
  ],
};


Mock.mock('/api/top-apps',  bannerData); 