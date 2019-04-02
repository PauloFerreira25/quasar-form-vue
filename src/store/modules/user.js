const state = {
    temp: {
        name: "b"
    },
    checkoutStatus: null
}
const mutations = {
    updateState(state, payload) {
        console.log('mutations - updateState', { payload })
        let tempArray = String(payload.state).split('.');
        let last = tempArray.pop()
        let stateObject = tempArray.reduce((p, c) => p && p[c] || null, state)
        stateObject[last] = payload.event
        console.log({ state })
    }
}
const actions = {
    updateState({ commit }, data) {
        console.log('actions - updateState', { data })
        commit('updateState', data)
    }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations
}