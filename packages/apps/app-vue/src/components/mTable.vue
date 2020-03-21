<template>
    <Table :columns="columns" :data="tableData"></Table>
</template>

<script>
export default {
  name: 'mTable',
  props: ['tableData'],
  data () {
    return {
      columns: [
        { title: '属性', key: 'attr' },
        { title: '说明', key: 'desc' },
        { title: '类型', key: 'type' },
        { title: '默认值', key: 'defaultValue' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
