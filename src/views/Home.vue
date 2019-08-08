<template>
  <div class="home">
    <div class="mod_head_search_home">
      <div class="head_search" @click.once="routerJump('headSearch')">
	    	<div>
      		<i class="icon icon_search"></i>
      		<span class="icon_txt">{{hotSearch}}</span>
        </div>
        <div class="cate_list">
          <span 
            class="item" 
            v-for="item in cateListData" 
            :data-href='item.href' 
            :key="item.name" 
            @click.once="routerJump(item.href)">
            {{item.name}}
          </span>
        </div>
      </div>
      <div 
        class="right_icon" 
        data-href="ip_cat" 
        @click.once="routerJump('ip_cat')">
        <svg class="svg_content" height="19" viewBox="0 0 19 19" width="19" xmlns="http://www.w3.org/2000/svg"><path d="m16.3622149 15.5225256 1.6722131 1.6722131c.2318738.2318738.2318738.6078155 0 .8396893s-.6078155.2318738-.8396893 0l-1.6722131-1.6722131c-.5823612.4147113-1.2947929.6586184-2.0641923.6586184-1.9675144 0-3.56249997-1.5949855-3.56249997-3.5625 0-1.9675144 1.59498557-3.56249997 3.56249997-3.56249997 1.9675145 0 3.5625 1.59498557 3.5625 3.56249997 0 .7693994-.2439071 1.4818311-.6586184 2.0641923zm-1.6032863-14.73085893h1.4702381c.6558381 0 1.1875.53166186 1.1875 1.1875v1.47023809c0 2.68581334-2.1772819 4.86309524-4.8630953 4.86309524h-1.4702381c-.6558381 0-1.18749997-.53166186-1.18749997-1.1875v-1.4702381c0-2.68581333 2.17728187-4.86309523 4.86309527-4.86309523zm-11.30952384 0c2.68581334 0 4.86309524 2.1772819 4.86309524 4.86309523v1.4702381c0 .65583814-.53166186 1.1875-1.1875 1.1875h-1.4702381c-2.68581333 0-4.86309523-2.1772819-4.86309523-4.86309524v-1.47023809c0-.65583814.53166186-1.1875 1.1875-1.1875zm0 16.62500003h-1.47023809c-.65583814 0-1.1875-.5316619-1.1875-1.1875v-1.4702381c0-2.6858134 2.1772819-4.86309527 4.86309523-4.86309527h1.4702381c.65583814 0 1.1875.53166187 1.1875 1.18749997v1.4702381c0 2.6858134-2.1772819 4.8630953-4.86309524 4.8630953zm11.30952384-15.43750003c-2.0299752 0-3.6755953 1.64562004-3.6755953 3.67559523v1.4702381h1.4702381c2.0299752 0 3.6755953-1.64562004 3.6755953-3.67559524v-1.47023809zm-11.30952384 0h-1.47023809v1.47023809c0 2.0299752 1.64562004 3.67559524 3.67559523 3.67559524h1.4702381v-1.4702381c0-2.02997519-1.64562004-3.67559523-3.67559524-3.67559523zm0 14.25000003c2.0299752 0 3.67559524-1.6456201 3.67559524-3.6755953v-1.4702381h-1.4702381c-2.02997519 0-3.67559523 1.6456201-3.67559523 3.6755953v1.4702381zm10.00892854-.3958334c1.3116763 0 2.375-1.0633237 2.375-2.375 0-1.3116762-1.0633237-2.375-2.375-2.375-1.3116762 0-2.375 1.0633238-2.375 2.375 0 1.3116763 1.0633238 2.375 2.375 2.375z" fill="#fff"></path></svg>
      </div>
    </div>
    <!-- 横滑的大图 -->
    <div class="mod_swiper_card">
      <van-swipe :autoplay="10000">
        <van-swipe-item 
          v-for="item in modSwiperCards" 
          :key='item.alt' 
          :data-swiper-slide-index='item.alt'
          @click.once="routerJump(item.href)"
          >
          <img :src="item.url" :alt="item.alt">
        </van-swipe-item>
        <div class="custom-indicator" >
            <!-- <i class="" v-for="item in modSwiperCards" :key="item.alt">{{item.alt}}</i> -->
        </div>
      </van-swipe>
      <div class="swiper_mask">
        <div class="rect_mask rect_mask_left"></div>
        <div class="pic"></div>
        <div class="rect_mask rect_mask_right"></div>
      </div>
    </div>
    <!-- 导航 -->
    <div class="mod_section">
      <div class="mod_channel_nav">
        <div class="nav_list">
          <div class="nav_item" v-for="item in modChannelNav.navList" :key="item.title" @click.once="routerJump(item.href)">
              <span class="icon_ml">
                  <img :src="item.imgUrl" :alt="item.title">
              </span>
              <span class="icon_txt">{{item.title}}</span>
              <span class="icon_desc">{{item.meta}}</span>
          </div>
        </div>
        <div class="ip_list">
          <div class="nav_item" v-for="item in modChannelNav.ipList" :key="item.title" @click.once="routerJump(item.href)">
              <span class="icon_ml">
                  <img :src="item.imgUrl" :alt="item.title">
              </span>
              <span class="icon_txt">{{item.title}}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 活动三商品  比如：新品首发 -->
    <div class="mod_section">
      <div class="mod_title">
        <div class="title_inner">
          <h3 class="tit_center">
              <span class="tit">魔道祖师羨云篇周边</span>
              <van-icon name="arrow" size="20" class="icon icon_more" @click.once="routerJump('ip_products?ipId=230')" />
          </h3>
        </div>
      </div>
      <div class="mod_goods mod_goods_v">
        <ul class="goods_list">
          <li class="list_item" 
            v-for="item in goods.activityGoods"
            :key="item.id"
            @click.once="routerJump('商品id: ' + item.id)"
            >
            <span class="item_link">
              <span class="goods_pic">
                <img class="pic" :src="item.imgUrl">
              </span>
              <span class="goods_ip">「<span class="name">{{item.name}}</span>」</span>
              <span class="goods_title goods_title_multirow"><span class="txt">{{item.title}}</span></span>
              <span class="mod_goods_price" r-notemplate="true">
                <span class="sign">¥</span><span class="num">{{item.price}}</span>
              </span>
              <i v-if="item.reserve" class="mod_mark_tag mark_tag_normal">预订价</i>
              <!-- <span v-if="item.priceVip != false" class="mod_price_vip">
                <span class="price_tag_bg">
                  <span class="name">VIP价</span>
                </span>
                <span class="tag_num">¥{{item.priceVip}}</span>
              </span> -->
            </span>
          </li>
        </ul>
      </div>
    </div>
    
  </div>
</template>


<script>
import { format } from 'path';
export default {
  name: 'home',
  components: {
    
  },
  data() {
    return{
      search:'',
      placeholder:'saber',
      placeholder1:'输入你感兴趣的商品或名片',
      hotSearch:'陈情令',
      cateListData: [
        {
          name: '魔道祖师',
          href: 'https://cy.qq.com/mall/cy/iwCWpLDR.html?ptag=from%3Abanner%3Bhd%3A1239&amp;ptag'
        },
        {
          name: '全职高手',
          href: 'https://mall.video.qq.com/activity_shelf_page?iPageId=207'
        }
      ],
      modSwiperCards: [
        {
          alt: '1',
          url: require('../icons/mod_swiper_card1.png'),
          href: 'mod_swiper_card1'
        },
        {
          alt: '2',
          url: require('../icons/mod_swiper_card2.png'),
          href: 'mod_swiper_card2'
        },
        {
          alt: '3',
          url: require('../icons/mod_swiper_card3.png'),
          href: 'mod_swiper_card3'
        },
        {
          alt: '4',
          url: require('../icons/mod_swiper_card4.png'),
          href: 'mod_swiper_card4'
        },
        {
          alt: '5',
          url: require('../icons/mod_swiper_card5.png'),
          href: 'mod_swiper_card5'
        }
      ],
      modChannelNav: {
        navList: [
          {
            title: '今日上新',
            meta: '就问你来不来',
            imgUrl: require('../icons/mod_channel_nav1.png'),
            href:'1'
          },
          {
            title: '腾讯独家',
            meta: '宇宙仅此一家',
            imgUrl: require('../icons/mod_channel_nav2.png'),
            href:'2'
          },
          {
            title: '手办专区',
            meta: '买手办到咩家',
            imgUrl: require('../icons/mod_channel_nav3.png'),
            href:'3'
          },
          {
            title: '原著读物',
            meta: '热剧抢先看',
            imgUrl: require('../icons/mod_channel_nav4.png'),
            href:'4'
          }
        ],
        ipList: [
          {
            title: '魔道祖师',
            imgUrl: require('../icons/mod_channel_nav5.png'),
            href:'5'
          },
          {
            title: 'QQ黄金鹅',
            imgUrl: require('../icons/mod_channel_nav6.png'),
            href:'6'
          },
          {
            title: '陈情令年卡',
            imgUrl: require('../icons/mod_channel_nav7.png'),
            href:'7'
          },
          {
            title: '早鸟票',
            imgUrl: require('../icons/mod_channel_nav8.png'),
            href:'8'
          }
        ]
      },
      goods: {
        activityGoods: []
      }
    }
  },
  watch: {

  },
  created(){
    for(let i = 0; i < 9; i++){
      this.goods.activityGoods[i] = {
        id: i,
        imgUrl: require(`../icons/goods/480_480(${i+1}).png`),
        name: '魔道祖师',
        title: '开播纪念版会员卡组',
        price: Math.floor((Math.random()*300) + 10),
        reserve: (() => {
          if(Math.floor((Math.random()*10) + 1) >= 9){
            return true
          }
          return false
        })(),
        // priceVip: ((i) => {
        // // if(Math.floor((Math.random()*10) + 1) >= 7){
        // //   return this.price - 1
        // // }
        // // return false
        // return i
        // })(this)
      }
      // console.log(this.goods.activityGoods[i].priceVip)
      // console.log(this.goods.activityGoods[i].id)
    }
    
    console.log(this.goods.activityGoods)
  },
  mounted(){

  },
  destroyed() {

  },
  methods: {
    routerJump(url){
      console.log(url)
    }
  }
}
</script>

<style lang='less' scoped>
.van-swipe{
  max-width:640px;
}
.home{
  background-color: #f3f4f4;
}
.mod_section{
  background: #ffffff;
  margin-bottom: 6px;
}

.mod_head_search_home {
    position: absolute;
    display: flex;
    z-index: 5;
    height: 46px;
    width: 100%;
    padding: 11px 10px 9px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    .head_search{
      display: -webkit-flex;
      display: flex;
      justify-content: space-between;
      width: 87%;
      height: 30px;
      margin-right: 10px;
      border-radius: 16px;
      background: rgba(153,153,153,.2);
    }
    
    .icon_search {
      position: relative;
      margin: 6px 5px 7px 10px;
      display: inline-block;
      vertical-align: top;
      color: #fff;
    }
    .icon {
        width: 20px;
        height: 20px;
    }
    .icon_search:before {
        position: absolute;
        top: 0;
        left: 0;
        content: ' ';
        width: 12px;
        height: 12px;
        border: 2px solid #fff;
        border-radius: 100%;
    }
    .icon_search:after {
        position: absolute;
        right: 2px;
        bottom: 2px;
        content: ' ';
        width: 2px;
        height: 6px;
        font-size: 0;
        background: #fff;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
    .icon_txt {
        font-family: PingFang-SC-Medium;
        font-size: 14px;
        color: #fff;
        letter-spacing: 0;
        text-align: center;
        line-height: 30px;
        height: 30px;
        display: inline-block;
        max-width: 72px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .cate_list {
        height: 30px;
        padding: 0 5px;
        overflow: hidden;
    }
    .cate_list .item {
        display: inline-block;
        vertical-align: top;
        padding: 0 4px;
        opacity: .8;
        font-family: PingFang-SC-Medium;
        font-size: 12px;
        color: #fff;
        letter-spacing: 0;
        text-align: center;
        line-height: 30px;
        height: 30px;
        max-width: 48px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .right_icon {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        background: rgba(153,153,153,.2);
        .svg_content {
          line-height: 30px;
          height: 30px;
          padding-left: 6.5px;
        }
    }
}

.mod_swiper_card{
  position: relative;
  .van-swipe{
    /deep/ .van-swipe__indicators {
      bottom: 10px;
      z-index:2;
    }
    /deep/ .van-swipe__indicator {
        width: 20px;
        height: 3px;
        border-radius: 1.5px;
        cursor: pointer;
    }
    /deep/ .van-swipe__indicator:not(:last-child) {
      margin-right: 0;
    }
    /deep/ .van-swipe__indicator--active{
      background-color:#ffffff;
      opacity: 1;
    }
  }
  .swiper_mask{
    position:absolute;
    left:0;
    bottom:0;
    width:100%;
    .pic {
      width: 100%;
      height: 100%;
      background: url(../icons/svg/bg_mask_headimg.svg) no-repeat center bottom;
      background-size: 100%;
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      pointer-events: none;
    }
    .rect_mask{
      width: 5px;
      height: 100%;
      position: absolute;
      background-color: #ffffff;
      z-index: 1;
    }
    .rect_mask_left {
      border-top-right-radius: 5px;
      left:0;
    }
    .rect_mask_right {
      border-top-left-radius: 5px;
      right:0;
    }
  }
  .swiper_mask:after {
    position: relative;
    display: block;
    content: ' ';
    width: 100%;
    padding-bottom: 5.333%;
  }

}

// 导航样式
.mod_section{
  .mod_channel_nav {
    margin: 0 15px 6px;
    background: #fff;
    .nav_item {
      -webkit-flex: 1 1 auto;
      flex: 1 1 auto;
      width: 0;
      .icon_ml {
        display: block;
        width: 45px;
        height: 45px;
        margin: 0 auto 2px;
        color: #222;
      }
    }
    .nav_list {
      display: -webkit-flex;
      display: flex;
      font-size: 0;
      letter-spacing: -3px;
      padding: 20px 0;
      .icon_ml {
        width: 48px;
        height: 48px;
        margin: 0 auto 9px;
      }
      .icon_txt {
            font-size: 14px;
            color: #333;
            letter-spacing: 0;
            text-align: center;
            line-height: 14px;
      }
      .icon_desc {
            font-size: 12px;
            color: #999;
            letter-spacing: 0;
            text-align: center;
            line-height: 12px;
            margin-top: 4px;
            display: block;
      }
    }
    .ip_list {
      display: -webkit-flex;
      display: flex;
      font-size: 0;
      padding: 7px 0 6px 0;
      letter-spacing: -3px;
      background: #fafafa;
      box-shadow: 0 1px 4px 0 rgba(0,0,0,.18);
      border-radius: 4px;
      margin-bottom: 20px;
      .icon_ml {
        margin-bottom: 7.6px;
      }
      .icon_txt {
        font-size: 12px;
        color: #999;
        letter-spacing: 0;
        text-align: center;
        line-height: 12px;
      }
    }
  }
  .mod_channel_nav:after {
      content: ' ';
      width: 100%;
      background: #fff;
      display: table;
      margin-top: 5px;
  }
}

//商品
.mod_section{
  .mod_title {
    padding: 10px 14px 10px;
    .tit_center {
      text-align: center;
      font-weight: 400;
      .tit {
        display: inline-block;
        vertical-align: top;
        color: #222;
        font-size: 18px;
        line-height: 30px;
        font-weight: 400;
      }
      .icon_more {
        position: relative;
        top: 4px;
        vertical-align: top;
        margin-left: 2px;
        color: #ccc;
        line-height: 22px;  
      }
    }
  }
  .mod_goods {
    padding: 0 11px;
    overflow: hidden;
    .goods_ip {
      position: relative;
      z-index: 3;
      left: -7px;
      width: -webkit-calc(100% + 9px);
      width: calc(100% + 9px);
      display: block;
      color: #666;
      margin-bottom: 2px;
      font-size: 12px;
      letter-spacing: 0;
      line-height: 12px;
      .name {
        display: inline-block;
        vertical-align: top;
        max-width: -webkit-calc(100% - 28px);
        max-width: calc(100% - 28px);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .goods_title {
      display: block;
      max-height: 36px;
      color: #222;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 2px;
      font-family: PingFang-SC-Bold;
      font-size: 14px;
      color: #333;
      letter-spacing: 0;
      line-height: 18px;
    }
    .goods_title_multirow {
      white-space: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      
    }
    .txt {
      .goods_title_multirow;
    }
    .item_link {
      position: relative;
      display: inline-block;
      vertical-align: top;
      width: 100%;
      padding: 0 3px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    
   .mod_goods_price {
      display: inline-block;
      vertical-align: top;
      color: #ff2c3c;
      font-size: 16px;
      line-height: 20px;
    }
    .mod_price_vip{
      position: relative;
      top: 1px;
      left: 4px;
      display: inline-block;
      vertical-align: top;
      height: 14px;
      overflow: hidden;
    }
    .price_tag_bg {
      display: inline-block;
      vertical-align: top;
      height: 14px;
      background: #fff7de;
      border-radius: 2px;
      margin-right: 2px;
      padding: 2px 2px;
      .name {
        display: webkit-flex;
        display: flex;
        width: 100%;
        -wekit-justify-content: center;
        justify-content: center;
        -webkit-align-items: center;
        align-items: center;
        font-size: 10px;
        height: 10px;
        line-height: normal;
        letter-spacing: normal;
        color: #e5b45c;
      }
    }
    .tag_num {
      display: inline-block;
      vertical-align: top;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: normal;
      color: #e5b45c;
    }
    .num {
      display: inline-block;
      font-weight: 700;
    }
    .mod_mark_tag {
      margin: 2px 4px 0;
      vertical-align: top;
      font-size: 10px;
      letter-spacing: 0;
      line-height: 14px;
      height: 14px;
      display: inline-block;
      padding: 0 2px;
    }
    .mark_tag_normal {
      background: rgba(255,195,198,.25);
      color: #ff2c3c;
      border-radius: 2px;
    }
  }
  .mod_goods_v{
    .goods_list{
      width: 100%;
      font-size: 0;
      letter-spacing: -3px;
    }
    .goods_pic {
      position: relative;
      display: inline-block;
      width: 99%;
      background: #f9f9f9;
      border-radius: 6px;
      margin: 5px 0 2px 0;
      .pic {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 6px;
      }
    }
     .goods_pic:before {
      position: relative;
      display: block;
      content: ' ';
      width: 100%;
      padding-bottom: 100%;
    }
   .list_item {
      width: 33.333%;
    } 
   .list_item {
      position: relative;
      display: inline-block;
      vertical-align: top;
      font-size: 12px;
      line-height: 1.5;
      letter-spacing: normal;
      padding-bottom: 12px;
   }
  }
  

}

</style>