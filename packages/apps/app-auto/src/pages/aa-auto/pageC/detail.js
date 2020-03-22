import React,{Component} from 'react'
import { Row,Col, Form, Icon, Input,Select, Button, Checkbox,Divider } from 'antd';
import { connect } from 'react-redux';
import {formItemLayout,tailFormItemLayout} from '@/utils'
const {TextArea} = Input;
const {Option} = Select;
import * as api from '@/services/api'
import {getRes} from "@/utils";
import Coms from './partials/coms'
import Mid from './partials/mid'
import {transformStr2Obj} from "../../../utils/utils";
@connect(({user,app}) => {
    return {user,app};
})
@Form.create()
class Detail extends Component {
    static displayName='Detail';
    state = {
        title:'',
        detail:{},
        curItem:{},
        isEdit:!!this.props.match.params.id,
        catDict:[]
    };

    constructor(props, context) {
        super(props, context);
    }
    async componentDidMount(){
        this.setState({curItem:this.props.app.curItem})
    }
    goBack(){
        this.props.history.go(-1)
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields( async (err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                values.detail['locale'] = this.props.app.lng;
                if(this.state.isEdit){
                    const res = await api.update(this.state.id,values.detail);
                    getRes(res,()=>this.goBack());
                }else{
                    const res = await api.store(values.detail);
                    getRes(res,()=>this.goBack());
                }
            }
        });
    };
    changZd(zd,obj,ev){
        var ev = ev || window.event;
        var name = ev.target.name;

        const {curItem} = this.props.app;

        obj[zd] = ev.target.value;
        this.props.dispatch({type:'setData',payload:{ key:'curItem' , value: curItem }})

        if(name.indexOf('.')>0){
            var pzd = name.split('.')[0];
            if(pzd == 'initRequest' && _.every(curItem[pzd])){
                const {method,url,params} = curItem[pzd];
                curItem['events']['onLoad'] =  `this.$http['${method}']('${url}').then(res=>{
                         this.$set(this.options.formData,'base',{custName:'lala'})
                    })
                `
            }
        }
        this.props.dispatch({type:'setData',payload:{ key:'curItem' , value: curItem }});
        this.setState({curItem})
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const {curItem} = this.props.app;
        var detail = curItem;
        var curItemKeys = curItem && Object.keys(curItem) || [];
        const getCom = (keys=[],obj=curItem , isObj = false, pzd)=>{
          return  keys.map((zd,idx)=>{
                if(zd=='children') return;
                if( obj[zd].constructor === Object){
                        var newKeys = Object.keys(obj[zd]);
                        if(newKeys && newKeys.length>0){
                            return  <div key={idx}><Divider>{zd}</Divider>{getCom(newKeys,obj[zd] , true , zd)}</div>
                        }
                }else{
                  return isObj ?  <Form.Item key={idx} label={zd}>
                        {getFieldDecorator('detail.'+pzd+'.'+zd, {
                            rules: [{ required: true, message: '请输入!' }],
                            initialValue: obj[zd].toString()
                        })(
                             <TextArea name={pzd+'.'+zd} rows={1} type="textarea"  onChange={this.changZd.bind(this,zd,obj)} placeholder={'请输入'+zd}/>
                        )}
                    </Form.Item> :
                      <Form.Item key={idx} label={zd}>
                          {getFieldDecorator('detail.'+zd, {
                              rules: [{ required: true, message: '请输入!' }],
                              initialValue: obj[zd]
                          })(
                              <Input disabled={zd=='type'} name={zd}  onChange={this.changZd.bind(this,zd,obj)} placeholder={'请输入'+zd}/>
                          )}
                      </Form.Item>
                }
            })
        };
        return (
            <div>
                <Row className="bg-shadow padding-tb-10 padding-lr-20" type="flex" justify="space-between">
                    <h3 className="ti">{this.state.title} </h3>
                    <div>
                        <Button onClick={this.goBack.bind(this)}>返回</Button>
                        <Button onClick={this.handleSubmit.bind(this)} type="primary" className="margin-l-10"> 预览 </Button>
                        <Button onClick={this.handleSubmit.bind(this)} type="primary" className="margin-l-10"> 保存 </Button>
                        <Button onClick={this.handleSubmit.bind(this)} type="primary" className="margin-l-10"> 发布 </Button>
                    </div>
                </Row>
                <Row className="bg-shadow margin-t-10 padding-24">
                        <Col className=" padding-10 vh100" span={20}><Mid/></Col>
                        <Col span={4}>
                            <div>{this.props.app['curItem'] && this.props.app.curItem.label} -- {this.props.app['curItem'] && this.props.app.curItem.key} </div>
                            <Form {...formItemLayout(8)}>
                                {getCom(curItemKeys)}
                            </Form>
                        </Col>
                </Row>
            </div>
        );
    }
}
export default Detail;