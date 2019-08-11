<template>
    <div class="menu_fixed">
        <div id="nav">
          <router-link to="/home">Home</router-link> |
          <router-link to="/about">About</router-link> |
          <router-link to="/login">login</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:'MenuFixed',
    data() {
        return{

        }
    }
}
</script>
