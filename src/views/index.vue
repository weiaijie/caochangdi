<template>
    <div class='index'>
        <router-view/>
        <div id="nav">
          <router-link to="/home">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/login">login</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Index',
    components: {

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
   
}
</style>
