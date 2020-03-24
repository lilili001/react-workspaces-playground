import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const basicRoutes = [
  { path: '/', redirect: '/intro' },
  { path: '/intro', title: '起步 组件维护', name: 'intro', component: () => import('@/views/Intro.vue') },
  { path: '/button', title: 'Button 按钮', name: 'buttonCom', component: () => import('@/views/basic/Button.vue') },
  { path: '/formItems', title: 'Form 表单', name: 'formItems', component: () => import('@/views/basic/formItems.vue') },
  { path: '/modal', title: 'Modal 弹窗', name: 'modal', component: () => import('@/views/basic/Modal.vue') },
  { path: '/table', title: 'Table 表格', name: 'table', component: () => import('@/views/basic/Table.vue') }
]

const customerRoutes = [
  {
    path: '/applySteps',
    title: 'ApplySteps 步骤条',
    name: 'ApplySteps',
    component: () => import('@/views/ApplySteps.vue')
  },
  {
    path: '/approvalResult',
    title: 'MApprovalResult 审批历史',
    name: 'ApprovalResult',
    component: () => import('@/views/ApprovalResult.vue')
  },
  {
    path: '/cmpanel',
    title: 'MCmPanel 容器',
    name: 'MCmPanel',
    component: () => import('@/views/CmPanel.vue')
  },
  {
    path: '/boxWithTitle1',
    title: 'MBoxWithTitle1 一级标题容器',
    name: 'BoxWithTitle1',
    component: () => import('@/views/BoxWithTitle1.vue')
  },
  {
    path: '/boxWithTitle2',
    title: 'MBoxWithTitle2 二级标题容器',
    name: 'BoxWithTitle2',
    component: () => import('@/views/BoxWithTitle2.vue')
  },
  {
    path: '/breadCrumb',
    title: 'MBreadCrumb 面包屑',
    name: 'BreadCrumb',
    component: () => import('@/views/BreadCrumb.vue'),
    meta: { brand: [{ label: '新提报中心' }, { label: '进件管理', url: '/applySteps' }, { label: '去完成' }] }
  },
  {
    path: '/basicOrderInfo',
    title: 'MBasicOrderInfo 订单信息',
    name: 'basicOrderInfo',
    component: () => import('@/views/BasicOrderInfo.vue')
  },
  { path: '/cascad', title: 'MCascad 级联', name: 'cascad', component: () => import('@/views/Cascad.vue') },
  { path: '/cModal', title: 'MCModal 动态弹窗', name: 'CModal', component: () => import('@/views/CModal.vue') },
  { path: '/fujian', title: 'MFujian 附件', name: 'Fujian', component: () => import('@/views/Fujian.vue') },
  { path: '/mLoading', title: 'MLoading', name: 'MLoading', component: () => import('@/views/MLoading.vue') },
  { path: '/tabbar', title: 'MTabbar', name: 'Tabbar', component: () => import('@/views/Tabbar.vue') },
  {
    path: '/initialPageBox',
    title: 'MInitialPageBox',
    name: 'MInitialPageBox',
    component: () => import('@/views/InitialPageBox.vue'),
    meta: { brand: [{ label: '新提报中心' }, { label: '进件管理', url: '/applySteps' }, { label: '去完成' }] }
  },
  { path: '/test/:id', title: 'Test', name: 'test', component: () => import('@/views/Test.vue') },
]

const businessComs = [
  { path: '/configDimension', title: 'configDimension 配置维度', name: 'configDimension', component: () => import('@/views/ConfigDimension.vue') }
]

var obj = { basicRoutes, customerRoutes, businessComs }
export const routes = obj
export default new Router({
  routes: [...basicRoutes, ...customerRoutes, ...businessComs]
})
