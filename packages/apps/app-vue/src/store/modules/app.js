/* eslint-disable */
const app = {
  namespaced: true,
  state: {
    staticComponent:[]
  },
  mutations: {
    u_staticComponent(state, data){
      state.staticComponent = data
    },
      /*动态设置store 使用方法  this.$store.commit('setData',{key:'name',value:'alice'})*/
    setData(state,payload){
        state[payload['key']] = payload['value'];
    },
  },
}

export default app
