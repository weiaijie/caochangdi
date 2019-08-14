<template>
  <div class="menu_fixed">
    <ul class="menu_list">
      <li class="menu_item" v-for="(item, index) in menulist" :key="index" @click="jump(item.url)">
        <i class="icon_ml">
          <img v-if="$route.path != '/'+item.url" :src="'../img/svg/'+ item.src1" >
          <img v-else :src="'../img/svg/'+ item.src2" >
        </i>
        <span class="icon_txt">{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'MenuFixed',
  data() {
    return{
      menulist: [
        {
          title: '首页',
          url: 'home',
          src1: 'menu_item_1.svg',
          src2: 'menu_item_1_current.svg'
        },
        {
          title: '分类',
          url: 'ip_cat',
          src1: 'menu_item_2.svg',
          src2: 'menu_item_2_current.svg'
        },
        {
          title: '购物车',
          url: 'trolley',
          src1: 'menu_item_3.svg',
          src2: 'menu_item_3_current.svg'
        },
        {
          title: '我的',
          url: 'mine',
          src1: 'menu_item_4.svg',
          src2: 'menu_item_4_current.svg'
        }
      ]
    }
  },
  created() {
  },
  methods: {
    jump(url) {
      if(this.$route.path != '/' + url){
        this.$router.push(url)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.menu_fixed{
  z-index:50;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height:50px;
  background-color:#fff;
  .menu_list {
    display: -webkit-flex;
    display: flex;
    width: 100%;
  }
  .menu_item {
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    width: 0;
    padding: 1px 0 0;
    text-align: center;
    font-size: 12px;
    color: #333;
    .icon_ml {
      width: 30px;
      height: 30px;
      margin: 0 auto;
      margin-top: 2px;
      display: block;
    }
    .icon_txt {
      display: block;
      margin: 0 auto;
      font-size: 11px;
      line-height: 14px;
      color: #333;
    }
  }

  
}
</style>
