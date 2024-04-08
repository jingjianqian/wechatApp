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
            'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
            'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
            'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
            'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
        ],
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
            {
                title: '其他',
                subTitle: '好玩有趣的游戏小程序',
                content: '上号啦',
            }
        ],
    }
})
