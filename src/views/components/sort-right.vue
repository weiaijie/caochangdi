<template>
  <div class="auto_main"  ref="scrollerright">
    <div class="mod_sort_goods mod_sort_goods_h">
    	  <ul class="goods_list scroller">
    	    <li class="list_item"
						v-for="(item, index) in goods"
            :key="index"
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
				<div class="pullup-wrapper">
    	    <div v-if="isPullUpLoad" class="after-trigger">
    	      <span class="pullup-txt"><van-loading size="18px" type="spinner" color="#1989fa" /></span>
    	    </div>
    	  </div>
    	  <!-- <div class="pullup-wrapper">
    	    <div v-if="!isPullUpLoad" class="before-trigger">
    	      <span class="pullup-txt">我是有底线的</span>
    	    </div>
    	    <div v-else class="after-trigger">
    	      <span class="pullup-txt"><van-loading size="18px" type="spinner" color="#1989fa" /></span>
    	    </div>
    	  </div> -->
		</div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
BScroll.use(Pullup)
export default {
	name: 'sortRight',
	props: {
		navItem: String
	},
  data() {
    return{
      isPullUpLoad: false,
			data: 30,
			sortNavid: {
				navTit: '推荐',
				navItem: '魔道祖师'
			},
			goods: []
    }
  },
  created(){
    this.bscroll = null
		for(let i = 0; i < 10; i++){
      let j = Math.floor((Math.random()*48) + 1)
      this.goods.push({
        id: j,
        imgUrl: `./img/goods/480_480(${j}).png`,
        name: this.navItem,
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
      this.goods[i].priceVip = (() => {
      if(Math.floor((Math.random()*10) + 1) >= 7){
        return this.goods[i].price - Math.floor((Math.random()*10) + 1)
      }
      	return false
  		})()
    }
  },
	mounted(){
    this.initBscroll()
	},
	beforeDestroy() {
	},
  methods: {
  	routerJump(url){
      console.log(url)
  		// this.goods = []
  		// console.log(this.goods)
  		// this.goods = this.commend(url.name)
  		// // this.rightScroll.refresh()
  		// console.log(this.rightScroll.scrollerHeight)
  		// // console.log(url.name)
  		// // console.log(this.sortNavid.navItem)	
  		// if(url.name == this.sortNavid.navItem){
  		// 	return false
  		// }
  		// this.sortNavid.navTit = url.index
  		// this.sortNavid.navItem = url.name
  		// this.$refs.scrollerright.children[0].style = ''
  		// this.$refs.scrollerright.children[0].style['transform'] = "translateX(0px) translateY(0px) translateZ(0px)"
  
  	},
  	initBscroll() {
  		//右边回弹
      this.rightScroll = new BScroll(this.$refs.scrollerright, {
  			click: true,
        scrollY: true,
  			pullUpLoad: true,
  		})
  		this.rightScroll.on('pullingUp', this.pullingUpHandler)
    },
    async pullingUpHandler() {
    
  		this.isPullUpLoad = true  
  		await this.requestData()  
      this.rightScroll.finishPullUp()
      this.rightScroll.refresh()
      this.isPullUpLoad = false
    },
    async requestData() {
      try {
  			const newData = await this.newGet({
  				name: this.sortNavid.navItem,
  				index: this.sortNavid.navTit
  			})
  			this.goods = [...this.goods, ...newData]
      } catch (err) {
        console.log(err)
      }
    },
    newGet(url) {
      return new Promise(resolve => {
        setTimeout(() => {
  				console.log(url.index)
  				if(url.index == '推荐'){
  					resolve(this.commend(url.name))
  				}
  				if(url.index == '周边'){
  					resolve(this.commend(url.name))
  				}
  				if(url.index == '商品'){
  					resolve(this.commend(url.name))
  				}
      }, 500)
  		})
  
  	},
  	//推荐假数据
  	commend(name) {
  		let newGoods = []
      for(let i = 0; i < 20; i++){
  			let j = Math.floor((Math.random()*48) + 1)
      	newGoods.push({
        	  id: j,
        	  imgUrl: `./img/goods/480_480(${j}).png`,
        	  name: name,
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
      	 newGoods[i].priceVip = (() => {
      	if(Math.floor((Math.random()*10) + 1) >= 7){
      	  return newGoods[i].price - Math.floor((Math.random()*10) + 1)
      	}
      		return false
  			})()
  		}
  		return newGoods
    }
  }
}

</script>

<style lang='less' scoped>
.auto_main{
  display: none;
  height: 100%;
}

.mod_auto_side {
	position: relative;
	z-index: 2;
	float: left;
	width: 90px;
	height: 100%;
	.nav_tit {
    display: block;
    padding: 10px 5px;
		text-align: center;
		.tit {
    	position: relative;
    	display: inline-block;
    	font-size: 12px;
    	line-height: 20px;
    	color: #aaa;
			text-align: center;
		}
		.tit:after, .tit:before {
    	position: absolute;
    	top: 10px;
    	content: ' ';
    	width: 10px;
    	height: 1px;
    	font-size: 0;
    	overflow: hidden;
    	background-color: #aaa;
    	-webkit-transform: scaleY(.5);
			-webkit-transform-origin: 0 0;
		}
		.tit:before {
			left: -15px;
		}
		.tit:after {
    	right: -15px;
		}
	}
	.nav_item {
    position: relative;
    display: block;
    padding: 10px 5px;
    font-size: 14px;
    line-height: 20px;
    color: #222;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
		text-overflow: ellipsis;
	}
	.nav_item.current {
    color: #15d3a6;
	}
}
.mod_auto_side:before {
	content: " ";
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	border-right: 1px solid #eaeaea;
	-webkit-transform: scaleX(.5);
	-webkit-transform-origin: 0 0;
}

.nav_item.current {
	color: #15d3a6;
}
.nav_item.current:before {
  position: absolute;
  content: ' ';
  top: 10px;
  left: 0;
  width: 3px;
  height: 20px;
  font-size: 0;
  overflow: hidden;
  background-color: #15d3a6;
}

.mod_sort_goods {
	padding: 14px 11px 0;
}
.goods_list {
	// overflow: hidden;
	.list_item{
		width: 50%;
	}
}
.pullup-wrapper {
	padding: 10px;
  text-align: center;
	color: #999;
	font-size: 14px;
  line-height: 26px;
}

.current{
  display:block;
}
</style>