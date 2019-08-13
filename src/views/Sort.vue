<template>
  <div class="sort">
		<div class="mod_auto_head">
			<div class="mod_head_search mod_head_search_fixed">
				<div class="head_search">
					<a href="" class="btn_search">
						<i class="icon icon_search"></i>
					</a>
					<div class="cate_list">
						<span class="item">魔道祖师</span>
						<span class="item">全职高手</span>
						<span class="item">亲爱的</span>
					</div>
				</div>
			</div>
		</div>
		<div class="mod_auto_both">
			<div ref="scrollerleft" class="mod_auto_side">
				<div class="scroller">
					<div v-for="(item, index) of sortNav" :key="index" class="sort_nav">
						<div class="nav_tit">
							<span class="tit">{{index}}</span>
						</div>
  			     <div v-for="i of item" :key="i" class="nav_item">
							{{i}}
  			     </div>
  			  </div>
  			</div>
			</div>
			<div class="mod_auto_main">
				<div class="mod_sort_goods mod_sort_goods_h"  ref="scrollerright">
    			  <ul class="goods_list scroller" >
    			    <li class="list_item"
								v-for="item in goods"
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
    			  </ul>
    			  <div class="pullup-wrapper">
    			    <div v-if="!isPullUpLoad" class="before-trigger">
    			      <span class="pullup-txt">Pull up and load more</span>
    			    </div>
    			    <div v-else class="after-trigger">
    			      <span class="pullup-txt">Loading...</span>
    			    </div>
    			  </div>
				</div>
			</div>
		</div>
		
		
			<!-- <div ref="scrollerleft" class="left-bswrapper">
				<div class="pullup-scroller">
					<ul v-for="(item, index) of sortNav" :key="index" class="pullup-list">
						<span style="background-color:red">{{index}}</span>
  		      	  <li v-for="i of item" :key="i" class="pullup-list-item">
						  		{{i}}
  		      	  </li>
  		      	</ul>
  		    </div>
			</div>-->
    	<!-- <div ref="scrollerright" class="right-bswrapper">
    	  <div class="pullup-scroller">
    	    <ul class="pullup-list">
    	      <li v-for="i of data" :key="i" class="pullup-list-item">
    	        {{ i % 5 === 0 ? 'scroll up 👆🏻' : `I am item ${i} `}}
    	      </li>
    	    </ul>
    	    <div class="pullup-wrapper">
    	      <div v-if="!isPullUpLoad" class="before-trigger">
    	        <span class="pullup-txt">Pull up and load more</span>
    	      </div>
    	      <div v-else class="after-trigger">
    	        <span class="pullup-txt">Loading...</span>
    	      </div>
    	    </div>
    	  </div>
    	</div>  -->
	
  </div>
</template>

<script>
	import BScroll from '@better-scroll/core'
	import Pullup from '@better-scroll/pull-up'

	BScroll.use(Pullup)
	  
	export default{
		name: 'sort',
		components:{
		},
		data(){
			return{
				sortNav: {
					'推荐':['魔道祖师','好物种草'],
					'周边':['形象','影视','明星','动漫','游戏','少儿','纪录','综艺片','体育','母婴'],
					'商品':['居家生活','3c数码','服饰鞋包','手办玩具','配件','文具','食品','饰品','演出票务','视频vip卡','专辑','创意礼品','美妆个护','图书']
				},
				isPullUpLoad: false,
				data: 30,
				goods: []
			}
		},
		watch: {
    	    
    },
		created(){
			this.bscroll = null
			for(let i = 0; i < 10; i++){
        this.goods.push({
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
			// console.log(this.axios.defaults.baseURL);
			// listuser().then((r) => {
			// 	console.log(r);
			// })
			// listuser2(1).then((r) => {
			// 	console.log(r);
			// })
		},
		beforeDestroy() {
		},
		methods: {
			initBscroll() {
				// 左边回弹
				this.bscroll = new BScroll(this.$refs.scrollerleft, {
        		  scrollY: true,
        		  pullUpLoad: true
				})
				//右边回弹
        		this.bscroll = new BScroll(this.$refs.scrollerright, {
        		  scrollY: true,
        		  pullUpLoad: true
				})
      	  	this.bscroll.on('pullingUp', this.pullingUpHandler)
      	},
      	async pullingUpHandler() {
      	  this.isPullUpLoad = true

      	  await this.requestData()

      	  this.bscroll.finishPullUp()
      	  this.bscroll.refresh()
      	  this.isPullUpLoad = false
      	},
      	async requestData() {
					// if(this.goods.length > 30){
					// 	 this.isPullUpLoad = false
					// 	 console.log(this.goods.length)
					// 	 return false;
					// }
      	  try {
						setTimeout(() => {
      	      let j = this.goods.length + 10
            	for(let i = this.goods.length; i < j; i++){
            	  this.goods.push({
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
            	  this.goods[i].priceVip = (() => {
            	    if(Math.floor((Math.random()*10) + 1) >= 7){
            	      return this.goods[i].price - Math.floor((Math.random()*10) + 1)
            	    }
            	    return false
            	  })()
            	}
      	  }, 1000)
      	    // const newData = await this.ajaxGet(/* url */)
      	    // this.data += newData
      	  } catch (err) {
      	    console.log(err)
      	  }
      	},
      	ajaxGet(/* url */) {
      	  return new Promise(resolve => {
      	    setTimeout(() => {
      	      let j = this.goods.length + 10
            	for(let i = this.goods.length; i < j; i++){
            	  this.goods.push({
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
            	  this.goods[i].priceVip = (() => {
            	    if(Math.floor((Math.random()*10) + 1) >= 7){
            	      return this.goods[i].price - Math.floor((Math.random()*10) + 1)
            	    }
            	    return false
            	  })()
            	}
      	  }, 1000)
      	})
      }
		}
	}
</script>
<style lang='less' scoped>
.sort{
	overflow: hidden;
	background: #fff;
	height: 100vh;
	width: 100%;
  min-height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.mod_auto_head{
	  -webkit-flex: 0 0 auto;
    flex: 0 0 auto;
    position: relative;
		height: 47px;
}
.mod_head_search.mod_head_search_fixed {
		position: relative;
		.head_search {
    	display: -webkit-flex;
    	display: flex;
			height: 26px;
			.icon_search {
    		position: relative;
    		top: 3px;
    		display: inline-block;
    		vertical-align: top;
    		color: #15d3a6;
				margin-right: 2px;
			}
			.icon_search:before {
    		position: absolute;
    		top: 0;
    		left: 0;
    		content: ' ';
    		width: 12px;
    		height: 12px;
    		border: 2px solid #15d3a6;
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
    		background: #15d3a6;
    		-webkit-transform: rotate(-45deg);
				transform: rotate(-45deg);
			}
		}
		.btn_search {
    	-webkit-flex: 1 1 auto;
			flex: 1 1 auto;
		}
		.cate_list {
    	-webkit-flex: 0 0 auto;
    	flex: 0 0 auto;
    	height: 26px;
    	padding: 0 5px;
    	border-radius: 26px;
    	background: #f9f9f9;
			overflow: hidden;
			.item {
    		display: inline-block;
    		vertical-align: top;
    		padding: 0 4px;
    		font-size: 12px;
    		line-height: 26px;
    		color: #666;
    		max-width: 60px;
    		overflow: hidden;
    		white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
}
.mod_head_search {
    z-index: 5;
    height: 46px;
    width: 100%;
    padding: 11px 10px 9px;
    -webkit-box-sizing: border-box;
		box-sizing: border-box;
		background-color: #fff;
}


.mod_auto_both {
  -webkit-flex: 1 1 auto;
  flex: 1 1 auto;
  position: relative;
  height: 100%;
  height: -webkit-calc(100% - 46px);
	height: calc(100% - 46px);
}
.mod_auto_both:before {
  content: " ";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  border-bottom: 1px solid #eaeaea;
  -webkit-transform: scaleY(.5);
	-webkit-transform-origin: 0 0;
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

.mod_auto_main {
    position: relative;
    z-index: 1;
    height: 100%;
		margin-left: 90px;
}

.mod_sort_goods {
		padding: 14px 11px 0;
		height: 100%;
		// overflow: hidden;
}
.goods_list {
    overflow: hidden;
    // font-size: 0;
		// letter-spacing: -3px;
		// height: 100%;
}


.scroll-wrapper{
	height: 400px;
	overflow: hidden;
	.scroll-item{
		height: 50px;
	  	line-height: 50px;
	  	font-size: 24px;
	  	font-weight: bold;
	  	border-bottom: 1px solid #eee;
	  	text-align: center;
	  }
	.scroll-item:nth-child(2n){
	  background-color:#f3f5f7;
	}
	  
	.scroll-item:nth-child(2n+1){
	  background-color:#42b983;
	}
}

.pullup{
	height: 400px;
	overflow: hidden;
}
.left-bswrapper{
	height: 100%;
	width: 20%;
  	padding: 0 10px;
  	border: 1px solid #ccc;
	overflow: hidden;
	float: left;
}
.right-bswrapper{
	height: 100%;
	width: 68%;
  	padding: 0 10px;
  	border: 1px solid #ccc;
	overflow: hidden;
	float: right;
}
  
.pullup-list{
	padding: 0;
}
  
.pullup-list-item{
  	padding: 10px 0;
  	list-style: none;
  	border-bottom: 1px solid #ccc;
}
.pullup-wrapper{
	padding: 20px;
  	text-align: center;
  	color: #999;
}
  

  
</style>