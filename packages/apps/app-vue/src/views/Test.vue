<template>
    <div>
        <vue-form-maker :options="options" />
    </div>
</template>
<script>
    export default{
        name: "",
        computed:{
            isFemale(){
                return this.options.formData.gender == 'female'
            }
        },
        data(){
            return {
                /*options: {
                    // 表单属性 非必需
                    formProps:{
                        'label-width': 60
                    },
                    // 表单数据 必需
                    formData: {
                        accout: '我是帐号',
                        pwd: '',
                        mail: '',
                        gender: '',
                        msg: '',
                        phone: '',
                        color: 'red',
                        input1:'我是input1',
                        base:{
                            inputaaa:"aaa"
                        }
                    },
                    // 表单项组件数据 必需
                    formItem: [
                        {
                            type:"group",
                            text:"group",
                            className:"sdf",
                            key:"base",
                            props:{
                            },
                            events:{
                                'onLoad':()=>{
                                    console.log('我已经加载了')
                                }
                            },
                            children:[
                                {
                                    type:"tabbar",
                                    children:[
                                        {
                                            type:"tabpane",
                                            label:"111",
                                            children:[
                                                {
                                                    type:'input',
                                                    label:"ss",
                                                    text:'我是 span',
                                                    props:{
                                                        span:8
                                                    }
                                                },
                                                {
                                                    type:'input',
                                                    label:"sss",
                                                    text:'我是 span111',
                                                    props:{
                                                        span:8
                                                    }
                                                },
                                            ]
                                        },
                                        {
                                            type:"tabpane",
                                            label:"222",
                                            children:[
                                                {
                                                    type:'input',
                                                    label:"222ss",
                                                    text:'我是 span',
                                                    props:{
                                                        span:8
                                                    }
                                                },
                                                {
                                                    type:'input',
                                                    label:"222sss",
                                                    text:'我是 span111',
                                                    props:{
                                                        span:8
                                                    }
                                                },
                                            ]
                                        }
                                    ]
                                },

                                {
                                    type: 'input',
                                    label:"input1",
                                    key:"inputaaa",
                                    props: {
                                        placeholder: '占满半行aaa',
                                        span:8
                                    },
                                },
                                {
                                    type: 'input',
                                    label:"input2",
                                    key:"input2",
                                    props: {
                                        placeholder: '占满半行',
                                        span:8
                                    },
                                }
                            ]
                        },
                        {
                            label:"城市",
                            type: 'select',
                            key: 'city',
                            props:{
                                span:8
                            },
                            children: [
                                {
                                    label: '天津',
                                    value: 'tianjin'
                                },
                                {
                                    value: 'shenzhen',
                                    disabled: true,
                                    label: '深圳'
                                },
                                {
                                    label: '韶关',
                                    value: 'shaoguan'
                                },
                            ]
                        },
                        {
                            type: 'input',
                            key: 'accout',
                            label: '账号',
                            props: {
                                span:8,
                                placeholder: '请输入账号...',
                                disabled: false,
                            },
                            events: {
                                'on-change': function(e) {
                                    console.log('ssss');
                                    alert(e.target.value)
                                }
                            },
                            rules: {
                                required: true,
                                message: '请输入账号',
                                trigger: 'blur'
                            }
                        },
                        {
                            type: 'input',
                            key: 'pwd',
                            label: '密码',
                            props: {
                                placeholder: '请输入密码...',
                                type: 'password'
                            },
                            rules: {
                                required: true,
                                message: '请输入密码',
                                trigger: 'blur'
                            }
                        },
                        {
                            type: 'input',
                            key: 'mail',
                            label: '邮箱',
                            props: {
                                placeholder: '请输入邮箱...',
                            },
                            rules: {
                                required: true,
                                message: '请输入邮箱',
                                trigger: 'blur'
                            }
                        },
                        {
                            type: 'radioGroup',
                            key: 'gender',
                            label: '性别',
                            children: [
                                {
                                    label: 'female',
                                    text:'女'
                                },
                                {
                                    label: 'male',
                                    text:'男',
                                },
                            ],
                            events: {
                                'on-change': function(e) {
                                    this.options.formItem[1]['props']['disabled'] = e=='female'
                                }
                            },
                            rules: {
                                required: true,
                                message: '请选择性别',
                                trigger: 'change'
                            },
                            props:{
                                events: {
                                    'on-change': function(e) {
                                        alert(e.target.value)
                                    }
                                }
                            }
                        },
                        {
                            type: 'radioGroup',
                            label: '水果',
                            key:'fruit',
                            props: {
                                type: 'button'
                            },
                            children: [
                                {
                                    label: 'bananer',
                                    text:"ss"
                                },
                                {
                                    label: '苹果',
                                },
                                {
                                    label: '西瓜',
                                }
                            ]
                        },
                        {
                            type: 'input',
                            key: 'phone',
                            label: '手机',
                            props: {
                                placeholder: '请输入手机号...',
                            },
                            rules: {
                                required: true,
                                trigger: 'blur',
                                validator(rule, value, callback) {
                                    if (value === '') {
                                        callback(new Error('请输入手机号'))
                                    } else if (value.length != 11) {
                                        callback(new Error('请输入正确的手机号'))
                                    } else {
                                        callback()
                                    }
                                }
                            }
                        },
                        {
                            type: 'input',
                            label: '留言',
                            key: 'msg',
                            props: {
                                placeholder: '留言...',
                                type: 'textarea'
                            },
                            rules: {
                                required: true,
                                trigger: 'blur',
                                message: '请留下您宝贵的意见'
                            }
                        },
                        {
                            type:"tabbar",
                            key:"tabbar",
                            children:[
                                {
                                    type:"tabpane",
                                    props:{
                                        label:"tab1",
                                        name:'11'
                                    },
                                    children:[
                                        {
                                            type:"input",
                                            label:'input1',
                                            key:'input1',
                                            class:"flex",
                                            props:{
                                                span:8
                                            },
                                            rules: {
                                                required: true,
                                                trigger: 'blur',
                                                message: 'required'
                                            }
                                        },
                                        {
                                            type:"input",
                                            label:'input2',
                                            key:'input2',
                                            props:{
                                                span:8
                                            },
                                            rules: {
                                                required: true,
                                                trigger: 'blur',
                                                message: 'required'
                                            }
                                        }
                                    ]
                                },
                                {
                                    type:"tabpane",
                                    props:{
                                        label:"tab2",
                                        name:'22'
                                    },
                                    children:[
                                        {
                                            type:"input",
                                            label:'input2',
                                            key:'input2',
                                            props:{
                                                span:8
                                            },
                                            rules: {
                                                required: true,
                                                trigger: 'blur',
                                                message: 'required 111'
                                            }
                                        }
                                    ]
                                },
                            ]
                        }
                    ],
                    // 提交按钮 必需
                    submit:{
                        text: '提交',
                        props: {
                            type: 'primary'
                        },
                        success(formData) {
                            alert(JSON.stringify(formData))
                        },
                        fail(formData) {
                            alert('验证失败')
                        }
                    }
                }*/
                options:{"formData":{},"formItem":[{"type":"group","index":0,"children":[{"type":"input","label":"input","key":"base.custName","className":"","id":"14s2hs4m4tc-1584778577376","data-pid":"1ywqydhqyxq1584778565726","props":{"span":8},"events":{}}],"id":"1ywqydhqyxq1584778565726","className":"","key":"","events":{},"initRequest":{"method":"","url":"","params":""},"saveRequest":{"method":"","url":"","params":""}}],"formProps":{"label-width":60}}
            }
        },
        methods: {
            findOnLoad(data){
                const _this = this;
                _.find(data,(item)=>{
                    if(item.events && !!item.events['onLoad']){
                            item.events.onLoad();
                        if(item.children){
                            _this.findOnLoad(item.children)
                        }
                        return item;
                    }
                })
            },
        },

        created(){

        },
        mounted(){
            const {formItem} = this.options;
            //this.findOnLoad(formItem)
        }
    }
</script>
<style scoped lange="less">
</style>