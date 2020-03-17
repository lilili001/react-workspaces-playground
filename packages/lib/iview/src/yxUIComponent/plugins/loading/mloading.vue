<template>
    <div class="self-loading ivu-spin-fullscreen-wrapper " v-if="show">
        <div class="ivu-spin ivu-spin-large ivu-spin-fix ivu-spin-fullscreen">
            <div class="ivu-spin-main">
                <div class="self-loading-body">
                    <div class="ivu-spin-text"></div>
                    <div class="resultloadCenterBg">
                        <div class="loadingBigBox op6"></div>  <!-- 大圆 -->
                        <div class="loadingSmallBox">    <!-- 小圆 -->
                            <i><span></span></i>
                            <div class="loadingCircle"></div>  <!-- 小圆圈 -->
                        </div>
                    </div>
                </div>
                <div class="self-loading-text">{{text}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'mloading',
  props: {
    text: {
      type: String,
      default: '加载中...'
    },
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>
