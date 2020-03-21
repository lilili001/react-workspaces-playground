import Mock from 'mockjs'

// 请款
export var pagefinishStatus = wrap([
  { labelCode: 'custInfo', labelName: '客户信息', hasSaved: true },
  { labelCode: 'carInfo', labelName: '车辆信息', hasSaved: true },
  { labelCode: 'financeInfo', labelName: '融资信息', hasSaved: true },
  { labelCode: 'fundInfo', labelName: '资方信息', hasSaved: true },
  { labelCode: 'fileInfo', labelName: '影像信息', hasSaved: true },
  { labelCode: 'remarkInfo', labelName: '备注信息(选填)', hasSaved: false },
  { labelCode: 'otherInfo',
    labelName: '附加信息',
    hasSaved: true,
    subLabel: [
      { labelCode: 'shoukuanInfo', labelName: '收款信息', hasSaved: false },
      { labelCode: 'gpsInfo', labelName: 'gps信息', hasSaved: false },
      { labelCode: 'policyInfo', labelName: '保单信息', hasSaved: false }
    ]
  }
])

export var remarkInit = wrap('这是备注')

export const zifangSaved = wrap(true)

export var queryBanks = wrap([{ 'bankCode': 'ICBC', 'bankName': '工商银行' }, { 'bankCode': 'BOC', 'bankName': '中国银行' }, { 'bankCode': 'CCB', 'bankName': '建设银行' }, { 'bankCode': 'BOCOM', 'bankName': '交通银行' }, { 'bankCode': 'CMB', 'bankName': '招商银行' }, { 'bankCode': 'PSBC', 'bankName': '邮政储蓄银行' }, { 'bankCode': 'GDB', 'bankName': '广发银行' }, { 'bankCode': 'CEB', 'bankName': '光大银行' }, { 'bankCode': 'PAB', 'bankName': '平安银行' }, { 'bankCode': 'ECITIC', 'bankName': '中信银行' }, { 'bankCode': 'HXB', 'bankName': '华夏银行' }])

export var getPayeeInfo = wrap({
  payeeTypeList: [
    {
      'payeeInfoList': [
        {
          'payeeBankCode': 'ABC',
          'payeeBankName': '中国农业银行',
          'payeeCityCode': '110100',
          'payeeCityName': '北京市',
          'payeeElectronicNo': '103246095236',
          'payeeName': 'add906',
          'payeeNameId': '8a7e88846cdc4340016d051e42050126',
          'payeeProvenceCode': '110000',
          'payeeProvenceName': '北京市',
          'payeeType': null,
          'payeeUserAccount': '6666666666666',
          'payeeUserName': 'add906'
        },
        {
          'payeeBankCode': 'AB',
          'payeeBankName': '美国银行',
          'payeeCityCode': '340100',
          'payeeCityName': '合肥市',
          'payeeElectronicNo': '532290010011',
          'payeeName': '11111',
          'payeeNameId': '8a7e88866c991e39016cb1fb6e8800e1',
          'payeeProvenceCode': '340000',
          'payeeProvenceName': '安徽省',
          'payeeType': null,
          'payeeUserAccount': '1',
          'payeeUserName': '1'
        },
        {
          'payeeBankCode': 'CEB',
          'payeeBankName': '中国光大银行',
          'payeeCityCode': '310100',
          'payeeCityName': '上海市',
          'payeeElectronicNo': '303290000278',
          'payeeName': '上海驭杰汽车销售有限公司',
          'payeeNameId': '8a808552617531700161d073a880283c',
          'payeeProvenceCode': '310000',
          'payeeProvenceName': '上海市',
          'payeeType': null,
          'payeeUserAccount': '76270188000256026',
          'payeeUserName': '上海驭杰汽车销售有限公司'
        }
      ],
      'payeeType': '0',
      'payeeTypeName': '企业'
    },
    {
      'payeeInfoList': [
        {
          'payeeBankCode': 'CEB',
          'payeeBankName': '中国光大银行',
          'payeeCityCode': '310100',
          'payeeCityName': '上海市',
          'payeeElectronicNo': '303290000278',
          'payeeName': '上海驭杰汽车销售有限公司',
          'payeeNameId': '402819ca5f5f2f9c015f5fe810ae29f9',
          'payeeProvenceCode': '310000',
          'payeeProvenceName': '上海市',
          'payeeType': null,
          'payeeUserAccount': '76270188000256026',
          'payeeUserName': '上海驭杰汽车销售有限公司update个人'
        },
        {
          'payeeBankCode': 'JSBC',
          'payeeBankName': '江苏银行',
          'payeeCityCode': '110100',
          'payeeCityName': '北京市',
          'payeeElectronicNo': '313314015037',
          'payeeName': '个人-鞠信',
          'payeeNameId': '8a7e88896df14e0f016dfcdc37be01ed',
          'payeeProvenceCode': '110000',
          'payeeProvenceName': '北京市',
          'payeeType': null,
          'payeeUserAccount': '6221730000025645',
          'payeeUserName': '鞠信'
        }
      ],
      'payeeType': '1',
      'payeeTypeName': '个人'
    }
  ]
})

export var isStockCar = wrap({
  isStockCar: true
})

export var getFinanceBaseInfo = wrap({
  'financeInfo': {
    'downPaymentProportion': '10',
    'downPaymentAmount': '30000',
    'custFinanceAmount': '12000',
    'monthlyAmount': '3600',
    'finalPaymentProportion': '23',
    'finalPaymentAmount': '34000',
    'marginProportion': '',
    'marginAmount': ''
  },
  'submissionInfo': {
    'downPaymentProportion': '',
    'downPaymentAmount': '',
    'custFinanceAmount': '',
    'monthlyAmount': '',
    'finalPaymentProportion': '',
    'finalPaymentAmount': '',
    'marginProportion': '',
    'marginAmount': ''
  }
})

/* 支行模糊查詢 */
export var searchBankBranch = wrap([
  { electronicNumber: 'sssss', bankBranchName: '工行' }
])

export var additionInit = wrap({
  'gpsInfo': {
    'gpsSupplier': '',
    'storeContact': '',
    'storeContactPhone': '',
    'installationDate': '',
    'installationProvince': '',
    'codeinstallationProvinceName': '',
    'installationCity': '',
    'codeinstallationCityName': '',
    'installationAddress': '',
    'gpsInstallPlanName': '',
    'wiredGpsNum': '',
    'wirelessGpsNum': ''
  },
  'payeeInformationList': [
    {
      'receivableType': '1',
      payeeBankCode: null,
      payeeBankName: null,
      payeeCityCode: null,
      payeeCityName: null,
      payeeElectronicNo: null,
      payeeName: null,
      payeeNameId: '8a7e88846cdc4340016d051e42050126',
      payeeProvenceCode: null,
      payeeProvenceName: '湖北省',
      payeeType: '0',
      payeeTypeName: null,
      payeeUserAccount: '史蒂夫史蒂夫',
      payeeUserName: null
    },
    {
      'receivableType': '2',
      payeeBankCode: null,
      payeeBankName: null,
      payeeCityCode: null,
      payeeCityName: null,
      payeeElectronicNo: null,
      payeeName: null,
      payeeNameId: '8a7e88846cdc4340016d051e42050126',
      payeeProvenceCode: null,
      payeeProvenceName: '湖北省',
      payeeType: '0',
      payeeTypeName: null,
      payeeUserAccount: '史蒂夫史蒂夫',
      payeeUserName: null
    }
  ],

  'showGps': '1',
  'showInsurance': '1',
  // 'insuranceRepaymentMode': '',
  'lendToBorrower': '1',
  dealerCode: 'B170014854',
  dealerName: '上海驭杰汽车销售有限公司',
  'orderNo': '',
  'custType': '1',
  'fundCode': 'YX',
  'isPrepayment': '1', // 是否预付款
  'isResourceCar': '1'
})

/* 車輛信息初始化 */
export var carInit = wrap({
  'carInfo': {
    'vinNum': '',
    'carColor': '',
    'engineNum': '',
    'brandModel': ''
  },
  'orderNo': '',
  'carType': '049500000',
  // 'creditCode': '',
  'isStockCar': '',
  'fundCode': 'YX',
  // 'codeisRelyVinNum': '',
  'isResourceCar': '',
  'isProvideCarInfo': '',
  'showCarInfo': '1'
})

/* 客户信息初始化 */
export var customerInit = wrap({
  custRepayCardInfo: {
    'repaymentMode': '',
    'openBank': '',
    'repaymentCardBelong': '',
    'repaymentCardType': '2',
    'accountName': '',
    'accountCertificateNo': '',
    'openBankBranch': '',
    'bankCardNumber': '',
    'bankReservePhone': '',
    'openBankElectronicNo': '',
    'openBankProvince': '',
    'codeopenBankProvinceName': '',
    'openBankCity': '',
    'codeopenBankCityName': '',
    'verificationCode': ''
  },
  'creditCode': '',
  'dealerName': '',
  'custName': '张三',
  'custCertificateNo': '422126xxxxx',
  'custType': '1',
  'lendToBorrower': '1'
})

const Random = Mock.Random
function wrap (data) {
  return {
    code: 0,
    data,
    message: ''
  }
}
/* 公用成功 */
export const commonSuccess = wrap()

/* 公用失败 */
export const commonError = {
  code: -1,
  message: ''
}

/* 请款初始化 */
export const qingkuanInit = wrap({
  carType: '049500001', // 049500000：新车, 049500001:二手车
  businessType: '01300000', // 业务类型
  financialInsurance: true, // 是否融保险
  isReverseMortgage: true, // 是否反贷
  mainSubject: '03001', // 主体编码
  financialAddService: true, // 是否融加装费
  showInsureance: true, // 是否显示保单
  showFoudInfo: true,
  hasSaved: true,
  carInfo: {
    vinNum: '1N4AL2AP6BN504132',
    engineNum: 'aabb',
    carColor: '红色',
    licenseNum: '1234',
    driverLicenseBelong: '',
    carInvoiceCompany: 'aa',
    carInvoiceAmount: '130',
    addServiceInvoiceAmount: '120',
    carInvoiceDate: '2019-12-12',
    licenseProvinceCode: '340000',
    licenseCityCode: 'B',
    licenseSequence: '',
    carInvoiceSubject: '',
    carInvoiceSubjectName: '',
    carInvoiceBranchCompany: '',
    carInvoiceBranchCompanyName: ''
  }
})

export const baoxianInit = wrap({
  businessType: '0130000100000', // 车主融
  insuranceMode: '1', // 1、一次性 2、分年
  insuranceYear: 2,
  financialInsurance: false,
  firstBeneficiaryWhetherChange: '1',
  hasSaved: true,
  commercialInsurance: [
    {
      year: '1',
      insuranceCompanyName: '',
      insuranceCompany: '',
      policyNumber: '123',
      policyAmount: 'sss',
      policyStartDate: '',
      policyExpirationDate: '',
      commercialInsurancePeriod: 2
    }
  ],
  compulsoryInsurance: {
    insuranceCompanyName: '',
    policyNumber: '111',
    policyAmount: '120',
    policyStartDate: '2019-11-22',
    policyExpirationDate: '',
    compulsoryInsurance: '120'
  }
})

export const ticheInit = wrap({
  orderNo: '',
  isResourceCar: 1,
  liftCarUserName: 'alice',
  liftCarUserPhone: '13472740661',
  actualLiftCarTime: '',
  liftCarCertificateType: '',
  liftCarCertificateNo: '',
  startMileage: ''
})

export const usedCarReportInit = wrap({
  orderNo: '',
  carEstimatedPrice: 120000,
  carValuationPrice: 140000
})
export const baodanList = wrap([
  { 'pageSize': '',
    'start': '',
    'resultCount': '',
    data: [
      {
        'orderNo': 'xx',
        'approveStatus': 'xx',
        'custName': 'xx',
        'custPhone': 'xx',
        'certificateNo': 'xx',
        'endDate': 'xx',
        'remainingDays': 'xx',
        'delayStatus': 'xx',
        'operatingButton': 'xx',
        'operatingCode': 'xx',
        'operatingName': 'xx'
      }
    ]
  }
])
