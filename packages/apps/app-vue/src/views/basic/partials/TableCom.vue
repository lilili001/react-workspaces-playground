<template>
    <div class="bg-white">
        <div class="table-wrap">
            <Table id="table" ref="table" max-height="360" :columns="columns1" :data="data1"></Table>
        </div>
        <Row class="margin-t-5">
            <Page :total="pager.total" :page-size="formData.page" :current="formData.current" show-total
                  @on-change="pageChange"   size="small" ></Page>
        </Row>
    </div>
</template>

<script>
export default {
  name: 'TablePage',
  data () {
    return {
      formData: {
        page: 30,
        current: 1
      },
      pager: {
        total: 0,
        Opts: [30, 100]
      },
      columns1: [
        {
          title: '序号',
          key: 'id',
          width: 60,
          render: (h, params) => {
            return h('span', params.index + (this.formData.current - 1) * this.formData.page + 1)
          }
        },
        {
          title: '标题',
          key: 'title'
        },
        {
          title: '创建时间',
          key: 'created_at',
          width: 160
        }
      ],
      data1: []
    }
  },
  methods: {
    pageChange (page) {
      this.formData.current = page
      this.queryList(page)
      var obj = document.querySelector('.ivu-table-body')
      obj.scrollTo(0, 0)
    },
    pageSizeChange (pageSize) {
      this.formData.current = 1
    },
    queryList (cur = 1) {
      return this.$http.get('http://rigel-server.astystore.com/api/posts?page=' + cur)
        .then(res => {
          if (res.status == 'success') {
            this.data1 = res.data.data
            this.pager.total = res.data.total
          } else {
            this.$Message.info('查询为空')
          }
        })
    }
  },
  mounted () {
    // this.queryList()
  }
}
</script>

<style scoped>
    .table-wrap{
        min-height: 300px;
        overflow-y: auto;
    }
</style>
