<template>
  <div class="about">
    <h1>This is an about page水电费可两</h1>
  </div>
</template>

<script>
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
			this.axios.get('/api').then((response) => {
			  console.log(response);
			  
			})
		}
		

	}
</script>
<style lang='less' scoped>

</style>