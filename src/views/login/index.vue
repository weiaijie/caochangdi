<template>
    <div class='login'>
        111
    </div>
</template>



<script>
export default {
    name: 'Login',
    data() {
        return{

        }
    },
    watch: {

    },
    created() {
        //登陆页颜色
        document.getElementsByTagName('body')[0].setAttribute('style', 'background:#eee');
    },
    mounted() {

    },
    destroyed() {
        //跳转回商城 改成黑色
        document.getElementsByTagName('body')[0].setAttribute('style', 'background:#000');
    },
    methods: {
        
    }
}
</script>

<style lang='less' scoped>
.login{
    width:320px;
    padding-top:30px;
    margin:auto;
    background:#fff;

}
</style>

