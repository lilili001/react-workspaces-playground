<template>
  <div class="cm-panel">
    <Row type="flex" justify="space-between">
      <h3 class="margin-b-14" v-if="!!title">{{title}}</h3>
      <a v-if="showCollapseIcon" class="collpase" @click="toggleShow">{{showBelow==true ? '收起' : '展开' }}
        <Icon :custom="showBelow ? 'iconfont iconshouqi' : 'iconfont iconzhankai' " /></a>
    </Row>
    <slot v-if="showBelow"></slot>
  </div>
</template>

<script>
    export default {
        name: "BoxWithTitle1",
        props:{
        	//容器一级标题
            title:{
                type:String,
                default:""
            },
            //是否显示展开收起icon
            showCollapseIcon:{
                type:Boolean,
                default:false
            },
            //外部传入 初始化是否显示下面的内容
            showBelowContent:{
            	type:Boolean,
            	default:true
            }
        },
        data(){
            return {
                showBelow:null
            }
        },
        mounted(){
        	 this.showBelow = this['showBelowContent'];
        },
        methods:{
            toggleShow(){
                this.showBelow = !this.showBelow;
                //this.$emit('toggleCollpase',this.showBelow)
            }
        }
    }
</script>

<style scoped>

</style>
