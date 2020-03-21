/**
 * Created by miyaye on 2019/12/8.
 */
import Mock from 'mockjs'

const Random = Mock.Random
function wrap (data) {
  return {
    code: 0,
    data,
    message: ''
  }
}

/* 取消列表查询 */
export const queryCancelList = wrap(
  {
    pageSize: 10,
    pageNum: 1,
    resultCount: 100,
    data: [
      {
        monthlyAmount: 'ss',
        financePeriod: 'ss',
        financePeriodName: 'ss',
        custFinanceAmount: 'ss',
        orderNo: '123',
        cancelStatus: 'ss',
        cancelStatusName: 'ss',
        custName: 'ss',
        custPhone: 'ss',
        orderCreateTime: 'ss',
        businessType: 'ss',
        businessTypeName: 'ss',
        custCertificateNo: 'ss',
        carType: 'ss',
        carTypeName: 'ss',
        dealerCode: 'ss',
        dealerName: 'ss',
        productCode: 'ss',
        productName: 'ss',
        createId: 'ss',
        carMasterBrandId: 'ss',
        carMasterBrandName: 'ss',
        carBrandId: 'ss',
        carBrandName: 'ss',
        carModelId: 'ss',
        carModelName: 'ss',
        carStyleId: 'ss',
        carStyleName: 'ss',
        custType: 'ss',
        custTypeName: 'ss',
        operatorButton: [
          /*
                     undo 撤销
                     call 打电话
                     toGpsRemove
                     去完成（跳转到GPS拆除页）
                     toSureFund 去完成（跳转到店面确认退款）
                     toCancel 去完成（跳转到驳回后再去取消）
                     * */
          {
            buttonCode: 'view',
            buttonName: 'view'
          },
          {
            buttonCode: 'undo',
            buttonName: '撤销'
          },
          {
            buttonCode: 'toGpsRemove',
            buttonName: 'toGpsRemove'
          },
          {
            buttonCode: 'toSureFund',
            buttonName: 'toSureFund'
          },
          {
            buttonCode: 'toCancel',
            buttonName: 'toCancel'
          }
        ]
      },
      {
        monthlyAmount: 'ss',
        financePeriod: 'ss',
        financePeriodName: 'ss',
        custFinanceAmount: 'ss',
        orderNo: '123',
        cancelStatus: 'ss',
        cancelStatusName: 'ss',
        custName: 'ss',
        custPhone: 'ss',
        orderCreateTime: 'ss',
        businessType: 'ss',
        businessTypeName: 'ss',
        custCertificateNo: 'ss',
        carType: 'ss',
        carTypeName: 'ss',
        dealerCode: 'ss',
        dealerName: 'ss',
        productCode: 'ss',
        productName: 'ss',
        createId: 'ss',
        carMasterBrandId: 'ss',
        carMasterBrandName: 'ss',
        carBrandId: 'ss',
        carBrandName: 'ss',
        carModelId: 'ss',
        carModelName: 'ss',
        carStyleId: 'ss',
        carStyleName: 'ss',
        custType: 'ss',
        custTypeName: 'ss',
        operatorButton: [
          /*
                     undo 撤销
                     call 打电话
                     toGpsRemove
                     去完成（跳转到GPS拆除页）
                     toSureFund 去完成（跳转到店面确认退款）
                     toCancel 去完成（跳转到驳回后再去取消）
                     * */
          {
            buttonCode: 'view',
            buttonName: 'view'
          },
          {
            buttonCode: 'undo',
            buttonName: '撤销'
          },
          {
            buttonCode: 'toGpsRemove',
            buttonName: 'toGpsRemove'
          },
          {
            buttonCode: 'toSureFund',
            buttonName: 'toSureFund'
          },
          {
            buttonCode: 'toCancel',
            buttonName: 'toCancel'
          }
        ]
      },
      {
        monthlyAmount: 'ss',
        financePeriod: 'ss',
        financePeriodName: 'ss',
        custFinanceAmount: 'ss',
        orderNo: '123',
        cancelStatus: 'ss',
        cancelStatusName: 'ss',
        custName: 'ss',
        custPhone: 'ss',
        orderCreateTime: 'ss',
        businessType: 'ss',
        businessTypeName: 'ss',
        custCertificateNo: 'ss',
        carType: 'ss',
        carTypeName: 'ss',
        dealerCode: 'ss',
        dealerName: 'ss',
        productCode: 'ss',
        productName: 'ss',
        createId: 'ss',
        carMasterBrandId: 'ss',
        carMasterBrandName: 'ss',
        carBrandId: 'ss',
        carBrandName: 'ss',
        carModelId: 'ss',
        carModelName: 'ss',
        carStyleId: 'ss',
        carStyleName: 'ss',
        custType: 'ss',
        custTypeName: 'ss',
        operatorButton: [
          /*
                     undo 撤销
                     call 打电话
                     toGpsRemove
                     去完成（跳转到GPS拆除页）
                     toSureFund 去完成（跳转到店面确认退款）
                     toCancel 去完成（跳转到驳回后再去取消）
                     * */
          {
            buttonCode: 'view',
            buttonName: 'view'
          },
          {
            buttonCode: 'undo',
            buttonName: '撤销'
          },
          {
            buttonCode: 'toGpsRemove',
            buttonName: 'toGpsRemove'
          },
          {
            buttonCode: 'toSureFund',
            buttonName: 'toSureFund'
          },
          {
            buttonCode: 'toCancel',
            buttonName: 'toCancel'
          }
        ]
      },
      {
        monthlyAmount: 'ss',
        financePeriod: 'ss',
        financePeriodName: 'ss',
        custFinanceAmount: 'ss',
        orderNo: '123',
        cancelStatus: 'ss',
        cancelStatusName: 'ss',
        custName: 'ss',
        custPhone: 'ss',
        orderCreateTime: 'ss',
        businessType: 'ss',
        businessTypeName: 'ss',
        custCertificateNo: 'ss',
        carType: 'ss',
        carTypeName: 'ss',
        dealerCode: 'ss',
        dealerName: 'ss',
        productCode: 'ss',
        productName: 'ss',
        createId: 'ss',
        carMasterBrandId: 'ss',
        carMasterBrandName: 'ss',
        carBrandId: 'ss',
        carBrandName: 'ss',
        carModelId: 'ss',
        carModelName: 'ss',
        carStyleId: 'ss',
        carStyleName: 'ss',
        custType: 'ss',
        custTypeName: 'ss',
        operatorButton: [
          /*
                     undo 撤销
                     call 打电话
                     toGpsRemove
                     去完成（跳转到GPS拆除页）
                     toSureFund 去完成（跳转到店面确认退款）
                     toCancel 去完成（跳转到驳回后再去取消）
                     * */
          {
            buttonCode: 'view',
            buttonName: 'view'
          },
          {
            buttonCode: 'undo',
            buttonName: '撤销'
          },
          {
            buttonCode: 'toGpsRemove',
            buttonName: 'toGpsRemove'
          },
          {
            buttonCode: 'toSureFund',
            buttonName: 'toSureFund'
          },
          {
            buttonCode: 'toCancel',
            buttonName: 'toCancel'
          }
        ]
      }
    ]
  }
)
export const onCanclingNum = wrap({
  taskNum: 10
})
export const gpsRemoveInit = wrap({
  gpsRemoveInfo: {
    whetherRemove: '1',
    storeContact: 'ss',
    storeContactPhone: '13472740661',
    removeDate: 'ss',
    removeAddress: 'ss',
    removeReason: 'ss',
    notRemoveReason: 'ss',
    removeProvince: '',
    removeCity: ''
  },
  remark: 'ss'
})
export const confirmRefundInit = wrap({
  refundInfo: {
    hadTotalLoanAmount: 'ss',
    hadRefundAmount: 'ss',
    shouldRefundAmount: 'ss',
    refundUserAccount: 'ss',
    paymentUser: 'ss',
    paymentDate: 'ss',
    custName: 'ss',
    custPhone: '021-1111111'
  },
  refundTip: {
    shAccountName: 'ss',
    shDepositBank: 'ss',
    shAccountNum: 'ss',
    tjAccountName: 'ss',
    tjDepositBank: 'ss',
    tjAccountNum: 'ss',
    joinLineNum: 'ss'
  },
  remark: 'ss'
})
export const getBaseInfo = wrap({
  monthlyAmount: 'ss',
  financePeriod: 'ss',
  financePeriodName: 'ss',
  custFinanceAmount: 'ss',
  orderNo: '123',
  cancelStatus: 'ss',
  cancelStatusName: 'ss',
  custName: 'ss',
  custPhone: '021-1111111',
  orderCreateTime: 'ss',
  businessType: 'ss',
  businessTypeName: 'ss',
  custCertificateNo: 'ss',
  carType: 'ss',
  carTypeName: 'ss',
  dealerCode: 'ss',
  dealerName: 'ss',
  productCode: 'ss',
  productName: 'ss',
  createId: 'ss',
  carMasterBrandId: 'ss',
  carMasterBrandName: 'ss',
  carBrandId: 'ss',
  carBrandName: 'ss',
  carModelId: 'ss',
  carModelName: 'ss',
  carStyleId: 'ss',
  carStyleName: 'ss',
  custType: 'ss',
  custTypeName: 'ss',
  operatorButton: 'ss',
  buttonCode: 'ss',
  buttonName: 'ss'
})
export const cancelModuleQuery = wrap([
  /* removeReason：取消原因
    gpsRemove：GPS拆除信息
    fundInfo：退款相关信息
    payInfo：付款信息 */
  {
    cancelModule: 'cancelReason',
    cancelModuleName: '取消原因'
  },
  {
    cancelModule: 'gpsRemove',
    cancelModuleName: 'GPS拆除信息'
  },
  {
    cancelModule: 'fundInfo',
    cancelModuleName: '退款相关信息'
  },
  {
    cancelModule: 'payInfo',
    cancelModuleName: '付款信息'
  }
])
export const cancelReasonQuery = wrap({ cancelReason: '7天无理由取消' })
export const payLog = wrap([
  {
    payList: [
      {
        batchNo: 'ss',
        payFeeName: 'ss',
        payAmount: 'ss',
        payStatusName: 'ss',
        payTime: 'ss'
      }
    ]
  }
])
export const getApproveHistory = wrap([
  {
    orderNo: '123',
    approve: 'ss',
    approveName: '成功',
    approveRemark: 'ss',
    approveUser: 'ss',
    approveUserName: 'ss',
    approveTime: 'ss',
    platformId: 'ss',
    event: 'ss',
    eventName: 'ss',
    approveComments: 'ss',
    orderStatus: 'ss',
    orderStatusName: 'ss',
    approveProcessType: 'ss'
  },
  {
    orderNo: '123',
    approve: 'ss',
    approveName: '成功',
    approveRemark: 'ss',
    approveUser: 'ss',
    approveUserName: 'ss',
    approveTime: 'ss',
    platformId: 'ss',
    event: 'ss',
    eventName: 'ss',
    approveComments: 'ss',
    orderStatus: 'ss',
    orderStatusName: 'ss',
    approveProcessType: 'ss'
  },
  {
    orderNo: '123',
    approve: 'ss',
    approveName: '成功',
    approveRemark: 'ss',
    approveUser: 'ss',
    approveUserName: 'ss',
    approveTime: 'ss',
    platformId: 'ss',
    event: 'ss',
    eventName: 'ss',
    approveComments: 'ss',
    orderStatus: 'ss',
    orderStatusName: 'ss',
    approveProcessType: 'ss'
  },
  {
    orderNo: '123',
    approve: 'cancel',
    approveName: '失败',
    approveRemark: 'ss',
    approveUser: 'ss',
    approveUserName: 'ss',
    approveTime: 'ss',
    platformId: 'ss',
    event: 'ss',
    eventName: 'ss',
    approveComments: 'ss',
    orderStatus: 'ss',
    orderStatusName: 'ss',
    approveProcessType: 'ss'
  }
])
