(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1559:function(e,t,n){"use strict";var r=n(4),a=n.n(r),i=n(6),o=n.n(i),c=n(7),s=n.n(c),l=n(5),u=n.n(l),p=n(8),h=n.n(p),d=n(16),f=n(1),y=n.n(f),m=n(0),b=n.n(m),k=n(51),g=n.n(k),v=n(3),E=n(223),P=n(258),j=n(24),w=n(587),x=n(23),O=Object(v.default)(function(e){return b.a.createElement("input",e)},{target:"e1usehz70"})(E.a,";background-color:",function(e){return e.theme.offWhite},";border-right-width:0;border-top-right-radius:0;border-bottom-right-radius:0;&:hover,&:focus{background-color:",function(e){return e.theme.offWhite},";border-right-width:0;}"),T=Object(v.default)("div",{target:"e1usehz71"})("flex-grow:1;border:none;"),C=Object(v.default)(j.default,{target:"e1usehz72"})("flex-shrink:1;border-radius:0 0.25em 0.25em 0;box-shadow:none;"),S=function(e){function t(e){var n;return a()(this,t),(n=s()(this,u()(t).call(this,e))).handleCopyClick=function(e){if(n.textRef.current){var t=n.props.onCopy;n.handleSelectText(),t(n.props.children,e),e.stopPropagation()}},n.handleSelectText=function(){n.textRef.current&&Object(P.a)(g.a.findDOMNode(n.textRef.current))},n.textRef=b.a.createRef(),n}return h()(t,e),o()(t,[{key:"render",value:function(){var e=this.props,t=e.style,n=e.children;return b.a.createElement(d.Flex,null,b.a.createElement(T,null,b.a.createElement(O,{readOnly:!0,ref:this.textRef,style:t,value:n,onClick:this.handleSelectText})),b.a.createElement(w.a,{hideUnsupported:!0,onClick:this.handleCopyClick,value:n},b.a.createElement(C,{type:"button",size:"xsmall",onClick:this.handleCopyClick},b.a.createElement(x.default,{src:"icon-clipboard",size:"1.25em"}))))}}]),t}(b.a.Component);S.propTypes={children:y.a.string.isRequired,style:y.a.object,onCopy:y.a.func},S.defaultProps={onCopy:function(){}},t.a=S},1587:function(e,t,n){"use strict";n.d(t,"b",function(){return j}),n.d(t,"a",function(){return w});var r=n(4),a=n.n(r),i=n(6),o=n.n(i),c=n(7),s=n.n(c),l=n(5),u=n.n(l),p=n(8),h=n.n(p),d=n(0),f=n.n(d),y=n(1),m=n.n(y),b=n(10),k=n(2),g=n(479),v=n(165),E=n(25),P=n(1559),j=function(e){var t=e.length?e[0].dsn.security:"https://sentry.example.com/api/security-report/";return Object(v.a)({value:t,fixed:"https://sentry.example.com/api/security-report/"})},w=function(e){function t(){return a()(this,t),s()(this,u()(t).apply(this,arguments))}return h()(t,e),o()(t,[{key:"render",value:function(){var e=this.props.params,t=e.orgId,n=e.projectId;return f.a.createElement(E.a,null,f.a.createElement(E.e,null,"Report URI"),f.a.createElement(E.c,null,f.a.createElement(E.b,{type:"info"},Object(k.tct)("We've automatically pulled these credentials from your available [link:Client Keys]",{link:f.a.createElement(b.Link,{to:"/settings/".concat(t,"/projects/").concat(n,"/keys/")})})),f.a.createElement(g.default,{inline:!1,flexibleControlStateSize:!0},f.a.createElement(P.a,null,j(this.props.keyList)))))}}]),t}(f.a.Component);w.propTypes={keyList:m.a.array.isRequired}},1588:function(e,t,n){"use strict";n.d(t,"a",function(){return j});var r=n(11),a=n.n(r),i=n(13),o=n.n(i),c=n(4),s=n.n(c),l=n(6),u=n.n(l),p=n(7),h=n.n(p),d=n(5),f=n.n(d),y=n(8),m=n.n(y),b=n(0),k=n.n(b),g=n(2),v=n(1),E=n.n(v),P=n(81),j=function(e){function t(){return s()(this,t),h()(this,f()(t).apply(this,arguments))}return m()(t,e),u()(t,[{key:"render",value:function(){var e=this.props,t=e.type,n=o()(e,["type"]);return k.a.createElement(P.default,a()({type:t,icon:"icon-labs"},n),Object(g.t)("This feature is a preview and may change in the future. Thanks for being an early adopter!"))}}]),t}(b.Component);j.propTypes={type:E.a.oneOf(["success","error","warning","info"])},j.defaultProps={type:"info"}},2304:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return O});var r=n(4),a=n.n(r),i=n(6),o=n.n(i),c=n(7),s=n.n(c),l=n(5),u=n.n(l),p=n(96),h=n.n(p),d=n(8),f=n.n(d),y=n(0),m=n.n(y),b=n(1),k=n.n(b),g=n(2),v=n(153),E=n(54),P=n(25),j=n(1587),w=n(1588),x=n(99),O=function(e){function t(){return a()(this,t),s()(this,u()(t).apply(this,arguments))}return f()(t,e),o()(t,[{key:"componentWillMount",value:function(){h()(u()(t.prototype),"componentWillMount",this).call(this),this.props.setProjectNavSection("settings")}},{key:"getEndpoints",value:function(){var e=this.props.params,t=e.orgId,n=e.projectId;return[["keyList","/projects/".concat(t,"/").concat(n,"/keys/")],["project","/projects/".concat(t,"/").concat(n,"/")]]}},{key:"getInstructions",value:function(){return"def middleware(request, response):\n    response['Public-Key-Pins'] = \\\n        'pin-sha256=\"cUPcTAZWKaASuYWhhneDttWpY3oBAkE3h2+soZS7sWs=\"; ' \\\n        'pin-sha256=\"M8HztCzM3elUxkcjR2S5P4hhyBNf6lHkmjAHKhpGPWE=\"; ' \\\n        'max-age=5184000; includeSubDomains; ' \\\n"+"        'report-uri=\"".concat(Object(j.b)(this.state.keyList),"\"' \n")+"    return response\n"}},{key:"getReportOnlyInstructions",value:function(){return"def middleware(request, response):\n    response['Public-Key-Pins-Report-Only'] = \\\n        'pin-sha256=\"cUPcTAZWKaASuYWhhneDttWpY3oBAkE3h2+soZS7sWs=\"; ' \\\n        'pin-sha256=\"M8HztCzM3elUxkcjR2S5P4hhyBNf6lHkmjAHKhpGPWE=\"; ' \\\n        'max-age=5184000; includeSubDomains; ' \\\n"+"        'report-uri=\"".concat(Object(j.b)(this.state.keyList),"\"' \n")+"    return response\n"}},{key:"renderBody",value:function(){return m.a.createElement("div",null,m.a.createElement(x.default,{title:Object(g.t)("HTTP Public Key Pinning")}),m.a.createElement(w.a,null),m.a.createElement(j.a,{keyList:this.state.keyList,params:this.props.params}),m.a.createElement(P.a,null,m.a.createElement(P.e,null,Object(g.t)("About")),m.a.createElement(P.c,{disablePadding:!1},m.a.createElement("p",null,Object(g.tct)("[link:HTTP Public Key Pinning]\n              (HPKP) is a security feature that tells a web client to associate a specific\n              cryptographic public key with a certain web server to decrease the risk of MITM\n              attacks with forged certificates. It's enforced by browser vendors, and Sentry\n              supports capturing violations using the standard reporting hooks.",{link:m.a.createElement(E.a,{href:"https://en.wikipedia.org/wiki/HTTP_Public_Key_Pinning"})})),m.a.createElement("p",null,Object(g.t)("To configure HPKP reports\n              in Sentry, you'll need to send a header from your server describing your\n              policy, as well specifying the authenticated Sentry endpoint.")),m.a.createElement("p",null,Object(g.t)("For example, in Python you might achieve this via a simple web middleware")),m.a.createElement("pre",null,this.getInstructions()),m.a.createElement("p",null,Object(g.t)("Alternatively you can setup HPKP reports to simply send reports rather than\n              actually enforcing the policy")),m.a.createElement("pre",null,this.getReportOnlyInstructions()),m.a.createElement("p",null,Object(g.tct)("We recommend setting this up to only run on a percentage of requests, as\n              otherwise you may find that you've quickly exhausted your quota. For more\n              information, take a look at [link:the documentation on MDN].",{link:m.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Public_Key_Pinning"})})))))}}]),t}(v.default);O.propTypes={setProjectNavSection:k.a.func}}}]);
//# sourceMappingURL=ProjectHpkpReports.js.map