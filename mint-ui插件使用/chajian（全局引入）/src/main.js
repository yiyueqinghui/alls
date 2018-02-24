import Vue from 'vue'
import App from './App'
import router from './router'              //全局引入mint-ui,
import MintUI from 'mint-ui'              //全局引入mint-ui ,
import 'mint-ui/lib/style.css'           //注意css必须单独引入 

Vue.use(MintUI)      //挂载到vue上

//全局引入mint-ui步骤如下
//     第一步,npm安装mint-ui    npm i mint-ui -S   (安装的内容会放到node_modules中)
//     第二步, 全局引入;         
//           main.js中  import MintUI from 'mint-ui'
//                    import 'mint-ui/lib/style.css'
//                    Vue.use(MintUI)      //挂载到vue上

//     第三步,局部插件使用时还需要在相应的使用的组件内单独引入一下,不过大部分不需要，例如：Toast

// 注意事项：  在引用的插件中使用v-for,必须要用：:key="item.id"来区分,否则启动项目时会报警告，阻止启动 .
//        例如：swiper插件,Navbar插件


// 小提示：下次安装cnpm install 时，不需要在单独去安装mint-ui了，由于第一次安装后会在package.json中记录所需安装的东西，当再次安装依赖时（cnpm install）,npm就会自动去安装mint-ui;(所以完全没必要担心删除node_modules后，下次安装时还需再次安装mint-ui)；
// 只要第一次安装后，package.json就会记录，记录如下 
 // "dependencies": {
    // "mint-ui": "^2.2.13",
    // "vue": "^2.5.2",
    // "vue-router": "^3.0.1"
  // },

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
