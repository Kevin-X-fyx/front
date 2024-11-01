import request from '@/utils/request'

// 查询【请填写功能名称】列表
export function listContacts(query) {
  return request({
    url: '/system/contacts/list',
    method: 'get',
    params: query
  })
}

// 查询【请填写功能名称】详细
export function getContacts(id) {
  return request({
    url: '/system/contacts/' + id,
    method: 'get'
  })
}

// 新增【请填写功能名称】
export function addContacts(data) {
  return request({
    url: '/system/contacts',
    method: 'post',
    data: data
  })
}

// 修改【请填写功能名称】
export function updateContacts(data) {
  return request({
    url: '/system/contacts',
    method: 'put',
    data: data
  })
}

// 删除【请填写功能名称】
export function delContacts(id) {
  return request({
    url: '/system/contacts/' + id,
    method: 'delete'
  })
}
