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
      name: '腾讯体育',
      appid:'wxf1b97b2df301a1c8',
      icon: 'http://jingjianqian.top/images/banners/01.svg',
      desc:''
    },
    {
      name: 'BOSS直聘',
      appid:'wxf1b97b2df301a1c8',
      icon: 'http://jingjianqian.top/images/banners/BOSS.svg',
    },
    {
      name: '懂车帝',
      appid:'wxf1b97b2df301a1c8',
      icon: 'http://jingjianqian.top/images/banners/dcd.svg',
    },
    {
      name: '京东购物',
      appid:'wxf1b97b2df301a1c8',
      icon: 'http://jingjianqian.top/images/banners/jdgw.svg',
    },
    {
      name: '拼多多',
      appid:'wxf1b97b2df301a1c8',
      icon: 'http://jingjianqian.top/images/banners/pdd.svg',
    },
    {
      name: '微博热搜',
      appid:'wxf1b97b2df301a1c8',
      icon: 'http://jingjianqian.top/images/banners/xinlang.svg',
    },
    {
      name: '顺丰速运',
      appid:'wxf1b97b2df301a1c8',
      icon: 'http://jingjianqian.top/images/banners/sfsy.svg',
    },
    {
      name: '知乎+',
      appid:'wxf1b97b2df301a1c8',
      icon: 'http://jingjianqian.top/images/banners/zhihu.svg',
    }
  ],
};


Mock.mock('/api/top-apps',  bannerData); 