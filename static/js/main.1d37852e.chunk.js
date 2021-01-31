(this["webpackJsonpthe-hijackers-guide"]=this["webpackJsonpthe-hijackers-guide"]||[]).push([[0],{126:function(e,t,i){"use strict";i.r(t);var s=i(0),a=i(1),n=i(59),c=i.n(n),o=(i(70),i.p,i(71),i(2)),r=i(64),l=i(8),d=i(3),h=i(23),j=i.n(h),u=i(60),m=i(61);var b=function(e){var t={"01":"#9F55DD","02":"#1EDA96","03":"#FFAF14","04":"#3BB8FF"},i=80,n=Object(a.useState)(!1),c=Object(d.a)(n,2),o=c[0],r=c[1],l=Object(a.useRef)(null),h=function(){r(!1)};function b(e){var t=function(e,t){return("000"+e).slice(-1*t)},i=parseFloat(e).toFixed(3),s=Math.floor(i/60)%60,a=Math.floor(i-60*s);return t(s,2)+":"+t(a,2)}return Object(a.useEffect)((function(){return window.addEventListener("mouseup",h),function(){window.removeEventListener("mouseup",h)}}),[]),Object(s.jsxs)("div",{className:"controller-container",style:{height:e.height,width:e.width},children:[Object(s.jsxs)("div",{className:"slider-container",onMouseDown:function(t){t.preventDefault(),e.setMoving(!0),e.handleClick(t)},children:[Object(s.jsx)("div",{className:"slider-padding"}),Object(s.jsx)("div",{className:"slider-background",style:{backgroundColor:"rgb(90, 90, 90)"},children:Object(s.jsx)("div",{className:"controller-slider",style:{width:e.width*e.currentTime/e.duration,backgroundColor:t[e.sectionId]},children:Object(s.jsx)("div",{className:"controller-handler",onMouseDown:function(t){t.preventDefault(),e.setMoving(!0)},style:{left:e.width*e.currentTime/e.duration-4,backgroundColor:t[e.sectionId]}})})})]}),Object(s.jsxs)("button",{className:"controller-button",onClick:e.playVideos,style:{marginLeft:"1.5em",marginTop:0},children:[e.isPlaying&&Object(s.jsx)(j.a,{options:{loop:!1,autoplay:!1,animationData:u,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}},height:24,width:24,isStopped:!e.isPlaying}),!e.isPlaying&&Object(s.jsx)(j.a,{options:{loop:!1,autoplay:!1,animationData:m,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}},height:24,width:24,isStopped:e.isPlaying})]}),Object(s.jsxs)("div",{className:"volume-container",onMouseMove:function(t){if(o){var s=l.current.getBoundingClientRect().left,a=t.pageX-s;a<=i&&a>=0?e.setVolume(a/i):a<0?e.setVolume(0):a>i&&e.setVolume(1)}},children:[Object(s.jsx)("button",{className:"controller-button",onClick:function(t){t.preventDefault(),e.volume>0?e.setVolume(0):e.setVolume(1)},children:Object(s.jsx)("img",{alt:"volume",src:"/the-hijackers-guide/assets/volume_button.svg"})}),Object(s.jsx)("div",{className:"volume-slider-container",onMouseDown:function(t){t.preventDefault(),r(!0),function(t){var s=l.current.getBoundingClientRect().left,a=t.pageX-s;a<=i&&a>=0?e.setVolume(a/i):a<0?e.setVolume(0):a>i&&e.setVolume(1)}(t)},children:Object(s.jsx)("div",{className:"volume-slider-background",ref:l,style:{backgroundColor:t[e.sectionId]},children:Object(s.jsx)("div",{className:"volume-slider",style:{width:e.volume*i},children:Object(s.jsx)("div",{className:"volume-handler",style:{left:e.volume*i-6}})})})})]}),Object(s.jsx)("div",{className:"time-container",children:b(e.currentTime)+" / "+b(e.duration)})]})};var p=function(e){return Object(s.jsxs)("div",{className:"column card-column",style:{borderRight:"1px var(--grey) solid"},children:[Object(s.jsx)("h5",{style:{whiteSpace:"pre-wrap"},children:e.title}),e.date,Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"card-label",style:{backgroundColor:e.color},children:"USERS"})," ",Object(s.jsx)("br",{}),e.users," ",Object(s.jsx)("br",{}),Object(s.jsx)("div",{className:"card-label",style:{backgroundColor:e.color},children:"OBJECTIVE"})," ",Object(s.jsx)("br",{}),e.aim]})};var x=function(e){return Object(s.jsxs)("div",{className:"card data-card",children:[Object(s.jsx)("h4",{className:"card-header",children:e.hashtagName}),Object(s.jsxs)("div",{className:"column-container",style:{borderBottom:"1px var(--grey) solid"},children:[Object(s.jsx)(p,{color:e.color,title:"ORIGINAL HASHTAG",date:e.originalDate,users:e.originalUsers,aim:e.originalAim}),Object(s.jsx)(p,{color:e.color,title:"HASHTAG\nHIJACK",date:e.hijackDate,users:e.hijackUsers,aim:e.hijackAim})]}),Object(s.jsxs)("div",{className:"card-info",children:[Object(s.jsxs)("div",{className:"card-info-column",children:[Object(s.jsx)("div",{className:"card-info-label-container",children:Object(s.jsx)("div",{className:"card-info-label",children:"N. of posts"})}),Object(s.jsx)("p",{style:{color:e.color},children:e.postCount})]}),Object(s.jsxs)("div",{className:"card-info-column",children:[Object(s.jsx)("div",{className:"card-info-label-container",children:Object(s.jsx)("div",{className:"card-info-label",children:"platforms"})}),Object(s.jsx)("p",{style:{color:e.color},children:e.platforms})]}),Object(s.jsxs)("div",{className:"card-info-column",children:[Object(s.jsx)("div",{className:"card-info-label-container",children:Object(s.jsx)("div",{className:"card-info-label",children:"time range"})}),Object(s.jsx)("p",{style:{color:e.color},children:e.timeRange})]}),Object(s.jsxs)("div",{className:"card-info-column",style:{borderRightWidth:0},children:[Object(s.jsx)("div",{className:"card-info-label-container",children:Object(s.jsx)("div",{className:"card-info-label",children:"tactic"})}),Object(s.jsx)("p",{style:{color:e.color},children:e.tactic})]})]})]})};var g=function(e,t,i){this.type=e,this.index=t,this.src=i};var f=function(e){return Object(s.jsx)("img",{alt:"post",src:e.src})};i.p,i.p;var v=function(e){var t=Object(a.useState)([]),i=Object(d.a)(t,2),n=i[0],c=i[1],o=Object(a.useState)(0),r=Object(d.a)(o,2),l=r[0],h=r[1],j=Object(a.useState)({state:!1,direction:0}),u=Object(d.a)(j,2),m=u[0],b=u[1],p={"01":40,"02":40,"03":40,"04":40};return Object(a.useEffect)((function(){!function(e){for(var t=[],i=0;i<50;i++){var s=new g(i>p[e]?"original":"hijacked",i,"/assets/section"+e+"/carousel/"+(i+1)+".jpg");t.push(s)}var a=function(e){var t,i=e.length,s=0;for(;i--;)s=Math.floor(Math.random()*(i+1)),t=e[i],e[i]=e[s],e[s]=t;return e}(t);c(a),console.log(a)}(e.sectionId)}),[]),Object(s.jsxs)("div",{className:"carousel-container",children:[n.length>1&&Object(s.jsxs)("div",{className:"carousel-images-container",style:m.state?{transform:"translateX("+.44*e.width*m.direction+"px)",transition:"transform 0.15s"}:{transform:"translateX(0)",transition:"none"},onTransitionEnd:function(){m.direction>0?h(l>0?l-1:n.length-1):m.direction<0&&(l<n.length-1?h(l+1):h(0)),b({state:!1,direction:0})},children:[Object(s.jsx)("div",{className:"image-wrapper",style:{width:.4*e.width,height:.7*e.height},children:Object(s.jsx)(f,{src:l>1?"/the-hijackers-guide"+n[l-2].src:"/the-hijackers-guide"+n[n.length-(2-l)].src,maxHeight:.7*e.height})}),Object(s.jsx)("div",{className:"image-wrapper",style:{width:.4*e.width,height:.7*e.height},children:Object(s.jsx)(f,{src:l>0?"/the-hijackers-guide"+n[l-1].src:"/the-hijackers-guide"+n[n.length-1].src,maxHeight:.7*e.height})}),Object(s.jsx)("div",{className:"image-wrapper",style:{width:.4*e.width,height:.9*e.height},children:Object(s.jsx)(f,{src:"/the-hijackers-guide"+n[l].src,maxHeight:.9*e.height})}),Object(s.jsx)("div",{className:"image-wrapper",style:{width:.4*e.width,height:.7*e.height},children:Object(s.jsx)(f,{src:l<n.length-1?"/the-hijackers-guide"+n[l+1].src:"/the-hijackers-guide"+n[0].src,maxHeight:.7*e.height})}),Object(s.jsx)("div",{className:"image-wrapper",style:{width:.4*e.width,height:.7*e.height},children:Object(s.jsx)(f,{src:l<n.length-2?"/the-hijackers-guide"+n[l+2].src:"/the-hijackers-guide"+n[l-(n.length-2)+0].src,maxHeight:.7*e.height})})]}),Object(s.jsx)("button",{className:"carousel-arrow left-arrow",onClick:function(e){e.preventDefault(),console.log(l),b({state:!0,direction:1})}}),Object(s.jsx)("button",{className:"carousel-arrow right-arrow",onClick:function(e){e.preventDefault(),console.log(l),b({state:!0,direction:-1})}})]})},O=i(62);var k=function(e){window.innerWidth;var t=window.innerHeight,i={"01":210.5,"02":0,"03":0,"04":0},n={"01":{title:"#WHITELIVESMATTER",originalDate:"2020-06-02",hijackDate:"2020-06-03",originalUsers:"White supremacists",hijackUsers:"K-pop stans",originalAim:"Support white supremacy",hijackAim:"Support BLM movement",postCount:"> 94.200",platforms:"Twitter",timeRange:"1 day",tactic:"Flooding"},"02":{title:"#ProudBoys",originalDate:"2020-10-01",hijackDate:"2020-10-02",originalUsers:"Donald Trump supporters",hijackUsers:"LGBTQ+ community",originalAim:"Support the Proud Boys political group",hijackAim:"Support LGBTQ+ Community",postCount:"Unknown",platforms:"Twitter Instagram TikTok",timeRange:"1 day",tactic:"Flipping"},"03":{title:"#WHITELIVESMATTER",originalDate:"2020-06-02",hijackDate:"2020-06-03",originalUsers:"White supremacists",hijackUsers:"K-pop stans",originalAim:"Support white supremacy",hijackAim:"Support BLM movement",postCount:"> 94.200",platforms:"Twitter",timeRange:"1 day",tactic:"Flooding"},"04":{title:"#WHITELIVESMATTER",originalDate:"2020-06-02",hijackDate:"2020-06-03",originalUsers:"White supremacists",hijackUsers:"K-pop stans",originalAim:"Support white supremacy",hijackAim:"Support BLM movement",postCount:"> 94.200",platforms:"Twitter",timeRange:"1 day",tactic:"Flooding"}},c=(t-56)/9*16,o=t-56,r=-1,l=20,h=Object(a.useState)(!0),u=Object(d.a)(h,2),m=u[0],p=u[1],g=Object(a.useState)({x:c/3*2-l,y:o/3*2-l}),f=Object(d.a)(g,2),k=f[0],y=f[1],w=Object(a.useState)(!1),N=Object(d.a)(w,2),I=N[0],T=N[1],A=Object(a.useState)(!1),E=Object(d.a)(A,2),S=E[0],B=E[1],D=Object(a.useState)(!1),C=Object(d.a)(D,2),R=C[0],M=C[1],V=Object(a.useState)(!0),F=Object(d.a)(V,2),W=F[0],G=F[1],L=Object(a.useState)(0),H=Object(d.a)(L,2),P=H[0],z=H[1],U=Object(a.useState)(0),K=Object(d.a)(U,2),J=K[0],X=K[1],Y=Object(a.useState)(1),q=Object(d.a)(Y,2),_=q[0],Q=q[1],Z=Object(a.useRef)(null),$=Object(a.useRef)(null),ee=Object(a.useRef)(null),te=Object(a.useRef)(null),ie=Object(a.useRef)(null),se=Object(a.useRef)(null),ae=[Z.current,$.current,ee.current,te.current,ie.current,se.current],ne=Object(a.useRef)(!1),ce=Object(a.useRef)(0);function oe(e,t){m||(e.target.style.backgroundColor=t)}var re=function(){if(W&&G(!1),R){for(var e=0;e<ae.length;e++)null!==ae[e]&&ae[e].pause();M(!1)}else{for(var t=0;t<ae.length;t++)null!==ae[t]&&ae[t].play();M(!0)}},le=function(e){console.log(e),z(e),ce.current=e;for(var t=0;t<ae.length;t++)null!==ae[t]&&(ae[t].currentTime=ce.current)},de=function(){console.log("should ungrab"),T(!1),B(!1)};return Object(a.useEffect)((function(){return window.addEventListener("mouseup",de),function(){window.removeEventListener("mouseup",de)}}),[]),Object(s.jsx)("div",{className:"flex-wrapper",onMouseMove:function(e){return function(e){if(I){-1===r&&(r=document.getElementById("grid").getBoundingClientRect().left);var t={x:e.pageX-r-l,y:e.pageY-l};y({x:t.x,y:t.y})}else if(S){-1===r&&(r=document.getElementById("grid").getBoundingClientRect().left);var i=e.pageX-r;i<=c&&i>=0?le(i*J/c):i<0?le(0):i>c&&le(J)}}(e)},children:Object(s.jsxs)("div",{className:"flex-wrapper fadeIn",style:{backgroundColor:e.color,flexDirection:"column"},children:[Object(s.jsxs)("div",{className:"grid",id:"grid",style:{width:c,height:o,borderWidth:0},children:[Object(s.jsxs)("div",{className:"grid-container",style:{height:k.y+l},children:[Object(s.jsxs)("div",{className:"grid-unit",style:{width:k.x+l,borderTopWidth:0,borderLeftWidth:0},children:[Object(s.jsx)("video",{style:{minWidth:c/3*2},ref:Z,onTimeUpdate:function(t){return P!==(s=t).target.currentTime&&!1===ne.current&&z(s.target.currentTime),P>=i[e.sectionId]&&m&&p(!1),void(Z.current.volume!==_&&(Z.current.volume=_));var s},onDurationChange:function(e){return X((t=e).target.duration),void console.log(t.target.duration);var t},onEnded:function(){M(!1)},children:Object(s.jsx)("source",{src:"/the-hijackers-guide/assets/section"+e.sectionId+"/Video"+e.sectionId+"-Box1.mp4"})}),W&&Object(s.jsx)("div",{className:"play-button-large-container",onClick:function(){re()},children:Object(s.jsx)("div",{className:"play-button-large",children:Object(s.jsx)("img",{alt:"play",src:"/the-hijackers-guide/assets/play_button.svg"})})})]}),Object(s.jsxs)("div",{className:"double-container vertical",style:{width:c-(k.x+l),borderTopWidth:0},children:[Object(s.jsx)("div",{className:"grid-unit half",style:{borderTopWidth:0,borderRightWidth:0},children:Object(s.jsx)("video",{ref:$,currentTime:P,children:Object(s.jsx)("source",{src:"/the-hijackers-guide/assets/section"+e.sectionId+"/Video"+e.sectionId+"-Box2.mp4"})})}),Object(s.jsx)("div",{className:"grid-unit half",style:{borderRightWidth:0},children:P<=i[e.sectionId]-10&&Object(s.jsx)("video",{ref:ee,children:Object(s.jsx)("source",{src:"/the-hijackers-guide/assets/section"+e.sectionId+"/Video"+e.sectionId+"-Box3.mp4"})})})]})]}),Object(s.jsxs)("div",{className:"grid-container",style:{height:o-(k.y+l),borderBottom:0},children:[Object(s.jsxs)("div",{className:"double-container horizontal",style:{width:k.x+l},children:[Object(s.jsxs)("div",{className:"grid-unit half",style:{borderBottomWidth:0,borderLeftWidth:0},children:[P<=i[e.sectionId]-10&&Object(s.jsx)("video",{ref:te,children:Object(s.jsx)("source",{src:"/the-hijackers-guide/assets/section"+e.sectionId+"/Video"+e.sectionId+"-Box4.mp4"})}),Object(s.jsx)("div",{className:"content-container bottom-left",style:{width:c/3,height:o/3*2},children:Object(s.jsx)(x,{color:e.color,hashtagName:n[e.sectionId].title,originalDate:n[e.sectionId].originalDate,hijackDate:n[e.sectionId].hijackDate,originalUsers:n[e.sectionId].originalUsers,hijackUsers:n[e.sectionId].hijackUsers,originalAim:n[e.sectionId].originalAim,hijackAim:n[e.sectionId].hijackAim,postCount:n[e.sectionId].postCount,platforms:n[e.sectionId].platforms,timeRange:n[e.sectionId].timeRange,tactic:n[e.sectionId].tactic})})]}),Object(s.jsx)("div",{className:"grid-unit half",style:{borderBottomWidth:0},children:P<=i[e.sectionId]-10&&Object(s.jsx)("video",{ref:ie,children:Object(s.jsx)("source",{src:"/the-hijackers-guide/assets/section"+e.sectionId+"/Video"+e.sectionId+"-Box5.mp4"})})})]}),Object(s.jsxs)("div",{className:"grid-unit",style:{width:c-(k.x+l),borderBottomWidth:0,borderRightWidth:0},children:[P<=i[e.sectionId]-10&&Object(s.jsx)("video",{ref:se,children:Object(s.jsx)("source",{src:"/the-hijackers-guide/assets/section"+e.sectionId+"/Video"+e.sectionId+"-Box6.mp4"})}),Object(s.jsxs)("div",{className:"content-container bottom-right",style:{width:c/3*2,height:o/3*2},children:[" ",Object(s.jsx)(v,{sectionId:e.sectionId,width:c/3*2,height:o/3*2})]})]})]}),Object(s.jsx)("div",{className:"handler",style:{left:k.x,top:k.y},onMouseDown:function(e){e.preventDefault(),m||T(!I)},onMouseEnter:function(t){return oe(t,e.color)},onMouseOut:function(e){return oe(e,"GhostWhite")},children:Object(s.jsx)("div",{style:{position:"absolute",left:-18,top:-18,opacity:.6,pointerEvents:"none"},children:Object(s.jsx)(j.a,{options:{loop:!1,autoplay:!1,animationData:O,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}},height:72,width:72,isStopped:m})})})]}),Object(s.jsx)(b,{sectionId:e.sectionId,width:c,height:56,duration:J,currentTime:P,playVideos:re,handleClick:function(e){-1===r&&(r=document.getElementById("grid").getBoundingClientRect().left);var t=e.pageX-r;t<=c&&t>=0?le(t*J/c):t<0?le(0):t>c&&le(J)},setMoving:B,setVolume:Q,volume:_,isPlaying:R})]})})};var y=function(e){var t=Object(o.f)(),i={"01":"#9F55DD","02":"#1EDA96","03":"#FFAF14","04":"#3BB8FF",black:"#1C0F13"};return Object(s.jsxs)("div",{className:"guidelines-section",style:Object(r.a)({backgroundColor:i[e.sectionId]},t.pathname==="/the-hijackers-guide/guidelines/guideline-"+e.sectionId?{width:"100%"}:{}),children:[t.pathname!=="/the-hijackers-guide/guidelines/guideline-"+e.sectionId?Object(s.jsx)(l.b,{to:"/the-hijackers-guide/guidelines/guideline-"+e.sectionId,children:Object(s.jsx)("div",{className:"preview-video-container",children:"/the-hijackers-guide/guidelines"===t.pathname&&Object(s.jsxs)("div",{children:[Object(s.jsx)("video",{loop:!0,className:"preview-video",onMouseOver:function(e){return e.target.play()},onMouseOut:function(e){return e.target.pause()},children:Object(s.jsx)("source",{src:"/the-hijackers-guide/assets/preview-"+e.sectionId+".mp4"})}),Object(s.jsx)("div",{className:"duotone duotone-dark",style:{backgroundColor:{"01":"#a05ebf","02":"#16a873","03":"#c2840e","04":"#3BB8FF"}[e.sectionId]}}),Object(s.jsx)("div",{className:"duotone duotone-light",style:{backgroundColor:i[e.sectionId]}})]})})}):Object(s.jsx)(k,{color:i[e.sectionId],sectionId:e.sectionId}),t.pathname!=="/the-hijackers-guide/guidelines/guideline-"+e.sectionId&&Object(s.jsx)("div",{className:"sectionTitle-container",children:Object(s.jsx)("h2",{className:"sectionTitle-title",style:"/the-hijackers-guide/guidelines"!==t.pathname?{textOrientation:"mixed",writingMode:"vertical-lr",fontSize:"1vw",transform:"rotate(180deg)"}:{undefined:void 0},children:{"01":"Efficient hashtag","02":"Proper social media","03":"Perfect moment","04":"Effective tactic"}[e.sectionId]})})]})};var w=function(){var e=Object(o.f)();return Object(s.jsxs)("div",{className:"flex-wrapper",style:{paddingLeft:0,paddingRight:0},children:[Object(s.jsx)(y,{sectionId:"01"}),Object(s.jsx)(y,{sectionId:"02"}),Object(s.jsx)(y,{sectionId:"03"}),Object(s.jsx)(y,{sectionId:"04"}),"/the-hijackers-guide/guidelines"===e.pathname&&Object(s.jsxs)("h1",{children:[" ","The Hijacker's Guide ",Object(s.jsx)("br",{})," to Digital Activism"," "]})]})};var N=function(){return Object(s.jsx)("div",{className:"onboarding-wrapper",children:Object(s.jsxs)("h3",{children:["Hashtag hijacking typically refers to a situation in which a hashtag becomes commandeered by others in the community and is then instead used to mock, satirize or negatively critique the original hashtag sponsor Nowadays, it is a powerful tool of digital activism and it represents a new way of standing up for certain causes exploiting the power of collective actions. A single hashtag hijacked event can involve thousands of people and each contribution is essential to drown out the feed.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)(l.b,{to:"/the-hijackers-guide/guidelines",children:"Begin the experience"})," ","to get a complete view of the phenomenon and how to take part in it."]})})};var I=function(e){var t=Object(a.useState)(0),i=Object(d.a)(t,2),n=i[0],c=i[1];return Object(s.jsxs)("div",{style:{display:"inline-flex",position:"relative",justifyContent:"center",alignItems:"center"},onMouseEnter:function(){c(1)},onMouseOut:function(){c(0)},children:[Object(s.jsx)("u",{children:e.text}),Object(s.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",width:(e.width||22)+"em",height:9*(e.width||22)/16+"em",backgroundColor:"rgb(120, 120, 120)",pointerEvents:"none",transform:"scale("+n+")",opacity:n,transition:"opacity 0.2s, transform 0.3s",borderRadius:"0.3em",zIndex:2}}),Object(s.jsx)("u",{style:{color:"white",position:"absolute",opacity:n,transition:"opacity 0.2s",zIndex:2},children:e.text})]})};var T=function(e){return Object(s.jsx)("li",{style:{color:"white"},className:"anchors",children:Object(s.jsx)("a",{href:"#".concat(e.name),onClick:function(t){t.preventDefault(),e.target.current.scrollIntoView({behavior:"smooth",block:"start"})},ariaLabel:"Scroll to ".concat(e.name),children:Object(s.jsx)("div",{className:"anchors-button",children:e.name})})})};var A=function(e){var t=e.targets.map((function(e){return Object(s.jsx)(T,{target:e.target,name:e.key},e.key)}));return Object(s.jsx)("section",{className:"anchors-container",children:Object(s.jsx)("ul",{className:"anchors-list",children:t})})};var E=function(){var e=Object(a.useState)(0),t=Object(d.a)(e,2),i=t[0],n=t[1],c=[{key:"topic",target:Object(a.useRef)(null)},{key:"research",target:Object(a.useRef)(null)},{key:"project",target:Object(a.useRef)(null)},{key:"dataset",target:Object(a.useRef)(null)},{key:"authors",target:Object(a.useRef)(null)}];return Object(s.jsxs)("div",{children:[Object(s.jsx)(A,{targets:c}),Object(s.jsxs)("div",{className:"about-container",children:[Object(s.jsx)("div",{className:"about-header-container",children:Object(s.jsx)("div",{className:"about-header",children:Object(s.jsx)("h1",{children:" About "})})}),Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsxs)("h3",{children:[Object(s.jsx)("div",{id:"topic",ref:c[0].target,style:{position:"absolute",top:"-5em"}}),"In a context characterized by constraints and limitations to people's mobility, protests are also moving to the digital environment. Over the course of the year, more and more users have realized that the power exercised online can translate into real change and that, if used correctly, social media can become powerful tools for making one's voice heard."]}),Object(s.jsxs)("div",{className:"column-container",children:[Object(s.jsxs)("div",{className:"column",children:[Object(s.jsx)("p",{children:"A hashtag is a powerful tool to increase audience engagement. It creates a conversation about a topic labelling posts. Through hashtags, users join virtual debates and when the political, social, or cultural stance of a group of users is not shared by others, a hashtag hijack can occur. It is a collective action which involves thousands of people, organized into communities, who produce a clashing of texts, images, videos from different audiences. The result is a disorientation and virtual encroachment of space."}),Object(s.jsx)("p",{children:"This phenomenon is increasingly engaging a generation of experts in online mobilization, with organizational skills and a deep understanding of social media. Among these communities, the most powerful is the fan-base of K-Pop with millions of fans around the world. Members of this community, who decided to start or take part in a hijack, post contents related to their favorite K-Pop star: memes, images, quotes, music video frames, selfie, but mostly fan-cams (video that focuses on a person performing)."})]}),Object(s.jsx)("div",{className:"column",children:Object(s.jsxs)("p",{children:[Object(s.jsxs)("video",{style:{width:"100%",marginTop:"0.5em",marginBottom:"1em"},muted:!0,autoPlay:!0,loop:!0,children:[Object(s.jsx)("source",{src:"/the-hijackers-guide/assets/about/disclosure_intro.mp4"})," "]}),"The K-pop fandoms hijacked many hashtags: ",Object(s.jsx)("br",{}),Object(s.jsx)(I,{text:"#StandWithTuckerCarlson"}),","," ",Object(s.jsx)(I,{text:"#ExposeAntifa"}),",",Object(s.jsx)(I,{text:"#WhiteOutWednesday"}),","," ",Object(s.jsx)(I,{text:"#CalminKirkland"}),",",Object(s.jsx)(I,{text:"#WhiteLivesMatter"}),","," ",Object(s.jsx)(I,{text:"#AllLivesMatter"}),","," ",Object(s.jsx)(I,{text:"#Pro-Trump"}),", ",Object(s.jsx)(I,{text:"#MAGA"})," ","and many others."]})})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{className:"column-container",children:[Object(s.jsxs)("div",{className:"column",children:[Object(s.jsxs)("h3",{style:{padding:0},children:[Object(s.jsx)("div",{id:"research",ref:c[1].target,style:{position:"absolute",top:"-4em"}}),"The starting point of this website is the project"," ",Object(s.jsx)("a",{href:"https://doksavpc.github.io/dd16-phase2-group02/",onMouseEnter:function(){n(1)},onMouseOut:function(){n(0)},children:"Stan Wars: the rise of a new army"}),", which contains the results of our multi-channel research about hashtag hijacking and stan culture."," "]}),Object(s.jsx)("p",{children:"The goal was to analyze the phenomenon of stan groups\u2019 online activism in its complexity, trying to provide different points of view about it. The analysis of K-Pop stans\u2019 role in the latest hashtag hijacking has shown that:"})]}),Object(s.jsx)("div",{className:"column",children:Object(s.jsx)("p",{children:Object(s.jsxs)("div",{style:{position:"relative",backgroundColor:"black",height:"auto",marginTop:"2em"},children:[Object(s.jsx)("video",{style:{width:"100%",opacity:.7},muted:!0,autoPlay:!0,loop:!0,children:Object(s.jsx)("source",{src:"/the-hijackers-guide/assets/about/cover-phase2.mp4"})}),Object(s.jsxs)("div",{className:"phase2-title",style:{opacity:i},children:[Object(s.jsx)("h3",{children:"STAN WARS: THE RISE OF A NEW ARMY"}),Object(s.jsxs)("h4",{children:["AN ANALYSIS OF K-POP STANS\u2019 ROLE ",Object(s.jsx)("br",{})," IN THE LATEST HASHTAG HIJACKINGS"]})]})]})})})]}),Object(s.jsxs)("div",{className:"flex-list",children:[Object(s.jsxs)("p",{className:"flex-paragraph",children:[Object(s.jsx)("div",{className:"number",children:"1"}),Object(s.jsx)(I,{text:"Collective actions occur very quickly and with a short duration, and its success is correlated to the efficiency of the hashtags used to share it."})]}),Object(s.jsxs)("p",{className:"flex-paragraph",children:[Object(s.jsx)("div",{className:"number",children:"2"}),Object(s.jsx)(I,{text:"The number of hijacked posts can be greater than the number of posts related to the original meaning of the hashtag."})]}),Object(s.jsxs)("p",{className:"flex-paragraph",children:[Object(s.jsx)("div",{className:"number",children:"3"}),Object(s.jsx)(I,{text:"Users who usually take part in the hijacks shorten their distances by creating hidden networks based on their shared interests and common topics."})]}),Object(s.jsxs)("p",{className:"flex-paragraph",children:[Object(s.jsx)("div",{className:"number",children:"4"}),Object(s.jsx)(I,{text:"Newspapers paint the hijackers in many different ways, which can depend on the type of website covering the events."})]})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)("p",{style:{position:"relative",padding:"2rem 3.5em"},children:[Object(s.jsx)("div",{id:"concept",ref:c[2].target,style:{position:"absolute",top:"-4em"}}),'Hijacking is not a very recent tool, but rather has been used for years, few people know exactly what a hashtag hijack is and especially how and in what situations to do it. Even though in the past few months there has been a lot of talk about hashtag hijacking, this phenomenon has rarely been explained in its totality. This resulted in many articles, videos, blogs etc.. that focused on the "what" instead of the "how".']}),Object(s.jsx)("h3",{style:{padding:"0 1rem",marginTop:0},children:"But how can a user, who is interested in the topic, who wants to participate in an online action, or who wants to make their voice heard, take advantage of this tool? What are the basics that you need to understand such a complex phenomenon, and therefore to have a greater awareness of the events and consequences that this has led?"}),Object(s.jsx)("p",{style:{paddingLeft:"3.5em",paddingRight:"3.5em",paddingTop:"2rem"},children:"In this gap of knowledge is the project, that aims to highlight all aspects that compose a hijack by explicating and showing them through the use of real cases. It dissects and shows all the parts that constitute a hijack, explaining them by giving examples of real cases."}),Object(s.jsxs)("div",{className:"column-container",children:[Object(s.jsxs)("div",{className:"column",children:[Object(s.jsx)("p",{children:"During the experience, the user moves among the 4 sections that represent the key features of a takeover. The site, therefore, becomes a manifesto, a guide of what is this form of activism."}),Object(s.jsxs)("p",{children:["In each section, the user is informed, through a video, of a particular guideline both with a more theoretical explanation, almost didactic, and through examples of events in which that particular feature is exploited. The use of case studies also allows bringing the user back to reality by showing what are the physical and material effects of a phenomenon purely digital. The content of the site is open and non-sequential, the user can move freely within the various sections without a predefined path."," "]})]}),Object(s.jsxs)("div",{className:"column",children:[Object(s.jsxs)("p",{style:{display:"flex"},children:[Object(s.jsx)("div",{style:{width:"28em",height:"5.4em",backgroundColor:"grey",marginRight:"1rem"}}),"The visual choice of dividing the screen with a grid allows to exploit various media to narrate the events."]}),Object(s.jsx)("p",{style:{paddingTop:"1rem"},children:"The user is guided in the narration through the video and the narrator's voice but can also actively open and close the windows that compose the page giving importance to one typology of information rather than another. This multiplicity allows for a more complete experience that uses various communication canals: visual, textual, auditory, as well as hijack itself does. The experience aims to be as horizontal as possible due to the very nature of the subject covered."})]})]}),Object(s.jsx)("hr",{}),Object(s.jsx)("div",{className:"column-container",children:Object(s.jsx)("div",{className:"column",children:Object(s.jsxs)("h3",{style:{padding:0},children:[Object(s.jsx)("div",{id:"dataset",ref:c[3].target,style:{position:"absolute",top:"-4em"}}),"You can"," ",Object(s.jsx)("a",{href:"https://doksavpc.github.io/dd16-phase2-group02/",children:Object(s.jsx)(I,{text:"download our dataset",width:18})}),", which collects the most famous hashtag hijackings on media from 2010 to 2020."," "]})})}),Object(s.jsx)("p",{children:Object(s.jsx)("div",{style:{width:"98%",height:"20em",margin:"1rem",backgroundColor:"var(--black)"}})})]}),Object(s.jsx)("footer",{})]})]})};var S=function(){return Object(o.f)(),Object(s.jsxs)("div",{className:"nav-container",children:[Object(s.jsx)(l.b,{to:"/the-hijackers-guide/guidelines",children:Object(s.jsxs)("div",{className:"nav-button",children:[Object(s.jsx)("img",{alt:"",src:"/the-hijackers-guide/assets/navButton.svg"})," ",Object(s.jsx)("div",{children:"HOME"})," "]})}),Object(s.jsx)(l.b,{to:"/the-hijackers-guide/about",children:Object(s.jsxs)("div",{className:"nav-button",children:[Object(s.jsx)("img",{alt:"",src:"/the-hijackers-guide/assets/navButton.svg"})," ",Object(s.jsx)("div",{children:"ABOUT"})," "]})})]})};var B=function(){var e=Object(o.f)(),t=e.state&&e.state.background;return Object(s.jsxs)("div",{className:"App",children:["/the-hijackers-guide/"!==e.pathname&&Object(s.jsx)(S,{}),Object(s.jsxs)(o.c,{location:t||e,children:[Object(s.jsx)(o.a,{exact:!0,path:"/the-hijackers-guide/",children:Object(s.jsx)(N,{})}),Object(s.jsx)(o.a,{path:"/the-hijackers-guide/guidelines",children:Object(s.jsx)(w,{})}),Object(s.jsx)(o.a,{path:"/the-hijackers-guide/about",children:Object(s.jsx)(E,{})})]})]})},D=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,127)).then((function(t){var i=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,c=t.getTTFB;i(e),s(e),a(e),n(e),c(e)}))};c.a.render(Object(s.jsx)(l.a,{children:Object(s.jsx)(B,{})}),document.getElementById("root")),D()},60:function(e){e.exports=JSON.parse('{"v":"5.7.6","fr":25,"ip":0,"op":5,"w":50,"h":50,"nm":"Composizione 2","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"play contorni","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[24.85,24.95,0],"ix":2,"l":2},"a":{"a":0,"k":[18.9,22.5,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"s","pt":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[18.925,-0.075],[18.925,-0.075],[18.925,45.3],[18.925,45.3]],"c":true}]},{"t":4,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[23.05,-0.075],[15.175,-0.075],[15.175,45.3],[23.05,45.3]],"c":true}]}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[-1]},{"t":1,"s":[0]}],"ix":4},"nm":"Maschera 1"}],"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[0.285,0],[0,0],[0,0.287],[0,0],[-0.285,0],[0,0],[0,-0.286],[0,0]],"o":[[0,0],[-0.285,0],[0,0],[0,-0.286],[0,0],[0.285,0],[0,0],[0,0.287]],"v":[[18.114,0.849],[-18.133,22.068],[-18.65,21.55],[-18.65,-21.733],[-18.133,-22.25],[18.114,-0.719],[18.631,-0.202],[18.631,0.331]],"c":true}]},{"t":4,"s":[{"i":[[0.285,0],[0,0],[0,0.287],[0,0],[-0.285,0],[0,0],[0,-0.286],[0,0]],"o":[[0,0],[-0.285,0],[0,0],[0,-0.286],[0,0],[0.285,0],[0,0],[0,0.287]],"v":[[18.073,22.068],[-18.133,22.068],[-18.65,21.55],[-18.65,-21.733],[-18.133,-22.25],[18.073,-22.25],[18.59,-21.733],[18.59,21.55]],"c":true}]}],"ix":2},"nm":"Tracciato 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.972999961703,0.972999961703,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Riempimento 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[18.9,22.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Trasformazione"}],"nm":"Gruppo 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":5,"st":0,"bm":0}],"markers":[]}')},61:function(e){e.exports=JSON.parse('{"v":"5.7.6","fr":25,"ip":0,"op":5,"w":50,"h":50,"nm":"Composizione 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"play contorni","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[24.85,24.95,0],"ix":2,"l":2},"a":{"a":0,"k":[18.9,22.5,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"s","pt":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[23.05,-0.075],[15.175,-0.075],[15.175,45.3],[23.05,45.3]],"c":true}]},{"t":4,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[18.925,-0.075],[18.925,-0.075],[18.925,45.3],[18.925,45.3]],"c":true}]}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":3,"s":[0]},{"t":4,"s":[-1]}],"ix":4},"nm":"Maschera 1"}],"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[0.285,0],[0,0],[0,0.287],[0,0],[-0.285,0],[0,0],[0,-0.286],[0,0]],"o":[[0,0],[-0.285,0],[0,0],[0,-0.286],[0,0],[0.285,0],[0,0],[0,0.287]],"v":[[18.073,22.068],[-18.133,22.068],[-18.65,21.55],[-18.65,-21.733],[-18.133,-22.25],[18.073,-22.25],[18.59,-21.733],[18.59,21.55]],"c":true}]},{"t":4,"s":[{"i":[[0.285,0],[0,0],[0,0.287],[0,0],[-0.285,0],[0,0],[0,-0.286],[0,0]],"o":[[0,0],[-0.285,0],[0,0],[0,-0.286],[0,0],[0.285,0],[0,0],[0,0.287]],"v":[[18.114,0.849],[-18.133,22.068],[-18.65,21.55],[-18.65,-21.733],[-18.133,-22.25],[18.114,-0.719],[18.631,-0.202],[18.631,0.331]],"c":true}]}],"ix":2},"nm":"Tracciato 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.972999961703,0.972999961703,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Riempimento 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[18.9,22.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Trasformazione"}],"nm":"Gruppo 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":5,"st":0,"bm":0}],"markers":[]}')},62:function(e){e.exports=JSON.parse('{"v":"5.7.6","fr":25,"ip":0,"op":750,"w":100,"h":100,"nm":"Composizione 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Livello forma 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[50,50,0],"ix":2,"l":2},"a":{"a":0,"k":[0,9.231,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0,0,0.667],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.12]},"t":4,"s":[65,65,100]},{"t":14,"s":[125,125,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[78.25,78.25],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Tracciato ellisse 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.525],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":6,"s":[5]},{"t":14,"s":[0]}],"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Traccia 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0.375,9.625],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Trasformazione"}],"nm":"Ellisse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":750,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Livello 1 contorni","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":20,"s":[100]},{"t":26,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[50,48.75,0],"ix":2,"l":2},"a":{"a":0,"k":[30.543,41.673,0],"ix":1,"l":2},"s":{"a":0,"k":[37,37,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.756,-1.06],[0,0],[1.721,0],[0,1.721],[0,0],[-0.439,2.625],[-2.418,0.469],[0,-3.738]],"o":[[0,0],[0,1.721],[-1.721,0],[0,0],[-2.028,-1.224],[0.407,-2.429],[3.874,-0.754],[0,2.199]],"v":[[3.656,-2.538],[3.656,11.063],[0.54,14.18],[-2.576,11.063],[-2.576,-2.538],[-5.422,-8.759],[-0.676,-13.646],[6.59,-7.716]],"c":true},"ix":2},"nm":"Tracciato 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[4.363,0],[0,0],[0,-4.363],[0,0],[-4.363,0],[0,0],[0,4.362],[0,0]],"o":[[0,0],[-4.363,0],[0,0],[0,4.362],[0,0],[4.363,0],[0,0],[0,-4.363]],"v":[[22.393,-25.025],[-22.394,-25.025],[-30.293,-17.125],[-30.293,17.127],[-22.394,25.025],[22.393,25.025],[30.293,17.127],[30.293,-17.125]],"c":true},"ix":2},"nm":"Tracciato 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Unisci tracciati 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Riempimento 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[30.543,58.071],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Trasformazione"}],"nm":"Gruppo 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":12,"s":[{"i":[[14.449,0],[0,0],[0,-14.45],[0,0],[0,0],[0,0],[-9.671,0],[0,-9.671],[0,0],[0,0],[0,0]],"o":[[0,0],[-14.449,0],[0,0],[0,0],[0,0],[0,-9.671],[9.671,0],[0,0],[0,0],[0,0],[0,-14.45]],"v":[[0,-17.609],[0,-17.609],[-26.162,8.555],[-26.162,17.609],[-17.51,17.609],[-17.51,9.021],[0,-8.49],[17.511,9.021],[17.511,17.609],[26.162,17.609],[26.162,8.555]],"c":true}]},{"t":14,"s":[{"i":[[14.449,0],[0,0],[0,-14.45],[0,0],[0,0],[0,0],[-9.671,0],[0,-9.671],[0,0],[0,0],[0,0]],"o":[[0,0],[-14.449,0],[0,0],[0,0],[0,0],[0,-9.671],[9.671,0],[0,0],[0,0],[0,0],[0,-14.45]],"v":[[-0.016,-36.671],[-0.016,-36.671],[-26.178,-10.508],[-26.162,17.609],[-17.51,17.609],[-17.526,-10.042],[-0.016,-27.552],[17.495,-10.042],[17.495,-1.454],[26.146,-1.454],[26.146,-10.508]],"c":true}]}],"ix":2},"nm":"Tracciato 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Riempimento 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[30.543,17.858],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Trasformazione"}],"nm":"Gruppo 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":750,"st":0,"bm":0}],"markers":[]}')},70:function(e,t,i){},71:function(e,t,i){}},[[126,1,2]]]);
//# sourceMappingURL=main.1d37852e.chunk.js.map