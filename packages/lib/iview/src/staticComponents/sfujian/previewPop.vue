<template>
<transition name = "fade">
    <div class="pop-modal" v-if="status">
        <div  :class="['top-tar', hasOper?'flex':'']" v-for="(item,index) in imgsArr" :key="index" v-show="index==value1">
           
                <div class="tit">
                  <Tooltip :content="popMsg.preViewTit" theme="light" v-if="popMsg.preViewTit&&popMsg.preViewTit.length>10">
                  {{popMsg.preViewTit.slice(0,10)+'...'}}
                   </Tooltip>
                  <span  v-else>{{popMsg.preViewTit}}</span>
                </div>
            <div class="oper-box" v-if="hasOper">
                    <div class="progress-box clearfix" v-if="!item.fileId.endsWith('.pdf')">
                        <slider v-model="item.percent" @on-input="changeSlider(index,item)">
                            <template slot="reduce">
                                <i class="iconfont iconbilibianxiao" @click="minus(index)" style="margin-right:8px"></i>
                            </template>
                            <template slot="add">
                                <i class="iconfont iconbilibianda" @click="add(index)" style="margin-left:8px"></i>
                            </template>
                        </slider>
                    </div>
                    <i-button v-if="!item.fileId.endsWith('.pdf')" class="rotate-btn" type="default" @click="rotateImg(index)"><i class="iconfont iconxuanzhuan"></i> 旋转</i-button>
                    <div class="btn-box">
                        <i-button type="default" @click="item.approveStatus=-1">不合格</i-button><i-button type="primary" @click="item.approveStatus=1">合格</i-button>
                    </div>
                    <div class="form-remark">
                        <span>备注</span>
                            <!-- <span class="text cursor" v-if="item.approveRemark&&item.approveRemark.toString().getBytesLength()>16">
                                  <Tooltip :content="item.approveRemark" theme="light">
                                        <i-input type="text" v-model="item.approveRemark"></i-input>
                                  </Tooltip>
                            </span> -->
                            <i-input type="text" v-model="item.approveRemark"></i-input>
                            <!-- <span class="text">
                                 
                            </span> -->
                        
                    </div>
                    <div class="photo-box">
                        <i :class="['iconfont', item.approveStatus==1?'iconfujianxiangqinghege':'',item.approveStatus==-1?'iconfujianxiangqingbuhege':'']"></i>
                    </div>
            </div>
            <Icon type="ios-close" class="icon-close" @click="closeFn()" />
        </div>
        <div class="content preview-content" v-if="imgsArr.length>0">
            <Carousel v-model="value1"  :radius-dot="true" @on-change="setPreViewUrl" :arrow="imgsArr.length>1?'always':'never'">
                <CarouselItem v-for="(item,index) in imgsArr" :key="index" >
                    <div class="demo-carousel">
                        <iframe v-if="item.fileId.endsWith('.pdf')&&item.preViewUrl" :src="item.preViewUrl" frameborder="0"  width="100%" height="100%"></iframe>
                        <img v-if="!item.fileId.endsWith('.pdf')&&item.preViewUrl" :src="item.preViewUrl"  :style="{'width':item.percent+10+'%','transform':'rotate('+90*item.rotateOrder+'deg)'}" alt="">
                    </div>
                </CarouselItem>
                <!-- <CarouselItem>
                    <div class="demo-carousel">
                         <img src="../assets/img/i2.jpg" alt="">
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div class="demo-carousel">
                        <img src="../assets/img/i3.jpg" alt="">
                    </div>
                </CarouselItem> -->
            </Carousel>
        </div>
    </div>
</transition>
</template>
<script>
import {getRes} from "../../utils/utils";
import * as api from './api'
export default {
  props: {
    status: {
      type: Boolean,
      default: false
    },
    renderData: {
      type: Array,
      default: () => []
    },
    imgs: {
      type: Array,
      default: () => []
    },
    hasOper: {
      type: Boolean,
      default: false
    },
    popMsg: {
      type: Object,
      default: () => []
    },
    businessNo:{
        default: ""
    },
    initIndex:{
      default:0
    }
  },
  data () {
    return {
      value1: 0,
      imgsArr: []
    }
  },
  methods: {
    closeFn () {
      this.$emit('closeFn', false, this.imgsArr, this.popMsg)
    },
    rotateImg (index) {
      this.imgsArr[index].rotateOrder++
      this.$set(this.imgsArr, index, this.imgsArr[index])
    },
    add (index) {
      if (this.imgsArr[index].percent >= 100) {
        return false
      }
      this.imgsArr[index].percent += 10
      this.$set(this.imgsArr, index, this.imgsArr[index])
    },
    minus (index) {
      if (this.imgsArr[index].percent <= 0) {
        return false
      }
      this.imgsArr[index].percent -= 10
      this.$set(this.imgsArr, index, this.imgsArr[index])
    },
    setImgArr () {
      this.imgsArr=[];
      if (this.imgs.length > 0) {
        this.imgs.forEach((item, index) => {
          item.rotateOrder = 0
          item.percent = 50
          this.$set(this.imgsArr, index, item)
        })
      }
    },
    changeSlider(index,item){
      this.$set(this.imgsArr, index, item)
    },
    // 获取预览地址
    async setPreViewUrl (index, index2) {
      console.log(this.imgs,23232,index2);
       const res = await api.annexPreview({ businessNo: this.businessNo, fileId: this.imgs[index2].fileId })
      if (res) {
        getRes(res, data => {
          this.$nextTick(()=>{
          this.imgsArr[index2].preViewUrl = data.preViewUrl
          let item = this.imgsArr[index2];
          this.$set( this.imgsArr,index2,item);
          })
        })
      }
    }
  },
  watch: {
    status: {
      handler: function () {
       this.value1 = this.initIndex;//轮播图归位
        this.setImgArr();
        console.log( this.value1,23232)
        this.setPreViewUrl(this.value1, this.value1);
      },
      immediate: true
    }
  },
  mounted () {
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
    z-index: 100;
    background: rgba(0, 0, 0, 0.9);
    .top-tar{
        width: 100%;
        height: 60px;
        line-height: 60px;
        position: relative;
        color: #F8F8F8;
        // background: pink;
        padding-left: 39px;
        z-index: 99;
        .tit{
            float: left;
            font-size: 14px;
            height: 20px;
            line-height: 20px;
            position: relative;
        }
        >div{
            display: inline-block;
        }
        .oper-box{
            flex:1
        }
        .progress-box{
            height: 60px;
            // width: 280px;
            float: left;
            margin-left: 20px;
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
                margin-left: 20px;
                color: #1890FF;
                border: #1890FF;
                margin-top:18px;
                i{
                    vertical-align: middle
                }
            }
            .form-remark{
                 float: right;
                 line-height: 60px;
                span{
                    margin-right: 10px;
                }
                margin-right: 20px;
                font-size: 14px;
            }
            .btn-box{
                 float: right;
                margin-right: 68px;
                margin-top: -1px;
            }
            .icon-close{
                color: #fff;
                font-size: 40px;
                cursor: pointer;
                margin-right: 13px;
                // margin-top: 14px;
                position: absolute;
                top: 50%;
                right: 6px;
                margin-top: -19px;
            }
            .iconfont{
              font-size: 14px;
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
        width: 240px;
    }
}
.preview-content{
.ivu-icon{
    font-family: "iconfont" !important;
}
.ivu-carousel-arrow{
    width: 40px;
    height: 40px;
    font-size: 30px;
    background: none;
}
.ivu-carousel-arrow.left{
    left: -43px;
}
.ivu-carousel-arrow.right{
    right: -43px;
}
.ivu-icon-ios-arrow-back:before{
    content:"\e66c"
}
.ivu-icon-ios-arrow-forward{
    transform: rotate(180deg)
}
.ivu-icon-ios-arrow-forward:before{
    content:"\e66c";
}
}
</style>
