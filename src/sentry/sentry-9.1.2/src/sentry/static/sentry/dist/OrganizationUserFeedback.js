(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1717:function(e,t,n){"use strict";n.d(t,"a",function(){return w});var a=n(12),r=n.n(a),s=n(4),i=n.n(s),o=n(6),u=n.n(o),c=n(7),l=n.n(c),d=n(5),p=n.n(d),m=n(8),h=n.n(m),v=n(177),g=n.n(v),y=n(0),f=n.n(y),E=n(10),b=n(1),k=n.n(b),L=n(2),z=n(107),O=n(25),j=n(188),w=function(e){function t(){return i()(this,t),l()(this,p()(t).apply(this,arguments))}return h()(t,e),u()(t,[{key:"render",value:function(){var e=this.props,t=e.location,n=t.pathname,a=t.query,s=e.pageLinks,i=e.children,o=e.status,u=g()(a,"status"),c=r()({},a,{status:""});return f.a.createElement("div",null,f.a.createElement("div",{className:"row"},f.a.createElement("div",{className:"col-sm-9",style:{marginBottom:"5px"}},f.a.createElement(j.a,{withMargins:!0},Object(L.t)("User Feedback"))),f.a.createElement("div",{className:"col-sm-3",style:{textAlign:"right",marginTop:"4px"}},f.a.createElement("div",{className:"btn-group"},f.a.createElement(E.Link,{to:{pathname:n,query:u},className:"btn btn-sm btn-default"+("unresolved"===o?" active":"")},Object(L.t)("Unresolved")),f.a.createElement(E.Link,{to:{pathname:n,query:c},className:"btn btn-sm btn-default"+(""===o?" active":"")},Object(L.t)("All Issues"))))),f.a.createElement(O.a,null,f.a.createElement(O.c,{className:"issue-list"},i)),f.a.createElement(z.default,{pageLinks:s}))}}]),t}(f.a.Component);w.propTypes={location:k.a.object.isRequired,pageLinks:k.a.string,status:k.a.string.isRequired}},2374:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n.n(a),s=n(6),i=n.n(s),o=n(7),u=n.n(o),c=n(5),l=n.n(c),d=n(8),p=n.n(d),m=n(0),h=n.n(m),v=n(2),g=n(56),y=n(9),f=n(117),E=n(81),b=n(145),k=n(618),L=n(437),z=n(33),O=n(382),j=n(386),w=n(153),N=n(206),q=n(1717),I=n(50),R=n.n(I),B=n(12),A=n.n(B),T=n(125),U=n.n(T),x=n(84),F=n.n(x),S=n(93),D="unresolved";function J(e){var t=F.a.parse(e),n=void 0!==t.status?t.status:D;return A()({status:n},U()(t,["cursor"].concat(R()(Object.values(S.d)))))}n.d(t,"OrganizationUserFeedback",function(){return C});var C=function(e){function t(){return r()(this,t),u()(this,l()(t).apply(this,arguments))}return p()(t,e),i()(t,[{key:"getEndpoints",value:function(){var e=this.props,t=e.organization,n=e.location.search;return[["reportList","/organizations/".concat(t.slug,"/user-feedback/"),{query:J(n)}]]}},{key:"getTitle",value:function(){return"".concat(Object(v.t)("User Feedback")," - ").concat(this.props.organization.slug)}},{key:"renderResults",value:function(){var e=this.props.params.orgId;return this.state.reportList.map(function(t){var n=t.issue;return h.a.createElement(k.a,{key:t.id,id:n.id,data:n,eventId:t.event.eventID},h.a.createElement(L.a,{report:t,orgId:e,issueId:n.id}))})}},{key:"renderList",value:function(){return 0===this.state.reportList.length?this.renderEmpty():this.renderResults()}},{key:"renderEmpty",value:function(){return h.a.createElement(b.a,null,h.a.createElement("p",null,Object(v.t)("Sorry, no results match your search query.")))}},{key:"renderNoAccess",value:function(){return h.a.createElement(N.b,null,h.a.createElement(E.default,{type:"warning"},Object(v.t)("You don't have access to this feature")))}},{key:"renderLoading",value:function(){return this.renderBody()}},{key:"renderStreamBody",value:function(){var e=this.state,t=e.loading,n=e.reportList;return t?h.a.createElement(z.default,null):n.length?this.renderResults():this.renderEmpty()}},{key:"renderBody",value:function(){var e=this.props.organization,t=this.props.location,n=J(t.search).status,a=this.state.reportListPageLinks;return h.a.createElement(f.a,{features:["organizations:sentry10"],organization:e,renderDisabled:this.renderNoAccess},h.a.createElement(O.a,{organization:e}),h.a.createElement(N.b,null,h.a.createElement(j.a,{organization:e},h.a.createElement(q.a,{pageLinks:a,status:n,location:t},this.renderStreamBody()))))}}]),t}(w.default);C.propTypes={organization:y.default.Organization.isRequired};t.default=Object(g.a)(C)}}]);
//# sourceMappingURL=OrganizationUserFeedback.js.map