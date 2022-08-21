<template>
    <div class="chat__view">
        <ChatTitle />
        <ChatList />
        <ChatInput />   
    </div>    
</template>

<script>

import ChatTitle from './ChatTitle.vue'
import ChatList from './ChatList.vue'
import ChatInput from './ChatInput.vue'

export default{
    name: 'ChatView',
    components: {
        ChatTitle,
        ChatList,
        ChatInput
    }    
}
</script>

<style lang="scss" scoped>
    .chat__view{
        width: 70%;        
        display: flex;
        flex-direction: column;                
    }
</style>
