<template>
    <div>
      <h3><span></span>{{title}}</h3>
    </div>
</template>
<script>
export default {
  name: 'secondTiTle',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="less" scoped>
div{
  border-bottom: 1px solid #EEEEEE;
  margin-bottom: 10px;
  margin-top: 14px;
}
  h3{
    font-size: 12px;
    color: #103153;
    // border-left: 3px solid #103153;
    // padding-left: 4px;
    margin-bottom:3px;
    height: 12px;
    line-height: 12px;
    span{
      display: block;
      float: left;
      height: 10px;
      margin-top: 1px;
      border-left: 3px solid #103153;
      margin-right: 4px
    }
  }
</style>
