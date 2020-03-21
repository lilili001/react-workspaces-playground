import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState({
      'userInfo': state => state.app.userInfo,
      'dict': state => state.dict.dictData,
      'basicInfo': state => state.app.basicInfo
    })
  },
  methods: {
    ...mapMutations('app', [
      'setData'
    ])
  }
}
