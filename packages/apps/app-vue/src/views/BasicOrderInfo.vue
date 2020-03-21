<template>
    <VblLayout>
      <h2 id="a1" class="anc">1.基本用法</h2>
      <MBaseInfo :orderInfo="orderInfo"/>
      <pre v-highlightjs=""><code>
        &lt;MBaseInfo  :orderInfo="orderInfo"&gt;&lt;/MBaseInfo&gt;
        ```
        &lt;script&gt;
        export default {
           data(){
            return {
                orderInfo:[
                    {label:'申请编号',value:'4299979955'},
                    {label:'个人',value:'欧阳一中'},
                    {label:'手机号码',value:'18774677788'},
                    {label:'主体',value:'天津恒通'},
                    {label:'金融顾问',value:'陈飞燕'},
                    {label:'产品方案',value:'奥迪舒鑫融新车直营产品（HD）'},
                    {label:'渠道',value:'上海驭杰汽车销售有限公司'},
                    {label:'意向车型 ',value:'奥迪进口 奥迪A3(进口) 2.0T 双离合 Sportback 45TFSI S-line运动型'},
                ],
            }
          },
        }
        &lt;/script&gt;
      </code></pre>

      <h2><p class="anc margin-t-20" id="api">2.api</p></h2>
      <Card>
        <MTable :tableData="tableData"></MTable>
      </Card>

    </VblLayout>
</template>

<script>
export default {
  name: 'BasicOrderInfo',
  data () {
    return {
      orderInfo: [
        { label: '申请编号', value: '4299979955' },
        { label: '个人', value: '欧阳一中' },
        { label: '手机号码', value: '18774677788' },
        { label: '主体', value: '天津恒通' },
        { label: '金融顾问', value: '陈飞燕' },
        { label: '产品方案', value: '奥迪舒鑫融新车直营产品（HD）' },
        { label: '渠道', value: '上海驭杰汽车销售有限公司' },
        { label: '意向车型 ', value: '奥迪进口 奥迪A3(进口) 2.0T 双离合 Sportback 45TFSI S-line运动型' }
      ],
      tableData: [
        {
          attr: 'orderInfo',
          desc: '订单基本信息',
          type: 'array',
          defaultValue: []
        }
      ]
    }
  },

  mounted () {

  }
}
</script>

<style scoped>

</style>
