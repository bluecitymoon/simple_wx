var app = getApp()
Page({
  data: {
    provinces:[],
    citys:[],
    districts:[],
    selProvince:'请选择',
    selCity:'请选择',
    selDistrict:'请选择',
    selProvinceIndex:0,
    selCityIndex:0,
    selDistrictIndex:0,
    sexLabels: [
      { name: 'M', value: '男', checked: 'true' },
      { name: 'F', value: '女'}
    ],
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
  
  kidSexSelectionChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  }
})
