<template>
    <div class="contacts__view">        
        <ContactsAbout/>
        <ContactsList />
    </div>        
</template>

<script>

import ContactsAbout from './ContactsAbout.vue'
import ContactsList from './ContactsList.vue'

export default{
    name: 'ContactsView',
    components: {
        ContactsAbout,
        ContactsList
    }
}
</script>

<style lang="scss" scoped>
    .contacts__view{
        width: 30%;
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
</style>
