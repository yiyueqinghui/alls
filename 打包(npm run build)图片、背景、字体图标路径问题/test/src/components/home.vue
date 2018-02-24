<template>
	<div id="home">
		<p>
			打包图片路径问题，<a href="https://www.cnblogs.com/moqiutao/p/7496718.html" style="color:red;">参考链接</a>(点击即跳转)
		</p>
		<p>
			注意事项：
			  1，把css，img等静态资源放assets目录下；
			  2，font字体图标放static下面，在index.html内引入即可；
		</p>
		<p>
			图片的引用问题，<b>首先图片等静态资源应该放在assets下面；
			路径出错时，打开config-->index.js-->build下
			（assetsPublicPath: './')</b>,<br/>
		    <img src="../assets/img/03.jpg"  style="text-align:center" />
		</p>
		<p style="max-width:800px;margin:0 auto;">
			上面虽然解决了资源路径的引用问题，但是资源里面的<b>背景图片，</b>
			不像index.html中加载资源一样，通过./static/js/app.js引用可以正常加载，图片资源是通过css加载的，
			如 background: url("../../assets/images/logo-index.png") no-repeat;被相对打包后变成了url(static/img/logo-index.2f00bf2.png) no-repeat
			所以我们要保留css引用图片的正常路径，即：那么就<b>需要修改build文件夹下的utils.js代码</b>，如图所示：<br/>
			<img src="../assets/img/04.jpg"   />
		</p>
		<h2><i class="icon-home">   home组件</i></h2>
		<img src="../assets/img/01.jpg"   />
		<p class="bg">
			背景图片
		</p>
		
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	.icon-home{
		font-size: 20px;
		color:red;
	}
	.bg{
	   width:100%;
	   height:300px;
	   line-height: 300px;
	   background-image: url(../assets/img/bg.jpg);
	   background-size:50% 300px;
	   background-repeat: no-repeat;
	   background-position: center;
	   text-align: center;
	   font-size:25px;
	}
  
</style>