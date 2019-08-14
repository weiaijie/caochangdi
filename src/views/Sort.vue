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
  			     <div v-for="name of item" :key="name" :class="sortNavid.navItem == name ? 'nav_item current' : 'nav_item'" @click="routerJump({name,index})">
							{{name}}
  			     </div>
  			  </div>
  			</div>
			</div>
			<div class="mod_auto_main" style="touch-action: none;" ref="scrollerright">
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
		</div>

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
				sortNavid: {
					navTit: '推荐',
					navItem: '魔道祖师'
				},
				goods: []
			}
		},
		watch: {

    },
		created(){
			this.bscroll = null
			for(let i = 0; i < 6; i++){
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
			routerJump(url){
				
				this.goods = []
				console.log(this.goods)
				this.goods = this.commend(url.name)
				// this.rightScroll.refresh()
				console.log(this.rightScroll.scrollerHeight)
				// console.log(url.name)
				// console.log(this.sortNavid.navItem)	
				if(url.name == this.sortNavid.navItem){
					return false
				}
				this.sortNavid.navTit = url.index
				this.sortNavid.navItem = url.name
				// this.$refs.scrollerright.children[0].style = ''
				// this.$refs.scrollerright.children[0].style['transform'] = "translateX(0px) translateY(0px) translateZ(0px)"
				
			},
			initBscroll() {
				// 左边回弹
				this.leftScroll = new BScroll(this.$refs.scrollerleft, {
					click: true,
        	scrollY: true,
        	pullUpLoad: true
				})
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



.mod_auto_main {
  position: relative;
  z-index: 1;
	height: calc(100% - 50px);
	margin-left: 90px;
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


.pullup-wrapper{
	padding: 10px;
  text-align: center;
	color: #999;
	font-size: 14px;
  line-height: 26px;
}  
</style>