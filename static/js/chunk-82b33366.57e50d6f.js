(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-82b33366"],{"1a86":function(t,e,a){"use strict";var n={methods:{onClickLeft:function(){window.history.go(-1)}}};e["a"]=n},"1b10":function(t,e,a){"use strict";var n=a("9847"),o=a.n(n);o.a},"2fef":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-nav-bar",{staticClass:"shawdow",attrs:{title:"新建事项提醒","left-text":"","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._m(0),a("van-cell-group",{staticClass:"form"},[a("van-field",{attrs:{required:"",clearable:"",size:"large",label:"推送标题",placeholder:"请输入标题"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),a("van-field",{attrs:{label:"推送内容",size:"large",placeholder:"请输入内容",required:""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),a("van-field",{attrs:{label:"推送时间",size:"large",placeholder:"选择时间(若间隔推送,自动获取有效信息)"},on:{focus:t.selectTime},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}}),a("van-field",{attrs:{label:"cron",size:"large",placeholder:"可选(若自定义cron,推送频率自动失效)"},on:{blur:t.verifyCron},model:{value:t.cron,callback:function(e){t.cron=e},expression:"cron"}}),a("van-popup",{attrs:{position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("van-datetime-picker",{attrs:{type:"datetime","min-date":t.minDate,"max-date":t.maxDate},on:{confirm:t.getTime,cancel:t.cancel},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1)],1),a("van-dropdown-menu",[a("van-dropdown-item",{attrs:{options:t.option1},model:{value:t.rate,callback:function(e){t.rate=e},expression:"rate"}}),a("van-dropdown-item",{attrs:{options:t.option3},model:{value:t.value3,callback:function(e){t.value3=e},expression:"value3"}}),a("van-dropdown-item",{attrs:{options:t.option2},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1),a("div",{staticClass:"submit"},[a("van-button",{staticClass:"btn",attrs:{type:"primary",block:!0,size:"normal"},on:{click:t.newTodo}},[t._v("新建")])],1)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logoWrapper"},[n("img",{staticClass:"logo",attrs:{src:a("afbb")}})])}],i=a("eeb9"),s=a("1a86"),r=a("91a0"),l={mixins:[s["a"],r["a"]],name:"NewTodo",data:function(){return{title:"代办事项提醒",content:"",originDate:"",time:"",cron:"",minHour:10,maxHour:20,minDate:new Date,maxDate:new Date(2022,12,31),currentDate:new Date,show:!1,radio:1,rate:1,option1:[{text:"仅提醒一次",value:1},{text:"每天一次",value:2},{text:"每周一次",value:3},{text:"每月一次",value:4},{text:"每年一次",value:5}],value2:1,option2:[{text:"重要且紧急",value:1},{text:"重要不紧急",value:2},{text:"紧急不重要",value:3},{text:"不紧急不重要",value:4}],value3:2,option3:[{text:"星期日",value:1},{text:"星期一",value:2},{text:"星期二",value:3},{text:"星期三",value:4},{text:"星期四",value:5},{text:"星期五",value:6},{text:"星期六",value:7}]}},computed:{},methods:{formatter:function(t){var e,a,n,o,i;return e=t.getFullYear(),a=t.getMonth()+1,n=t.getDate(),o=t.getHours(),i=t.getMinutes(),a=a<10?"0"+a:a,n=n<10?"0"+n:n,o=o<10?"0"+o:o,i=i<10?"0"+i:i,e+"-"+a+"-"+n+" "+o+":"+i+":00"},getTime:function(t){var e=this.formatter(t);this.time=e,this.originDate=t,this.show=!1},newTodo:function(){var t=this;if(""==this.title||""==this.content||""==this.time&&""==this.cron)this.$toast("必填信息不能为空");else if(1===this.rate&&""===this.cron)Object(i["a"])({method:"post",url:"/api/todo_job",data:{title:this.title,content:this.content,pushTime:this.time,frequency:this.rate,type:this.value2}}).then((function(e){200===e.data.code&&(t.content="",t.time="",t.$toast("新建成功"))}));else{var e=null;if(""===this.cron){var a=this.originDate.getMinutes(),n=this.originDate.getHours(),o=this.originDate.getDate(),s=this.originDate.getMonth();switch(this.originDate.getHours(),this.rate){case 2:e="0 "+a+" "+n+" * * ?";break;case 3:e="0 "+a+" "+n+" ? * "+this.value3;break;case 4:e="0 "+a+" "+n+" "+o+" * ?";break;case 5:e="0 "+a+" "+n+" "+o+" "+s+" ?";break}Object(i["a"])({method:"post",url:"/api/todo_job",data:{title:this.title,content:this.content,frequency:this.rate,cron:e,type:this.value2}}).then((function(e){t.content="",t.time="",t.cron="",200===e.data.code&&t.$toast("新建成功")}))}else Object(i["a"])({method:"post",url:"/api/todo_job",data:{title:this.title,content:this.content,cron:this.cron,frequency:6,type:this.value2}}).then((function(e){200===e.data.code&&(t.content="",t.time="",t.cron="",t.$toast("新建成功"))}))}}}},c=l,u=(a("1b10"),a("2877")),v=Object(u["a"])(c,n,o,!1,null,"4db69e76",null);e["default"]=v.exports},"91a0":function(t,e,a){"use strict";var n=a("eeb9"),o={methods:{selectTime:function(){this.show=!0},cancel:function(){this.show=!1},verifyCron:function(){var t=this;Object(n["a"])({method:"get",url:"/verify_cron",params:{cron:this.cron}}).then((function(e){200===e.data.code&&t.$toast("cron表达式验证成功")}))}}};e["a"]=o},9847:function(t,e,a){},afbb:function(t,e,a){t.exports=a.p+"static/img/1.63486a1a.gif"}}]);