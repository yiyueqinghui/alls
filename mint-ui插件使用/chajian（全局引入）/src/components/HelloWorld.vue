<template>
  <div class="hello">
  	<h1>参考链接：<a href="https://www.cnblogs.com/stella1024/p/7771334.html">点此跳转</a></h1>
    <h1>js---Toast插件</h1>
    <button @click="hand">Toast</button>
    <h1>js---swiper插件</h1>
    <div class="lunbo">
    	<mt-swipe :auto="4000">
    		<!--在引用的插件中使用v-for,必须要用：:key="item.id"来区分,否则启动项目时会报警告，阻止启动-->
			  <mt-swipe-item v-for="item in imgurl" :key="item.id">    
			  	  <img :src="item['img']" style="width: 100%;height:100%;" />
			  </mt-swipe-item>
			</mt-swipe>
    </div>
    <h1>js---Picker插件</h1>
    <div class="pick">
    	 <mt-picker :slots="slots" :visibleItemCount=3   @change="onValuesChange"></mt-picker>
    </div>
    <h1>css---Navbar插件</h1>
	  <div class="navss">
				<mt-navbar v-model="selected">
				  <mt-tab-item id="1">选项一</mt-tab-item>
				  <mt-tab-item id="2">选项二</mt-tab-item>
				  <mt-tab-item id="3">选项三</mt-tab-item>
			  </mt-navbar>
			  <mt-tab-container v-model="selected">
				  <mt-tab-container-item id="1">
				    <mt-cell v-for="n in 10"  :key="n"  :title="'内容 ' + n" />
				  </mt-tab-container-item>
				  <mt-tab-container-item id="2">
				    <mt-cell v-for="n in 4" :key="n" :title="'测试 ' + n" />
				  </mt-tab-container-item>
				  <mt-tab-container-item id="3">
				    <mt-cell v-for="n in 6" :key="n" :title="'选项 ' + n" />
				  </mt-tab-container-item>
				</mt-tab-container>
    </div>
    <h1>css---Search</h1>
    <div class="searchs">
    	  <mt-search v-model="value"></mt-search>
    </div>
    
    <h1>form----Field</h1>
    <div class="fild">
    	  <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
				<mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
				<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
				<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import { Field } from 'mint-ui';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgurl:[
         {
         	img:require('../assets/swiper01.jpg'),
          id:0
         },
         {
         	img:require('../assets/swiper02.jpg'),
          id:1
         },
         {
         	img:require('../assets/swiper03.jpg'),
          id:2
         }
      ],
//    日历
      slots: [
        {
          flex: 1,
          values: ['2015', '2016','2017', '2018','2019'],
          defaultIndex:3,
          className: 'slot1',
          textAlign: 'center'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex:1,
          values: ['01', '02', '03', '04', '05', '06','07','08','09','10','11','12'],
          defaultIndex:2,
          className: 'slot3',
          textAlign: 'center'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex:1,
          values: ['01', '02', '03', '04', '05', '06','07','08','09','10','11','12'],
          defaultIndex:3,
          className: 'slot4',
          textAlign: 'center'
        }
      ],
      selected:"1",
      value:'',
      username:'',
      email:'',
      password:null,
      phone:null
      
    }
  },
  methods:{
  	hand(){
  		Toast({
			  message: 'Upload Complete',
			  position: 'center',
			  duration: 10000
			});
   },
   onValuesChange(picker,values){
   	  console.log(picker);
   	  console.log(values[0],values[1]);
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
.pick{
	width: 70%;
	margin: 10px auto;
}
.searchs{
	height: 50px;
}
</style>
