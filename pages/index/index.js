var app = getApp()
Page({
  data: {
    allCourses: [
      { name: 'A', value: '学生古筝', checked: 'true' },
      { name: 'B', value: '成人古筝' },
      { name: 'B', value: '少儿书法' },
      { name: 'B', value: '成人书法' },
      { name: 'B', value: '少儿围棋' },
      { name: 'B', value: '少儿国画' },
      { name: 'B', value: '成人国画' },
      { name: 'B', value: '成人茶艺' }
    ]
  },
  
  interestedCourseChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  }
})
