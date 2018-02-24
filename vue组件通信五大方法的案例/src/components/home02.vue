<template>
	<div>
		<h4>params传递信息</h4>
		<router-link :to="{name:'game02',params:{numbers:'111111'}}">
			<button>参数不显示在url中</button>
		</router-link>
		<router-view name='c'></router-view>
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