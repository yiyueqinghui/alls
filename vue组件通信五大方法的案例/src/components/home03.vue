<template>
	<div>
		<h4>eventBus传递信息</h4>
		<div class="large" @click="doClick($event)" style="border: 1px solid gray;">
			<b class="space">(随意点击方框内的任意一个地方，会传递其e.target的class名给game03组件)</b>
		</div>
	</div>
</template>

<script>

	export default({
		data(){
			return {
				shareid:100,
				tag:''
			}
		},
		methods:{
//第二步,在需要传递参数的组件中，定义一个emit发送需要传递的值，键名可以自己定义（可以为对象）
//  eventBus.$emit('eventBusName', id);
			doClick:function(e){
				this.tag = e.target.getAttribute('class');
				console.log(this.tag);
				Bus.$emit('getTarget',this.tag);
			}
		},
		beforeDestroy(){
			console.log('home------beforeDestroy');
			
			console.log(Bus);
		},
		created(){
			console.log('home----created')
		},
		beforeMount(){
			console.log('home----beforeMount')
		},
		mounted(){
			console.log('home----mounted')
		},
		beforeUpdate(){
			console.log('home----beforeUpdate')
		},
		updated(){
			console.log('home-----updated');
		},
		destroy(){
			console.log('home------destroy');
		}
		
	})
</script>

<style>
</style>