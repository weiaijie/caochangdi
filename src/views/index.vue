<template>
    <div class='index'>
        <router-view/>
        <hr style="border:0; height:50px;background-color:#fff;">
        <MenuFixed></MenuFixed>
    </div>
</template>

<script>
import MenuFixed from './components/menu-fixed';
export default {
    name: 'Index',
    components: {
        MenuFixed
    },
    data() {
        return{
        }
    },
    watch: {
         
    },
    created(){
        
    },
    mounted() {

    },
    destroyed() {

    }
}
</script>

<style lang="less" scoped>
.index{
    max-width:640px;
    margin: 0 auto;
    background:#fff;
    position:relative;
   
}
</style>
