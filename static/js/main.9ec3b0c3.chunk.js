(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{46:function(e,n,t){e.exports=t(78)},52:function(e,n,t){},57:function(e,n,t){},75:function(e,n,t){},76:function(e,n,t){},77:function(e,n,t){},78:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(35),i=t.n(c),o=t(10),l=t(9),s=t(42),u=t(8),m=t(11);function d(){var e=Object(m.a)(["\n  html, body {\n\tmargin: 0;\n\tpadding: 0;\n  }\n\n  *, *::after, *::before {\n\tbox-sizing: border-box;\n  }\n\n  h1 {\n\tfont-size: 2rem;\n\ttext-align: center;\n\ttext-transform: uppercase;\n  }\n\n  img {\n\tborder-radius: 5px;\n\theight: auto;\n\twidth: 10rem;\n  }\n\n  div {\n\ttext-align: center;\n  }\n\n  small {\n\tdisplay: block;\n  }\n\n  a {\n\tcolor: #000000;\n\ttext-decoration: none;\n  }\n"]);return d=function(){return e},e}var p=Object(u.b)(d()),f={primaryDark:"#0D0C1D",primaryLight:"#EFFFFA",primaryHover:"#343078",mobile:"576px"},h=t(20);function b(){var e=Object(m.a)(["\n  position: absolute;\n  top: 5%;\n  left: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 10;\n\n  span {\n    outline: none;\n    width: 2rem;\n    height: 0.20rem;\n    background: ",";\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    position: relative;\n    transform-origin: 1px;\n\n    :first-child {\n      transform: ",";\n    }\n\n    :nth-child(2) {\n      opacity: ",";\n      transform: ",";\n    }\n\n    :nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return b=function(){return e},e}var E=u.c.button(b(),(function(e){var n=e.theme;e.open;return n.primaryDark}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"0":"1"}),(function(e){return e.open?"translateX(20px)":"translateX(0)"}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),v=function(e){var n=e.open,t=e.setOpen,a=Object(h.a)(e,["open","setOpen"]),c=!!n;return r.a.createElement(E,Object.assign({"aria-label":"Toggle menu","aria-expanded":c,open:n,onClick:function(){return t(!n)}},a),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))};function g(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: ",";\n  transform: ",";\n  height: 100vh;\n  text-align: left;\n  padding: 2rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: transform 0.3s ease-in-out;\n\n  @media (max-width: ",") {\n      width: 100%;\n    }\n\n  a {\n    font-family: Gilroy Bold, sans-serif;\n    font-size: 2rem;\n    text-transform: uppercase;\n    opacity: .6;\n    padding: 2rem 0;\n    font-weight: bold;\n    letter-spacing: 0.5rem;\n    color: ",";\n    text-decoration: none;\n    transition: color 0.3s linear;\n\n    @media (max-width: ",") {\n      font-size: 1.5rem;\n      text-align: center;\n    }\n\n    &:hover {\n      color: ",";\n    }\n  }\n"]);return g=function(){return e},e}var C=u.c.nav(g(),(function(e){return e.theme.primaryLight}),(function(e){return e.open?"translateX(0)":"translateX(-100%)"}),(function(e){return e.theme.mobile}),(function(e){return e.theme.primaryDark}),(function(e){return e.theme.mobile}),(function(e){return e.theme.primaryHover})),j=function(e){var n=e.open,t=Object(h.a)(e,["open"]),a=!!n,c=a?0:-1;return r.a.createElement(C,Object.assign({open:n,"aria-hidden":!a},t),r.a.createElement("a",{href:"/",tabIndex:c},"Home"),r.a.createElement("a",{href:"/",tabIndex:c},"Projects"),r.a.createElement("a",{href:"/",tabIndex:c},"Skills"),r.a.createElement("a",{href:"/",tabIndex:c},"Contact"))},x=t(41);t(52);var k=function(){var e,n,t=Object(a.useState)(!1),c=Object(s.a)(t,2),i=c[0],l=c[1],m=Object(a.useRef)();e=m,n=function(){return l(!1)},Object(a.useEffect)((function(){var t=function(t){e.current&&!e.current.contains(t.target)&&n(t)};return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[e,n]);var d=window.innerWidth;return d<=700?r.a.createElement(u.a,{theme:f},r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement("div",{ref:m},r.a.createElement(x.a,{disabled:!i},r.a.createElement(v,{open:i,setOpen:l,"aria-controls":"main-menu"}),r.a.createElement(j,{open:i,setOpen:l,id:"main-menu"}))))):d>=701?r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"App-logo"},r.a.createElement("h1",null,"Koritar")),r.a.createElement("nav",{className:"App-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{id:"home",to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(o.b,{id:"projects",to:"/projects"},"Projects")),r.a.createElement("li",null,r.a.createElement(o.b,{id:"skills",to:"/skills"},"Skills")),r.a.createElement("li",null,r.a.createElement(o.b,{id:"contact",to:"/contact"},"Contact"))))):void 0},O=t(13),y=t(14),N=t(16),w=t(15),A=t(17),L=(t(57),t(18)),S=t.n(L),F=t(24),D=t(40),I=t.n(D).a.create({baseURL:"https://api.github.com/users/jakoritarleite"});t(75);function z(){return W.apply(this,arguments)}function W(){return(W=Object(F.a)(S.a.mark((function e(){var n,t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.get("/repos");case 2:return n=e.sent,t=n.data.map((function(e){return!!e.fork||{name:e.name,id:e.id,description:e.description,url:e.html_url}})),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var H=function(e){function n(e){var t;return Object(O.a)(this,n),(t=Object(N.a)(this,Object(w.a)(n).call(this,e))).state={currentCardContent:e.data},t}return Object(A.a)(n,e),Object(y.a)(n,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({currentCardContent:e.currentCardContent})}},{key:"render",value:function(){var e;return void 0!==this.state.currentCardContent?e=r.a.createElement("div",{className:"App-card",id:"card",key:this.state.currentCardContent.id},r.a.createElement("div",{className:"App-card-info"},r.a.createElement("div",{className:"card-info"},r.a.createElement("h1",{className:"card-title"},this.state.currentCardContent.name),r.a.createElement("h4",{className:"card-desc"},this.state.currentCardContent.description)),r.a.createElement("div",{className:"cbtn"},r.a.createElement("div",{className:"card-button"},r.a.createElement("a",{href:this.state.currentCardContent.url,target:"_blank",rel:"noopener noreferrer"},"Visit this repo")))),r.a.createElement("div",{className:"App-card-logo"},r.a.createElement("ion-icon",{name:"logo-github"}))):void 0===this.state.currentCardContent&&(e=r.a.createElement("p",null,"Waiting for API response")),r.a.createElement("section",null,e)}}]),n}(r.a.Component),P=function(e){function n(e){var t;return Object(O.a)(this,n),(t=Object(N.a)(this,Object(w.a)(n).call(this,e))).state={repos:[],currentCard:0,cardsLength:0,currentCardContent:[]},t}return Object(A.a)(n,e),Object(y.a)(n,[{key:"handleClick",value:function(e,n){"next"===e&&n<this.state.cardsLength-1?n+=1:"prev"===e&&n>0&&(n-=1),this.setState({currentCard:n,currentCardContent:this.state.repos[n]})}},{key:"UNSAFE_componentWillMount",value:function(){var e=Object(F.a)(S.a.mark((function e(){var n,t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:for(n=e.sent,t=[],a=0;a<n.length;a++)!0!==n[a]&&t.push(n[a]);this.setState({repos:t,currentCard:0,cardsLength:t.length,currentCardContent:t[0]});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,n=this.state.currentCard;return r.a.createElement("div",{className:"App-slider"},r.a.createElement("div",{className:"App-slider-buttons"},r.a.createElement("button",{disabled:this.state.currentCard===this.state.cardsLength-1,className:"slider-btn btn-l button-animation",onClick:function(){return e.handleClick("next",n)}},r.a.createElement("ion-icon",{name:"chevron-back-circle"})),r.a.createElement(H,{currentCardContent:this.state.currentCardContent}),r.a.createElement("button",{disabled:0===this.state.currentCard,className:"slider-btn btn-r button-animation",onClick:function(){return e.handleClick("prev",n)}},r.a.createElement("ion-icon",{name:"chevron-forward-circle"}))))}}]),n}(r.a.Component),R=function(e){function n(){return Object(O.a)(this,n),Object(N.a)(this,Object(w.a)(n).apply(this,arguments))}return Object(A.a)(n,e),Object(y.a)(n,[{key:"componentDidMount",value:function(){for(var e=document.styleSheets[0].cssRules,n=0;n<e.length;n++)".App-nav ul li a#home::after"===e[n].selectorText&&(e[n].style.width="70%")}},{key:"render",value:function(){return r.a.createElement("main",{className:"App-main"},r.a.createElement("div",{className:"App-presenting side"},r.a.createElement("div",{className:"presentation",id:"name"},r.a.createElement("h1",null,"Jo\xe3o ",r.a.createElement("span",null,"Koritar"))),r.a.createElement("div",{className:"presentation",id:"description"},r.a.createElement("h4",null,r.a.createElement("span",null,"Web")," developer"),r.a.createElement("div",{className:"bottom-shape"}))),r.a.createElement("div",{className:"App-cards side"},r.a.createElement(P,null)))}}]),n}(a.Component),X=function(){return r.a.createElement(o.a,null,r.a.createElement(k,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:R})))};t(76),t(77);var _=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(X,null))};i.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.9ec3b0c3.chunk.js.map