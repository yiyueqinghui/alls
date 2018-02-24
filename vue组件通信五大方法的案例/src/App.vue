<template>
  <div id="app">
  	<h2>Vue2项目传递信息汇总</h2>
    <h4> 一, 父组件传递信息给子组件 （props属性）  </h4>
    <p>
    	步骤如下: (第一步，父组件把要传递的数据绑定给子组件的标签上;<br/>
    	  第二步，子组件通过props:[]来接受相应的属性，从而获取到父组件传递过来的数据
    	 )
    </p>
    <Child01 :info=message></Child01>
    
    
    <h4>二, 子组件传递信息给父组件（$emit()发射事件,结合自定义事件来接受传递过来的数据）</h4>
    <p>
    	步骤如下：
    	       第一步,子组件发送信息给父组件（        this.$emit('触发父组件自定义的事件名',传递的数据)   )<br />
    	      第二步，父组件上触发事件,通过事件传递参数将数据传递给父组件。<br/>
    	       第三步，父组件的事件 接收参数,保存并出来参数。
    	
    </p>
    <Child02 @restxt='changetxt'></Child02>
    <p>这是子组件传递过来的数据:   {{son}}</p>
    
    <h4>三,路由专递信息（query）(父路由向子路由传递信息)</h4>
    <router-view name="a"></router-view>
     <!--当页面中有许多router-view时,使用name来区分router-view-->
    
    
    <h4>四,路由专递信息（params）(父路由向子路由传递信息)</h4>
    <h5>情况一，参数显示在url中</h5>
    <Home01></Home01>
    
    <h5>情况二，参数不显示在url中</h5>
    <Home02></Home02>
    
    <h4>五，通过eventBus传递数据</h4>
    <Home03></Home03>
    <Game03></Game03>
  </div>
</template>

<script>
import Child01 from './components/child01'
import Child02 from './components/child02'
import Home01 from './components/home01'
import Home02 from './components/home02'
import Home03 from './components/home03'
import Game03 from './components/game03'
export default {
  name: 'app',
  data(){
  	return {
  		message:'我是父组件的数据',
  		son:''
  	}
  },
  methods:{
  	changetxt:function(data){
  		this.son = data;
  	}
  },
  components:{
  	Child01,
  	Child02,
  	Home01,
  	Home02,
  	Home03,
  	Game03
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
