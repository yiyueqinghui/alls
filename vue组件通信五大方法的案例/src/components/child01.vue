<template>
	<div class="child01">
		<a>父组件传递的信息如下:<br/>  {{info}}</a>
	</div>
</template>

<script>
	export default({
		props:['info'],
		data(){
			return {
				
			}
		}
	})
</script>

<style>
</style>