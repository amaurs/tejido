(this.webpackJsonptejido=this.webpackJsonptejido||[]).push([[0],[,,,,,,function(t,e,i){t.exports=i(14)},,,,,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var n=i(0),h=i.n(n),r=i(3),o=i.n(r),s=(i(11),i(1));var a=i(4),c=i(5);function u(t,e){return(t%e+e)%e}var d=function(){function t(e,i,n){Object(a.a)(this,t),this.height=i,this.width=e,this.board=[],this.seed=n||.5,this.init()}return Object(c.a)(t,[{key:"init",value:function(){this.board=[];for(var t=0;t<this.width*this.height;t++)this.board.push(0)}},{key:"randomize",value:function(){for(var t=0;t<this.width;t++)for(var e=0;e<this.height;e++)this.setXY(t,e,Math.random()<this.seed?1:0)}},{key:"getBoard",value:function(){return this.board}},{key:"getXY",value:function(t,e){return this.board[u(e,this.height)*this.width+u(t,this.width)]}},{key:"setXY",value:function(t,e,i){this.board[u(e,this.height)*this.width+u(t,this.width)]=i}},{key:"print",value:function(){for(var t=0;t<this.height;t++){for(var e="",i=0;i<this.width;i++)e+=this.getXY(i,t)?"+":"-";console.log(e)}console.log("")}},{key:"printContext",value:function(t,e,i){this.printContextOffset(t,e,0,0,i)}},{key:"printContextOffset",value:function(t,e,i,n,h,r){for(var o=0;o<this.height;o++)for(var s=0;s<this.width;s++)this.getXY(s,o)?t.fillStyle=h:t.fillStyle=r||"white",t.fillRect((i+s)*e,(n+o)*e,e,e)}},{key:"shiftDown",value:function(){for(var e=new t(this.width,this.height),i=this.height-1;i>0;i--)for(var n=0;n<this.width;n++)e.setXY(n,i,this.getXY(n,i-1));for(var h=0;h<this.width;h++)e.setXY(h,0,Math.random()<this.seed?1:0);return e}},{key:"shiftUp",value:function(){for(var e=new t(this.width,this.height,this.seed),i=0;i<this.height-1;i++)for(var n=0;n<this.width;n++)e.setXY(n,i,this.getXY(n,i+1));for(var h=0;h<this.width;h++)e.setXY(h,this.height-1,Math.random()<this.seed?1:0);return e}},{key:"shiftRight",value:function(){for(var e=new t(this.width,this.height,this.seed),i=0;i<this.height;i++)for(var n=this.width-1;n>0;n--)e.setXY(n,i,this.getXY(n-1,i));for(var h=0;h<this.height;h++)e.setXY(0,h,Math.random()<this.seed?1:0);return e}},{key:"multiply",value:function(e){console.assert(e.height===this.width,{errorMsg:"Matrix dimension do not match."});for(var i=new t(e.width,this.height),n=0;n<this.height;n++)for(var h=0;h<e.width;h++){for(var r=0,o=0;o<e.height;o++)r+=this.getXY(o,n)*e.getXY(h,o);i.setXY(h,n,r)}return i}},{key:"transpose",value:function(){for(var e=new t(this.height,this.width),i=0;i<this.height;i++)for(var n=0;n<this.width;n++)e.setXY(i,n,this.getXY(n,i));return e}}]),t}(),f=(i(12),function(t){var e=Object(n.useRef)(),i=Object(n.useState)(!1),r=Object(s.a)(i,2),o=(r[0],r[1],Object(n.useState)([480,480])),a=Object(s.a)(o,2),c=(a[0],a[1],Object(n.useState)([0,0])),u=Object(s.a)(c,2);u[0],u[1];Object(n.useEffect)((function(){var i,n=t.threadingSize,h=t.treadlingSize,r=new d(100-h,n,.1),o=new d(h,100-n,.1),s=new d(h,n,.5);r.randomize(),o.randomize(),s.randomize();var a=requestAnimationFrame((function t(){i=setTimeout((function(){var i=e.current,c=i.getContext("2d");c.clearRect(0,0,i.width,i.height),r=r.shiftRight();var u=(o=o.shiftUp()).multiply(s.transpose()).multiply(r);r.printContext(c,10,"black"),o.printContextOffset(c,10,100-h,n,"black"),s.printContextOffset(c,10,100-h,0,"green"),u.printContextOffset(c,10,0,n,"red","blue"),a=requestAnimationFrame(t)}),1e3/60)}));return function(){cancelAnimationFrame(a),clearTimeout(i),a=null}}),[t.threadingSize,t.treadlingSize]);var f={};return t.width>0&&t.height>0&&(f=t.width/t.height<1?{width:"100vw"}:{height:"100vh"}),h.a.createElement("canvas",{className:"Loom",ref:e,style:f,width:1e3,height:1e3})});i(13);var l=function(){var t=Object(n.useState)(9),e=Object(s.a)(t,2),i=e[0],r=e[1],o=Object(n.useState)(7),a=Object(s.a)(o,2),c=a[0],u=a[1];return Object(n.useEffect)((function(){var t=function(t){"ArrowUp"===t.key&&r(i+1),"ArrowDown"===t.key&&r(i-1),"ArrowRight"===t.key&&u(c+1),"ArrowLeft"===t.key&&u(c-1)};return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}),[i,c]),h.a.createElement("div",{className:"App"},h.a.createElement(f,{height:window.innerHeight,width:window.innerWidth,threadingSize:i,treadlingSize:c}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(h.a.createElement(h.a.StrictMode,null,h.a.createElement(l,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.1385ac91.chunk.js.map