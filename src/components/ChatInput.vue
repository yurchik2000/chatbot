<template>
    <div class="chat__input">        
        <div class="input__wrapper">
            <input 
                class="message__input" 
                type="text" 
                v-model="textValue"
                placeholder="Type your message"
                @keypress.enter="sendMessage"
            />
            <i class="material-icons send__icon" @click="sendMessage">send</i>   
        </div>    
    </div>    
</template>

<script>

import {mapActions, mapState} from 'vuex'

export default{
    name: 'ChatInput',
    data() {
        return {
            textValue: '',
            showMessage: {}
        }
    },
    computed: {
        ...mapState(['chats', 'activeContact'])
    },
    methods: {
        ...mapActions([
            'SET_MESSAGE_TO_LIST',
            'GET_ANSWER_FROM_CHUCK',
            'SET_LAST_DATE_TO_CONTACT'
        ]),
        sendMessage() {
            let newMessage = {
                id: this.chats[this.activeContact - 1].chat.length + 1,
                time: new Date().toLocaleTimeString('en-Us', {
                        hour12: false,
                        hour: 'numeric',
                        minute: 'numeric'
                    }),
                date: new Date().toLocaleDateString('en-Us'),
                text: this.textValue,
                type: 'own'
            }            
            this.SET_LAST_DATE_TO_CONTACT(newMessage.date)
            this.SET_MESSAGE_TO_LIST(newMessage)
            this.textValue = ''            
            setTimeout(this.GET_ANSWER_FROM_CHUCK, 15000)
        }
    }   
}
</script>

<style lang="scss" scoped>
    .chat__input{
        width: 100%;        
        height: 100px;        
        margin-top: auto;
    }
    .input__wrapper{
        margin: 20px;
        display: flex;
    }
    .message__input{
        border: 1px solid lightgray;        
        width: 90%;        
        padding: 15px 60px 15px 15px;
        border-radius: 20px;
        background: #fff; 
        font-size: 20px; 
    }
    .message__input::placeholder{        
        font-size: 20px; 
    }
    .send__icon{
        font-size: 34px;        
        margin-left: -40px;        
        align-items: center;
        margin-top: 10px;
        cursor: pointer;
    }
</style>
