(this.webpackJsonptodos=this.webpackJsonptodos||[]).push([[0],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(31),o=a(19),i=a(2),l=1,s="SHOW_ALL",d="SHOW_COMPLETED",m="SHOW_ACTIVE",u=function(e){return{type:"ADD_COMENTARIO",id:e.id,payload:e}},p=function(e){return{type:"TODO_SELECCIONADO",payload:e}},b=function(e){return{type:"BORRAR_TODO",payload:e}},f=function(e){return{type:"EDITAR_COMENTARIO",payload:e}},E=function(e){var t=e.active,a=e.children,n=e.onClick;return c.a.createElement("button",{onClick:n,disabled:t,style:{margin:"4px"},className:"btn btn-outline-info"},a)},O=Object(i.b)((function(e,t){return{active:t.filter===e.visibilityFilter}}),(function(e,t){return{onClick:function(){return e({type:"SET_VISIBILITY_FILTER",filter:t.filter})}}}))(E),v=function(){return c.a.createElement("div",null,c.a.createElement("span",null,"Mostrar: "),c.a.createElement(O,{filter:s},"Todo"),c.a.createElement(O,{filter:m},"Activos"),c.a.createElement(O,{filter:d},"Completados"))},g=Object(i.b)()((function(e){var t,a=e.dispatch;return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:function(e){var n;(e.preventDefault(),t.value.trim())&&(a((n=t.value,{type:"ADD_TODO",id:l++,text:n})),t.value="")}},c.a.createElement("div",{className:"input-group mb-3"},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Agregar ToDo","aria-describedby":"button-addon2",ref:function(e){return t=e}}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("button",{className:"btn btnFontSize btn-outline-secondary",type:"submit",id:"button-addon2"},c.a.createElement("i",{className:"fas fa-plus iconoAgregar",style:{margin:"2px"}}),c.a.createElement("span",{className:"textoAgregar"},"AGREGAR"))))))})),y=a(9),N=a(20),C=function(e){var t=e.onClick,a=e.completed,n=e.text;return c.a.createElement("div",{onClick:t,style:{textDecoration:a?"line-through":"none",width:"50%",verticalAlign:"middle !important",textAlign:"center"}},c.a.createElement("span",{role:"img","aria-label":"blue-diamond"},"\ud83d\udd39")," ",n)},j=a(24),h=a.n(j),D=a(25);var I=Object(i.b)((function(e){return{todos:e.todos}}))((function(e){var t,a,r,o=Object(i.d)((function(e){return e.todos})),l=Object(i.d)((function(e){return e.seleccionado})),s=Object(n.useState)({id:0,comentario:"",comentarioID:""}),d=Object(N.a)(s,2),m=d[0],u=d[1],p=Object(i.c)(),b=Object(n.useState)(!0),E=Object(N.a)(b,2),O=E[0],v=E[1],g=Object(n.useState)(!1),y=Object(N.a)(g,2),C=y[0],j=y[1];o&&(t=o.filter((function(e){return e.id===parseInt(l.id)})).map((function(e){return e.mensajes})),a=(r=[]).concat.apply(r,Object(D.a)(t)).map((function(e){return{id:e.id,comentario:e.comentario,idComentario:e.comentarioID}})));var h=function(e){u({id:e.target.id,comentario:e.target.value,comentarioID:e.target.getAttribute("name")})},I=function(){v(!O),j(!C)},A=function(){p(f(m)),j(!C),v(!O)};return c.a.createElement("div",{className:"container-comentarios"},a.map((function(e){return c.a.createElement("div",{key:e.idComentario,className:"card comentario-item",style:{marginBottom:"10px"}},c.a.createElement("div",{className:"card-body descripcion "},c.a.createElement("div",{className:"cardIzquierda "},c.a.createElement("p",{style:{display:O?"block":"none"},className:"texto"},c.a.createElement("span",{role:"img","aria-label":"orange-diamond"},"\ud83d\udd38")," ",e.comentario),c.a.createElement("textarea",{id:e.id,name:e.idComentario,className:"form-control tArea",type:"text",placeholder:e.comentario,onChange:h,style:{display:C?"block":"none"}})),c.a.createElement("div",{className:"botonesCollapse "},c.a.createElement("button",{className:"btn btn-warning btnFontSize btnCollapseEditar",style:{color:"white",display:O?"block":"none"},onClick:I},c.a.createElement("i",{id:e.id,className:"fas fa-edit"}),c.a.createElement("span",{id:e.id,className:"textoSpanOcultar"},"Editar Comentario")),c.a.createElement("button",{className:"btn btn-success btnFontSize btnCollapseActualizar",style:{color:"white",display:C?"block":"none"},onClick:A},c.a.createElement("i",{id:e.id,className:"fas fa-edit"}),c.a.createElement("span",{id:e.id,className:"textoSpanOcultar"},"Actualizar"))),c.a.createElement("div",{className:"botonesCollapse "},c.a.createElement("button",{className:"btn btn-danger btnFontSize btnCollapseCancelar",style:{color:"white",display:C?"block":"none"},onClick:I},c.a.createElement("i",{id:e.id,className:"fas fa-times-circle"}),c.a.createElement("span",{id:e.id,className:"textoSpanOcultar"},"Cancelar")))))})))}));var A=Object(i.b)()((function(e){var t=e.todos,a=e.toggleTodo,r=e.dispatch,o=Object(n.useState)({id:0,comentario:"",comentarioID:h()()}),i=Object(N.a)(o,2),l=i[0],s=i[1],d=function(e){s(Object(y.a)({},l,{id:e.target.id,comentario:e.target.value}))},m=function(){r(u(l))},f=function(e){r(p(e.target.id))},E=function(e){e.target.value=""};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"accordion",id:"accordionExample"},t.map((function(e){return c.a.createElement("div",{key:e.id,className:"card"},c.a.createElement("div",{className:"card-header",id:"headingOne"},c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(C,Object.assign({},e,{onClick:function(){return a(e.id)}})),c.a.createElement("div",{id:"botonsito",className:"botonesCollapse "},c.a.createElement("button",{id:e.id,className:"btn btnFontSize btn-danger btnCollapseBorrar",onClick:function(){return r(b(e.id))}},c.a.createElement("i",{className:"fas fa-trash-alt"}))),c.a.createElement("div",{id:"botonsito",className:"botonesCollapse"},c.a.createElement("button",{id:e.id,onClick:f,className:"btn btnFontSize btn-info btnCollapseComentarios ","data-toggle":"collapse","data-target":"#collapse".concat(e.id),"aria-expanded":"false","aria-controls":"collapse".concat(e.id)},c.a.createElement("i",{id:e.id,className:"far fa-comment-alt",style:{marginRight:"3px"}}),c.a.createElement("span",{id:e.id,className:"textoSpanOcultar"},"Ver Comentarios"))))),c.a.createElement("div",{id:"collapse".concat(e.id),className:"collapse","aria-labelledby":"headingOne","data-parent":"#accordionExample"},c.a.createElement("div",{className:"card-body row mx-auto"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement(I,null)),c.a.createElement("div",{className:"form-group col-lg-6 col-sm-12 mx-auto"},c.a.createElement("input",{id:e.id,type:"text",onChange:d,onBlur:E,className:"form-control"})),c.a.createElement("div",{className:"col-lg-6 col-sm-12"},c.a.createElement("button",{className:"btnFontSize btn btn-success rounded-pill mt-1",onClick:function(){return t=e.id,s(Object(y.a)({},l,{id:t,comentarioID:h()()})),void m();var t},style:{float:"left"}},"Agregar comentario")))))}))))})),x=function(e,t){switch(t){case s:return e;case d:return e.filter((function(e){return e.completed}));case m:return e.filter((function(e){return!e.completed}));default:throw new Error("Unknown filter: "+t)}},T=Object(i.b)((function(e){return{todos:x(e.todos,e.visibilityFilter)}}),(function(e){return{toggleTodo:function(t){return e(function(e){return{type:"TOGGLE_TODO",id:e}}(t))}}}))(A),S=(a(98),a(86)),k=(a(146),function(){return c.a.createElement("div",{key:h()(),className:"centered-content"},c.a.createElement("div",{className:"container-todos row"},c.a.createElement("div",{className:"sideMenu col-lg-12 col-sm-12"},c.a.createElement(S.a,{style:{maxHeight:"95%"},autoHide:!1},c.a.createElement(g,null),c.a.createElement(T,null),c.a.createElement(v,null)))))}),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(D.a)(e),[{id:t.id,text:t.text,completed:!1,mensajes:[]}]);case"TOGGLE_TODO":return e.map((function(e){return e.id===t.id?Object(y.a)({},e,{completed:!e.completed}):e}));case"ADD_COMENTARIO":return e.map((function(e){return e.id===parseInt(t.id)?Object(y.a)({},e,{mensajes:[t.payload].concat(Object(D.a)(e.mensajes))}):e}));case"BORRAR_TODO":return e.filter((function(e){return e.id!==t.payload}));case"EDITAR_COMENTARIO":return e.map((function(e){return Object(y.a)({},e,{mensajes:e.mensajes.map((function(e){return e.comentarioID===t.payload.comentarioID?Object(y.a)({},e,{comentario:t.payload.comentario}):Object(y.a)({},e)}))})}));default:return e}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},w={id:-1},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TODO_SELECCIONADO":return Object(y.a)({},e,{id:t.payload});default:return e}},L=Object(o.b)({todos:_,visibilityFilter:R,seleccionado:F}),z=Object(o.c)(L);Object(r.render)(c.a.createElement(i.a,{store:z},c.a.createElement(k,null)),document.getElementById("root"))},87:function(e,t,a){e.exports=a(147)},98:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.12b05a51.chunk.js.map