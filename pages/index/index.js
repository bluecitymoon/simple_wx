var app = getApp()
Page({
  data: {
    allCourses: [],
    selectedCourses: [],
    channels: [],
    selectedChannel: {},
    courseHeight: 800,
    index: 0,
    newOrder: { 
      marketChannelCategory: null,
      classCategories:[]
    }
  },

  onLoad: function() {
    this.getAllChannels()
    this.getAllClassCategories()
  },

  interestedCourseChange: function(e) {
    if (!e.detail.value || e.detail.value.length < 1) {
      return
    }
    var selectedCourses = e.detail.value
    var courses = [];
    for (var i = 0; i < selectedCourses.length; i++) {
      console.debug(selectedCourses[i])
      var courseId = selectedCourses[i]
      for (var j = 0; j < this.data.allCourses.length; j++) {
        var singleCourse = this.data.allCourses[j]
        if (courseId == singleCourse.id) {
          courses.push(singleCourse)
        }
      }
    }

    this.setData({
      selectedCourses: courses
    })
  },

  channelChange: function(e) {

    this.setData({index: e.detail.value})
    var selectedChannel = this.data.channels[this.data.index]
    this.setData({
      selectedChannel: selectedChannel
    })

  },

  getAllChannels: function () {
    wx.request({
      url: 'https://bd.mingrule.com/api/market-channel-categories',
      success: (res) => {

        wx.hideLoading();

        this.setData({
          channels: res.data,
          index: 0,
          selectedChannel: res.data[0]
        })
      }
    })
  },
  getAllClassCategories: function () {
    wx.request({
      url: 'https://bd.mingrule.com/api/class-categories',
      success: (res) => {

        wx.hideLoading();

        this.setData({
          allCourses: res.data,
          courseHeight: res.data.length * 100
        })

      }
    })
  },
  submitNewOrder: function(e) {

    var order = e.detail.value

    order.marketChannelCategory = this.data.selectedChannel
    order.classCategories = this.data.selectedCourses
    order.id = null
    order.status = "新单"

    wx.request({
      url: 'https://localhost:8443/api/free-class-records',
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      data: order,
      success: (res) => {

        if (res.statusCode == 201) {

          wx.showToast({
            title: '恭喜您预约成功！',
            icon: 'success',
            duration: 2000
          })
        } else {

          wx.showToast({
            title: '预约失败！',
            icon: 'fail',
            duration: 2000
          })

        }
      }
    })

  }
})
