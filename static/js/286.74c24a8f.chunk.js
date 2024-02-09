"use strict";(self.webpackChunkteam_five=self.webpackChunkteam_five||[]).push([[286],{7286:function(n,e,t){t.r(e),t.d(e,{default:function(){return dt}});var i,o,r,a,s,p,l,d,c,x,h,u,m,g,f,b=t(9439),v=t(168),y=t(7924),j=y.ZP.div(i||(i=(0,v.Z)(["\n  display: flex;\n  width: 79px;\n  height: 32px;\n  gap: 8px;\n"]))),Z=y.ZP.p(o||(o=(0,v.Z)(["\n  margin: 5px 0;\n  font-family: 'Poppins-Medium';\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing:-2;\n  color: var(--primaryTextColor);\n"]))),w=y.ZP.img(r||(r=(0,v.Z)(["\n  width: 32px;\n  height: 32px;\n  cursor: pointer;\n  border: 1px solid black;\n"]))),k=y.ZP.button(a||(a=(0,v.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 10px;\n  color: var(--primaryTextColor);\n  background:var(--modalBgColor);\n  border: 0;\n  cursor: pointer;\n  \n"]))),P=t(5705),C=y.ZP.div(s||(s=(0,v.Z)(["\n  position: relative;\n  padding: 24px;\n  width: 100%;\n  height: 440px;\n  border-radius: 8px;\n  background: var(--modalBgColor);\n\n  @media only screen and (min-width: 375px) {\n    width: 335px;\n  }\n\n  @media only screen and (min-width: 768px) {\n    width: 400px;\n  }\n"]))),T=y.ZP.h3(p||(p=(0,v.Z)(["\n  margin: 0 0 24px 0;\n  font-family: 'Poppins-Medium';\n  font-size: 18px;\n  letter-spacing: -0.02em;\n  color: var(--primaryTextColor);\n"]))),z=(0,y.ZP)(P.l0)(l||(l=(0,v.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n"]))),S=(0,y.ZP)(P.gN)(d||(d=(0,v.Z)(["\n  margin-bottom: 25px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 68px;\n  height: 68px;\n  /* border: 1px solid black; */\n  cursor: pointer;\n  border-radius: 8px;\n"]))),M=(0,y.ZP)(P.gN)(c||(c=(0,v.Z)(["\n  position: relative;\n  margin-bottom: 14px;\n  padding: 14px 18px;\n  width: 100%;\n  outline: transparent;\n  outline-offset: -1px;\n  border: 1px solid var(--accent);\n  opacity: 0.4;\n  border-radius: 8px;\n  font-size: 14px;\n  letter-spacing: -0.02em;\n  color: var(--primaryTextColor);\n  transition: var(--transition);\n\n  &:focus,\n  &:active {\n    opacity: 1;\n    &::placeholder{\n      color:transparent;\n    }\n    \n  }\n"]))),B=(0,y.ZP)(P.gN)(x||(x=(0,v.Z)(["\n  margin-bottom: 24px;\n  padding: 14px 18px;\n  width: 100%;\n  outline: transparent;\n  outline-offset: -1px;\n  border: 1px solid var(--accent);\n  opacity: 0.4;\n  border-radius: 8px;\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -2;\n  color: var(--primaryTextColor);\n  transition: var(--transition);\n\n  &:focus,\n  &:active {\n    opacity: 1;\n    &::placeholder{\n      color:transparent;\n    }\n  }\n"]))),J=y.ZP.button(h||(h=(0,v.Z)(["\n  width: 100%;\n  background: var(--accent);\n  border: 0;\n  border-radius: 8px;\n  padding: 14px 126px;\n  color: var(--primaryTextColor);\n  font-family: 'Poppins-Medium';\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -2;\n"]))),q=y.ZP.button(u||(u=(0,v.Z)(["\n  position: absolute;\n  top: 125px;\n  right: 155px;\n\n  width: 24px;\n  height: 24px;\n  background: var(--accent);\n  border-radius: 8px;\n  border: 0;\n\n  @media only screen and (min-width: 768px) {\n    right: 186px;\n  }\n"]))),_=(0,y.ZP)(P.Bc)(m||(m=(0,v.Z)(["\n  /* color: red;\n  font-size: 14px; */\n\n  position: absolute;\n  top: 2px;\n  right: 4px;\n\n  color: red;\n  font-size: 12px;\n"]))),F=y.ZP.label(g||(g=(0,v.Z)(["\n  position: relative;\n  display: block;\n"]))),N=y.ZP.label(f||(f=(0,v.Z)(["\n  position: relative;\n  display: block;\n\n  svg {\n    position: absolute;\n    top: 16px;\n    right: 15px;\n    opacity:0,5;\n    &:active{\n      opacity:1;\n    }\n  }\n"]))),O=t(8007),R=t(7834),L=t(2598),I=t(4420),A=t(8323),D=t(184),E=O.Ry().shape({photo:O.Z_().url("invalid url"),name:O.Z_().min(2,"2 chars minimum").max(32,"32 chars maximum").matches(/^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/,"Invalin name ").required("this field is required"),email:O.Z_().email("Invalid email").required("this field is required"),password:O.Z_().min(8,"8 chars minimum").max(64,"64 chars maximum").matches(/^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/,"only latin letters, numbers and symbols").matches(/^\S*$/,"password must not contain spaces").required("this field is required ")}),H=function(){var n=(0,R.a)().user,e=(0,I.I0)();return(0,D.jsxs)(C,{children:[(0,D.jsx)(T,{children:"Edit profile"}),(0,D.jsx)(P.J9,{initialValues:{name:n.name,email:n.email,password:""},validationSchema:E,onSubmit:function(n,t){e((0,L.Vx)(n))},children:(0,D.jsxs)(z,{children:[(0,D.jsx)(S,{id:"photo",name:"photo",type:"file",accept:"image/*"}),(0,D.jsxs)(F,{children:[(0,D.jsx)(M,{id:"name",name:"name"}),(0,D.jsx)(_,{name:"name",component:"p"})]}),(0,D.jsxs)(F,{children:[(0,D.jsx)(M,{id:"email",name:"email",type:"email"}),(0,D.jsx)(_,{name:"email",component:"p"})]}),(0,D.jsxs)(N,{children:[(0,D.jsx)(A.J,{name:"eye",stroke:"var(--primaryTextColor)"}),(0,D.jsx)(B,{id:"password",name:"password",placeholder:"Enter or update your password"}),(0,D.jsx)(_,{name:"password",component:"p"})]}),(0,D.jsx)(J,{type:"submit",children:"Submit"})]})}),(0,D.jsx)(q,{children:(0,D.jsx)(A.J,{name:"plus",width:"10px",height:"10px",stroke:"var(--primaryTextColor)"})})]})},$=t(7948),V=t.n($),G=t(2791),U={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",padding:"0",transform:"translate(-50%, -50%)",boxShadow:"0px 4px 16px 0px #1616160D"},overlay:{background:"rgba(0,0,0,0.5)"}};V().setAppElement("#root");var W,Y,K,Q,X,nn,en,tn,on,rn,an,sn,pn,ln,dn,cn,xn,hn,un,mn,gn,fn,bn,vn,yn,jn,Zn,wn,kn,Pn,Cn,Tn,zn,Sn,Mn,Bn,Jn,qn,_n,Fn,Nn,On,Rn,Ln,In,An,Dn=function(){var n=(0,R.a)().user,e=(0,G.useState)(!1),t=(0,b.Z)(e,2),i=t[0],o=t[1];return(0,D.jsxs)(j,{children:[(0,D.jsx)(Z,{children:n.name}),(0,D.jsx)(w,{src:"",alt:"image user",onClick:function(){o(!0)}}),(0,D.jsxs)(V(),{isOpen:i,style:U,contentLabel:"Modal",children:[(0,D.jsx)(H,{}),(0,D.jsx)(k,{onClick:function(){o(!1)},children:(0,D.jsx)(A.J,{name:"close",stroke:"var(--primaryTextColor)"})})]})]})},En=function(){return(0,D.jsx)("div",{children:(0,D.jsx)(Dn,{})})},Hn=function(n){return n.boards.boards},$n=t(4136),Vn=t(5861),Gn=t(4687),Un=t.n(Gn),Wn=t(5294),Yn=t(5218),Kn=function(){var n=(0,Vn.Z)(Un().mark((function n(e){return Un().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Wn.Z.post("/support",e);case 3:Yn.ZP.success("Successfully sent!"),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),Yn.ZP.error("Oops. Something went wrong");case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),Qn=y.ZP.div(W||(W=(0,v.Z)(["\n  position: relative;\n  padding: 24px 29px 50px 24px;\n  width: 335px;\n  height: 355px;\n  background: var(--headerBgColor);\n  border-radius: 8px;\n  box-shadow: 0 4px 16px 0 var(--nonAccentTextColor);\n\n  /* @media only screen and (min-width: 375px) {\n    min-width: 0;\n    width: 345px;\n  } */\n\n  @media only screen and (min-width: 768px) {\n    width: 400px;\n    height: 355px;\n    padding: 24px;\n  }\n"]))),Xn=y.ZP.h3(Y||(Y=(0,v.Z)(["\n  font-family: 'Poppins-Medium';\n  font-size: 18px;\n  margin-bottom: 24px;\n  text-align: start;\n  letter-spacing: -0.02em;\n  color: var(--primaryTextColor);\n"]))),ne=(0,y.ZP)(P.l0)(K||(K=(0,v.Z)(["\n  /* position: relative; */\n  display: flex;\n  flex-direction: column;\n"]))),ee=(0,y.ZP)(P.gN)(Q||(Q=(0,v.Z)(["\n  position: relative;\n  margin-bottom: 14px;\n  padding: 14px 18px;\n  width: 100%;\n  outline: transparent;\n  outline-offset: -1px;\n  border: 1px solid var(--accent);\n  border-radius: 8px;\n  resize: none;\n\n  font-size: 14px;\n  font-weight: 400px;\n  line-height: 1.5;\n  color: var(--primaryTextColor);\n"]))),te=y.ZP.button(X||(X=(0,v.Z)(["\n  /* width: 100%; */\n  background: var(--accent);\n  border: 0;\n  border-radius: 8px;\n  padding: 14px 45%;\n  color: var(--primaryTextColor);\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  /* @media only screen and (min-width: 375px) {\n    padding: 14px 126px;\n  } */\n"]))),ie=(0,y.ZP)(P.Bc)(nn||(nn=(0,v.Z)(["\n  position: absolute;\n  top: 2px;\n  right: 4px;\n\n  color: red;\n  font-size: 12px;\n"]))),oe=y.ZP.label(en||(en=(0,v.Z)(["\n  position: relative;\n  display: block;\n"]))),re=y.ZP.button(tn||(tn=(0,v.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  padding: 0;\n  border: none;\n  background: none;\n  cursor: pointer;\n"]))),ae={emailForSupport:"",textMessage:""},se=O.Ry().shape({emailForSupport:O.Z_().email().required("This field is required"),textMessage:O.Z_().min(10,"It's can be up to 10 characters long").required("This field is required.")}),pe=function(n){var e=n.onClose;return(0,D.jsxs)(Qn,{children:[(0,D.jsx)(Xn,{children:"Need help"}),(0,D.jsx)(re,{type:"button",onClick:e,children:(0,D.jsx)(A.J,{stroke:"var(--primaryTextColor)",name:"close",width:"18",height:"18"})})," ",(0,D.jsx)(P.J9,{initialValues:ae,validationSchema:se,onSubmit:function(n,e){Kn(n),e.resetForm()},children:(0,D.jsxs)(ne,{children:[(0,D.jsxs)(oe,{children:[(0,D.jsx)(ee,{type:"email",name:"emailForSupport",placeholder:"Email address"}),(0,D.jsx)(ie,{component:"p",name:"emailForSupport"})]}),(0,D.jsxs)(oe,{children:[(0,D.jsx)(ee,{rows:4,as:"textarea",type:"text",name:"textMessage",placeholder:"Comment"}),(0,D.jsx)(ie,{component:"p",name:"textMessage"})]}),(0,D.jsx)(te,{type:"submit",children:"Send"})]})})]})},le=y.ZP.div(on||(on=(0,v.Z)(["\n  height: 238px;\n  padding: 14px;\n  margin-bottom: 24px;\n  font-size: 12px;\n  border-radius: 8px;\n  background-color: var(--secondaryBgColor);\n\n  p {\n    margin-top: 14px;\n    margin-bottom: 18px;\n    line-height: 1.33333;\n    letter-spacing: 0;\n  }\n"]))),de=y.ZP.button(rn||(rn=(0,v.Z)(["\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: none;\n  display: flex;\n  align-items: center;\n\n  span {\n    margin-left: 8px;\n    color: var(--primaryTextColor);\n    font-family: 'Poppins-Medium';\n  }\n"]))),ce={content:{width:"fit-content",height:"fit-content",padding:0,top:"50%",left:"50%",transform:"translate(-50%, -50%)",boxShadow:"0px 4px 16px 0px #1616160D"},overlay:{background:"rgba(0,0,0,0.5)"}},xe=function(){var n=(0,G.useState)(!1),e=(0,b.Z)(n,2),t=e[0],i=e[1],o=function(){i(!1)};return(0,D.jsxs)(le,{children:[(0,D.jsxs)("picture",{children:[(0,D.jsx)("source",{srcSet:" https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/cactus-1x.webp 1x, https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/cactus-2x.webp 2x "}),(0,D.jsx)("img",{src:"https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/cactus-1x.webp",width:"54",height:"78",alt:"little cute cactus"})]}),(0,D.jsxs)("p",{children:["If you need help with"," ",(0,D.jsx)("span",{style:{color:"var(--accent)"},children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),(0,D.jsxs)(de,{type:"button",onClick:function(){i(!0)},children:[(0,D.jsx)("div",{style:{stroke:"var(--primaryTextColor)"},children:(0,D.jsx)(A.J,{name:"help",width:"20",height:"20"})}),(0,D.jsx)("span",{children:"Need help?"})]}),(0,D.jsx)(V(),{isOpen:t,onRequestClose:o,style:ce,contentLabel:"Need help modal",children:(0,D.jsx)(pe,{onClose:o})})]})},he=y.ZP.div(an||(an=(0,v.Z)(["\n  display: flex;\n  justify-content: space-between;\n  border-top: rgba(255, 255, 255, 0.1) solid 1px;\n  border-bottom: rgba(255, 255, 255, 0.1) solid 1px;\n  padding-top: 14px;\n  padding-bottom: 14px;\n  margin-bottom: 40px;\n"]))),ue=y.ZP.button(sn||(sn=(0,v.Z)(["\n  width: 40px;\n  height: 36px;\n  background-color: var(--btnPlus);\n  border: none;\n  border-radius: 6px;\n  stroke: var(--primaryBgColor);\n  transition: var(--transition);\n\n  &:hover,\n  &:focus,\n  &:active {\n    background-color: var(--btnPlusHover);\n  }\n"]))),me=y.ZP.div(pn||(pn=(0,v.Z)(["\n  position: relative;\n  padding: 24px;\n  width: 335px;\n  height: 433px;\n\n  border-radius: 8px;\n\n  background-color: var(--modalBgColor);\n\n  stroke: var(--primaryTextColor);\n\n  @media (min-width: 768px) {\n    width: 350px;\n  }\n"]))),ge=y.ZP.h3(ln||(ln=(0,v.Z)(["\n  margin-bottom: 24px;\n\n  font-family: 'Poppins-Medium';\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.5;\n  letter-spacing: -0.02em;\n\n  color: var(--primaryTextColor);\n"]))),fe=y.ZP.button(dn||(dn=(0,v.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n\n  border: none;\n  outline: none;\n  background-color: inherit;\n\n  opacity: 0.5;\n  transition: opacity var(--transition);\n\n  > svg {\n    stroke: var(--primaryTextColor);\n  }\n\n  &:hover,\n  &:focus {\n    opacity: 1;\n  }\n\n  cursor: pointer;\n"]))),be=(0,y.ZP)(P.l0)(cn||(cn=(0,v.Z)(["\n  font-family: 'Poppins-Medium';\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.02em;\n"]))),ve=(0,y.ZP)(P.gN)(xn||(xn=(0,v.Z)(["\n  width: 287px;\n  height: 49px;\n  padding: 14px 0 14px 18px;\n  margin-bottom: 24px;\n\n  font-family: 'Poppins-Regular';\n  font-size: 14px;\n\n  border: 1px solid var(--btnPlus);\n  border-radius: 8px;\n  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);\n\n  color: var(--primaryTextColor);\n  background-color: ",";\n  opacity: 0.4;\n\n  @media (min-width: 768px) {\n    width: 302px;\n  }\n"])),(function(n){return"dark"===n.theme?" #1f1f1f":"inherit"})),ye=y.ZP.p(hn||(hn=(0,v.Z)(["\n  margin-bottom: 14px;\n\n  color: var(--primaryTextColor);\n"]))),je=y.ZP.ul(un||(un=(0,v.Z)(["\n  display: flex;\n  gap: 8px;\n\n  margin-bottom: 24px;\n"]))),Ze=y.ZP.label(mn||(mn=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  padding: 0;\n\n  border: none;\n  background-color: inherit;\n\n  width: 18px;\n  height: 18px;\n\n  opacity: 0.5;\n  transition: opacity var(--transition);\n\n  cursor: pointer;\n  > svg {\n    stroke: var(--primaryTextColor);\n  }\n\n  &:focus,\n  &:hover {\n    opacity: 1;\n  }\n"]))),we=(0,y.ZP)(P.gN)(gn||(gn=(0,v.Z)(["\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  border: 0;\n  padding: 0;\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  margin: -1px;\n"]))),ke=y.ZP.ul(fn||(fn=(0,v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  width: 252px;\n  height: 60px;\n  margin-bottom: 40px;\n"]))),Pe=y.ZP.label(bn||(bn=(0,v.Z)([""]))),Ce=y.ZP.div(vn||(vn=(0,v.Z)(["\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  transition: transform var(--transition);\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    transform: scale(1.1);\n  }\n"]))),Te=y.ZP.button(yn||(yn=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n\n  min-width: 287px;\n  height: 49px;\n\n  padding: 10px 0 11px 0;\n\n  border: 1px solid black;\n  border-radius: 8px;\n\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  letter-spacing: -0.02em;\n\n  color: var(--btnText);\n  background-color: var(--btnBgColor);\n  transition: background-color var(--transition);\n\n  cursor: pointer;\n\n  @media (min-width: 768px) {\n    width: 302px;\n  }\n\n  &:hover,\n  &:focus {\n    background-color: var(--btnBgColorHover);\n  }\n"]))),ze=y.ZP.div(jn||(jn=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 28px;\n  height: 28px;\n\n  border-radius: 8px;\n\n  background-color: var(--btnText);\n\n  > svg {\n    width: 14px;\n    height: 14px;\n    stroke: var(--plusInBtn);\n  }\n"]))),Se=["four-circles","star","loading","puzzle","container","lightning","colors","hexagon"],Me=["noBack","miklos","eberhard","diego","vino","vickholius","romello","kace","milad","gaetan","florian","tony","nicolas","gabriella","igor","zhou"],Be=O.Ry({boardTitle:O.Z_().required(),icon:O.Z_().oneOf(Se).required(),background:O.Z_().oneOf(Me).required()}),Je=function(n){var e=n.onClose,t=n.title,i=n.btnText,o=n.reqFunc;return(0,D.jsxs)(me,{children:[(0,D.jsx)(ge,{children:t}),(0,D.jsx)(fe,{type:"button",onClick:e,children:(0,D.jsx)(A.J,{name:"close"})}),(0,D.jsx)(P.J9,{initialValues:{boardTitle:"",icon:"four-circles",background:"noBack"},validationSchema:Be,onSubmit:function(n){o(n),e()},children:(0,D.jsxs)(be,{children:[(0,D.jsx)(ve,{type:"text",placeholder:"Title",name:"boardTitle"}),(0,D.jsx)(ye,{children:"Icons"}),(0,D.jsx)(je,{children:Se.map((function(n){return(0,D.jsx)("li",{children:(0,D.jsxs)(Ze,{children:[(0,D.jsx)(A.J,{name:n}),(0,D.jsx)(we,{type:"radio",name:"icon",value:n})]})},n)}))}),(0,D.jsx)(ye,{children:"Backgrounds"}),(0,D.jsx)(ke,{children:Me.map((function(n){var e=" https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/pictures/".concat(n,"_28x28.webp 1x,\n              https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/pictures/").concat(n,"_56x56.webp 2x"),t="https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/pictures/".concat(n,"_28x28.webp");return(0,D.jsx)("li",{children:(0,D.jsxs)(Pe,{children:[(0,D.jsx)(Ce,{children:(0,D.jsxs)("picture",{children:[(0,D.jsx)("source",{srcSet:e}),(0,D.jsx)("img",{src:t,alt:"background example"})]})}),(0,D.jsx)(we,{type:"radio",name:"background",value:n})]})},n)}))}),(0,D.jsxs)(Te,{type:"submit",children:[(0,D.jsx)(ze,{children:(0,D.jsx)(A.J,{name:"plus"})})," ",i]})]})})]})},qe={content:{width:"fit-content",height:"fit-content",padding:0,top:"50%",left:"50%",transform:"translate(-50%, -50%)",boxShadow:"0px 4px 16px 0px #1616160D"},overlay:{background:"rgba(0,0,0,0.5)"}},_e=function(){var n=(0,G.useState)(!1),e=(0,b.Z)(n,2),t=e[0],i=e[1],o=function(){i(!1)};return(0,D.jsxs)(he,{children:[(0,D.jsxs)("p",{children:["Create a",(0,D.jsx)("br",{}),"new board"]}),(0,D.jsx)(ue,{type:"button",onClick:function(){i(!0)},children:(0,D.jsx)(A.J,{name:"plus",width:"20",height:"20"})}),(0,D.jsx)(V(),{isOpen:t,onRequestClose:o,style:qe,contentLabel:"Creation board modal",children:(0,D.jsx)(Je,{onClose:o})})]})},Fe=y.ZP.div(Zn||(Zn=(0,v.Z)(["\n  margin-left: auto;\n  display: none;\n  gap: 8px;\n\n  button {\n    margin: 0;\n    padding: 0;\n    border: none;\n    background: none;\n  }\n"]))),Ne=y.ZP.li(wn||(wn=(0,v.Z)(["\n  height: 61px;\n  margin: 0 -14px 0 -14px;\n  padding: 0 14px 0 14px;\n  display: flex;\n  align-items: center;\n  stroke: var(--primaryTextColor);\n  opacity: 0.5;\n  transition: var(--transition);\n\n  p {\n    margin-left: 4px;\n    font-family: 'Poppins-Medium';\n    font-size: 14px;\n  }\n\n  &:hover,\n  &:focus,\n  &:active {\n    background-color: var(--secondaryBgColor);\n    opacity: 1;\n\n    > "," {\n      display: flex;\n      opacity: 0.5;\n    }\n  }\n"])),Fe),Oe=function(n){var e=n.board,t=n.onDelete;return(0,D.jsxs)(Ne,{children:[(0,D.jsx)(A.J,{name:e.icon,width:"18",height:"18",style:{opacity:.5}}),(0,D.jsx)("p",{children:e.title}),(0,D.jsxs)(Fe,{children:[(0,D.jsx)("button",{type:"button",children:(0,D.jsx)(A.J,{name:"pencil",width:"16",height:"16"})}),(0,D.jsx)("button",{type:"button",onClick:t,children:(0,D.jsx)(A.J,{name:"trash",width:"16",height:"16"})})]})]})},Re=y.ZP.div(kn||(kn=(0,v.Z)(["\n  width: 225px;\n  min-height: 100vh;\n  padding: 14px;\n  color: var(--primaryTextColor);\n  letter-spacing: -0.02em;\n  text-align: left;\n  background-color: var(--primaryBgColor);\n"]))),Le=y.ZP.div(Pn||(Pn=(0,v.Z)(["\n  font-family: 'Poppins-SemiBold';\n  letter-spacing: -0.04em;\n  display: flex;\n  column-gap: 8px;\n  align-items: center;\n  margin-bottom: 70px;\n"]))),Ie=y.ZP.div(Cn||(Cn=(0,v.Z)(["\n  font-family: 'Poppins-Medium';\n  font-size: 14px;\n\n  h3 {\n    margin-bottom: 8px;\n    font-size: 12px;\n    font-family: 'Poppins-Regular';\n    opacity: 50%;\n  }\n  "]))),Ae=y.ZP.ul(Tn||(Tn=(0,v.Z)(["\nmargin-bottom: 40px;\n"]))),De=y.ZP.button(zn||(zn=(0,v.Z)(["\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: none;\n  display: flex;\n  align-items: center;\n  font-family: 'Poppins-Medium';\n  font-size: 14px;\n  stroke: var(--accent);\n  transition: var(--transition);\n\n  p {\n    margin-left: 14px;\n    color: var(--primaryTextColor);\n  }\n\n  &:hover,\n  &:focus,\n  &:active {\n    stroke: var(--hover);\n  }\n"]))),Ee=function(){var n=(0,I.I0)(),e=(0,I.v9)(Hn);(0,G.useEffect)((function(){n((0,$n.Po)())}),[n]);return(0,D.jsxs)(Re,{children:[(0,D.jsxs)(Le,{children:[(0,D.jsx)(A.J,{name:"logo",width:"32",height:"32"}),(0,D.jsx)("h2",{children:"TaskPro"})]}),(0,D.jsxs)(Ie,{children:[(0,D.jsx)("h3",{children:"My boards"}),(0,D.jsx)(_e,{}),(0,D.jsx)(Ae,{children:e.map((function(e){return(0,D.jsx)(Oe,{board:e,onDelete:function(){return t=e._id,void n((0,$n.L1)(t));var t}},e._id)}))})]}),(0,D.jsx)(xe,{}),(0,D.jsxs)(De,{type:"button",onClick:function(){n((0,L.ni)())},children:[(0,D.jsx)(A.J,{name:"login",width:"32",height:"32"}),(0,D.jsx)("p",{children:"Log out"})]})]})},He=t(7689),$e=y.ZP.div(Sn||(Sn=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  background: var(--secondaryBgColor);\n\n  @media (max-width: 767px) {\n    padding: 14px 0px;\n  }\n\n  @media (min-width: 768px) {\n    padding: 26px 0px;\n  }\n\n  @media (min-width: 1440px) {\n    padding: 10px 0px;\n  }\n"]))),Ve=y.ZP.h3(Mn||(Mn=(0,v.Z)(["\n  font-family: 'Poppins-Medium';\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.02em;\n\n  color: var(--primaryTextColor);\n\n  @media (min-width: 768px) {\n    font-size: 18px;\n  }\n"]))),Ge=y.ZP.button(Bn||(Bn=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  font-family: 'Poppins-Medium';\n\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.02em;\n\n  border: none;\n\n  color: var(--secondaryTextColor);\n  opacity: 0.8;\n  background-color: inherit;\n\n  stroke: var(--secondaryTextColor);\n  stroke-opacity: 0.8;\n  transition: opacity var(--transition);\n  > svg {\n    width: 16px;\n    height: 16px;\n  }\n\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    opacity: 1;\n  }\n"]))),Ue=y.ZP.h2(Jn||(Jn=(0,v.Z)(["\n  font-family: 'Poppins', sans-serif;\n  font-weight: 500;\n  font-size: 18px;\n  letter-spacing: -0.02em;\n  margin-left: 24px;\n  color: #fff;\n"]))),We=y.ZP.p(qn||(qn=(0,v.Z)(["\n  font-family: 'Poppins', sans-serif;\n  font-weight: 500;\n  font-size: 14px;\n  letter-spacing: -0.02em;\n  margin-left: 24px;\n  width: 300px;\n  color: #fff;\n"]))),Ye=y.ZP.button(_n||(_n=(0,v.Z)(["\n  font-family: 'Poppins', sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  letter-spacing: -0.02em;\n  text-decoration: underline;\n  /* color: rgba(255, 255, 255, 0.5); */\n"]))),Ke=y.ZP.ul(Fn||(Fn=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),Qe=y.ZP.label(Nn||(Nn=(0,v.Z)(["\n  font-family: 'Poppins', sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  letter-spacing: -0.02em;\n  color: rgba(255, 255, 255, 0.5);\n"]))),Xe=function(n){var e=n.closeModal;return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(Ue,{children:"Filters"}),(0,D.jsxs)(We,{children:["Label color",(0,D.jsx)(Ye,{children:"Show all"})]}),(0,D.jsxs)(Ke,{children:[(0,D.jsxs)(Qe,{children:[(0,D.jsx)("input",{type:"radio",name:"colorPicker",value:"Grey",defaultChecked:!0}),"Without priority"]}),(0,D.jsxs)(Qe,{children:[(0,D.jsx)("input",{type:"radio",name:"colorPicker",value:"Blue"}),"Low"]}),(0,D.jsxs)(Qe,{children:[(0,D.jsx)("input",{type:"radio",name:"colorPicker",value:"Red"}),"Medium"]}),(0,D.jsxs)(Qe,{children:[(0,D.jsx)("input",{type:"radio",name:"colorPicker",value:"Green"}),"High"]})]}),(0,D.jsx)(A.J,{name:"icon-close",width:"20",height:"20",onClick:e})]})},nt={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",transform:"translate(-50%, -50%)",padding:0}},et=function(){var n=(0,G.useState)(!1),e=(0,b.Z)(n,2),t=e[0],i=e[1],o=function(){i(!1)},r=(0,He.UO)().boardName;return(0,D.jsxs)($e,{children:[(0,D.jsx)(Ve,{children:r}),(0,D.jsxs)(Ge,{type:"button",onClick:function(){i(!0)},children:[(0,D.jsx)(A.J,{name:"filter"}),"Filters"," "]}),(0,D.jsx)(V(),{isOpen:t,onRequestClose:o,style:nt,contentLabel:"Filters Modal",children:(0,D.jsx)(Xe,{closeModal:o})})]})},tt=y.ZP.section(On||(On=(0,v.Z)(["\n  height: 100vh;\n  background-color: var(--secondaryBgColor);\n"]))),it=y.ZP.p(Rn||(Rn=(0,v.Z)(["\n  position: relative;\n  bottom: 50%;\n  transform: translateY(-50%);\n  min-width: 280px;\n\n  font-size: 14px;\n  letter-spacing: -0.02em;\n  line-height: 1.33;\n\n  color: var(--secondaryTextColor);\n\n  @media (min-width: 375px) {\n    width: 335px;\n  }\n\n  @media (min-width: 768px) {\n    line-height: 1.29;\n    width: 486px;\n    margin: auto;\n  }\n"]))),ot=y.ZP.button(Ln||(Ln=(0,v.Z)(["\n  margin: 0;\n  padding: 0;\n\n  border: none;\n  outline: none;\n\n  background-color: inherit;\n  color: var(--btnPlus);\n  cursor: pointer;\n  transition: color var(--transition);\n  &:hover,\n  &:focus {\n    color: var(--btnPlusHover);\n  }\n"]))),rt=y.ZP.div(In||(In=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 28px;\n  height: 28px;\n  border: 1px solid black;\n  border-radius: 8px;\n\n  > svg {\n    width: 14px;\n    height: 14px;\n    stroke: black;\n  }\n"]))),at=y.ZP.button(An||(An=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  max-width: 335px;\n\n  padding: 14px 79px;\n\n  border: 1px solid black;\n  border-radius: 8px;\n\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  letter-spacing: -0.02em;\n"]))),st=function(){return(0,D.jsx)("div",{children:(0,D.jsxs)(at,{type:"button",children:[(0,D.jsx)(rt,{children:(0,D.jsx)(A.J,{name:"plus"})})," ","Add another column"]})})},pt=function(){var n=(0,He.UO)().boardName,e=(0,G.useState)(!1),t=(0,b.Z)(e,2),i=t[0],o=t[1],r=function(){o(!1)};return(0,D.jsxs)(D.Fragment,{children:[n?(0,D.jsx)(st,{}):(0,D.jsxs)(it,{children:["Before starting your project, it is essential"," ",(0,D.jsx)(ot,{type:"button",onClick:function(){o(!0)},children:"to create a board"})," ","to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]}),(0,D.jsx)(V(),{isOpen:i,onRequestClose:r,style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",transform:"translate(-50%, -50%)",padding:0}},contentLabel:"Board Creation Modal",ariaHideApp:!1,children:(0,D.jsx)(Je,{onClose:r,title:"New board",btnText:"Create",reqFunc:function(n){return console.log(n)}})})]})},lt=function(){return(0,D.jsxs)(tt,{children:[(0,D.jsx)(et,{}),(0,D.jsx)(pt,{})]})};function dt(){return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(En,{}),(0,D.jsx)(Ee,{}),(0,D.jsx)(lt,{})]})}}}]);
//# sourceMappingURL=286.74c24a8f.chunk.js.map