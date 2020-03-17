<template>
    <!--标签栏-->
    <div id="tabBar" :class="{'fixed-tab-bar':hasTabs&&tabBarFixed ,'singleTitleTab':!hasTabs} ">
        <div class="cm-panel">
            <div class="flex-box">
                <div class="flex-box">
                    <div v-if="hasTabs==true" class="applytab-bar-cell" :class="currentIndex===index?'active':''"
                         v-for="(item,index) in tabMenu" :key="index"
                         @click="jump(index)">
                        <div class="applytab-bar-cell-title">
                            {{item.labelName}}
							<template v-if="hasIcon">
								<Icon :custom=" item.hasSaved==true ? 'iconfont iconjiedianwancheng active' : 'iconfont iconjiedianwancheng' "/>
							</template>
						</div>
                    </div>
                    <div class="applytab-bar-cell-title"><h3 v-if="hasTabs==false">{{tabTitle}}111</h3></div>

                </div>
                <div style="flex: 1;" class="text-right font0">
                    <Button @click="$router.back()" custom-icon="iconfont iconfanhui">返回</Button>
                    <slot name="up"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'tabbar',
  props: {
    hasTabs:{
        type:Boolean,
        default:true
    },
    tabTitle:{
      type:String
    },
    currentIndex: 0,
    hasIcon:{
        type:Boolean,
        defalut:false
    },
    tabMenu: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      activeStep: this.currentIndex,
      tabBarFixed: false
    }
  },
  mounted () {
    // 监听页面滚动事件

    window.addEventListener('scroll', this.debounceFn(this.handleScroll), false)
  },
  methods: {
    debounceFn (fn) {
      let timer = null
      return function () {
        clearInterval(timer)
        timer = setTimeout(function () {
          fn.call(this, arguments)
        }, 100)
      }
    },
    // 标签页吸顶
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (document.querySelector('#tabBar')) {
        var offsetTop = document.querySelector('#tabBar').offsetTop
        this.tabBarFixed = scrollTop > offsetTop
      }
    },
    jump (index) {
      // console.log(index)
      // his.activeStep = index;
      this.$emit('changeIndex', index)
    }
  },
  // 离开当前页面后执行
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll) // 页面销毁时取消页面滚动监听事件
    if (window.saveT) clearInterval(window.saveT)
  }
}
</script>

<style scoped lang="less">
    .iconjiedianwancheng{
        color:#d0d0d0;
        &.active{
           color: #1890FF
        }
    }
</style>
