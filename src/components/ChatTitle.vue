<template>
    <div class="chat_title">        
        <div class="about__box"> 
            <img class="about__avatar" :src=" require('../assets/img/'+ contacts[activeContact-1].avatarUrl) ">            
            <img class="about__check" src="@/assets/img/green.png">
        </div>
        <p class='contact__name'>
                {{contacts[activeContact-1].name}}
        </p>        
    </div>    
</template>

<script>

import {mapState} from 'vuex'


export default{
    name: 'ChatTile',
    computed: {
        ...mapState(['activeContact', 'contacts'])
    },
    
}
</script>

<style lang="scss" scoped>
    .chat_title{
        width: 100%;        
        display: flex;
        background: #f5f5f5;        
        border-bottom: 1px solid lightgray;
    }
    .about__avatar{
        height: 60px;
        border-radius: 50%;
        background: #dddddd;
        margin: 10px;
    }
    .about__check{
        width: 20px;        
        margin-left: -25px;
        margin-bottom: 5px;
    }
    .contact__name{
        font-size: 25px;
        font-weight: 700;
        margin-left: 10px;
    }
    
</style>
