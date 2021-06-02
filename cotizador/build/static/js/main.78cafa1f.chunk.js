(this.webpackJsonpcotizador=this.webpackJsonpcotizador||[]).push([[0],{21:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var a,c,r,o,i,s,l,j,d=t(1),b=t.n(d),u=t(7),p=t.n(u),O=(t(21),t(9)),x=t(2),m=t(3),h=t(0),g=m.a.header(a||(a=Object(x.a)(["\n    background-color: #26C6DA;\n    padding: 10px;\n    font-weight: bold;\n    color: #FFFFFF;\n"]))),v=m.a.h1(c||(c=Object(x.a)(["\n    font-size: 2rem;\n    margin: 0;\n    font-family: 'Slabo 27px', serif;\n    text-align: center;\n\n"]))),f=function(e){var n=e.titulo;return Object(h.jsx)(g,{children:Object(h.jsx)(v,{children:n})})},F=t(11),k=t(13);function C(e){return e.charAt(0).toUpperCase()+e.slice(1)}var y,w,z,S,A,D,N=m.a.div(r||(r=Object(x.a)(["\n    display: flex;\n    margin-bottom: 1rem;\n    align-items: center;\n"]))),T=m.a.label(o||(o=Object(x.a)(["\n    flex: 0 0 100px;\n"]))),E=m.a.select(i||(i=Object(x.a)(["\n    display: block;\n    width: 100%;\n    padding: 1rem;\n    border: 1px solid #e1e1e1;\n    --webkit-appearance: none;\n"]))),P=m.a.input(s||(s=Object(x.a)(["\n    margin: 0 1rem;\n"]))),R=m.a.button(l||(l=Object(x.a)(["\n    background-color: #00838F;\n    font-size: 16px;\n    width: 100%;\n    padding: 1rem;\n    color: #fff;\n    text-transform: uppercase;\n    font-weight: bold;\n    border: none;\n    transition: background-color .3s ease;\n    margin-top: 2rem;\n\n    &:hover {\n        background-color: #26C6DA;\n        cursor: pointer;\n    }\n"]))),B=m.a.div(j||(j=Object(x.a)(["\n    background-color: red;\n    color: white;\n    padding: 1rem;\n    width: 100%;\n    text-align: center;\n    margin-bottom: 2rem;\n"]))),M=function(e){var n=e.guardarResumen,t=e.guardarCargando,a=Object(d.useState)({marca:"",year:"",plan:""}),c=Object(O.a)(a,2),r=c[0],o=c[1],i=Object(d.useState)(!1),s=Object(O.a)(i,2),l=s[0],j=s[1],b=r.marca,u=r.year,p=r.plan,x=function(e){o(Object(k.a)(Object(k.a)({},r),{},Object(F.a)({},e.target.name,e.target.value)))};return Object(h.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==b.trim()&&""!==u.trim()&&""!==p.trim()){j(!1);var a=2e3,c=function(e){return(new Date).getFullYear()-e}(u);a-=3*c*a/100,a=function(e){var n;switch(e){case"europeo":n=1.3;break;case"americano":n=1.15;break;case"asiatico":n=1.05}return n}(b)*a;var o=function(e){return"basico"===e?1.2:1.5}(p);a=parseFloat(o*a).toFixed(2),t(!0),setTimeout((function(){t(!1),n({cotizacion:Number(a),datos:r})}),3e3)}else j(!0)},children:[l?Object(h.jsx)(B,{children:"Todos los campos son obligatorios"}):null,Object(h.jsxs)(N,{children:[Object(h.jsx)(T,{children:"Marca"}),Object(h.jsxs)(E,{name:"marca",value:b,onChange:x,children:[Object(h.jsx)("option",{value:"",children:"--Seleccione"}),Object(h.jsx)("option",{value:"americano",children:"Americano"}),Object(h.jsx)("option",{value:"europeo",children:"Europeo"}),Object(h.jsx)("option",{value:"asiatico",children:"Asiatico"})]})]}),Object(h.jsxs)(N,{children:[Object(h.jsx)(T,{children:"A\xf1o"}),Object(h.jsxs)(E,{name:"year",value:u,onChange:x,children:[Object(h.jsx)("option",{value:"",children:"-- Seleccione --"}),Object(h.jsx)("option",{value:"2021",children:"2021"}),Object(h.jsx)("option",{value:"2020",children:"2020"}),Object(h.jsx)("option",{value:"2019",children:"2019"}),Object(h.jsx)("option",{value:"2018",children:"2018"}),Object(h.jsx)("option",{value:"2017",children:"2017"}),Object(h.jsx)("option",{value:"2016",children:"2016"}),Object(h.jsx)("option",{value:"2015",children:"2015"}),Object(h.jsx)("option",{value:"2014",children:"2014"}),Object(h.jsx)("option",{value:"2013",children:"2013"}),Object(h.jsx)("option",{value:"2012",children:"2012"})]})]}),Object(h.jsxs)(N,{children:[Object(h.jsx)(T,{children:"Plan"}),Object(h.jsx)(P,{type:"radio",name:"plan",value:"basico",checked:"basico"===p,onChange:x})," B\xe1sico",Object(h.jsx)(P,{type:"radio",name:"plan",value:"completo",checked:"completo"===p,onChange:x})," Completo"]}),Object(h.jsx)(R,{type:"submit",children:"Cotizar"})]})},I=m.a.div(y||(y=Object(x.a)(["\n    padding: 1rem;\n    text-align: center;\n    background-color: #00838F;\n    color: #fff;\n    margin-top: 1rem;\n"]))),J=function(e){var n=e.datos,t=n.marca,a=n.year,c=n.plan;return""===t||""===a||""===c?null:Object(h.jsxs)(I,{children:[Object(h.jsx)("h2",{children:"Resumen de Cotizaci\xf3n"}),Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:["Marca: ",C(t)]}),Object(h.jsxs)("li",{children:["Plan: ",C(c)]}),Object(h.jsxs)("li",{children:["A\xf1o: ",a]})]})]})},L=t(32),q=t(31),U=m.a.p(w||(w=Object(x.a)(["\n    background-color: rgb(127, 224, 237);\n    margin-top: 2rem;\n    padding: 1rem;\n    text-align: center;\n"]))),Y=m.a.div(z||(z=Object(x.a)(["\n    text-align: center;\n    padding: .5rem;\n    border: 1px solid #26C6DA;\n    background-color: rgb(127, 224, 237);\n    margin-top: 1rem;\n    position: relative;\n"]))),$=m.a.p(S||(S=Object(x.a)(["\n    color: #00838F;\n    padding: 1rem;\n    text-transform: uppercase;\n    font-weight: bold;\n    margin: 0;\n"]))),G=function(e){var n=e.cotizacion;return 0===n?Object(h.jsx)(U,{children:"Elige marca, a\xf1o y tipo de seguro"}):Object(h.jsx)(Y,{children:Object(h.jsx)(L.a,{component:"span",className:"resultado",children:Object(h.jsx)(q.a,{classNames:"resultado",timeout:{enter:500,exit:500},children:Object(h.jsxs)($,{children:["El Total es: $ ",Object(h.jsxs)("span",{children:[" ",n," "]})]})},n)})})},H=(t(28),function(){return Object(h.jsxs)("div",{className:"spinner",children:[Object(h.jsx)("div",{className:"dot1"}),Object(h.jsx)("div",{className:"dot2"})]})}),K=t(10),Q=t.n(K),V=m.a.div(A||(A=Object(x.a)(["\n  max-width: 600px;\n  margin: 0 auto;\n"]))),W=m.a.div(D||(D=Object(x.a)(["\n  background-color: #FFFFFF;\n  padding: 3rem;\n"])));f.propTypes={titulo:Q.a.string.isRequired};var X=function(){var e=Object(d.useState)({cotizacion:0,datos:{marca:"",year:"",plan:""}}),n=Object(O.a)(e,2),t=n[0],a=n[1],c=Object(d.useState)(!1),r=Object(O.a)(c,2),o=r[0],i=r[1],s=t.cotizacion,l=t.datos;return Object(h.jsxs)(V,{children:[Object(h.jsx)(f,{titulo:"Cotizador de Seguros"}),Object(h.jsxs)(W,{children:[Object(h.jsx)(M,{guardarResumen:a,guardarCargando:i}),o?Object(h.jsx)(H,{}):null,Object(h.jsx)(J,{datos:l}),o?null:Object(h.jsx)(G,{cotizacion:s})]})]})},Z=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,33)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),a(e),c(e),r(e),o(e)}))};p.a.render(Object(h.jsx)(b.a.StrictMode,{children:Object(h.jsx)(X,{})}),document.getElementById("root")),Z()}},[[29,1,2]]]);
//# sourceMappingURL=main.78cafa1f.chunk.js.map