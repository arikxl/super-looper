(this["webpackJsonparik-moveo"]=this["webpackJsonparik-moveo"]||[]).push([[0],{41:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(17),i=c.n(s),r=c(13),o=c(25),u=c(7),l=c(11),j={pads:[],tracksToPlay:[]};var d=Object(r.b)({padsModule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_PADS":return Object(l.a)(Object(l.a)({},e),{},{pads:t.pads});case"ADD_PLAYLIST":return Object(l.a)(Object(l.a)({},e),{},{tracksToPlay:[].concat(Object(u.a)(e.tracksToPlay),[t.pad])});default:return e}}}),b=Object(r.d)(d,Object(r.c)(Object(r.a)(o.a))),p=c(8),f=(c(41),c(6)),O=c(29),m=c.n(O),v=c(30),h=c.n(v),x=c(28),g=c.n(x),A=c(27),S=c.n(A),y=c(2),_=function(e){var t=e.volume,c=e.setVolume;return Object(y.jsxs)("div",{children:[Object(y.jsx)(S.a,{}),Object(y.jsx)("input",{type:"range",step:"0.1",value:t,className:"volume-input",min:"0",max:"1",onChange:function(e){return c(e.target.value)}}),Object(y.jsx)(g.a,{})]})},k=c(12),P=c.n(k),E=c(24),N=c.p+"static/media/Bass Warwick heavy funk groove on E 120 BPM.52c24c81.mp3",w=c.p+"static/media/GrooveB_120bpm_Tanggu.3e1411b4.mp3",B=c.p+"static/media/120_future_funk_beats_25.5eb417fc.mp3",D=c.p+"static/media/SilentStar_120_Em_OrganSynth.f2d668af.mp3",L=c.p+"static/media/PAS3GROOVE1.03B.f77c6da4.mp3",I=c.p+"static/media/FUD_120_StompySlosh.27bdc145.mp3",M=c.p+"static/media/MazePolitics_120_Perc.2d08c654.mp3",R=c.p+"static/media/electric guitar coutry slide 120bpm - B.230fcab8.mp3",T=c.p+"static/media/120_stutter_breakbeats_16.37c82282.mp3",C=function(){return[{name:"Funk Beats",sound:B,isActive:!1},{name:"Break Beats",sound:T,isActive:!1},{name:"Bass",sound:N,isActive:!1},{name:"Electric Guitar",sound:R,isActive:!1},{name:"Stompy Slosh",sound:I,isActive:!1},{name:"Groove B",sound:w,isActive:!1},{name:"Maze Politics",sound:M,isActive:!1},{name:"Groove",sound:L,isActive:!1},{name:"Silent Star",sound:D,isActive:!1}]},G=function(e){var t=e.pad,c=Object(n.useState)(!1),a=Object(f.a)(c,2),s=a[0],i=a[1],r=Object(n.useRef)(null),o=Object(p.b)(),u=function(){i(!s),t.isActive=!t.isActive,o(function(e){return function(){var t=Object(E.a)(P.a.mark((function t(c){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c({type:"ADD_PLAYLIST",pad:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))};return Object(y.jsx)("div",{className:"pad",children:Object(y.jsxs)("button",{className:"pad-btn ".concat(s&&"active"," "),onClick:function(){return u()},children:[t.name,Object(y.jsx)("audio",{src:t.sound,ref:r})]})})},z=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.padsModule})).pads;return Object(n.useEffect)((function(){return e(function(){var e=Object(E.a)(P.a.mark((function e(t){var c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=C(),t({type:"LOAD_PADS",pads:c});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(y.jsx)("div",{className:"pad-list-container",children:Object(y.jsx)("div",{className:"pad-list",children:t.map((function(e,t){return Object(y.jsx)(G,{pad:e},t)}))})})},F=function(){var e=Object(n.useState)(.5),t=Object(f.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),i=Object(f.a)(s,2),r=i[0],o=i[1],u=Object(n.useState)([]),l=Object(f.a)(u,2),j=l[0],d=l[1],b=Object(p.c)((function(e){return e.padsModule})).pads,O=[],v=null;Object(n.useEffect)((function(){if(r)return g(),v=setInterval((function(){console.log("LOOP"),x(),g()}),8e3),function(){clearInterval(v)}}),[j,r]),Object(n.useEffect)((function(){j.forEach((function(e){e.volume=c}))}),[c]);var x=function(){b.length&&(o(!0),b.forEach((function(e){e.isActive&&(O.push(new Audio(e.sound)),d(O))})))},g=function(){console.log("tracksToPlay:",j),j.forEach((function(e){e.play()}))};return console.log("RENDER"),Object(y.jsxs)("div",{className:"panel-container ".concat(r&&"is-playing"," "),children:[Object(y.jsx)("div",{className:"headline",children:Object(y.jsxs)("h1",{children:["SUPER",Object(y.jsx)("br",{}),Object(y.jsxs)("span",{children:["L",Object(y.jsx)("button",{onClick:function(){g(),x()},className:"headline-btn1 ".concat(r&&"white"),children:Object(y.jsx)(m.a,{sx:{fontSize:35}})}),Object(y.jsx)("button",{onClick:function(){return o(!1),j.forEach((function(e){e.pause()})),console.log("CLEAR"),function(){clearInterval(v)}},className:"headline-btn2 ".concat(r&&"white"),children:Object(y.jsx)(h.a,{sx:{fontSize:35}})}),"PER"]})]})}),r&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{className:"bg"}),Object(y.jsx)("div",{className:"bg bg2"}),Object(y.jsx)("div",{className:"bg bg3"})]}),Object(y.jsx)(z,{isPlaying:r,setIsPlaying:o,volume:c}),Object(y.jsx)(_,{volume:c,setVolume:a})]})};var V=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(F,{})})};i.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(p.a,{store:b,children:Object(y.jsx)(V,{})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.0e87187b.chunk.js.map