import { activityFactorValues } from '@/shared/constants'

export default {
  setAllBodyData (state, payload) {
    state.gender = payload.gender
    state.age = payload.age
    state.weight = payload.weight
    state.height = payload.height
    state.activityFactor = setActivityFactorAsNumber(payload.activityFactor)
  }
}

function setActivityFactorAsNumber (activityName) {
  return activityFactorValues[activityName]
}
