<template>
  <VblLayout>
    <Row>
      <h2><p id="basic_usage" class="anc">1.基础用法</p></h2>
      <MApplySteps class="margin-t-20"></MApplySteps>

      <pre v-highlightjs=""><code>
         &lt;MApplySteps&gt;&lt;/MApplySteps&gt;
      </code></pre>

      <h2><p id="a2" class="anc margin-t-20">2.自定义步骤条数据</p></h2>
      <MApplySteps :activeStep="activeStep" :stepArr="stepArr"></MApplySteps>

      <pre v-highlightjs><code>
           &lt;MApplySteps :activeStep="activeStep" :stepArr="stepArr"&gt;&lt;/MApplySteps&gt;
          ```
           &lt;script&gt;
            export default {
                data(){
                  return {
                    stepArr:[
                      {step:'aa',title:'aa',icon:'iconyushen'},
                      {step:'bb',title:'bb',icon:'iconyushen'},
                      {step:'cc',title:'cc',icon:'iconyushen'},
                  ],
               }
              }
            }
          &lt;/script&gt;

        </code></pre>

      <h2><p id="api" class="anc margin-t-20">api</p></h2>
      <Card>
        <h3>属性</h3>
        <MTable :tableData="tableData"></MTable>
      </Card>

    </Row>
  </VblLayout>
</template>

<script>
export default {
  name: 'ApplySteps',
  props: {},
  data () {
    return {
      activeStep: 'aa',
      stepArr: [
        { step: 'aa', title: 'aa', icon: 'iconyushen' },
        { step: 'bb', title: 'bb', icon: 'iconyushen' },
        { step: 'cc', title: 'cc', icon: 'iconyushen' }
      ],
      columns: [
        { title: '属性', key: 'attr' },
        { title: '说明', key: 'desc' },
        { title: '类型', key: 'type' },
        { title: '默认值', key: 'defaultValue' }
      ],
      tableData: [
        {
          attr: 'activeStep',
          desc: '当前所在步骤',
          type: 'number/string',
          defaultValue: '1'
        },
        {
          attr: 'stepArr',
          desc: '自定义步骤数据',
          type: 'number',
          defaultValue: ''
        }
      ]
    }
  },
  components: {},
  mounted () {

  }
}
</script>

<style scoped>

</style>
