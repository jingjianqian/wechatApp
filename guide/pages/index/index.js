// index.js
Page({
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
        current:0,
        items2: [
            {
                title: '微博热搜',
                icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
            },
            {
                title: '标题文字',
                icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*L8FjQ7lSdq4AAAAAAAAAAAAAARQnAQ',
            },
        ],
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
            },
        ],
    }
})
