// index.js
var app = getApp();
Page({
  data:{
    tabbar:{}
  },
  login(){
    wx.login({
      success: (res) => {
        if(res.code){
          wx.request({
            url: 'http://localhost:8081/wx/Login',
            header: {
              'Content-Type': 'application/json',
              'Accept': '*/*',
              'Host': 'localhost:8081',
              'Connection': 'keep-alive'
            },
            body: JSON.stringify({
              code:res.code 
           }),
            success(res) {
              console.log(res.data)
            }
          })
        }else{
          console.log("登录失败",res.errMsg);
        }
      },
    })
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
