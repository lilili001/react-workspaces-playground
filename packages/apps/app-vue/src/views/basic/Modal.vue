<template>
  <VblLayout>
    <Button @click="fnModal1">普通确认弹窗</Button>
    <Button @click="fnModal2">危险操作弹窗</Button>
    <Button type="primary" @click="fnModal3">我是你们要的弹窗</Button>
    <pre v-highlightjs=""><code>
      &lt;template&gt;
          &lt;VblLayout&gt;
              &lt;Button @click="fnModal1"&gt;普通确认弹窗&lt;/Button&gt;
              &lt;Button @click="fnModal2"&gt;危险操作弹窗&lt;/Button&gt;
          &lt;/VblLayout&gt;
        &lt;/template&gt;

        &lt;script&gt;
            export default {
                name: "ModalInfo",
                methods:{
                    fnModal1(){
                        this.$Modal.confirm({
                            title:'我是title',
                            content:'确定要xxx吗'
                        })
                    },
                    fnModal2(){
                        this.$Modal.confirm({
                            title: ' ',
                            icon: "error",
                            className: "dangerModal",
                            content: '请确认撤销本次取消申请吗？撤销后将恢复订单取消前状态。',
                        })
                    }
                }
            }
        &lt;/script&gt;
    </code></pre>
    <Modal
            class="modalWithList"
            v-model="showModal"
            title="我是标题"
            width="600"
            @on-ok="ok"
            @on-cancel="cancel"
            >
      <TablePage ref="tablePage"></TablePage>
      <div slot="footer" class="padding0"></div>
    </Modal>
  </VblLayout>
</template>

<script>
import TablePage from './partials/TableCom.vue'
export default {
  name: 'ModalInfo',
  components: { TablePage },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    ok () {
      this.showModal = false
    },
    cancel () {
      this.showModal = false
    },
    fnModal1 () {
      this.$Modal.confirm({
        title: '我是title',
        content: '确定要xxx吗'
      })
    },
    fnModal2 () {
      this.$Modal.confirm({
        title: ' ',
        icon: 'error',
        className: 'dangerModal',
        content: '请确认撤销本次取消申请吗？撤销后将恢复订单取消前状态。'
      })
    },
    async fnModal3 () {
      await this.$refs.tablePage.queryList()
      this.showModal = true
    }
  }
}
</script>
<style>
  .modalWithList .ivu-modal-footer{padding:0!important;}
</style>
