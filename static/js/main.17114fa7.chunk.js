(this.webpackJsonpreactstudying=this.webpackJsonpreactstudying||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(0),i=n.n(c),a=n(9),o=n.n(a),d=n(5),u=n(2),s=n(3);function b(){var t=Object(u.a)(["\n  max-width: 1170px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 12px;\n  padding-right: 12px;\n"]);return b=function(){return t},t}var j=s.a.div(b()),l=function(t){var e=t.children;return Object(r.jsx)(j,{children:e})},O=function(t){var e=t.title,n=void 0===e?"Title":e,c=t.children;return Object(r.jsxs)("section",{children:[Object(r.jsx)("h2",{children:n}),c]})};function f(){var t=Object(u.a)(["\n  padding: 6px;\n  border: 1px solid #a9a9a9;\n  border-radius: 5px;\n  background-color: #fff;\n  min-width: 50px;\n  text-transform: capitalize;\n\n  &:not(:last-child) {\n    margin-right: 10px;\n  }\n"]);return f=function(){return t},t}var x=s.a.button(f()),h=function(t){var e=t.title,n=t.onFeedback;return Object(r.jsx)(x,{type:"button",onClick:function(){return n(e.toLowerCase())},children:e})},p=function(t){var e=t.options,n=t.onFeedback;return Object(r.jsx)(r.Fragment,{children:e.map((function(t,e){return Object(r.jsx)(h,{title:t,onFeedback:n},e)}))})},v=function(t){var e=t.good,n=void 0===e?0:e,c=t.neutral,i=void 0===c?0:c,a=t.bad,o=void 0===a?0:a,d=t.total,u=void 0===d?0:d,s=t.posFeedback,b=void 0===s?0:s;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("p",{children:["Good: ",n]}),Object(r.jsxs)("p",{children:["Neutral: ",i]}),Object(r.jsxs)("p",{children:["Bad: ",o]}),Object(r.jsxs)("p",{children:["Total: ",u]}),Object(r.jsxs)("p",{children:["Positive feedback: ",b,"%"]})]})},g=function(t){var e=t.message;return Object(r.jsx)("p",{children:e})},k=function(t){return t.reduce((function(t,e){return t+e}))},m=function(t,e){var n=+(t/e*100).toFixed(1);return e?n:0},F={GOOD:"good",NEUTRAL:"neutral",BAD:"bad"},w=function(){var t=Object(c.useState)(0),e=Object(d.a)(t,2),n=e[0],i=e[1],a=Object(c.useState)(0),o=Object(d.a)(a,2),u=o[0],s=o[1],b=Object(c.useState)(0),j=Object(d.a)(b,2),f=j[0],x=j[1],h=Object.values(F),w=[n,u,f],y=k(w),S=Object(r.jsx)(v,{good:n,neutral:u,bad:f,total:y,posFeedback:m(n,y)}),A=Object(r.jsx)(g,{message:"No feedback given :("});return Object(r.jsxs)(l,{children:[Object(r.jsx)(O,{title:"What do you think of us?",children:Object(r.jsx)(p,{options:h,onFeedback:function(t){switch(t){case F.GOOD:i((function(t){return t+1}));break;case F.NEUTRAL:s((function(t){return t+1}));break;case F.BAD:x((function(t){return t+1}));break;default:return}}})}),Object(r.jsx)(O,{title:"Statistics",children:k(w)>0?S:A})]})};n(20);o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(w,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.17114fa7.chunk.js.map