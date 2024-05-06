// app.js
App({
    onLaunch: function () {
        
    },
    editTabbar: function() {
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

