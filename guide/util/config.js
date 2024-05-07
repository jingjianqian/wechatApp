const env = wx.getAccountInfoSync().miniProgram.envVersion

console.log(env)

const baseApi = {
  // 开发版 
  develop: "http://localhost",
  // 体验版
  trial: "https://jingjianqian.com",
  // 正式版
  release: "https://jingjianqian.top"
};
const api = baseApi[env]
console.log(api)
export default api;

