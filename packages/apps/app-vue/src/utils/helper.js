import store from '@/store'
// import ImageOptim from '@/utils/ImageOptim';//引入压缩方法
// 帮助，全局判断字典码及多处调用的判断
export const yx = {
  trim (str) {
    if (typeof str === 'string') { return str.replace(/(^\s*)|(\s*$)/g, '') }
    return str
  },
  // 金额的正则
  amountReg: /^([1-9]\d*|[0])(\.\d{1,2})?$/,
  // amountReg: /^([1-9]\d{0,11}|[0])(\.\d{1,2})?$/,
  // 百分比的正则
  pctReg: /^([1-9]\d|\d)(\.\d{1,2})?$|^100(\.[0]{1,2})?$/,
  // 是否为空
  isEmpty (value) {
    var str = yx.trim(value)
    return str === undefined || str === null || str === ''
  },
  // 是否对象
  isObj: (obj) => {
    return Object.prototype.toString.call(obj) == '[object Object]'
  },
  // 是数组
  isArray: (arr) => {
    return Object.prototype.toString.call(arr) == '[object Array]'
  },
  decimal2 (num) {
    var result = parseFloat(num)
    if (isNaN(result)) {
      return ''
    }
    result = Math.round(num * 100) / 100
    var s_x = result + '' // 将数字转换为字符串

    var pos_decimal = s_x.indexOf('.') // 小数点的索引值

    // 当整数时，pos_decimal=-1 自动补0
    if (pos_decimal < 0) {
      pos_decimal = s_x.length
      s_x += '.'
    }

    // 当数字的长度< 小数点索引+2时，补0
    while (s_x.length <= pos_decimal + 2) {
      s_x += '0'
    }
    return s_x
  }
  // 压缩方法，只能压一次，继续压的话与压一次的大小基本相同
  /* optim(file, maxSize, cb) {//maxSize为字节数   file为blob格式的文件，cb回调传入的文件
          if (file.size > maxSize) {
              store.commit('app/showLoading');
              ImageOptim.optim({
                  blob: file,
                  progress: function (pct) {
                  }
              }, (newFile) => {
                  store.commit('app/hideLoading');
                  cb && cb(newFile)
              });
          } else {
              cb && cb(file)
          }
      }, */
}

// 数组只有一项
export const isOne = (arr) => arr && arr.length == 1
// 转换日期为字符串
export const transDateToString = (value) => {
  if (value) { return new Date(value).format('yyyy-MM-dd') }
  return ''
}
// 字符串转为数字类型
export const stringToNumber = (str) => {
  var num = parseFloat(str)
  num = isNaN(num) ? '' : parseFloat(num.toFixed(2))
  return num
}
// 数字转为字符串
export const numberToString = (number) => {
  var num = parseFloat(number)
  num = isNaN(num) ? 0 : num
  return num.toFixed(2)
}
// 加
export const floatAdd = (arg1, arg2) => {
  var r1, r2, m
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch
  (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  return (arg1 * m + arg2 * m) / m
}
// 减
export const floatSub = (arg1, arg2) => {
  var r1, r2, m, n
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  // 动态控制精度长度
  n = (r1 >= r2) ? r1 : r2
  return ((arg1 * m - arg2 * m) / m).toFixed(n)
}
// 乘
export const floatMul = (arg1, arg2) => {
  var m = 0; var s1 = arg1.toString(); var s2 = arg2.toString()
  try {
    m += s1.split('.')[1].length
  } catch
  (e) {
  }
  try {
    m += s2.split('.')[1].length
  } catch (e) {
  }
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
}
// 除
export const floatDiv = (arg1, arg2) => {
  var t1 = 0; var t2 = 0; var r1; var r2
  try {
    t1 = arg1.toString().split('.')[1].length
  } catch (e) {
  }
  try {
    t2 = arg2.toString().split('.')[1].length
  } catch (e) {
  }
  r1 = Number(arg1.toString().replace('.', ''))

  r2 = Number(arg2.toString().replace('.', ''))
  return (r1 / r2) * Math.pow(10, t2 - t1)
}
// 滚定到元素内对应位置
export const scrollTo = (el, total, ms) => {
  // el为滚动的元素，total为元素内目标位置的offsetTop
  if (el == document) el = 'html,body'
  $(el).animate({ scrollTop: total }, ms)
}

export default { scrollTo }
