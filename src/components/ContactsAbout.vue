<template>
    <div class="contacts__about">        
        <div class="about__box"> 
            <img class="about__avatar" src="@/assets/img/account.svg">            
            <img class="about__check" src="@/assets/img/green.png">
        </div>                        
    </div>    
</template>

<script>

export default{
    name: 'ContactsAbout',
    data() {
        return {
            searchText: ''
        }
    },    
}
</script>

<style lang="scss" scoped>            
    .contacts__about{
        width: 100%;        
        background: #f5f5f5;                                        
        border-right: 1px solid lightgray;        
        height: 90px;
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
</style>
