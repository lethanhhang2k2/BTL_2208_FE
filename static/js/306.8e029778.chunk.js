"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[306],{6270:function(e,t,n){n.d(t,{Z:function(){return T}});var r,s=n(5671),a=n(3144),i=n(136),c=n(5716),o=n(2791),l=n(885),d=n(184);function u(e){var t=e.createAt,n=e.size,s=void 0===n?r.Medium:n,a=function(e){var t=Date.now()-e.getTime(),n=Math.floor(t/1e3),r=Math.floor(n/60),s=Math.floor(r/60),a=Math.floor(s/24),i=Math.floor(a/30),c=Math.floor(i/12);return r<60?"".concat(r," ph\xfat tr\u01b0\u1edbc"):s<24?"".concat(s," gi\u1edd tr\u01b0\u1edbc"):a<30?"".concat(a," ng\xe0y tr\u01b0\u1edbc"):i<12?"".concat(i," th\xe1ng tr\u01b0\u1edbc"):"".concat(c," n\u0103m tr\u01b0\u1edbc")},i=(0,o.useState)(a(t)),c=(0,l.Z)(i,2),u=c[0],m=c[1];return(0,o.useEffect)((function(){var e=setInterval((function(){m(a(new Date))}),6e4);return function(){return clearInterval(e)}}),[]),(0,d.jsx)("p",{className:"text-gray-160 text-[".concat(s,"]"),children:u})}!function(e){e.Small="14px",e.Medium=""}(r||(r={}));var m=n(8002),x=n(9149),h=n(9428),p=n(577);function f(){return(0,d.jsx)(x.Z,{children:(0,d.jsx)(h.Z,{onClick:function(){(0,p.Am)("T\xednh n\u0103ng \u0111ang ph\xe1t tri\u1ec3n")},children:(0,d.jsx)(m.Z,{iconName:m.u.Share1})})})}function v(e){var t=e.createAt;return(0,d.jsxs)("div",{className:"px-[20px] flex justify-between border-t-2 border-gray-100 pt-2",children:[(0,d.jsx)(f,{}),(0,d.jsx)(u,{createAt:t})]})}var j=n(3184);function g(){return(0,d.jsxs)(x.Z,{children:[(0,d.jsx)(h.Z,{children:(0,d.jsx)(m.Z,{iconName:m.u.MessageCircleLines})}),(0,d.jsx)(h.Z,{children:(0,d.jsx)(m.Z,{iconName:m.u.Bookmark})}),(0,d.jsx)(h.Z,{children:(0,d.jsx)(m.Z,{iconName:m.u.MenuHorizontal})})]})}var N=n(1176);function w(e){var t=e.user;return(0,d.jsx)("div",{className:"py-3 flex justify-center px-[20px]",children:(0,d.jsxs)("div",{className:"flex w-full justify-between",children:[(0,d.jsx)("div",{className:"max-w-[250px]",children:(0,d.jsx)(j.Z,{user:t,sizeAvt:N.DZ.SSmall})}),(0,d.jsx)(g,{})]})})}var y=n(6557),b=n(2592);function Z(e){var t=e.images;return(0,d.jsx)("div",{className:"w-full my-2 h-[400px] overflow-hidden",children:(0,d.jsx)(y.Z,{nextIcon:(0,d.jsx)("div",{className:"h-[24px] w-[24px] rounded-md bg-white",children:(0,d.jsx)(m.Z,{iconName:m.u.ChevronSmallRight})}),prevIcon:(0,d.jsx)("div",{className:"h-[24px] w-[24px] rounded-md bg-white",children:(0,d.jsx)(m.Z,{iconName:m.u.ChevronSmallLeft})}),controls:t.length>1,children:t.map((function(e){return(0,d.jsx)(y.Z.Item,{children:(0,d.jsx)(b.Z,{thumbnail:!0,src:e,width:"560px",height:"600px",className:" mx-auto"})})}))})})}function A(e){var t=e.content;return(0,d.jsx)("div",{children:t})}function k(e){var t=e.iconName,n=e.value;return(0,d.jsxs)("div",{className:"bg-[#6DB0FF] h-[30px] rounded-full flex items-center w-fit px-2 mr-[10px] text-white cursor-pointer",children:[(0,d.jsx)(m.Z,{iconName:t,stroke:"white",strokeWidth:"2px"}),(0,d.jsx)("p",{className:"ml-2 mr-2",children:n})]})}var C=n(94);function D(e){var t=e.data_tag;return(0,d.jsx)("div",{className:"flex mb-2",children:null===t||void 0===t?void 0:t.map((function(e){return function(e){switch(e.type){case C.Q.Position:return(0,d.jsx)(k,{iconName:m.u.Location1,value:e.value});case C.Q.Price:return(0,d.jsx)(k,{iconName:m.u.Coin,value:e.value});case C.Q.Deposit:return(0,d.jsx)(k,{iconName:m.u.Wallet,value:e.value});default:return(0,d.jsx)("span",{})}}(e)}))})}function _(e){var t=e.data_tags,n=e.content;return(0,d.jsxs)("div",{className:"mx-[20px] mb-3",children:[(0,d.jsx)(D,{data_tag:t}),(0,d.jsx)(A,{content:n})]})}var S=n(3624);function M(e){var t=e.comment;return(0,d.jsxs)("div",{className:"h-[28px] flex items-center my-2",children:[(0,d.jsx)(S.Z,{user:t.owner,size:N.DZ.SSmall}),(0,d.jsx)("p",{className:"mx-2 text-[14px]",children:t.content}),(0,d.jsx)(u,{createAt:t.createdAt,size:r.Small})]})}function z(e){var t=e.data,n=e.dataSize,r=e.post_link,s=e.isShowFullComment;return(0,d.jsx)("div",{className:"mx-[20px] py-3",children:s?(0,d.jsxs)("div",{children:[t.map((function(e){return(0,d.jsx)(M,{comment:e},e.id)})),(0,d.jsxs)("a",{className:"text-gray-160 outline-none text-[14px] my-2 block cursor-pointer",href:r,children:["View all ",n," comments"]})]}):t.slice(0,3).map((function(e,t){return(0,d.jsx)(M,{comment:e},t)}))})}function P(e){var t=e.onChange;return(0,d.jsx)("div",{className:"m-2 mt-0",children:(0,d.jsx)("div",{className:"bg-gray-100 rounded-lg",children:(0,d.jsx)("input",{type:"text",className:"w-full py-2 px-3 bg-transparent outline-none",placeholder:"Add a comment...",onChange:t})})})}var T=function(e){(0,i.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,s.Z)(this,n),t.apply(this,arguments)}return(0,a.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.isShowFullComment,r=void 0!==n&&n;return(0,d.jsxs)("div",{className:"w-full bg-white sm:rounded-xl border-solid sm:border-gray-150  sm:border-2 mb-16",children:[(0,d.jsx)(w,{user:t.owner}),(0,d.jsx)(_,{data_tags:t.data_tags,content:t.description}),(0,d.jsx)(Z,{images:t.images}),(0,d.jsx)(v,{createAt:t.createAt}),(0,d.jsx)(z,{data:t.comments,dataSize:t.comments.length,post_link:t.post_link,isShowFullComment:r}),(0,d.jsx)(P,{})]})}}]),n}(o.Component)},3:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(184),s=[{href:"#",text:"\u0110i\u1ec1u kho\u1ea3n"},{href:"#",text:"Nh\xf3m 7"},{href:"#",text:"Tiro"}];function a(e){var t=e.link,n=void 0===t?s:t;return(0,r.jsx)("div",{className:"text-gray-400 flex flex-wrap justify-center mb-10",children:n.map((function(e,t){return(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("a",{href:e.href,className:"text-gray-400 text-[14px] ",children:e.text}),t!=n.length-1&&(0,r.jsx)("span",{className:"mx-2",children:e.separator||" \xb7 "})]},t)}))})}},3184:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(5671),s=n(3144),a=n(136),i=n(5716),c=n(2791),o=n(8002),l=n(1176),d=n(3624),u=n(184),m=function(e){(0,a.Z)(n,e);var t=(0,i.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.user,n=void 0===t?l.A4:t,r=e.sizeAvt,s=void 0===r?l.DZ.Small:r,a=e.border,i=void 0!==a&&a,c=e.showName,m=void 0!==c&&c,x=e.showRole,h=void 0!==x&&x,p=e.twoLine,f=void 0!==p&&p,v=e.directionLeft,j=void 0===v||v;return(0,u.jsxs)("div",{className:"flex ".concat(h?"items-end":"items-center"),children:[!j&&(0,u.jsxs)("div",{className:"flex flex-col",children:[(0,u.jsx)("p",{className:"font-bold truncate",children:n.username}),(0,u.jsx)("p",{className:"text-gray-200 truncate",children:n.role})]}),(0,u.jsx)(d.Z,{user:n,size:s,border:i}),j&&(0,u.jsxs)("div",{className:"flex overflow-hidden w-[210px] ".concat(f?"flex-col":""),children:[(0,u.jsx)("p",{className:"ml-2 font-semibold",children:n.name}),(0,u.jsxs)("div",{className:"flex ml-2 text-gray-400 text-[14px] w-full",children:[m&&(0,u.jsxs)("div",{className:"flex mr-2",children:["@",n.name]}),h&&(0,u.jsx)("div",{className:"flex mr-2 text-green bg-bggreen px-2 rounded-lg font-semibold",children:n.role}),(0,u.jsxs)("div",{className:"flex items-center",children:[(0,u.jsx)(o.Z,{iconName:o.u.TrendingUp,stroke:"#949494",size:"20px"}),(0,u.jsx)("p",{className:"mx-1 truncate",children:n.distance})]}),(0,u.jsxs)("div",{className:"flex ml-2 items-center",children:[(0,u.jsx)(o.Z,{iconName:o.u.Location1,stroke:"#949494",size:"20px"}),(0,u.jsx)("p",{className:"mx-1 truncate",children:n.address})]})]})]})]})}}]),n}(c.Component)},306:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(5671),s=n(3144),a=n(136),i=n(5716),c=n(2791),o=n(7026),l=n(6270),d=n(3184),u=n(1176),m=n(3),x=n(4633),h=n(184),p=x.NZ,f=function(e){(0,a.Z)(n,e);var t=(0,i.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n,[{key:"render",value:function(){return(0,h.jsx)(o.Z,{children:(0,h.jsxs)("div",{className:"pt-16 flex flex-col items-center",children:[(0,h.jsx)("div",{className:"text-5xl font-bold text-gray-600 mb-14",children:'K\u1ebft qu\u1ea3 t\xecm ki\u1ebfm c\u1ee7a "Tim tro" '}),(0,h.jsxs)("div",{className:"max-w-[950px] w-full flex flex-col lg:flex-row justify-center items-center lg:items-start relative",children:[(0,h.jsxs)("div",{className:"mr-0 max-w-[596px] lg:mr-[32px] w-full",children:[(0,h.jsx)("div",{className:"font-semibold text-gray-600 text-xl mb-8",children:"B\xe0i vi\u1ebft li\xean quan"}),(0,h.jsx)("div",{children:p.map((function(e){return(0,h.jsx)(l.Z,{data:e},e.id)}))})]}),(0,h.jsxs)("div",{className:"w-full max-w-[350px]",children:[(0,h.jsx)("div",{className:"font-semibold text-gray-600 text-xl mb-8",children:"T\xe0i kho\u1ea3n li\xean quan"}),(0,h.jsx)("a",{href:"#",className:"mb-[20px] bg-white rounded-lg border-2 border-gray-200 p-2 py-4 cursor-pointer block",children:(0,h.jsx)(d.Z,{user:u.A4,sizeAvt:u.DZ.Medium,showName:!0,twoLine:!0})}),(0,h.jsx)("a",{href:"#",className:"mb-[20px] bg-white rounded-lg border-2 border-gray-200 p-2 py-4 cursor-pointer block",children:(0,h.jsx)(d.Z,{user:u.A4,sizeAvt:u.DZ.Medium,showName:!0,twoLine:!0})})]})]}),(0,h.jsx)(m.Z,{})]})})}}]),n}(c.Component)},4633:function(e,t,n){n.d(t,{Pv:function(){return c},NZ:function(){return o},PV:function(){return r}});var r,s=n(1176),a=n(94),i={id:"1",owner:s.A4,content:"This is a comment",createdAt:new Date};!function(e){e[e.Approved=0]="Approved",e[e.NotApproved=1]="NotApproved",e[e.Decline=2]="Decline"}(r||(r={}));var c={id:"15651321651",title:"Chung c\u01b0 t\u1ea1i c\u1ea7u gi\u1ea5y",owner:s.A4,address:"Xuan Thuy Cau Giay",fee:"2tr",description:"Rong rai, thoang mat",images:["https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"],status:r.Approved,data_tags:a.f,createAt:new Date,comments:[i],post_link:"/post/15651321651"},o=[{id:"5156121",title:"Chung c\u01b0 moi",owner:s.A4,address:"Xuan Thuy Cau Giay",fee:"2tr",description:"Rong rai, thoang mat",images:["https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"],status:r.Approved,data_tags:a.f,createAt:new Date,comments:[i],post_link:"/post/5156121"},{id:"1651321351",title:"Chung c\u01b0 day du",owner:s.A4,address:"Xuan Thuy Thanh Giay",fee:"2tr",description:"Rong rai, thoang mat",images:["https://vnn-imgs-a1.vgcloud.vn/images.vov.vn/w800/uploaded/krb8sl5hrwuly8uzveukg/2019_08_29/Hinh_5_YRLH.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVGcoBEQ2CKpkcXPIiahwFo0UOFpNxvAsfeQ&usqp=CAU","https://img5.thuthuatphanmem.vn/uploads/2021/11/09/hinh-anh-dam-my-cuc-dep_084954718.jpg"],status:r.Approved,data_tags:void 0,createAt:new Date,comments:[i],post_link:"/post/5156121"}]},94:function(e,t,n){var r;n.d(t,{Q:function(){return r},f:function(){return s}}),function(e){e[e.Position=0]="Position",e[e.Price=1]="Price",e[e.Deposit=2]="Deposit"}(r||(r={}));var s=[{type:r.Price,value:"2tr"},{type:r.Deposit,value:"200k"},{type:r.Position,value:"Mai Dich"}]}}]);
//# sourceMappingURL=306.8e029778.chunk.js.map