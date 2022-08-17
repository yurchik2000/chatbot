<template>
  <div id="app">    
    <MainWrapper />
  </div>
</template>

<script>
import MainWrapper from './components/MainWrapper'

export default {
  name: 'App',
  components: {
    MainWrapper
  }
}
</script>

<style lang="scss" scoped>
  #app{
    background: #f5f5f5;                        
  }
</style>
