<template>
    <div>
        <vue-form-maker v-if="inited" :options="options" />
    </div>
</template>
<script>
    var orgOptions = {"formData":{},"formItem":[{"type":"group","index":0,"children":[{"type":"tabbar","label":"tabbar","className":"","key":"defaultActiveKey","id":"i18qgngyl8-1584846473756","data-pid":"1x1edlzu0qx1584846472777","props":{"span":24},"children":[{"type":"tabpane","label":"tab1","className":"bg-red","id":"","props":{"span":24},"events":{"onLoad":"this.$http['get']('http://rigel-server.astystore.com/api/posts?page=1').then(res=>{\n                         this.$set(this.options.formData,'base',{custName:'lala'})\n                    })\n                ","onSave":""},"initRequest":{"method":"get","url":"http://rigel-server.astystore.com/api/posts?page=1","params":"1"},"saveRequest":{"method":"","url":"","params":""},"children":[{"type":"input","label":"input","key":"base.custName","className":"","id":"bjainc619a-1584846476254","data-pid":"","props":{"span":8},"events":{"on-change":"","on-blur":""}}]},{"type":"tabpane","label":"tab2","className":"","key":"","id":"","data-pid":"","props":{"span":24},"events":{"onLoad":""},"initRequest":{"method":"","url":"","params":""},"saveRequest":{"method":"","url":"","params":""},"children":[]}]}],"id":"1x1edlzu0qx1584846472777","className":"","key":"","events":{"onLoad":""},"initRequest":{"method":"","url":"","params":""},"saveRequest":{"method":"","url":"","params":""}}],"formProps":{"label-width":60}}
    export default{
        name: "",
        computed:{
            isFemale(){
                return this.options.formData.gender == 'female'
            }
        },
        data(){
            return {
                inited : false,
                options:{
                    formData:{base:{}},//注意 base这层结构是一定要有的 不然无法赋值成功
                    formItem:[],
                    formProps:{labelWidth:60}
                }
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
            }
        },
        methods: {
            restructure(data){
              return  _.map(data,(item)=>{
                    if(item.events){
                        for (var event in item.events){
                            var aEvent = item.events[event];
                            item.events[event] = (new Function(aEvent)).bind(this);
                        }
                    }
                  if(item.children){
                      this.restructure(item.children)
                  }
                  return item;
                })
            },
            findInitFuncs(data){
                _.map(data,item=>{
                    if(item.events){
                        if(item.events['onLoad'] && typeof item.events['onLoad'] == 'function'){
                            item.events['onLoad']()
                        }
                    }
                    if(item.children){
                        this.findInitFuncs(item.children)
                    }
                    return item;
                })
            }
        },
        created(){
            const {formItem} = orgOptions;
            var a = this.restructure(formItem);
            this.inited = true;
            console.log(a)
            this.$set(this.options,'formItem',a);
            this.findInitFuncs(formItem)
        },
        mounted(){
           /* const {onLoad} = this.options.formItem[0]['events'];
            onLoad(this)*/
        }
    }
</script>
<style scoped lange="less">
</style>