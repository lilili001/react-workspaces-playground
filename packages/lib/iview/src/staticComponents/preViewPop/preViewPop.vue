<template>
<transition name = "fade">
    <div class="pop-modal" v-if="status">
        <div  :class="['top-tar']">
            <div class="tit">{{popMsg.fileName}}</div>
            <Icon type="ios-close" class="icon-close" @click="closeFn()" />
        </div>
        <div class="content preview-content">
            <iframe :src="popMsg.preViewUrl" frameborder="0" v-if="popMsg.fileId.endsWith('.pdf')" width="100%" height="100%"></iframe>
            <img :src="popMsg.preViewUrl" v-if="!popMsg.fileId.endsWith('.pdf')" :style="{'width':'auto'}" alt="">
        </div>
    </div>
</transition>
</template>
<script>
export default {
  props: {
    status: {
      type: Boolean,
      default: false
    },
    popMsg: {
      type: Object,
      default:()=>({})
    },
    businessNo:{
        type:String,
        default: String
    }
  },
  data () {
    return {
      imgsArr: []
    }
  },
  methods: {
    closeFn () {
      this.$emit('closeFn', false)
    }
  },
//   watch: {
//     status: {
//       handler: function () {
//         this.setPreViewUrl(0, 0);
//         this.setImgArr()
//       },
//       immediate: true
//     }
//   },
  mounted () {
    // console.log(this.imgsArr, this.hasOper);
  }
}
</script>
<style lang="less" scoped>
.pop-modal{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
    background: rgba(0, 0, 0, 0.9);
    .top-tar{
        width: 100%;
        height: 60px;
        line-height: 60px;
        color: #F8F8F8;
        // background: pink;
        padding-left: 39px;
        .tit{
            float: left;
        }
        >div{
            display: inline-block;
        }
        .oper-box{
            flex:1
        }
        .progress-box{
            height: 60px;
            width: 280px;
            float: left;
            margin-left: 70px;
            .iconfont{
                vertical-align: middle;
                cursor: pointer;
                &.iconsq{
                    margin-right: 10px;
                }
                &.iconzk{
                    margin-right: 13px;
                    margin-left: 10px;
                }
            }
        }
            .rotate-btn{
                width: 68px;
                height: 24px;
                 float: left;
                color: #1890FF;
                border: #1890FF;
                margin-top:18px;
                i{
                    vertical-align: middle
                }
            }
            .form-remark{
                 float: left;
                span{
                    margin-right: 10px;
                }
                margin-left: 50px;
                font-size: 16px;
            }
            .btn-box{
                 float: left;
                margin-left: 40px;
            }
            .icon-close{
                float: right;
                color: #fff;
                font-size: 32px;
                cursor: pointer;
                margin-right: 13px;
                margin-top: 14px;
            }
            .photo-box .iconfont{
                font-size: 100px;
                position: absolute;
                right: 115px;
                top: 130px;
                z-index: 99999;
                &.iconfujianxiangqinghege{
                  color:#1FA269;
                }
                &.iconfujianxiangqingbuhege{
                  color:#F5222D;
                }
            }
    }
    .content{
        width: 90%;
        height: calc(100% - 60px);
        margin: 0 auto;
        margin-top: 1px;
        background: #fff;
    }
    .preview-content{
        justify-content:center;//子元素水平居中
        align-items:center;//子元素垂直居中
        display:-webkit-flex;
        overflow: auto;
    }
}
</style>
<style lang="less">
.pop-modal{
    .ivu-carousel{
        height:100%;
        .ivu-carousel-list{
            height: 100%;
            div{
                height: 100% !important;
                img{
                    // height: 80%;
                    // transform: rotate(90deg);
                }
            }
            .demo-carousel{
                overflow-y:auto;
                text-align: center;
                line-height: 1;
                display:flex; justify-content:center; align-items:center; 
            }
        }
    }
    // .ivu-progress{
    //     float: left;
    //     height: 60px;
    //     .ivu-progress-outer{
    //         width: 80%;
    //     }
    // }
    .ivu-slider{
        margin-top: 12px;
        .ivu-slider-wrap{
            width: 140px;
            display: inline-block;
        }
    }
    .ivu-carousel-dots-inside{
        bottom: 8px;
    }
}
.form-remark{
    .ivu-input-wrapper{
        width: 260px;
    }
}
</style>
