(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{1537:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),o=n(6),s=n.n(o),c=n(7),i=n.n(c),l=n(5),u=n.n(l),p=n(8),f=n.n(p),m=n(1),d=n.n(m),h=n(0),v=n.n(h),g=n(24),j=n(2),y=n(25),b=n(9),E=n(15),O=n(3),w=n(1675),k=function(e){function t(){return a()(this,t),i()(this,u()(t).apply(this,arguments))}return f()(t,e),s()(t,[{key:"onInstall",value:function(){var e=this.props,t=e.onInstall,n=e.closeModal;t(),n()}},{key:"renderPermissions",value:function(){var e=this.permissions;return v.a.createElement(v.a.Fragment,null,e.read.length>0&&v.a.createElement(y.f,{key:"read"},v.a.createElement("p",null,v.a.createElement("strong",null,Object(j.t)("Read")),Object(j.t)(" access to ".concat(e.read.join(", "))))),e.write.length>0&&v.a.createElement(y.f,{key:"write"},v.a.createElement("p",null,v.a.createElement("strong",null,Object(j.t)("Read")),Object(j.t)(" and "),v.a.createElement("strong",null,Object(j.t)("write")),Object(j.t)(" access to ".concat(e.write.join(", "))))),e.admin.length>0&&v.a.createElement(y.f,{key:"admin"},v.a.createElement("p",null,v.a.createElement("strong",null,Object(j.t)("Admin")),Object(j.t)(" access to ".concat(e.admin.join(", "))))))}},{key:"render",value:function(){var e=this,t=this.props,n=t.closeModal,r=t.app,a=t.orgId,o=t.Header,s=t.Body;return v.a.createElement(v.a.Fragment,null,v.a.createElement(o,{closeButton:!0,onHide:n},Object(j.t)("Install ".concat(r.name))),v.a.createElement(s,null,v.a.createElement(P,null,Object(j.t)("Install on your "),v.a.createElement("strong",null,a),Object(j.t)(" organization with the following permissions:")),v.a.createElement(y.a,null,this.renderPermissions())),v.a.createElement("div",{className:"modal-footer"},r.redirectUrl&&v.a.createElement(I,null,Object(j.t)("After installation you'll be redirected to the ".concat(r.name," service to finish setup."))),v.a.createElement(R,{priority:"success",onClick:function(){return e.onInstall()}},Object(j.t)("Install")),v.a.createElement(R,{onClick:n},Object(j.t)("Cancel"))))}},{key:"permissions",get:function(){return new w.a(this.props.app.scopes).toPermissions()}}]),t}(v.a.Component);k.propTypes={closeModal:d.a.func.isRequired,onInstall:d.a.func.isRequired,Body:d.a.oneOfType([d.a.func,d.a.node]).isRequired,Header:d.a.oneOfType([d.a.func,d.a.node]).isRequired,app:b.default.SentryApplication.isRequired,orgId:d.a.string.isRequired},t.default=k;var R=Object(O.default)(g.default,{target:"ey7jt0i0"})("margin-left:",Object(E.default)(1),";"),P=Object(O.default)("p",{target:"ey7jt0i1"})("color:",function(e){return e.theme.gray5},";"),I=Object(O.default)("div",{target:"ey7jt0i2"})("padding-right:5px;font-size:12px;color:",function(e){return e.theme.gray2},";")},1589:function(e,t,n){var r=n(384),a=n(812),o=Object.prototype.hasOwnProperty,s=a(function(e,t,n){o.call(e,n)?e[n].push(t):r(e,n,[t])});e.exports=s},1590:function(e,t){e.exports=function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}},1675:function(e,t,n){"use strict";n.d(t,"a",function(){return g});var r=n(26),a=n.n(r),o=n(50),s=n.n(o),c=n(4),i=n.n(c),l=n(6),u=n.n(l),p=n(1589),f=n.n(p),m=n(1676),d=n.n(m),h={read:0,write:1,admin:2},v={project:"Project",team:"Team",release:"Release",event:"Event",org:"Organization",member:"Member"},g=function(){function e(t){var n=this;i()(this,e),this.compareScopes=function(e,t){return n.permissionLevel(e)-n.permissionLevel(t)},this.permissionLevel=function(e){var t=e.split(":")[1];return h[t]},this.scopes=t}return u()(e,[{key:"toResourcePermissions",value:function(){var e=s()(this.scopes),t=this.defaultResourcePermissions;return e.includes("project:releases")&&(t.Release="admin",d()(e,"project:releases")),this.topScopes(e).forEach(function(e){var n=e.split(":"),r=a()(n,2),o=r[0],s=r[1];t[v[o]]=s}),t}},{key:"toPermissions",value:function(){var e=s()(this.scopes),t={read:[],write:[],admin:[]};return e.includes("project:releases")&&(t.admin.push("Release"),d()(e,"project:releases")),this.topScopes(e).forEach(function(e){var n=e.split(":"),r=a()(n,2),o=r[0],s=r[1];t[s].push(v[o])}),t}},{key:"topScopes",value:function(e){var t=this;return Object.values(f()(e,function(e){return e.split(":")[0]})).map(function(e){return e.sort(t.compareScopes)}).map(function(e){return e.pop()})}},{key:"defaultResourcePermissions",get:function(){return{Project:"no-access",Team:"no-access",Release:"no-access",Event:"no-access",Organization:"no-access",Member:"no-access"}}}]),e}()},1676:function(e,t,n){var r=n(591)(n(1677));e.exports=r},1677:function(e,t,n){var r=n(1678);e.exports=function(e,t){return e&&e.length&&t&&t.length?r(e,t):e}},1678:function(e,t,n){var r=n(288),a=n(596),o=n(1679),s=n(485),c=n(1590),i=Array.prototype.splice;e.exports=function(e,t,n,l){var u=l?o:a,p=-1,f=t.length,m=e;for(e===t&&(t=c(t)),n&&(m=r(e,s(n)));++p<f;)for(var d=0,h=t[p],v=n?n(h):h;(d=u(m,v,d,l))>-1;)m!==e&&i.call(m,d,1),i.call(e,d,1);return e}},1679:function(e,t){e.exports=function(e,t,n,r){for(var a=n-1,o=e.length;++a<o;)if(r(e[a],t))return a;return-1}}}]);
//# sourceMappingURL=SentryAppPermissionsModal.js.map