// pages/test/test.js
// demo-1/index.js
import { getCategory, getGoods, getVIPCategory } from '../../util'

//获取窗口信息
const systemInfo = wx.getWindowInfo()
//共享参数shared
const { shared, Easing } = wx.worklet  

const lerp = function (begin, end, t) {
    'worklet'
    return begin + (end - begin) * t
  }
const clamp = function (cur, lowerBound, upperBound) {
    'worklet'
    if (cur > upperBound) return upperBound
    if (cur < lowerBound) return lowerBound
    return cur
  }

Component({
    //数据
    data: {
        paddingTop: 44,      //距离头部距离
        renderer: 'skyline', //渲染框架
        //头部分类
        categorySet: [{
            page: 0,
            categorys: getCategory()
          }, {
            page: 1,
            categorys: getCategory().reverse()
          }],
      },
    lifetimes:{
        created:function(){//组件被创建时
            this.searchBarWidth = shared(100) //
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
    },
    methods:{
        //滚动更新
        handleScrollUpdate(evt) {
            'worklet'
            const maxDistance = 60
            const scrollTop = clamp(evt.detail.scrollTop, 0, maxDistance)
            const progress = scrollTop / maxDistance
            const EasingFn = Easing.cubicBezier(0.4, 0.0, 0.2, 1.0)
            this.searchBarWidth.value = lerp(100, 70, EasingFn(progress))
            this.navBarOpactiy.value = lerp(1, 0, progress)
          },
        //获取小程序分类
        getWeappsClases(){

        },
        //根据分类查询小程序
        getWeappLists(){

        },
        //收藏小程序
        collectApp(){

        },
        //根据小程序名称搜索
        searchAppsByName(){

        }
    }
})