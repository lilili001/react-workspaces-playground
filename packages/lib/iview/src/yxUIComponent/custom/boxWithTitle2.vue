<template>
 
  <div class="group">
    <Row type="flex" justify="space-between">
      <h4 class="ti">{{title}}</h4>
    </Row>
    <slot></slot>
  </div>
 
</template>

<script>
    export default {
        name: "BoxWithTitle2",
        props:{
            title:{
                type:String,
                default:"我是二级标题"
            }
        }
    }
</script>

<style scoped>

</style>
