<template>
    <div class="chat_list">                
        <ChatMessage 
             v-for="chat in chats[activeContact-1].chat"
            :key="chat.id"        
            :chat_data='chat'
            :activeContactAvatar='contacts[activeContact-1].avatarUrl'
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
        height: 60vh;
        background: #fff;
        border-bottom: 1px solid lightgray;
        padding-top: 20px;
    }
    
</style>
