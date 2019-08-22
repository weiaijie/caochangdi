<template>
  <div class="mine" :style="'min-height:' + Height + 'px'">
    <div class="mod_section">
      <div class="mod_user_head">
        <div class="user_head not_vip">
          <div class="user_info">
            <div class="user_pic">
              <van-image round src="https://thirdqq.qlogo.cn/g?b=sdk&amp;k=OFCX8bic7gvHX8sbLxmX9Hg&amp;s=140&amp;t=1554859158">
                <template v-slot:loading>
                  <van-loading type="spinner" size="20" />
                </template>
              </van-image>
            </div>
            <div class="user_name">
              <div class="name">{{user.name}}</div>
            </div>
          </div>
          <img class="user_vip_card_bg" src="/img/20190121_uky88a04gse.png" alt="">
          <div class="user_vip_card"></div>
        </div>
        <div class="user_tab">
          <div class="tab_item">
            <van-icon name="points" class="icon" size="18"/>
            <span class="icon_txt">0积分</span>
          </div>
          <div class="tab_item">
            <van-icon name="coupon" class="icon" size="20" color="#ff9000"/>
            <span class="icon_txt">0张优惠券</span>
          </div>
        </div>
      </div>
    </div>
    <div class="mod_section">
      <div class="mod_item_link">
        <div class="link_list">
          <div class="link_item">
            <div class="link_tit">我的订单</div>
            <div class="action">
              <van-icon name="arrow" color="#999" size="13px" style="font-weight: 600;"/>
            </div>
          </div>
        </div>
      </div>
      <div class="mod_status_list">
        <div class="status_list">

          <div class="status_item">
            <van-icon name="paid"  class="icon" />
            <span class="icon_txt">待付款</span>
          </div>
          <div class="status_item">
            <van-icon name="send-gift-o" class="icon" />
            <span class="icon_txt">待发货</span>
          </div>
          <div class="status_item">
            <van-icon name="logistics" class="icon" />
            <span class="icon_txt">待收货</span>
          </div>
          <div class="status_item">
            <van-icon name="comment-o" class="icon" />
            <span class="icon_txt">待评价</span>
          </div>
          <div class="status_item">
            <van-icon name="refund-o" class="icon" />
            <span class="icon_txt">退款/售后</span>
          </div>

        </div>
      </div>
    </div>
    <div class="mod_section">
      <div class="mod_item_link">
        <div class="link_list">
          <div class="link_item">
            <div class="link_tit">地址管理</div>
            <div class="action">
              <van-icon name="arrow" color="#999" size="13px" style="font-weight: 600;"/>
            </div>
          </div>
        </div>
      </div>
      <div class="mod_item_link">
        <div class="link_list">
          <div class="link_item">
            <div class="link_tit">我的订单</div>
            <div class="action">
              <van-icon name="arrow" color="#999" size="13px" style="font-weight: 600;"/>
            </div>
          </div>
        </div>
      </div>
      <div class="mod_item_link">
        <div class="link_list">
          <div class="link_item">
            <div class="link_tit">在线客服</div>
            <div class="action">
              <van-icon name="arrow" color="#999" size="13px" style="font-weight: 600;"/>
            </div>
          </div>
        </div>
      </div>
      <div class="mod_item_link">
        <div class="link_list">
          <div class="link_item">
            <div class="link_tit">帮助中心</div>
            <div class="action">
              <van-icon name="arrow" color="#999" size="13px" style="font-weight: 600;"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mine',
  components: {

  },
  data() {
    return{
      Height: window.innerHeight - 50,
      user: {
        name: 'weiaijie'
      }
    }
  },
  created() {
    
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.mine{
  background-color: #f3f4f4;
}

.mod_user_head{
  .user_head {
    position: relative;
    padding: 22px 15px;
    background: #00d857 url(/img/svg/bg_status.svg) no-repeat;
    background-size: cover;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .not_vip {
    overflow: hidden;
  }
  .user_info {
    width: 50%;
    display: -webkit-flex;
    display: flex;
  }
  .user_pic {
    position: relative;
    -webkit-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 60px;
    height: 60px;
  }
  .user_name {
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    width: 0;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-justify-content: center;
    justify-content: center;
    margin: 0 0 0 15px;
    .name {
      font-size: 16px;
      line-height: 22px;
      color: #fff;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 2px;
    }
  }
  .user_vip_card_bg {
    position: absolute;
    right: 0;
    bottom: 0;
    width: auto;
    height: 104px;
  }
  .user_vip_card {
    display: block;
    position: absolute;
    top: 11px;
    right: 3px;
    width: 156px;
    height: 112px;
    background: url(/img/20190121_g0mi2nrlydg.png) no-repeat;
    background-size: 100%,100%;
    transform: rotate(-15deg);
    -webkit-transform: rotate(-15deg);
    transform-origin: 100% 0;
    -webkit-transform-origin: 100% 0;
    animation: cardrotate 6s;
    -webkit-animation: cardrotate 6s;
  }
  .user_tab{
    display: -webkit-flex;
    display: flex;
    .tab_item {
      -webkit-flex: 1 1 auto;
      flex: 1 1 auto;
      margin: 20px 0;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #222;
      .icon {
        vertical-align: top;
        pointer-events: none;
        margin-right: 10px;
      }
      .icon_txt{
        list-style: none;
      }
    }
  }
   
}

@keyframes cardrotate{
  0%{transform:rotate(-15deg);-webkit-transform:rotate(-15deg)}
  12%{transform:rotate(-12deg);-webkit-transform:rotate(-12deg)}
  28%{transform:rotate(-18deg);-webkit-transform:rotate(-18deg)}
  44%{transform:rotate(-12deg);-webkit-transform:rotate(-12deg)}
  60%{transform:rotate(-18deg);-webkit-transform:rotate(-18deg)}
  76%{transform:rotate(-12deg);-webkit-transform:rotate(-12deg)}
  92%{transform:rotate(-18deg);-webkit-transform:rotate(-18deg)}
  100%{transform:rotate(-15deg);-webkit-transform:rotate(-15deg)}
}

.mod_item_link{
  .link_item {
    display: -webkit-flex;
    display: flex;
    position: relative;
    padding: 5px 0 5px 15px;
  }
  .link_item {
    display: -webkit-flex;
    display: flex;
    position: relative;
    padding: 5px 0 5px 15px;
    .link_tit {
      -webkit-flex: 1 1 auto;
      flex: 1 1 auto;
      font-size: 16px;
      line-height: 40px;
      color: #222;
    }
    .action {
      -webkit-flex: 0 0 auto;
      flex: 0 0 auto;
      display: -webkit-flex;
      display: flex;
      align-items: center;
      -webkit-align-items: center;
      padding-right: 15px;
    }
  }
  .link_item:after {
    content: " ";
    position: absolute;
    bottom: 0;
    left: 15px;
    right: 0;
    border-bottom: 1px solid #eaeaea;
    -webkit-transform: scaleY(.5);
    -webkit-transform-origin: 0 0;
  }
  
}

.mod_status_list {
  position: relative;
  padding: 18px 0;
  .status_list {
    display: -webkit-flex;
    display: flex;
  }
  .status_item {
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    width: 0;
    .icon {
      position: relative;
      display: block;
      margin: 0 auto 6px;
      color: #222;
      width: 26px;
      height: auto;
      font-size: 26px;
    }
    .icon_txt {
      display: block;
      margin: 0 auto;
      text-align: center;
      font-size: 12px;
      line-height: 20px;
      color: #222;
    }
  }
}
</style>