export default {
  setAllBodyData (state, payload) {
    state.gender = payload.gender
    state.age = payload.age
    state.weight = payload.weight
    state.height = payload.height
    state.activityFactor = payload.activityFactor
  },

  setGender (state, payload) {
    state.gender = payload
  },

  setAge (state, payload) {
    state.age = payload
  },

  setWeight (state, payload) {
    state.weight = payload
  },

  setHeight (state, payload) {
    state.height = payload
  },

  setActivityFactor (state, payload) {
    state.activityFactor = payload
  }
}
