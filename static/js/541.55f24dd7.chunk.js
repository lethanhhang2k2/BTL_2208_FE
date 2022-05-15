"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[541],{3:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(184),r=[{href:"#",text:"\u0110i\u1ec1u kho\u1ea3n"},{href:"#",text:"Nh\xf3m 7"},{href:"#",text:"Tiro"}];function s(e){var n=e.link,t=void 0===n?r:n;return(0,a.jsx)("div",{className:"text-gray-400 flex flex-wrap justify-center mb-10",children:t.map((function(e,n){return(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("a",{href:e.href,className:"text-gray-400 text-[14px] ",children:e.text}),n!=t.length-1&&(0,a.jsx)("span",{className:"mx-2",children:e.separator||" \xb7 "})]},n)}))})}},2541:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var a=t(7149),r=t(735),s=t(3),l=t(5861),i=t(885),c=t(7757),u=t.n(c),o=t(1176),d=t(5671),h=t(3144),m=t(136),f=t(5716),x=t(2791),p=t(184);function v(e){var n=e.children,t=e.forInput,a=e.required,r=void 0!==a&&a;return(0,p.jsxs)("label",{htmlFor:t,className:"w-[32%] font-bold truncate text-gray-600",children:[n,r&&(0,p.jsx)("span",{className:"text-red-500",children:"*"})]})}var g=function(e){(0,m.Z)(t,e);var n=(0,f.Z)(t);function t(e){var a;return(0,d.Z)(this,t),(a=n.call(this,e)).handleChange=function(e){a.setState({value:e.target.value}),a.props.onChange&&a.props.onChange(e)},a.state={value:e.value||""},a}return(0,h.Z)(t,[{key:"render",value:function(){var e=this.props,n=e.type,t=void 0===n?"text":n,a=e.placeholder,r=void 0===a?"":a,s=e.name,l=e.label,i=e.disable,c=void 0!==i&&i,u=e.required,o=void 0!==u&&u;return(0,p.jsxs)("div",{className:"form-item",children:[(0,p.jsx)(v,{forInput:s,required:o,children:l}),(0,p.jsx)("div",{className:"w-full rounded-lg h-fit "+(c?"bg-gray-300":"bg-gray-100"),children:(0,p.jsx)("input",{value:this.state.value,required:o,disabled:c,type:t,placeholder:r,name:s,className:"w-full outline-none p-2 bg-transparent focus:outline-4 focus:outline-violet/40 rounded-lg",onChange:this.handleChange.bind(this)})})]})}}]),t}(x.Component);function j(e){var n=e.name,t=e.value,a=e.onChange,r=(0,x.useState)(t),s=(0,i.Z)(r,2),l=s[0],c=s[1];return(0,p.jsx)("label",{className:"flex items-center cursor-pointer mx-[5%]",children:(0,p.jsxs)("div",{className:"relative",children:[(0,p.jsx)("input",{type:"checkbox",className:"switch sr-only",name:n,defaultChecked:l,onChange:function(e){c(!l),a&&a(e)}}),(0,p.jsx)("div",{className:"line block w-[68px] h-[32px] rounded-full transition "+(l?"bg-violet":"bg-blue-400")}),(0,p.jsx)("div",{className:"dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-all duration-500"})]})})}var b=t(8862);function N(e){var n=e.default_value,t=(0,x.useState)(n||b),a=(0,i.Z)(t,2),r=a[0],s=a[1];return(0,x.useEffect)((function(){return function(){return URL.revokeObjectURL(r)}}),[r]),(0,p.jsxs)("label",{className:"w-[160px] h-[160px] rounded-full border-solid border-4 border-violet cursor-pointer",children:[(0,p.jsx)("div",{className:"h-full",children:(0,p.jsx)("img",{src:r,className:"h-[152px] w-auto object-cover rounded-full",alt:"user-avatar"})}),(0,p.jsx)("input",{type:"file",className:"opacity-0",accept:"image/png, image/jpeg",onChange:function(e){var n=e.target.files[0];console.log(URL.createObjectURL(n)),s(URL.createObjectURL(n))},name:"avatar"})]})}var y=t(827),w=t(577),C=t(1756),k=t(6871);function Z(){var e=(0,x.useState)(!1),n=(0,i.Z)(e,2),t=n[0],a=n[1],r=(0,x.useState)(""),s=(0,i.Z)(r,2),c=s[0],d=s[1],h=(0,x.useContext)(y.S).user;return t?(0,p.jsx)(k.Fg,{to:c}):(0,p.jsxs)("form",{className:"h-full flex flex-col justify-evenly items-center",onSubmit:function(e){e.preventDefault();var n=e.target.avatar.files[0],t={role:e.target.role.checked?"renter":"landlord",username:e.target.username.value,given_name:e.target.name.value,phone:e.target.telephone_number.value,address:e.target.address.value};function r(e){return s.apply(this,arguments)}function s(){return s=(0,l.Z)(u().mark((function e(n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){""===n.username.trim()||""===n.given_name.trim()||""===n.phone.trim()?t("Please fill all the fields"):e()})));case 1:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function i(){return(i=(0,l.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,s){r(t).then((function(){Promise.all([(0,C.Ix)(n),(0,C.Al)(t)]).then((function(){a(!0),d("/"),e()}))})).catch((function(e){w.Am.error(e.message),console.log(e),s(e)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}w.Am.promise((function(){return i.apply(this,arguments)}),{pending:"\u0110ang c\u1eadp nh\u1eadt",success:"C\u1eadp nh\u1eadt th\xe0nh th\xe0nh c\xf4ng",error:"C\u1eadp nh\u1eadt th\u1ea5t b\u1ea1i"}),console.log(t)},children:[(0,p.jsxs)("div",{className:"flex flex-col items-center",children:[(0,p.jsx)(N,{default_value:h.avtHref}),(0,p.jsxs)("div",{className:"form-item flex justify-center mt-3",children:[(0,p.jsx)("label",{className:"min-w-fit truncate font-bold text-gray-600",children:"Ch\u1ee7 tr\u1ecd"}),(0,p.jsx)(j,{name:"role",value:h.role!==o.i4.LandLord}),(0,p.jsx)("label",{className:"min-w-fit truncate font-bold text-gray-600",children:"Thu\xea tr\u1ecd"})]})]}),(0,p.jsxs)("div",{className:"w-full px-4",children:[(0,p.jsx)(g,{name:"username",label:"Username",placeholder:"Aha move",value:h.username,required:!0}),(0,p.jsx)(g,{name:"name",label:"T\xean",placeholder:"Nguyen Van A",required:!0,value:h.name}),(0,p.jsx)(g,{name:"email",label:"Email",placeholder:"nva@gmail.com",value:h.email,disable:!0}),(0,p.jsx)(g,{name:"telephone_number",label:"S\u0110T",placeholder:"+84123456789",required:!0,value:h.phone}),(0,p.jsx)(g,{name:"address",label:"\u0110\u1ecba ch\u1ec9",placeholder:"H\xe0 N\u1ed9i",value:h.address}),(0,p.jsxs)("i",{children:["C\xe1c m\u1ee5c \u0111\xe1nh d\u1ea5u ",(0,p.jsx)("span",{className:"text-red-500",children:"*"})," l\xe0 bu\u1ed9c ph\u1ea3i \u0111i\u1ec1n"]})]}),(0,p.jsx)("div",{className:"pt-2 flex justify-center",children:(0,p.jsx)("button",{type:"submit",className:"h-[48px] w-[120px] p-4 rounded-full bg-violet text-white\r flex items-center justify-center transition ease-in-out duration-700 hover:bg-violet/80",children:"L\u01b0u"})})]})}t(5462),t(7189);function L(){return(0,p.jsxs)("div",{className:"w-screen h-screen bg-cover login-page",children:[(0,p.jsx)(w.Ix,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),(0,p.jsx)("div",{className:"flex items-center justify-center h-screen",children:(0,p.jsxs)("div",{className:"bg-white shadow-md rounded-3xl grid grid-cols-5 p-4 w-5/6 ss:w-4/5 3xl:w-3/5 h-4/5",children:[(0,p.jsxs)("div",{className:"hidden lg:flex lg:flex-col col-span-3 mx-16 my-8 justify-between",children:[(0,p.jsx)("div",{className:"flex justify-center",children:(0,p.jsx)(r.Z,{size:"48px"})}),(0,p.jsx)("p",{className:"text-center pb-8",children:(0,p.jsx)("b",{children:"N\u1ec1n t\u1ea3ng t\xecm tr\u1ecd t\u1ed1t nh\u1ea5t cho sinh vi\xean"})}),(0,p.jsx)("div",{className:"flex justify-center",children:(0,p.jsxs)("p",{className:"text-justify w-4/5",children:["\u0110\u0103ng k\xfd ngay \u0111\u1ec3 c\xf9ng tham gia m\u1ea1ng l\u01b0\u1edbi v\u1edbi h\u01a1n ",(0,p.jsx)("b",{className:"text-2xl",children:"100.000"})," nh\xe0 cung c\u1ea5p"]})}),(0,p.jsx)("div",{className:"h-1/2",children:(0,p.jsx)("img",{src:a,className:"h-full w-auto",alt:"illus"})}),(0,p.jsx)("div",{className:"w-full flex justify-center",children:(0,p.jsx)(s.Z,{})})]}),(0,p.jsx)("div",{className:"col-span-5 bg-gray-50 lg:col-span-2 rounded-xl shadow-lg",children:(0,p.jsx)(Z,{})})]})})]})}},7189:function(){},8862:function(e,n,t){e.exports=t.p+"static/media/default-avatar.fba0f252d74d15a3cfc5.jpg"},7149:function(e,n,t){e.exports=t.p+"static/media/login-illus-1.1111f0cee9ba0ccd298a.jpg"}}]);
//# sourceMappingURL=541.55f24dd7.chunk.js.map