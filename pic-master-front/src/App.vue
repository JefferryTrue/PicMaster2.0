<template>
  <div id="app">
    <Header1></Header1>
    <router-view/>
    <Footer1></Footer1>
    <!--test-->
  </div>
</template>

<script>
import Header1 from './components/Headers'
import Footer1 from './components/Footer'
export default {
  name:'app',
  data(){
    return {
    }
  },
  components:{
    Header1,
    Footer1
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  
}

</style>
