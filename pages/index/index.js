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
    duration: 800,
    // 是否开启无缝滚动
    circular: false,
    // 指示点颜色
    indicatorColor:'#fff',
    // 当前选中的指示点的颜色
    indicatorActiveColor:'#00d6ff',
    // 按钮的class动态绑定，一定要用setData方法进行动态绑定
    btnClass:'hidden-btn',
    // 轮播图文字
    bannerText:'Vue',
  },
  // 轮播图改变的时候触发的回调
  bannerChange:function(e){
    // 输出第一个参数可以看到具体的信息
    // console.log(e.detail.current)
    // 轮播到最后一个显示按钮
    e.detail.current == 3 ? this.setData({
      btnClass: 'start-btn'
    }) : this.setData({
      btnClass: 'hidden-btn'
    })
    // 改变对应轮播图的内容
    this.changeText(e.detail.current)
  },
  // 控制文字内容
  changeText:function(i){
    switch (i) {
      case 0:
        this.setData({
          bannerText: 'VUE'
        })
        break;
      case 1:
        this.setData({
          bannerText: 'REACT'
        })
        break;
      case 2:
        this.setData({
          bannerText: 'ANGULAR'
        })
        break;
      case 3:
        this.setData({
          bannerText: 'WXMINA'
        })
        break;
    }
  },

  //事件处理函数
  toHome:function(){
    // 路由到home页
    wx.navigateTo({
      url: '../../pages/home/home'
    })
  },
  onLoad: function () {
  
  },
})
