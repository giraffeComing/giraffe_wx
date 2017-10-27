// pages/list/list.js
// 引入mock.js
var Mock=require('../../utils/mock.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    i:0,
    listData:[
      {
        title: '11111',
        des: '一些描述1'
      },
      {
        title: '22222',
        des: '一些描述2'
      },
      {
        title: '33333',
        des: '一些描述3'
      },
      {
        title: '11111',
        des: '一些描述1'
      },
      {
        title: '22222',
        des: '一些描述2'
      },
      {
        title: '33333',
        des: '一些描述3'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log(
      Mock.mock({
      "array|10": [
        {
          "id": Mock.mock('@integer(10000)'),
          "des|+1": [
            "Hello",
            "Mock.js",
            "!"
          ]
        }
      ]
    })
    )
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
    console.log(this.data.i++)
    this.data.listData.push({
      title: '0000',
      des: '一些描述0000'
    }, {
        title: '0000',
        des: '一些描述0000'
      }, {
        title: '0000',
        des: '一些描述0000'
      }, {
        title: '0000',
        des: '一些描述0000'
      }, {
        title: '0000',
        des: '一些描述0000'
      }, {
        title: '0000',
        des: '一些描述0000'
      }, {
        title: '0000',
        des: '一些描述0000'
      }, {
        title: '0000',
        des: '一些描述0000'
      }, {
        title: '0000',
        des: '一些描述0000'
      }, {
        title: '0000',
        des: '一些描述0000'
      }, {
        title: '0000',
        des: '一些描述0000'
      }, {
        title: '0000',
        des: '一些描述0000'
      })
    this.setData({
      listData: this.data.listData
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
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
})