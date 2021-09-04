(this.webpackJsonpwherever=this.webpackJsonpwherever||[]).push([[0],{56:function(t,e,n){},57:function(t,e,n){},72:function(t,e,n){"use strict";n.r(e);var r=n(1),s=n(34),c=n.n(s),a=(n(56),n(57),n(0)),i=n(5),o=n(3),p=n(4),j=n(13),u=n(2),l=function(t){Object(o.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).handleClick=function(e){return t.props.history.push("/".concat(e.target.id))},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{id:"greeting-options",children:[Object(u.jsx)("button",{onClick:this.handleClick,id:"signin",className:"greeting-option",children:"Sign In"}),Object(u.jsx)("button",{onClick:this.handleClick,id:"signup",className:"greeting-option",children:"Sign Up"}),Object(u.jsx)("button",{onClick:this.handleClick,id:"planets",className:"greeting-option",children:"View Planets"})]})}}]),n}(r.Component),h=Object(j.h)(l);function b(){return Object(u.jsxs)("div",{id:"greeting",children:[Object(u.jsx)("h1",{id:"welcome-header",children:"Welcome to Wherever Space Cruise"}),Object(u.jsx)("p",{children:"Sign in or sign up to book a trip."}),Object(u.jsx)("p",{children:"Learn more about the planets without signing up."}),Object(u.jsx)(h,{})]})}var d=n(23),O=n.n(d),m=n(38),f=n(8),g=n(15);var x=n(48),v=n.n(x);function y(t){return Object(u.jsx)("div",{id:"spinner",children:Object(u.jsx)(v.a,{size:25,loading:t.loader,color:"#d9ed92"})})}var S=function(t){Object(o.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(a.a)(this,n),(r=e.call(this,t)).handleChange=function(t){var e=r.state.user;e[t.target.name]=t.target.value,r.setState(Object(f.a)(Object(f.a)({},r.state),{},{user:e}))},r.handleSubmit=function(){var t=Object(m.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),r.setState(Object(f.a)(Object(f.a)({},r.state),{},{loader:!0})),"Sign In"!==r.props.serve){t.next=7;break}return t.next=5,r.props.signIn(r.state.user);case 5:t.next=10;break;case 7:if("Sign Up"!==r.props.serve){t.next=10;break}return t.next=10,r.props.addUser(r.state.user);case 10:localStorage.getItem("userId")&&(r.setState(Object(f.a)(Object(f.a)({},r.state),{},{loader:!1})),r.props.history.push("/trips"));case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),r.state={user:{name:"",password:""},loader:!1},r}return Object(i.a)(n,[{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(y,{loader:this.state.loader}),Object(u.jsxs)("div",{className:"user-form",children:[Object(u.jsx)("h1",{children:this.props.serve}),Object(u.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(u.jsx)("br",{}),Object(u.jsx)("label",{children:"Username:"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"text",onChange:this.handleChange,value:this.state.name,name:"name"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{children:"Password:"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"password",onChange:this.handleChange,name:"password"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"submit",className:"submit-button",value:this.props.serve})]})]})]})}}]),n}(r.Component),k=Object(j.h)(Object(g.b)(null,{signIn:function(t){return function(e){var n={headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify({user:t})};return fetch("https://wherever-api.herokuapp.com/signin",n).then((function(t){return t.json()})).then((function(t){t.errors?alert(t.errors):e({type:"SIGN_IN",payload:t})}))}},addUser:function(t){return function(e){var n={headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify({user:t})};return fetch("https://wherever-api.herokuapp.com/users",n).then((function(t){return t.json()})).then((function(t){return e({type:"ADD_USER",payload:t})}))}}})(S));function C(){return function(t){fetch("https://wherever-api.herokuapp.com/planets").then((function(t){return t.json()})).then((function(e){return t({type:"FETCH_PLANETS",payload:e})}))}}var I=function(t){Object(o.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={departure:"",planets:[]},t.handleSubmit=function(e){e.preventDefault();var n="".concat(Math.floor(Math.random()*Math.pow(10,8))),r=t.state.planets.filter((function(t){return!0===t.checked})).map((function(t){return t.id}));void 0===t.props.trip?(t.props.postTrip({departure:e.target.children[2].value,user_id:t.props.user.id,planet_ids:r,ticket_attributes:{passcode:n}}),t.props.history.push("/trips")):t.props.trip&&(t.props.editTrip(Object(f.a)(Object(f.a)({},t.props.trip),{},{planet_ids:r,departure:e.target.children[2].value})),t.props.history.push("/trips/".concat(t.props.trip.id)))},t.handleChange=function(e){var n=t.state.planets;n.map((function(t){return t.name===e.target.name?t.checked=e.target.checked:t})),t.setState({planets:n})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){0===this.props.planets.length?this.props.fetchPlanets():this.setState({planets:this.props.planets.map((function(t){return Object.assign({},t,{checked:!1})}))})}},{key:"componentDidUpdate",value:function(t){0===t.planets.length&&this.setState({planets:this.props.planets.map((function(t){return Object.assign({},t,{checked:!1})}))})}},{key:"render",value:function(){var t=this;return Object(u.jsx)("div",{className:"trip-form",children:Object(u.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(u.jsx)("label",{children:Object(u.jsx)("strong",{children:"Select Date:"})}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"date",id:"start",name:"trip-start"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{children:Object(u.jsx)("strong",{children:"Select Planet(s):"})}),Object(u.jsx)("br",{}),this.state.planets.map((function(e){return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"checkbox",onChange:t.handleChange,name:e.name,checked:e.checked},e.name),e.name]},e.id)})),Object(u.jsx)("input",{type:"submit",className:"submit-button",value:"Let's Go!"})]})})}}]),n}(r.Component),T=Object(j.h)(Object(g.b)((function(t){return{user:t.user,planets:t.planets}}),{fetchPlanets:C,postTrip:function(t){return function(e){var n={headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify({trip:t})};fetch("https://wherever-api.herokuapp.com/trips",n).then((function(t){return t.json()})).then((function(t){e({type:"POST_TRIP",payload:t})}))}},editTrip:function(t){return function(e){var n={headers:{"Content-Type":"application/json",Accept:"application/json"},method:"PATCH",body:JSON.stringify({trip:t})};fetch("https://wherever-api.herokuapp.com/trips/".concat(t.id),n).then((function(t){return t.json()})).then((function(t){return e({type:"EDIT_TRIP",payload:t})}))}}})(I)),w=n(18);var P=function(){var t=Object(j.f)(),e=Object(g.d)((function(t){return t.trips}));return Object(u.jsxs)("div",{id:"trips-div",children:[Object(u.jsx)("h2",{children:"Reserved Trips"}),Object(u.jsx)("ol",{children:e.map((function(t){return Object(u.jsx)("li",{className:"trips",children:Object(u.jsxs)(w.b,{to:"/trips/".concat(t.id),children:["Destionation(s): ",t.planets.map((function(t){return t.name})).join(", ")]})},t.id)}))}),Object(u.jsx)("button",{id:"new-trip-button",onClick:function(){return t.push("/trips/new")},children:"New Trip"})]})};function _(){var t=Object(g.c)(),e=Object(g.d)((function(t){return t.trips})),n=Object(j.g)(),r=Object(j.f)(),s=e.find((function(t){return t.id===parseInt(n.id,10)}));return Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{exact:!0,path:"/trips/:id",children:Object(u.jsxs)("div",{className:"trip",children:[Object(u.jsxs)("h3",{children:[" Planets: ",s.planets.map((function(t){return t.name})).join(", ")," "]}),Object(u.jsxs)("h4",{children:[" Departure Date: ",s.departure]}),Object(u.jsx)("button",{id:"delete-trip-button",onClick:function(e){t(function(t){return function(e){fetch("https://wherever-api.herokuapp.com/trips/".concat(t.id),{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"DELETE"}).then((function(t){return t.json()})).then((function(t){return e({type:"CANCEL_TRIP",payload:t.id})}))}}(s)),r.push("/trips")},children:"Cancel Trip"}),Object(u.jsx)("button",{id:"edit-trip-button",onClick:function(){return r.push("/trips/".concat(s.id,"/edit"))},children:"Change Trip"})]})}),Object(u.jsx)(j.a,{exact:!0,path:"/trips/:id/edit",children:Object(u.jsx)(T,{trip:s})})]})}function N(t){var e=Object(g.c)();return t.signedIn?Object(u.jsxs)("div",{id:"navbar",children:[Object(u.jsx)(w.b,{to:"/planets",children:"Planets"}),Object(u.jsx)(w.b,{to:"/trips",children:"Trips"}),Object(u.jsx)(w.b,{to:"/wherever",onClick:function(t){e({type:"LOG_OUT",payload:{zoomInPositions:[-.2,0,1.2],errors:[],user:{id:"",name:""},planets:[],trips:[]}})},children:"Log Out"})]}):Object(u.jsxs)("div",{id:"navbar",children:[Object(u.jsx)(w.b,{to:"/wherever",children:"Home"}),Object(u.jsx)(w.b,{to:"/planets",children:"Planets"})]})}var R=function(t){Object(o.a)(n,t);var e=Object(p.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchTrips()}},{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(N,{signedIn:!0}),Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{path:"/trips/new",children:Object(u.jsx)(T,{})}),Object(u.jsx)(j.a,{exact:!0,path:"/trips",children:Object(u.jsx)(P,{})}),Object(u.jsx)(j.a,{path:"/trips/:id",children:Object(u.jsx)(_,{})})]})]})}}]),n}(r.Component),E=Object(g.b)(null,{fetchTrips:function(){return function(t){fetch("https://wherever-api.herokuapp.com/trips").then((function(t){return t.json()})).then((function(e){return t({type:"FETCH_TRIPS",payload:e})}))}}})(R),A=n(14);var D=function(){var t=Object(g.d)((function(t){return t.planets})),e=Object(g.c)(),n=Object(r.useState)(!0),s=Object(A.a)(n,2),c=s[0],a=s[1];Object(r.useEffect)((function(){t.length&&a(!1)}));var i=function(t){var n=t.target.name.split(",").map((function(t){return parseInt(t,10)})),r=t.target.id;e({type:"ZOOM",payload:[r,n]})};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(y,{loader:c}),Object(u.jsx)("ul",{className:"planets-list",children:t.map((function(t){return Object(u.jsx)("li",{className:"planet",children:Object(u.jsx)(w.b,{to:"/planets/".concat(t.id),id:t.name,name:t.position,onClick:i,children:t.name})},t.id)}))})]})};function M(){var t=Object(g.d)((function(t){return t.planets})),e=Object(j.g)(),n=t.find((function(t){return t.id===parseInt(e.id,10)}));return setTimeout((function(){Array.from(document.getElementsByClassName("hidden")).map((function(t){return t.className="appear"}))}),2e3),Object(u.jsxs)("div",{id:n.name,className:"zoomed-planet",children:[Object(u.jsx)("h1",{className:"hidden",children:n.name}),Object(u.jsx)("p",{className:"hidden",children:n.description})]})}var L=function(t){Object(o.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(a.a)(this,n),(r=e.call(this,t)).state={signedIn:!1},r}return Object(i.a)(n,[{key:"componentDidMount",value:function(){localStorage.getItem("userId")&&this.setState({signedIn:!0}),this.props.fetchPlanets()}},{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(N,{signedIn:this.state.signedIn}),Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{exact:!0,path:"/planets",children:Object(u.jsx)(D,{})}),Object(u.jsx)(j.a,{path:"/planets/:id",children:Object(u.jsx)(M,{})})]})]})}}]),n}(r.Component),F=Object(g.b)(null,{fetchPlanets:C})(L),U=n(17),J=n(75);var G=function(t){Object(U.b)(t.frameCallback);var e=Object(J.a)(t.maps),n=Object(A.a)(e,3),r=n[0],s=n[1],c=n[2];return Object(u.jsxs)("mesh",{ref:t.mesh,position:t.positions,children:[Object(u.jsx)("sphereBufferGeometry",{attach:"geometry",args:t.sphereArgs}),Object(u.jsx)("meshStandardMaterial",{attach:"material",normalMap:s,map:r,displacementMap:c,displacementScale:t.dScale,roughness:.3,metalness:.8})]})};var V=function(){var t=Object(r.useRef)();return Object(u.jsx)(G,{mesh:t,frameCallback:function(){t.current.rotation.y+=.005},maps:["https://live.staticflickr.com/2521/3884071286_edb50f8137_b.jpg","https://i.postimg.cc/yxk3fcvM/earthnormalmap.png","https://i.postimg.cc/j27kJ8G2/displacementmap.png"],dScale:.1,positions:[0,0,0],sphereArgs:[.5,64,64]})},z=n(77),H=n(76),X=n(78);var Y=function(){var t=Object(r.useRef)(),e=0;return Object(u.jsx)(G,{mesh:t,frameCallback:function(){e+=.001,t.current.position.x=.8*Math.sin(e),t.current.position.z=.8*Math.cos(e)},maps:["https://i.postimg.cc/QMcztnZM/moonmap.jpg","https://i.postimg.cc/SQgvJM3c/moonnormalmap.png","https://i.postimg.cc/X7h1g0VJ/moondisplacementmap.png"],dScale:.02,positions:[.4,0,.3],sphereArgs:[.007,64,64]})};var Z=function(){var t=Object(r.useRef)();return Object(u.jsx)(G,{mesh:t,frameCallback:function(){t.current.rotation.y+=.005},maps:["https://i.postimg.cc/V6RXZXng/marsmap.png","https://i.postimg.cc/3RKvGWVv/marsnormalmap.png","https://i.postimg.cc/YSF3R4dD/marsdisplacement.png"],dScale:.1,positions:[4,0,0],sphereArgs:[.3,64,64]})};var W=function(){var t=Object(r.useRef)();return Object(u.jsx)(G,{mesh:t,frameCallback:function(){t.current.rotation.y+=5e-4},maps:["https://i.postimg.cc/VsFdMYWq/venus.jpg","https://i.postimg.cc/YSgSSkSm/venusnormal.png","https://i.postimg.cc/jSD5Gy0c/venusdisplacement.png"],dScale:.05,positions:[-2,0,0],sphereArgs:[.47,64,64]})};var B=function(){var t=Object(r.useRef)();return Object(u.jsx)(G,{mesh:t,frameCallback:function(){t.current.rotation.y+=.002},maps:["https://i.postimg.cc/Y9nhmRQ5/mercury.png","https://i.postimg.cc/gj1jg0S4/mercurynormal.png","https://i.postimg.cc/d3hDRCBL/mercurydisplacement.png"],dScale:.1,positions:[-4,0,0],sphereArgs:[.22,64,64]})};var Q=function(){var t=Object(r.useRef)();return Object(u.jsx)(G,{mesh:t,frameCallback:function(){t.current.rotation.y+=.01},maps:["https://i.postimg.cc/3xvJx7SQ/jupiter.jpg","https://i.postimg.cc/P5xVW5G0/jupiternormal.png","https://i.postimg.cc/vH80yZmD/jupiterdisplacement.png"],dScale:.1,positions:[13,0,0],sphereArgs:[5.5,64,64]})};var q=function(){var t=Object(r.useRef)();return Object(u.jsx)(G,{mesh:t,frameCallback:function(){t.current.rotation.y+=.01},maps:["https://i.postimg.cc/yxh93cYc/saturn.jpg","https://i.postimg.cc/RC1nR14n/saturnnormal.png","https://i.postimg.cc/Cxr88FYP/saturndisplacement.png"],dScale:.3,positions:[26,0,0],sphereArgs:[3,64,64]})};var K=function(){var t=Object(r.useRef)();return Object(u.jsx)(G,{mesh:t,frameCallback:function(){t.current.rotation.y+=.017},maps:["https://i.postimg.cc/t4JZpLPh/uranus.jpg","https://i.postimg.cc/k43BNGHc/uranusnormal.png","https://i.postimg.cc/pdnmnzsr/uranusdisplacement.png"],dScale:.1,positions:[35,0,0],sphereArgs:[2.1,64,64]})};var $=function(){var t=Object(r.useRef)();return Object(u.jsx)(G,{mesh:t,frameCallback:function(){t.current.rotation.y+=.015},maps:["https://i.postimg.cc/L4QxHMgT/neptune.jpg","https://i.postimg.cc/mgY3FxkK/neptunenormal.png","https://i.postimg.cc/gj1y3mvb/neptunedisplacement.png"],dScale:.1,positions:[43,0,0],sphereArgs:[2.1,64,64]})};var tt=function(){var t=Object(r.useRef)();return Object(u.jsx)(G,{mesh:t,frameCallback:function(){t.current.rotation.y+=.01},maps:["https://i.postimg.cc/qq6yJSWb/pluto.jpg","https://i.postimg.cc/tChDFnmr/plutonormal.png","https://i.postimg.cc/7hz9s5PZ/plutodisplacement.png"],dScale:.1,positions:[52,0,0],sphereArgs:[.3,64,64]})},et=n(7);function nt(t){var e=new et.Vector3(t.positions[0],t.positions[1],t.positions[2]),n=new et.Vector3(-.2,0,1.2),r=new et.Vector3(t.positions[0],t.positions[1]+3,t.positions[2]+30),s=0;return Object(U.b)((function(c){var a=c.camera;"Intro"===t.stage?a.position.lerp(n,.01):(a.rotation.y=-9*Math.PI/180,s<10?(a.position.lerp(r,.01),s+=.2):a.position.lerp(e,.01))}))}var rt=function(){var t=Object(g.d)((function(t){return t.zoomInPositions})),e=Object(g.d)((function(t){return t.stage}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(U.a,{camera:{position:[160,10,-160]},children:[Object(u.jsx)(z.a,{}),Object(u.jsx)(H.a,{fade:!0}),Object(u.jsx)("pointLight",{position:[-6,3,0],color:"#fdfbd3",intensity:6}),Object(u.jsx)("ambientLight",{position:[50,-15,-15],color:"#fdfbd3",intensity:.1}),Object(u.jsxs)(r.Suspense,{fallback:null,children:[Object(u.jsx)(V,{}),Object(u.jsx)(Y,{}),Object(u.jsx)(Z,{}),Object(u.jsx)(W,{}),Object(u.jsx)(B,{}),Object(u.jsx)(Q,{}),Object(u.jsx)(q,{}),Object(u.jsx)(K,{}),Object(u.jsx)($,{}),Object(u.jsx)(tt,{}),Object(u.jsx)(nt,{positions:t,stage:e})]})]}),Object(u.jsx)(X.a,{}),Object(u.jsx)("div",{className:"app",children:Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{exact:!0,path:"/wherever",children:Object(u.jsx)(b,{})}),Object(u.jsxs)(j.a,{path:"/signup",children:[Object(u.jsx)(b,{}),Object(u.jsx)(k,{serve:"Sign Up"})]}),Object(u.jsxs)(j.a,{path:"/signin",children:[Object(u.jsx)(b,{}),Object(u.jsx)(k,{serve:"Sign In"})]}),Object(u.jsx)(j.a,{path:"/trips",children:Object(u.jsx)(E,{})}),Object(u.jsx)(j.a,{path:"/planets",children:Object(u.jsx)(F,{})})]})})]})},st=n(43),ct=n(16);var at=n(51),it={stage:"Intro",zoomInPositions:[-.2,0,1.2],errors:[],user:{id:"".concat(localStorage.getItem("userId")),name:""},planets:[],trips:[]},ot=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):st.b)(Object(st.a)(at.a)),pt=Object(st.c)((function(t,e){switch(e.type){case"ADD_USER":case"SIGN_IN":return localStorage.setItem("userId",e.payload.id),Object(f.a)(Object(f.a)({},t),{},{user:{id:e.payload.id,name:e.payload.name}});case"FETCH_PLANETS":return Object(f.a)(Object(f.a)({},t),{},{planets:e.payload});case"FETCH_TRIPS":return Object(f.a)(Object(f.a)({},t),{},{trips:e.payload.filter((function(t){return t.user.id===parseInt(localStorage.getItem("userId"),10)}))});case"POST_TRIP":return Object(f.a)(Object(f.a)({},t),{},{trips:[].concat(Object(ct.a)(t.trips),[e.payload])});case"CANCEL_TRIP":return Object(f.a)(Object(f.a)({},t),{},{trips:Object(ct.a)(t.trips.filter((function(t){return t.id!==e.payload})))});case"EDIT_TRIP":return Object(f.a)(Object(f.a)({},t),{},{trips:t.trips.map((function(t){return t.id===e.payload.id?e.payload:t}))});case"LOG_OUT":return localStorage.clear(),Object(f.a)({},e.payload);case"ZOOM":return Object(f.a)(Object(f.a)({},t),{},{stage:e.payload[0],zoomInPositions:e.payload[1]});default:return t}}),it,ot);c.a.render(Object(u.jsx)(w.a,{children:Object(u.jsx)(g.a,{store:pt,children:Object(u.jsx)(rt,{})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.932b5915.chunk.js.map