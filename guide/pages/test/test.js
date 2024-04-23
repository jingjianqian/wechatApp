// pages/test/test.js
// demo-1/index.js
//获取窗口信息
const systemInfo = wx.getWindowInfo()
//共享参数
const { shared, Easing } = wx.worklet  

Component({
    //数据
    data: {
        paddingTop: 44,      //距离头部距离
        renderer: 'skyline', //渲染框架
      },
    lifetimes:{
        created:function(){//组件被创建时
            this.searchBarWidth = shared(100)
            this.navBarOpactiy = shared(1)
        },
        attached:function(){ //组件被引用时
            const padding = 10 * 2
            const categoryItemWidth = (systemInfo.windowWidth - padding) / 5
            this.setData({ categoryItemWidth, paddingTop: systemInfo.statusBarHeight, renderer: this.renderer })
      
            this.applyAnimatedStyle('.nav-bar', () => {
              'worklet'
              return {
                opacity: this.navBarOpactiy.value
              }
            })
      
            this.applyAnimatedStyle('.search', () => {
              'worklet'
              return {
                width: `${this.searchBarWidth.value}%`,
              }
            })
      
            this.applyAnimatedStyle('.search-container', () => {
              'worklet'
              return {
                backgroundColor: (this.navBarOpactiy.value > 0 && this.renderer == 'skyline') ? 'transparent' : '#fff'
              }
            })
        },
        detached:function(){

        }
    }
})