// pages/test/test.js
// demo-1/index.js
import { getCategory, getGoods,getVIPCategory} from '../../util'
import api from '../../util/config'

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
        bannerApps:[],
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
          vipCategorys: getVIPCategory(),
          intoView: '',
          selected: 0,
          goods: getGoods(30),
      },
    lifetimes:{
        created:function(){//组件被创建时
            console.log('test component created')
            this.getBannerApps(this);
            this.getWeappsClases(this);
            this.searchBarWidth = shared(100) //
            this.navBarOpactiy = shared(1)
        },
        attached:function(){ //组件被引用时
            console.log('test component attached')
            this.pageInit();
        },
        ready:function(){
            console.log('test component ready')
        },
        moved:function(){
            console.log('test component moved')
        },
        detached:function(){
            console.log('test component detached')
        },
        error:function(){
            console.log('test component error')
        }
    },
    methods:{
        //滚动更新
        handleScrollUpdate(evt) {
            'worklet'
            console.log('handleScrollUpdate')
            const maxDistance = 60
            const scrollTop = clamp(evt.detail.scrollTop, 0, maxDistance)
            console.log(scrollTop)
            const progress = scrollTop / maxDistance
            const EasingFn = Easing.cubicBezier(0.4, 0.0, 0.2, 1.0)
            this.searchBarWidth.value = lerp(100, 70, EasingFn(progress))
            this.navBarOpactiy.value = lerp(1, 0, progress)
           
          },
        chooseVipCategory(evt) {
            const id = evt.currentTarget.dataset.id
            this.setData({
              intoView: `vip-category-${id}`,
              selected: parseInt(id, 10)
            })
          },
        switchToWeapp(event){
            wx.navigateToMiniProgram({
                appId: event.currentTarget.id,
                extraData: {
                  foo: 'bar'
                },
                envVersion: 'release',
                success(res) {
                //   console.log(res)
                }
              })
        },
        getBannerApps(_this){
            const url = api + "app-api/weapp/apps-list/banner/get";//
            wx.request({
                method:'POST',
                url: url, //仅为示例，并非真实的接口地址
                data: {
                },
                header: {
                  'content-type': 'application/json', // 默认值
                  'tenant-id': '1',
                  'Authorization': 'Bearer test1',
                  'Accept': '*/*',
                  'Connection': 'keep-alive'
                },
                success (res) {
                  if(res.data){
                    const bannerApps = [{page:0, categorys:res.data.data}];
                    // console.log(res.data.data)
                    _this.setData({
                        categorySet:bannerApps
                    })
                  }
                }
              })
        },
        //获取小程序分类
        getWeappsClases(_this){
            const url = api + "app-api/weapp/apps-class/get";//
            wx.request({
                method:'POST',
                url: url, //仅为示例，并非真实的接口地址
                data: {
                },
                header: {
                  'content-type': 'application/json', // 默认值
                  'tenant-id': '1',
                  'Authorization': 'Bearer test1',
                  'Accept': '*/*',
                  'Connection': 'keep-alive'
                },
                success (res) {
                  if(res.data){

                    const category = res.data.data;
                    // console.log(category)
                    _this.setData({
                        vipCategorys:category
                    })
                  }
                }
              })
        },
        //根据分类查询小程序
        getWeappLists(_this){
            const url = api + "app-api/weapp/apps-class/get";//
            wx.request({
                method:'POST',
                url: url, //仅为示例，并非真实的接口地址
                data: {
                },
                header: {
                  'content-type': 'application/json', // 默认值
                  'tenant-id': '1',
                  'Authorization': 'Bearer test1',
                  'Accept': '*/*',
                  'Connection': 'keep-alive'
                },
                success (res) {
                  if(res.data){

                    const category = res.data.data;
                    // console.log(category)
                    _this.setData({
                        vipCategorys:category
                    })
                  }
                }
              })
        },
        //收藏小程序
        collectApp(){

        },
        //根据小程序名称搜索
        searchAppsByName(){

        },
        //页面初始化一些样式与动画
        pageInit(){
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
        }
    }
})