/**
 * Created by miyaye on 2019/11/30.
 */
export default {
  data () {
    return {
      pager: {
        'total': 0,
        'opts': [10, 20, 50, 100, 200]
      },
      formData: {
        'current': 1,
        'rowCount': 10
      },
      tableListData: []
    }
  },
  methods: {
    // 表格翻页
    pageChange (curPage) {
      this.formData.current = curPage
      this.queryList()
    },
    // 表格改修改每页显示数量
    pageSizeChange (rowCount) {
      this.formData.rowCount = rowCount
      this.queryList()
    },
    // 清除表单所有数据
    fnReset (name) {
      this.$refs[name].resetFields()
      this.formData.current = 1
      this.queryList()
    }
  }
}
