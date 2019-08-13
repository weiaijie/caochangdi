<template>
  <div class="about pullup">
	<div ref="scrollerleft" class="left-bswrapper">
		<div class="pullup-scroller">
			<ul v-for="(item, index) of sortNav" :key="index" class="pullup-list">
				<span style="background-color:red">{{index}}</span>
        	  <li v-for="i of item" :key="i" class="pullup-list-item">
				  {{i}}
        	  </li>
        	</ul>
        	<!-- <ul class="pullup-list">
        	  <li v-for="i of sortNav" :key="i" class="pullup-list-item">
        	    {{ i % 5 === 0 ? ' 👆🏻' : `item ${i} `}}
        	  </li>
        	</ul> -->
      </div>
	</div>
    <div ref="scrollerright" class="right-bswrapper">
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
    </div>
  </div>
</template>

<script>
	import BScroll from '@better-scroll/core'
	import Pullup from '@better-scroll/pull-up'

	BScroll.use(Pullup)
	  
	export default{
		name: 'about',
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
        		data: 30
			}
		},
		watch: {
    	    
    	},
		created(){
			this.bscroll = null
    	},
		mounted(){
			this.initBscroll()
			console.log(this.sortNav)
			
			// console.log(this.$refs.scrollerleft)
			// console.log(this.$refs.scrollerright)
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
				//左边回弹
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
      		  try {
      		    const newData = await this.ajaxGet(/* url */)
      		    this.data += newData
      		  } catch (err) {
      		    console.log(err)
      		  }
      		},
      		ajaxGet(/* url */) {
      		  return new Promise(resolve => {
      		    setTimeout(() => {
      		      resolve(20)
      		    }, 1000)
      		  })
      		}
		}
	}
</script>
<style lang='less' scoped>
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