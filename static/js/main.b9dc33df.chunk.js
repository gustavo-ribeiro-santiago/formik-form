(this["webpackJsonptest-react-app"]=this["webpackJsonptest-react-app"]||[]).push([[0],{22:function(e,s,r){"use strict";r.r(s);var t=r(0),i=r.n(t),a=r(10),l=r.n(a),n=r(13),d=r(2);var o=function(){const e=Object(n.a)({initialValues:{email:"",password:""},onSubmit:e=>{console.log("form: ",e),alert("Login Successful")},validate:e=>{let s={};return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||(s.email="Username should be an email"),e.email||(s.email="Field required"),e.password||(s.password="Field required"),s}});return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(d.jsx)("div",{children:"Email"}),Object(d.jsx)("input",{id:"emailField",name:"email",type:"text",onChange:e.handleChange,values:e.values.email}),e.errors.email?Object(d.jsx)("div",{id:"emailError",style:{color:"red"},children:e.errors.email}):null,Object(d.jsx)("div",{children:"Password"}),Object(d.jsx)("input",{id:"pswField",name:"password",type:"text",onChange:e.handleChange,values:e.values.password}),e.errors.password?Object(d.jsx)("div",{id:"pswError",style:{color:"red"},children:e.errors.password}):null,Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{id:"submitBtn",type:"Submit",children:"Submit"})]})})};l.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(o,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.b9dc33df.chunk.js.map