<template>
    <div>
        <div style="margin: 30px 0;">
            <Button @click="custom">确认提交</Button>
            <Button @click="customDetel">确认删除</Button>
        </div>
        <div style="margin: 30px 0;">
            <Button @click="instance('success')">Success</Button>
            <Button @click="instance('error')">Error</Button>
        </div>
        <div style="margin: 30px 0;">
        <Button type="primary" @click="modal1 = true">Display dialog box</Button>
        <Modal
                v-model="modal1"
                title="Common Modal dialog box title"
                @on-ok="ok"
                @on-cancel="cancel">
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <Button @click="openMessage">Message</Button>
            <Select v-model="model1" style="width:200px" :transfer="false">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <Select v-model="model1" style="width:200px" :transfer="true">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <Dropdown transfer>
                <a href="javascript:void(0)"> 下拉菜单<Icon type="ios-arrow-down"></Icon></a>
                <DropdownMenu slot="list">
                    <DropdownItem>驴打滚</DropdownItem>
                    <DropdownItem>炸酱面</DropdownItem>
                    <DropdownItem disabled>豆汁儿</DropdownItem>
                    <DropdownItem>冰糖葫芦</DropdownItem>
                    <DropdownItem divided>北京烤鸭</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <DatePicker type="date" placeholder="Select date" style="width: 200px" transfer></DatePicker>
            <Cascader :data="data" v-model="value1" transfer></Cascader>
            <Tooltip content="Here is the prompt text" transfer>
                A balloon appears when the mouse passes over this text
            </Tooltip>
            <Poptip trigger="hover" title="Title" content="content" transfer>
                <Button>Hover</Button>
            </Poptip>
            <Button type="primary" @click="handleSpinShow">整页显示，3秒后关闭</Button>
        </Modal>
        </div>
        <div style="margin: 30px 0;">
            <Button type="primary" @click="modal2 = true">授权信息</Button>
            <Modal
                    v-model="modal2"
                    title="授权信息"
                    @on-ok="ok">
                <h3>已发送短信至：<span>136 5195 7075</span> </h3>
                <p>请提醒用户尽快完成授权！返回订单列表后可查看授权进度~</p>
            </Modal>
        </div>
        <div style="margin: 30px 0;">
            <Button type="primary" @click="modal3 = true">新增合同模板</Button>
            <Modal
                    v-model="modal3"
                    title="新增合同模板"
                    @on-ok="ok"
                    @on-cancel="cancel">
                <Form :label-width="100">
                    <FormItem label="模板类型">
                        <Select v-model="model1" style="width:200px" :transfer="false">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="合同主体">
                        <Select v-model="model1" style="width:200px" :transfer="false">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="合同主体">
                        <Select v-model="model1" style="width:200px" :transfer="false">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </FormItem>
                </Form>
                <p>最近选择的产品<Tag color="default">LCV（轻卡）产品</Tag><Tag color="default">LCV（轻卡）产品</Tag></p>
            </Modal>
        </div>
        <Select v-model="model1" style="width:200px" :transfer="false">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select v-model="model1" style="width:200px" :transfer="true">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                modal1: false,
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model1: '',
                modal2: '',
                modal3: '',
                value1: [],
                data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }]
            }
        },
        methods: {
            instance (type) {
                const title = 'Title';
                switch (type) {
                    case 'success':
                        this.$Modal.success({
                            title: title,
                            content: '<p>提交成功！</p>',
                            width: 319
                        });
                        break;
                    case 'error':
                        this.$Modal.error({
                            title: title,
                            content: '<p>提交失败！</p>',
                            width: 319
                        });
                        break;
                }
            },
            custom () {
                this.$Modal.confirm({
                    title: 'Title',
                    content: '<p>确定提交？</p>',
                    width: 319,
                    okText: '确定',
                    cancelText: '取消'
                });
            },
            customDetel () {
                this.$Modal.confirm({
                    title: 'Title',
                    content: '<p>确定删除？</p>',
                    width: 319,
                    okText: '确定',
                    cancelText: '取消'
                });
            },
            ok () {
//                this.$Message.info('Clicked ok');
            },
            cancel () {
//                this.$Message.info('Clicked cancel');
            },
            openMessage () {
                this.$Message.info({
                    content: 'hello world',
                    duration: 2
                });
            },
            handleSpinShow () {
                this.$Spin.show();
            },
        }
    }
</script>
