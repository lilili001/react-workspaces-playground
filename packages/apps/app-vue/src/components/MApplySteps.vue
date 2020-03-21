<template>
    <div class="sh-steps dot-steps margin-b-20 bg-EEEFF3">
        <div v-for="(item,index) in steps" class="sh-step-cell "
             :class="{ 'sh-step-success': item.step<activeStep,'sh-step-active':activeStep===item.step}" :key="index">
            <div class="sh-step-content">
                <div class="inner">
                    <Icon class="active-icon" v-if="activeStep == item.step" :custom="`iconfont ${item.icon}`"/>
                    <span class="sh-step-title">{{item.title}}</span>
                    <span v-if="activeStep !== item.step"  class="dot"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
/**
     * @Description: 顶部进件分步状态栏
     * @Props: [activeStep: Number] 当前所在步骤
     * @Props: [currentText: String]当前步骤文字
     */
export default {
  name: 'MApplySteps',
  props: {
    activeStep: {
      type: [Number, String],
      default: 1
    },
    stepArr: {
      type: Array,
      default () {
        return []
      }
    },
    currentText: {
      default: ''
    },
    firstText: {
      default: ''
    }
  },
  data () {
    return {
      steps: [{
        step: 1,
        title: '预审',
        icon: 'iconyushen'
      }, {
        step: 2,
        title: '提报',
        icon: 'icontibao'
      }, {
        step: 3,
        title: '签约',
        icon: 'iconqianyue'
      }, {
        step: 4,
        title: '请款',
        icon: 'iconqingkuan'
      }, {
        step: 5,
        title: '放款',
        icon: 'iconfangkuan'
      }]
    }
  },
  mounted () {
    if (this.stepArr.length) this.steps = this.stepArr
  },
  methods: {
  }
}
</script>
<style scoped  lang="less">

  .bg-EEEFF3{background:#EEEFF3}
    .dot-steps{
        .active-icon{font-size:20px; top:1px}
        .sh-step-cell:after{border-top:2px solid #D8DDE1;}
        .sh-step-title{font-size:18px}
        .dot{
            display:inline-block;
            width:10px;
            height:10px;
            border-radius:5px;
            background:#D8DDE1;
            position:relative;
            top:2px;
            margin-left:6px;
            margin-right:6px
        }
        .sh-step-cell.sh-step-success {
            .dot{
                background:#1890FF;
            }
            &:after{border-top:2px solid #1890FF;}
        }
        .sh-step-content{padding: 0 10px;}
        .sh-step-active{
            .sh-step-title{
                color:#fff;
                height:28px;
                line-height: 26px;
            }
            .sh-step-content{
                .inner{
                    background:#1890FF;
                    color:#fff;
                    border-radius:20px;
                    padding: 0 10px;
                }
            }
        }
    }
</style>
