(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{104:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(7),i=a(9),o=a(8),c=a(0),l=a(1),s=a(5),u=a(17),d=a(54),p=a(34),h=a(98),v=a.n(h),j=function(e){return Object(c.jsxs)("div",{className:v.a.CheckoutSummary,children:[Object(c.jsx)("h1",{children:"We hope it tastes well!"}),Object(c.jsxs)("div",{style:{width:"100%",margin:"auto"},children:[Object(c.jsx)(d.a,{ingredients:e.ingredients}),Object(c.jsx)(p.a,{btnType:"Danger",clicked:e.CheckoutCancelled,children:"CANCEL"}),Object(c.jsx)(p.a,{btnType:"Success",clicked:e.CheckoutContinued,children:"CONTINUE"})]})]})},m=a(25),b=a(43),g=a(99),f=a.n(g),O=a(20),C=a(96),y=a(44),x=a(18),k=a(4),I=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1,errorMessage:"Enter a valid name"},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1,errorMessage:"Enter a valid street"},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:"",validation:{required:!0,minLength:5,maxLength:5,isNumeric:!0},valid:!1,touched:!1,errorMessage:"Enter a valid zip code"},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1,errorMessage:"Enter a valid country"},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-Mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1,errorMessage:"Enter a valid mail"},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1},e.orderHandler=function(t){t.preventDefault();var a={};for(var n in e.state.orderForm)a[n]=e.state.orderForm[n].value;var r={ingredients:e.props.ings,price:e.props.price,orderData:a,userId:e.props.userId};e.props.onOrderBurger(r,e.props.token)},e.inputChangedHandler=function(t,a){var n=Object(k.b)(e.state.orderForm[a],{value:t.target.value,valid:Object(k.a)(t.target.value,e.state.orderForm[a].validation),touched:!0}),r=Object(k.b)(e.state.orderForm,Object(m.a)({},a,n)),i=!0;for(var o in r)i=r[o].valid&&i;e.setState({orderForm:r,formIsValid:i})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=[];for(var a in this.state.orderForm)t.push({id:a,config:this.state.orderForm[a]});var n=Object(c.jsxs)("form",{onSubmit:this.orderHandler,children:[t.map((function(t){return Object(c.jsx)(C.a,{elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,errorMessage:t.config.errorMessage,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(a){return e.inputChangedHandler(a,t.id)}},t.id)})),Object(c.jsx)(p.a,{btnType:"Success",disabled:!this.state.formIsValid,children:"ORDER"})]});return this.props.loading&&(n=Object(c.jsx)(b.a,{})),Object(c.jsxs)("div",{className:f.a.ContactData,children:[Object(c.jsx)("h4",{children:"Enter your Contact Data"}),n]})}}]),a}(l.Component),_=Object(u.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,a){return e(x.g(t,a))}}}))(Object(y.a)(I,O.a)),E=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).CheckoutCancelled=function(){e.props.history.goBack()},e.CheckoutContinued=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(r.a)(a,[{key:"render",value:function(){var e=Object(c.jsx)(s.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?Object(c.jsx)(s.a,{to:"/"}):null;e=Object(c.jsxs)("div",{children:[t,Object(c.jsx)(j,{ingredients:this.props.ings,CheckoutCancelled:this.CheckoutCancelled,CheckoutContinued:this.CheckoutContinued}),Object(c.jsx)(s.b,{path:this.props.match.path+"/contact-data",component:_})]})}return Object(c.jsx)("div",{children:e})}}]),a}(l.Component);t.default=Object(u.b)((function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}}))(E)},96:function(e,t,a){"use strict";var n=a(15),r=a(0),i=(a(1),a(97)),o=a.n(i);t.a=function(e){var t=null,a=null,i=[o.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&(i.push(o.a.Invalid),a=Object(r.jsx)("p",{className:o.a.InvalidMessage,children:e.errorMessage})),e.elementType){case"input":t=Object(r.jsx)("input",Object(n.a)(Object(n.a)({className:i.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"textarea":t=Object(r.jsx)("textarea",Object(n.a)(Object(n.a)({className:i.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"select":t=Object(r.jsx)("select",Object(n.a)(Object(n.a)({className:i.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed,children:e.elementConfig.options.map((function(e){return Object(r.jsx)("option",{value:e.value,children:e.displayValue},e.value)}))}));break;default:t=Object(r.jsx)("input",Object(n.a)(Object(n.a)({className:i.join(" ")},e.elementConfig),{},{value:e.value}))}return Object(r.jsxs)("div",{className:o.a.Input,children:[Object(r.jsx)("label",{className:o.a.Label,children:e.label}),t,a]})}},97:function(e,t,a){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",InputElement:"Input_InputElement__2m88K",Invalid:"Input_Invalid__16Mis",InvalidMessage:"Input_InvalidMessage__3liTp"}},98:function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__3PsXi"}},99:function(e,t,a){e.exports={ContactData:"ContactData_ContactData__20AK_"}}}]);
//# sourceMappingURL=3.dde3ee54.chunk.js.map