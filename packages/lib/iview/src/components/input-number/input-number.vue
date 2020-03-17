<template>
    <div :class="wrapClasses">
        <i class="ivu-icon"
           :class="['ivu-icon-md-close', prefixCls + '-icon', prefixCls + '-icon-clear' , prefixCls + '-icon-normal']"
           v-if="clearable && !readonly && !disabled && !isEmpty(currentValue)" @click.stop="handleClear"></i>

        <div :class="handlerClasses">
            <a
                    @click="up"
                    :class="upClasses">
                <span :class="innerUpClasses" @click="preventDefault"></span>
            </a>
            <a
                    @click="down"
                    :class="downClasses">
                <span :class="innerDownClasses" @click="preventDefault"></span>
            </a>
        </div>
        <div :class="inputWrapClasses">
            <input
                    ref="input"
                    :id="elementId"
                    :class="inputClasses"
                    :disabled="disabled"
                    autocomplete="off"
                    spellcheck="false"
                    :autofocus="autofocus"
                    @focus="focus"
                    @blur="blur"
                    @keydown.stop="keyDown"
                    @input="change"
                    @mouseup="preventDefault"
                    @change="change"
                    :readonly="readonly || !editable"
                    :name="name"
                    :value="formatterValue"
                    :placeholder="placeholder">
        </div>
    </div>
</template>
<script>
    import {oneOf, findComponentUpward} from '../../utils/assist';
    import Emitter from '../../mixins/emitter';

    const prefixCls = 'ivu-input-number';
    const iconPrefixCls = 'ivu-icon';

    function addNum(num1, num2) {
        let sq1, sq2, m;
        try {
            sq1 = num1.toString().split('.')[1].length;
        }
        catch (e) {
            sq1 = 0;
        }
        try {
            sq2 = num2.toString().split('.')[1].length;
        }
        catch (e) {
            sq2 = 0;
        }
//        if (sq1 === 0 || sq2 === 0) {
//            return num1 + num2;
//        } else {
//            m = Math.pow(10, Math.max(sq1, sq2));
//            return (num1 * m + num2 * m) / m;
//        }
        m = Math.pow(10, Math.max(sq1, sq2));
        return (Math.round(num1 * m) + Math.round(num2 * m)) / m;
    }

    export default {
        name: 'InputNumber',
        mixins: [Emitter],
        props: {
            noborderInit:{
                type: Boolean,
                default: false
            },
            noformatter:{
                type: Boolean,
                default: false
            },
            max: {
                type: Number,
                default: 1000000000, //新增修改，因为默认的Infinity超过1000000000时就会错乱
                //default: Infinity
            },
            min: {
                type: Number,
                default: -1000000000, //新增修改，因为默认的Infinity超过-1000000000时就会错乱
                //default: -Infinity
            },
            step: {
                type: Number,
                default: 1
            },
            activeChange: {
                type: Boolean,
                default: true
            },
            value: {
                type: [Number, String],//允许了字符串类型
                // default: null
            },
            size: {
                validator(value) {
                    return oneOf(value, ['small', 'large', 'default']);
                },
                default() {
                    return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
                }
            },
            disabled: {
                type: Boolean,
                default: false
            },
            autofocus: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            editable: {
                type: Boolean,
                default: true
            },
            name: {
                type: String
            },
            precision: {
                type: Number
            },
            elementId: {
                type: String
            },
            formatter: {
                type: Function
            },
            parser: {
                type: Function
            },
            placeholder: {
                type: String,
                default: ''
            },
            clearable: {
                type: Boolean,
                default: true
            },
            //新增自定义属性
            defaultFormatter: {
                type: Boolean,
                default: true
            },
        },
        data() {
            return {
                prefixCls: 'ivu-input',
                focused: false,
                upDisabled: false,
                downDisabled: false,
                currentValue: this.value,
                noBorder:this.noborderInit,
                hasPadding:false
            };
        },
        computed: {
            wrapClasses() {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-disabled`]: this.disabled,
                        [`${prefixCls}-focused`]: this.focused,
                        ['noBorder']:this.noBorder,
                        ['padding-l-8']: this.noborderInit && this.hasPadding,
                        ['padding-l-0']: this.noborderInit && !this.hasPadding
                    }
                ];
            },
            handlerClasses() {
                return `${prefixCls}-handler-wrap`;
            },
            upClasses() {
                return [
                    `${prefixCls}-handler`,
                    `${prefixCls}-handler-up`,
                    {
                        [`${prefixCls}-handler-up-disabled`]: this.upDisabled
                    }
                ];
            },
            innerUpClasses() {
                return `${prefixCls}-handler-up-inner ${iconPrefixCls} ${iconPrefixCls}-ios-arrow-up`;
            },
            downClasses() {
                return [
                    `${prefixCls}-handler`,
                    `${prefixCls}-handler-down`,
                    {
                        [`${prefixCls}-handler-down-disabled`]: this.downDisabled
                    }
                ];
            },
            innerDownClasses() {
                return `${prefixCls}-handler-down-inner ${iconPrefixCls} ${iconPrefixCls}-ios-arrow-down`;
            },
            inputWrapClasses() {
                return `${prefixCls}-input-wrap`;
            },
            inputClasses() {
                return `${prefixCls}-input`;
            },
            precisionValue() {
                // can not display 1.0
                if (!this.currentValue) return this.currentValue;
                return this.precision ? this.currentValue.toFixed(this.precision) : this.currentValue;
            },
            formatterValue() {
                //如果是noformatter 直接返回
                if(this.noformatter) return this.precisionValue;
                //聚焦编辑时还原数字无逗号
                if (this.focused && this.defaultFormatter) return '' + this.parserAmount(this.precisionValue);
                if (this.formatter && this.precisionValue !== null) {
                    return this.formatter(this.precisionValue);
                } else if (this.defaultFormatter) {
                    return this.formatterAmount(this.precisionValue);
                } else {
                    return this.precisionValue;
                }
            }
        },
        methods: {
            //新增方法  去掉空格
            trim(str) {
                if (typeof str === 'string')
                    return str.replace(/(^\s*)|(\s*$)/g, '');
                return str;
            },
            //新增方法   是否为空
            isEmpty(value) {
                var str = this.trim(value);
                return str === undefined || str === null || str === '';
            },
            //新增两个默认方法
            formatterAmount(value) {
                if (this.isEmpty(value)) return null;
                if (value === '-') return '-';//允许负数
                value = String(value);
                var numVal = parseFloat(value) | 0; //转成数字类型
                var intPartFormat = numVal.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); //将整数部分逢三一断
                var value2Array = value.split('.');
                //=2表示数据有小数位
                if (value2Array.length == 2) {
                    var tempVal = Number('0.' + value2Array[1]);
                    var tempArr = tempVal.toFixed(2).toString().split('.');
                    var floatPart = tempArr[1].toString(); //拿到小数部分
                    //var floatPart = value2Array[1].toString(); //拿到小数部分
                    if (floatPart.length == 1) { //补0,实际上用不着
                        return intPartFormat + '.' + floatPart + '0';
                    } else {
                        return intPartFormat + '.' + floatPart;
                    }
                } else {
                    return intPartFormat + '.00';
                }
            },
            parserAmount(value) {
                if (this.isEmpty(value)) return '';
                if (value === '-') return '-';//允许负数
                var val = String(value).replace(/\$\s?|(,*)/g, '');
                val = Number(Number(val).toFixed(2));
                return val;
            },
            preventDefault(e) {
                e.preventDefault();
            },
            up(e) {
                const targetVal = Number(e.target.value);
                if (this.upDisabled && isNaN(targetVal)) {
                    return false;
                }
                this.changeStep('up', e);
            },
            down(e) {
                const targetVal = Number(e.target.value);
                if (this.downDisabled && isNaN(targetVal)) {
                    return false;
                }
                this.changeStep('down', e);
            },
            changeStep(type, e) {
                if (this.disabled || this.readonly) {
                    return false;
                }

                const targetVal = Number(e.target.value);
                let val = Number(this.currentValue);
                const step = Number(this.step);
                if (isNaN(val)) {
                    return false;
                }

                // input a number, and key up or down
                if (!isNaN(targetVal)) {
                    if (type === 'up') {
                        if (addNum(targetVal, step) <= this.max) {
                            val = targetVal;
                        } else {
                            return false;
                        }
                    } else if (type === 'down') {
                        if (addNum(targetVal, -step) >= this.min) {
                            val = targetVal;
                        } else {
                            return false;
                        }
                    }
                }

                if (type === 'up') {
                    val = addNum(val, step);
                } else if (type === 'down') {
                    val = addNum(val, -step);
                }
                this.setValue(val);
            },
            setValue(val) {
                // 如果 step 是小数，且没有设置 precision，是有问题的
                if (val && !isNaN(this.precision)) val = Number(Number(val).toFixed(this.precision));

                const {min, max} = this;
                if (val !== null) {
                    if (val > max) {
                        val = max;
                    } else if (val < min) {
                        val = min;
                    }
                }

                this.$nextTick(() => {
                    this.currentValue = val;
                    this.$emit('input', val);
                    this.$emit('on-change', val);
                    this.dispatch('FormItem', 'on-form-change', val);
                });
            },
            focus(event) {
                this.focused = true;
                if(this.noborderInit){
                    this.hasPadding = true;
                    this.noBorder = false;
                }
                this.$emit('on-focus', event);
            },
            blur(event) {
                this.focused = false;
                if(this.noborderInit){
                    this.hasPadding = false;
                    this.noBorder = true;
                }
                this.$emit('on-blur', event);
                if (!findComponentUpward(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
                    this.dispatch('FormItem', 'on-form-blur', this.currentValue);
                }
            },
            //增加的事件
            handleClear(event) {
                const e = {target: {value: ''}};
                this.$refs.input.focus();
                this.setValue('');
                this.$nextTick(() => {
                    this.$emit('on-clear', {target: this.$refs.input});
                });
            },
            keyDown(e) {
                if (e.keyCode === 38) {
                    e.preventDefault();
                    this.up(e);
                } else if (e.keyCode === 40) {
                    e.preventDefault();
                    this.down(e);
                }
            },
            change(event) {

                if (event.type == 'input' && !this.activeChange) return;
                let val = event.target.value.trim();
                if (this.parser) {
                    val = this.parser(val);
                } else if (this.defaultFormatter) {
                    val = '' + this.parserAmount(val);
                }

                const isEmptyString = val === null || val.length === 0;
                if (isEmptyString) {
                    this.setValue(null);
                    return;
                }
                if (event.type == 'input' && val.match(/^\-?\.?$|\.$/)) return; // prevent fire early if decimal. If no more input the change event will fire later

                val = Number(val);

                if (!isNaN(val)) {
                    this.currentValue = val;
                    this.setValue(val);
                } else {
                    event.target.value = this.currentValue;
                }
            },
            changeVal(val) {
                val = Number(val);
                if (!isNaN(val)) {
                    const step = this.step;

                    this.upDisabled = val + step > this.max;
                    this.downDisabled = val - step < this.min;
                } else {
                    this.upDisabled = true;
                    this.downDisabled = true;
                }
            }
        },
        mounted() {
            this.changeVal(this.currentValue);
        },
        watch: {
            value(val) {
                this.currentValue = val;
            },
            currentValue(val) {
                this.changeVal(val);
            },
            min() {
                this.changeVal(this.currentValue);
            },
            max() {
                this.changeVal(this.currentValue);
            }
        }
    };
</script>

