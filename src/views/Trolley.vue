<template>
  <div class="trolley">
    <div class="mod_section">

      <div class="content_empty">
        <i class="icon_big icon_cart_big"></i>
        <div class="text">购物车空空的~</div> 
      </div>
    </div>
      
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
// .mod_section:before{
//   content: '';
//   display: block;
//   padding-bottom: 50%;
// }
.content_empty {
    position: relative;
    width: 100%;
    height: 200px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    display: -webkit-flex;
    -webkit-align-items: center;
    -webkit-justify-content: center;
    -webkit-flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  .icon_cart_big {
    background-position: 0 -180px;
  }
  .icon_big {
    display: block;
    width: 80px;
    height: 80px;
    margin: 0 auto 5px;
    background: url('/img/svg/sprite_status_base.svg') no-repeat 9999px 9999px;
    background-position: 0 0;
  }
  .icon_cart_big {
    background-position: 0 -180px;
  }
  .text {
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #999;
  }
}
</style>