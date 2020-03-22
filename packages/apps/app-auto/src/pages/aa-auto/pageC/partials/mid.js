/**
 * Created by miyaye on 2020/3/17.
 */
import React, {Component} from 'react';
import { Row,Col, Form, Icon, Input,Select, Button, Checkbox,Divider ,Tabs  } from 'antd';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {addClass, canclebubble, guid, hasClass} from '../../../../utils/utils'
const { TabPane } = Tabs;
const {Option} = Select;

@connect((store) => {
    return {
        user:store.userReducer.user,
        app:store.app,
    };
})
class MyComponent extends Component {
    static displayName="PageConfig";
    state={
        pageData:{
            pageTitle:"",//页面名称
            pagePath:"",//vue 路由
            pageRouteName:"",//路由名称
            pageParams:[],//路由params参数
            pageQuerys:[],//路由query参数
            breadCrumb:"" //页面面包屑
        },
        //options 是最终数据 包括初始化数据和配置
        options:this.props.app.options,
        coms:[
            {
                type:'input',
                label:'input',
                key:"",
                className:"",
                id:"",
                "data-pid":"",
                props:{
                    span:8
                },
                events:{
                    "on-change":'',
                    "on-blur":''
                }
            },
            {
                type:'select',
                label:'select',
                key:"",
                className:"",
                id:"",
                "data-pid":"",
                props:{
                    span:8
                },
                events:{
                    "on-change":'',
                    "on-blur":''
                }
            },
            {
                type:'tabbar',
                label:"tabbar",
                className:"tabbar",
                key:"defaultActiveKey",
                id:"",
                "data-pid":"",
                props:{
                    span:24
                },
                children:[
                    {
                        type:"tabpane",
                        label:"tab1",
                        className:"",
                        id:"",
                        props:{
                            span:24,
                        },
                        events:{
                            onLoad:'',
                            onSave:''
                        },
                        initRequest:{
                            method:"",
                            url:"",
                            params:''
                        },
                        saveRequest:{
                            method:"",
                            url:"",
                            params:""
                        },
                        children:[

                        ]
                    },
                    {
                        type:"tabpane",
                        label:"tab2",
                        className:"",
                        key:"",
                        id:"",
                        "data-pid":"",
                        props:{
                            span:24,
                        },
                        events:{
                            onLoad:''
                        },
                        initRequest:{
                            method:"",
                            url:"",
                            params:""
                        },
                        saveRequest:{
                            method:"",
                            url:"",
                            params:""
                        },
                        children:[

                        ]
                    },
                ]
            }
        ],
        lastEnterEle:""
    };

    constructor(props, context) {
        super(props, context);
    }

    addGroup(){
        const {formItem} = this.state.options;
        var index = formItem.length;
        formItem.push({
            type:'group',
            index:index,children:[],
            id:guid() +''+Date.now(),
            className:"group"+formItem.length,
            key:"",
            events:{onLoad:''},
            initRequest:{
                method:"",
                url:"",
                params:""
            },
            saveRequest:{
                method:"",
                url:"",
                params:""
            },
        });
        const {options} = this.state;
        options['formItem'] = formItem;
        this.setState({options})
    }
    liDragStart(menuItem){
        var ev = window.event;
        canclebubble(ev);
        menuItem = _.cloneDeep(menuItem);
        menuItem['id'] = guid()+'-'+Date.now();
        this.setState({dragItem:menuItem})
        //ev.dataTransfer.setData('comData',JSON.stringify(item));
    }
    dragEnter(item){
        var ev = window.event;
        const {target} = ev;
        item['className'] = 'bg-red';
        const {options,index} = this.getGroup(ev);
        document.title = 'enter'
        this.setState({options,lastEnterEle:target});
    }
    dragOver(item){
        var ev = window.event;
        const {target} = ev;
        ev.preventDefault();
        document.title='over'
    }
    dragleave(item){
        var ev = window.event;
        const {target} = ev;
        if(target === this.state.lastEnterEle){
            console.log('dragleave')
            item['className'] = 'bg-f3';
        }
        document.title='leave'
        const {options,index} = this.getGroup(ev);
        this.setState({options});
    }
    drop(item,ev){
        document.title='drop'
        var ev = ev ||  window.event;
        ev.preventDefault();
        canclebubble(ev)
        const {dragItem:evData} = this.state;
        var {options,index} = this.getGroup(ev);

        item['className'] = 'bg-f3';
        //插入配置到当前group中

        evData['data-pid'] = item.id;
        item['children'].push(evData);

        this.resetClass();

        this.setState({options,dragItem:null});
        this.props.dispatch({type:'setData',payload:{ key:'curItem' , value: evData }})
    }
    resetClass(defaultClassName=""){
        const {options:{formItem}} = this.state;
        function reset(formItem) {
            formItem.map(item=>{
                item.className = defaultClassName;
                if(item.children){
                    reset(item.children);
                }
                return item;
            });
        }
        reset(formItem);
    }

    getGroup(ev,cb){
        const {target} = ev;
        let index = target.getAttribute('data-index');
        const {options} = this.state;
        return {options,index}
    }
    fnClick(item ,ev){
        this.props.dispatch({type:'setData',payload:{ key:'curItem' , value: null }})
        var ev = ev || window.event;
        const {options} = this.state;
        ev.preventDefault();
        canclebubble(ev);
        this.resetClass('');

        item.className='bg-red';

        this.setState({options},()=>{
            this.props.dispatch({type:'setData',payload:{ key:'curItem' , value: item }})
        })
    }
    render() {
        const {formItem} = this.state.options;

        const getCom = (item,index)=>{
            var com;
            switch (item.type){
                case 'group': case 'tabpane':
                    com = <Row
                               className={'group drag-zone '+item.className}
                               data-index={index}
                               onClick={this.fnClick.bind(this,item)}
                               onDragOver={this.dragOver.bind(this,item)}
                               onDragEnter={this.dragEnter.bind(this,item)}
                               onDragLeave={this.dragleave.bind(this,item)}
                               onDrop={this.drop.bind(this,item)}
                    >
                        {item.children.map((child,index)=>
                            <Col className={'col '+ child.className }
                                 onClick={this.fnClick.bind(this,child)}
                                 span={child.props['span'] || 24}
                                 key={index}>{getCom(child,index)}
                            </Col>
                        )}
                    </Row>
                    break;
                case 'input':
                    com = <Form.Item name={item.key} label={item.label}><Input /></Form.Item>;
                    break;
                case 'select':
                    com = <Form.Item name={item.key} label={item.label} >
                        <Select placeholder="Select a option and change input text above" allowClear  >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                        </Select>
                    </Form.Item>
                    break;

                case 'tabbar':
                    com = <Tabs defaultActiveKey="1" onClick={this.fnClick.bind(this,item)} className={item.className}>
                        {item.children.map((tabpane,index)=> <TabPane tab={tabpane.label} key={index}>{getCom(tabpane,index)}</TabPane> )}
                    </Tabs>
                    break;
            }
            return com
        }

        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };
        return (
                <Form {...layout} name="basic">
                    <div className="flex align-start">
                        <ul>
                            {this.state.coms.map((menuItem,index)=>
                                <li
                                    onDragStart={this.liDragStart.bind(this,menuItem)}
                                    draggable key={index}>{menuItem.label}
                                </li>)}
                        </ul>

                        <div id="div1">
                            <Button size="small" className="pull-right" onClick={this.addGroup.bind(this)}>新建分组</Button>
                            {formItem.map((item,index)=> <div key={index} className="group-container">{getCom(item,index)}</div> )}
                        </div>
                    </div>
                </Form>
        );
    }
}

MyComponent.propTypes = {};

export default MyComponent;
