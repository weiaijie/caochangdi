<template>
    <div class='index'>
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/login">login</router-link>
        </div>
        <router-view/>
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
