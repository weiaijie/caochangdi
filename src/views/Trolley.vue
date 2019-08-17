<template>
    <div class="trolley">
        <div class="mod_section">购物车空空的~</div>
        <MoreGoods></MoreGoods>
    </div>
</template>

<script>
import MoreGoods from './components/more-goods';
export default {
    name: 'trolley',
    components: {
        MoreGoods
    },
    data() {
        return{

        }
    }
}
</script>

<style lang="less" scoped>
MoreGoods{
    margin-bottom:50px;
}

.mod_section:before{
    content: '';
    display: block;
    padding-bottom: 50%;
}
</style>