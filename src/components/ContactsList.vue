<template>
    <div class="contacts__list">
        <div class="contact__list-title">Chats</div>        
        <ContactsUser 
            v-for="contact in contacts"
            :key="contact.id"
            :contact_data='contact'            
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
        }
    },
    computed: {
        ...mapState(['contacts'])
    },
    methods: {
        ...mapActions([
            'GET_DATA_FROM_JSON'
        ])
    },
    mounted() {
        this.GET_DATA_FROM_JSON()
    }
}
</script>

<style lang="scss" scoped>    
    .contacts__list{
        background: #fff;
        padding-top: 20px;
        border-right: 1px solid lightgray;

    }
    .contact__list-title{
        font-size: 24px;  
        font-weight: 700;
        margin-left: 10px;      
        margin-bottom: 30px;
        color: lightblue;
    }

</style>
