(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(72)},45:function(e,t,a){},46:function(e,t,a){},66:function(e,t,a){e.exports=a.p+"static/media/6.04661072.gif"},67:function(e,t){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(37),i=a.n(l),o=(a(45),a(46),a(20)),c=a(13),r=a(14),u=a.n(r),d=a(19),m=a(3),f=a(4),h=a(6),v=a(5),p=a(7);function g(e){return s.a.createElement("a",{className:e.classNames,onClick:e.onClick},e.name)}function E(e){var t=e.linkData.map(function(t){return s.a.createElement(g,{name:t.name,onClick:e.onClick,classNames:t.classNames})});return s.a.createElement("p",null,t)}function k(e){var t,a=e.linkData;if(a)for(var n=0;n<a.length;n++)"subtitle is-4 is-active"===a[n].classNames&&(t=a[n].component);else t=s.a.createElement("div",null," ",s.a.createElement("progress",{className:"progress is-info",max:"100"},"60%")," ");return s.a.createElement("div",{className:"container"},s.a.createElement("nav",{className:"panel"},s.a.createElement("div",{className:"panel-tabs"},s.a.createElement(E,{linkData:e.linkData,onClick:e.onClick}))),t)}var b=a(1),C=a.n(b),N={readAllEvents:function(){return C.a.get("/api/event")},createEvent:function(e){return C.a.post("/api/event",e)},readEvent:function(e){return C.a.get("/api/event/"+e)},updateEvent:function(e,t){return C.a.put("/api/event/"+e,t)},deleteEvent:function(e){return C.a.delete("/api/event/"+e)},pushEvent:function(e,t,a){return C.a.put("/api/event/".concat(e,"/").concat(t),a)}},y={readAllInfo:function(){return C.a.get("/api/info")},createInfo:function(e){return C.a.post("/api/info",e)},readInfo:function(e){return C.a.get("/api/info/"+e)},updateInfo:function(e,t){return C.a.put("/api/info/"+e,t)},deleteInfo:function(e){return C.a.delete("/api/info/"+e)},pushInfo:function(e,t,a){return C.a.put("/api/info/".concat(e,"/").concat(t),a)}};function w(e){return s.a.createElement("div",{className:"level ".concat(e.additionalClassName)},e.children)}var O=function(e){return s.a.createElement("div",{className:"column"},s.a.createElement("div",{className:"box button has-text-centered ".concat(e.clicked?"is-info level-item":""," ").concat(e.additionalClassNames),onClick:e.onClick,"data-tag":e._id,key:e._id},s.a.createElement(w,null,s.a.createElement("p",{className:"level-left"}," ",e.title," "),e.clicked?s.a.createElement("span",{className:"icon is-small level-right"},s.a.createElement("i",{className:"fas fa-check-circle"})):"")))},S=a(15),I=a.n(S),j=(a(22),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(v.a)(t).call(this,e))).foldDownOnClick=function(e){a.props.onClick||(a.state.foldDownShown?a.setState({foldDownShown:!1}):a.setState({foldDownShown:!0}))},a.state={foldDownShown:!1},a}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=null===typeof this.props.children?null:s.a.createElement("div",null," ",s.a.createElement("p",{className:"quick-underline"},"Associated Info:"),s.a.createElement(D,{regular:!0,data:this.props.children,alreadyLogged:[],additionalClassNames:" push-right"})," "),t=s.a.createElement(S.SlideDown,{className:"fold-down"},this.state.foldDownShown?s.a.createElement("div",null,s.a.createElement("p",null,this.props.body),e):null);return s.a.createElement("article",{className:"accordion column has-text-centered ".concat(this.props.additionalClassNames),"data-tag":this.props._id,key:this.props._id,onClick:this.props.onClick},s.a.createElement("div",{className:"level"},s.a.createElement("p",{className:"subtitle is-4 level-left",onClick:this.foldDownOnClick}," ",this.props.title," ")),t)}}]),t}(s.a.Component)),x=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(v.a)(t).call(this,e))).foldDownOnClick=function(e){a.props.onClick||(a.state.foldDownShown?a.setState({foldDownShown:!1}):a.setState({foldDownShown:!0}))},a.state={foldDownShown:!1},a}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"has-text-centered ".concat(this.props.clicked?"is-info level-item":""," ").concat(this.props.additionalClassNames),onClick:this.foldDownOnClick,"data-tag":this.props._id,key:this.props._id},s.a.createElement("p",null," ",this.props.title," "),s.a.createElement(I.a,{className:"fold-down"},this.state.foldDownShown?s.a.createElement("p",{className:"container"},this.props.body):null))}}]),t}(s.a.Component);function T(e){return s.a.createElement("div",{className:"tile ".concat(e.seniority?"is-parent":"is-child"," \n                                 ").concat(e.vertical?"is-vertical":""," \n                                 ").concat(e.box?"box":"")},e.children)}var D=function(e){function t(e){return Object(m.a)(this,t),Object(h.a)(this,Object(v.a)(t).call(this,e))}return Object(p.a)(t,e),Object(f.a)(t,[{key:"createList",value:function(){var e,t,a=this,n=this.props.alreadyLogged;if(!this.props.fullDisplay){var l;l=this.props.data.filter(function(e){return!e.assigned});for(var i=0;i<l.length;i++)l[i].clicked=!1;for(var o=0;o<l.length;o++)for(var c=0;c<n.length;c++)l[o]._id===n[c]&&(l[o].clicked=!0);e=l,console.log(e)}this.props.fullDisplay&&(e=this.props.data,console.log(e)),this.props.accordion||this.props.regular?this.props.regular?t=e.map(function(e){return s.a.createElement(x,{clicked:e.clicked,title:e.title||e.name,body:e.body||e.description,key:e._id,_id:e._id,children:e.assocInfo?e.assocInfo:null,additionalClassNames:a.props.additionalClassNames,onClick:a.props.onClick})}):(console.log(e),t=e.map(function(e){return s.a.createElement(j,{clicked:e.clicked,title:e.title||e.name,body:e.body||e.description,key:e._id,_id:e._id,children:e.assocInfo?e.assocInfo:null,additionalClassNames:a.props.additionalClassNames,onClick:a.props.onClick})})):(console.log(e),t=e.map(function(e){return s.a.createElement(O,{clicked:e.clicked,title:e.title||e.name,body:e.body,key:e._id,_id:e._id,onClick:a.props.onClick})}));var r=t.splice(0,t.length/3),u=t.splice(0,t.length/2),d=t.splice(0,t.length);return s.a.createElement("div",null,s.a.createElement("div",{className:"columns"},r),s.a.createElement("div",{className:"columns"},u),s.a.createElement("div",{className:"columns"},d))}},{key:"render",value:function(){var e=this.createList();return s.a.createElement("div",null,e)}}]),t}(s.a.Component),_={readAllTimelines:function(){return C.a.get("/api/timeline")},createTimeline:function(e){return C.a.post("/api/timeline",e)},readTimeline:function(e){return C.a.get("/api/timeline/"+e)},updateTimeline:function(e,t){return C.a.put("/api/timeline/"+e,t)},deleteTimeline:function(e){return C.a.delete("/api/timeline/"+e)}};function F(e){return s.a.createElement("section",{className:"hero is-bold has-text-centered ".concat(e.additionalClassNames),onClick:e.onClick,"data-tag":e._id,key:e._id},s.a.createElement("div",{className:"hero-body"},s.a.createElement("div",{className:"container"},s.a.createElement("p",{className:"title"},e.title),s.a.createElement("h2",{className:"subtitle"},e.body))),s.a.createElement("div",{className:"container"},e.children))}a(66);var L=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(v.a)(t).call(this,e))).panelLinkOnClick=function(e){for(var t=e.currentTarget.text,n=a.state.actives,s=0;s<n.length;s++)n[s].classNames="subtitle is-4";for(var l=0;l<n.length;l++)t===n[l].name&&(n[l].classNames+=" is-active",console.log(n));a.setState({actives:n})},a.sessionItemOnClick=function(e){var t=e.currentTarget.dataset.tag;console.log(t),_.readTimeline(t).then(function(e){console.log(e),a.setState({currentView:e.data})})},a.eventItemOnClick=function(e){var t=e.currentTarget.dataset.tag;console.log(t),N.readEvent(t).then(function(e){return a.setState({currentView:e.data})});a.state.events.find(function(e){return e._id===t})},a.infoItemOnClick=function(e){var t=e.currentTarget.dataset.tag;console.log(t);var n=a.state.info.find(function(e){return e._id===t});a.setState({currentView:n})},a.state={currentView:{},events:[],info:[],sessions:[],actives:[{name:"events",classNames:"subtitle is-4 is-active"},{name:"info",classNames:"subtitle is-4"},{name:"sessions",classNames:"subtitle is-4"},{name:"player stats",classNames:"subtitle is-4"}]},a}return Object(p.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadSessions();case 2:return e.next=4,this.loadEvents();case 4:return e.next=6,this.loadInfo();case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"loadEvents",value:function(){var e=this;N.readAllEvents().then(function(t){t.data.reverse(),e.setState({events:t.data}),console.log(e.state.events)}).catch(function(e){return console.log(e)})}},{key:"loadInfo",value:function(){var e=this;y.readAllInfo().then(function(t){t.data.reverse(),e.setState({info:t.data}),console.log(e.state.info)}).catch(function(e){return console.log(e)})}},{key:"loadSessions",value:function(){var e=this;_.readAllTimelines().then(function(t){t.data.reverse(),e.setState({sessions:t.data}),console.log(e.state.sessions)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state.currentView._id?s.a.createElement(F,{title:this.state.currentView.name||this.state.currentView.title,body:this.state.currentView.description||this.state.currentView.body,children:s.a.createElement(D,{accordion:!0,fullDisplay:!0,data:this.state.currentView.events||this.state.currentView.assocInfo||[]})}):s.a.createElement(F,{title:"Select an event to inspect it."}),t=this.state.sessions,a=this.state.actives;return a[0].component=s.a.createElement(D,{accordion:!0,data:this.state.events,additionalClassNames:"panel-item",alreadyLogged:[],onClick:this.eventItemOnClick}),a[1].component=s.a.createElement(D,{accordion:!0,data:this.state.info,additionalClassNames:"panel-item",alreadyLogged:[],onClick:this.infoItemOnClick}),a[2].component=s.a.createElement(D,{accordion:!0,data:t,additionalClassNames:"panel-item",alreadyLogged:[],onClick:this.sessionItemOnClick}),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column"},s.a.createElement(k,{name:"data",onClick:this.panelLinkOnClick,linkData:a})),s.a.createElement("div",{className:"column"},s.a.createElement("div",{className:"container"},e))))}}]),t}(s.a.Component),A=(a(67),a(16)),V=a(10);function B(e){return s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},s.a.createElement("i",{class:"fas fa-chevron-right"})," ",e.display),s.a.createElement("div",{className:"control"},s.a.createElement("input",{className:"input",type:"text",name:e.name,value:e.value,onChange:e.onChange,placeholder:e.placeholder})))}function W(e){return s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},s.a.createElement("i",{class:"fas fa-chevron-right"})," ",e.display),s.a.createElement("div",{className:"control"},s.a.createElement("textarea",{className:"textarea",name:e.name,value:e.value,onChange:e.onChange,placeholder:e.placeholder})))}function G(e){return s.a.createElement("div",null,s.a.createElement(T,null,s.a.createElement(B,{value:e.title,onChange:e.onChange,name:"title",display:"Title",placeholder:"The Party Talks to the King"})),s.a.createElement(T,null,s.a.createElement(W,{value:e.body,onChange:e.onChange,name:"body",display:"Description",placeholder:"What else do you need to know about the event?"})))}function M(e){return s.a.createElement("div",{className:"button ".concat(e.additionalClassName),onClick:e.onClick},e.name)}var P=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(v.a)(t).call(this,e))).createTimeline=function(e){var t={name:a.state.title,description:a.state.body};_.createTimeline(t).then(function(e){console.log(e),a.setState({session:e.data})})},a.panelLinkOnClick=function(e){for(var t=e.currentTarget.text,n=a.state.actives,s=0;s<n.length;s++)n[s].classNames="subtitle is-4";for(var l=0;l<n.length;l++)t===n[l].name&&(n[l].classNames+=" is-active",console.log(n));a.setState({actives:n})},a.handleInputChange=function(e){var t=e.target,n=t.name,s=t.value;a.setState(Object(A.a)({},n,s))},a.eventBlockOnClick=function(e){var t=e.currentTarget.dataset.tag,n=a.state.events.find(function(e){return t===e._id});function s(){return l.apply(this,arguments)}function l(){return(l=Object(d.a)(u.a.mark(function e(){var a=this;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.pushEvent(t,this.state.session._id,n).then(function(e){return console.log(e)});case 2:_.readTimeline(this.state.session._id).then(function(e){return a.setState({session:e.data})}),console.log(this.state.session);case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}console.log(n),delete n.clicked,n.assigned=!0,(s=s.bind(Object(V.a)(a)))()},a.state={title:"",body:"",events:[],info:[],session:{},actives:[{name:"events",classNames:"subtitle is-4 is-active"},{name:"info",classNames:"subtitle is-4"},{name:"session stats",classNames:"subtitle is-4"},{name:"player stats",classNames:"subtitle is-4"}]},a}return Object(p.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadEvents();case 2:return e.next=4,this.loadInfo();case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"loadEvents",value:function(){var e=this;N.readAllEvents().then(function(t){t.data.reverse(),e.setState({events:t.data}),console.log(e.state.events)}).catch(function(e){return console.log(e)})}},{key:"loadInfo",value:function(){var e=this;y.readAllInfo().then(function(t){t.data.reverse(),e.setState({info:t.data}),console.log(e.state.info)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e,t=this.state.session.events;console.log(t),t&&(e=s.a.createElement(D,{fullDisplay:!0,data:t,alreadyLogged:[]}));var a=this.state.actives;a[0].component=s.a.createElement(D,{setting:"buttons",data:this.state.events,alreadyLogged:[],onClick:this.eventBlockOnClick}),a[1].component=s.a.createElement(D,{setting:"buttons",data:this.state.info,alreadyLogged:[]});var n=this.state.session._id?s.a.createElement(k,{name:"data",onClick:this.panelLinkOnClick,linkData:a}):s.a.createElement("div",{className:""},s.a.createElement(G,{title:this.state.title,body:this.state.body,onChange:this.handleInputChange}),s.a.createElement(M,{name:"Create Session",onClick:this.createTimeline}));return s.a.createElement("div",{className:"container"},e,n)}}]),t}(s.a.Component),R=a(25);function U(e){return s.a.createElement("div",{className:"tabs is-toggle is-toggle-rounded is-centered ".concat(e.additionalClassNames)},s.a.createElement("ul",null,s.a.createElement("li",{className:e.className1,onClick:e.onClick},s.a.createElement("a",null,s.a.createElement("span",{className:"icon is-small"},s.a.createElement("i",{className:"fas fa-calendar-times"})),s.a.createElement("span",null,"Events"))),s.a.createElement("li",{className:e.className2,onClick:e.onClick},s.a.createElement("a",null,s.a.createElement("span",{className:"icon is-small"},s.a.createElement("i",{className:"fas fa-file-alt"})),s.a.createElement("span",null,"Information")))))}var J=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(v.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n=t.name,s=t.value;a.setState(Object(A.a)({},n,s))},a.handleFormSubmit=function(e){e.preventDefault();var t={title:a.state.title,body:a.state.body,assigned:a.state.assigned,mutualExclusives:a.state.mutualExclusives,assocInfo:a.state.assocInfo};""===t.title?a.setState({noGo:!0}):(a.setState({noGo:!1}),N.createEvent(t).then(a.loadEvents()).catch(function(e){return console.log(e)}),a.clearForm())},a.eventBlockOnClick=function(e){var t=e.currentTarget.dataset.tag,n=a.state.mutualExclusives,s=n.find(function(e){return t===e});s===t?a.setState({mutualExclusives:n.filter(function(e){return s!=e})}):a.setState({mutualExclusives:[].concat(Object(R.a)(n),[t])})},a.infoBlockOnClick=function(e){var t=e.currentTarget.dataset.tag,n=a.state.assocInfo,s=n.find(function(e){return t===e});s===t?a.setState({assocInfo:n.filter(function(e){return s!=e})}):a.setState({assocInfo:[].concat(Object(R.a)(n),[t])})},a.handleInputChange=a.handleInputChange.bind(Object(V.a)(a)),a.toggleInfo=a.toggleInfo.bind(Object(V.a)(a)),a.clearForm=a.clearForm.bind(Object(V.a)(a)),a.state={isLoading:!0,infoToggled:!1,events:[],info:[],title:"",body:"",assigned:!1,mutualExclusives:[],assocInfo:[]},a}return Object(p.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({isLoading:!0})},2e3),this.loadEvents(),this.loadInfo()}},{key:"loadEvents",value:function(){var e=this;N.readAllEvents().then(function(t){t.data.reverse(),e.setState({events:t.data}),console.log(e.state.events)}).catch(function(e){return console.log(e)})}},{key:"loadInfo",value:function(){var e=this;y.readAllInfo().then(function(t){t.data.reverse(),e.setState({info:t.data}),console.log(e.state.info)}).catch(function(e){return console.log(e)})}},{key:"clearForm",value:function(){this.setState({title:"",body:"",assigned:!1,mutualExclusives:[],assocInfo:[]})}},{key:"toggleInfo",value:function(){this.state.infoToggled?this.setState({infoToggled:!1}):this.setState({infoToggled:!0})}},{key:"render",value:function(){var e=s.a.createElement(D,{accordion:!0,additionalClassNames:"event-form-item",data:this.state.events,onClick:this.eventBlockOnClick,alreadyLogged:this.state.mutualExclusives}),t=s.a.createElement(D,{accordion:!0,additionalClassNames:"event-form-item",data:this.state.info,onClick:this.infoBlockOnClick,alreadyLogged:this.state.assocInfo}),a=s.a.createElement("p",{className:"title"}," You have no events! "),n=s.a.createElement("div",null," ",s.a.createElement("progress",{className:"progress is-info",max:"100"},"60%")," "),l=(this.state.isLoading,this.state.infoToggled?t:e),i=this.state.noGo?s.a.createElement("div",{class:"notification is-danger"},"Please enter a title for your event!"):null;return s.a.createElement("div",null,i,s.a.createElement(G,{title:this.state.title,body:this.state.body,onChange:this.handleInputChange}),s.a.createElement("br",null),s.a.createElement(U,{onClick:this.toggleInfo,className1:this.state.infoToggled?"":"is-active",className2:this.state.infoToggled?"is-active":""}),this.state.events.length?l:null,s.a.createElement(w,null,s.a.createElement(M,{accordion:!0,name:"Submit",onClick:this.handleFormSubmit,additionalClassName:"level-item"}),s.a.createElement(M,{accordion:!0,name:"Clear Form",onClick:this.clearForm,additionalClassName:"level-item"})))}}]),t}(s.a.Component),Y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(v.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n=t.name,s=t.value;a.setState(Object(A.a)({},n,s))},a.handleFormSubmit=function(e){e.preventDefault();var t={title:a.state.title,body:a.state.body,assigned:a.state.assigned,mutualExclusives:a.state.mutualExclusives,assocInfo:a.state.assocInfo};""===t.title?a.setState({noGo:!0}):(a.setState({noGo:!1}),y.createEvent(t).then(a.loadEvents()).catch(function(e){return console.log(e)}),a.clearForm())},a.handleInputChange=a.handleInputChange.bind(Object(V.a)(a)),a.toggleInfo=a.toggleInfo.bind(Object(V.a)(a)),a.clearForm=a.clearForm.bind(Object(V.a)(a)),a.state={infoToggled:!1,events:[],info:[],title:"",body:"",assigned:!1},a}return Object(p.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.loadInfo()}},{key:"loadInfo",value:function(){var e=this;y.readAllInfo().then(function(t){t.data.reverse(),e.setState({info:t.data}),console.log(e.state.info)}).catch(function(e){return console.log(e)})}},{key:"clearForm",value:function(){this.setState({title:"",body:"",assigned:!1,mutualExclusives:[],assocInfo:[]})}},{key:"toggleInfo",value:function(){this.state.infoToggled?this.setState({infoToggled:!1}):this.setState({infoToggled:!0})}},{key:"render",value:function(){s.a.createElement("p",{className:"title"}," You have no events! "),s.a.createElement("div",null," ",s.a.createElement("progress",{className:"progress is-info",max:"100"},"60%")," ");var e=s.a.createElement(D,{accordion:!0,additionalClassNames:"event-form-item",data:this.state.info,onClick:this.infoBlockOnClick,alreadyLogged:[]}),t=this.state.noGo?s.a.createElement("div",{class:"notification is-danger"},"Please enter a title for your event!"):null;return s.a.createElement("div",null,t,s.a.createElement(G,{title:this.state.title,body:this.state.body,onChange:this.handleInputChange}),e,s.a.createElement(w,null,s.a.createElement(M,{accordion:!0,name:"Submit",onClick:this.handleFormSubmit,additionalClassName:"level-item"}),s.a.createElement(M,{accordion:!0,name:"Clear Form",onClick:this.clearForm,additionalClassName:"level-item"})))}}]),t}(s.a.Component),q=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(v.a)(t).call(this,e))).eventFormOnClick=function(e){a.state.eventFormShown?a.setState({eventFormShown:!1}):a.setState({eventFormShown:!0})},a.state={eventFormShown:!1},a}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement(U,{additionalClassNames:"is-large",style:{color:"rgb(143, 188, 205)"},onClick:this.eventFormOnClick}),s.a.createElement(S.SlideDown,null,this.state.eventFormShown?s.a.createElement(J,null):s.a.createElement(Y,null)))}}]),t}(s.a.Component),z=['"We have to split the party. It\'s the only way."',"Did you know? Lorem ipsum",'"Folks, we\'ve got problems. The shopkeepers have unionized."','"I have never lied in game, except for the times when it benefitted me to do so."'];var K=function(){return s.a.createElement(o.a,null,s.a.createElement("div",{className:"level container header"},s.a.createElement("div",{className:"level-left"},s.a.createElement("p",{className:"title is-1"},"SCRIBE")),s.a.createElement("div",{className:"level-right"},s.a.createElement("div",{className:"tabs is-centered is-large"},s.a.createElement("ul",null,s.a.createElement("li",{className:"is-active"},s.a.createElement("div",{className:"level"},s.a.createElement("span",{className:"level-item icon is-small"},s.a.createElement("i",{className:"fas fa-image","aria-hidden":"true"})),s.a.createElement(o.b,{className:"level-item",to:"/home"},"Dashboard"))),s.a.createElement("li",null,s.a.createElement("div",{className:"level"},s.a.createElement("span",{className:"icon is-small"},s.a.createElement("i",{className:"fas fa-music","aria-hidden":"true"})),s.a.createElement(o.b,{to:"/session"},"New Session"))),s.a.createElement("li",null,s.a.createElement("div",{className:"level"},s.a.createElement("span",{className:"icon is-small"},s.a.createElement("i",{className:"fas fa-music","aria-hidden":"true"})),s.a.createElement(o.b,{to:"/create"},"Create Events"))))))),s.a.createElement(c.a,{exact:!0,path:"/home",render:function(){return s.a.createElement(L,null)}}),s.a.createElement(c.a,{exact:!0,path:"/session",render:function(){return s.a.createElement(P,null)}}),s.a.createElement(c.a,{exact:!0,path:"/create",render:function(){return s.a.createElement(q,null)}}),s.a.createElement("footer",{className:"footer"},s.a.createElement("div",{className:"content has-text-centered"},s.a.createElement("p",{className:"title is-5"},z[Math.floor(z.length*Math.random())]))))},$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(s.a.createElement(K,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");$?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):H(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):H(t,e)})}}()}},[[40,1,2]]]);
//# sourceMappingURL=main.eb3e2139.chunk.js.map