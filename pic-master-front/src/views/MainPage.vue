<template>
  <div class="mainpage">
    <div class="container">
        <Intro class="parts" id="intro"></Intro>
        <Upload class="parts" id='upload'></Upload>
        <Statement class="parts" id="statement"></Statement>
        <!-- <Intro class="parts" id="intro"></Intro>
        <Intro class="parts" id="intro"></Intro>
        <Intro class="parts" id="intro"></Intro> -->
    </div>
  </div>
</template>

<script>
import Intro from '../components/Intro'
import Upload from '../components/Upload'
import Statement from '../components/Statement'
export default {
    name:'mainpage',
    data(){
        return {

        }
    },
    components:{
        Intro,
        Upload,
        Statement
}
}
</script>

<style scoped>

.mainpage{
    display: block;
    margin: 0;
    padding: 0;
    background-color: #ffb993;
}

.container{
    display: block;
    margin: auto;
    max-width: 1376px;
}

.parts{
    width: 100%;
}

</style>