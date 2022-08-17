<template>
    <div class="main__wrapper">
        <ContactsView />
        <ChatView />
    </div>    
</template>

<script>

import ContactsView from './ContactsView.vue'
import ChatView from './ChatView.vue'

export default {
    name: 'MainWrapper',
    components: {
        ContactsView,
        ChatView
    },
    props: {},
    data() {
        return {}
    },
    computed: {}    
}

</script>

<style lang="scss" scoped>    
    .main__wrapper{
        padding: 5px;
        display: flex;
        background: #f5f5f5;                        
        max-width: 1440px;
        margin: 0 auto;
    }

</style>