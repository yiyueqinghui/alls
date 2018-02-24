<template>
  <div class="hello">
  	<h1>参考链接：<a href="https://www.cnblogs.com/stella1024/p/7771334.html">点此跳转</a></h1>
    <h1>js---Toast插件</h1>
    <button @click='open'>弹出弹窗</button>
    <h1>js---Range插件</h1>
    <div class="ranges">
    	 <mt-range v-model="rangeValue" :min="0" :max="100" :step="1" :bar-height="2">
				   <div slot="start">{{rangeValue}}</div>
				   <div slot="end">100</div>
		   </mt-range>
    </div>
    <h1>css---Button插件</h1>
    <div class="btn">
    	  <mt-button type="default" size="small" plain >default</mt-button>
				<mt-button type="primary" size="normal">primary</mt-button>
				<mt-button type="danger" disabled icon="back">danger</mt-button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      rangeValue:0
    }
  },
  methods:{
      open(){
      	Toast({
				  message: '提示',
				  position: 'center',
				  duration: 5000
				});
      }
  }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.lunbo{
	width: 100%;
	height: 200px;
}
.is-active{
	background:red!important;
}
.ranges{
	width:80%;
	margin: 0 auto;
}


</style>
