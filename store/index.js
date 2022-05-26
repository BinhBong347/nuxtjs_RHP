import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            decks: []
        },
        mutations: {
            setDecks(state, payload) {
                state.decks = payload
            }
        },
        actions: {
            setDecks(vuexContext, payload) {
                vuexContext.commit('setDecks', payload)
            }
        },
        getters: {
            decks(state) {
                return state.decks
            }
        }
    })
}

export default createStore