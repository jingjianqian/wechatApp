const WXAPI = require('apifm-wxapi')
const Mock = require("utils/WxMock.js"); 


const CONFIG = require('config.js')
App({
  onLaunch: function() {
   
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