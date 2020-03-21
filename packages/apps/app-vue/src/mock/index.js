import Mock from 'mockjs'
import * as api from './api'
import * as apiCancel from './apiCancel'
window.server = window.isDebug ? '' : 'yxcode-gateway'
var arr = location.href.split('#')[1].split('/')
var orderNo = arr[arr.length - 1]

/* 合同取消 */
Mock.mock(`/phoenix/cancel/refund/revoke`, api.commonSuccess)
Mock.mock(`/phoenix/cancel/refund/submit`, api.commonSuccess)
Mock.mock(`/phoenix/gps/remove/submit`, api.commonSuccess)
Mock.mock(`/phoenix/refund/submit`, api.commonSuccess)

Mock.mock(`/phoenix/cancel/queryCancelList`, apiCancel.queryCancelList)
Mock.mock(`/phoenix/cancel/onCanclingNum`, apiCancel.onCanclingNum) // 在途取消数量
Mock.mock(`/phoenix/gps/remove/init/${orderNo}`, apiCancel.gpsRemoveInit) // gps初始化
Mock.mock(`/phoenix/refund/init/${orderNo}`, apiCancel.confirmRefundInit) // 确认退款初始化
Mock.mock(`/phoenix/cancel/getBaseInfo/${orderNo}`, apiCancel.getBaseInfo) // 基础信息
Mock.mock(`/phoenix/cancel/cancelModuleQuery/${orderNo}`, apiCancel.cancelModuleQuery) // 取消模块查询
Mock.mock(`/phoenix/cancel/cancelReasonQuery/${orderNo}`, apiCancel.cancelReasonQuery) // 取消原因查询接口
Mock.mock(`/phoenix/paymentDetail/query`, apiCancel.payLog) // 付款记录查询
Mock.mock(`/phoenix/cancel/getApproveHistory/${orderNo}`, apiCancel.getApproveHistory) // 取消原因查询接口
