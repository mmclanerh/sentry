(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1559:function(e,t,n){"use strict";var a=n(4),r=n.n(a),i=n(6),c=n.n(i),o=n(7),l=n.n(o),u=n(5),s=n.n(u),d=n(8),h=n.n(d),f=n(16),m=n(1),p=n.n(m),g=n(0),b=n.n(g),y=n(51),E=n.n(y),j=n(3),k=n(223),v=n(258),w=n(24),O=n(587),C=n(23),x=Object(j.default)(function(e){return b.a.createElement("input",e)},{target:"e1usehz70"})(k.a,";background-color:",function(e){return e.theme.offWhite},";border-right-width:0;border-top-right-radius:0;border-bottom-right-radius:0;&:hover,&:focus{background-color:",function(e){return e.theme.offWhite},";border-right-width:0;}"),S=Object(j.default)("div",{target:"e1usehz71"})("flex-grow:1;border:none;"),q=Object(j.default)(w.default,{target:"e1usehz72"})("flex-shrink:1;border-radius:0 0.25em 0.25em 0;box-shadow:none;"),T=function(e){function t(e){var n;return r()(this,t),(n=l()(this,s()(t).call(this,e))).handleCopyClick=function(e){if(n.textRef.current){var t=n.props.onCopy;n.handleSelectText(),t(n.props.children,e),e.stopPropagation()}},n.handleSelectText=function(){n.textRef.current&&Object(v.a)(E.a.findDOMNode(n.textRef.current))},n.textRef=b.a.createRef(),n}return h()(t,e),c()(t,[{key:"render",value:function(){var e=this.props,t=e.style,n=e.children;return b.a.createElement(f.Flex,null,b.a.createElement(S,null,b.a.createElement(x,{readOnly:!0,ref:this.textRef,style:t,value:n,onClick:this.handleSelectText})),b.a.createElement(O.a,{hideUnsupported:!0,onClick:this.handleCopyClick,value:n},b.a.createElement(q,{type:"button",size:"xsmall",onClick:this.handleCopyClick},b.a.createElement(C.default,{src:"icon-clipboard",size:"1.25em"}))))}}]),t}(b.a.Component);T.propTypes={children:p.a.string.isRequired,style:p.a.object,onCopy:p.a.func},T.defaultProps={onCopy:function(){}},t.a=T},1731:function(e,t,n){"use strict";var a=n(12),r=n.n(a),i=n(4),c=n.n(i),o=n(6),l=n.n(o),u=n(7),s=n.n(u),d=n(5),h=n.n(d),f=n(8),m=n.n(f),p=n(0),g=n.n(p),b=n(1),y=n.n(b),E=n(203),j=n(95),k=n(479),v=n(257),w=n(614),O=n(481),C=n(1559),x=n(480),S=n(25),q=n(9),T=n(2),_=n(381),M=n(56),R=n(26),z=n.n(R),F=n(96),I=n.n(F),D=function(e){function t(){return c()(this,t),s()(this,h()(t).apply(this,arguments))}return m()(t,e),l()(t,[{key:"getTransformedData",value:function(){return Object.entries(this.fields.toJSON()).reduce(function(e,t){var n=z()(t,2),a=n[0],r=n[1];return 0===a.indexOf("config.")?(e.config||(e.config={}),"config.schedule.frequency"!==a&&"config.schedule.interval"!==a||Array.isArray(e.config.schedule)||(e.config.schedule=[null,null]),"config.schedule.frequency"===a?e.config.schedule[0]=parseInt(r,10):"config.schedule.interval"===a?e.config.schedule[1]=r:e.config[a.substr(7)]=r):e[a]=r,e},{})}},{key:"getTransformedValue",value:function(e){return 0===e.indexOf("config")?this.getValue(e):I()(h()(t.prototype),"getTransformedValue",this).call(this,e)}}]),t}(n(594).a),A=[["crontab","Crontab"],["interval","Interval"]],J=[["cron_job","Cron Job"]],V=[["minute","minute(s)"],["hour","hour(s)"],["day","day(s)"],["week","week(s)"],["month","month(s)"],["year","year(s)"]],N=function(e){function t(){var e,n;c()(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=s()(this,(e=h()(t)).call.apply(e,[this].concat(r)))).form=new D,n}return m()(t,e),l()(t,[{key:"formDataFromConfig",value:function(e,t){var n={};switch(e){case"cron_job":switch(n["config.schedule_type"]=t.schedule_type,n["config.checkin_margin"]=t.checkin_margin,n["config.max_runtime"]=t.max_runtime,t.schedule_type){case"interval":n["config.schedule.frequency"]=t.schedule[0],n["config.schedule.interval"]=t.schedule[1];break;case"crontab":default:n["config.schedule"]=t.schedule}}return n}},{key:"render",value:function(){var e=this,t=this.props.monitor,n=this.props.selection.projects[0],a=n?this.props.organization.projects.find(function(e){return e.id===n+""}):null;return g.a.createElement(j.a,{access:["project:write"]},function(n){var i=n.hasAccess;return g.a.createElement(v.default,{allowUndo:!0,requireChanges:!0,apiEndpoint:e.props.apiEndpoint,apiMethod:e.props.apiMethod,model:e.form,initialData:t?r()({name:t.name,type:t.type,project:t.project.slug},e.formDataFromConfig(t.type,t.config)):{project:a?a.slug:null},onSubmitSuccess:e.props.onSubmitSuccess},g.a.createElement(S.a,null,g.a.createElement(S.e,null,Object(T.t)("Details")),g.a.createElement(S.c,null,t&&g.a.createElement(k.default,{label:Object(T.t)("ID")},g.a.createElement("div",{className:"controls"},g.a.createElement(C.a,null,t.id))),g.a.createElement(O.default,{name:"project",label:Object(T.t)("Project"),disabled:!i,choices:e.props.organization.projects.filter(function(e){return e.isMember}).map(function(e){return[e.slug,e.slug]}),required:!0}),g.a.createElement(x.default,{name:"name",placeholder:Object(T.t)("My Cron Job"),label:Object(T.t)("Name"),disabled:!i,required:!0}))),g.a.createElement(S.a,null,g.a.createElement(S.e,null,Object(T.t)("Config")),g.a.createElement(S.c,null,g.a.createElement(O.default,{name:"type",label:Object(T.t)("Type"),disabled:!i,choices:J,required:!0}),g.a.createElement(E.a,null,function(){switch(e.form.getValue("type")){case"cron_job":return g.a.createElement(g.a.Fragment,null,g.a.createElement(w.a,{name:"config.max_runtime",label:Object(T.t)("Max Runtime"),disabled:!i,help:Object(T.t)("The maximum runtime (in minutes) a check-in is allowed before it's marked as a failure."),placeholder:"e.g. 30"}),g.a.createElement(O.default,{name:"config.schedule_type",label:Object(T.t)("Schedule Type"),disabled:!i,choices:A,required:!0}));default:return null}}),g.a.createElement(E.a,null,function(){switch(e.form.getValue("config.schedule_type")){case"crontab":return g.a.createElement(g.a.Fragment,null,g.a.createElement(x.default,{name:"config.schedule",label:Object(T.t)("Schedule"),disabled:!i,placeholder:"*/5 * * *",required:!0,help:Object(T.tct)("Changes to the schedule will apply on the next check-in. See [link:Wikipedia] for crontab syntax.",{link:g.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Cron"})})}),g.a.createElement(w.a,{name:"config.checkin_margin",label:Object(T.t)("Check-in Margin"),disabled:!i,help:Object(T.t)("The margin (in minutes) a check-in is allowed to exceed it's scheduled window before being treated as missed."),placeholder:"e.g. 30"}));case"interval":return g.a.createElement(g.a.Fragment,null,g.a.createElement(w.a,{name:"config.schedule.frequency",label:Object(T.t)("Frequency"),disabled:!i,placeholder:"e.g. 1",required:!0}),g.a.createElement(O.default,{name:"config.schedule.interval",label:Object(T.t)("Interval"),disabled:!i,choices:V,required:!0}),g.a.createElement(w.a,{name:"config.checkin_margin",label:Object(T.t)("Check-in Margin"),disabled:!i,help:Object(T.t)("The margin (in minutes) a check-in is allowed to exceed it's scheduled window before being treated as missed."),placeholder:"e.g. 30"}));default:return null}}))))})}}]),t}(p.Component);N.propTypes={monitor:q.default.Monitor,organization:q.default.Organization.isRequired,selection:q.default.GlobalSelection,apiEndpoint:y.a.string.isRequired,apiMethod:y.a.string.isRequired,onSubmitSuccess:y.a.func.isRequired};t.a=Object(_.a)(Object(M.a)(N))},2325:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return j});var a=n(12),r=n.n(a),i=n(4),c=n.n(i),o=n(6),l=n.n(o),u=n(7),s=n.n(u),d=n(5),h=n.n(d),f=n(8),m=n.n(f),p=n(0),g=n.n(p),b=n(10),y=n(153),E=n(1731),j=function(e){function t(){var e,n;c()(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=s()(this,(e=h()(t)).call.apply(e,[this].concat(i)))).onUpdate=function(e){n.setState({monitor:r()({},n.state.monitor,e)})},n.onSubmitSuccess=function(e){b.browserHistory.push("/organizations/".concat(n.props.params.orgId,"/monitors/").concat(e.id,"/"))},n}return m()(t,e),l()(t,[{key:"getEndpoints",value:function(){var e=this.props.params;return[["monitor","/monitors/".concat(e.monitorId,"/")]]}},{key:"getTitle",value:function(){return this.state.monitor?"".concat(this.state.monitor.name," - Monitors - ").concat(this.props.params.orgId):"Monitors - ".concat(this.props.params.orgId)}},{key:"renderBody",value:function(){var e=this.state.monitor;return g.a.createElement(g.a.Fragment,null,g.a.createElement("h1",null,"Edit Monitor"),g.a.createElement(E.a,{monitor:e,apiMethod:"PUT",apiEndpoint:"/monitors/".concat(e.id,"/"),onSubmitSuccess:this.onSubmitSuccess}))}}]),t}(y.default)}}]);
//# sourceMappingURL=OrganizationMonitorEdit.js.map