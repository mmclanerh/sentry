(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1541:function(e,n,t){"use strict";t.r(n);var a=t(11),o=t.n(a),r=t(13),i=t.n(r),s=t(4),u=t.n(s),l=t(6),c=t.n(l),p=t(7),d=t.n(p),f=t(5),v=t.n(f),h=t(8),g=t.n(h),m=t(1),y=t.n(m),w=t(0),E=t.n(w),b=t(2),j=t(435),S=t.n(j),T=t(114),k=t(9),O=t(1862),z=function(e){function n(){return u()(this,n),d()(this,v()(n).apply(this,arguments))}return g()(n,e),c()(n,[{key:"getEndpoints",value:function(){var e=this.props,n=e.organization,t=e.project,a=e.issueId;return[["ownership","/projects/".concat(n.slug,"/").concat(t.slug,"/ownership/")],["urlTagData","/issues/".concat(a,"/tags/url/"),{},{allowError:function(e){return 404===e.status}}],["eventData","/issues/".concat(a,"/events/latest/")]]}},{key:"renderBody",value:function(){var e,n,t,a,r,i,s=this.state,u=s.ownership,l=s.urlTagData,c=s.eventData,p=l?l.topValues.sort(function(e,n){return e.count-n.count}).map(function(e){return e.value}).slice(0,5):[],d=(null===(e=c.entries.find(function(e){return"exception"==e.type}))||void 0===e?void 0:null===(n=e.data)||void 0===n?void 0:null===(t=n.values[0])||void 0===t?void 0:null===(a=t.stacktrace)||void 0===a?void 0:a.frames)||(null===(r=c.entries.find(function(e){return"stacktrace"==e.type}))||void 0===r?void 0:null===(i=r.data)||void 0===i?void 0:i.frames)||[],f=d.filter(function(e){return e.inApp});f.length>0&&(d=f);var v=S()(d.map(function(e){return e.filename||e.absPath}).filter(function(e){return e})).slice(0,30);return E.a.createElement(E.a.Fragment,null,E.a.createElement("p",null,Object(b.t)("Match against Issue Data: (globbing syntax *, ? supported)")),E.a.createElement(O.a,o()({},this.props,{initialText:u.raw||"",urls:p,paths:v,onSave:this.props.onSave})))}}]),n}(T.default);z.propTypes={organization:k.default.Organization,project:k.default.Project,issueId:y.a.string,onSave:y.a.func};var B=z,C=function(e){function n(){var e,t;u()(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=d()(this,(e=v()(n)).call.apply(e,[this].concat(o)))).handleSubmit=function(e){t.handleSuccess()},t.handleSuccess=function(e){t.props.onClose&&t.props.onClose(e),window.setTimeout(t.props.closeModal,2e3)},t}return g()(n,e),c()(n,[{key:"render",value:function(){var e=this.props,n=e.Body,t=e.Header,a=e.closeModal,r=i()(e,["Body","Header","closeModal"]);return E.a.createElement(E.a.Fragment,null,E.a.createElement(t,{closeButton:!0,onHide:a},Object(b.t)("Create Ownership Rule")),E.a.createElement(n,null,E.a.createElement(B,o()({},r,{onSave:this.handleSuccess}))))}}]),n}(E.a.Component);C.propTypes={closeModal:y.a.func,onClose:y.a.func,Body:y.a.oneOfType([y.a.func,y.a.node]).isRequired,Header:y.a.oneOfType([y.a.func,y.a.node]).isRequired,organization:k.default.Organization.isRequired,project:k.default.Project};n.default=C}}]);
//# sourceMappingURL=CreateOwnershipRuleModal.js.map