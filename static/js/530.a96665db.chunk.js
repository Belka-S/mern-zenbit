"use strict";(self.webpackChunkmern_zenbit_test=self.webpackChunkmern_zenbit_test||[]).push([[530],{1530:function(e,n,r){r.r(n),r.d(n,{default:function(){return b}});var s=r(9439),t=r(2791),i=r(6836),a=r(5705),u=r(9434),c=r(1839),o=r(8877),l=r(2916),d=r(77),j=r(6635),h=r(1073),p=r(7775),x=r(3329),f={name:"",email:"",password:""},g=function(e){var n=e.setIsVerify,r=(0,u.I0)(),i=(0,t.useState)("password"),g=(0,s.Z)(i,2),m=g[0],v=g[1],b=function(e){var n=e.values,r=e.errors,s=e.key,t=!n[s]&&"noValue",i=r[s]?"error":"success";return t||i},k=function(e){var n=e.errors,r=e.values,s=Object.keys(n).length;return Object.keys(r).some((function(e){return!r[e]}))||s};return(0,x.jsx)(a.J9,{initialValues:f,validationSchema:h.if,onSubmit:function(e,s){r((0,j.yY)(e)).unwrap().then((function(e){return n(!e.result.user.verifiedEmail)})).catch((function(e){return console.log(e)})),s.resetForm()},children:function(e){var n=e.values,r=e.errors;return(0,x.jsxs)(p.l0,{children:[(0,x.jsx)(p.pG,{children:(0,x.jsx)("h2",{children:"Sign Up"})}),Object.keys(f).map((function(e){return(0,x.jsxs)(t.Fragment,{children:[(0,x.jsxs)(p.__,{children:[e.at(0).toUpperCase()+e.substring(1),(0,x.jsx)("pre",{children:" "}),(0,x.jsx)(p.CV,{name:e,component:"span"})]}),(0,x.jsxs)(p.jJ,{children:[(0,x.jsx)(p.gN,{type:"password"===e?m:e,name:e,placeholder:e.at(0).toUpperCase()+e.substring(1),validation:b({values:n,errors:r,key:e})}),"password"===e&&(0,x.jsx)(l.Z,{toggle:m,setToggle:v}),n[e]&&r[e]&&(0,x.jsx)(p.Pz,{}),n[e]&&!r[e]&&(0,x.jsx)(p.tm,{})]})]},e)})),(0,x.jsx)(o.Z,{disabled:k({values:n,errors:r}),children:"Sign up"}),(0,x.jsx)(d.Z,{}),(0,x.jsxs)("span",{className:"toggler",children:["Have an account? ",(0,x.jsx)(c.Z,{to:"/signin",children:"Log In"})]})]})}})},m=r(1153),v=r(426),b=function(){var e=(0,t.useState)(!1),n=(0,s.Z)(e,2),r=n[0],a=n[1];return(0,x.jsxs)(i.Z,{children:[(0,x.jsx)(g,{setIsVerify:a}),r&&(0,x.jsx)(m.Z,{onClick:function(){return a(!r)},children:(0,x.jsx)(v.Z,{})})]})}}}]);
//# sourceMappingURL=530.a96665db.chunk.js.map