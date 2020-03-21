<template>
  <VblLayout class="bg-white">
    <Table :columns="columns1" :data="data1"></Table>
    <Row class="margin-t-5">
      <Page :total="pager.total" :page-size="formData.Page" :current="formData.current" :page-size-opts="pager.Opts"
            @on-change="pageChange" @on-page-size-change="pageSizeChange" size="small" show-sizer show-elevator></Page>
    </Row>
  </VblLayout>
</template>

<script>
export default {
  name: 'TablePage',
  data () {
    return {
      formData: {
        page: 10,
        current: 1
      },
      pager: {
        total: 100,
        Opts: [10, 20, 40, 100]
      },
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park,New York No. 1 Lake Park,New York No. ',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  methods: {
    pageChange (page) {
      console.log(page)
    },
    pageSizeChange (pageSize) {
      console.log(pageSize)
    }
  }
}
</script>

<style scoped>

</style>
