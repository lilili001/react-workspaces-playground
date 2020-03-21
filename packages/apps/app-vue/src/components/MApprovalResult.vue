<template>
  <div class="cm-panel">
    <ul class="readInfo" v-if="!loglistdata || !loglistdata.length">
      <li>
        <div class="text-center withicon-empty-tip">
          <img :src="emptyTipImg" alt="" height="200" style="margin-top:100px"><br>
          <span style="font-size:18px">暂无数据</span>
        </div>
      </li>
    </ul>
    <ul class="readInfo" v-else>
      <li v-for="(item, index) in loglistdata" :key="index">
        <div class="statuscon">
          <Icon :type="iconType(item)" :class="iconClass(item)"></Icon>
          <span class="status">状态：{{item.orderStatusName}}</span><span
          class="times">{{item.approveTime}}</span>
        </div>
        <p class="orderInfo">审批结果：<span :class="iconClass(item)">{{item.approveName}}</span></p>
        <p class="orderInfo">审批意见描述：<span class="color0">{{item.approveComments}}</span></p>
        <p class="orderInfo">审批备注：<span class="color0">{{item.approveRemark}}</span></p>
        <p class="orderInfo">操作人：<span class="color0">{{item.approveUserName}}</span></p>
      </li>
    </ul>
  </div>
</template>

<script>/**
 * @Description: 审批结果标签页
 */
import { getRes } from '../utils/utils'

export default {
  name: 'MApprovalResult',
  props: ['orderNo', 'loglistdata'],
  data () {
    return {
      emptyTipImg: require('../assets/img/empty_tip.png')
    }
  },
  mounted () {
    /* this.$api.cancelPrj.getApproveHistory(this.orderNo).then(res=>{
                getRes(res,data=>{
                    if(data){
                        this.loglistdata = data;
                    }
                })
            }) */
  },
  methods: {
    // 设置不同的icon
    iconType (obj) {
      let orderStatus = obj.approve
      /*
                 agree  --通过  蓝色
                 cancel --取消 red
                 fetchback --提回  yellow
                 refuse --拒绝  red
                 reject --退回    yellow
                 taskturns --转件  蓝色
                 other  --其他  蓝色
                 */
      const redArr = ['cancel', 'refuse'] // 红色
      const yellowArr = ['fetchback', 'reject'] // 黄色
      return (redArr.indexOf(orderStatus) >= 0) ? 'md-close-circle' : (yellowArr.indexOf(orderStatus) >= 0) ? 'md-alert' : 'md-checkmark-circle'
    },
    // icon设置不同的颜色
    iconClass (obj) {
      let orderStatus = obj.approve
      const redArr = ['cancel', 'refuse'] // 红色
      const yellowArr = ['fetchback', 'reject'] // 黄色
      return (redArr.indexOf(orderStatus) >= 0) ? 'iconredStyle' : (yellowArr.indexOf(orderStatus) >= 0) ? 'iconyellowStyle' : 'iconStyle'
    }
  }
}
</script>
