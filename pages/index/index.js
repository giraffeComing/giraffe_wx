//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../images/sky_03_bg.jpg',
      '../images/sky_02_bg.jpg',
      '../images/sky_01_bg.jpg',
      '../images/sky_bg.jpg'
    ],
    // 面板指示点
    indicatorDots: true,
    // 自动轮播
    autoplay: false,
    // 轮播间隔
    interval: 5000,
    // 单图滚动时长
    duration: 1000,
    // 是否开启无缝滚动
    circular: false,
    // 指示点颜色
    indicatorColor:'#fff',
    // 当前选中的指示点的颜色
    indicatorActiveColor:'#00aebe',
    // 按钮的class动态绑定，一定要用setData方法进行动态绑定
    btnClass:'hidden-btn',

    motto: 'WelCome',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  // 轮播图改变的时候触发的回调
  bannerChange:function(e){
    // 输出第一个参数可以看到具体的信息
    console.log(e.detail.current)
    if (e.detail.current==3){
      this.setData({
        btnClass: 'start-btn'
      })
    }else{
      this.setData({
        btnClass: 'hidden-btn'
      })
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
