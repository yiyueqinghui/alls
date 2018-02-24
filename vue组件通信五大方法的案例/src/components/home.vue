<template>
	<div>
		<h4>首页</h4>
		<router-link :to='{path:"/home/game",query:{num:this.shareid}}'>
			<button>显示</button>
		</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	export default({
		data(){
			return {
				shareid:100
			}
		}
	})
</script>

<style>
</style>