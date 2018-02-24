import Vue from 'vue'
import Vuex from  'vuex'
import axios from 'axios'     //引入axios

Vue.use(Vuex);

const store = new Vuex.Store({
   state:{
       num:100,
       all:''
   },
  mutations:{
       gets(state){                  //state指向的是store中的state
                                     // 在组建中触发时   this.$store.commit('gets')
       }
  },
  getters:{
       //对state数据进行筛选、加工出来的数据
  },
  actions:{                  //异步请求
       getinfo:function(context){     //context指的是store实例
         // 在组件中触发时，this.$store.dispatch('getinfo');
          axios.get('../../static/data.json')
            .then(function(res){
               context.state.all = res.data['new'];
               console.log(context.state.all);
            })
            .catch(function(res){
              console.log(res);
            })
       }

  }
})

export default store

