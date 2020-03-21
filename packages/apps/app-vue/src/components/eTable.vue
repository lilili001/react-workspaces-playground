<template>
  <Table :columns="columns" :data="tableData"></Table>
</template>

<script>
export default {
  name: 'eTable',
  props: ['tableData'],
  data () {
    return {
      columns: [
        { title: '事件名', key: 'attr' },
        { title: '说明', key: 'desc' },
        { title: '返回值', key: 'returnValue' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
