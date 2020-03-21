<template>
    <Table :columns="columns" :data="tableData"></Table>
</template>

<script>
export default {
  name: 'sTable',
  props: ['tableData'],
  data () {
    return {
      columns: [
        { title: '名称', key: 'attr' },
        { title: '说明', key: 'desc' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
