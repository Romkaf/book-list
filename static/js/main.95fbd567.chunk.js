(this["webpackJsonpbook-list"]=this["webpackJsonpbook-list"]||[]).push([[0],{12:function(e,t,a){e.exports={field:"InputField_field__16vaP",label:"InputField_label__-bVJS",label_small:"InputField_label_small__2V87h",input:"InputField_input__38WIM",input_wrong:"InputField_input_wrong__2p35i",error:"InputField_error__neEcB"}},13:function(e,t,a){e.exports={bookList:"BookList_bookList__1Uqzt",heading:"BookList_heading__23JpU",table:"BookList_table__lRgHB",header:"BookList_header__9Jhu2",row:"BookList_row__uVtSb",link:"BookList_link__3q5sz"}},16:function(e,t,a){e.exports={form:"BookEdit_form__qRhJW",form__imgCover:"BookEdit_form__imgCover__1Y__I",wrong:"BookEdit_wrong__3SI5A",error:"BookEdit_error__HCOJL",buttons:"BookEdit_buttons__2sioI"}},17:function(e,t,a){e.exports={wrapper:"ModalConfirm_wrapper__38rpT",modal:"ModalConfirm_modal__2dX7O",text:"ModalConfirm_text__Lvow1",buttons:"ModalConfirm_buttons__3XAyY",btn:"ModalConfirm_btn__3iaTG"}},21:function(e,t,a){e.exports={filter:"Filter_filter__1q5kM",heading:"Filter_heading__1r0yp",input:"Filter_input__YmgBH",label:"Filter_label__2pNgv"}},32:function(e,t,a){e.exports={form:"Form_form__3wvE7",button:"Form_button__2ORia"}},38:function(e,t,a){e.exports={app:"App_app__3BT4Y",wrapper:"App_wrapper__1Jn2B"}},41:function(e,t,a){e.exports={btn:"Button_btn__rwweu"}},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a(23),i=a.n(o),l=a(8),c=a(7),s=a(11),u=a(20),d=a.n(u),b="\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f",j="\u041f\u043e\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 \u0434\u0432\u0443\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",f="\u041f\u043e\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0447\u0435\u0442\u044b\u0440\u0435\u0445 \u0446\u0438\u0444\u0440",h="\u041f\u043e\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0446\u0438\u0444\u0440",O="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u0433\u043e\u0434 \u0438\u0437\u0434\u0430\u043d\u0438\u044f",m="\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",p="NAME",_="IMAGE",v="AUTHOR",x="DATE",g="PUBLISHER",k="file",B="text",C="button",y="\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",N="\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",w="\u0410\u0432\u0442\u043e\u0440",E="\u0418\u0437\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e",L="\u0413\u043e\u0434 \u0438\u0437\u0434\u0430\u043d\u0438\u044f",F="edit",I="close",M="delete",R="search",S="save",z="BOOK_FORM",D="EDIT_FORM",V=27,A="filter",H="bookState",T=a(12),U=a.n(T),J=function(e){var t=e.name,a=e.label,o=e.error,i=e.type,l=e.onUrlOfImageSave,u=e.reset,b=e.labelFile,j=Object(r.useState)(""),f=Object(c.a)(j,2),h=f[0],O=f[1];Object(r.useEffect)((function(){u&&O("")}),[u]);var m=d()(U.a.label,Object(s.a)({},U.a.label_small,h)),p=d()(U.a.input,Object(s.a)({},U.a.input_wrong,o));return Object(n.jsxs)("div",{className:U.a.field,children:[Object(n.jsx)("input",{className:p,id:t,type:i,name:t,value:h,onChange:function(e){if("file"===e.target.type){!function(e){var t,a=null===(t=e.target.files[0])||void 0===t?void 0:t.name;a&&(b.current.innerHTML=a)}(e);var t=e.target.files[0];l(t)}else O(e.target.value)},maxLength:t===x?4:null,required:!0}),Object(n.jsx)("label",{className:m,htmlFor:t,ref:"IMAGE"===t?b:null,children:a}),o&&Object(n.jsx)("span",{className:U.a.error,children:o})]})},K=b,X=j,q=f,W=h,G=O,P=m,Y=function(e){return e.length>1},$=function(e){return e.length>3},Q=function(e){var t=(new Date).toJSON().slice(0,4);return e>="1920"&&e<=t},Z=function(e){return e.match(/^\d+$/)},ee=function(e){var t={};return Y(e.name)||(t.name=X),e.name||(t.name=K),Y(e.author)||(t.author=X),e.author||(t.author=K),Y(e.publisher)||(t.publisher=X),e.publisher||(t.publisher=K),Q(e.date)||(t.date=G),Z(e.date)||(t.date=W),$(e.date)||(t.date=q),e.date||(t.date=K),(null===e||void 0===e?void 0:e.image)||(t.image=P),t},te=a(32),ae=a.n(te),ne=function(e){var t=e.onAddBook,a=Object(r.useState)({}),o=Object(c.a)(a,2),i=o[0],l=o[1],s=Object(r.useState)(""),u=Object(c.a)(s,2),d=u[0],b=u[1],j=Object(r.useState)(!1),f=Object(c.a)(j,2),h=f[0],O=f[1],m=Object(r.useRef)();Object(r.useEffect)((function(){O(!1)}),[h]);var F=p,I=_,M=v,R=x,S=g,D=k,V=B,A=C,H=ae.a.form,T=(ae.a.elem,ae.a.button),U=[{name:F,label:N,error:null===i||void 0===i?void 0:i.name,type:V},{name:M,label:w,error:null===i||void 0===i?void 0:i.author,type:V},{name:R,label:L,error:null===i||void 0===i?void 0:i.date,type:V},{name:S,label:E,error:null===i||void 0===i?void 0:i.publisher,type:V},{name:I,label:y,error:null===i||void 0===i?void 0:i.image,type:D}],K=function(e){var a=ee(e);l(a),0===Object.keys(a).length&&(t(e),document.forms.BOOK_FORM.reset(),m.current.innerHTML=y,b(""),O(!0))},X=function(e){if(e){var t=new FileReader;t.onload=function(){b(t.result)},t.readAsDataURL(e)}};return Object(n.jsxs)("form",{className:H,name:z,children:[U.map((function(e){var t=e.name,a=e.label,r=e.error,o=e.type;return Object(n.jsx)(J,{name:t,label:a,error:r,type:o,onUrlOfImageSave:o===D?X:null,reset:h,labelFile:o===D?m:null},t)})),Object(n.jsx)("button",{className:T,type:A,onClick:function(){var e=document.forms.BOOK_FORM,t={name:e[F].value,image:d,author:e[M].value,date:e[R].value,publisher:e[S].value};K(t)},children:"\u0412\u0432\u0435\u0441\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0435"})]})},re="ADD_BOOK",oe="DELETE_BOOK",ie="EDIT_BOOK",le="CHANGE_FILTER",ce=Object(l.b)(null,{addBook:function(e){return{type:re,payload:e}}})((function(e){var t=e.addBook;return Object(n.jsx)(ne,{onAddBook:t})})),se=a(26),ue=a(27),de=a(31),be=a(30),je=function(e){Object(de.a)(a,e);var t=Object(be.a)(a);function a(){return Object(se.a)(this,a),t.apply(this,arguments)}return Object(ue.a)(a,[{key:"render",value:function(){switch(this.props.name){case"edit":return Object(n.jsxs)("svg",{viewBox:"0 0 16 16",fill:"currentColor",children:[Object(n.jsx)("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),Object(n.jsx)("path",{fillRule:"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})]});case"delete":return Object(n.jsxs)("svg",{viewBox:"0 0 16 16",fill:"currentColor",children:[Object(n.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),Object(n.jsx)("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})]});case"close":return Object(n.jsxs)("svg",{viewBox:"0 0 16 16",fill:"currentColor",children:[Object(n.jsx)("path",{fillRule:"evenodd",d:"M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),Object(n.jsx)("path",{fillRule:"evenodd",d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})]});case"save":return Object(n.jsx)("svg",{viewBox:"0 0 16 16",fill:"currentColor",children:Object(n.jsx)("path",{fillRule:"evenodd",d:"M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 0 1-1-1zm-5-.5a.5.5 0 0 0 0 1H7a.5.5 0 0 0 0-1H4.5zm0 3a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7z"})});case"search":return Object(n.jsxs)("svg",{viewBox:"0 0 16 16",fill:"currentColor",children:[Object(n.jsx)("path",{fillRule:"evenodd",d:"M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"}),Object(n.jsx)("path",{fillRule:"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"})]})}}}]),a}(r.Component),fe=a(3),he=a(21),Oe=a.n(he),me=function(e){var t=e.filterValue,a=e.onChangeFilter,r=Oe.a.filter,o=Oe.a.heading,i=Oe.a.input,l=Oe.a.label,c=B,s=Object(fe.e)();return Object(n.jsxs)("div",{className:r,children:[Object(n.jsx)("h2",{className:o,children:"Filter"}),Object(n.jsx)("input",{className:i,id:A,type:c,value:t,onChange:function(e){a(e.target.value),s.push("/items?search=".concat(e.target.value))},onKeyDown:function(e){e.keyCode===V&&e.target.blur()}}),Object(n.jsx)("label",{className:l,htmlFor:A,children:Object(n.jsx)(je,{name:R})})]})},pe=Object(l.b)((function(e){return{filter:e.filter}}),{changeFilter:function(e){return{type:le,payload:e}}})((function(e){var t=e.filter,a=e.changeFilter,o=Object(fe.f)();return Object(r.useEffect)((function(){var e=o.search,n=decodeURI(e.substring(8));e&&t!==n&&a(n)})),Object(n.jsx)(me,{filterValue:t,onChangeFilter:a})})),_e=a(13),ve=a.n(_e),xe=a(10),ge=function(e){var t=e.books,a=ve.a.bookList,r=ve.a.heading,o=ve.a.table,i=ve.a.row,l=ve.a.header,c=ve.a.link;return Object(n.jsxs)("div",{className:a,children:[Object(n.jsx)("h2",{className:r,children:"Book List"}),Object(n.jsxs)("table",{className:o,children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{className:l,children:[Object(n.jsx)("td",{children:"\u041a\u043d\u0438\u0433\u0430"}),Object(n.jsx)("td",{children:"\u0410\u0432\u0442\u043e\u0440"})]})}),Object(n.jsx)("tbody",{children:t.map((function(e){var t=e.name,a=e.author,r=e.id;return Object(n.jsx)("tr",{className:i,children:Object(n.jsx)("td",{children:Object(n.jsxs)(xe.b,{to:"/items/".concat(r),className:c,children:[Object(n.jsx)("span",{children:t}),Object(n.jsx)("span",{children:a})]})})},r)}))})]})]})},ke=Object(l.b)((function(e){return{books:e.books,filter:e.filter}}),{})((function(e){var t=e.books,a=e.filter,r=function(e){return e.toUpperCase().includes(a.toUpperCase())},o=a?t.filter((function(e){return r(e.name)||r(e.author)})):t;return Object(n.jsx)(ge,{books:o})})),Be=a(9),Ce=a.n(Be),ye=a(16),Ne=a.n(ye),we=a(41),Ee=a.n(we),Le=function(e){var t=e.title,a=e.onClick,r=e.svgName;return Object(n.jsx)("button",{className:Ee.a.btn,type:C,title:t,onClick:a,children:Object(n.jsx)(je,{name:r})})},Fe=function(e){var t=e.book,a=e.onSetIsEdit,o=e.onEditBook,i=Object(r.useState)({}),l=Object(c.a)(i,2),u=l[0],b=l[1],j=Object(r.useState)(""),f=Object(c.a)(j,2),h=f[0],O=f[1],m=Object(r.useRef)(null),C=t.image,y=t.name,F=t.author,M=t.publisher,R=t.date,z=t.id,V=p,A=_,H=v,T=x,U=g,J=B,K=k,X=S,q=I,W=Ne.a.form,G=Ne.a.form__imgCover,P=Ne.a.buttons,Y=Ne.a.error,$=Ne.a.wrong,Q=function(e){var t=ee(e);b(t),0===Object.keys(t).length&&(o(e,z),a(!1))},Z=function(e){e.target.setAttribute("size",e.target.value.length+1)},te=[{title:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f",func:function(){var e=document.forms.EDIT_FORM,t={name:e[V].value,image:h||C,author:e[H].value,publisher:e[U].value,date:e[T].value,id:z};Q(t)},svg:X},{title:"\u041e\u0442\u043c\u0435\u043d\u0430",func:function(){return a(!1)},svg:q}],ae=[{name:y,label:N,id:V,error:null===u||void 0===u?void 0:u.name},{name:F,label:w,id:H,error:null===u||void 0===u?void 0:u.author},{name:M,label:E,id:U,error:null===u||void 0===u?void 0:u.publisher},{name:R,label:L,id:T,error:null===u||void 0===u?void 0:u.date}];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("form",{className:W,name:D,children:[Object(n.jsx)("h3",{children:"\u0420\u0435\u0436\u0438\u043c \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"}),Object(n.jsxs)("div",{className:G,children:[Object(n.jsx)("img",{src:C,alt:y,ref:m}),Object(n.jsx)("input",{type:K,id:A,onChange:function(e){if(e.target.type===K){var t=e.target.files[0];if(e.target.files[0]){var a=new FileReader;a.onload=function(){m.current.src=a.result,O(a.result)},a.readAsDataURL(t)}}}})]}),ae.map((function(e){var t=e.name,a=e.label,r=e.id,o=e.error,i=d()(Object(s.a)({},$,o));return Object(n.jsxs)("label",{children:[a,Object(n.jsx)("input",{className:i,type:J,id:r,defaultValue:t,size:t.length+1,maxLength:t===R?4:null,onChange:t!==R?Z:null}),o&&Object(n.jsx)("span",{className:Y,children:o})]},r)}))]}),Object(n.jsx)("div",{className:P,children:te.map((function(e){return Object(n.jsx)(Le,{title:e.title,onClick:e.func,svgName:e.svg},e.svg)}))})]})},Ie=a(17),Me=a.n(Ie),Re=function(e){var t=e.confirm,a=e.onConfirmOk,r=e.onConfirmCansel,o=Me.a.wrapper,i=Me.a.modal,l=Me.a.text,c=Me.a.buttons,s=Me.a.btn;return Object(n.jsx)("div",{className:o,ref:t,onKeyDown:function(e){e.keyCode===V&&r()},onClick:function(e){return e.target.classList.contains(o)&&r()},tabIndex:"0",children:Object(n.jsxs)("div",{className:i,children:[Object(n.jsx)("span",{className:l,children:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043d\u0438\u0433\u0443?"}),Object(n.jsxs)("div",{className:c,children:[Object(n.jsx)("button",{className:s,onClick:a,children:"\u041e\u043a"}),Object(n.jsx)("button",{className:s,onClick:r,children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]})]})})},Se=function(e){var t=e.book,a=e.onDeleteBook,o=e.onEditBook,i=Object(fe.e)(),l=Object(r.useRef)(null),s=Object(r.useState)(!1),u=Object(c.a)(s,2),d=u[0],b=u[1];Object(r.useEffect)((function(){b(!1)}),[t]);var j=t.image,f=t.name,h=t.author,O=t.publisher,m=t.date,p=t.id,_=E,v=L,x=F,g=M,k=I,B=Ce.a.wrapper,C=Ce.a.card,y=Ce.a.heading,N=Ce.a.info,w=Ce.a.cover,R=Ce.a.name,S=Ce.a.author,z=Ce.a.otherDetails,D=Ce.a.buttonWrapper,V=[{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",id:x,func:function(){b(!0)}},{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",id:g,func:function(){l.current.style.display="block",l.current.focus()}},{title:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",id:k,func:function(){return i.push("/items")}}];return Object(n.jsx)("div",{className:B,children:Object(n.jsxs)("article",{className:C,children:[Object(n.jsx)("h2",{className:y,children:"Book Card"}),d?Object(n.jsx)(Fe,{book:t,onSetIsEdit:b,onEditBook:o}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:w,children:Object(n.jsx)("img",{src:j,alt:f})}),Object(n.jsxs)("div",{className:N,children:[Object(n.jsx)("h4",{className:R,children:f}),Object(n.jsx)("span",{className:S,children:h}),Object(n.jsxs)("div",{className:z,children:[Object(n.jsxs)("p",{children:[_,Object(n.jsx)("span",{children:O})]}),Object(n.jsxs)("p",{children:[v,Object(n.jsx)("span",{children:m})]})]})]}),Object(n.jsx)("div",{className:D,children:V.map((function(e){return Object(n.jsx)(Le,{title:e.title,onClick:e.func,svgName:e.id},e.id)}))})]}),Object(n.jsx)(Re,{confirm:l,onConfirmOk:function(){a(p),l.current.style.display="none",i.push("/items")},onConfirmCansel:function(){l.current.style.display="none",i.push("/items/".concat(p))}})]})})},ze=function(e){Object(de.a)(a,e);var t=Object(be.a)(a);function a(){return Object(se.a)(this,a),t.apply(this,arguments)}return Object(ue.a)(a,[{key:"shouldComponentUpdate",value:function(e){return!e.location.search}},{key:"render",value:function(){var e=this.props,t=e.books,a=e.deleteBook,r=e.editBook,o=e.itemId,i=t.find((function(e){return e.id===Number(o)}));return t.length?i?Object(n.jsx)(Se,{book:i,onDeleteBook:a,onEditBook:r}):Object(n.jsx)("span",{style:{margin:"80px auto 40px"},children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043d\u0438\u0433\u0443 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430!"}):null}}]),a}(r.Component),De={deleteBook:function(e){return{type:oe,id:e}},editBook:function(e,t){return{type:ie,payload:{data:e,id:t}}}},Ve=Object(l.b)((function(e){return{books:e.books}}),De)(ze),Ae=a(38),He=a.n(Ae),Te=function(){return Object(n.jsx)(xe.a,{children:Object(n.jsxs)("div",{className:He.a.app,children:[Object(n.jsx)(ce,{}),Object(n.jsx)(pe,{}),Object(n.jsxs)("div",{className:He.a.wrapper,children:[Object(n.jsx)(ke,{}),Object(n.jsx)(fe.a,{path:"/items/:id",children:function(e){var t=e.match,a=e.location;return Object(n.jsx)(Ve,{itemId:(null===t||void 0===t?void 0:t.params.id)||null,location:a})}})]})]})})},Ue=a(15),Je=a(33),Ke=a(42),Xe=Object(Ue.b)({books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=0===e.length?1:e[e.length-1].id+1;switch(t.type){case re:return[].concat(Object(Ke.a)(e),[Object(Je.a)(Object(Je.a)({},t.payload),{},{id:a++})]);case oe:return e.filter((function(e){return e.id!==t.id}));case ie:return e.map((function(e){return e.id===t.payload.id?Object(Je.a)({},t.payload.data):e}));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le:return t.payload;default:return e}}}),qe=JSON.parse(localStorage.getItem(H))||{books:[],filter:""},We=Object(Ue.c)(Xe,qe,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a(53),a(54);We.subscribe((function(){localStorage.setItem(H,JSON.stringify(We.getState()))})),i.a.render(Object(n.jsx)(l.a,{store:We,children:Object(n.jsx)(Te,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={wrapper:"BookCard_wrapper__3I71e",card:"BookCard_card__Pho3T",heading:"BookCard_heading__fba3B",editForm:"BookCard_editForm__20SzD",cover:"BookCard_cover___MIt1",file:"BookCard_file__18cmP",info:"BookCard_info__3VfvH",name:"BookCard_name__1vSfc",author:"BookCard_author__1gXyA",otherDetails:"BookCard_otherDetails__23amc",buttonWrapper:"BookCard_buttonWrapper__pj6VC"}}},[[55,1,2]]]);
//# sourceMappingURL=main.95fbd567.chunk.js.map