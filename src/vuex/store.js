import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import data from '../../db.json'

let store = new Vuex.Store({
    state: {
        contacts: [],
        activeContact: 1,
        chats: [{
           chat: [{
            date: Date,            
           }] 
        }]
    },
    getters: {},
    mutations: {
        SET_CONTACTS_TO_STORE(state, contacts){
            state.contacts = contacts
            localStorage.setItem('contacts', JSON.stringify(contacts))
        },
        SET_CHATS_TO_STORE(state, chats){
            state.chats = chats
            localStorage.setItem('chats', JSON.stringify(chats))
        },
        SET_ACTIVE_CONTACT_TO_STATE(state, id){
            state.activeContact = id
        },
        APPEND_MESSAGE_TO_LIST(state, message){            
            state.chats[state.activeContact - 1].chat.push(message)
            localStorage.setItem('chats', JSON.stringify(this.state.chats))
        },
        SET_LAST_DATE_TO_CONTACTS(state, newDate){
            let position = state.contacts.findIndex(e => e.id === state.activeContact)
            console.log(2, position)
            state.contacts[position].lastDate = newDate
            localStorage.setItem('contacts', JSON.stringify(state.contacts))
        }
    },
    actions: {
        GET_DATA_FROM_JSON({commit}){
            if (localStorage.contacts) commit('SET_CONTACTS_TO_STORE', JSON.parse(localStorage.contacts))
            else commit('SET_CONTACTS_TO_STORE', data.contacts)
        },
        GET_CHATS_FROM_JSON({commit}){            
            if (localStorage.chats) commit('SET_CHATS_TO_STORE', JSON.parse(localStorage.chats))
            else commit('SET_CHATS_TO_STORE', data.chats)
        },
        SET_ACTIVE_CONTACT({commit}, id){
            console.log(1, id)
            commit('SET_ACTIVE_CONTACT_TO_STATE', id)
        },
        SET_MESSAGE_TO_LIST({commit}, message) {            
            commit('APPEND_MESSAGE_TO_LIST', message)            
        },
        SET_LAST_DATE_TO_CONTACT({commit}, newDate){
            console.log(1, newDate)
            commit('SET_LAST_DATE_TO_CONTACTS', newDate)
        },
        GET_ANSWER_FROM_CHUCK({commit}) {
            return axios.get('https://api.chucknorris.io/jokes/random')
             .then((response) => {                
                let newMessage = {
                    id: this.state.chats[this.state.activeContact - 1].chat.length + 1,
                    time: new Date().toLocaleTimeString('en-Us', {
                        hour12: false,
                        hour: 'numeric',
                        minute: 'numeric'
                    }),
                    date: new Date().toLocaleDateString('en-Us', {
                        day: '2-digit',
                        month: 'numeric',
                        year: 'numeric'
                        
                    }),
                    text: response.data.value,
                    type: 'other'
                }
                commit('APPEND_MESSAGE_TO_LIST', newMessage)                
             })
        }
    }
});

export default store;