import BodyDataState from './body-data-state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export default {
  namespaced: true,
  state: new BodyDataState(),
  actions,
  mutations,
  getters
}
