// 负责home.vue 文件的网络请求

import {request} from "./request"

export function gethomedata() {
  return request({
    url: '/home/multidata'
  })
}

export function gethomelist() {
  return request({
    url: 'home/multidata'
  })
}
