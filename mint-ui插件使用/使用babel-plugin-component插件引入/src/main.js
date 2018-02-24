// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button } from 'mint-ui';        //babel-plugin-component插件方法引入mint插件
//import 'mint-ui/lib/button/style.css';    
//不需要再引入相应的css,安装的babel-plugin-component 会自动匹配相应的css,不需要再手动引入
Vue.component(Button.name,Button)

import { Picker } from 'mint-ui';       //引入日历Picker
Vue.component(Picker.name, Picker);

//使用babel-plugin-component引入mint-ui步骤如下
//     第一步,npm安装mint-ui    npm i mint-ui -S
//     第二步,npm安装babel-plugin-component    npm i babel-plugin-component -D
//          (如果报错,多安装几次)(在项目启动的前提下安装babel-plugin-component)
//     第三步,。babelrc中配置它
//           {
//							  "presets": [
//							    ["env", {
//							      "modules": false,
//							      "targets": {
//							        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
//							      }
//							    }],
//							    "stage-2"
//							  ],
//							  "plugins": ["transform-runtime",["component",[
//							          {"libraryName":"mint-ui","style":true}
//							      ]]],
//							  "env": {
//							    "test": {
//							      "presets": ["env", "stage-2"],
//							      "plugins": ["istanbul"]
//							    }
//							  }
//							}

   
//     第四步, 在main.js中引入; 
//          相比单独引入，其可以利用babel-plugin-component自动加载相应的css
//          import { Picker } from 'mint-ui';      
//          Vue.component(Picker.name, Picker); 


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
