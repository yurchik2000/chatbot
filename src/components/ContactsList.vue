<template>
    <div class="contacts__list">
        <div class="input__wrapper">
            <i class="material-icons search__icon">search</i>   
            <input 
                class="search__input" 
                type="text" 
                placeholder="Search or start new chat"                           
                v-model="searchText"
            />
        </div>            
        <div class="contact__list-title">Chats</div>                                                
        <ContactsUser 
            v-for="contact in filteredContacts"            
            :key="contact.id"
            :contact_data='contact'            
            :last_message="chats[contact.id-1].chat[chats[contact.id-1].chat.length - 1].text"
            :last_date="chats[contact.id-1].chat[chats[contact.id-1].chat.length - 1].date"
        />        
    </div>
</template>

<script>

import ContactsUser from './ContactsUser.vue'
import {mapActions, mapState} from 'vuex'

export default{
    name: 'ContactsList',
    components: {
        ContactsUser
    },
    data() {
        return {            
            searchText: '',            
        }
    },
    computed: {
        ...mapState(['contacts', 'chats']),        
        filteredContacts: function() {            
            this.sortedByLastMessage();
            let answer = this.contacts;
            let text = this.searchText.toLowerCase();
            if (this.searchText) 
                answer = this.contacts.filter(function(contact) {
                return contact.name.toLowerCase().includes(text)
            })            
            return answer
        }   
    },
    methods: {
        ...mapActions([
            'GET_DATA_FROM_JSON',
            'SET_ACTIVE_CONTACT'
        ]),   
        sortedByLastMessage(){
            this.contacts.sort((a, b) =>{
                let da = a.lastDate.split('/')
                let db = b.lastDate.split('/')
                let dasum = Number(da[0]) + Number(da[1])*30 + Number(da[2])*365
                let dbsum = Number(db[0]) + Number(db[1])*30 + Number(db[2])*365                
                return dasum < dbsum ? 1 : -1            
            })
        }                             
    },
    mounted() {
        this.GET_DATA_FROM_JSON()
        this.SET_ACTIVE_CONTACT(this.contacts[0].id)
    }
}
</script>

<style lang="scss" scoped>    
    .contacts__list{
        background: #fff;        
        border-right: 1px solid lightgray;
        height: calc(100vh - 90px);
    }
    .contact__list-title{
        font-size: 24px;  
        font-weight: 700;
        margin-left: 10px;      
        margin-bottom: 30px;
        margin-top: 20px;
        color: lightblue;
    }
    .search__input{
        border: 1px solid lightgray;        
        width: 80%;        
        padding: 10px 10px 10px 45px;
        border-radius: 20px;
        background: #fff;                
        font-size: 20px;
    }
    .search__input::placeholder{
        font-size:20px;
    }
    .input__wrapper{                
        width: 100%;
        background: #f5f5f5;                                
        position: relative;        
        padding: 15px 0;
        border-bottom: 1px solid lightgray;
    }    
    .search__icon{
        font-size: 34px;                
        align-items: center;        
        position: absolute;
        z-index: 2;     
        top: 20px;
        left: 5px;
    }
</style>
