// app.js
App({
    onLaunch: function () {
        wx.hideTabBar();
    },
    editTabbar: function() {
        let tabbar = this.globalData.tabBar;
        let currentPages = getCurrentPages();
        let _this = currentPages[currentPages.length - 1];
        let pagePath = _this.route;
        (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
        for (let i in tabbar.list) {
          tabbar.list[i].selected = false;
          (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
        }
        _this.setData({
          tabbar: tabbar
        });
      },
    globalData: {
        userInfo: null,
        tabBar: {
          "backgroundColor": "#ffffff",
          "color": "#979795",
          "selectedColor": "#1c1c1b",
          "list": [
            {
                "pagePath": "pages/index/index",
                "iconPath": "asset/images/tabBar/index.png",
                "selectedIconPath": "asset/images/tabBar/index.png",
                "text": "精选"
            },
            {
                "pagePath": "pages/collect/collect",
                "iconPath": "asset/images/tabBar/collect.png",
                "selectedIconPath": "asset/images/tabBar/collect.png",
                "text": "收藏"
            }
          ]
         }
      }
})

