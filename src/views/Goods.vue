<template>
  <div class="goods">
    <div class="mod_section">
      <div class="mod_swiper_poster">
        <div v-if="goods.imgUrl.length >= 1" class="swiper_poster">
          <van-swipe @change="onChange">
            <van-swipe-item v-for="(item,index) in goods.imgUrl" :key="index">
              <div class="poster_pic">
                <img :src="item">
              </div>
              </van-swipe-item>
            <div class="custom-indicator" slot="indicator">
              <span>{{ current + 1 }}</span> / <span>{{goods.imgUrl.length}}</span>
            </div>
          </van-swipe>
        </div>
        <div v-else class="poster_pic">
          <van-loading type="spinner" />
        </div>
      </div>
      <div class="goods_price goods_cur">
        <div class="price_tit">草场价</div>
        <span class="price_cur">
          <span class="sign">¥</span>
          <span class="num">75</span>
        </span>
      </div>
      <div class="goods_emp">
        <span class="emp_txt">预计2019年9月30日发货</span>
      </div>
      <div class="shop_title">
        <span class="title">【预售】《全职高手之巅峰荣耀》大电影 亚克力立牌摆件</span>
      </div>
      <div class="shop_fare">
        <span class="txt">运费<span class="colon">：</span>
          限时包邮
        </span>
      </div>
    </div>
    <div class="mod_section"></div>

    <div class="mod_section">
      <!-- <div class="mod_tit">
        <h3 class="tit_normal">
          <span class="tit">快把我哥带走</span>
        </h3>
        <span class="btn_more">
          <span class="more_txt">更多</span>
          <van-icon name="arrow" class="icon_sm" color="#999" size="16px" style="font-weight: 600;"/>
        </span>
      </div> -->
    </div>

    <div class="mod_section">
      <div class="mod_tit">
        <h3 class="tit_normal">
          <span class="tit">宝贝评价</span>
        </h3>
      </div>
      <div class="mod_comment_card">
        <div class="comment_empty">
          <div class="txt">暂无评价，评价沙发等你来~</div>
        </div>
      </div>
    </div>
    <div class="mod_section">
      <div class="mod_tit">
        <h3 class="tit_normal">
          <span class="tit">商品详情</span>
        </h3>
      </div>
      <div class="mod_article">
        <img src="/img/750_20000.jpg" alt="">
      </div>
      <div></div>
    </div>
    <MoreGoods></MoreGoods>

    <div class="nav_fixed" :style="navId == 0 ? 'display:none' : ''">
      <div class="nav_fixed_inner">
        <ul class="nav_list">
          <li
            v-for="(item, index) in navList" 
            :class="navId == index ? 'nav_item current' : 'nav_item'" 
            :key="index"
            @click="anchor(index)" >{{item}}</li>
        </ul>
      </div>
    </div>

    <div class="mod_fix_cart">
      <div class="fix_cart">
        <span class="btn_home" @click.once="routerJump('/')">
          <van-icon name="wap-home" class="icon" color="#15d3a6" />
          <span class="icon_txt">首页</span>
        </span>
        <span class="btn_service">
          <van-icon name="service" class="icon" />
          <span class="icon_txt">客服</span>
        </span>
        <span class="btn_cart">
          <van-icon name="cart-o" class="icon" info="2" />
          <span class="icon_txt">购物车</span>
        </span>
        <span class="btn_addcart">
          加入购物车
        </span>
        <span class="btn_buy">
          立即购买
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import MoreGoods from './components/more-goods';
import { constants } from 'crypto';
export default {
  name: 'goods',
  components: {
    MoreGoods
  },
  data() {
    return {
      current: 0,
      goods: {
        id: '',
        title: '【预售】《全职高手之巅峰荣耀》大电影 亚克力立牌摆件',
        imgUrl: []
      },
      navId: 0,
      navList: ['商品','评价','详情','推荐']
    }
  },
  created() {
    document.title = this.goods.title
    for(let i = 16; i < 22; i++){
      this.goods.imgUrl.push(`./img/goods/480_480(${i}).png`)
    }
    // console.log(this.$router.push())
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    onChange(index) {
      this.current = index
    },
    routerJump(url) {
      this.$router.push(url)
    },
    anchor(id) {
      //先移除滑动监听事件 在延迟执行监听事件 不然会有bug
      window.removeEventListener('scroll', this.handleScroll)
      this.navId = id
      if(id == 0){
        document.documentElement.scrollTop = 0
      }else{
        document.documentElement.scrollTop = document.getElementsByClassName('mod_section')[id + 2].offsetTop - 48
      }
      setTimeout(() => {
        window.addEventListener('scroll', this.handleScroll)
      },200)
      
    },
    handleScroll() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // 判断三个模块的位置
      let comment = document.getElementsByClassName('mod_section')[3].offsetTop - scrollTop - 48
      let prodetail= document.getElementsByClassName('mod_section')[4].offsetTop - scrollTop
      let recommend = document.getElementsByClassName('mod_section')[5].offsetTop - scrollTop
      if(comment <= 0) {
        if(prodetail <= 0){
          if(recommend <= 0){
            this.navId = 3
          }else{
            this.navId = 2
          }
        }else{
          this.navId = 1
        }
      }else{
        this.navId = 0
      }
    }
  }
}
</script>

<style lang="less" scoped>
.goods{
  background: #f3f4f4;
}
.mod_swiper_poster {
  width: 100%;
  overflow: hidden;
  .swiper_poster {
    position: relative;
    width: 100%;
  }
  .swiper_poster:before {
    content: ' ';
    position: absolute;
    z-index: 3;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 55px;
    pointer-events: none;
    background: -webkit-linear-gradient(top,transparent 0,rgba(0,0,0,.03) 100%);
    background: linear-gradient(to bottom,transparent 0,rgba(0,0,0,.03) 100%);
  }
  .poster_pic {
    position: relative;
    width: 100%;
    height: 100%;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .van-loading{
      position: absolute;
      left: 50%;
      top: 50%;
      margin: -15px 0 0 -15px;
      font-style: italic;
    }
  }
  .poster_pic:before {
    display: block;
    content: ' ';
    width: 100%;
    padding-bottom: 100%;
  }
  .custom-indicator{
    position: absolute;
    padding: 0 10px;
    top: 10px;
    right: 10px;
    bottom: auto;
    left: auto;
    margin: auto;
    background: rgba(255,255,255,.5);
    color: rgba(0,0,0,.6);
    font-size: 12px;
    line-height: 26px;
    border-radius: 26px;
  }
}

.mod_comment_card {
  position: relative;
}
.comment_empty {
  padding: 20px 14px 30px;
  .txt {
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #999;
  }
}

.mod_tit {
  position: relative;
  padding: 15px 15px 7px;
  .tit_normal {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-right: 50px;
    .tit {
      display: inline-block;
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      color: #222;
    }
  }
  .btn_more {
    position: absolute;
    top: 14px;
    right: 15px;
    display: inline-block;
    vertical-align: top;
    color: #222;
    font-size: 0;
    letter-spacing: -3px;
    .more_txt {
      display: inline-block;
      vertical-align: top;
      letter-spacing: normal;
      font-size: 13px;
      line-height: 24px;
      margin-right: 0px;
      color: #999;
    }
    .icon_sm {
      position: relative;
      vertical-align: top;
      top: 3px;
      color: #ccc;
    }
  }
}
.mod_article {
  padding: 10px 0;
  text-align: center;
}
.goods_cur{
  position:relative;
}

.goods_cur:before {
  content: " ";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  border-bottom: 1px dashed #f4f4f4;
  -webkit-transform: scaleY(.5);
  -webkit-transform-origin: 0 0;
}
.shop_title {
  font-size: 15px;
  line-height: 20px;
  color: #222;
  font-weight: 700;
  word-wrap: break-word;
  word-break: break-all;
  min-height: 40px;
  margin: 0 120px 5px 15px;
}

.goods_price {
  padding: 4px 100px 4px 15px;
}
.price_tit {
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  line-height: 28px;
  color: #ff2c3c;
  letter-spacing: normal;
  margin-right: 5px;
}
.price_cur {
  display: inline-block;
  vertical-align: top;
  font-size: 21px;
  line-height: 28px;
  font-weight: 700;
  color: #ff2c3c;
  margin-right: 5px;
  .sign {
    font-size: 20px;
    line-height: 28px;
  }
  .num {
    margin-right: 2px;
  }
}

.goods_emp {
  margin: 0 120px 4px 15px;
  .emp_txt {
    display: block;
    font-size: 12px;
    line-height: 20px;
    color: #ff2c3c;
    letter-spacing: normal;
  }
}

.shop_fare {
    position: relative;
    margin: 0 15px;
    display: -webkit-flex;
    display: flex;
}

//顶部悬浮
.nav_fixed {
    position: fixed;
    z-index: 11;
    left: 0;
    top: 0;
    width: 100%;
    height: 48px;
    background: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    box-shadow: 0 0 6px 0 rgba(0,0,0,.06);
    .nav_fixed_inner {
      padding: 0 20px;
    }
    .nav_list {
      width: 100%;
      font-size: 0;
      letter-spacing: -3px;
    }
    .nav_item {
      position: relative;
      display: inline-block;
      width: 25%;
      font-size: 14px;
      line-height: 48px;
      color: #666;
      letter-spacing: normal;
      text-align: center;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    .nav_item.current:before {
      position: absolute;
      content: ' ';
      font-size: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: 0 auto;
      width: 24px;
      height: 2px;
      background-color: #15d3a6;
    }
}


//底部悬浮
.mod_fix_cart {
  position: fixed;
  z-index: 11;
  width: 100%;
  left: 0;
  bottom: 0;
  background: #fff;
  padding-bottom: calc(constant(safe-area-inset-bottom));
  padding-bottom: calc(env(safe-area-inset-bottom));
  -webkit-animation: accelerateAnim .1s both;
  .fix_cart {
    display: -webkit-flex;
    display: flex;
    position: relative;
    width: 100%;
    height: 50px;
    box-shadow: 0 -2px 4px 0 rgba(0,0,0,.02), 0 -6px 8px 0 rgba(0,0,0,.02);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-left: 10px;
  }
  .icon{
    display: block;
    width: 20px;
    height: 20px;
    margin: 6px auto 1px;
  }
  .icon::before{
    font-size: 21px;
  }
  .icon_txt{
    display: block;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
  }
  .btn_cart, .btn_home, .btn_service {
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    color: #333;
  } 
  .btn_cart {
    margin-right: 10px;
  }
  .btn_addcart {
    -webkit-flex: 2 1 auto;
    flex: 2 1 auto;
    font-size: 15px;
    line-height: 50px;
    text-align: center;
    color: #0c7;
    background: #dffef2;
    background: -webkit-linear-gradient(left,#dffef2 0,#a6ffdb 100%);
    background: linear-gradient(to right,#dffef2 0,#a6ffdb 100%);
  }
  .btn_buy {
    -webkit-flex: 2 1 auto;
    flex: 2 1 auto;
    font-size: 15px;
    line-height: 50px;
    text-align: center;
    position: relative;
    color: #fff;
    background: #00d855;
    background: -webkit-linear-gradient(left,#00d855 0,#00d0cc 100%);
    background: linear-gradient(to right,#00d855 0,#00d0cc 100%);
  }
  .btn_buy:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    border-left: 1px solid #ddd;
    -webkit-transform: scaleX(.5);
    -webkit-transform-origin: 0 0;
  }
  .fix_cart:after {
    content: "";
    position: absolute;
    right: 0;
    left: 0;
    bottom: -1px;
    border-bottom: 1px solid #ddd;
    -webkit-transform: scaleY(.5);
    -webkit-transform-origin: 0 0;
  }
}




</style>