<template>
  <div class="page">
    <slot></slot>
    <breadCrumb class="margin-t-14"></breadCrumb>
  </div>
</template>

<script>
/*
  * 外围带面包屑的大盒子, 只要有面包屑的页面初始就用这个盒子
  * */
import breadCrumb from './MBreadCrumb'
export default {
  name: 'MInitPageBox',
  components: { breadCrumb }
}
</script>

<style scoped>
  .page{margin:20px;}
</style>
