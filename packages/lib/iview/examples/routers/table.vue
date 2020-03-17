<template>
    <div style="margin: 200px">
        <Divider>举例表格</Divider>
        <Table width="596" size="small" :columns="columns3" :data="data7"></Table>
        <Divider>举例表格大字</Divider>
        <Table width="596" border :columns="columns7" :data="data7"></Table>
        <Divider>举例表格不固定列</Divider>
        <Table width="596" border :columns="columns9" :data="data8"></Table>
        <Divider>合计</Divider>
        <Table size="small" border :columns="columns4" :data="data11" show-summary :height="200"></Table>
        <br>
        <Table border :columns="columns4" :data="data11" show-summary :height="200"></Table>
        <br>
        <Table size="large" border :columns="columns4" :data="data11" show-summary :height="200"></Table>
        <br>
        <Table border :columns="columns4" :data="data11" show-summary></Table>
        <br>
        <Table border :columns="columns5" :data="data11" show-summary></Table>
        <br>
        <Table border :columns="columns8" :data="data11" show-summary></Table>
        <br>
        <Table border :columns="columns5" :data="data11" show-summary :height="200"></Table>
        <Divider>合并单元格</Divider>
        <Table border :columns="columns1" :data="data1" :span-method="handleSpan"></Table>
        <br>
        <Table border :columns="columns1" :data="data1" :span-method="handleSpan2"></Table>
        <Divider>拖拽调整列宽</Divider>
        <Table border :columns="columns1" :data="data1"></Table>
        <Divider>排序筛选</Divider>
        <div style="margin: 0 0px;">
            <Table @on-column-width-resize="handleResize" border :columns="columns6" :data="data5"></Table>
        </div>
        <Divider>普通表格</Divider>
        <Table size="small" :columns="columns1" :data="data1"></Table>
        <br>
        <Table :columns="columns1" :data="data1"></Table>
        <br>
        <Table size="large" :columns="columns1" :data="data1"></Table>
        <Divider>斑马纹</Divider>
        <Table stripe :columns="columns1" :data="data1"></Table>
        <Divider>带边框</Divider>
        <Table border :columns="columns1" :data="data1"></Table>
        <Divider>头固定（普通）</Divider>
        <Table height="200" :columns="columns1" :data="data2"></Table>
        <Divider>头固定（边框）</Divider>
        <Table height="200" border :columns="columns1" :data="data2"></Table>
        <Divider>列固定（普通）</Divider>
        <Table width="550" :columns="columns2" :data="data3"></Table>
        <Divider>列固定（边框）</Divider>
        <Table width="550" border :columns="columns2" :data="data3"></Table>
        <Divider>都固定（普通）</Divider>
        <Table width="550" height="200" :columns="columns2" :data="data4"></Table>
        <Divider>都固定（边框）</Divider>
        <Table width="550" height="200" border :columns="columns2" :data="data4"></Table>
        <Divider>表头分组（普通）</Divider>
        <Table :columns="columns11" :data="data10" height="500"></Table>
        <Divider>表头分组（边框）</Divider>
        <Table border :columns="columns11" :data="data10" height="500"></Table>
        <Divider>筛选</Divider>
        <Table border :columns="columns6" :data="data5"></Table>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                columns4: [
                    {
                        title: 'ID',
                        key: 'id'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '数值 1',
                        key: 'amount1'
                    },
                    {
                        title: '数值 2',
                        key: 'amount2'
                    },
                    {
                        title: '数值 3',
                        key: 'amount3'
                    }
                ],
                columns5: [
                    {
                        title: 'ID',
                        key: 'id',
                        fixed: 'left',
                        width: 180
                    },
                    {
                        title: '姓名',
                        key: 'name',
                        width: 250
                    },
                    {
                        title: '数值 1',
                        key: 'amount1',
                        width: 250,
                        fixed: 'right'
                    },
                    {
                        title: '数值 2',
                        key: 'amount2',
                        width: 250
                    },
                    {
                        title: '数值 3',
                        key: 'amount3',
                        width: 180
                    }
                ],
                columns8: [
                    {
                        title: 'ID',
                        key: 'id',
                        fixed: 'left',
                        width: 180
                    },
                    {
                        title: '姓名',
                        key: 'name',
                    },
                    {
                        title: '数值 1',
                        key: 'amount1',
                        width: 250,
                        fixed: 'right'
                    },
                    {
                        title: '数值 2',
                        key: 'amount2',
                    },
                    {
                        title: '数值 3',
                        key: 'amount3',
                    }
                ],
                data11: [
                    {
                        id: '12987122',
                        name: '王小虎',
                        amount1: '234',
                        amount2: '3.2',
                        amount3: 10
                    }, {
                        id: '12987123',
                        name: '王小虎',
                        amount1: '165',
                        amount2: '4.43',
                        amount3: 12
                    }, {
                        id: '12987124',
                        name: '王小虎',
                        amount1: '324',
                        amount2: '1.9',
                        amount3: 9
                    }, {
                        id: '12987125',
                        name: '王小虎',
                        amount1: '621',
                        amount2: '2.2',
                        amount3: 17
                    }, {
                        id: '12987126',
                        name: '王小虎',
                        amount1: '539',
                        amount2: '4.1',
                        amount3: 15
                    }
                ],
                columns6: [
                    {
                        title: 'Date',
                        key: 'date',
                        sortable: true,
                        resizable: true,
                        width: 180,
                    },
                    {
                        title: 'Name',
                        key: 'name',
                        resizable: true,
                        width: 180,
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        sortable: true,
                        resizable: true,
                        width: 180,
                        filters: [
                            {
                                label: 'Greater than 25',
                                value: 1
                            },
                            {
                                label: 'Less than 25',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.age > 25;
                            } else if (value === 2) {
                                return row.age < 25;
                            }
                        }
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        filters: [
                            {
                                label: 'New York',
                                value: 'New York'
                            },
                            {
                                label: 'London',
                                value: 'London'
                            },
                            {
                                label: 'Sydney',
                                value: 'Sydney'
                            }
                        ],
                        filterMethod (value, row) {
                            return row.address.indexOf(value) > -1;
                        }
                    }
                ],
                data5: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    },
                    {
                        name: 'Jon Snow2',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    },
                    {
                        name: 'Jon Snow3',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    },
                    {
                        name: 'Jon Snow4',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
                data2: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    },
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
                columns2: [
                    {
                        title: 'Name',
                        key: 'name',
                        width: 100,
                        fixed: 'left'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        width: 100
                    },
                    {
                        title: 'Province',
                        key: 'province',
                        width: 100
                    },
                    {
                        title: 'City',
                        key: 'city',
                        width: 100
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width: 200
                    },
                    {
                        title: 'Postcode',
                        key: 'zip',
                        width: 100
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        fixed: 'right',
                        width: 120,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'Edit')
                            ]);
                        }
                    }
                ],
                columns3: [
                    {
                        title: '序号',
                        key: 'serial',
                        width: 70,
                        fixed: 'left'
                    },
                    {
                        title: '订单号',
                        key: 'number',
                        width: 100
                    },
                    {
                        title: '状态',
                        key: 'state',
                        width: 130
                    },
                    {
                        title: '姓名',
                        key: 'name',
                        width: 90
                    },
                    {
                        title: '手机号',
                        key: 'phone',
                        width: 110
                    },
                    {
                        title: '订单创建时间',
                        key: 'orderDate',
                        width: 100
                    },
                    {
                        title: '业务类型',
                        key: 'type',
                        width: 90
                    },
                    {
                        title: '产品方案名称',
                        key: 'productName',
                        width: 150
                    },
                    {
                        title: '身份证号',
                        key: 'IDcard',
                        width: 160
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        fixed: 'left',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                columns7 :[
                    {
                        title: '序号',
                        key: 'serial',
                        width: 70,
                        fixed: 'left'
                    },
                    {
                        title: '订单号',
                        key: 'number',
                        width: 100
                    },
                    {
                        title: '状态',
                        key: 'state',
                        width: 140
                    },
                    {
                        title: '姓名',
                        key: 'name',
                        width: 90
                    },
                    {
                        title: '手机号',
                        key: 'phone',
                        width: 130
                    },
                    {
                        title: '订单创建时间',
                        key: 'orderDate',
                        width: 110
                    },
                    {
                        title: '业务类型',
                        key: 'type',
                        width: 90
                    },
                    {
                        title: '产品方案名称',
                        key: 'productName',
                        width: 150
                    },
                    {
                        title: '身份证号',
                        key: 'IDcard',
                        width: 180
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        fixed: 'left',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, '重发短信'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, '发起预审')
                            ]);
                        }
                    }
                ],
                columns9 :[
                    {
                        title: '序号',
                        key: 'serial',
                        width: 70
                    },

                    {
                        title: '操作',
                        key: 'action',
                        width: 70,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, '选择')
                            ]);
                        }
                    },
                    {
                        title: '产品名称',
                        key: 'productName',
                        width: 210
                    },
                    {
                        title: '结算利率(%)',
                        key: 'number',
                        width: 120
                    },
                    {
                        title: '贷款期限(期)',
                        key: 'date',
                        width: 120
                    }

                ],

                data4: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        province: 'Australian',
                        city: 'Sydney',
                        zip: 100000
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    },
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        province: 'Australian',
                        city: 'Sydney',
                        zip: 100000
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    }
                ],
                data7: [
                    {
                        name: '刘华',
                        serial: 1,
                        number: '20191012',
                        state: '订单创建待提交',
                        phone: '13562511231',
                        orderDate: '2019-10-12',
                        type: '消费贷',
                        productName:'LCV（轻卡）产品',
                        IDcard: '310117187206112103'
                    },
                    {
                        name: '张涛',
                        serial: 2,
                        number: '20191009',
                        state: '订单创建待提交',
                        phone: '13562511231',
                        orderDate: '2019-10-12',
                        type: '消费贷',
                        productName:'LCV（轻卡）产品',
                        IDcard: '410329100403921392'
                    },
                    {
                        name: '李德华',
                        serial: 3,
                        number: '20191021',
                        state: '订单创建待提交',
                        phone: '13562511231',
                        orderDate: '2019-10-12',
                        type: '消费贷',
                        productName:'LCV（轻卡）产品',
                        IDcard: '410329100403921392'
                    },
                    {
                        name: '赵四',
                        serial: 4,
                        number: '20191112',
                        state: '订单创建待提交',
                        phone: '13562511231',
                        orderDate: '2019-10-12',
                        type: '消费贷',
                        productName:'LCV（轻卡）产品',
                        IDcard: '410329100403921392'
                    }
                ],
                data8: [
                    {
                        serial: 1,
                        number: '10.88~12.98',
                        productName:'LCV（轻卡）产品',
                        date: '23~26'
                    },
                    {
                        serial: 2,
                        number: '8.88',
                        productName:'LCV（轻卡）鑫享贷产品',
                        date: '14~36'
                    },
                    {
                        serial: 3,
                        number: '6.88',
                        productName:'LCV一证通产品',
                        date: '23~26'
                    },
                    {
                        serial: 4,
                        number: '4.88',
                        productName:'LCV（轻卡）产品',
                        date: '23~26'
                    }
                ],
                data6: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        province: 'Australian',
                        city: 'Sydney',
                        zip: 100000
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    }
                ],
                data3: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        province: 'Australian',
                        city: 'Sydney',
                        zip: 100000
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    }
                ],
                columns11: [
                    {
                        title: 'Name',
                        key: 'name',
                        align: 'center',
                        width: 200,
                        fixed: 'left',
                        filters: [
                            {
                                label: 'Joe',
                                value: 1
                            },
                            {
                                label: 'John',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.name === 'Joe';
                            } else if (value === 2) {
                                return row.name === 'John Brown';
                            }
                        }
                    },
                    {
                        title: 'Other',
                        align: 'center',
                        children: [
                            {
                                title: 'Age',
                                key: 'age',
                                align: 'center',
                                width: 200,
                                sortable: true
                            },
                            {
                                title: 'Address',
                                align: 'center',
                                children: [
                                    {
                                        title: 'Street',
                                        key: 'street',
                                        align: 'center',
                                        width: 200
                                    },
                                    {
                                        title: 'Block',
                                        align: 'center',
                                        children: [
                                            {
                                                title: 'Building',
                                                key: 'building',
                                                align: 'center',
                                                width: 200,
                                                sortable: true
                                            },
                                            {
                                                title: 'Door No.',
                                                key: 'door',
                                                align: 'center',
                                                width: 200
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: 'Company',
                        align: 'center',
                        children: [
                            {
                                title: 'Company Address',
                                key: 'caddress',
                                align: 'center',
                                width: 200
                            },
                            {
                                title: 'Company Name',
                                key: 'cname',
                                align: 'center',
                                width: 200
                            }
                        ]
                    },
                    {
                        title: 'Gender',
                        key: 'gender',
                        align: 'center',
                        width: 200,
                        fixed: 'right'
                    }
                ],
                data10: [
                    {
                        key:0,
                        name:'John Brown',
                        age:1,
                        street:'Lake Park',
                        building:'C',
                        door:2035,
                        caddress:'Lake Street 42',
                        cname:'SoftLake Co',
                        gender:'M'
                    },
                    {
                        key:0,
                        name:'John Brown',
                        age:1,
                        street:'Lake Park',
                        building:'C',
                        door:2035,
                        caddress:'Lake Street 42',
                        cname:'SoftLake Co',
                        gender:'M'
                    },
                    {
                        key:0,
                        name:'John Brown',
                        age:1,
                        street:'Lake Park',
                        building:'C',
                        door:2035,
                        caddress:'Lake Street 42',
                        cname:'SoftLake Co',
                        gender:'M'
                    }
                    ]
            }
        },
        methods: {
            handleResize (width) {
                console.log(width);
            },
            handleSpan ({ row, column, rowIndex, columnIndex }) {
                if (rowIndex % 2 === 0) {
                    if (columnIndex === 0) {
                        return [1, 2];
                    } else if (columnIndex === 1) {
                        return [0, 0];
                    }
                }
            },
            handleSpan2 ({ row, column, rowIndex, columnIndex }) {
                if (columnIndex === 0) {
                    if (rowIndex % 2 === 0) {
                        return {
                            rowspan: 2,
                            colspan: 1
                        };
                    } else {
                        return {
                            rowspan: 0,
                            colspan: 0
                        };
                    }
                }
            }

        }
    }
</script>
