<template>
    <div class="chat__input">
        <div class="input__wrapper">
            <input class="message__input" placeholder="Type your message"/>
        </div>    
    </div>    
</template>

<script>

export default{
    name: 'ChatInput',
    components: {
        
    }    
}
</script>

<style lang="scss" scoped>
    .chat__input{
        width: 100%;        
    }
    .input__wrapper{
        margin: 20px;
    }
    .message__input{
        border: 1px solid lightgray;        
        width: 90%;        
        padding: 15px;
        border-radius: 20px;
        background: #fff;                
    }
</style>
