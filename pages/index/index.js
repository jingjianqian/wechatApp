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
            method:'POST',
            url: 'http://192.168.1.101:8081/wx/Login',
            header: {
              'content-type': 'application/json',
              'Accept': '*/*',
              'Host': '192.168.1.101:8081',
              'Connection': 'keep-alive'
            },
            data: {
              code:res.code 
            },
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
        console.log("消息订阅,success!")
        console.log(res)
      },
      fail(res){
        console.log("fail!")
        console.log(res)
      }
    })
  },
  connWifi(event){
    wx.startWifi({
      success (res) {
        console.log(res)
        console.log('初始化wifi模块成功')
        if(res.errMsg == 'startWifi:ok'){
          wx.getWifiList({
            success: function (res) {
              console.log('获取wifi列表成功')
              console.log(res)
              wx.onGetWifiList(function(res) {
                console.log('解析wifi列表')
                console.log(res)
                wifiList = []
                let tmpList = []
                if (res && res.wifiList) {
                  res.wifiList.map(item => {
                    if (tmpList.indexOf(item.SSID) == -1) {
                      tmpList.push(item.SSID)
                      wifiList.push(item)
                    }
                  })
                console.log(wifiList)
                console.log('我要连接WIFI了')
                wx.connectWifi({
                  SSID: 'Primeton',
                  password: 'Primeton@Gxlq2023',
                  success (res) {
                    console.log('wifi连接成功呢')
                    console.log(res.errMsg)
                  },
                  fail(res){
                    console.log('oh,shit,连不上呢')
                    console.log(res.errMsg)
                  }
                })
                }
              });
            },
            fail: function (res) {
              console.log(res);
            }
          })
        }
      }
    })
  }
  ,showWifiList(event){
    wx.getWifiList({
      success(res){
        console.log(res)
      }
    })
  }
})
