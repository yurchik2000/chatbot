<template>
    <div class="contacts__user" @click="setActiveContact(contact_data.id)">
        <div class="about__box"> 
            <img class="about__avatar" :src=" require('../assets/img/'+ contact_data.avatarUrl) ">            
            <img class="about__check" src="@/assets/img/green.png">
        </div>
        <div>
            <p class='contact__name'>
                {{contact_data.name}}
            </p>
            <p class='last_message'>

            </p>
        </div>
        
        
    </div>    
</template>

<script>

    import {mapActions, mapState} from 'vuex'

    export default{
        name: 'ContactsUser',
        props: {
            contact_data: {
                type: Object,
                default: () => {}
            },
            message: {
                type: String,
                default: () => ''
            },
            date: {
                type: Date                
            }
        },
        data() {
            return {}
        },
        computed: {
        ...mapState(['activeContact'])
        },
        methods: {
            ...mapActions([
            'GET_DATA_FROM_JSON',
            'SET_ACTIVE_CONTACT'
        ]),
            setActiveContact(id) {
                this.SET_ACTIVE_CONTACT(id)
            }
        }        
    }
</script>

<style lang="scss" scoped>
    .contacts__user{
        display: flex;        
        margin: 5px 0;
        cursor: pointer;
        transition: all .5s;
    }
    .contacts__user:hover{
        background: #dddddd;
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
        font-size: 20px;
        margin-left: 10px;
    }

</style>
