export default {
  basalMetabolicRate (state) {
    return ((10 * state.weight) + (6.25 * state.height) - (5 * state.age) + 5) * state.activityFactor
  }
}
