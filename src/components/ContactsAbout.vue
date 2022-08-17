<template>
    <div class="contacts__about">
        <div class="about__box"> 
            <img class="about__avatar" src="@/assets/img/account.svg">            
            <img class="about__check" src="@/assets/img/green.png">
        </div>
        <div class="input__wrapper">
            <input class="search__input" placeholder="Search or start new chat"/>

        </div>    
    </div>    
</template>

<script>

export default{
    name: 'ContactsAbout',
    
}
</script>

<style lang="scss" scoped>        
    *{
        box-sizing: border-box;
    }
    .contacts__about{
        width: 100%;        
        background: #f5f5f5;                                
        border-bottom: 1px solid lightgray;
        border-right: 1px solid lightgray;        
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
    .search__input{
        border: 1px solid lightgray;        
        width: 80%;        
        padding: 10px 10px 10px 35px;
        border-radius: 20px;
        background: #fff;        
        position: relative;        
    }
    .input__wrapper{
        position: relative;        
        margin: 30px 0;
        width: 90%;
    }
    .input__wrapper::before{
        content: url('@/assets/img/magnify.svg');
        position: absolute;        
        height: 25px;
        width: 25px;
        position: absolute;
        top: calc(50% - 10px);
        left: 5px;
        z-index: 2;
    }
</style>
