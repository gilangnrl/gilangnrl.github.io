(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,o){},21:function(e,t,o){e.exports=o(33)},33:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(17),l=o.n(r),c=o(12),i=o(5),s=o(6),d=o(8),u=o(7),m=o(9),p=o(36),h=o(35),f=(o(14),function(e){function t(){var e,o;Object(i.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).getStyle=function(){var e=o.props.todo.completed;return{padding:"10px",background:"#f4f4f4",color:e?"#b6b6b6":"#333",borderBottom:"1px #ccc solid",textDecoration:e?"line-through":"none"}},o.markComplete=function(e){console.log(o.props)},o}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,o=e.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)})," "," ",o,a.a.createElement("button",{className:"delBtn",onClick:this.props.delTodo.bind(this,t)},"Delete")))}}]),t}(n.Component)),b=function(e){function t(){var e,o;Object(i.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).markComplete=function(){console.log("hello")},o}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map(function(t,o){return a.a.createElement(f,{key:t.id,todo:t,markComplete:e.props.markComplete,delTodo:e.props.delTodo})})}}]),t}(n.Component),v=o(18),g=function(e){function t(){var e,o;Object(i.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={title:""},o.onChange=function(e){return o.setState(Object(v.a)({},e.target.name,e.target.value))},o.onSubmit=function(e){var t=o.state.title;e.preventDefault(),""===t?alert("Wajib di isi"):(o.props.addTodo(t),o.setState({title:""}))},o}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo...",value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"submit",className:"btn",style:{flex:"1",border:"none",boxShadow:"none"}}))}}]),t}(n.Component),y=o(34);var O={textAlign:"center",backgroundColor:"#333",color:"#fff",padding:"10px"},E={color:"#fff",textDecoration:"none"},j=function(){return a.a.createElement("header",{style:O},a.a.createElement("h1",null,"Todolist"),a.a.createElement(y.a,{style:E,to:"/"},"Home")," |",a.a.createElement(y.a,{style:E,to:"/About"}," About"))};var k=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"This is the TodoList app v1.0.0. Just learn how to use React"))},w=o(10),C=o.n(w),T=function(e){function t(){var e,o;Object(i.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).markComplete=function(e){console.log(e),o.setState({todos:o.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},o.delTodo=function(e){console.log("hello BOO"),o.setState({todos:Object(c.a)(o.state.todos.filter(function(t){return t.id!==e}))})},o.addTodo=function(e){var t={id:C.a.v4(),title:e,completed:!1};o.setState({todos:[].concat(Object(c.a)(o.state.todos),[t])})},o.state={todos:[{id:C.a.v4(),title:"Take Out the Trash",completed:!1},{id:C.a.v4(),title:"Take a Bath",completed:!1},{id:C.a.v4(),title:"Go to Indomaret",completed:!1}]},o}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(p.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(j,null),a.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return a.a.createElement(a.a.Fragment,null,a.a.createElement(g,{addTodo:e.addTodo}),a.a.createElement(b,{todos:e.state.todos,markComplete:e.markComplete,delTodo:e.delTodo}))}}),a.a.createElement(h.a,{path:"/About",component:k}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.9c8cda3a.chunk.js.map