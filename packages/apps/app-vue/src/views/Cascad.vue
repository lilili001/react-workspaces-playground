<template>
  <VblLayout>
    <Form :model="formData" ref="formData" class="margin-b-10" :label-width="130">
      <h2 id="a1" class="anc">基本用法</h2>
      <span class="font14">MCascad 组件可用于 省市区 , 省市地址, 车牌号, 二级联动</span>
      <Card>
        <Row :gutter="4">
          <Col :xs="24" :md="24">
            <Form-item label="省市区" class="psq" prop="cascadData"
                       :rules="{validator: $validators.cascad.validator('省市区').validator  }">
              <MCascad :cascadOptions="cascadOptions" @cascadChange="cascadChange"
                       v-model="formData.cascadData"></MCascad>
            </Form-item>
          </Col>
        </Row>
      </Card>
      <pre v-highlightjs=""><code>
      &lt;template&gt;
          &lt;Form :model="formData" ref="formData" class="margin-b-10" :label-width="130"&gt;
            &lt;Card&gt;
              &lt;Row&gt;
                &lt;Col :xs="24" :md="16"&gt;
                  &lt;Form-item label="省市区" class="psq"  prop="cascadData" :rules="{validator: $validators.cascad.validator('省市区').validator  }"&gt;
                    &lt;MCascad :cascadOptions="cascadOptions"  @cascadChange="cascadChange" v-model="formData.cascadData"&gt;&lt;/MCascad&gt;
                  &lt;/Form-item&gt;
                &lt;/Col&gt;
              &lt;/Row&gt;
            &lt;/Card&gt;

          &lt;/Form&gt;
      &lt;/template&gt;
      &lt;script&gt;
        import provinceList from "../mock/provinceList";
        import cityList from "../mock/cityList";
        import areaList from "../mock/areaList";
          export default {
              name: "CarLicensePage",
              data(){
                  return {
                      formData:{
                          cascadData:[]
                      },
                      cascadOptions:[] //选项列表
                  }
              },
              methods:{
                  cascadChange(index,val){
                    //校验
                    this.$refs.formData.validateField('cascadData');

                     //如果是一级 则请求二级
                      switch (index) {
                          case 0:
                              //请求二级 设置options
                              this.cascadOptions[1] = cityList;
                              break;
                          case 1:
                              //如果有三级则请求三级
                              this.cascadOptions[2] = areaList;
                      }
                  }
              },
              created(){
                  this.cascadOptions[0] = provinceList;
              }
          }
      &lt;/script&gt;

      </code></pre>

      <h2 id="a2" class="anc margin-t-20">省市地址</h2>
      <Card>
        <Row :gutter="16">
          <Col :xs="24" :md="16">
            <Form-item label="省市区" class="psq" prop="cascadData1"
                       :rules="{validator: $validators.cascad.validator('省市区').validator  }">
              <MCascad :cascadOptions="cascadOptions" :hasThirdSelectField="hasThirdSelectField" hasAddress
                       @cascadChange="cascadChange1" v-model="formData.cascadData1"></MCascad>
            </Form-item>
          </Col>
        </Row>
      </Card>
      <pre v-highlightjs=""><code>
        &lt;template&gt;
            &lt;Form :model="formData" ref="formData" class="margin-b-10" :label-width="130"&gt;
              &lt;h2 id="a2" class="anc margin-t-20"&gt;省市地址&lt;/h2&gt;
              &lt;Card&gt;
                &lt;Row&gt;
                  &lt;Col :xs="24" :md="16"&gt;
                    &lt;Form-item label="省市区" class="psq"  prop="cascadData1" :rules="{validator: $validators.cascad.validator('省市区').validator  }"&gt;
                      &lt;MCascad :cascadOptions="cascadOptions" :hasThirdSelectField="hasThirdSelectField" hasAddress  @cascadChange="cascadChange1" v-model="formData.cascadData1"&gt;&lt;/MCascad&gt;
                    &lt;/Form-item&gt;
                  &lt;/Col&gt;
                &lt;/Row&gt;
              &lt;/Card&gt;
            &lt;/Form&gt;
        &lt;/template&gt;
        &lt;script&gt;
          import provinceList from "../mock/provinceList";
          import cityList from "../mock/cityList";
          import areaList from "../mock/areaList";
            export default {
                name: "CarLicensePage",
                data(){
                    return {
                        hasThirdSelectField:false,
                        formData:{
                            cascadData1:[]
                        },
                        cascadOptions:[] //选项列表
                    }
                },
                methods:{
                    cascadChange1(index,val){
                        this.$refs.formData.validateField('cascadData1');
                        this.setOptions(index,val);
                    },
                    setOptions(index,val){
                        //如果是一级 则请求二级
                        switch (index) {
                            case 0:
                                //请求二级 设置options
                                this.cascadOptions[1] = cityList;
                                break;
                            case 1:
                                //如果有三级则请求三级
                                this.cascadOptions[2] = areaList;
                        }
                    }
                },
                created(){
                    this.cascadOptions[0] = provinceList;
                }
            }
        &lt;/script&gt;
      </code></pre>

      <h2 id="a3" class="anc margin-t-20">两级联动</h2>
      <Card>
        <Row>
          <Col :xs="24" :md="16">
            <Form-item label="省市区" class="psq" prop="cascadData2"
                       :rules="{validator: $validators.cascad.validator('省市区',2).validator  }">
              <MCascad :cascadOptions="cascadOptions" :hasThirdSelectField="hasThirdSelectField"
                       @cascadChange="cascadChange2" v-model="formData.cascadData2"></MCascad>
            </Form-item>
          </Col>
        </Row>
      </Card>
      <pre v-highlightjs=""><code>
        &lt;template&gt;
          &lt;Form :model="formData" ref="formData" class="margin-b-10" :label-width="130"&gt;
            &lt;h2 id="a2" class="anc margin-t-20"&gt;两级联动&lt;/h2&gt;
            &lt;Card&gt;
              &lt;Row&gt;
                &lt;Col :xs="24" :md="16"&gt;
                    &lt;Form-item label="省市区" class="psq"  prop="cascadData2" :rules="{validator: $validators.cascad.validator('省市区',2).validator  }"&gt;
          &lt;MCascad :cascadOptions="cascadOptions" :hasThirdSelectField="hasThirdSelectField" @cascadChange="cascadChange2" v-model="formData.cascadData2"&gt;&lt;/MCascad&gt;
        &lt;/Form-item&gt;
                &lt;/Col&gt;
              &lt;/Row&gt;
            &lt;/Card&gt;
          &lt;/Form&gt;
      &lt;/template&gt;

&lt;script&gt;
  import provinceList from "../mock/provinceList";
  import cityList from "../mock/cityList";
  import areaList from "../mock/areaList";
    export default {
        name: "CarLicensePage",
        data(){
            return {
                hasThirdSelectField:false,
                formData:{
                    cascadData:[],
                    cascadData1:[],
                    cascadData2:[]
                },
                cascadOptions:[] //选项列表
            }
        },
        methods:{
            cascadChange(index,val){
              this.$refs.formData.validateField('cascadData');
              this.setOptions(index,val);
            },
            cascadChange1(index,val){
                this.$refs.formData.validateField('cascadData1');
                this.setOptions(index,val);
            },
            cascadChange2(index,val){
                this.$refs.formData.validateField('cascadData2');
                this.setOptions(index,val);
            },
            setOptions(index,val){
                //如果是一级 则请求二级
                switch (index) {
                    case 0:
                        //请求二级 设置options
                        this.cascadOptions[1] = cityList;
                        break;
                    case 1:
                        //如果有三级则请求三级
                        this.cascadOptions[2] = areaList;
                }
            }
        },
        created(){
            this.cascadOptions[0] = provinceList;
        }
    }
&lt;/script&gt;
      </code></pre>
      <h2 id="a5" class="anc margin-t-20">返回name和value</h2>
      <Card>
        <Row>
          <Col :xs="24" :md="16">
            <Form-item label="省市区" class="psq" prop="cascadData3"
                       :rules="{validator: $validators.cascad.validator('省市区',2).validator  }">
              <MCascad :cascadOptions="cascadOptions" labelInValue :hasThirdSelectField="hasThirdSelectField"
                       @cascadChange="cascadChange3" v-model="formData.cascadData3"></MCascad>
            </Form-item>
          </Col>
        </Row>
      </Card>
      设置labelInValue 属性可以在组件更改的时候获取对象{value:'',label:''}
    </Form>

    <h2 id="a4" class="anc">api</h2>
    <Card>
      <a slot="title">属性</a>
      <MTable :tableData="tableData"></MTable>
    </Card>

    <Card class="margin-t-20">
      <a slot="title">event</a>
      <ETable :tableData="tableData1"></ETable>
    </Card>

  </VblLayout>
</template>

<script>
import provinceList from '../mock/provinceList'
import cityList from '../mock/cityList'
import areaList from '../mock/areaList'

export default {
  name: 'CarLicensePage',
  data () {
    return {
      hasThirdSelectField: false,
      formData: {
        cascadData: [],
        cascadData1: [],
        cascadData2: [],
        cascadData3: []
      },
      cascadOptions: [],
      tableData: [
        {
          attr: 'dictCode',
          desc: '自定义option的value字段',
          type: 'string',
          defaultValue: 'dictCode'
        },
        {
          attr: 'dictName',
          desc: '自定义option的Name字段',
          type: 'string',
          defaultValue: 'dictName'
        },
        {
          attr: 'cascadOptions',
          desc: '级联options列表,',
          type: 'array',
          defaultValue: '[[],[],[]]'
        },
        {
          attr: 'hasThirdSelectField',
          desc: '是否有第三个下拉,',
          type: 'Boolean',
          defaultValue: true
        },
        {
          attr: 'hasAddress',
          desc: '是否有地址,',
          type: 'Boolean',
          defaultValue: false
        },
        {
          attr: 'labelInValue',
          desc: '用于select的将name和value一起返出去,',
          type: 'Boolean',
          defaultValue: false
        }
      ],
      tableData1: [
        {
          attr: 'cascadChange',
          desc: 'Mcascad 改变的时候触发',
          returnValue: 'index(当前改变的是第几项),value'
        }
      ]
    }
  },
  methods: {
    cascadChange (index, val) {
      this.$refs.formData.validateField('cascadData')
      this.setOptions(index, val)
    },
    cascadChange1 (index, val) {
      this.$refs.formData.validateField('cascadData1')
      this.setOptions(index, val)
    },
    cascadChange2 (index, val) {
      this.$refs.formData.validateField('cascadData2')
      this.setOptions(index, val)
    },
    cascadChange3 (index, val) {
      console.log(val)
      this.$refs.formData.validateField('cascadData3')
      this.setOptions(index, val)
    },
    setOptions (index, val) {
      // 如果是一级 则请求二级
      switch (index) {
        case 0:
          // 请求二级 设置options
          this.cascadOptions[1] = cityList
          break
        case 1:
          // 如果有三级则请求三级
          this.cascadOptions[2] = areaList
      }
    }
  },
  created () {
    this.cascadOptions[0] = provinceList
  }
}
</script>
