import request from '@/utils/request'

export default {
  // 查询菜单列表
  getList(query) {
    return request({
      url: `/system/menu/search`,
      method: 'post',
      data: query
    })
  },
  // 新增菜单
  add(data) {
    return request({
      url: `/system/menu`,
      method: 'post',
      data
    })
  }
}
