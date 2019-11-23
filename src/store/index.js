import Vue from 'vue'
import Vuex from 'vuex'
import store from 'store'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    cityId: store.get('city').id || 1,
    cityName: store.get('city').nm || '北京'
  },
  mutations: {
    setCity(state, payload) {
      state.cityId = payload.id;
      state.cityName = payload.nm
    }
  },
  actions: {
    changeCity({
      commit
    }, action) {
      commit('setCity', action)
    }
  },
  modules: {}
})