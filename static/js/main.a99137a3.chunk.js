(this.webpackJsonpdtmoney=this.webpackJsonpdtmoney||[]).push([[0],{102:function(n,t,e){"use strict";e.r(t);var r,a,i,o=e(34),c=e(1),s=e.n(c),d=e(28),l=e.n(d),b=e(6),u=e(17),h=e.n(u),j=e.p+"static/media/logo.614d71d1.svg",m=e(3),p=e(4),g=p.b.header(r||(r=Object(m.a)(["\n  background: var(--blue);\n"]))),x=p.b.div(a||(a=Object(m.a)(["\n  max-width: 1120px;\n  margin: 0 auto;\n\n  padding: 2rem 1rem 12rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  button {\n    font-size: 1rem;\n    color: var(--white);\n    background: var(--blue-light);\n    border: 0;\n    padding: 0 2rem;\n    border-radius: 0.25rem;\n    height: 3rem;\n    \n    transition: filter 0.2s;\n\n    &:hover {\n      filter: brightness(0.9);\n    }\n  }\n"]))),O=e(0);function f(n){var t=n.onOpenNewTransactionModal;return Object(O.jsx)(g,{children:Object(O.jsxs)(x,{children:[Object(O.jsx)("img",{src:j,alt:"dtmoney"}),Object(O.jsx)("button",{type:"button",onClick:t,children:"Nova transa\xe7\xe3o"})]})})}var v,y,w=Object(p.a)(i||(i=Object(m.a)(["\n  :root {\n    --background: #F0F2F5;\n    --red: #E52E4D;\n    --blue: #5429CC;\n    --white: #FFFFFF;\n    --green: #33CC95;\n\n    --blue-light: #6933FF;\n\n    --text-title: #363F5F;\n    --text-body: #969CB3;\n\n    --shape: #FFFFFF;\n\n    --input-background: #E7E9EE;\n    --border: #D7D7D7;\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  //font-size: 16px (Desktop)\n  html {\n    @media (max-width: 1080px) {\n      font-size: 93.75%; // 15px\n    }\n\n    @media (max-width: 720px) {\n      font-size: 87.5%; // 14px\n    }\n  }\n\n  body {\n    background: var(--background);\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, textarea, button {\n    font-family: 'Poppins', sans-serif;\n    font-weight: 400;\n  }\n\n  h1, h2, h3, h4, h5, h6, strong {\n    font-weight: 600;\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n  [disabled]{\n    opacity: 0.6;\n    cursor: not-allowed;\n  }\n\n  .react-modal-overlay {\n    background: rgba(0, 0, 0, 0.5);\n\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .react-modal-content {\n    width: 100%;\n    max-width: 576px;\n    background: var(--background);\n    padding: 3rem;\n    position: relative;\n    border-radius: 0.25rem;\n  }\n\n  .react-modal-close {\n    position: absolute;\n    right: 1.5rem;\n    top: 1.5rem;\n    border: 0;\n    background: transparent;\n\n    transition: filter 0.2s;\n\n    &:hover {\n      filter: brightness(0.7);\n    }\n  }\n"]))),k=p.b.main(v||(v=Object(m.a)(["\n  max-width: 1120px;\n  margin: 0 auto;\n  padding: 2.5rem 1rem;\n"]))),C=e.p+"static/media/income.d58effe2.svg",F=e.p+"static/media/outcome.6eb96d30.svg",S=e.p+"static/media/total.e90c2d1e.svg",D=e(8),E=e.n(D),N=e(64),T=e(13),A=e(53),z=e.n(A).a.create({baseURL:"https://leopinnheiro.github.io/dtmoney/api"}),R=Object(c.createContext)({});function B(n){var t=n.children,e=Object(c.useState)([]),r=Object(b.a)(e,2),a=r[0],i=r[1];function o(){return(o=Object(T.a)(E.a.mark((function n(t){var e,r,o;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,z.post("/transactions",t);case 2:e=n.sent,r=e.data.transaction,o=[].concat(Object(N.a)(a),[r]),i(o),d(o);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function s(){return(s=Object(T.a)(E.a.mark((function n(t){var e;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,z.delete("/transactions/".concat(t));case 2:e=a.filter((function(n){return n.id!==t})),i(e),d(e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){localStorage.setItem("@dtmoney:transactions",JSON.stringify(n))}return Object(c.useEffect)((function(){z.get("/transactions").then((function(n){return i(n.data.transactions)}))}),[]),Object(O.jsx)(R.Provider,{value:{transactions:a,createTransaction:function(n){return o.apply(this,arguments)},removeTransaction:function(n){return s.apply(this,arguments)}},children:t})}function J(){return Object(c.useContext)(R)}function I(n){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(n)}var V=p.b.div(y||(y=Object(m.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2rem;\n  margin-top: -10rem;\n\n  div {\n    background: var(--shape);\n    padding: 1.5rem 2rem;\n    border-radius: 0.25rem;\n    color: var(--text-title);\n\n    header {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n    }\n\n    strong {\n      display: block;\n      margin-top: 1rem;\n      font-size: 2rem;\n      font-weight: 500;\n      line-height: 3rem;\n      word-break: break-all;\n    }\n\n    &.highlight-background {\n      background: var(--green);\n      color: var(--white);\n    }\n  }\n"])));function q(){var n=J().transactions.reduce((function(n,t){return"deposit"===t.type?n.deposits+=t.amount:n.withdraws+=t.amount,n.total+=t.amount,n}),{deposits:0,withdraws:0,total:0});return Object(O.jsxs)(V,{children:[Object(O.jsxs)("div",{children:[Object(O.jsxs)("header",{children:[Object(O.jsx)("p",{children:"Entradas"}),Object(O.jsx)("img",{src:C,alt:"Entradas"})]}),Object(O.jsx)("strong",{children:I(n.deposits)})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("header",{children:[Object(O.jsx)("p",{children:"Sa\xeddas"}),Object(O.jsx)("img",{src:F,alt:"Sa\xeddas"})]}),Object(O.jsx)("strong",{children:I(n.withdraws)})]}),Object(O.jsxs)("div",{className:"highlight-background",children:[Object(O.jsxs)("header",{children:[Object(O.jsx)("p",{children:"Total"}),Object(O.jsx)("img",{src:S,alt:"Total"})]}),Object(O.jsx)("strong",{children:I(n.total)})]})]})}var Z,M,L=e.p+"static/media/trash.cbdaeda6.svg",P=p.b.div(Z||(Z=Object(m.a)(["\n  margin-top: 4rem;\n\n  table {\n    width: 100%;\n    border-spacing: 0 0.5rem;\n\n    th {\n      color: var(--text-body);\n      font-weight: 400;\n      padding: 1rem 2rem;\n      text-align: left;\n      line-height: 1.5rem;\n    }\n\n    td {\n      padding: 1rem 2rem;\n      border: 0;\n      background: var(--shape);\n      font-weight: 400;\n      color: var(--text-body);\n      border-radius: 0.25rem;\n\n      &:first-child {\n        color: var(--text-title);\n      }\n\n      &.deposit {\n        color: var(--green);\n      }\n\n      &.withdraw {\n        color: var(--red);\n      }\n\n      &.amount {\n        word-break: break-all;\n        max-width: 290px;\n      }\n    }\n  }\n"]))),H=p.b.td(M||(M=Object(m.a)(["\n  button {\n    display: flex;\n    border: 0;\n    color: var(--red);\n    background: transparent;\n    margin-left: auto;\n    margin-right: auto;\n    \n    transition: filter 0.2s;\n\n    &:hover {\n      filter: brightness(0.8);\n    }\n    \n  }\n"])));function U(){var n=J(),t=n.transactions,e=n.removeTransaction;return Object(O.jsx)(P,{children:Object(O.jsxs)("table",{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"T\xedtulo"}),Object(O.jsx)("th",{children:"Valor"}),Object(O.jsx)("th",{children:"Categoria"}),Object(O.jsx)("th",{children:"Data"}),Object(O.jsx)("th",{children:"A\xe7\xf5es"})]})}),Object(O.jsx)("tbody",{children:t.map((function(n){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:n.title}),Object(O.jsx)("td",{className:"amount "+n.type,children:I(n.amount)}),Object(O.jsx)("td",{children:n.category}),Object(O.jsx)("td",{children:(t=n.createdAt,new Intl.DateTimeFormat("pt-BR").format(new Date(t)))}),Object(O.jsx)(H,{children:Object(O.jsx)("button",{className:"remove-transaction",type:"button",onClick:function(){return e(n.id)},children:Object(O.jsx)("img",{src:L,alt:"Remover transa\xe7\xe3o"})})})]},n.id);var t}))})]})})}function G(){return Object(O.jsxs)(k,{children:[Object(O.jsx)(q,{}),Object(O.jsx)(U,{})]})}var K,Q,W,X=e.p+"static/media/close.f62862c6.svg",Y=e(33),$=p.b.form(K||(K=Object(m.a)(['\n  h2 {\n    color: var(--text-title);\n    font-size: 1.5rem;\n    margin-bottom: 2rem;\n  }\n\n  input {\n    width: 100%;\n    padding: 0 1.5rem;\n    height: 4rem;\n    border-radius: 0.25rem;\n\n    border: 1px solid var(--border);\n    background: var(--input-background);\n\n    font-weight: 400;\n    font-size: 1rem;\n\n    &::placeholder {\n      color: var(--text-body);\n    }\n\n    & + input {\n      margin-top: 1rem;\n    }\n  }\n\n  button[type="submit"] {\n    width: 100%;\n    padding: 0 1.5rem;\n    height: 4rem;\n    background: var(--green);\n    color: var(--white);\n    border-radius: 0.25rem;\n    border: 0;\n    font-size: 1rem;\n    margin-top: 1.5rem;\n    font-weight: 600;\n\n    transition: filter 0.2s;\n\n    &:hover {\n      filter: brightness(0.9);\n    }\n  }\n']))),_=p.b.div(Q||(Q=Object(m.a)(["\n  margin: 1rem 0;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.5rem;\n"]))),nn={green:"#33CC95",red:"#E52E4D"},tn=p.b.button(W||(W=Object(m.a)(["\n  height: 4rem;\n  border: 1px solid var(--border);\n  border-radius: 0.25rem;\n\n  background: ",";\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  transition: border-color 0.2s;\n\n  &:hover {\n    border-color: ",";\n  }\n\n  img {\n    width: 20px;\n    height: 20px;\n  }\n\n  span {\n    display: inline-block;\n    margin-left: 1rem;\n    font-size: 1rem;\n    color: var(--text-title);\n  }\n"])),(function(n){return n.isActive?Object(Y.b)(.9,nn[n.activeColor]):"transparent"}),Object(Y.a)(.1,"#D7D7D7"));function en(n){var t=n.isOpen,e=n.onRequestClose,r=J().createTransaction,a=Object(c.useState)(""),i=Object(b.a)(a,2),o=i[0],s=i[1],d=Object(c.useState)(0),l=Object(b.a)(d,2),u=l[0],j=l[1],m=Object(c.useState)(""),p=Object(b.a)(m,2),g=p[0],x=p[1],f=Object(c.useState)("deposit"),v=Object(b.a)(f,2),y=v[0],w=v[1];function k(){return(k=Object(T.a)(E.a.mark((function n(t){return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,r({title:o,category:g,type:y,amount:u});case 3:s(""),j(0),x(""),w("deposit"),e();case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(O.jsxs)(h.a,{isOpen:t,onRequestClose:e,overlayClassName:"react-modal-overlay",className:"react-modal-content",children:[Object(O.jsx)("button",{type:"button",onClick:e,className:"react-modal-close",children:Object(O.jsx)("img",{src:X,alt:"Fechar modal"})}),Object(O.jsxs)($,{onSubmit:function(n){return k.apply(this,arguments)},children:[Object(O.jsx)("h2",{children:"Cadastrar transa\xe7\xe3o"}),Object(O.jsx)("input",{placeholder:"T\xedtulo",value:o,onChange:function(n){return s(n.target.value)}}),Object(O.jsx)("input",{type:"number",placeholder:"Valor",value:u,onChange:function(n){return j(Number(n.target.value))}}),Object(O.jsxs)(_,{children:[Object(O.jsxs)(tn,{type:"button",onClick:function(){w("deposit")},isActive:"deposit"===y,activeColor:"green",children:[Object(O.jsx)("img",{src:C,alt:"Entrada"}),Object(O.jsx)("span",{children:"Entrada"})]}),Object(O.jsxs)(tn,{type:"button",onClick:function(){w("withdraw")},isActive:"withdraw"===y,activeColor:"red",children:[Object(O.jsx)("img",{src:F,alt:"Sa\xedda"}),Object(O.jsx)("span",{children:"Sa\xedda"})]})]}),Object(O.jsx)("input",{placeholder:"Categoria",value:g,onChange:function(n){return x(n.target.value)}}),Object(O.jsx)("button",{type:"submit",children:"Cadastrar"})]})]})}function rn(){var n=Object(c.useState)(!1),t=Object(b.a)(n,2),e=t[0],r=t[1];return Object(O.jsxs)(B,{children:[Object(O.jsx)(f,{onOpenNewTransactionModal:function(){r(!0)}}),Object(O.jsx)(G,{}),Object(O.jsx)(en,{isOpen:e,onRequestClose:function(){r(!1)}}),Object(O.jsx)(w,{})]})}h.a.setAppElement("#root");var an=e(35),on=e(54),cn=localStorage.getItem("@dtmoney:transactions");Object(an.b)({models:{transaction:an.a},seeds:function(n){n.db.loadData({transactions:cn?JSON.parse(cn):on})},routes:function(){var n=this;this.namespace="dtmoney/api",this.get("/transactions",(function(){return n.schema.all("transaction")})),this.post("/transactions",(function(n,t){var e=JSON.parse(t.requestBody);return n.create("transaction",Object(o.a)(Object(o.a)({},e),{},{amount:"withdraw"===e.type?-1*e.amount:e.amount,createdAt:new Date}))})),this.del("/transactions/:id")}}),l.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(rn,{})}),document.getElementById("root"))},54:function(n){n.exports=JSON.parse('[{"id":"1","title":"Desenvolvimento de site","type":"deposit","category":"Venda","amount":12000,"createdAt":"2021-04-14T00:00:00.000Z"},{"id":"2","title":"Hamb\xfarguer","type":"withdraw","category":"Alimenta\xe7\xe3o","amount":-59,"createdAt":"2021-04-10T00:00:00.000Z"},{"id":"3","title":"Aluguel","type":"withdraw","category":"Despesas fixas","amount":-1200,"createdAt":"2021-04-05T00:00:00.000Z"},{"id":"4","title":"Venda de computador","type":"deposit","category":"Venda","amount":5400.5,"createdAt":"2021-04-13T00:00:00.000Z"}]')}},[[102,1,2]]]);
//# sourceMappingURL=main.a99137a3.chunk.js.map