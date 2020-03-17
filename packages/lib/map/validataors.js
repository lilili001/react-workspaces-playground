const yx = {
    trim(str) {
        if (typeof str === 'string')
            return str.replace(/(^\s*)|(\s*$)/g, "");
        return str;
    },
    //是否为空
    isEmpty(value) {
        var str = yx.trim(value);
        return str === undefined || str === null || str === '';
    },
}
const bankCardCheck = (value) => {
    var str_cardNo = String(value || '');
    if ("" == str_cardNo.trim() || undefined == str_cardNo) {
        return false;
    }
    var lastNum = str_cardNo.substr(str_cardNo.length - 1, 1); //取出最后一位（与luhm进行比较）

    var first15Num = str_cardNo.substr(0, str_cardNo.length - 1); //前15或18位
    var newArr = new Array();
    for (var i = first15Num.length - 1; i > -1; i--) { //前15或18位倒序存进数组
        newArr.push(first15Num.substr(i, 1));
    }
    var arrJiShu = new Array(); //奇数位*2的积 <9
    var arrJiShu2 = new Array(); //奇数位*2的积 >9

    var arrOuShu = new Array(); //偶数位数组
    for (var j = 0; j < newArr.length; j++) {
        if ((j + 1) % 2 == 1) { //奇数位
            if (parseInt(newArr[j]) * 2 < 9)
                arrJiShu.push(parseInt(newArr[j]) * 2);
            else
                arrJiShu2.push(parseInt(newArr[j]) * 2);
        } else //偶数位
            arrOuShu.push(newArr[j]);
    }

    var jishu_child1 = new Array(); //奇数位*2 >9 的分割之后的数组个位数
    var jishu_child2 = new Array(); //奇数位*2 >9 的分割之后的数组十位数
    for (var h = 0; h < arrJiShu2.length; h++) {
        jishu_child1.push(parseInt(arrJiShu2[h]) % 10);
        jishu_child2.push(parseInt(arrJiShu2[h]) / 10);
    }

    var sumJiShu = 0; //奇数位*2 < 9 的数组之和
    var sumOuShu = 0; //偶数位数组之和
    var sumJiShuChild1 = 0; //奇数位*2 >9 的分割之后的数组个位数之和
    var sumJiShuChild2 = 0; //奇数位*2 >9 的分割之后的数组十位数之和
    var sumTotal = 0;
    for (var m = 0; m < arrJiShu.length; m++) {
        sumJiShu = sumJiShu + parseInt(arrJiShu[m]);
    }

    for (var n = 0; n < arrOuShu.length; n++) {
        sumOuShu = sumOuShu + parseInt(arrOuShu[n]);
    }

    for (var p = 0; p < jishu_child1.length; p++) {
        sumJiShuChild1 = sumJiShuChild1 + parseInt(jishu_child1[p]);
        sumJiShuChild2 = sumJiShuChild2 + parseInt(jishu_child2[p]);
    }
    //计算总和
    sumTotal = parseInt(sumJiShu) + parseInt(sumOuShu) + parseInt(sumJiShuChild1) + parseInt(sumJiShuChild2);

    //计算Luhm值
    var k = parseInt(sumTotal) % 10 == 0 ? 10 : parseInt(sumTotal) % 10;
    var luhm = 10 - k;

    if (lastNum == luhm) {
        return true;
    } else {
        return false;
    }
}
export const validators = {
    required: {
        name: '是否必须',
        validator(name, type) {
            return {
                validator(rule, value, callback) {
                    if (value === '' || value === null || value === undefined||value instanceof Array&&value.length==0) {
                        callback(new Error(`${name}不能为空`));
                    } else {
                        callback();
                    }
                },
                trigger: type === 'input' ? 'blur' : 'change'
            }
        },
    },
    cascad: {
        name: '级联',
        validator(name, num=3) {
            return {
                validator(rule, value, callback) {
                    value = _.filter(value,v=>v!=null && v!='');
                    if(value.length < num ){
                        callback(new Error(`请正确填写${name}`));
                    }else{
                        callback();
                    }
                },
                trigger: 'cascadChange'
            }
        },
    },
    interger: {
        name: '整数',
        validator() {
            return {
                validator(rule, value, callback) {
                    console.log(value,1212)
                    if (!/^([1-9]\d*|0)$/.test(value)) {
                        callback(new Error('仅支持正整数'));
                    } else {
                        callback();
                    }
                },
                trigger: 'blur'
            }
        },
    },
    intergerIsNull: {//正整数可以为空
        name: '整数',
        validator(min,max) {
            return {
                validator(rule, value, callback) {
                    if (!/^([1-9]\d*|0)$/.test(value)&&value.length!=0) {
                        callback(new Error('仅支持正整数'));
                    } 
                    if (min && value < min) {
                        callback(new Error(`数字必须大于${min}`));
                        return;
                    }
                    if (max && value > max) {
                        callback(new Error(`数字必须小于${max}`));
                        return;
                    }
                    else {
                        callback();
                    }
                },
                trigger: 'blur'
            }
        },
    },
    smsCode:{
      name:'验证码',
      validator(){
          return {
              validator(rule, value, callback) {
                  if ( !/^[0-9]{6}$/.test(value)  ) {
                      callback(new Error(`验证码只能为6位验证码`));
                  } else {
                      callback();
                  }
              },
          }
      }
    },
    number: {
        name: '数字',
        validator() {
            return {
                validator(rule, value, callback, min, max) {
                    if (!/^([0-9]\d*)$/.test(value)) {
                        callback(new Error('仅支持数字'));
                        return;
                    }
                    if (min && value < min) {
                        callback(new Error(`数字必须大于${min}`));
                        return;
                    }
                    if (max && value > max) {
                        callback(new Error(`数字必须小于${max}`));
                        return;
                    }
                    callback();
                },
                trigger: 'blur'
            }
        }
    },
    positiveNumber: {
        name: '正整数',
                validator(rule, value, callback) {
                    if (!/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/.test(value)) {
                        callback(new Error('仅支持正数'));
                    } else {
                        callback();
                    }
                }

    },
    positiveNumberIsNull: {
        name: '正整数',
        validator(min, max){
            return {
                validator(rule, value, callback) {
                    if (!/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/.test(value)&&value.length!=0) {
                        callback(new Error('仅支持正数'));
                    }
                    if (min && value < min) {
                        callback(new Error(`数字必须大于${min}`));
                        return;
                    }
                    if (max && value > max) {
                        callback(new Error(`数字必须小于${max}`));
                        return;
                    }
                    else {
                        callback();
                    }
                }
            }
        }
    },
    //身份证
    cardNo: {
        name: '身份证',
        validator() {
            return {
                validator: (rule, value, callback) => {
                    var num = value.toUpperCase();           //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
                    if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num))) {
                        //this.$Message.info('输入的身份证号长度不对，或者号码不符合规定！\n15位号码应全为数字，18位号码末位可以为数字或X。');
                        //callback(new Error('身份证号长度不正确或不符合规定！'));
                        callback(new Error('请填写正确证件号码'));
                        return false;
                    }
                    //验证前2位，城市符合
                    var aCity = {
                        11: "北京",
                        12: "天津",
                        13: "河北",
                        14: "山西",
                        15: "内蒙古",
                        21: "辽宁",
                        22: "吉林",
                        23: "黑龙江 ",
                        31: "上海",
                        32: "江苏",
                        33: "浙江",
                        34: "安徽",
                        35: "福建",
                        36: "江西",
                        37: "山东",
                        41: "河南",
                        42: "湖北",
                        43: "湖南",
                        44: "广东",
                        45: "广西",
                        46: "海南",
                        50: "重庆",
                        51: "四川",
                        52: "贵州",
                        53: "云南",
                        54: "西藏",
                        61: "陕西",
                        62: "甘肃",
                        63: "青海",
                        64: "宁夏",
                        65: "新疆",
                        71: "台湾",
                        81: "香港",
                        82: "澳门",
                        91: "国外"
                    };
                    if (aCity[parseInt(num.substr(0, 2))] == null) {
                        //callback(new Error('身份证号不正确或不符合规定！'));
                        callback(new Error('请填写正确证件号码'));
                        return false;
                    }

                    //下面分别分析出生日期和校验位
                    var len, re;
                    len = num.length;
                    if (len == 15) {
                        re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
                        var arrSplit = num.match(re);  //检查生日日期是否正确
                        var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
                        var bGoodDay;
                        bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
                        if (!bGoodDay) {
                            //callback(new Error('身份证号的出生日期不对！'));
                            callback(new Error('请填写正确证件号码'));
                            return false;
                        } else { //将15位身份证转成18位 //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
                            var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
                            var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
                            var nTemp = 0, i;
                            num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6);
                            for (i = 0; i < 17; i++) {
                                nTemp += num.substr(i, 1) * arrInt[i];
                            }
                            num += arrCh[nTemp % 11];
                            callback();
                            return true;
                        }
                    }
                    if (len == 18) {
                        re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
                        var arrSplit = num.match(re);  //检查生日日期是否正确
                        var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
                        var bGoodDay;
                        bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
                        if (!bGoodDay) {
                            //alert(dtmBirth.getYear());
                            //this.$Message.info(arrSplit[2]);
                            //callback(new Error('身份证号的出生日期不对！'))
                            callback(new Error('请填写正确证件号码'))
                            return false;
                        }
                        else { //检验18位身份证的校验码是否正确。 //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
                            var valnum;
                            var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
                            var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
                            var nTemp = 0, i;
                            for (i = 0; i < 17; i++) {
                                nTemp += num.substr(i, 1) * arrInt[i];
                            }
                            valnum = arrCh[nTemp % 11];
                            if (valnum != num.substr(17, 1)) {
                                //this.$Message.info('18位身份证的校验码不正确！应该为：' + valnum);
                                //callback(new Error('18位身份证号的校验码不正确！'));
                                callback(new Error('请填写正确证件号码'));
                                return false;
                            }
                            callback();
                            return true;
                        }
                    }
                },
                trigger: 'blur'
            }
        }
    },
    // 手机号码验证，11位手机号码，第二位为3,4,5,6,7,8,9   固定电话或手机号
    mobile: {
        name: '手机号',
        validator() {
            return {
                validator: (rule, value, callback) => {
                    var n = (String(value).split('-')).length - 1; //-的个数
                    if (n == 1 && /^0\d{2,3}-[1-9]\d{6,7}$/.test(value)) { //区号加7-8位数字
                        callback();
                    } else if (n == 2 && /^0\d{2,3}-[1-9]\d{6,7}-\d{1,6}$/.test(value)) { //区号加7-8位数字加1-6位分机
                        callback();
                    } else if (/^1[3|4|5|6|7|8|9]\d{9}$/.test(value)) { // || /^[1-9]\d{6,7}$/.test(value)
                        callback(); //手机号或7-8位数字
                    } else {
                        callback(new Error('请填写正确联系方式'))
                    }
                },
                trigger: 'blur'
            }
        }
    },
    // 车架号
    isVehicleVin: {
        name: '车架号',
        validator() {
            return {
                validator: (rule, vin, callback) => {
                    if (yx.isEmpty(vin)) {
                        callback(new Error('请填写正确车架号'));
                        return false;
                    }
                    vin = vin.toLowerCase();
                    if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/.test(vin)) {
                        callback(new Error('请填写正确车架号'));
                        return false;
                    }

                    var transliterationTable = {
                        '0': 0,
                        '1': 1,
                        '2': 2,
                        '3': 3,
                        '4': 4,
                        '5': 5,
                        '6': 6,
                        '7': 7,
                        '8': 8,
                        '9': 9,
                        'a': 1,
                        'b': 2,
                        'c': 3,
                        'd': 4,
                        'e': 5,
                        'f': 6,
                        'g': 7,
                        'h': 8,
                        'j': 1,
                        'k': 2,
                        'l': 3,
                        'm': 4,
                        'n': 5,
                        'p': 7,
                        'r': 9,
                        's': 2,
                        't': 3,
                        'u': 4,
                        'v': 5,
                        'w': 6,
                        'x': 7,
                        'y': 8,
                        'z': 9
                    };

                    var weightsTable = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];
                    var sum = 0;

                    for (var i = 0; i < vin.length; ++i) {
                        sum += transliterationTable[vin.charAt(i)] * weightsTable[i];
                    }

                    var mod = sum % 11;

                    if (mod === 10) {
                        vin.charAt(8) === 'x' ? callback() : callback(new Error('请填写正确车架号'));
                    } else {
                        vin.charAt(8) == mod ? callback() : callback(new Error('请填写正确车架号'));
                    }

                    return mod === 10 ? vin.charAt(8) === 'x' : vin.charAt(8) == mod;
                }
            }
        }

    },
    changpaiModel:{
        name: '厂牌型号',
        //全中文
        validator() {
            return {
                validator: (rule, value, callback) => {
                    value = value || String(this);
                    if (/[\u4E00-\u9FA5|a-z]+/g.test(value)) {
                        callback(new Error('请正确填写厂牌型号'))
                    } else {
                        callback();
                    }
                }
            }
        }
    },
    isChinese: {
        name: '中文',
        //全中文
        validator() {
            return {
                validator: (rule, value, callback) => {
                    value = value || String(this);
                    if (!/^[\u4E00-\u9FA5]*$/.test(value)) {
                        callback(new Error('请填写中文'))
                    } else {
                        callback();
                    }
                }
            }
        }
    },
    numberAlphaAndChinese: {
        name: '数字字母汉字',
        validator() {
            return {
                validator: (rule, value, callback) => {
                    value = value || String(this);
                    if (!/^[\u4E00-\u9FA50-9a-zA-Z]*$/.test(value)) {
                        callback(new Error('仅支持数字字母汉字'))
                    } else {
                        callback();
                    }
                }
            }
        }
    },
    bankCard: {
        name: '银行卡号',
        validator() {
            return {
                validator: (rule, value, callback) => {
                    var valid = bankCardCheck(value);
                    if (valid)
                        callback()
                    else
                        callback(new Error('请填写正确银行卡号'))
                },
                trigger: 'blur',
            }
        }
    },
    engineNum: {
        name: '发动机号',
        validator() {
            return {
                validator: (rule, value, callback) => {
                    value = value || String(this);
                    if (!/^[0-9A-Z\\_\\-]+$/.test(value)) {
                        callback(new Error('请输入正确的发动机号'))
                    } else {
                        callback();
                    }
                },
                trigger: 'blur',
            }
        }
    },
}