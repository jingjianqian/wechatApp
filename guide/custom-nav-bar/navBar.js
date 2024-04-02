// custom-nav-bar/navBar.js
Component({

    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        navigationTop: 0, // 导航栏顶部高度
        navigationHei: 20, // 导航栏高度
        paddingLeft: 0, // 导航栏做内边距
    },
    ready:function(){
        console.log("123333333333333333333333333333333")
        // 状态栏高度
        const {screenWidth,statusBarHeight} = wx.getSystemInfoSync();
        // 胶囊按钮
        const {height,top,right} = wx.getMenuButtonBoundingClientRect();
        // 左边内边距
        const paddingLeft = screenWidth - right;
        const navigationHei = (top - statusBarHeight) * 2 + height;
        this.setData({
            navigationTop: statusBarHeight,
            navigationHei,
            paddingLeft
        })
        console.log(this.data.navigationTop)
    },

    /**
     * 组件的方法列表
     */
    methods: {
        
    }
})