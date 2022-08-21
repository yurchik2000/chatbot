<template>
    <div class="chat_list">                        
        <ChatMessage 
             v-for="chat in chats[chats.findIndex(e => e.id === activeContact)].chat"
            :key="chat.id"        
            :chat_data='chat'
            :activeContactAvatar='contacts.find(e => e.id === activeContact).avatarUrl'
         />                  
    </div>    
</template>

<script>

import ChatMessage from '@/components/ChatMessage.vue'
import {mapActions, mapState} from 'vuex'

export default{
    name: 'ChatList',
    components: {
        ChatMessage
    },
    computed: {
        ...mapState(['chats', 'activeContact', 'contacts'])
    },
    methods: {
        ...mapActions([
            'GET_CHATS_FROM_JSON'
        ])
    },
    mounted() {
        this.GET_CHATS_FROM_JSON()
    }
    
}
</script>

<style lang="scss" scoped>
    .chat_list{
        height: calc(100vh - 180px);
        background: #fff;
        border-bottom: 1px solid lightgray;
        padding-top: 20px;
        overflow: auto;
    }
</style>
