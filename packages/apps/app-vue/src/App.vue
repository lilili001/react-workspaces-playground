<template>
  <div id="app" v-if="inited">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { getDict } from './plugins/getDict'
import { getRes } from './utils/utils'

export default {
  name: 'app',
  data () {
    return {
      inited: true
    }
  },
  components: { },
  computed: {
  },
  created () {
    // this.getCurrentUser()
  },
  mounted () {
    // 已有资方list todo 待修改
    this.$store.commit('app/setData', { key: 'zifangList', value: ['CMBC'] })

    //    getDict([], this).then((data) => {
    //      this.$store.commit('dict/dictData', data)
    //    })
  },
  methods: {
    getCurrentUser () {
      //      this.$api.getUser().then(res => {
      //        getRes(res, data => {
      //          this.$store.commit('app/setData', { key: 'userInfo', value: data })
      //          this.inited = true
      //        })
      //      })
    }
  }
}
</script>

<style lang="less">
</style>
