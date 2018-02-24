<template>
	<div>
		<h4> enentBus传递过来的参数 {{pam}}</h4>
	</div>
</template>

<script>
	
	export default({
		data(){
			return {
				pam:'111'
			}
		},
		methods:{
			handle:function(pa){
				this.pam = pa;
				console.log('传递过来的参数',pa);
			}
			
		},
		beforeDestroy(){
			console.log('game------beforeDestroy');
			Bus.$off('getTarget',this.handle);
		},
		created(){
			console.log('game----created');
//			Bus.$on('getTarget',this.handle);
		},
		beforeMount(){
			console.log('game----beforeMount');
			
		},
		mounted(){
//第三步,在需要接受参数的组件重，用on接受该值（或对象）
//  eventBus.$on('eventBusName', function(val) {<br> 　　console.log(val)<br>})
   // 注意: 必须结合生命周期,看应该在哪个阶段去接收eventBus数据
			console.log('game----mounted');
			Bus.$on('getTarget',this.handle);
		},
		
//第四步,最后记住要在beforeDestroy()中关闭这个eventBus
//  eventBus.$off('eventBusName');	
		beforeUpdate(){
			console.log('game----beforeUpdate')
		},
		updated(){
			console.log('game-----updated');
		},
		destroy(){
			console.log('game------destroy');
		}
		
	})
</script>

<style>
</style>