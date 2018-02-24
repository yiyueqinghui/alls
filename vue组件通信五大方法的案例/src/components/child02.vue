<template>
	<div class="child02">
		<input type="text" v-model="txt" @change="sup(txt)" />
		{{txt}}
	</div>
</template>

<script>
	export default({
		data(){
			return {
				txt:''
			}
		},
		methods:{
			sup(){
				console.log(this.txt);
				this.$emit('restxt',this.txt);    //第一步
			}
		}
	})
</script>

<style>
</style>