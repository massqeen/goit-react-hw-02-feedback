(this.webpackJsonpreactstudying=this.webpackJsonpreactstudying||[]).push([[0],{12:function(e,t,n){e.exports=n(26)},17:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(3),c=n.n(r),i=(n(17),n(4)),l=n(5),u=n(6),s=n(11),d=n(10),f=n(7),v=n.n(f),h=function(e){var t=e.children;return a.a.createElement("div",{className:v.a.Layout},t)},b=function(e){var t=e.title,n=void 0===t?"Title":t,o=e.children;return a.a.createElement("section",null,a.a.createElement("h2",null,n),o)},g=n(8),p=n.n(g),k=function(e){var t=e.title,n=void 0===t?"Good":t,o=e.onFeedback;return a.a.createElement("button",{type:"button",className:p.a.feedbackButton,onClick:function(){return o(n.toLowerCase())}},n)},m=n(9),w=n.n(m),E=function(e){var t=e.options,n=e.onFeedback;return a.a.createElement(a.a.Fragment,null,t.map((function(e){return a.a.createElement(k,{key:w.a.generate(),title:e,onFeedback:n})})))};E.defaultProps={options:["good","neutral","bad"]};var y=E,F=function(e){var t=e.good,n=void 0===t?0:t,o=e.neutral,r=void 0===o?0:o,c=e.bad,i=void 0===c?0:c,l=e.total,u=void 0===l?0:l,s=e.posFeedback,d=void 0===s?0:s;return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Good: ",n),a.a.createElement("p",null,"Neutral: ",r),a.a.createElement("p",null,"Bad: ",i),a.a.createElement("p",null,"Total: ",u),a.a.createElement("p",null,"Positive feedback: ",d,"%"))},j=function(e){var t=e.message,n=void 0===t?"":t;return a.a.createElement("p",null,n)},W=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.clickHandler=function(t){return e.setState((function(e){return Object(i.a)({},t,e[t]+1)}))},e}return Object(u.a)(n,[{key:"countTotalFeedback",value:function(){return Object.values(this.state).reduce((function(e,t){return e+t}),0)}},{key:"countPositiveFeedbackPercentage",value:function(){var e=this.countTotalFeedback(),t=+(this.state.good/e*100).toFixed(1);return e?t:0}},{key:"render",value:function(){var e=Object.keys(this.state).map((function(e){return e[0].toUpperCase()+e.slice(1)})),t=this.state,n=t.good,o=t.neutral,r=t.bad,c=a.a.createElement(F,{good:n,neutral:o,bad:r,total:this.countTotalFeedback(),posFeedback:this.countPositiveFeedbackPercentage()}),i=a.a.createElement(j,{message:"No feedback given :("});return a.a.createElement(h,null,a.a.createElement(b,{title:"What do you think of us?"},a.a.createElement(y,{options:e,onFeedback:this.clickHandler})),a.a.createElement(b,{title:"Statistics"},this.countTotalFeedback()>0?c:i))}}]),n}(o.Component),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(W,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/goit-react-hw-02-feedback",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/goit-react-hw-02-feedback","/service-worker.js");O?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):P(t,e)}))}}()},7:function(e,t,n){e.exports={Layout:"Layout_Layout__12FtZ"}},8:function(e,t,n){e.exports={feedbackButton:"Button_feedbackButton__u6SDo"}}},[[12,1,2]]]);
//# sourceMappingURL=main.03bbe9cd.chunk.js.map