// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../images/banner01.png',
      '../images/banner02.png',
      '../images/banner03.png',
      '../images/banner04.png'
    ],
    itemImgs:[
      {
        src: '../images/ad_01.png',
        href: '',
        id:1
      },
      {
        src: '../images/ad_02.png',
        href: '',
        id: 2
      },
      {
        src: '../images/ad_03.png',
        href: '',
        id: 3
      },
      {
        src: '../images/ad_04.png',
        href: '',
        id: 4
      },
      {
        src: '../images/ad_05.png',
        href: '',
        id: 5
      },
      {
        src: '../images/ad_06.png',
        href: '',
        id: 6
      },
      {
        src: '../images/ad_07.png',
        href: '',
        id: 7
      },
      {
        src: '../images/ad_08.png',
        href: '',
        id: 8
      },
      {
        src: '../images/ad_09.png',
        href: '',
        id: 9
      }
    ],
    // 面板指示点
    indicatorDots: true,
    // 自动轮播
    autoplay: true,
    // 轮播间隔
    interval: 5000,
    // 单图滚动时长
    duration: 1000,
    // 是否开启无缝滚动
    circular: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


  },
  toHome: function () {
    wx.redirectTo({
      url: '../../pages/home/home'
    })
  },
  toList: function () {
    wx.redirectTo({
      url: '../../pages/list/list'
    })
  },
  toCenter: function () {
    wx.redirectTo({
      url: '../../pages/center/center'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})