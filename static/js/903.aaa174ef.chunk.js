"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[903],{4534:function(e,t,n){n.d(t,{Bd:function(){return f},Is:function(){return p},qb:function(){return g},xl:function(){return v}});var r=n(7762),a=n(5861),s=n(7757),i=n.n(s),o=n(3250),c=n(94),l=n(4569),u=n.n(l),d="http://tiro-app.herokuapp.com/post/get-all",m="http://tiro-app.herokuapp.com/post/get/",x="http://tiro-app.herokuapp.com/post/new";function p(e){var t=e.information.expenses.rental_price,n={type:c.Q.Position,value:e.address.address},r={type:c.Q.Price,value:t},a={id:e._id,title:e.confirmation.title_of_post,owner:e.author,address:e.address.houser_number+","+e.address.district,fee:t,description:e.confirmation.room_description,images:e.utilities.images,status:e.status,data_tags:[n,r],createAt:new Date(e.createdAt),comments:[],post_link:""};return console.log(a),a}function f(){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get(d);case 3:if(200!==(t=e.sent).status){e.next=6;break}return e.abrupt("return",{ok:!0,data:t.data});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.abrupt("return",{ok:!1,data:void 0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function v(e){return j.apply(this,arguments)}function j(){return(j=(0,a.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().get(m+t);case 3:if(200!==(n=e.sent).status){e.next=6;break}return e.abrupt("return",{ok:!0,data:n.data});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.abrupt("return",{ok:!1,data:void 0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function g(e){return w.apply(this,arguments)}function w(){return(w=(0,a.Z)(i().mark((function e(t){var n,a,s,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),e.next=4,u().post(x,{params:t,token:o.o},{withCredentials:!0,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"}});case 4:n=e.sent,a=(0,r.Z)(t.entries());try{for(a.s();!(s=a.n()).done;)c=s.value,console.log(c[0]+", "+c[1])}catch(i){a.e(i)}finally{a.f()}if(console.log(n),200!==n.status){e.next=10;break}return e.abrupt("return",{ok:!0,data:n.data});case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:return e.abrupt("return",{ok:!1,data:void 0});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}},6270:function(e,t,n){n.d(t,{Z:function(){return M}});var r,a=n(885),s=n(2791),i=n(184);function o(e){var t=e.createAt,n=e.size,o=void 0===n?r.Medium:n,c=function(e){var t=Date.now()-e.getTime(),n=Math.floor(t/1e3),r=Math.floor(n/60),a=Math.floor(r/60),s=Math.floor(a/24),i=Math.floor(s/30),o=Math.floor(i/12);return r<60?"".concat(r," ph\xfat tr\u01b0\u1edbc"):a<24?"".concat(a," gi\u1edd tr\u01b0\u1edbc"):s<30?"".concat(s," ng\xe0y tr\u01b0\u1edbc"):i<12?"".concat(i," th\xe1ng tr\u01b0\u1edbc"):"".concat(o," n\u0103m tr\u01b0\u1edbc")},l=(0,s.useState)(c(t)),u=(0,a.Z)(l,2),d=u[0],m=u[1];return(0,s.useEffect)((function(){var e=setInterval((function(){m(c(new Date))}),6e4);return function(){return clearInterval(e)}}),[]),(0,i.jsx)("p",{className:"text-gray-160 text-[".concat(o,"]"),children:d})}!function(e){e.Small="14px",e.Medium=""}(r||(r={}));var c=n(8316),l=n(9149),u=n(9428),d=n(577);function m(){return(0,i.jsx)(l.Z,{children:(0,i.jsx)(u.Z,{onClick:function(){(0,d.Am)("T\xednh n\u0103ng \u0111ang ph\xe1t tri\u1ec3n")},children:(0,i.jsx)(c.Z,{iconName:c.u.Share1})})})}function x(e){var t=e.createAt;return(0,i.jsxs)("div",{className:"px-[20px] flex justify-between border-t-2 border-gray-100 pt-2",children:[(0,i.jsx)(m,{}),(0,i.jsx)(o,{createAt:t})]})}var p=n(3184);function f(){return(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(u.Z,{children:(0,i.jsx)(c.Z,{iconName:c.u.MessageCircleLines})}),(0,i.jsx)(u.Z,{children:(0,i.jsx)(c.Z,{iconName:c.u.Bookmark})}),(0,i.jsx)(u.Z,{children:(0,i.jsx)(c.Z,{iconName:c.u.MenuHorizontal})})]})}var h=n(1176);function v(e){var t=e.user;return(0,i.jsx)("div",{className:"py-3 flex justify-center px-[20px]",children:(0,i.jsxs)("div",{className:"flex w-full justify-between",children:[(0,i.jsx)("div",{className:"max-w-[250px]",children:(0,i.jsx)(p.Z,{user:t,sizeAvt:h.DZ.SSmall})}),(0,i.jsx)(f,{})]})})}var j=n(6557),g=n(2592);function w(e){var t=e.images;return(0,i.jsx)("div",{className:"w-full my-2 h-[400px] overflow-hidden",children:(0,i.jsx)(j.Z,{nextIcon:(0,i.jsx)("div",{className:"h-[24px] w-[24px] rounded-md bg-white",children:(0,i.jsx)(c.Z,{iconName:c.u.ChevronSmallRight})}),prevIcon:(0,i.jsx)("div",{className:"h-[24px] w-[24px] rounded-md bg-white",children:(0,i.jsx)(c.Z,{iconName:c.u.ChevronSmallLeft})}),controls:t.length>1,children:t.map((function(e){return(0,i.jsx)(j.Z.Item,{children:(0,i.jsx)(g.Z,{thumbnail:!0,src:e,width:"560px",height:"600px",className:" mx-auto"})})}))})})}function N(e){var t=e.content;return(0,i.jsx)("div",{children:t})}function b(e){var t=e.iconName,n=e.value;return(0,i.jsxs)("div",{className:"bg-[#6DB0FF] h-[30px] rounded-full flex items-center w-fit px-2 mr-[10px] text-white cursor-pointer",children:[(0,i.jsx)(c.Z,{iconName:t,stroke:"white",strokeWidth:"2px"}),(0,i.jsx)("p",{className:"ml-2 mr-2",children:n})]})}var y=n(94);function Z(e){var t=e.data_tag;return(0,i.jsx)("div",{className:"flex mb-2",children:null===t||void 0===t?void 0:t.map((function(e){return function(e){switch(e.type){case y.Q.Position:return(0,i.jsx)(b,{iconName:c.u.Location1,value:e.value},e.type);case y.Q.Price:return(0,i.jsx)(b,{iconName:c.u.Coin,value:e.value},e.type);case y.Q.Deposit:return(0,i.jsx)(b,{iconName:c.u.Wallet,value:e.value},e.type);default:return(0,i.jsx)("span",{})}}(e)}))})}function k(e){var t=e.data_tags,n=e.content;return(0,i.jsxs)("div",{className:"mx-[20px] mb-3",children:[(0,i.jsx)(Z,{data_tag:t}),(0,i.jsx)(N,{content:n})]})}var A=n(3624);function S(e){var t=e.comment;return(0,i.jsxs)("div",{className:"h-[28px] flex items-center my-2",children:[(0,i.jsx)(A.Z,{user:t.owner,size:h.DZ.SSmall}),(0,i.jsx)("p",{className:"mx-2 text-[14px]",children:t.content}),(0,i.jsx)(o,{createAt:t.createdAt,size:r.Small})]})}function _(e){var t=e.data,n=e.dataSize,r=e.post_link,a=e.isShowFullComment;return(0,i.jsx)("div",{className:"mx-[20px] py-3",children:a?(0,i.jsxs)("div",{children:[t.map((function(e){return(0,i.jsx)(S,{comment:e},e.id)})),(0,i.jsxs)("a",{className:"text-gray-160 outline-none text-[14px] my-2 block cursor-pointer",href:r,children:["View all ",n," comments"]})]}):t.slice(0,3).map((function(e,t){return(0,i.jsx)(S,{comment:e},t)}))})}function C(e){var t=e.handleAddComment,n=(0,s.useState)(""),r=(0,a.Z)(n,2),o=r[0],c=r[1];return(0,i.jsx)("div",{className:"m-2 mt-0",children:(0,i.jsx)("div",{className:"bg-gray-100 rounded-lg",children:(0,i.jsx)("input",{type:"text",className:"w-full py-2 px-3 bg-transparent outline-none",placeholder:"Add a comment...",onKeyDown:function(e){"Enter"===e.code&&(c(""),t(o))},onChange:function(e){return c(e.target.value)},value:o})})})}var D=n(1756),P=n(6164);function M(e){var t=e.data,n=e.isShowFullComment,r=void 0!==n&&n,o=(0,s.useState)(h.A4),c=(0,a.Z)(o,2),l=c[0],u=c[1],d=(0,s.useState)([P.i]),m=(0,a.Z)(d,2),p=m[0],f=m[1];(0,s.useEffect)((function(){(0,D.PR)(t.owner).then((function(e){return u((0,D.nL)(e.data.user))})).catch((function(e){return console.log(e)}))}),[]);return(0,i.jsxs)("div",{className:"w-full bg-white sm:rounded-xl border-solid sm:border-gray-150  sm:border-2 mb-16",children:[(0,i.jsx)(v,{user:l}),(0,i.jsx)(k,{data_tags:t.data_tags,content:t.description}),(0,i.jsx)(w,{images:t.images}),(0,i.jsx)(x,{createAt:t.createAt}),t.comments&&(0,i.jsx)(_,{data:p,dataSize:p.length,post_link:"/post/"+t.id,isShowFullComment:r}),(0,i.jsx)(C,{handleAddComment:function(e){var t={id:"",owner:l,content:e,createdAt:new Date};f(p.concat(t))}})]})}},3184:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(5671),a=n(3144),s=n(136),i=n(3668),o=n(2791),c=n(8316),l=n(1176),u=n(3624),d=n(184),m=function(e){(0,s.Z)(n,e);var t=(0,i.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,a.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.user,n=void 0===t?l.A4:t,r=e.sizeAvt,a=void 0===r?l.DZ.Small:r,s=e.border,i=void 0!==s&&s,o=e.showName,m=void 0!==o&&o,x=e.showRole,p=void 0!==x&&x,f=e.twoLine,h=void 0!==f&&f,v=e.directionLeft,j=void 0===v||v;return(0,d.jsxs)("div",{className:"flex ".concat(p?"items-end":"items-center"),children:[!j&&(0,d.jsxs)("div",{className:"flex flex-col",children:[(0,d.jsx)("p",{className:"font-bold truncate",children:n.username}),(0,d.jsx)("p",{className:"text-gray-200 truncate",children:n.role})]}),(0,d.jsx)(u.Z,{user:n,size:a,border:i,link_to_profile:n.id}),j&&(0,d.jsxs)("div",{className:"flex overflow-hidden w-[210px] ".concat(h?"flex-col":""),children:[(0,d.jsx)("p",{className:"ml-2 font-semibold",children:n.name}),(0,d.jsxs)("div",{className:"flex ml-2 text-gray-400 text-[14px] w-full",children:[m&&(0,d.jsxs)("div",{className:"flex mr-2",children:["@",n.name]}),p&&(0,d.jsx)("div",{className:"flex mr-2 text-green bg-bggreen px-2 rounded-lg font-semibold",children:n.role}),(0,d.jsxs)("div",{className:"flex items-center",children:[(0,d.jsx)(c.Z,{iconName:c.u.TrendingUp,stroke:"#949494",size:"20px"}),(0,d.jsx)("p",{className:"mx-1 truncate",children:n.distance})]}),(0,d.jsxs)("div",{className:"flex ml-2 items-center",children:[(0,d.jsx)(c.Z,{iconName:c.u.Location1,stroke:"#949494",size:"20px"}),(0,d.jsx)("p",{className:"mx-1 truncate",children:n.address})]})]})]})]})}}]),n}(o.Component)},6164:function(e,t,n){n.d(t,{i:function(){return r}});var r={id:"1",owner:n(1176).A4,content:"This is a comment",createdAt:new Date}},94:function(e,t,n){var r;n.d(t,{Q:function(){return r},f:function(){return a}}),function(e){e[e.Position=0]="Position",e[e.Price=1]="Price",e[e.Deposit=2]="Deposit"}(r||(r={}));var a=[{type:r.Price,value:"2tr"},{type:r.Deposit,value:"200k"},{type:r.Position,value:"Mai Dich"}]}}]);
//# sourceMappingURL=903.aaa174ef.chunk.js.map