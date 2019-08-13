<template>
  <div class="about pullup">
    <div ref="scroller" class="pullup-bswrapper">
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
			console.log(this.$refs.scroller)
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
        		this.bscroll = new BScroll(this.$refs.scroller, {
        		  scrollY: true,
        		  pullUpLoad: true
				})
				console.log(this.bscroll)
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
      		    // handle err
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
  
.pullup-bswrapper{
	height: 100%;
  	padding: 0 10px;
  	border: 1px solid #ccc;
  	overflow: hidden;
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