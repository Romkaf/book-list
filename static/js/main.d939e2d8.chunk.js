(this["webpackJsonpbook-list"]=this["webpackJsonpbook-list"]||[]).push([[0],{14:function(e,t,a){e.exports={field:"InputField_field__16vaP",field__label:"InputField_field__label__nrPiZ",field__label_small:"InputField_field__label_small__3icbl",field__input:"InputField_field__input__ykVpw",field__input_wrong:"InputField_field__input_wrong__3dThN",field__error:"InputField_field__error__2Df4j"}},15:function(e,t,a){e.exports={bookList:"BookList_bookList__1Uqzt",bookList__heading:"BookList_bookList__heading__3tAKI",table:"BookList_table__lRgHB",table__header:"BookList_table__header__1F1Z3",table__row:"BookList_table__row__19nRT",table__link:"BookList_table__link__1ysTr"}},16:function(e,t,a){e.exports={form:"BookEdit_form__qRhJW",form__imgCover:"BookEdit_form__imgCover__1Y__I",wrong:"BookEdit_wrong__3SI5A",error:"BookEdit_error__HCOJL",buttons:"BookEdit_buttons__2sioI",buttons__btn:"BookEdit_buttons__btn__3gNIU"}},21:function(e,t,a){e.exports={filter:"Filter_filter__1q5kM",filter__heading:"Filter_filter__heading__23il_",filter__input:"Filter_filter__input__2WnSj",filter__btn:"Filter_filter__btn__jBfH4"}},29:function(e,t,a){e.exports={form:"Form_form__3wvE7",form__elem:"Form_form__elem__3Rm1S",form__button:"Form_form__button__1HLzX"}},36:function(e,t,a){e.exports={app:"App_app__3BT4Y",app__wrapper:"App_app__wrapper__3xpJY"}},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),i=a(22),l=a.n(i),o=a(10),c=a(5),s=a(12),d=a(13),_=a.n(d),u="\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f",b="\u041f\u043e\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 \u0434\u0432\u0443\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",j="\u041f\u043e\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0447\u0435\u0442\u044b\u0440\u0435\u0445 \u0446\u0438\u0444\u0440",f="\u041f\u043e\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0446\u0438\u0444\u0440",h="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u0433\u043e\u0434 \u0438\u0437\u0434\u0430\u043d\u0438\u044f",m="\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",O="NAME",p="IMAGE",v="AUTHOR",x="DATE",k="PUBLISHER",g="file",B="text",N="\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",y="\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",C="\u0410\u0432\u0442\u043e\u0440",L="\u0418\u0437\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e",E="\u0413\u043e\u0434 \u0438\u0437\u0434\u0430\u043d\u0438\u044f",F="BOOK_FORM",w="EDIT_FORM",I=a(14),S=a.n(I),M=function(e){var t=e.name,a=e.label,i=e.error,l=e.type,o=e.onUrlOfImageSave,d=e.reset,u=Object(r.useState)(""),b=Object(c.a)(u,2),j=b[0],f=b[1];Object(r.useEffect)((function(){d&&f("")}),[d]);var h=_()(S.a.field),m=_()(S.a.field__error),O=_()(S.a.field__label,Object(s.a)({},S.a.field__label_small,j)),p=_()(S.a.field__input,Object(s.a)({},S.a.field__input_wrong,i));return Object(n.jsxs)("div",{className:h,children:[Object(n.jsx)("input",{className:p,id:t,type:l,name:t,value:j,onChange:function(e){if("file"===e.target.type){!function(e){var t,a=e.target,n=a.nextElementSibling,r=null===(t=a.files[0])||void 0===t?void 0:t.name;r&&(n.innerHTML=r)}(e);var t=e.target.files[0];o(t)}else f(e.target.value)},maxLength:t===x?4:null,required:!0}),Object(n.jsx)("label",{className:O,htmlFor:t,children:a}),i&&Object(n.jsx)("span",{className:m,children:i})]})},z=u,R=b,H=j,A=f,D=h,V=m,T=function(e){return e.length>1},U=function(e){return e.length>3},J=function(e){var t=(new Date).toJSON().slice(0,4);return e>="1920"&&e<=t},K=function(e){return e.match(/^\d+$/)},q=function(e){var t={};return T(e.name)||(t.name=R),e.name||(t.name=z),T(e.author)||(t.author=R),e.author||(t.author=z),T(e.publisher)||(t.publisher=R),e.publisher||(t.publisher=z),J(e.date)||(t.date=D),K(e.date)||(t.date=A),U(e.date)||(t.date=H),e.date||(t.date=z),(null===e||void 0===e?void 0:e.image)||(t.image=V),t},G=a(29),P=a.n(G),Y=function(e){var t=e.onAddBook,a=Object(r.useState)({}),i=Object(c.a)(a,2),l=i[0],o=i[1],s=Object(r.useState)(""),d=Object(c.a)(s,2),_=d[0],u=d[1],b=Object(r.useState)(!1),j=Object(c.a)(b,2),f=j[0],h=j[1];Object(r.useEffect)((function(){h(!1)}),[f]);var m=O,w=p,I=v,S=x,z=k,R=g,H=B,A=P.a.form,D=P.a.form__elem,V=P.a.form__button,T=[{name:m,label:y,error:null===l||void 0===l?void 0:l.name,type:H},{name:I,label:C,error:null===l||void 0===l?void 0:l.author,type:H},{name:S,label:E,error:null===l||void 0===l?void 0:l.date,type:H},{name:z,label:L,error:null===l||void 0===l?void 0:l.publisher,type:H},{name:w,label:N,error:null===l||void 0===l?void 0:l.image,type:R}],U=function(e){var a=q(e);o(a),0===Object.keys(a).length&&(t(e),function(){var e=document.forms.BOOK_FORM;e.reset(),e[w].nextElementSibling.innerHTML=N,u(""),h(!0)}())},J=function(e){if(e){var t=new FileReader;t.onload=function(){u(t.result)},t.readAsDataURL(e)}};return Object(n.jsxs)("form",{className:A,encType:"multipart/form-data",name:F,children:[Object(n.jsx)("ul",{children:T.map((function(e){var t=e.name,a=e.label,r=e.error,i=e.type;return Object(n.jsx)("li",{className:D,children:Object(n.jsx)(M,{name:t,label:a,error:r,type:i,onUrlOfImageSave:i===R?J:null,reset:f})},t)}))}),Object(n.jsx)("button",{className:V,type:"button",onClick:function(){var e=document.forms.BOOK_FORM,t={name:e[m].value,image:_,author:e[I].value,date:e[S].value,publisher:e[z].value};U(t)},children:"\u0412\u0432\u0435\u0441\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0435"})]})},Z="ADD_BOOK",W="DELETE_BOOK",X="EDIT_BOOK",$="CHANGE_FILTER",Q=Object(o.b)(null,{addBook:function(e){return{type:Z,payload:e}}})((function(e){var t=e.addBook;return Object(n.jsx)(Y,{onAddBook:t})})),ee=a(25),te=a(26),ae=a(28),ne=a(27),re=function(e){Object(ae.a)(a,e);var t=Object(ne.a)(a);function a(){return Object(ee.a)(this,a),t.apply(this,arguments)}return Object(te.a)(a,[{key:"render",value:function(){switch(this.props.name){case"edit":return Object(n.jsxs)("svg",{viewBox:"0 0 16 16",fill:"currentColor",children:[Object(n.jsx)("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),Object(n.jsx)("path",{fillRule:"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"})]});case"delete":return Object(n.jsxs)("svg",{viewBox:"0 0 16 16",fill:"currentColor",children:[Object(n.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),Object(n.jsx)("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})]});case"close":return Object(n.jsxs)("svg",{viewBox:"0 0 16 16",fill:"currentColor",children:[Object(n.jsx)("path",{fillRule:"evenodd",d:"M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),Object(n.jsx)("path",{fillRule:"evenodd",d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})]});case"save":return Object(n.jsx)("svg",{viewBox:"0 0 16 16",fill:"currentColor",children:Object(n.jsx)("path",{fillRule:"evenodd",d:"M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 0 1-1-1zm-5-.5a.5.5 0 0 0 0 1H7a.5.5 0 0 0 0-1H4.5zm0 3a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7z"})});case"search":return Object(n.jsxs)("svg",{viewBox:"0 0 16 16",fill:"currentColor",children:[Object(n.jsx)("path",{fillRule:"evenodd",d:"M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"}),Object(n.jsx)("path",{fillRule:"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"})]})}}}]),a}(r.Component),ie=a(3),le=a(21),oe=a.n(le),ce=function(e){var t=e.filterValue,a=e.onChangeFilter,i=Object(r.useState)(t),l=Object(c.a)(i,2),o=l[0],s=l[1],d=oe.a.filter,_=oe.a.filter__heading,u=oe.a.filter__input,b=oe.a.filter__btn,j=Object(ie.e)(),f=function(e){13!==e.keyCode&&"click"!==e.type||(a(o),j.push("/items/?search=".concat(o),"search"))};return Object(n.jsxs)("div",{className:d,children:[Object(n.jsx)("h2",{className:_,children:"Filter"}),Object(n.jsx)("input",{className:u,type:"text",value:o,onChange:function(e){s(e.target.value)},onKeyDown:f}),Object(n.jsx)("button",{className:b,onClick:f,children:Object(n.jsx)(re,{name:"search"})})]})},se=Object(o.b)((function(e){return{filter:e.filter}}),{changeFilter:function(e){return{type:$,payload:e}}})((function(e){var t=e.filter,a=e.changeFilter;return Object(n.jsx)(ce,{filterValue:t,onChangeFilter:a})})),de=a(15),_e=a.n(de),ue=a(11),be=function(e){var t=e.books,a=_e.a.bookList,r=_e.a.bookList__heading,i=_e.a.table,l=_e.a.table__row,o=_e.a.table__header,c=_e.a.table__link;return Object(n.jsxs)("div",{className:a,children:[Object(n.jsx)("h2",{className:r,children:"Book List"}),Object(n.jsxs)("table",{className:i,children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{className:o,children:[Object(n.jsx)("td",{children:"\u041a\u043d\u0438\u0433\u0430"}),Object(n.jsx)("td",{children:"\u0410\u0432\u0442\u043e\u0440"})]})}),Object(n.jsx)("tbody",{children:t.map((function(e){var t=e.name,a=e.author,r=e.id;return Object(n.jsx)("tr",{className:l,children:Object(n.jsx)("td",{children:Object(n.jsxs)(ue.b,{to:"/items/".concat(r),className:c,children:[Object(n.jsx)("span",{children:t}),Object(n.jsx)("span",{children:a})]})})},r)}))})]})]})},je=Object(o.b)((function(e){return{books:e.books,filter:e.filter}}),{})((function(e){var t=e.books,a=e.filter,r=function(e){return e.toUpperCase().includes(a.toUpperCase())},i=a?t.filter((function(e){return r(e.name)||r(e.author)})):t;return Object(n.jsx)(be,{books:i})})),fe=a(8),he=a.n(fe),me=a(16),Oe=a.n(me),pe=function(e){var t=e.book,a=e.onSetIsEdit,i=e.onEditBook,l=Object(r.useState)({}),o=Object(c.a)(l,2),d=o[0],u=o[1],b=Object(r.useState)(""),j=Object(c.a)(b,2),f=j[0],h=j[1],m=t.image,g=t.name,B=t.author,N=t.publisher,F=t.date,I=t.id,S=O,M=p,z=v,R=x,H=k,A=Oe.a.form,D=Oe.a.form__imgCover,V=Oe.a.buttons,T=Oe.a.buttons__btn,U=Oe.a.error,J=Oe.a.wrong,K=function(e){var t=q(e);u(t),0===Object.keys(t).length&&(i(e,I),a(!1))},G=function(e){e.target.setAttribute("size",e.target.value.length+1)},P=[{name:g,label:y,id:S,error:null===d||void 0===d?void 0:d.name},{name:B,label:C,id:z,error:null===d||void 0===d?void 0:d.author},{name:N,label:L,id:H,error:null===d||void 0===d?void 0:d.publisher},{name:F,label:E,id:R,error:null===d||void 0===d?void 0:d.date}];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("form",{className:A,name:w,children:[Object(n.jsx)("h3",{children:"\u0420\u0435\u0436\u0438\u043c \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"}),Object(n.jsxs)("div",{className:D,children:[Object(n.jsx)("img",{src:m,alt:g}),Object(n.jsx)("input",{type:"file",id:M,onChange:function(e){if("file"===e.target.type){var t=e.target.files[0];if(e.target.files[0]){var a=new FileReader;a.onload=function(){e.target.previousSibling.src=a.result,h(a.result)},a.readAsDataURL(t)}}}})]}),P.map((function(e){var t=e.name,a=e.label,r=e.id,i=e.error,l=_()(Object(s.a)({},J,i));return Object(n.jsxs)("label",{children:[a,Object(n.jsx)("input",{className:l,type:"text",id:r,defaultValue:t,size:t.length+1,maxLength:t===F?4:null,onChange:t!==F?G:null}),i&&Object(n.jsx)("span",{className:U,children:i})]},r)}))]}),Object(n.jsxs)("div",{className:V,children:[Object(n.jsx)("button",{className:T,title:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f",onClick:function(){var e=document.forms.EDIT_FORM,t={name:e[S].value,image:f||m,author:e[z].value,publisher:e[H].value,date:e[R].value,id:I};K(t)},children:Object(n.jsx)(re,{name:"save"})}),Object(n.jsx)("button",{className:T,title:"\u041e\u0442\u043c\u0435\u043d\u0430",onClick:function(){return a(!1)},children:Object(n.jsx)(re,{name:"close"})})]})]})},ve=function(e){var t=e.book,a=e.onDeleteBook,i=e.onEditBook,l=Object(r.useState)(!1),o=Object(c.a)(l,2),s=o[0],d=o[1];Object(r.useEffect)((function(){d(!1)}),[t]);var _=t.image,u=t.name,b=t.author,j=t.publisher,f=t.date,h=t.id,m=he.a.wrapper,O=he.a.card,p=he.a.card__heading,v=he.a.card__textinfo,x=he.a.card__cover,k=he.a.card__name,g=he.a.card__author,B=he.a.card__otherDetails,N=he.a.card__publisher,y=he.a.card__date,C=he.a.card__buttons,L=he.a.card__btn,E=[{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",id:"edit",func:function(){d(!0)},link:"/items/".concat(h)},{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",id:"delete",func:function(){a(h)},link:"/items"},{title:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",id:"close",link:"/items"}];return Object(n.jsx)("div",{className:m,children:Object(n.jsxs)("article",{className:O,children:[Object(n.jsx)("h2",{className:p,children:"Book Card"}),s?Object(n.jsx)(pe,{book:t,onSetIsEdit:d,onEditBook:i}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:x,children:Object(n.jsx)("img",{src:_,alt:u})}),Object(n.jsxs)("div",{className:v,children:[Object(n.jsx)("h4",{className:k,children:u}),Object(n.jsx)("span",{className:g,children:b}),Object(n.jsxs)("div",{className:B,children:[Object(n.jsxs)("p",{children:["\u0418\u0437\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e",Object(n.jsx)("span",{className:N,children:j})]}),Object(n.jsxs)("p",{children:["\u0413\u043e\u0434 \u0438\u0437\u0434\u0430\u043d\u0438\u044f",Object(n.jsx)("span",{className:y,children:f})]})]})]}),Object(n.jsx)("div",{className:C,children:E.map((function(e){return Object(n.jsx)(ue.b,{to:e.link,className:L,title:e.title,onClick:null===e||void 0===e?void 0:e.func,children:Object(n.jsx)(re,{name:e.id})},e.id)}))})]})]})})},xe=function(e){Object(ae.a)(a,e);var t=Object(ne.a)(a);function a(){return Object(ee.a)(this,a),t.apply(this,arguments)}return Object(te.a)(a,[{key:"shouldComponentUpdate",value:function(e){return"search"!==e.location.state}},{key:"render",value:function(){var e=this.props,t=e.books,a=e.deleteBook,r=e.editBook,i=e.itemId,l=t.find((function(e){return e.id===Number(i)}));return t.length?l?Object(n.jsx)(ve,{book:l,onDeleteBook:a,onEditBook:r}):Object(n.jsx)("span",{style:{margin:"auto"},children:"\u0412\u044b\u0431\u0438\u0440\u0435\u0442\u0435 \u043a\u043d\u0438\u0433\u0443!"}):null}}]),a}(r.Component),ke={deleteBook:function(e){return{type:W,id:e}},editBook:function(e,t){return{type:X,payload:{data:e,id:t}}}},ge=Object(o.b)((function(e){return{books:e.books}}),ke)(xe),Be=a(36),Ne=a.n(Be),ye=function(){return Object(n.jsx)(ue.a,{children:Object(n.jsxs)("div",{className:Ne.a.app,children:[Object(n.jsx)(Q,{}),Object(n.jsx)(se,{}),Object(n.jsxs)("div",{className:Ne.a.app__wrapper,children:[Object(n.jsx)(je,{}),Object(n.jsx)(ie.a,{path:"/items/:id",children:function(e){var t=e.match,a=e.location;return Object(n.jsx)(ge,{itemId:(null===t||void 0===t?void 0:t.params.id)||null,location:a})}})]})]})})},Ce=a(18),Le=a(30),Ee=a(39),Fe=Object(Ce.b)({books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=0===e.length?1:e[e.length-1].id+1;switch(t.type){case Z:return[].concat(Object(Ee.a)(e),[Object(Le.a)(Object(Le.a)({},t.payload),{},{id:a++})]);case W:return e.filter((function(e){return e.id!==t.id}));case X:return e.map((function(e){return e.id===t.payload.id?Object(Le.a)({},t.payload.data):e}));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return t.payload;default:return e}}}),we=JSON.parse(localStorage.getItem("bookState"))||{books:[],filter:""},Ie=Object(Ce.c)(Fe,we);a(50),a(51);Ie.subscribe((function(){localStorage.setItem("bookState",JSON.stringify(Ie.getState()))})),l.a.render(Object(n.jsx)(o.a,{store:Ie,children:Object(n.jsx)(ye,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={wrapper:"BookCard_wrapper__3I71e",card:"BookCard_card__Pho3T",card__heading:"BookCard_card__heading__3Y-v8",card__editForm:"BookCard_card__editForm__2I_ln",card__cover:"BookCard_card__cover__3NpEB",card__file:"BookCard_card__file__1MX_r",card__textinfo:"BookCard_card__textinfo__LMAKJ",card__name:"BookCard_card__name__32kH5",card__author:"BookCard_card__author__G_jL0",card__otherDetails:"BookCard_card__otherDetails__CnZC2",card__buttons:"BookCard_card__buttons__1_0ji",card__btn:"BookCard_card__btn__2iEG_"}}},[[52,1,2]]]);
//# sourceMappingURL=main.d939e2d8.chunk.js.map