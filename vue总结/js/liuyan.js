document.addEventListener('DOMContentLoaded',function () {
 //存取localStorage中的数据
 var store = {
     save(key,value) {
         localStorage.setItem(key,JSON.stringify(value));
     },
     fetch(key){//获取
        return JSON.parse(localStorage.getItem(key)) || [];
     }
 }
 /*var list = [
     {
         title: "吃饭睡觉",
         isChecked: false //状态为false，为不选中，任务未完成
     },
     {
         title: "web前端开发",
         isChecked: true //状态为true，为选中，任务已完成
     }
 ];*/
 var fiter = {
     all:function (list) {
         return list;
     },
     finished:function (list) {
         return list.filter(function (item) {
             return item.isChecked
         });
     },
     unfinished:function (list) {
         return list.filter(function (item) {
             return !item.isChecked
         });
     }
 }
 //取出所有的值
 var list = store.fetch("datura_msg");
 var vm = new Vue({
     //这里面是选项对象，里面有很多值
     el: ".main",//挂在点，挂在到main上
     data: {
         list: list, //留言的内容数组，注意这里数组内每一条数据都是一个json
         todo: '',
         listMsg: {},
         editorTodos: '',//记录正在编辑的数据
         beforeTitle: '',//记录正在编辑的数据的title
         visibility: 'all'//通过这个属性值的变化对数据进行筛选
     },
     watch: {
        /* list: function () {//监听list这个属性，当这个属性对应的值发生变化就会执行函数
             store.save("datura_msg",this.list);
         }*/
        list: {
            handler:function () {
                store.save("datura_msg",this.list);
            },
            deep:true
        }
     },
     computed: {
         noCheckLength:function () {
             return this.list.filter(function(item){
                     return !item.isChecked
                 }).length
         },
         filterList:function () {
             //过滤的时候有三种情况 all finished unfinished

             //return fiter[this.visibility](list);//函数调用
             //找到了过滤函数，就返回过滤后的数据，如果没有就返回所有数据
             return fiter[this.visibility]?fiter[this.visibility](list):list;
         }
     },
     methods: {
         addTodo(data,ev){  //添加任务  第二个参数接收一下事件对象
             //向list中添加一项任务
             //事件处理函数中的this，指向的的那个根实例
             /*if(ev.keyCode == 13){
              this.list.push({
              title:ev.target.value   //这里是操作dom了，影响性能
              });
              }*/
            /* this.list.push({   //向list中添加一项任务
                 title:this.todo,
                 isChecked:false
             });*/
             this.listMsg = {
                 title:this.todo,
                 isChecked:false
             }
             this.list.push(this.listMsg);
             this.todo = ''
         },
         delTodo(todo) {//删除任务
             //在数组中查找点击当前数据在list数组中的位置，找到其索引值
             var index = this.list.indexOf(todo);
             if(confirm("确定删除？")){
                 this.list.splice(index,1);
             }
         },
         edtorTodo(todo) {//编辑任务
             //编辑任务的时候。记录一下编辑这条任务的title，方便在取消编辑的时候重新给之前的title
             this.beforeTitle = todo.title;
             this.editorTodos = todo;
         },
         edtorTodoed(todo) {//任务编辑成功
             this.editorTodos = '';
         },
         cancelTodo(todo) {//取消编辑
             todo.title = this.beforeTitle;
             this.beforeTitle = '';
             //让div显示出来,input隐藏
             this.editorTodos = '';
         }
     },
     directives: {
         "focus": {
             update(el,binding) {
                // console.log(el);//指绑定的元素，可以用来直接操作DOM =>  <input type="text" class="edit" />
                 //console.log(binding);
                 if(binding.value == true){
                     el.focus();//当前编辑元素获取焦点
                 }
             }
         }
     }
 });
 function watchHashChange() {
     //var hash = window.location.hash;
     var hash = window.location.hash.slice(1);
     vm.visibility = hash;
     //console.log(hash);
 }
 watchHashChange();
 window.addEventListener('hashchange',watchHashChange,false);
},false);