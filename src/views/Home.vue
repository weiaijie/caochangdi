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
          class="card_pic"
           v-lazy-container="{ selector: 'img', error: '../img/svg/banner.png', loading: '../img/svg/banner.png' }"
          >
          <span class="pic">
            <img :data-src="item.url">
          </span>
        </van-swipe-item>
        <div class="custom-indicator" >
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
                  <img v-lazy="item.imgUrl" :alt="item.title">
              </span>
              <span class="icon_txt">{{item.title}}</span>
              <span class="icon_desc">{{item.meta}}</span>
          </div>
        </div>
        <div class="ip_list">
          <div class="nav_item" v-for="item in modChannelNav.ipList" :key="item.title" @click.once="routerJump(item.href)">
              <span class="icon_ml">
                  <img v-lazy="item.imgUrl" :alt="item.title">
              </span>
              <span class="icon_txt">{{item.title}}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 活动 魔道祖师羨云篇周边 -->
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
            @click.once="routerJump('detail?proId=' + item.id)"
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
              <i v-if="item.reserve" class="mod_mark_tag mark_tag_normal">预订价</i>
              <span v-if="item.priceVip != false" class="mod_price_vip">
                <span class="price_tag_bg">
                  <span class="name">VIP价</span>
                </span>
                <span class="tag_num">¥{{item.priceVip}}</span>
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 新品首发 -->
    <div class="mod_section">
      <div class="mod_title">
        <div class="title_inner">
          <h3 class="tit_center">
              <span class="tit">首发新品</span>
              <van-icon name="arrow" size="20" class="icon icon_more" @click.once="routerJump('ip_products?ipId=230')" />
          </h3>
        </div>
      </div>
      <div class="mod_goods mod_goods_v">
        <ul class="goods_list">
          <li class="list_item" 
            v-for="item in goods.firstGoods"
            :key="item.id"
            @click.once="routerJump('detail?proId=' + item.id)"
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
              <i v-if="item.reserve" class="mod_mark_tag mark_tag_normal">早鸟</i>
            </span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 秒杀模块 -->
    <div class="mod_section">
      <div class="mod_spike_list" @click="spikeList($event)">
        <div class="spike_list">
          <div class="list_item current ongoing" style="width: 50%;">
            <dir class="mod_seckill_icon">
              <div class="rectangle">
                <i class="clock_icon">
                  <svg class="svg_icon" height="15" viewBox="0 0 15 15" width="15" xmlns="http://www.w3.org/2000/svg"><svg id="svg_icon_clock" viewBox="0 0 15 15">
	                	<path d="m2.90706706 12.1695336c-.88029998-1.0101595-1.41342185-2.33078012-1.41342185-3.77591798 0-3.17563731 2.57436269-5.75 5.75-5.75 3.17563729 0 5.74999999 2.57436269 5.74999999 5.75 0 1.44513786-.5331219 2.76575848-1.4134218 3.77591798l1.6937519 1.6937519c.2928932.2928932.2928932.767767 0 1.0606602s-.767767.2928932-1.0606602 0l-1.7592977-1.7592977c-.91682001.6181319-2.02145725.9789676-3.21037219.9789676s-2.29355219-.3608357-3.21037222-.9789676l-1.7592977 1.7592977c-.29289321.2928932-.76776695.2928932-1.06066017 0s-.29289322-.767767 0-1.0606602zm4.33657815.474082c2.34721019 0 4.24999999-1.9027898 4.24999999-4.24999998 0-2.34721019-1.9027898-4.25-4.24999999-4.25s-4.25 1.90278981-4.25 4.25c0 2.34721018 1.90278981 4.24999998 4.25 4.24999998zm7.15439519-8.36071599c.2066622.35897576.0831877.81751596-.275788 1.0241782-.3589758.20666223-.817516.08318773-1.0241782-.27578803-.6322835-1.09828705-1.5643878-2.00120275-2.6824639-2.59763722-.3654653-.19495641-.50369007-.64926795-.3087337-1.01473324.1949564-.36546529.649268-.50369005 1.0147333-.30873364 1.3661416.72876429 2.5040023 1.83099327 3.2764305 3.17271393zm-10.98712536-3.19666375c.36667075-.19267962.82011382-.05163195 1.01279344.3150388s.05163195.82011382-.3150388 1.01279344c-1.12843351.59297379-2.07039348 1.49727678-2.70965278 2.60025481-.20770465.35837362-.66660176.48051495-1.02497538.2728103-.35837362-.20770466-.48051495-.66660177-.2728103-1.02497539.78093865-1.34743157 1.93083661-2.45135977 3.30968382-3.17592196zm5.74875532 8.18334204c.34464651.22976434.43777691.69541635.20801257 1.0400629-.22976434.3446465-.69541635.4377769-1.04006287.2080125l-1.5-.99999996c-.208649-.13909934-.33397485-.37327283-.33397485-.62403772v-3c0-.41421357.33578644-.75.75-.75s.75.33578643.75.75v2.59861218z" fill="#fff" transform="translate(0 -1)"></path>
	                  </svg>
                  </svg>
                </i>
                <div class="txt" v-if="goods.spikeGoods[2].length">秒杀中</div>
                <div class="txt" v-else>秒杀已结束</div>
              </div>
              <i class="triangle"></i>
            </dir>
            <van-count-down :time="goods.countDown.time"  @finish="finish()" class="count_down" />
          </div>

          <div class="list_item">
            <div class="num" v-text="goods.countDown.futureTime1"></div>
            <div class="txt">即将开始</div>
          </div>
          <div class="list_item">
            <div class="num" v-text="goods.countDown.futureTime2"></div>
            <div class="txt" v-if="goods.countDown.futureTime1 == '10:00'">
              秒杀预告
            </div>
            <div class="txt" v-else>
              明日预告
            </div>
          </div>
        </div>
      </div>

      <div class="mod_goods mod_goods_v mod_goods_v_spike">
        <ul class="goods_list"
          v-for="(items, index) in goods.spikeGoods" 
          :key="index" 
          :style="goods.countDown.spikeIndex == index ? 'display:block ' : 'display:none'"
          >
          <li class="list_item" 
            v-for="item in items"
            :key="item.id"
            @click.once="routerJump('detail?proId=' + item.id)"
            >
            <span class="item_link">
              <span class="goods_pic">
                <img class="pic" v-lazy="item.imgUrl">
                <img v-if="index !== 0" class="mark_sub_sale" :src="'../img/svg/mark_sub_nostart.svg'">
                <img v-else-if="goods.countDown.finish && index == 0"  class="mark_sub_sale" :src="'./img/mark_sub_finish.png'">
              </span>
              <span class="goods_ip">「<span class="name">{{item.name}}</span>」</span>
              <span class="goods_title goods_title_multirow"><span class="txt">{{item.title}}</span></span>
              <span class="mod_goods_price" r-notemplate="true">
                <span class="sign">¥</span><span class="num">{{item.spikePrice}}</span>
              </span>
              <i class="mod_mark_tag mark_tag_spike">秒杀</i>
              <span class="price_ori">{{item.price}}</span>
            </span>
          </li>
        </ul>
      </div>

    </div>

    <div class="mod_section">
      <div class="mod_min_banner">
        
      </div>
    </div>

    <!-- 热销单品 -->
    <div class="mod_section">
      <div class="mod_title">
        <div class="title_inner">
          <h3 class="tit_center">
              <span class="tit">热销单品</span>
              <van-icon name="arrow" size="20" class="icon icon_more" @click.once="routerJump('ip_products?ipId=230')" />
          </h3>
        </div>
      </div>
      <div class="mod_goods mod_goods_v">
        <ul class="goods_list">
          <li class="list_item" 
            v-for="item in goods.hotGoods"
            :key="item.id"
            @click.once="routerJump('detail?proId=' + item.id)"
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
        </ul>
      </div>
    </div>

    <!-- 更多商品 -->
   <MoreGoods></MoreGoods>

  </div>
</template>


<script>
import { format } from 'path';
import { setTimeout, setInterval } from 'timers';
import { formatWithOptions } from 'util';
import { constants, fips } from 'crypto';
import MoreGoods from './components/more-goods';

export default {
  name: 'home',
  components: {
    MoreGoods
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
          href: '#'
        },
        {
          name: '全职高手',
          href: '#'
        }
      ],
      modSwiperCards: [
        {
          alt: '1',
          url: './img/mod_swiper_card1.png',
          href: '#'
        },
        {
          alt: '2',
          url: './img/mod_swiper_card2.png',
          href: '#'
        },
        {
          alt: '3',
          url: './img/mod_swiper_card3.png',
          href: '#'
        },
        {
          alt: '4',
          url: './img/mod_swiper_card4.png',
          href: '#'
        },
        {
          alt: '5',
          url: './img/mod_swiper_card5.png',
          href: '#'
        }
      ],
      modChannelNav: {
        navList: [
          {
            title: '今日上新',
            meta: '就问你来不来',
            imgUrl: './img/mod_channel_nav1.png',
            href:'#'
          },
          {
            title: '腾讯独家',
            meta: '宇宙仅此一家',
            imgUrl: './img/mod_channel_nav2.png',
            href:'#'
          },
          {
            title: '手办专区',
            meta: '买手办到咩家',
            imgUrl: './img/mod_channel_nav3.png',
            href:'#'
          },
          {
            title: '原著读物',
            meta: '热剧抢先看',
            imgUrl: './img/mod_channel_nav4.png',
            href:'#'
          }
        ],
        ipList: [
          {
            title: '魔道祖师',
            imgUrl: './img/mod_channel_nav5.png',
            href:'#'
          },
          {
            title: 'QQ黄金鹅',
            imgUrl: './img/mod_channel_nav6.png',
            href:'#'
          },
          {
            title: '陈情令年卡',
            imgUrl: './img/mod_channel_nav7.png',
            href:'#'
          },
          {
            title: '早鸟票',
            imgUrl: './img/mod_channel_nav8.png',
            href:'#'
          }
        ]
      },
      goods: {
        activityGoods: [],
        firstGoods: [],
        countDown: {
          time: '',
          finish: false,
          futureTime1: '10:00',
          futureTime2: '20:00',
          spikeIndex:'0'
        },
        spikeGoods: [
          [],
          [],
          []
        ],
        hotGoods: [],
        moreGoods: []
      },
      loading: false,
      finished: false
    }
  },
  watch: {
    
  },
  created(){
    //<!-- 活动 魔道祖师羨云篇周边 -->
    for(let i = 0; i < 9; i++){
      this.goods.activityGoods.push({
        id: i,
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
      this.goods.activityGoods[i].priceVip = (() => {
        if(Math.floor((Math.random()*10) + 1) >= 7){
          return this.goods.activityGoods[i].price - Math.floor((Math.random()*10) + 1)
        }
        return false
      })()
    }

    // <!-- 新品首发 -->
    for(let i = 10; i < 16; i++){
      this.goods.firstGoods.push({
        id: i,
        imgUrl: `./img/goods/480_480(${i}).png`,
        name: '魔道祖师',
        title: '开播纪念版会员卡组',
        price: Math.floor((Math.random()*300) + 10),
        //随机早鸟
        reserve: (() => {
          if(Math.floor((Math.random()*10) + 1) >= 9){
            return true
          }
          return false
        })()
      })
    }
    
    //<!-- 热销单品 -->
    for(let i = 16; i < 22; i++){
      this.goods.hotGoods.push({
        id: i,
        imgUrl: `./img/goods/480_480(${i}).png`,
        name: '魔道祖师',
        title: '开播纪念版会员卡组',
        price: Math.floor((Math.random()*300) + 10),
        //随机限时折扣
        reserve: (() => {
          if(Math.floor((Math.random()*10) + 1) >= 9){
            return true
          }
          return false
        })(),
        priceVip: ''
      })
      //随机vip价格
      this.goods.hotGoods[i-16].priceVip = (() => {
        if(Math.floor((Math.random()*10) + 1) >= 7){
          return this.goods.hotGoods[i-16].price - Math.floor((Math.random()*10) + 1)
        }
        return false
        console.log(this.goods.hotGoods[i-16].price)
      })()
    }

    //秒杀活动 时间获取
    let a = new Date()
    if(a.getHours() >= 10 && a.getHours() < 20){
      this.goods.countDown.futureTime1 = '20:00'
      this.goods.countDown.futureTime2 = '10:00'
    }
    if(a.getHours() > 20){
       this.goods.countDown.time = Date.parse(new Date(`${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()} ${this.goods.countDown.futureTime1}`)) + (3600000 * 24) - a.getTime()
    }else{
      this.goods.countDown.time = Date.parse(new Date(`${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()} ${this.goods.countDown.futureTime1}`)) - a.getTime()
    }

    //秒杀活动 商品
    let o = 21
    for(let j = 0; j < this.goods.spikeGoods.length; j++){
      let l = o + 3 
      let v = 0
      for(let i = o; i < l; i++){
        this.goods.spikeGoods[j].push({
          id: i,
          imgUrl: `./img/goods/480_480(${i}).png`,
          name: '魔道祖师',
          title: '开播纪念版会员卡组',
          price: Math.floor((Math.random()*320) + 10),
          //随机限时折扣
          reserve: (() => {
            if(Math.floor((Math.random()*10) + 1) >= 9){
              return true
            }
            return false
          })(),
          spikePrice: ''
        })
        //随机秒杀价格
        this.goods.spikeGoods[j][v].spikePrice = (() => {
          return Math.floor(this.goods.spikeGoods[j][v].price * (Math.floor((Math.random() * 9) + 1) / 10))
        })()
        o = i
        v++
      }
      o++
    }

  },
  mounted(){

  },
  destroyed() {

  },
  methods: {
    routerJump(url){
      if(url !== '#'){
        this.$router.push(url)
      }
      
    },
    //秒杀选定状态切换
    spikeList(e){
      //忽略这个事件
      if(e.target.className == 'mod_spike_list'){
        return false
      }
      let dom = document.getElementsByClassName('mod_spike_list')[0].children[0].children
      for(let i = 0; i < dom.length; i++){
        dom[i].classList.remove('current')
      }
      let evn = e.target
      for(let i = 0; i < 5; i++){
        if(evn.className.search('list_item') != -1){
           evn.classList.add("current")
           break;
        }
        evn = evn.parentElement
      }
     for(let i = 0; i < dom.length; i++){
        if(dom[i].className.search('current') != -1){
          this.goods.countDown.spikeIndex = i
        }
      }
    },
    //秒杀时间结束切换
    finish() {
      this.goods.countDown.finish = true
      //这个延迟是模拟axios请求数据时的延迟
      setTimeout(() => {
        this.goods.countDown.finish = false
        this.goods.spikeGoods[0] = null
        this.goods.spikeGoods.sort()
        this.goods.spikeGoods[2] = []
        let a = new Date()
        console.log(this.goods.countDown.futureTime1)
        console.log(a.getHours())
        if(a.getHours() >= 10 && a.getHours() < 20){
          this.goods.countDown.futureTime1 = '20:00'
          this.goods.countDown.futureTime2 = '10:00'
        }
        // console.log(this.goods.countDown.time)
        if(a.getHours() >= 20){
          this.goods.countDown.time = Date.parse(new Date(`${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()} ${this.goods.countDown.futureTime1}`)) + (3600000 * 24) - a.getTime()
        }else{
          this.goods.countDown.time = Date.parse(new Date(`${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()} ${this.goods.countDown.futureTime1}`)) - a.getTime()
        }
        //下面还需要更新秒杀商品  待定
        for(let i = 0; i < 3; i++){
          this.goods.spikeGoods[2].push({
            id: i,
            imgUrl: `./img/goods/480_480(${i+1}).png`,
            name: '陈情令',
            title: '开播纪念版会员卡组',
            price: Math.floor((Math.random()*320) + 10),
            //随机限时折扣
            reserve: (() => {
              if(Math.floor((Math.random()*10) + 1) >= 9){
                return true
              }
              return false
            })(),
            spikePrice: ''
          })
          //随机秒杀价格
          this.goods.spikeGoods[2][i].spikePrice = (() => {
            return Math.floor(this.goods.spikeGoods[2][i].price * (Math.floor((Math.random() * 9) + 1) / 10))
          })()
        }
      },1000)
    },
    onLoad() {
  
    }
  }
}
</script>

<style lang='less' scoped>
.van-swipe{
  max-width:640px;
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
    .card_pic::before {
      display: block;
      content: ' ';
      width: 100%;
      padding-bottom: 53.333%;
    }
    .pic {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
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
      background: url(/img/svg/bg_mask_headimg.svg) no-repeat center bottom;
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


//秒杀
.mod_spike_list {
    margin-bottom: 8px;
    display: flex;
    padding-top: 10px;
    background: #eee;
    .spike_list {
      display: -webkit-flex;
      display: flex;
      width: 100%;
      height: 44px;
      letter-spacing: -3px;
      font-size: 0;
      background: #efefef00;
      border-radius: 2px;
      .current {
        background-color: #fff;
      }
      .list_item {
        position: relative;
        flex-shrink: 0;
        flex-grow: 0;
        -webkit-flex-shrink: 0;
        -webkit-flex-grow: 0;
        vertical-align: top;
        width: 25%;
        height: 44px;
        padding: 7px 0;
        color: rgba(255,255,255,.6);
        text-align: center;
        letter-spacing: normal;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        .mod_seckill_icon {
          position: relative;
          padding: 0 6px 0 15px;
          margin-right: 2px;
          height: 22px;
          color: #ff2c3c;
          .rectangle {
            width: 100%;
            height: 14px;
            padding: 4px 0 4px 4px;
            background: #ff2c3c;
            border-radius: 2px;
            border-bottom-left-radius: 0;
            display: flex;
            display: -webkit-flex;
            .txt {
              font-size: 14px;
              color: #fff;
              letter-spacing: 0;
              line-height: 14px;
              opacity: 1;
            }
          }
          .triangle {
            position: absolute;
            left: 15px;
            bottom: -5px;
            border-width: 3px;
            border-color: red red transparent transparent;
            border-style: solid;
            border-radius: 3px;
            transform: rotateY(180deg);
          }
        }
        .count_down {
          font-size: 16px;
          color: #ff2c3c;
          letter-spacing: 0;
          line-height: 16px;
          line-height: 22px;
          height: 22px;
        }
        .num {
          position: relative;
          z-index: 2;
          opacity: .7;
          font-size: 16px;
          color: #666;
          letter-spacing: 0;
          text-align: center;
          line-height: 16px;
          padding-bottom: 2px;
        }
        .txt {
          position: relative;
          z-index: 2;
          opacity: .7;
          font-size: 10px;
          color: #666;
          letter-spacing: 0;
          text-align: center;
          line-height: 10px;
        }
      }
      .ongoing {
        display: flex;
        display: -webkit-flex;
        flex-grow: 1;
        -webkit-flex-grow: 1;
      }
    }
}
.price_ori {
  display: inline-block;
  vertical-align: top;
  font-size: 12px;
  line-height: 14px;
  height: 14px;
  color: #999;
  text-decoration: line-through;
  letter-spacing: normal;
  margin: 4px 0 0 0;
}
.mark_sub_sale {
    position: absolute;
    pointer-events: none;
    right: -5px;
    top: -5px;
    width: 44px;
    height: 35px;
}



</style>