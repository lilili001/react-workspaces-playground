export default {
  props: ['tabComs'],
  data () {
    return {
      initFormData: {}
    }
  },
  computed: {
    checkEqual () { return _.isEqual(this.formData, this.initFormData) }
  },
  methods: {
    resetSaved (labelCode, saved) {
      const obj = _.find(this.tabComs, { labelCode: labelCode })
      if (obj) {
        obj['hasSaved'] = saved
      }
    }
  }
}
