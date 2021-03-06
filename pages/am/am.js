//am.js
const {getStorage } = require('../../utils/weixin')
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.contact'),
    subjects:[]
  },
  onLoad: function () {
    this.init()
  },
  init(){
    let vm = this
    getStorage('history').then(res=>{
      vm.setData({
        subjects:res.data.list
      })
    }).catch(()=>{
      console.info('shibai')
    })
  },
  del () {
    wx.clearStorage()
  },
  go () {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  detail(event) {
    let id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id
    })
  },
  onShareAppMessage: function () {
    return {
      title: '影之讯',
      path: 'pages/index/index'
    }
  }
})
