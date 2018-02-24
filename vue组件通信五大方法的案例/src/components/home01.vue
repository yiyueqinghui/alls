<template>
	<div>
		<h4>params传递信息</h4>
		<router-link to="/home01/game01/12345">
			<button>参数显示在url中</button>
		</router-link>
		<router-view name='b'></router-view>
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