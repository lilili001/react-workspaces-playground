<template>
    <div class="bread-box">
      <span v-for="(item,index) in brands" :class="{primary:item['url']}" @click="goTo(item)"><Icon type="ios-arrow-forward" v-if="index!=0" />{{item.label}}</span>
    </div>
</template>

<script>
    export default {
        name: "BreadCrumb",
        data(){
            return {
                brands:this.$route.meta.brand
            }
        },
        methods:{
            goTo(item){
                if(item['url']){
                    this.$router.push(item.url)
                }
            }
        }
    }
</script>

<style lang="less" scoped>
  .bread-box{
    padding-left:20px;
    line-height: 1;
    font-size: 12px;
  }
  span{
    color: #666
  }
  i{
    margin: 0 1px
  }
  .primary:hover{
    color:#1890FF;
    cursor: pointer;
  }
</style>
