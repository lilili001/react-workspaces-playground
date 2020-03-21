import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState({
      'basicInfo': state => state.app.basicInfo,
      'dict': state => state.dict.dictData
    })
  },
  methods: {
    ...mapMutations('app', [
      'setData'
    ])
  }
}
