(this.webpackJsonptransitions=this.webpackJsonptransitions||[]).push([[0],{20:function(e,t,a){e.exports=a(31)},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(10),r=a.n(l),c=a(11),o=a(6),u=function(e){var t=Object(n.useState)(0),a=Object(c.a)(t,2),l=a[0],r=a[1],u=Object(n.useState)(!1),s=Object(c.a)(u,2),m=s[0],d=s[1],p=Object(n.useState)(!1),E=Object(c.a)(p,2),v=E[0],f=E[1],b="";Object(n.useEffect)((function(){b?(d(!0),r(b.getBoundingClientRect().x),f(!v)):d(!1)}),[e.currRoute]);var g=function(e){e&&e.querySelector("a").classList.contains("active")&&(b=e)},x={transform:"translateX(".concat(l-20,"px)"),display:m?"block":"none",animationName:"expandActiveMarker"};return v&&(x.animationName="expandActiveMarker2"),i.a.createElement("div",{className:"navbar"},i.a.createElement(o.b,{exact:!0,to:"/"},i.a.createElement("h1",null,i.a.createElement("span",null,"Eduardo"),"Ara\xfajo")),i.a.createElement("ul",{className:"links"},i.a.createElement("li",{ref:function(e){return g(e)}},i.a.createElement(o.b,{to:"/about"},"About")),i.a.createElement("li",{ref:function(e){return g(e)}},i.a.createElement(o.b,{to:"/expectations"},"Expectations")),i.a.createElement("li",{ref:function(e){return g(e)}},i.a.createElement(o.b,{to:"/contact"},"Contact")),i.a.createElement("li",{ref:function(e){return g(e)}},i.a.createElement(o.b,{to:"/freelessons"},"Try free lesson")),i.a.createElement("div",{className:"active-marker",style:x})))},s=function(){return i.a.createElement("div",{className:"page-steps"},i.a.createElement("div",{className:"step step1"}),i.a.createElement("div",{className:"step step2"}),i.a.createElement("div",{className:"step step3"}),i.a.createElement("div",{className:"step step4"}),i.a.createElement("div",{className:"step step5"}))},m=function(){return i.a.createElement("div",null,i.a.createElement(s,null),i.a.createElement("div",{className:"page home"},i.a.createElement("div",{className:"page-content"},i.a.createElement("h1",null,"Home"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))))},d=function(){return i.a.createElement("div",null,i.a.createElement(s,null),i.a.createElement("div",{className:"page about"},i.a.createElement("div",{className:"page-content"},i.a.createElement("h1",null,"About"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))))},p=function(){return i.a.createElement("div",null,i.a.createElement(s,null),i.a.createElement("div",{className:"page expectations"},i.a.createElement("div",{className:"page-content"},i.a.createElement("h1",null,"Expectations"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))))},E=function(){return i.a.createElement("div",null,i.a.createElement(s,null),i.a.createElement("div",{className:"page contact"},i.a.createElement("div",{className:"page-content"},i.a.createElement("h1",null,"Contact"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))))},v=function(){return i.a.createElement("div",null,i.a.createElement(s,null),i.a.createElement("div",{className:"page freelessons"},i.a.createElement("div",{className:"page-content"},i.a.createElement("h1",null,"Free Lessons"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))))},f=a(8),b=a(34),g=a(33),x=(a(30),Object(f.f)((function(e){var t=e.location.pathname.replace("/","");return i.a.createElement("div",{className:"app"},i.a.createElement(u,{currRoute:t}),i.a.createElement(f.a,{render:function(e){var t=e.location;return i.a.createElement(b.a,null,i.a.createElement(g.a,{key:t.key,timeout:3e3,classNames:"fade"},i.a.createElement(f.c,{location:t},i.a.createElement(f.a,{exact:!0,path:"/"},i.a.createElement(m,null)),i.a.createElement(f.a,{exact:!0,path:"/about"},i.a.createElement(d,null)),i.a.createElement(f.a,{exact:!0,path:"/expectations"},i.a.createElement(p,null)),i.a.createElement(f.a,{exact:!0,path:"/contact"},i.a.createElement(E,null)),i.a.createElement(f.a,{exact:!0,path:"/freelessons"},i.a.createElement(v,null)))))}}))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(o.a,null,i.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.406f0bc4.chunk.js.map