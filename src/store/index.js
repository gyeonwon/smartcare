import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    UserInfo: {UserName: "", CarNo: "", UserLoginId: ""},
    DrvInfo: {SafDrvIdx:"", MovTm:"", drvHstIFList: [], drvHstIFData: {}, drvGpsList: []},
    CarInfo: {AccDist:"", curLat:0, curLon:0, gpsDt: ""},
    ContractInfo: {CarModel:"",ProductYear:"",CarAMT:"",Option:"",Name:"",ContStart:"",ContEnd:"",ContPeriod:"",RentAMT:""},
    CarRepairInfo: {AirFilterBefore: 0, AirFilterCycle: "", AirFilterType: "", EngineOilBefore: 0, EngineOilCycle: "", EngineOilType: ""},
    CarShockInfo: {shockList: []},
  },
  getters: {
    UserInfo(state) { return state.UserInfo },
    DrvInfo(state) { return state.DrvInfo },
    CarInfo(state) { return state.CarInfo },
    ContractInfo(state) { return state.ContractInfo },
    CarRepairInfo(state) { return state.CarRepairInfo },
    CarShockInfo(state) { return state.CarShockInfo },
  },
  mutations: {
    SetUserInfo(state, userInfo) {
        state.UserInfo = userInfo
    },
    SetDrvInfo(state, drvInfo) {
        state.DrvInfo = drvInfo
    },
    SetCarInfo(state, carInfo) {
      state.CarInfo = carInfo
    },
    SetContractInfo(state, contractInfo) {
      state.ContractInfo = contractInfo
    },
    SetCarRepairInfo(state, carRepairInfo) {
      state.CarRepairInfo = carRepairInfo
    },
    SetCarShockInfoo(state, carShockInfo) {
      state.CarShockInfo = carShockInfo
    },
  },
  actions: {
    UpdateUserInfo({ commit }, userInfo) {
        commit('SetUserInfo', { userInfo })
    },
    UpdateDrvInfo({ commit }, drvInfo) {
        commit('SetDrvInfo', { drvInfo })
    },
    UpdateCarInfo({ commit }, carInfo) {
      commit('SetCarInfo', { carInfo })
    },
    UpdateContractInfo({ commit }, contractInfo) {
      commit('SetContractInfo', { contractInfo })
    },
    UpdateCarRepairInfo({ commit }, carRepairInfo) {
      commit('SetCarRepairInfo', { carRepairInfo })
    },
    UpdateCarShockInfo({ commit }, carShockInfo) {
      commit('SetCarShockInfoo', { carShockInfo })
    },
  }
})
