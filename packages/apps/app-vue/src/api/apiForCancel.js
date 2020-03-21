/* 上下文前缀是 phoenix */
import { $axios as axios } from '@/plugins/axios'
export default {
  /* 退款列表 */
  refundList: (params) => axios.post(`${server}/phoenix/cancel/queryCancelList`, params),
  /* 在途取消待办数量查询接口 */
  canclingNum: () => axios.get(`${server}/phoenix/cancel/onCanclingNum`),
  /* 退款撤销 */
  revoke: (orderNo) => axios.get(`${server}/phoenix/cancel/refund/revoke/${orderNo}`),
  /* 退款信息 */
  /* 退款提交 */
  submitCancelOrFetch: (params) => axios.post(`${server}/phoenix/order/cancel/submitCancelOrFetch`, params),
  /* gps拆除初始化 */
  gpsRemoveInit: (orderNo) => axios.get(`${server}/phoenix/gps/remove/init/${orderNo}`),
  /* gps拆除提交 */
  gpsRemoveSubmit: (params) => axios.post(`${server}/phoenix/gps/remove/submit`, params),
  /* gps拆除撤销 */
  /* 确认退款初始化 */
  confirmRefundInit: (orderNo) => axios.get(`${server}/phoenix/refund/init/${orderNo}`),
  /* 确认退款撤销 */
  confirmRefundSubmit: (params) => axios.post(`${server}/phoenix/refund/submit`, params),
  /* 查看页 */
  /* 取消基本信息接口 */
  getBaseInfo: (orderNo) => axios.get(`${server}/phoenix/cancel/getBaseInfo/${orderNo}`),
  /* 取消模块查询接口 */
  cancelModuleQuery: (orderNo) => axios.get(`${server}/phoenix/cancel/cancelModuleQuery/${orderNo}`),
  /* 取消原因查询接口 */
  cancelReasonQuery: (orderNo) => axios.get(`${server}/phoenix/cancel/cancelReasonQuery/${orderNo}`),
  /* 付款记录查询 */
  payLogQuery: (params) => axios.post(`${server}/phoenix/paymentDetail/query`, params),
  /* 审批历史记录查询接口 */
  getApproveHistory: (orderNo) => axios.get(`${server}/phoenix/cancel/getApproveHistory/${orderNo}`)
}
