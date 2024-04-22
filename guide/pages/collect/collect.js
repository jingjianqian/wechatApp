// pages/collect/collect.js
Page({
    onLaunch: function () {
        // wx.hideTabBar();
    },
    onShow:function() {
        if (typeof this.getTabBar === 'function' ) {
          this.getTabBar((tabBar) => {
            tabBar.setData({
                tabIndex: 1
            })
          })
        }
      },

    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})