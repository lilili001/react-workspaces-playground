/* eslint-disable */
import axios from 'axios'
import dictKeys from './dictKeys'
export function getDict (keys = [], vueObj) {
  var _this = this
  // 字典查询
  return new Promise((resolve, reject) => {
    const dictUrl = `/yxcode-gateway/base-server/dictionary/queryList`

    axios.post(dictUrl, {
      'keys': [  ...dictKeys, ...keys]
    }).then(async res => {
      if (res.data.code == 0 || res.data.success) {
        var dict = res.data.data;
        // 省列表用这个字典
         await vueObj.$api.provinceList().then(res=>{
                    if(res.success){
                        dict['AR:1'] = res.data;
                    }
                });

        if (dict.length == 0) {
          _this.$Message.error('字典查询为空')
        } else {
          var newObj = {}
          _.each(dict, (options, key) => {
            if (_.isEmpty(options) == false) {
              newObj[key] = (options)
            }
          })
          resolve(newObj)
        }
      } else {
        _this.$Message.error('字典出错')
      }
    })
  })
}
