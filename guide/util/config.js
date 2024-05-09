const env = wx.getAccountInfoSync().miniProgram.envVersion


const baseApi = {
  // 开发版 
  develop: "http://192.168.0.111:48080/",
  // 体验版
  trial: "https://jingjianqian.com",
  // 正式版
  release: "https://jingjianqian.top"
};
const api = baseApi[env]

export default api;

