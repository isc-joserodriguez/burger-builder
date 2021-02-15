(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"n",(function(){return i})),n.d(t,"p",(function(){return c})),n.d(t,"f",(function(){return a})),n.d(t,"k",(function(){return o})),n.d(t,"l",(function(){return s})),n.d(t,"j",(function(){return u})),n.d(t,"m",(function(){return d})),n.d(t,"h",(function(){return l})),n.d(t,"i",(function(){return h})),n.d(t,"g",(function(){return b})),n.d(t,"d",(function(){return j})),n.d(t,"e",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return g})),n.d(t,"o",(function(){return O}));var r="ADD_INGREDIENTS",i="REMOVE_INGREDIENTS",c="SET_INGREDIENTS",a="FETCH_INGREDIENTS_FAILED",o="PURCHASE_BURGER_START",s="PURCHASE_BURGER_SUCCESS",u="PURCHASE_BURGER_FAIL",d="PURCHASE_INIT",l="FETCH_ORDERS_START",h="FETCH_ORDERS_SUCCESS",b="FETCH_ORDERS_FAIL",j="AUTH_START",p="AUTH_SUCCESS",f="AUTH_FAIL",g="AUTH_LOGOUT",O="SET_AUTH_REDIRECT_PATH"},,function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(15),i=function(e,t){return Object(r.a)(Object(r.a)({},e),t)},c=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},,,,,,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"i",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"g",(function(){return u})),n.d(t,"h",(function(){return d})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return g})),n.d(t,"f",(function(){return p})),n.d(t,"j",(function(){return O})),n.d(t,"c",(function(){return m}));var r=n(2),i=n(20),c=function(e){return{type:r.a,ingredientName:e}},a=function(e){return{type:r.n,ingredientName:e}},o=function(){return function(e){i.a.get("https://react-burger-builder-aecb3-default-rtdb.firebaseio.com/ingredients.json").then((function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))})).catch((function(t){e({type:r.f})}))}},s=n(15),u=function(e,t){return function(n){n({type:r.k}),i.a.post("/orders.json?auth=".concat(t),e).then((function(t){n(function(e,t){return{type:r.l,orderId:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:r.j,error:e}}(e))}))}},d=function(){return{type:r.m}},l=function(e,t){return function(n){n({type:r.h});var c="?auth=".concat(e,'&orderBy="userId"&equalTo="').concat(t,'"');i.a.get("/orders.json".concat(c)).then((function(e){var t,i=[];for(var c in e.data)i.push(Object(s.a)(Object(s.a)({},e.data[c]),{},{id:c}));n((t=i,{type:r.i,orders:t}))})).catch((function(e){n(function(e){return{type:r.g,error:e}}(e))}))}},h=n(32),b=n.n(h),j=function(e,t){return{type:r.e,idToken:e,userId:t}},p=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},f=function(e){return function(t){setTimeout((function(){t(p())}),1e3*e)}},g=function(e,t,n){return function(i){i({type:r.d});var c={email:e,password:t,returnSecureToken:!0},a="https://identitytoolkit.googleapis.com/v1/accounts:signUp";n||(a="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword"),b.a.post("".concat(a,"?key=AIzaSyBhzgiFUlkHgotZYUR97-kA7xn1ayzJXoE"),c).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),i(j(e.data.idToken,e.data.localId)),i(f(e.data.expiresIn))})).catch((function(e){var t;i((t=e.response.data.error,{type:r.b,error:t}))}))}},O=function(e){return{type:r.o,path:e}},m=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n>new Date){var r=localStorage.getItem("userId");e(j(t,r)),e(f((n.getTime()-(new Date).getTime())/1e3))}else e(p())}else e(p())}}},function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Bacon:"BurgerIngredient_Bacon__1KK6n"}},function(e,t,n){"use strict";var r=n(32),i=n.n(r).a.create({baseURL:"https://react-burger-builder-aecb3-default-rtdb.firebaseio.com/"});t.a=i},,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},,,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__O8649",Label:"BuildControl_Label__TQkTk",Less:"BuildControl_Less__3Ttg8",More:"BuildControl_More__1MY7B"}},,,function(e,t,n){"use strict";var r=n(0),i=(n(1),n(61)),c=n.n(i);t.a=function(e){return e.show?Object(r.jsx)("div",{className:c.a.Backdrop,onClick:e.clicked}):null}},function(e,t,n){"use strict";var r=n(6),i=n(7),c=n(9),a=n(8),o=n(0),s=n(1),u=n(63),d=n.n(u),l=n(12),h=n(30),b=function(e){Object(c.a)(n,e);var t=Object(a.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return Object(o.jsxs)(l.a,{children:[Object(o.jsx)(h.a,{show:this.props.show,clicked:this.props.modalClosed}),Object(o.jsx)("div",{className:d.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"},children:this.props.children})]})}}]),n}(s.Component);t.a=b},,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},function(e,t,n){"use strict";var r=n(0),i=(n(1),n(42)),c=n.n(i);t.a=function(e){return Object(r.jsx)("button",{className:[c.a.Button,c.a[e.btnType]].join(" "),onClick:e.clicked,disabled:e.disabled,children:e.children})}},,,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",OrderButton:"BuildControls_OrderButton___M-Du",enable:"BuildControls_enable__9xLsD"}},function(e,t,n){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},function(e,t,n){"use strict";var r=n(0),i=(n(1),n(64)),c=n.n(i);t.a=function(){return Object(r.jsx)("div",{className:c.a.Loader,children:"Loading..."})}},function(e,t,n){"use strict";var r=n(15),i=n(6),c=n(7),a=n(9),o=n(8),s=n(0),u=n(1),d=n(31),l=n(12);t.a=function(e,t){return function(n){Object(a.a)(h,n);var u=Object(o.a)(h);function h(){var e;Object(i.a)(this,h);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=u.call.apply(u,[this].concat(n))).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(c.a)(h,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return Object(s.jsxs)(l.a,{children:[Object(s.jsx)(d.a,{show:null!=this.state.error,modalClosed:this.errorConfirmedHandler,children:this.state.error?this.state.error.message:null}),Object(s.jsx)(e,Object(r.a)({},this.props))]})}}]),h}(u.Component)}},,,,,,,,,,function(e,t,n){"use strict";var r=n(65),i=n(0),c=(n(1),n(19)),a=n.n(c),o=function(e){var t=null;switch(e.type){case"bread-bottom":t=Object(i.jsx)("div",{className:a.a.BreadBottom});break;case"bread-top":t=Object(i.jsxs)("div",{className:a.a.BreadTop,children:[Object(i.jsx)("div",{className:a.a.Seeds1}),Object(i.jsx)("div",{className:a.a.Seeds2})]});break;case"meat":t=Object(i.jsx)("div",{className:a.a.Meat});break;case"cheese":t=Object(i.jsx)("div",{className:a.a.Cheese});break;case"bacon":t=Object(i.jsx)("div",{className:a.a.Bacon});break;case"salad":t=Object(i.jsx)("div",{className:a.a.Salad});break;default:t=null}return t},s=n(62),u=n.n(s);t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.a)(Array(e.ingredients[t])).map((function(e,n){return Object(i.jsx)(o,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(i.jsx)("p",{children:"Please start adding ingredients!"})),Object(i.jsxs)("div",{className:u.a.Burger,children:[Object(i.jsx)(o,{type:"bread-top"}),t,Object(i.jsx)(o,{type:"bread-bottom"})]})}},,,function(e,t,n){e.exports={Content:"Layout_Content__3H3X8"}},function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__m405X"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},function(e,t,n){e.exports={Burger:"Burger_Burger__10T8F"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1-5dN"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__1twK-",load6:"Spinner_load6__1_74m",round:"Spinner_round__3G_CY"}},,,,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1),c=n.n(i),a=n(28),o=n.n(a),s=n(22),u=n(17),d=n(21),l=n(56),h=(n(75),n(6)),b=n(7),j=n(9),p=n(8),f=n(5),g=n(15),O=function(e){return function(t){Object(j.a)(i,t);var n=Object(p.a)(i);function i(){var e;Object(h.a)(this,i);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).state={component:null},e}return Object(b.a)(i,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?Object(r.jsx)(e,Object(g.a)({},this.props)):null}}]),i}(i.Component)},m=n(12),_=n(57),v=n.n(_),x=n(33),y=n.n(x),k=n.p+"static/media/burger-logo.ec69c7f6.png",S=n(58),C=n.n(S),I=function(e){return Object(r.jsx)("div",{className:C.a.Logo,style:{height:e.height},children:Object(r.jsx)("img",{src:k,alt:"MyBurger"})})},T=n(59),B=n.n(T),N=n(38),w=n.n(N),D=function(e){return Object(r.jsx)("li",{className:w.a.NavigationItem,children:Object(r.jsx)(s.b,{to:e.link,exact:e.exact,activeClassName:w.a.active,children:e.children})})},A=function(e){return Object(r.jsxs)("ul",{className:B.a.NavigationItems,children:[Object(r.jsx)(D,{link:"/",exact:!0,children:"Burger Builder"}),e.isAuthenticated?Object(r.jsx)(D,{link:"/orders",children:"Orders"}):null,e.isAuthenticated?Object(r.jsx)(D,{link:"/logout",children:"Logout"}):Object(r.jsx)(D,{link:"/auth",children:"Authenticate"})]})},L=n(60),R=n.n(L),E=function(e){return Object(r.jsxs)("div",{className:R.a.DrawerToggle,onClick:e.clicked,children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})},H=function(e){return Object(r.jsxs)("header",{className:y.a.Toolbar,children:[Object(r.jsx)(E,{clicked:e.drawerToggleClicked}),Object(r.jsx)("div",{className:y.a.Logo,children:Object(r.jsx)(I,{children:"LOGO"})}),Object(r.jsx)("nav",{className:y.a.DesktopOnly,children:Object(r.jsx)(A,{isAuthenticated:e.isAuth})})]})},P=n(24),U=n.n(P),M=n(30),F=function(e){var t=[U.a.SideDrawer,U.a.Close];return e.open&&(t=[U.a.SideDrawer,U.a.Open]),Object(r.jsxs)(m.a,{children:[Object(r.jsx)(M.a,{show:e.open,clicked:e.closed}),Object(r.jsxs)("div",{className:t.join(" "),onClick:e.closed,children:[Object(r.jsx)("div",{className:U.a.Logo,children:Object(r.jsx)(I,{})}),Object(r.jsx)("nav",{children:Object(r.jsx)(A,{isAuthenticated:e.isAuth})})]})]})},z=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(m.a,{children:[Object(r.jsx)(H,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),Object(r.jsx)(F,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerToggleHandler}),Object(r.jsx)("main",{className:v.a.Content,children:this.props.children})]})}}]),n}(i.Component),G=Object(u.b)((function(e){return{isAuthenticated:!!e.auth.token}}))(z),Y=n(54),q=n(41),X=n.n(q),J=n(27),K=n.n(J),W=function(e){return Object(r.jsxs)("div",{className:K.a.BuildControl,children:[Object(r.jsx)("div",{className:K.a.Label,children:e.label}),Object(r.jsx)("button",{className:K.a.Less,onClick:e.removed,disabled:e.disabled,children:"Less"}),Object(r.jsx)("button",{className:K.a.More,onClick:e.added,children:"More"})]})},$=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],V=function(e){return Object(r.jsxs)("div",{className:X.a.BuildControls,children:[Object(r.jsxs)("p",{children:["Current Price: ",Object(r.jsx)("strong",{children:e.price.toFixed(2)})]}),$.map((function(t){return Object(r.jsx)(W,{label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]},t.label)})),Object(r.jsx)("button",{className:X.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered,children:e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"})]})},Z=n(31),Q=n(34),ee=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return Object(r.jsxs)("li",{children:[Object(r.jsxs)("span",{style:{textTransform:"capitalize"},children:[" ",t]}),": ",e.props.ingredients[t]]},t)}));return Object(r.jsxs)(m.a,{children:[Object(r.jsx)("h3",{children:"Your Order"}),Object(r.jsx)("p",{children:"A delicius burger with the following ingrgedients:"}),Object(r.jsx)("ul",{children:t}),Object(r.jsx)("p",{children:Object(r.jsxs)("strong",{children:["Total Price: ",this.props.price.toFixed(2)]})}),Object(r.jsx)("p",{children:"Continue to Checkout?"}),Object(r.jsx)(Q.a,{btnType:"Danger",clicked:this.props.purchaseCanceled,children:"CANCEL"}),Object(r.jsx)(Q.a,{btnType:"Success",clicked:this.props.purchaseContinued,children:"CONTINUE"})]})}}]),n}(i.Component),te=n(43),ne=n(44),re=n(18),ie=n(20),ce=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={purchasing:!1},e.purshaseHandler=function(){e.props.isAuthenticated?e.setState({purchasing:!0}):(e.props.onSetRedirectPath("/checkout"),e.props.history.push("/auth"))},e.purshaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.props.onInitPurchase(),e.props.history.push("/checkout")},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){var e=Object(g.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,i=this.props.error?Object(r.jsx)("p",{children:"Ingredients can't be loaded!"}):Object(r.jsx)(te.a,{});return this.props.ings&&(i=Object(r.jsxs)(m.a,{children:[Object(r.jsx)(Y.a,{ingredients:this.props.ings}),Object(r.jsx)(V,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemove,disabled:e,price:this.props.price,ordered:this.purshaseHandler,isAuth:this.props.isAuthenticated,purchasable:this.updatePurchaseState(this.props.ings)})]}),n=Object(r.jsx)(ee,{purchaseCanceled:this.purshaseCancelHandler,purchaseContinued:this.purchaseContinueHandler,ingredients:this.props.ings,price:this.props.price})),Object(r.jsxs)(m.a,{children:[Object(r.jsx)(Z.a,{show:this.state.purchasing,modalClosed:this.purshaseCancelHandler,children:n}),i]})}}]),n}(i.Component),ae=Object(u.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:!!e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e(re.a(t))},onIngredientRemove:function(t){return e(re.i(t))},onInitIngredients:function(){return e(re.e())},onInitPurchase:function(){return e(re.h())},onSetRedirectPath:function(t){return e(re.j(t))}}}))(Object(ne.a)(ce,ie.a)),oe=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return Object(r.jsx)(f.a,{to:"/"})}}]),n}(i.Component),se=Object(u.b)(null,(function(e){return{onLogout:function(){return e(re.f())}}}))(oe),ue=O((function(){return n.e(3).then(n.bind(null,104))})),de=O((function(){return n.e(5).then(n.bind(null,105))})),le=O((function(){return n.e(4).then(n.bind(null,102))})),he=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=Object(r.jsxs)(f.d,{children:[Object(r.jsx)(f.b,{path:"/auth",component:le}),Object(r.jsx)(f.b,{path:"/",exact:!0,component:ae}),Object(r.jsx)(f.a,{to:"/"})]});return this.props.isAuthenticated&&(e=Object(r.jsxs)(f.d,{children:[Object(r.jsx)(f.b,{path:"/checkout",component:ue}),Object(r.jsx)(f.b,{path:"/orders",component:de}),Object(r.jsx)(f.b,{path:"/logout",component:se}),Object(r.jsx)(f.b,{path:"/auth",component:le}),Object(r.jsx)(f.b,{path:"/",exact:!0,component:ae}),Object(r.jsx)(f.a,{to:"/"})]})),Object(r.jsx)("div",{children:Object(r.jsx)(G,{children:e})})}}]),n}(i.Component),be=Object(f.g)(Object(u.b)((function(e){return{isAuthenticated:!!e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e(re.c())}}}))(he)),je=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,103)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),c(e),a(e)}))},pe=n(25),fe=n(2),ge=n(4),Oe={ingredients:null,totalPrice:4,error:!1,building:!1},me={salad:.5,cheese:.4,meat:1.3,bacon:.7},_e=function(e,t){var n=Object(pe.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Object(ge.b)(e.ingredients,n),totalPrice:e.totalPrice+me[t.ingredientName],building:!0};return Object(ge.b)(e,r)},ve=function(e,t){var n=Object(pe.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Object(ge.b)(e.ingredients,n),totalPrice:e.totalPrice-me[t.ingredientName],building:!0};return Object(ge.b)(e,r)},xe=function(e,t){return Object(ge.b)(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!1,building:!1})},ye=function(e,t){return Object(ge.b)(e,{error:!0})},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe.a:return _e(e,t);case fe.n:return ve(e,t);case fe.p:return xe(e,t);case fe.f:return ye(e);default:return e}},Se={orders:[],loading:!1,purchased:!1},Ce=function(e,t){return Object(ge.b)(e,{purchased:!1})},Ie=function(e,t){return Object(ge.b)(e,{purchased:!0})},Te=function(e,t){var n=Object(ge.b)(t.orderData,{id:t.orderId});return Object(ge.b)(e,{loading:!1,purchased:!0,orders:e.orders.concat(n)})},Be=function(e,t){return Object(ge.b)(e,{loading:!1})},Ne=function(e,t){return Object(ge.b)(e,{loading:!0})},we=function(e,t){return Object(ge.b)(e,{orders:t.orders,loading:!1})},De=function(e,t){return Object(ge.b)(e,{loading:!1})},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe.m:return Ce(e);case fe.k:return Ie(e);case fe.l:return Te(e,t);case fe.j:return Be(e);case fe.h:return Ne(e);case fe.i:return we(e,t);case fe.g:return De(e);default:return e}},Le={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},Re=function(e,t){return Object(ge.b)(e,{error:null,loading:!0})},Ee=function(e,t){return Object(ge.b)(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},He=function(e,t){return Object(ge.b)(e,{error:t.error,loading:!1})},Pe=function(e,t){return Object(ge.b)(e,{token:null,userId:null})},Ue=function(e,t){return Object(ge.b)(e,{authRedirectPath:t.path})},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe.d:return Re(e);case fe.e:return Ee(e,t);case fe.b:return He(e,t);case fe.c:return Pe(e);case fe.o:return Ue(e,t);default:return e}},Fe=d.d,ze=Object(d.c)({burgerBuilder:ke,order:Ae,auth:Me}),Ge=Object(d.e)(ze,Fe(Object(d.a)(l.a))),Ye=Object(r.jsx)(u.a,{store:Ge,children:Object(r.jsx)(s.a,{basename:"/burger-builer/live/",children:Object(r.jsx)(be,{})})});o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Ye}),document.getElementById("root")),je()}],[[95,1,2]]]);
//# sourceMappingURL=main.64f08e5a.chunk.js.map