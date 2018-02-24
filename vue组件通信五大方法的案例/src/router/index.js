import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import Game from '@/components/game'
import Game01 from '@/components/game01'
import Game02 from '@/components/game02'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/home"
    },
    {
    	path:'/home',
 //通过这种方式来区分router-view   其相应的router-view  中定义name='a'的属性
    	components:{
    		a:Home
    	},
    	children:[
    		{
    			path:'/home/game',
    		  component:Game
    		}
    	]
    },
    {
    	path:'/home01/game01/:nums',
  //通过这种方式来区分router-view   其相应的router-view  中定义name='b'的属性
    	components:{      
    		b:Game01
    	},
    },
    {
    	path:'/home02/game02',
    	components:{
    		c : Game02
    	},
    	name:'game02'
    }
    
  ]
})
