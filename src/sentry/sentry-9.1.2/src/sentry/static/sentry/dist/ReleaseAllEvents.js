(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{1605:function(e,t,n){"use strict";var a=n(44),r=n.n(a),s=n(1),o=n.n(s),i=n(0),c=n.n(i),l=n(17),u=n.n(l),p=n(18),m=n.n(p),d=n(84),h=n.n(d),f=n(9),g=n(261),b=n(4),v=n.n(b),j=n(6),y=n.n(j),E=n(7),x=n.n(E),I=n(5),w=n.n(I),q=n(8),S=n.n(q),L=n(16),O=n(2),k=n(25),G=function(e){function t(){return v()(this,t),x()(this,w()(t).apply(this,arguments))}return S()(t,e),y()(t,[{key:"render",value:function(){return c.a.createElement(k.e,{disablePadding:!0},c.a.createElement(L.Box,{w:[8/12,8/12,.5],mx:2,flex:"1",className:"toolbar-header"},Object(O.t)("Event")),c.a.createElement(L.Box,{w:160,mx:2,className:"toolbar-header hidden-xs hidden-sm"},Object(O.t)("Last 24 hours")),c.a.createElement(L.Flex,{w:80,mx:2,justify:"flex-end",className:"toolbar-header"},Object(O.t)("events")),c.a.createElement(L.Flex,{w:80,mx:2,justify:"flex-end",className:"toolbar-header"},Object(O.t)("users")),c.a.createElement(L.Flex,{w:80,mx:2,justify:"flex-end",className:"hidden-xs hidden-sm toolbar-header"},Object(O.t)("Assignee")))}}]),t}(c.a.Component),D=n(67),N=n(53),T=n(33),C=n(593),M=n(14),R=n(63),P=n(145),F=u()({displayName:"GroupList",propTypes:{api:o.a.object.isRequired,query:o.a.string.isRequired,canSelectGroups:o.a.bool,orgId:o.a.string.isRequired,projectId:o.a.string,environment:f.default.Environment},contextTypes:{location:o.a.object},mixins:[m.a.listenTo(D.a,"onGroupChange")],getDefaultProps:function(){return{canSelectGroups:!0}},getInitialState:function(){return{loading:!0,error:!1,groups:[]}},componentWillMount:function(){this._streamManager=new M.default.StreamManager(D.a),this.fetchData()},shouldComponentUpdate:function(e,t){return!r()(this.state,t)},componentDidUpdate:function(e){e.orgId===this.props.orgId&&e.projectId===this.props.projectId||this.fetchData()},componentWillUnmount:function(){D.a.loadInitialData([])},fetchData:function(){var e=this;D.a.loadInitialData([]);var t=this.props,n=t.api,a=t.orgId;this.setState({loading:!0,error:!1}),Object(g.a)(n,a).then(function(t){e.setState({memberList:Object(g.b)(t)})}),n.request(this.getGroupListEndpoint(),{success:function(t,n,a){e._streamManager.push(t),e.setState({error:!1,loading:!1,pageLinks:a.getResponseHeader("Link")})},error:function(){e.setState({error:!0,loading:!1})}})},getGroupListEndpoint:function(){var e=this.props,t=e.orgId,n=e.projectId,a=n?"/projects/".concat(t,"/").concat(n,"/issues/"):"/organizations/".concat(t,"/issues/");return"".concat(a,"?").concat(h.a.stringify(this.getQueryParams()))},getQueryParams:function(){var e=this.props,t=e.projectId,n=e.query,a=e.environment,r=this.context.location.query;return r.limit=50,r.sort="new",r.query=n,t&&(a?r.environment=a.name:delete r.environment),r},onGroupChange:function(){var e=this._streamManager.getAllItems();r()(e,this.state.groups)||this.setState({groups:e})},render:function(){var e=this;if(this.state.loading)return c.a.createElement(T.default,null);if(this.state.error)return c.a.createElement(N.default,{onRetry:this.fetchData});if(0===this.state.groups.length)return c.a.createElement(k.a,null,c.a.createElement(k.c,null,c.a.createElement(P.a,null,c.a.createElement("p",null,Object(O.t)("There doesn't seem to be any events fitting the query.")))));var t=this.props.orgId;return c.a.createElement(k.a,null,c.a.createElement(G,null),c.a.createElement(k.c,null,this.state.groups.map(function(n){var a=n.id,r=n.project,s=null;return e.state.memberList&&(s=e.state.memberList[r.slug]||null),c.a.createElement(C.a,{key:a,id:a,orgId:t,canSelect:e.props.canSelectGroups,memberList:s})})))}});t.a=Object(R.default)(F)},2342:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n.n(a),s=n(6),o=n.n(s),i=n(7),c=n.n(i),l=n(5),u=n.n(l),p=n(8),m=n.n(p),d=n(1),h=n.n(d),f=n(0),g=n.n(f),b=n(10),v=n(9),j=n(189),y=n(1605),E=n(2),x=function(e){function t(){return r()(this,t),c()(this,u()(t).apply(this,arguments))}return m()(t,e),o()(t,[{key:"render",value:function(){var e=this.props.params,t=e.orgId,n=e.projectId;return g.a.createElement("div",null,g.a.createElement("div",{className:"alert alert-block"},g.a.createElement(b.Link,{to:{pathname:"/".concat(t,"/").concat(n,"/"),query:{query:"release:"+this.context.release.version}}},g.a.createElement("span",{className:"icon icon-open"}),Object(E.t)("View all events seen in this release in the stream"))),g.a.createElement(y.a,{orgId:t,projectId:n,query:'release:"'+this.context.release.version+'"',canSelectGroups:!1,environment:this.props.environment}))}}]),t}(g.a.Component);x.propTypes={environment:v.default.Environment},x.contextTypes={release:h.a.object},t.default=Object(j.a)(x)}}]);
//# sourceMappingURL=ReleaseAllEvents.js.map