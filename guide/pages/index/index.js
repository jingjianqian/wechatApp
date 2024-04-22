// index.js
Page({
    onShow:function() { //
        if (typeof this.getTabBar === 'function' ) {
          this.getTabBar((tabBar) => {
            tabBar.setData({
                tabIndex: 0
            })
          })
        }
      },
    onLaunch: function () {
        wx.hideTabBar();

    },
    onLoad() {
      

    },
 
    handleTapItem(item) {
        wx.navigateToMiniProgram({
            appId: 'wxf1b97b2df301a1c8'
          })
    },
    data:{
        sizes: ['x-small', 'small', 'medium', 'large'],
        images: [
            '/asset/images/appsIcons/weibo.png',
            '/asset/images/appsIcons/BOSS.png',
            '/asset/images/appsIcons/tencentSport.png',
            '/asset/images/appsIcons/wechatRead.png',
            '/asset/images/appsIcons/scan.png'
        ],
        current:0,
        items: [
            {
                title: '全部',
                subTitle: '全部小程序',
                content: '已摘录的所有小程序',
            },
            {
                title: '工具',
                subTitle: '好用的工具小程序',
                badge: true,
                content: '推荐小程序',
            },
            {
                title: '游戏',
                subTitle: '好玩有趣的游戏小程序',
                content: '上号啦',
            },
            {
                title: '官方',
                subTitle: '好玩有趣的游戏小程序',
                content: '上号啦',
            },
            {
                title: '其他',
                subTitle: '好玩有趣的游戏小程序',
                content: '上号啦',
            }
        ],
    }
})
