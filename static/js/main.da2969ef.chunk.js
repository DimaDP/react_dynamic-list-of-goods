(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{13:function(t,e,o){},14:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(2),c=o.n(r),s=o(5),u=o(3),l=o(4),i=o(7),d=o(6),f=(o(13),function(t){var e=t.goods;return a.a.createElement("ul",null,e.map((function(t){return a.a.createElement("li",{key:t.id,style:{color:"".concat(t.color)}},t.name)})))}),h=function(){return fetch("https://mate.academy/students-api/goods").then((function(t){return t.json()}))},m=function(t){Object(i.a)(o,t);var e=Object(d.a)(o);function o(){var t;Object(u.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={goods:[]},t.showFiveGoods=function(){h().then((function(e){return t.setState({goods:Object(s.a)(e.data).sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)})}))},t.showAllGoods=function(){h().then((function(e){return t.setState({goods:e.data})}))},t.showRedGoods=function(){h().then((function(e){return t.setState({goods:e.data.filter((function(t){return"red"===t.color}))})}))},t}return Object(l.a)(o,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Dynamic list of Goods"),a.a.createElement("button",{type:"button",onClick:this.showAllGoods},"Load All goods"),a.a.createElement("button",{type:"button",onClick:this.showFiveGoods},"Load 5 first goods"),a.a.createElement("button",{type:"button",onClick:this.showRedGoods},"Load red goods"),a.a.createElement(f,{goods:this.state.goods}))}}]),o}(a.a.Component);c.a.render(a.a.createElement(m,null),document.getElementById("root"))},8:function(t,e,o){t.exports=o(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.da2969ef.chunk.js.map