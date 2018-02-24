<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p style="max-width: 800px;text-align: left;margin: 0 auto;">
        第一步，找到相应的项目目录，安装axios;    使用npm命令   npm install axios<br/>
        第二步，在main.js中引入，import axios from 'axios'
                并且通过修改Vue的原型链， Vue.prototype.$axios = axios; (这个的意思是给vue添加原型链$axios,这样在以后的组件中就都可以访问到$axios,即axios)
                方便以后在组件中使用；
                注意，即使这样，axios也无法在vuex中（store.js）使用.若要在vuex中使用，必须
                单独引入vuex;（import axios from 'axios'）
    </p>
    <p style="text-align: center;color:red;">本组件创建时获取到的axios数据如下</p>
    <ul>
      <li v-for="item in information">{{item['name']}}---{{item['age']}} </li>
    </ul>
    <hr/>
    <p class="gets">点击后加载数据<button @click="getData">获取数据</button></p>
    <ul>
      <li v-for="item in info">{{item}}</li>
    </ul>
    <hr/>
    <p style="text-align: center;color:red;">vuex获取到的数据{{nums}}</p>
    <hr/>
    <p style="text-align: center;color:red;">vuex获取到的axios数据如下</p>
    <ul>
      <li v-for="item in alls">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      information:'',
      info:''
    }
  },
  methods:{
    //点击获取到数据，进行填充
    getData(){
      // 先执行axios拦截
      this.addInterceptors();
      var that = this;
      // 发送请求
      that.$axios.get('./../../static/data.json')
        .then(function(res){
          console.log('返回的数据',res.data);
          that.info = res.data['old'];
        })
        .catch(function(res) {
          console.log(res)
        })
    },
    // axios拦截
    addInterceptors(){
      //发送请求之前
      this.$axios.interceptors.request.use(function(config){
         //请求开始之前的操作
        console.log(config);
        console.log('请求开始');
        console.log("请求地址:",config.url);
        return config
      },function(error){
        //请求失败的时候的操作
        console.log('请求失败');
        return Promise.reject(error);
      });

      //接收响应之后
      this.$axios.interceptors.response.use(function(config){
        console.log('接受响应',config);
        return config;
      },function(error){
         console.log('响应出错');
         return Promise.reject(error);
      })

    }


  },
  mounted(){
    // 组件加载时，就进行请求数据，从而渲染到页面上
    var that = this;
    that.$axios.get('./../../static/data.json')
      .then(function(res){
        console.log(res.data);
        that.information = res.data['all'];
        console.log(that.information);
      })
      .catch(function(res) {
        console.log(res)
      });

      //加载数据
     that.$store.dispatch('getinfo');




  },
  computed:{
     nums:function(){
       return this.$store.state.num;
     },
     alls:function(){
       return this.$store.state.all;
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  .gets{
     width: 100%;
     text-align: center;
  }
</style>
