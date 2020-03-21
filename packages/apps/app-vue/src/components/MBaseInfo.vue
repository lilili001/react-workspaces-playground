<template>
    <div class="cm-panel">
      <div class="order-info-row flex-box">
        <ul style="flex:1" class="padding-r-20 data-area" :class="!showBelow ? 'h'+hei : ''">
          <li v-for="(item,index) in orderInfo" :key="index">
            <span class="order-info-label">{{item.label}} ：</span>
            <span class="order-info-value font12 color333" >{{item.value}}</span>
          </li>
          <slot name="extra"></slot>
        </ul>
        <a class="blue1 font14" v-if="showToggleIcon" @click="toggleShowFn">{{toggleObj.text}}<Icon :custom="toggleObj.icon"/></a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'MBasicOrderInfo',
  props: ['orderInfo'],
  data () {
    return {
      showBelow: false,
      showToggleIcon: false,
      hei: 36 // 默认一行的高度
    }
  },
  computed: {
    toggleObj () {
      return {
        text: this.showBelow ? '收起' : '展开',
        icon: this.showBelow ? 'iconfont iconshouqi' : 'iconfont iconzhankai'
      }
    }
  },
  methods: {
    toggleShowFn () {
      this.showBelow = !this.showBelow
    }
  },
  mounted () {
    var dataAreaObj = document.querySelector('.data-area')
    var h = dataAreaObj.offsetHeight
    // 如果内容高度大于72 两行的高度 则显示展开收起按钮
    if (h > 72) {
      this.showToggleIcon = true
      this.hei = 72
    }
  }
}
</script>

<style scoped>
  .h72{
    height:72px;
    overflow:hidden;
  }
</style>
