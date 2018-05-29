//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    motte: '',
    tap:'单选投票',
    canTap: true,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  
  onLoad: function () {

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          if(res.userInfo){
            app.globalData.userInfo = res.userInfo
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
            wx.showTabBar({
              
            })
          }else{
            wx.hideTabBar({
              
            })
          }
          
        }
      })
    }
  },

  bindViewTap:function(){
    wx.navigateTo({
      url: '../CreatTouPiao/index',
    })
  },



  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
