<template>
  <div class="hello">
    <h1>参考链接：<a href="https://www.cnblogs.com/stella1024/p/7771334.html">点此跳转</a></h1>
    <h1>js---Toast插件</h1>
    <h1>css----button</h1>
    <div class="btn">
    	  <mt-button type="default">default</mt-button>
				<mt-button type="primary">primary</mt-button>
				<mt-button type="danger">danger</mt-button>
    </div>
    <h1>js----Picker</h1>
    <div class="picks">
    	  <mt-picker :slots="slots"  @change="onValuesChange" :visibleItemCount="num"></mt-picker>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
       slots: [
        {
          flex: 1,
          values: ['2015', '2016', '2017', '2017', '2018', '2019'],
          className: 'slot1',
          textAlign: 'center'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['01','02','03','04','05','06'],
          className: 'slot3',
          textAlign: 'center'
        }
      ],
      num:3
    }
  },
  methods:{
  	onValuesChange(picker,values){
  		 console.log(values[0],values[1]);
  		 console.log(picker);
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
.picks{
	width:70%;
	margin: 0 auto;
}
</style>
