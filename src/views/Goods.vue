<template>
  <div class="goods">
    <div class="mod_section">
      <div class="mod_swiper_poster">
        <div class="swiper_poster">
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
      <div class="mod_tit">
        <h3 class="tit_normal">
          <span class="tit">快把我哥带走</span>
        </h3>
        <span class="btn_more">
          <span class="more_txt">更多</span>
          <van-icon name="arrow" class="icon_sm" color="#999" size="16px" style="font-weight: 600;"/>
        </span>
      </div>
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
    
  </div>
</template>

<script>
export default {
  name: 'goods',
  data() {
    return {
      current: 0,
      goods: {
        id: '',
        imgUrl: []
      },
      label: ''
    }
  },
  created() {

    for(let i = 16; i < 22; i++){
      this.goods.imgUrl.push(`./img/goods/480_480(${i}).png`)
    }
    // console.log(this.$router.push())
    // event.currentTarget.offsetTop
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    routerJump(url) {
      console.log(url);
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
</style>