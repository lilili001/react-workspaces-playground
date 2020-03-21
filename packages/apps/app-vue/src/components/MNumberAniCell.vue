<template>
    <span class="number-ani-cell">
        <span class="number-ani-num" :class="{bounceInUp:update}">({{currentValue}})</span>

        <span class="number-ani-add" :class="{transUp:update}" v-show="notfirst && currentValue>0" v-for="(item,i) in addArr" :key="i">{{calcText}}</span>
    </span>
</template>
<script>
/**
     * @Description: 待办数字组件
     * @Props: [value: Number] 父组件中会实时更新的数字值
     */
// 提示音文件
const voiceFile = require('../assets/voice/Global.wav')
export default {
  name: 'MNumberAniCell',
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      currentValue: 0,
      addArr: [],
      update: false,
      notfirst: false,
      tipFile: new Audio(voiceFile),
      voicingT: undefined,
      addT: undefined,
      calcText: ''
    }
  },
  methods: {
    model (value) {
      this.update = false
      if (value > 0 && this.notfirst) this.tip()
      this.notfirst = true
      if (this.voicingT) clearTimeout(this.voicingT)
      if (this.addT) clearTimeout(this.addT)
      var num = Math.abs(value - this.currentValue)
      this.calcText = (value > this.currentValue ? '+' : '-') + num
      this.currentValue = value
      this.update = true
      this.addArr.push(1)
      this.addT = setTimeout(() => {
        this.addArr.shift()
      }, 500)

      this.voicingT = setTimeout(() => {
        this.update = false
      }, 500)
    },
    tip () {
      try {
        // this.tipFile = new Audio(voiceFile);
        // this.tipFile.muted = true;//加了以后自动播放不了
        if (!!this.tipFile && typeof this.tipFile.play == 'function') this.tipFile.play()
      } catch (err) {
        console.log(err)
      }
    }
  },
  mounted () {
  },
  watch: {
    value (val) {
      if (val !== this.currentValue) {
        this.model(val)
      }
    }
  }
}
</script>
<style>
    .number-ani-cell {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        line-height: inherit;
        max-height: 100%;
        overflow: visible;
        margin-top: -2px;
    }

    .number-ani-num {
        display: inline-block;
        text-align: center;
        opacity: 1;
        color: inherit;
        font-family: 'Arial-BoldMT', Arial;
        font-size: inherit;
        transition: all .2s linear;
        animation-duration: .5s;
        animation-fill-mode: both;
    }

    .number-ani-add {
        position: absolute;
        top: 0px;
        left: 50%;
        width: 40px;
        margin-left: -20px;
        z-index: 99;
        display: inline-block;
        visibility: hidden;
        text-align: center;
        font-size: 30px;
        color: #1890FF;
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-name: transUp
    }

    .transUp {
        animation-name: slideInUp
    }

    @keyframes slideInUp {
        0% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
            visibility: visible
        }
        to {
            opacity: 0;
            transform: translate3d(0, -100%, 0) scale(0.8);
            visibility: hidden;
        }
    }

    .bounceInUp {
        opacity: 1;
        color: #1890FF;;
        transition: .5s linear;
        animation-name: bounceInUp
    }

    @keyframes bounceInUp {
        0%,
        60%,
        75%,
        90%,
        to {
            animation-timing-function: cubic-bezier(.215, .61, .355, 1)
        }
        0% {
            opacity: 0;
            transform: translate3d(0, 3000px, 0)
        }
        60% {
            opacity: 1;
            transform: translate3d(0, -20px, 0)
        }
        75% {
            transform: translate3d(0, 10px, 0)
        }
        90% {
            transform: translate3d(0, -5px, 0)
        }
        to {
            transform: translateZ(0)
        }
    }
</style>
