import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import data from '../../db.json'

let store = new Vuex.Store({
    state: {
        contacts: [],
        activeContact: 1,
        chats: []
    },
    getters: {},
    mutations: {
        SET_CONTACTS_TO_STORE(state, contacts){
            state.contacts = contacts
        },
        SET_CHATS_TO_STORE(state, chats){
            state.chats = chats
        },
        SET_ACTIVE_CONTACT_TO_STATE(state, id){
            state.activeContact = id
        }
    },
    actions: {
        GET_DATA_FROM_JSON({commit}){
            commit('SET_CONTACTS_TO_STORE', data.contacts)
        },
        GET_CHATS_FROM_JSON({commit}){
            commit('SET_CHATS_TO_STORE', data.chats)
        },
        SET_ACTIVE_CONTACT({commit}, id){
            commit('SET_ACTIVE_CONTACT_TO_STATE', id)
        }
    }
});

export default store;