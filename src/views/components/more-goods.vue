<template>
    <div class="more-goods">
        <div class="mod_section">
          <div class="mod_title">
            <div class="title_inner">
              <h3 class="tit_center">
                  <span class="tit">热爱那么大，我还要看看</span>
              </h3>
            </div>
          </div>
          <div class="mod_goods mod_goods_h">
            <ul class="goods_list">
              <van-list
                v-model="loading"
                :finished="finished"
                finished-text="我是有底线的"
                @load="onLoad"
              >
                <li class="list_item"
                  v-for="item in moreGoods"
                  :key="item.id"
                  @click.once="routerJump('商品id: ' + item.id)"
                  >
                  <span class="item_link">
                    <span class="goods_pic">
                      <img class="pic" v-lazy="item.imgUrl">
                    </span>
                    <span class="goods_ip">「<span class="name">{{item.name}}</span>」</span>
                    <span class="goods_title goods_title_multirow"><span class="txt">{{item.title}}</span></span>
                    <span class="mod_goods_price" r-notemplate="true">
                      <span class="sign">¥</span><span class="num">{{item.price}}</span>
                    </span>
                    <i v-if="item.reserve" class="mod_mark_tag mark_tag_normal">限时折扣</i>
                    <span v-if="item.priceVip != false" class="mod_price_vip">
                      <span class="price_tag_bg">
                        <span class="name">VIP价</span>
                      </span>
                      <span class="tag_num">¥{{item.priceVip}}</span>
                    </span>
                  </span>
                </li>
              </van-list>
            </ul>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'moreGoods',
    data() {
        return{
            moreGoods: [],
            loading: false,
            finished: false
        }
    },
    created() {
        for(let i = 0; i < 4; i++){
          this.moreGoods.push({
            id: i+1,
            imgUrl: `./img/goods/480_480(${i+1}).png`,
            name: '魔道祖师',
            title: '开播纪念版会员卡组',
            price: Math.floor((Math.random()*300) + 10),
            //随机预约价
            reserve: (() => {
              if(Math.floor((Math.random()*10) + 1) >= 9){
                return true
              }
              return false
            })(),
            priceVip: ''
          })
          //随机vip价格
          this.moreGoods[i].priceVip = (() => {
            if(Math.floor((Math.random()*10) + 1) >= 7){
              return this.moreGoods[i].price - Math.floor((Math.random()*10) + 1)
            }
            return false
          })()
        }
    },
    methods: {
        routerJump(url){
          console.log(url)
        },
        onLoad() {
            if (this.moreGoods.length >= 40) {
              return false
            }
            // 异步更新数据
            setTimeout(() => {
              let j = this.moreGoods.length + 10
              for(let i = this.moreGoods.length; i < j; i++){
                this.moreGoods.push({
                  id: i+1,
                  imgUrl: `./img/goods/480_480(${i+1}).png`,
                  name: '魔道祖师',
                  title: '开播纪念版会员卡组',
                  price: Math.floor((Math.random()*300) + 10),
                  //随机预约价
                  reserve: (() => {
                    if(Math.floor((Math.random()*10) + 1) >= 9){
                      return true
                    }
                    return false
                  })(),
                  priceVip: ''
                })
                //随机vip价格
                this.moreGoods[i].priceVip = (() => {
                  if(Math.floor((Math.random()*10) + 1) >= 7){
                    return this.moreGoods[i].price - Math.floor((Math.random()*10) + 1)
                  }
                  return false
                })()
              }
              // 加载状态结束
              this.loading = false;
              if (this.moreGoods.length >= 40) {
                this.finished = true;
              }
            }, 500);
        }
    }
}
</script>

<style lang="less" scoped>
//更多商品
.mod_goods_h {
  .list_item {
    width: 50%;
  }
  /deep/.van-list__finished-text{
    font-size:14px;
    line-height:26px;
  }
 .goods_ip[data-v-fae5bece] {
    line-height: 17px;
 }
}
</style>