(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,r){},13:function(e,t,r){},14:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),l=r(2),c=r.n(l),o=(r(12),r(3)),i=r(4),s=r(6),u=r(5),d=(r(13),function(e){Object(s.a)(r,e);var t=Object(u.a)(r);function r(e){var a;return Object(o.a)(this,r),(a=t.call(this,e)).createShine=function(e,t,r,a,n){return"@keyframes shine-"+e+" {0% {color: "+t+";text-shadow: none;}100% {color: "+n+";text-shadow: 0 0 0.6rem "+n+", 0 0 1.5rem "+a+",-0.2rem 0.1rem 1rem "+a+", 0.2rem 0.1rem 1rem "+a+",0 -0.5rem 2rem "+r+", 0 0.5rem 3rem "+r+";}}"},a.createBlick=function(e,t,r,a){return"@keyframes blink-"+e+" {0%,22%,36%,75% {color: "+a+";text-shadow: 0 0 0.6rem "+a+", 0 0 1.5rem "+r+",-0.2rem 0.1rem 1rem "+r+", 0.2rem 0.1rem 1rem "+r+",0 -0.5rem 2rem "+t+", 0 0.5rem 3rem "+t+";}28%,33% {color: "+r+";text-shadow: none;}82%,97% {color: "+t+";text-shadow: none;}}"},a.addFlickerStyles=function(e,t,r){var a=document.createElement("style");a.type="text/css",a.styleSheet?a.styleSheet.cssText=t+r+e:(a.appendChild(document.createTextNode(t)),a.appendChild(document.createTextNode(r)),a.appendChild(document.createTextNode(e))),document.querySelector("head").appendChild(a)},a.setStyles=function(){a.addFlickerStyles(a.createFlicker(1,2,10,1),a.createShine(1,"#6b1839","#ff2483","#ff65bd","#ffe6ff"),a.createBlick(1,"#ff2483","#ff65bd","#ffe6ff")),a.addFlickerStyles(a.createFlicker(2,2,10,1),a.createShine(2,"#aa0403","#ff0413","#ff459d","#ffefef"),a.createBlick(2,"#ff0413","#ff459d","#ffefef")),a.addFlickerStyles(a.createFlicker(3,2,10,1),a.createShine(3,"#186b39","#24ff83","#65ffbd","#e6ffff"),a.createBlick(3,"#24ff83","#65ffbd","#e6ffff")),a.addFlickerStyles(a.createFlicker(4,2,10,1),a.createShine(4,"#6b3918","#ff8324","#ffbd65","#ffe6ff"),a.createBlick(4,"#ff8324","#ffbd65","#ffe6ff"))},a.checkWin=function(e,t){for(var r=a.state.ttt,n=r[e][t],l=!0,c=0;c<3;c++)l&=r[e][c]===n;if(l)return!0;l=!0;for(var o=0;o<3;o++)l&=r[o][t]===n;if(l)return!0;if(e===t){l=!0;for(var i=0;i<3;i++)l&=r[i][i]===n;if(l)return!0}if(e+t===2){l=!0;for(var s=0;s<3;s++)l&=r[s][2-s]===n;if(l)return!0}return!1},a.declareWinner=function(e){var t=a.state.again;document.querySelector("#win").innerHTML=1===e?"Player 1":2===e?"Player 2":"No one (Meaning a 'Draw')",t||a.toggleMenu(),a.toggleModal()},a.resetTds=function(){document.querySelectorAll("td").forEach((function(e){e.classList.remove("alert_green","alert_red")}))},a.legalMoves=function(){var e=document.querySelectorAll("td:empty");e.forEach((function(e){e.classList.add("alert_green")})),(e=document.querySelectorAll("td:not(:empty)")).forEach((function(e){e.classList.add("alert_red")}))},a.cpuPlay=function(){var e=a.state,t=e.player2,r=e.clr2,n=e.plays,l=e.ttt,c=document.querySelectorAll("td:empty");if(0!==c.length){var o=c[Math.floor(Math.random()*c.length)];o.innerHTML=t,o.classList.add("flicker"+r);var i=o.parentNode.rowIndex,s=o.cellIndex;l[i][s]=t,a.checkWin(i,s)&&a.declareWinner(2),a.setState({turn:1,plays:n+2,ttt:l})}},a.tdClick=function(){return function(e){var t=a.state,r=t.turn,n=t.cpu,l=t.player1,c=t.player2,o=t.clr1,i=t.clr2,s=t.ttt,u=t.plays;if(""===e.target.innerHTML){a.resetTds(),e.target.innerHTML=1===r?l:c,e.target.classList.add("flicker"+(1===r?o:i));var d=e.target.parentNode.rowIndex,f=e.target.cellIndex;s[d][f]=1===r?l:c,a.checkWin(d,f)?(console.log("Congrates"),a.declareWinner(r)):(8===u&&a.declareWinner(-1),n?a.cpuPlay():a.setState({turn:1===r?2:1,plays:u+1,ttt:s}))}else a.legalMoves()}},a.createTable=function(){for(var e=[],t=0;t<3;t++){for(var r=[],l=0;l<3;l++)r.push(n.a.createElement("td",{key:t+"_"+l,onClick:a.tdClick()},"".concat(l+1)));e.push(n.a.createElement("tr",{key:t},r))}return e},a.toggleModal=function(){document.querySelector(".screen").classList.toggle("closed"),document.querySelector(".modal").classList.toggle("closed")},a.toggleStart=function(){return function(e){var t=document.querySelector("#Player1"),r=document.querySelector("#Player2"),n=document.querySelector("#color-select-1").value,l=document.querySelector("#color-select-2").value,c=document.querySelector("#vs-select").value;t.value===r.value&&""!==t.value||"O"===t.value&&""===r.value||"X"===r.value&&""===t.value||(a.toggleModal(),a.initilizeGame(t.value,r.value,n,l,!1,"cpu"===c))}},a.toggleMenu=function(){document.querySelector(".modal #start").classList.toggle("closed"),document.querySelector(".modal #fin").classList.toggle("closed")},a.createWinner=function(){var e=a.state,t=e.cpu,r=e.player1,l=e.player2,c=e.clr1,o=e.clr2,i=[];return i.push(n.a.createElement("h2",{key:"0"},"Winner is ",n.a.createElement("span",{id:"win"}))),i.push(n.a.createElement("button",{key:"1",onClick:function(){a.initilizeGame(r,l,c,o,!0,t),a.toggleModal()}},"Play Again")),i.push(n.a.createElement("button",{key:"2",onClick:function(){a.toggleMenu()}},"Reset")),n.a.createElement("div",{id:"fin",className:"closed"},i)},a.createOptions=function(){var e=[];return e.push(n.a.createElement("h2",{key:"0"},"Player1")),e.push(n.a.createElement("input",{id:"Player1",placeholder:"Default is 'X' symbol",key:"0_0",type:"text"})),e.push(n.a.createElement("select",{key:"0_0_0",name:"color",id:"color-select-1"},n.a.createElement("option",{className:"pink",value:"1"},"Pink"),n.a.createElement("option",{className:"red",value:"2"},"Red"))),e.push(n.a.createElement("h2",{key:"1"},"Player2")),e.push(n.a.createElement("input",{id:"Player2",placeholder:"Default is 'O' symbol",key:"1_1",type:"text"})),e.push(n.a.createElement("select",{key:"1_1_1",name:"color",id:"color-select-2"},n.a.createElement("option",{className:"green",value:"3"},"Green"),n.a.createElement("option",{className:"yellow",value:"4"},"Yellow"))),e.push(n.a.createElement("select",{key:"2_2_2",name:"vs",id:"vs-select"},n.a.createElement("option",{className:"human",value:"human"},"Human"),n.a.createElement("option",{className:"cpu",value:"cpu"},"CPU"))),e.push(n.a.createElement("button",{key:"2",onClick:a.toggleStart()},"Play")),n.a.createElement("div",{id:"start"},e)},a.initilizeGame=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,l=arguments.length>4&&void 0!==arguments[4]&&arguments[4],c=arguments.length>5&&void 0!==arguments[5]&&arguments[5],o=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],i=document.querySelectorAll("td");i.forEach((function(e){e.innerHTML="",e.classList.remove("flicker1","flicker2","flicker3","flicker4")})),""===e&&(e="X"),""===t&&(t="O"),a.setState({turn:1,goFirst:o,cpu:c,player1:e,player2:t,clr1:r,clr2:n,plays:0,again:l,ttt:[[0,0,0],[0,0,0],[0,0,0]]})},a.state={turn:1,goFirst:!0,cpu:!1,player1:"X",player2:"O",clr1:1,clr2:3,plays:0,again:!1,ttt:[[0,0,0],[0,0,0],[0,0,0]]},a}return Object(i.a)(r,[{key:"createFlicker",value:function(e,t,r,a){return".flicker"+e+"{animation: shine-"+e+" "+t+"s forwards, blink-"+e+" "+r+"s "+a+"s infinite;}"}},{key:"componentDidMount",value:function(){window.addEventListener("load",this.setStyles)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("load",this.setStyles)}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"sign"},"Tic Tac Toe"),n.a.createElement("div",{className:"screen "}),n.a.createElement("div",{className:"modal ",id:"modal"},this.createOptions(),this.createWinner())," ",n.a.createElement("table",null,n.a.createElement("tbody",null,this.createTable())))}}]),r}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,r){e.exports=r(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.b1448984.chunk.js.map