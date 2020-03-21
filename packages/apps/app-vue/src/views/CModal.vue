<template>
  <VblLayout>
    <h2 id="a1" class="anc margin-t-20">基础用法</h2>
    <Button @click="cModalData.showModal=true">展示弹窗</Button>
    <!--延期申诉弹窗-->
    <MCModal :cModalData="cModalData" :fields="cModalFields" @onOk="onOk"/>

    <pre v-highlightjs=""><code>
      &lt;template&gt;
          &lt;VblLayout&gt;
            &lt;Button @click="cModalData.showModal=true"&gt;展示弹窗&lt;/Button&gt;
            &lt;!--延期申诉弹窗--&gt;
            &lt;MCModal :cModalData="cModalData" :fields="cModalFields" @onOk="onOk"/&gt;
          &lt;/VblLayout&gt;
        &lt;/template&gt;

        &lt;script&gt;
            export default {
                name: "CModal",
                data(){
                  return {
                      cModalData: {
                          showModal: false,
                          title: '延期申诉',
                          remark: '', // 备注
                          delayDays: '',
                          delayType: '2'
                      },
                      cModalFields: [
                          { type: 'radio', label: '保单上传延期天数', key: 'delayDays', options: [{ code: 3, value: '3天' }, { code: 5, value: '5天' }] },
                          { type: 'textarea', label: '备注', key: 'remark' }
                      ],
                  }
                },
                methods:{
                    onOk(){

                    }
                }
            }
        &lt;/script&gt;
    </code></pre>
    <h2 id="a4" class="anc margin-t-20">api</h2>
    <Card>
      <a slot="title">属性</a>
      <MTable :tableData="tableData"></MTable>
    </Card>
  </VblLayout>
</template>

<script>
export default {
  name: 'CModal',
  data () {
    return {
      tableData: [
        {
          attr: 'cModalData',
          desc: '弹窗里的字段数据,具体可参考demo',
          type: 'Object',
          defaultValue: '{}'
        },
        {
          attr: 'cModalFields',
          desc: '弹窗的字段',
          type: 'Array',
          defaultValue: '[]'
        }
      ],
      cModalData: {
        showModal: false, // 初始不显示弹窗
        title: '延期申诉', // 这是弹窗标题
        remark: '', // 备注
        delayDays: null
      },
      cModalFields: [
        {
          type: 'radio',
          label: '保单上传延期天数',
          key: 'delayDays',
          options: [{ code: 3, value: '3天' }, { code: 5, value: '5天' }]
        },
        { type: 'textarea', label: '备注', key: 'remark' }
      ]
    }
  },
  methods: {
    onOk () {

    }
  }
}
</script>

<style scoped>

</style>
