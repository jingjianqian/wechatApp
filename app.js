// app.js
App({
  globalData: {
    baseUrl: 'https://zjls.spj.gxls.gov.cn/thirdapi/',
    sessionId: '',
    access_token: '',
    tokenid: '',
    userName: '',
    userData: wx.getStorageSync('userData'),
    openid: '',
    temporary: false,
    systemInfo: null
  }
})
function   onLaunch() {

}
