(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72ea845a"],{"1a86":function(t,e,a){"use strict";var i={methods:{onClickLeft:function(){window.history.go(-1)}}};e["a"]=i},"6ce1":function(t,e,a){},"6f92":function(t,e,a){t.exports=a.p+"static/img/2.9284da52.gif"},"95a7":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-nav-bar",{staticClass:"shawdow",attrs:{title:"习惯列表","left-text":"","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._m(0),a("div",{staticClass:"header1"},[t._v("\n    习惯提醒列表:\n  ")]),a("div",{staticClass:"container"},t._l(t.habits,(function(e,i){return a("div",{staticClass:"divder"},[a("van-swipe-cell",[a("template",{slot:"left"},[a("van-button",{attrs:{square:"",type:"primary",text:"cron:"+e.cron}})],1),a("van-cell",{attrs:{border:!1,title:e.content}}),a("template",{slot:"right"},[a("van-button",{attrs:{square:"",type:"danger",text:"删除"},on:{click:function(a){return t.del(i,e.habit.id,e.jobKey,e.triggerKey)}}}),a("van-button",{attrs:{square:"",type:"primary",text:"完成"},on:{click:function(a){return t.done(i,e.habit.id,e.jobKey,e.triggerKey)}}})],1)],2)],1)})),0)],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"logoWrapper"},[i("img",{staticClass:"logo",attrs:{src:a("6f92")}})])}],r=a("eeb9"),s=a("1a86"),o={mixins:[s["a"]],name:"HabitList",data:function(){return{habits:[]}},created:function(){this.updateDate()},methods:{updateDate:function(){var t=this;r["a"].get("/api/get_habits").then((function(e){200===e.data.code&&(t.habits=e.data.data)}))},del:function(t,e,a,i){var n=this;Object(r["a"])({method:"delete",url:"/api/delete_habit",data:{id:e,jobKey:a,triggerKey:i}}).then((function(e){200===e.data.code&&(n.habits.splice(t,1),n.$toast("删除成功"))}))},done:function(t,e,a,i){var n=this;Object(r["a"])({method:"put",url:"/api/done_habit",data:{id:e,jobKey:a,triggerKey:i}}).then((function(e){200===e.data.code&&(n.habits.splice(t,1),n.$toast("更新成功"))}))}}},c=o,d=(a("b18d"),a("2877")),l=Object(d["a"])(c,i,n,!1,null,"7e918b16",null);e["default"]=l.exports},b18d:function(t,e,a){"use strict";var i=a("6ce1"),n=a.n(i);n.a}}]);
//# sourceMappingURL=chunk-72ea845a.842d9af9.js.map