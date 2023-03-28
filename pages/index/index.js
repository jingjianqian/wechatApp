// index.js
var app = getApp();
Page({
  data:{
    tabbar:{}
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  },
  subscribeMessage(event){//订阅消息
    const tempid  = event.currentTarget.dataset.tempids;
    wx.requestSubscribeMessage({
      tmplIds: [tempid],
      success(res){
        console.log("success!")
        console.log(res)
      },
      fail(res){
        console.log("fail!")
        console.log(res)
      }
    })
  }
})
