<template>
  <VblLayout>

    <h2><p class="anc" id="basic">1.基本用法</p></h2>
    <MApprovalResult :loglistdata="loglistdata"></MApprovalResult>

    <pre v-highlightjs=""><code>
       &lt;MApprovalResult :loglistdata="loglistdata&gt; &lt;/MApprovalResult&gt;
       &lt;script&gt;
          export default{
          data(){
            return {
              loglistdata:[
                    {
                        approveComments: "comments",
                        approveName: "通过",
                        approveRemark: "remark",
                        approveTime: "2019-12-04 10:47:12",
                        approveUserName: "testUser",
                        orderStatusName: "取消审批中",
                    }
              ]
          }
        }
      }
       &lt;/script&gt;
    </code></pre>
    接口返回的字段需要和后端约定与此一致

    <h2><p class="anc margin-t-20" id="api">2.api</p></h2>
    <Card>
      <MTable :tableData="tableData"></MTable>
    </Card>

  </VblLayout>
</template>

<script>
export default {
  name: 'ApprovalResult',
  data () {
    return {
      loglistdata: [
        {
          approveComments: 'comments',
          approveName: '通过',
          approveRemark: 'remark',
          approveTime: '2019-12-04 10:47:12',
          approveUserName: 'testUser',
          orderStatusName: '取消审批中'
        }
      ],

      tableData: [
        {
          attr: 'loglistdata',
          desc: '审批数据',
          type: 'array',
          defaultValue: []
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
