(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{27:function(e,t,a){e.exports=a(48)},32:function(e,t,a){},33:function(e,t,a){},37:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(20),s=a.n(l),r=(a(32),a(33),a(7)),o=a(24),i=a(10),u=a(6),m=a(2),d=(a(37),function(){return c.a.createElement("div",{className:"navbar"},c.a.createElement("label",null,"Logo"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(u.b,{to:"Home"},"Home")),c.a.createElement("li",null,c.a.createElement(u.b,{to:"Product"},"Product")),c.a.createElement("li",null,c.a.createElement(u.b,{to:"Contact"},"Contact"))))}),f=a(9),E=a(22),v=a(23),b=a(25),p=a(26),h=a(5),g=(a(42),function(e){var t=e.AddIssue,a=Object(n.useState)(""),l=Object(h.a)(a,2),s=l[0],r=l[1];return c.a.createElement("form",{className:"new-issue",onSubmit:function(e){e.preventDefault(),t(s)}},c.a.createElement("div",{className:"input"},c.a.createElement("input",{className:"input-text",type:"text",placeholder:"todo..",onChange:function(e){e.preventDefault(),console.log(e.target.value),r(e.target.value)},value:s}),c.a.createElement("button",{className:"button"}," Submit")))}),j=(a(43),a(17)),O=function(e){var t=e.title,a=e.status,l=e.save,s=e.todoid,r=e.erase,o=Object(n.useState)(!1),i=Object(h.a)(o,2),u=i[0],m=i[1],d=Object(n.useState)(""),f=Object(h.a)(d,2),E=f[0],v=f[1],b=Object(n.useState)(!1),p=Object(h.a)(b,2),g=p[0],O=p[1],k=function(e){m(e)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"issue issue-anim  ".concat(g&&"issue-remove")},c.a.createElement("div",{className:"issue-container  ".concat(u&&"issue-container-edit"," ")},c.a.createElement("div",{className:"issue-view "},c.a.createElement("div",{className:"title2 ".concat(!a&&"delete-issue")},c.a.createElement("span",null,t)),c.a.createElement("div",{className:"con-update"},c.a.createElement("span",null,c.a.createElement(j.a,{icon:"pen",onClick:function(){return k(!0)}})),c.a.createElement("span",null,c.a.createElement(j.a,{icon:"trash",onClick:function(){return function(e){a||O(!0),setTimeout((function(){r(e)}),500)}(s)}})))),c.a.createElement("div",{className:"issue-edit"},c.a.createElement("input",{type:"text",onChange:function(e){v(e.target.value)},value:E}),c.a.createElement("button",{onClick:function(){return function(e){m(!1),l(e,E)}(s)}},"Save"),c.a.createElement("button",{onClick:function(){return k(!1)}},"Cancel"))))))},k=(a(44),a(45),function(e){var t=e.issueList;return c.a.createElement("div",{className:"summary-container"},c.a.createElement("label",null,"Mission Completed ",t.filter((function(e){return!1===e.status})).length),c.a.createElement("label",null,"In process ",function(e){return e.filter((function(e){return!0===e.status})).length}(t)))}),N=function(e){Object(p.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).state={todos:[{id:1,title:"make a report",status:!0},{id:2,title:"weekly meeting",status:!0},{id:3,title:"test and deploy",status:!0}]},n}return Object(v.a)(a,[{key:"render",value:function(){var e=this,t=function(t,a){var n=Object(f.a)(e.state.todos);n.forEach((function(e){console.log(t),e.id===t&&(e.title=a)})),e.setState({todos:n})},a=function(t){console.log("test");var a=Object(f.a)(e.state.todos);(a=a.filter((function(e){return e.id!==t||!0===e.status}))).forEach((function(e){e.id===t&&(e.status=!1)})),e.setState({todos:a})};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"issue-list"},this.state.todos.map((function(e){return c.a.createElement(O,{key:e.id,title:e.title,status:e.status,save:t,todoid:e.id,erase:a})})),c.a.createElement(g,{AddIssue:function(t){var a=e.state.todos,n={id:4,title:t,status:!1};a.push(n),console.log(e.state.todos),e.setState({todos:a})}}),c.a.createElement(k,{issueList:this.state.todos})))}}]),a}(n.Component),w=(a(46),function(){var e=Object(n.useState)([{id:1,title:"take a baht",status:!0},{id:2,title:"watch market shared",status:!1},{id:3,title:"take a examine.",status:!0}]),t=Object(h.a)(e,2),a=t[0],l=t[1];return c.a.createElement("div",{className:"history-list"},a.map((function(e){return c.a.createElement(O,{key:e.id,title:e.title,status:e.status})})),c.a.createElement(g,{AddIssue:function(e){var t=Object(f.a)(a);t.push({id:4,title:e,status:!0}),l(t)}}))}),S=(a(47),function(){return c.a.createElement("div",null,c.a.createElement(N,null),c.a.createElement(w,null))});r.b.add(o.a,i.a,i.b,i.d,i.c);var y=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,null,c.a.createElement(d,null),c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/",component:S}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.d6e8c78a.chunk.js.map