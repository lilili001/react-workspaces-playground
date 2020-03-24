import { $axios as axios } from '@/plugins/axios'

// 为避免本文件过长 引入取消合同的api
/* 获取用户信息 */

export const getList = (page = 1) => axios.get(`${server}/posts?page=${page}`)
export const getOptions = (id) => axios.get(`/pageC/${id}`)
