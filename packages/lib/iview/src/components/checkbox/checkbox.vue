<template>
    <label :class="wrapClasses">
        <span :class="checkboxClasses">
            <span :class="innerClasses" style=":none; box-shadow:none!important; border-color: #d9d9d9" :style="{ width: inputSize+'px', height: inputSize+'px', background: disabled?'#F2F2F2':'none'}"></span>
            <input
                v-if="group"
                type="checkbox"
                :class="inputClasses"
                :disabled="itemDisabled"
                :value="label"
                v-model="model"
                :name="name"
                @change="change"
                @focus="onFocus"
                @blur="onBlur">
            <input
                v-else
                type="checkbox"
                :class="inputClasses"
                :disabled="itemDisabled"
                :checked="currentValue"
                :name="name"
                @change="change"
                @focus="onFocus"
                @blur="onBlur">

            <Icon type="iconfont iconfont icongouxuan" class="custom-icon" :class="{'disabled-color': disabled}"  v-show="currentValue"  :style="{ fontSize: inputSize+'px' }"/>
            <Icon type="iconfont iconfont iconsc-icon1" class="custom-icon" :class="{'disabled-indeterminate': disabled}" v-show="indeterminate"  :style="{ fontSize: inputSize+'px' }"/>
            <Icon type="iconfont iconfont icondg" class="custom-icon" :class="{'disabled-color': disabled}"  v-show="currentValue && disabled" style="background:#f3f3f3; color:#d6d6d6"  :style="{ fontSize: inputSize+'px' }"/>
        </span>
        <slot><span v-if="showSlot">{{ label }}</span></slot>
    </label>
</template>
<style lang="less" scoped>
    .custom-icon{
        position: absolute;
        left: 0;
        top: 0;
        font-size: 12px;
        z-index: 100;
        color: #1890FF
    }
    .disabled-color{
        color:#f3f3f3;
        border: 1px solid #d9d9d9;
        font-size: 12px;
        border-radius: 2px;
    }
    .disabled-indeterminate{
        color: #d9d9d9
    }
</style>
<script>
    import { findComponentUpward, oneOf } from '../../utils/assist';
    import Emitter from '../../mixins/emitter';
    import mixinsForm from '../../mixins/form';

    const prefixCls = 'ivu-checkbox';

    export default {
        name: 'Checkbox',
        mixins: [ Emitter, mixinsForm ],
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            value: {
                type: [String, Number, Boolean],
                default: false
            },
            trueValue: {
                type: [String, Number, Boolean],
                default: true
            },
            falseValue: {
                type: [String, Number, Boolean],
                default: false
            },
            label: {
                type: [String, Number, Boolean]
            },
            indeterminate: {
                type: Boolean,
                default: false
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                },
                default () {
                    return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
                }
            },
            name: {
                type: String
            },
            // 4.0.0
            border: {
                type: Boolean,
                default: false
            },
            inputSize:{
                type: Number,
                default: 12
            },
        },
        data () {
            return {
                model: [],
                currentValue: this.value,
                group: false,
                showSlot: true,
                parent: findComponentUpward(this, 'CheckboxGroup'),
                focusInner: false
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-group-item`]: this.group,
                        [`${prefixCls}-wrapper-checked`]: this.currentValue,
                        [`${prefixCls}-wrapper-disabled`]: this.itemDisabled,
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-border`]: this.border
                    }
                ];
            },
            checkboxClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-checked`]: this.currentValue,
                        [`${prefixCls}-disabled`]: this.itemDisabled,
                        [`${prefixCls}-indeterminate`]: this.indeterminate
                    }
                ];
            },
            innerClasses () {
                return [
                    `${prefixCls}-inner`,
                    {
                        [`${prefixCls}-focus`]: this.focusInner
                    }
                ];
            },
            inputClasses () {
                return `${prefixCls}-input`;
            }
        },
        mounted () {
            this.parent = findComponentUpward(this, 'CheckboxGroup');
            if (this.parent) {
                this.group = true;
            }

            if (this.group) {
                this.parent.updateModel(true);
            } else {
                this.updateModel();
                this.showSlot = this.$slots.default !== undefined;
            }
        },
        methods: {
            change (event) {
                if (this.itemDisabled) {
                    return false;
                }

                const checked = event.target.checked;
                this.currentValue = checked;

                const value = checked ? this.trueValue : this.falseValue;
                this.$emit('input', value);

                if (this.group) {
                    this.parent.change(this.model);
                } else {
                    this.$emit('on-change', value);
                    this.dispatch('FormItem', 'on-form-change', value);
                }
            },
            updateModel () {
                this.currentValue = this.value === this.trueValue;
            },
            onBlur () {
                this.focusInner = false;
            },
            onFocus () {
                this.focusInner = true;
            }
        },
        watch: {
            value (val) {
                if (val === this.trueValue || val === this.falseValue) {
                    this.updateModel();
                } else {
                    throw 'Value should be trueValue or falseValue.';
                }
            }
        }
    };
</script>
