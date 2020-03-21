import Vue from 'vue'
var obj = new Vue()
export const getRes = (res, fnSuccess, fnFail) => {
  const response = res
  const { data, code, message } = response
  if (code == 0 || res.success || res.status == 200) {
    fnSuccess && fnSuccess(data)
  } else {
    message && !fnFail && obj.$Message.error(message)
    fnFail && fnFail(message)
  }
}
/* 字典格式转为项目需要的格式 {name: '' , value: '' } */
export function formatArray (data) {
  var arr = []
  _.each(data, function (item, index) {
    arr.push({
      name: item.dictName,
      value: item.dictCode,
      parentCode: item.parentCode || null
    })
  })
  return arr
}
export function rfspace (val) {
  return val.replace(/\s/g, '')
}
/**
 * 函数防抖 (只执行最后一次点击)
 * @param fn
 * @param delay
 * @returns {Function}
 */
export const _debounce = (fn, delay = 200) => {
  var timer
  return function () {
    var th = this
    var args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function () {
      timer = null
      fn.apply(th, args)
    }, delay)
  }
}

/**
 * 判断两个对象是否相等
 * @param x
 * @param y
 * @returns {bool}
 */
export const equals = (x, y) => {
  var f1 = x instanceof Object
  var f2 = y instanceof Object
  if (!f1 || !f2) {
    return x === y
  }
  if (Object.keys(x).length !== Object.keys(y).length) {
    return false
  }
  var newX = Object.keys(x)
  for (var p in newX) {
    p = newX[p]
    var a = x[p] instanceof Object
    var b = y[p] instanceof Object
    if (a && b) {
      let equal = equals(x[p], y[p])
      if (!equal) {
        return equal
      }
    } else if (x[p] != y[p]) {
      return false
    }
  }
  return true
}

export function goBack (Obj) {
  var _this = Obj
  _this.$router.back()
}

export function initCover (initData, responseData) {
  // 初始化都是对象的 eg:formData:{}
  for (let attr in responseData) {
    var val = responseData[attr]
    if (val !== null) {
      initData[attr] = responseData[attr]
    }
  }
}

export function formatDate (v, format) {
  // v = toDate(v);
  if (v) {
    var o = {
      'M+': v.getMonth() + 1, // 月份
      'd+': v.getDate(), // 日
      'h+': v.getHours() % 12 == 0 ? 12 : v.getHours() % 12, // 小时
      'H+': v.getHours(), // 小时
      'm+': v.getMinutes(), // 分
      's+': v.getSeconds(), // 秒
      'q+': Math.floor((v.getMonth() + 3) / 3), // 季度
      'S': v.getMilliseconds() // 毫秒
    }
    var week = {
      '0': '\u65e5',
      '1': '\u4e00',
      '2': '\u4e8c',
      '3': '\u4e09',
      '4': '\u56db',
      '5': '\u4e94',
      '6': '\u516d'
    }
    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (v.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    if (/(E+)/.test(format)) {
      format = format.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '\u661f\u671f' : '\u5468') : '') + week[v.getDay() + ''])
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return format
  }
}


//b.c 转化为 {b:{c:""}}
//str:b.c
//a:{} //需要改变的对象 比如formData
//用法 transformStr2Obj( {},'b.c')
export function transformStr2Obj(a={},str) {
    var i = 0;
    var arr = str.split('.');
    var len = arr.length;
    var lastLevalObj = ""

    function test(obj){
        var attr = arr[i];
        if( i< len){
          if(!obj[attr]){
              if(i == len-1){
                  obj[attr] = "";
                  lastLevalObj = obj
              }else{
                  obj[attr]= {};
                  i++;
                  test(obj[attr])
              }
          }else{
              if(i==len-1){
                  lastLevalObj = obj;
              }
              i++;
              test(obj[attr])
          }
        }
    }
    test(a);
    return {
      orgObj:a,
      lastLevalObj:  lastLevalObj
    }
}