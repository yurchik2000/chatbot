import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import data from '../../db.json'

let store = new Vuex.Store({
    state: {
        contacts: [],
        activeContact: 1
    },
    getters: {},
    mutations: {
        SET_CONTACTS_TO_STORE(state, contacts){
            state.contacts = contacts
        },
        SET_ACTIVE_CONTACT_TO_STATE(state, id){
            state.activeContact = id
        }
    },
    actions: {
        GET_DATA_FROM_JSON({commit}){
            commit('SET_CONTACTS_TO_STORE', data.contacts)
        },
        SET_ACTIVE_CONTACT({commit}, id){
            commit('SET_ACTIVE_CONTACT_TO_STATE', id)
        }
    }
});

export default store;