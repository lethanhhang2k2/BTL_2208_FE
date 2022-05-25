"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[363],{3:function(e,t,s){s.d(t,{Z:function(){return n}});var r=s(184),i=[{href:"#",text:"\u0110i\u1ec1u kho\u1ea3n"},{href:"#",text:"Nh\xf3m 7"},{href:"#",text:"Tiro"}];function n(e){var t=e.link,s=void 0===t?i:t;return(0,r.jsx)("div",{className:"text-gray-400 flex flex-wrap justify-center mb-10",children:s.map((function(e,t){return(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("a",{href:e.href,className:"text-gray-400 text-[14px] ",children:e.text}),t!=s.length-1&&(0,r.jsx)("span",{className:"mx-2",children:e.separator||" \xb7 "})]},t)}))})}},8209:function(e,t,s){s.r(t),s.d(t,{default:function(){return F}});var r=s(2982),i=s(5671),n=s(3144),a=s(136),l=s(3668),c=s(2791),d=s(7026),o=s(6270),u=s(3184),h=s(1176),x=s(3),p=s(184),f=function(e){(0,a.Z)(s,e);var t=(0,l.Z)(s);function s(){return(0,i.Z)(this,s),t.apply(this,arguments)}return(0,n.Z)(s,[{key:"render",value:function(){var e=this.props,t=e.content,s=e.isChecked,r=void 0!==s&&s,i=e.onClick;return(0,p.jsx)("div",{className:"w-fit p-2 py-1 rounded-2xl border-2 border-blue-200 m-1 cursor-pointer hover:bg-blue-200 hover:text-white font-bold text-blue-500 "+(r?"bg-blue-200 font-bold text-blue-500 ":""),onClick:i,children:t})}}]),s}(c.Component),m=s(9428),v=s(8316),b=s(5861),k=s(7757),g=s.n(k),j=s(4569),y=s.n(j),w="http://tiro-app.herokuapp.com/search-by-text";function N(){return(N=(0,b.Z)(g().mark((function e(t,s,r){var i;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t[0],s[0],r),e.prev=1,e.next=4,y().post(w,{address:t[0],price_category:s[0],text:r},{withCredentials:!0,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"}});case 4:if(200!==(i=e.sent).status){e.next=7;break}return e.abrupt("return",{ok:!0,data:i.data});case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:return e.abrupt("return",{ok:!1,data:void 0});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}var C=s(1756),Z=s(4534),T=["Thanh Xu\xe2n","C\u1ea7u Gi\u1ea5y","Ba \u0110\xecnh","Hai B\xe0 Tr\u01b0ng"],F=function(e){(0,a.Z)(s,e);var t=(0,l.Z)(s);function s(e){var r;return(0,i.Z)(this,s),(r=t.call(this,e)).state={keyword:"",addressTyping:"",isTypingFilterAddress:!1,addressFilter:[],priceFilter:[{title:"D\u01b0\u1edbi 2tr",isCheck:!1,id:0},{title:"T\u1eeb 2 - 4tr",isCheck:!1,id:1},{title:"Tr\xean 4tr",isCheck:!1,id:2}],user_list:[],post_list:[]},r}return(0,n.Z)(s,[{key:"componentDidMount",value:function(){var e=new URL(window.location.href),t=e.searchParams.get("q")?e.searchParams.get("q"):"";this.setState({keyword:t},this.find.bind(this))}},{key:"find",value:function(){var e=this;(function(e,t,s){return N.apply(this,arguments)})(this.state.addressFilter,this.state.priceFilter.filter((function(e){return e.isCheck})).map((function(e){return e.id})),this.state.keyword).then((function(t){if(console.log(t),t.ok){var s=t.data.users.map((function(e){return(0,C.nL)(e)}));e.setState({user_list:s});var r=t.data.posts.map((function(e){return(0,Z.Is)(e)}));e.setState({post_list:r})}}))}},{key:"render",value:function(){var e=this;return(0,p.jsx)(d.Z,{children:(0,p.jsxs)("div",{className:"pt-16 flex flex-col items-center",children:[(0,p.jsxs)("div",{className:"text-5xl font-bold text-gray-600 mb-14",children:["K\u1ebft qu\u1ea3 t\xecm ki\u1ebfm c\u1ee7a: "+this.state.keyword," "]}),(0,p.jsxs)("div",{className:"max-w-[950px] w-full rounded-lg bg-indigo-50 mb-5 p-4",children:[(0,p.jsxs)("div",{className:"flex mb-3 items-center",children:[(0,p.jsx)("p",{className:"font-semibold mr-3 min-w-fit",children:"Xem k\u1ebft qu\u1ea3 t\u1ea1i"}),this.state.addressFilter.map((function(t){return(0,p.jsx)(f,{content:t,isChecked:!0,onClick:function(){e.setState({addressFilter:(0,r.Z)(e.state.addressFilter.filter((function(e){return e!=t})))})}},t)})),(0,p.jsxs)("div",{className:"relative",children:[(0,p.jsxs)("div",{className:"flex relative z-50",children:[(0,p.jsx)(m.Z,{onClick:function(){e.setState({isTypingFilterAddress:!1})},className:(this.state.isTypingFilterAddress?"":"hidden")+" mx-1",children:(0,p.jsx)(v.Z,{iconName:v.u.CrossCircle,stroke:"red"})}),(0,p.jsx)(m.Z,{onClick:function(){e.setState({isTypingFilterAddress:!0})},className:"mx-1",children:(0,p.jsx)(v.Z,{iconName:v.u.PlusCircle})})]}),(0,p.jsx)("div",{className:"flex flex-wrap "+(this.state.isTypingFilterAddress?"absolute -top-3 left-0":"hidden opacity-0"),children:(0,p.jsxs)("div",{className:"bg-white rounded-lg p-2",children:[(0,p.jsx)("input",{type:"text",placeholder:"\u0110\u1ecba ch\u1ec9",className:"bg-transparent outline-none m-1 pl-14",value:this.state.addressTyping,onChange:function(t){e.setState({addressTyping:t.target.value})}}),(0,p.jsx)("div",{className:"max-h-20 overflow-auto",children:T.filter((function(t){return-1==e.state.addressFilter.indexOf(t)&&t.toLowerCase().includes(e.state.addressTyping)})).map((function(t){return(0,p.jsx)("p",{onClick:function(){e.setState({addressFilter:-1!=e.state.addressFilter.indexOf(t)?(0,r.Z)(e.state.addressFilter):[].concat((0,r.Z)(e.state.addressFilter),[t])})},className:"select-none hover:bg-gray-50 p-1 cursor-pointer rounded-md hover:font-semibold",children:t},t)}))})]})})]})]}),(0,p.jsxs)("div",{className:"flex items-center",children:[(0,p.jsx)("p",{className:"font-semibold mr-3 min-w-fit",children:"Gi\xe1 ti\u1ec1n"}),(0,p.jsx)("div",{className:"flex flex-wrap",children:this.state.priceFilter.map((function(t,s){return(0,p.jsx)(f,{content:t.title,isChecked:t.isCheck,onClick:function(){var t=e.state.priceFilter;t[s].isCheck=!t[s].isCheck,e.setState({priceFilter:t})}},s)}))})]}),(0,p.jsx)("button",{className:"rounded-xl bg-blue-200 m-1 mt-4 px-4 w-fit py-1 font-semibold hover:bg-blue-300",onClick:this.find.bind(this),children:"L\u1ecdc"})]}),(0,p.jsxs)("div",{className:"max-w-[950px] w-full flex flex-col lg:flex-row justify-center items-center lg:items-start relative",children:[(0,p.jsxs)("div",{className:"mr-0 max-w-[596px] lg:mr-[32px] w-full",children:[(0,p.jsx)("div",{className:"font-semibold text-gray-600 text-xl mb-8",children:"B\xe0i vi\u1ebft li\xean quan"}),(0,p.jsx)("div",{children:this.state.post_list.map((function(e){return(0,p.jsx)(o.Z,{data:e},e.id)}))})]}),(0,p.jsxs)("div",{className:"w-full max-w-[350px]",children:[(0,p.jsx)("div",{className:"font-semibold text-gray-600 text-xl mb-8",children:"T\xe0i kho\u1ea3n li\xean quan"}),this.state.user_list.map((function(e){return(0,p.jsx)("a",{href:"#",className:"mb-[20px] bg-white rounded-lg border-2 border-gray-200 p-2 py-4 cursor-pointer block",children:(0,p.jsx)(u.Z,{user:e,sizeAvt:h.DZ.Medium,showName:!0,twoLine:!0})},e.id)}))]})]}),(0,p.jsx)(x.Z,{})]})})}}]),s}(c.Component)}}]);
//# sourceMappingURL=363.d68710cb.chunk.js.map