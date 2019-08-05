<template>
  <div class="about">
    <h1>This is an about page水电费可两</h1>
  </div>
</template>

<script>
	import {listuser, listuser2} from '../service/getData.js'
	export default{
		name: 'about',
		data(){
			return{

			}
		},
		created(){
			
		},
		mounted(){
			console.log(this.axios.defaults.baseURL);
			listuser().then((r) => {
				console.log(r);
			})
			listuser2(1).then((r) => {
				console.log(r);
			})
		}
	}
</script>
<style lang='less' scoped>

</style>