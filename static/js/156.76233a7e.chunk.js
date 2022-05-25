"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[156],{3:function(e,t,s){s.d(t,{Z:function(){return r}});var i=s(184),n=[{href:"#",text:"\u0110i\u1ec1u kho\u1ea3n"},{href:"#",text:"Nh\xf3m 7"},{href:"#",text:"Tiro"}];function r(e){var t=e.link,s=void 0===t?n:t;return(0,i.jsx)("div",{className:"text-gray-400 flex flex-wrap justify-center mb-10",children:s.map((function(e,t){return(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("a",{href:e.href,className:"text-gray-400 text-[14px] ",children:e.text}),t!=s.length-1&&(0,i.jsx)("span",{className:"mx-2",children:e.separator||" \xb7 "})]},t)}))})}},1156:function(e,t,s){s.r(t),s.d(t,{default:function(){return A}});var i=s(2982),n=s(885),r=s(2791),a=s(7026),l=s(3624),o=s(1176),c=s(3),h=s(8316),u=s(9428),d=s(5671),x=s(3144),m=s(136),p=s(3668),f=s(184),v=function(e){(0,m.Z)(s,e);var t=(0,p.Z)(s);function s(){return(0,d.Z)(this,s),t.apply(this,arguments)}return(0,x.Z)(s,[{key:"render",value:function(){var e=this.props,t=e.label,s=e.value;return(0,f.jsx)("div",{className:"flex items-center mr-4",children:(0,f.jsxs)("p",{className:"text-gray-400 text-lg",children:[(0,f.jsx)("span",{className:"font-bold mr-1",children:s}),t]})})}}]),s}(r.Component),g=function(e){(0,m.Z)(s,e);var t=(0,p.Z)(s);function s(){return(0,d.Z)(this,s),t.apply(this,arguments)}return(0,x.Z)(s,[{key:"render",value:function(){var e=this.props,t=e.icon,s=e.value,i=e.is_small,n=void 0!==i&&i;return(0,f.jsxs)("div",{className:"flex items-center mr-4",children:[(0,f.jsx)(h.Z,{iconName:t,stroke:"#6b7280",size:n?"18px":"24px"}),(0,f.jsx)("p",{className:"font-semibold mx-1 "+(n?"text-sm text-gray-300":"text-gray-400"),children:s})]})}}]),s}(r.Component),j=s(3660),y=s(827);function N(e){var t=e.user,s=(0,j.E)(),i=(s.isSignedIn,s.signIn,s.signOut),n=(0,r.useContext)(y.S).user;return(0,f.jsxs)("div",{className:"ml-10",children:[(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:"flex items-center",children:[(0,f.jsx)("p",{className:"text-4xl text-gray-500 font-semibold",children:t.name}),(0,f.jsx)(u.Z,{children:(0,f.jsx)(h.Z,{iconName:h.u.Setting,stroke:"#6b7280",strokeWidth:"1.5px",size:"35px"})}),(0,f.jsx)(u.Z,{href:"/nametag",children:(0,f.jsx)(h.Z,{iconName:h.u.QRCode,stroke:"#6b7280",strokeWidth:"1.5px",size:"35px"})}),t.id===n.id&&(0,f.jsx)(u.Z,{onClick:function(){return i()},children:(0,f.jsx)(h.Z,{iconName:h.u.Logout,stroke:"#6b7280",strokeWidth:"1.5px",size:"35px"})})]}),(0,f.jsx)("p",{className:"text-gray-500 font-semibold",children:t.username})]}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:"mt-3 flex flex-wrap",children:[(0,f.jsx)(v,{label:"posts",value:20}),(0,f.jsx)(v,{label:"pending posts",value:20}),(0,f.jsx)(v,{label:"followers",value:20}),(0,f.jsx)(v,{label:"followings",value:20})]}),(0,f.jsxs)("div",{className:" mt-2 flex",children:[(0,f.jsx)(g,{icon:h.u.TrendingUp,value:4.5}),(0,f.jsx)(g,{icon:h.u.Location1,value:t.address})]})]}),(0,f.jsx)("p",{className:"mt-3 text-gray-500",children:"Cho thu\xea tr\u1ecd gi\xe1 t\u1eeb 2tr"})]})}var b=function(e){(0,m.Z)(s,e);var t=(0,p.Z)(s);function s(){var e;(0,d.Z)(this,s);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).handleClick=function(t){e.props.onClick&&e.props.onClick(t)},e}return(0,x.Z)(s,[{key:"render",value:function(){var e=this.props,t=e.itemIndex,s=e.title,i=e.isActive;return(0,f.jsx)("div",{className:"font-semibold p-1 px-3 rounded-2xl cursor-pointer mx-2 transition-all "+(i?"bg-white shadow-lg text-gray-600 font-bold":"text-gray-400"),onClick:this.handleClick.bind(this,t),children:s})}}]),s}(r.Component),k=function(e){(0,m.Z)(s,e);var t=(0,p.Z)(s);function s(){return(0,d.Z)(this,s),t.apply(this,arguments)}return(0,x.Z)(s,[{key:"render",value:function(){return(0,f.jsxs)("div",{className:"bg-white rounded-2xl w-64 p-2 m-3 shadow-md cursor-pointer hover:shadow-lg transition-all",children:[(0,f.jsxs)("div",{className:"h-36 relative",children:[(0,f.jsx)("div",{className:"h-full overflow-hidden rounded-2xl shadow-md",children:(0,f.jsx)("img",{src:this.props.data.img_href,alt:"post-image",className:"object-scale-down"})}),(0,f.jsx)("div",{className:"bg-blue-50 rounded-2xl p-1 px-3 absolute -bottom-3 right-3 z-30 shadow-md",children:(0,f.jsx)("p",{className:"text-blue-500 font-semibold ",children:this.props.data.status})})]}),(0,f.jsxs)("div",{className:"mt-4 mx-2",children:[(0,f.jsx)("h1",{className:"font-semibold text-gray-600",children:this.props.data.title}),(0,f.jsxs)("div",{className:"mt-2",children:[(0,f.jsx)(g,{icon:h.u.Location1,value:this.props.data.location,is_small:!0}),(0,f.jsx)(g,{icon:h.u.Coin,value:this.props.data.fee,is_small:!0})]})]})]})}}]),s}(r.Component),Z=s(6871),C=s(1756),w=[{title:"G\u1eafn th\u1ebb",isActive:!1},{title:"\u0110\xe3 l\u01b0u",isActive:!1},{title:"B\xe1n th\xe0nh c\xf4ng",isActive:!1}],_=[{img_href:"https://sites.google.com/site/thietkenhatro/_/rsrc/1524458903786/home/mot-so-luu-y-khi-xay-nha-tro-cho-thue.jpg",status:"\u0110\xe3 duy\u1ec7t",title:"Chung c\u01b0 mini t\u1ea1i C\u1ea7u Gi\u1ea5y",description:"Gan dh quoc gia",location:"Mai Dich",fee:"2tr"},{img_href:"https://sites.google.com/site/thietkenhatro/_/rsrc/1524458903786/home/mot-so-luu-y-khi-xay-nha-tro-cho-thue.jpg",status:"\u0110\xe3 duy\u1ec7t",title:"Chung c\u01b0 mini t\u1ea1i C\u1ea7u Gi\u1ea5y",description:"Gan dh quoc gia",location:"Mai Dich",fee:"2tr"},{img_href:"https://sites.google.com/site/thietkenhatro/_/rsrc/1524458903786/home/mot-so-luu-y-khi-xay-nha-tro-cho-thue.jpg",status:"\u0110\xe3 duy\u1ec7t",title:"Chung c\u01b0 mini t\u1ea1i C\u1ea7u Gi\u1ea5y",description:"Gan dh quoc gia",location:"Mai Dich",fee:"2tr"},{img_href:"https://sites.google.com/site/thietkenhatro/_/rsrc/1524458903786/home/mot-so-luu-y-khi-xay-nha-tro-cho-thue.jpg",status:"\u0110\xe3 duy\u1ec7t",title:"Chung c\u01b0 mini t\u1ea1i C\u1ea7u Gi\u1ea5y",description:"Gan dh quoc gia",location:"Mai Dich",fee:"2tr"}];function A(){var e=r.useState(w),t=(0,n.Z)(e,2),s=t[0],h=t[1],u=r.useState(o.A4),d=(0,n.Z)(u,2),x=d[0],m=d[1],p=(0,Z.UO)().userID,v=(0,r.useContext)(y.S).user;(0,r.useEffect)((function(){console.log(p),p?(0,C.PR)(p).then((function(e){e.ok?m((0,C.nL)(e.data.user)):console.log("error")})).catch((function(e){console.log(e)})):m(v)}),[p]);var g=function(e){var t=s;t.forEach((function(t,s){t.isActive=e===s})),h((0,i.Z)(t)),console.log(s)};return(0,f.jsx)(a.Z,{children:(0,f.jsxs)("div",{className:"pt-16 flex flex-col items-center min-h-screen justify-between",children:[(0,f.jsxs)("div",{className:"max-w-[1000px] w-full flex flex-col items-center",children:[(0,f.jsxs)("div",{className:"flex mt-5 mb-5 flex-col md:flex-row",children:[(0,f.jsx)("div",{className:"mx-auto mb-5 md:mb-0 md:mx-0",children:(0,f.jsx)(l.Z,{user:x,size:o.DZ.X2Large})}),(0,f.jsx)(N,{user:x})]}),(0,f.jsx)("div",{className:"md:flex hidden",children:s.map((function(e,t){return(0,f.jsx)(b,{title:e.title,isActive:e.isActive,itemIndex:t,onClick:g},t)}))}),(0,f.jsx)("div",{className:"flex m-4 flex-wrap justify-center lg:justify-start",children:_.map((function(e,t){return(0,f.jsx)(k,{data:e},t)}))})]}),(0,f.jsx)(c.Z,{})]})})}}}]);
//# sourceMappingURL=156.76233a7e.chunk.js.map