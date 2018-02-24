import Vue from 'vue'
import App from './App'
import router from './router'             
import Toast from 'mint-ui/lib/toast';     //单独引入Toast插件
import 'mint-ui/lib/toast/style.css';
Vue.component(Toast.name,Toast);

import Range from 'mint-ui/lib/range';      //单独引入Range
import 'mint-ui/lib/range/style.css';
Vue.component(Range.name,Range);

import Button from 'mint-ui/lib/button';    //单独引入Button
import 'mint-ui/lib/button/style.css';
Vue.component(Button.name,Button);

//单独引入mint-ui步骤如下
//     第一步,npm安装mint-ui    npm i mint-ui -S
//     第二步, 全局引入;         
//           main.js中        import Range from 'mint-ui/lib/range';      //单独引入Range
//						import 'mint-ui/lib/range/style.css';
//						Vue.component(Range.name,Range);

//     第三步,个别插件使用时还需要在相应的使用的组件内单独引入一下,不过大部分不需要，例如：Toast，需要再次引入下

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
