<template>
  <div class="home">
    <div class="mod_head_search_home">
      <div class="head_search">
	    	<div>
	    		<i class="icon icon_search"></i>
	    		<span class="icon_txt">陈情令</span>
	    	</div>
	    		<div class="cate_list">
              <span class="item" v-for="item in cateListData" :data-href='item.href' :key="item.name">{{item.name}}</span>
	    		</div>
	    </div>
      <div class="right_icon" data-href="ip_cat">
	    	<svg class="svg_content" height="19" viewBox="0 0 19 19" width="19" xmlns="http://www.w3.org/2000/svg"><path d="m16.3622149 15.5225256 1.6722131 1.6722131c.2318738.2318738.2318738.6078155 0 .8396893s-.6078155.2318738-.8396893 0l-1.6722131-1.6722131c-.5823612.4147113-1.2947929.6586184-2.0641923.6586184-1.9675144 0-3.56249997-1.5949855-3.56249997-3.5625 0-1.9675144 1.59498557-3.56249997 3.56249997-3.56249997 1.9675145 0 3.5625 1.59498557 3.5625 3.56249997 0 .7693994-.2439071 1.4818311-.6586184 2.0641923zm-1.6032863-14.73085893h1.4702381c.6558381 0 1.1875.53166186 1.1875 1.1875v1.47023809c0 2.68581334-2.1772819 4.86309524-4.8630953 4.86309524h-1.4702381c-.6558381 0-1.18749997-.53166186-1.18749997-1.1875v-1.4702381c0-2.68581333 2.17728187-4.86309523 4.86309527-4.86309523zm-11.30952384 0c2.68581334 0 4.86309524 2.1772819 4.86309524 4.86309523v1.4702381c0 .65583814-.53166186 1.1875-1.1875 1.1875h-1.4702381c-2.68581333 0-4.86309523-2.1772819-4.86309523-4.86309524v-1.47023809c0-.65583814.53166186-1.1875 1.1875-1.1875zm0 16.62500003h-1.47023809c-.65583814 0-1.1875-.5316619-1.1875-1.1875v-1.4702381c0-2.6858134 2.1772819-4.86309527 4.86309523-4.86309527h1.4702381c.65583814 0 1.1875.53166187 1.1875 1.18749997v1.4702381c0 2.6858134-2.1772819 4.8630953-4.86309524 4.8630953zm11.30952384-15.43750003c-2.0299752 0-3.6755953 1.64562004-3.6755953 3.67559523v1.4702381h1.4702381c2.0299752 0 3.6755953-1.64562004 3.6755953-3.67559524v-1.47023809zm-11.30952384 0h-1.47023809v1.47023809c0 2.0299752 1.64562004 3.67559524 3.67559523 3.67559524h1.4702381v-1.4702381c0-2.02997519-1.64562004-3.67559523-3.67559524-3.67559523zm0 14.25000003c2.0299752 0 3.67559524-1.6456201 3.67559524-3.6755953v-1.4702381h-1.4702381c-2.02997519 0-3.67559523 1.6456201-3.67559523 3.6755953v1.4702381zm10.00892854-.3958334c1.3116763 0 2.375-1.0633237 2.375-2.375 0-1.3116762-1.0633237-2.375-2.375-2.375-1.3116762 0-2.375 1.0633238-2.375 2.375 0 1.3116763 1.0633238 2.375 2.375 2.375z" fill="#fff"></path></svg>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'home',
  components: {
    
  },
  data() {
    return{
      search:'',
      placeholder:'saber',
      placeholder1:'输入你感兴趣的商品或名片',
      cateListData: [
        {
          name: '魔道祖师',
          href: 'https://cy.qq.com/mall/cy/iwCWpLDR.html?ptag=from%3Abanner%3Bhd%3A1239&amp;ptag'
        },
        {
          name: '全职高手',
          href: 'https://mall.video.qq.com/activity_shelf_page?iPageId=207'
        }
      ]
    }
  },
  watch: {

  },
  created(){

  },
  mounted(){

  },
  destroyed() {

  },
  methods: {
    cate_list: () =>{
      console.log(this)
    }
  }
}
</script>

<style lang='less' scoped>
.home{
  background-color: #56e0c7;
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
}

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
 
</style>