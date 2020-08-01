(this.webpackJsonpmeetup=this.webpackJsonpmeetup||[]).push([[0],{181:function(e,t,n){e.exports=n(382)},186:function(e,t,n){},187:function(e,t,n){},382:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(54),s=n.n(i),o=(n(186),n(9)),c=n(13),l=n(11),u=n(10),p=(n(187),n(8)),d=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.handleShowDetails=function(){!1===e.state.showDetails?e.setState({showDetails:!0}):e.setState({showDetails:!1})},e.data=[{name:"Reservations",value:e.props.event.yes_rsvp_count},{name:"Free Slots",value:e.props.event.rsvp_limit-e.props.event.yes_rsvp_count}],e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=["RED","BLACK"];return r.a.createElement("div",{className:"Event"},r.a.createElement("div",{className:"event__Overview"},r.a.createElement("p",{className:"event__Overview--localTime"},this.props.event.local_time),r.a.createElement("p",{className:"event__Overview--localDate"},this.props.event.local_date),r.a.createElement("p",{className:"event__Overview--name"},this.props.event.name),this.props.event.group&&this.props.event.group.name&&r.a.createElement("p",{className:"event__Overview--groupName"},this.props.event.group.name),r.a.createElement("p",{className:"event__Overview--peopleGoing"},"People Going: ",this.props.event.yes_rsvp_count),this.props.event.yes_rsvp_count&&this.props.event.rsvp_limit&&r.a.createElement(p.f,{height:200},r.a.createElement(p.e,null,r.a.createElement(p.d,{isAnimationActive:!1,data:this.data,dataKey:"value",outerRadius:32,label:!0},this.data.map((function(e,n){return r.a.createElement(p.b,{key:"cell-".concat(n),fill:t[n]})}))),r.a.createElement(p.c,{iconSize:10,iconType:"triangle",layout:"horizontal",verticalAlign:"bottom",align:"center"}),r.a.createElement(p.i,null))),r.a.createElement("button",{className:"details-btn",onClick:function(){return e.handleShowDetails()}},"Details")),this.state.showDetails&&r.a.createElement("div",{className:"event__Details"},r.a.createElement("p",{className:"event__Details--description"},this.props.event.description)))}}]),n}(a.Component),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={events:[]},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("ul",{className:"EventList"},this.props.events.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(d,{event:e}))})))}}]),n}(a.Component),h=n(25),v=n.n(h),f=n(58),g={city:{id:1007700,city:"M\xfcnchen",lat:48.14,lon:11.58,state:"",country:"de",zip:"meetup3",member_count:1257},events:[{created:1592331973e3,duration:36e5,id:"bvxjtrybckbvb",name:"offene Meditationsgruppe - M\xfcnchen - STARTET WIEDER VORORT",date_in_series_pattern:!1,status:"upcoming",time:15949206e5,local_date:"2020-07-16",local_time:"19:30",updated:1592331973e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:8,venue:{id:26353279,name:"Sahaja Yoga Zentrum M\xfcnchen",lat:48.13126754760742,lon:11.589075088500977,repinned:!0,address_1:"Am Lilienberg 2a",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},is_online_event:!1,group:{created:1405527637e3,name:"Free Meditation & Yoga \u2013 in Munich / M\xfcnchen",id:15760412,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Free-Meditation-Yoga-Munich",who:"Meditators",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Free-Meditation-Yoga-Munich/events/bvxjtrybckbvb/",description:"<p>STARTET WIEDER VORORT als Pr\xe4senz-Meditation!</p> <p>Einstieg ist jederzeit m\xf6glich, geeignet f\xfcr Anf\xe4nger und Fortgeschrittene.</p> <p>Grundlagen und Wissen von Sahaja Yoga werden vorgestellt: Wissen \xfcber Adi Shakti, Kundalini, Energiezentren, subtile Kan\xe4le in und einfache Reinigungstechniken mit den Elementen, die unterst\xfctzend auf unser inneres Wachstum wirken und uns ins Gleichgewicht bringen.</p> <p>Wir lernen wie wir in unserem t\xe4glichen Leben in Balance kommen und in einem Zustand der Stille Kraft sch\xf6pfen k\xf6nnen.</p> <p>Ein zentraler Punkt ist die Stille in uns, die sp\xfcrbar ist und f\xfcr jeden, jederzeit zug\xe4nglich. Sie ist der Moment im Hier und Jetzt, der uns Inspiration, Freude und vieles mehr schenkt.<br/>In diesem Zustand zu verweilen bedeutet Meditation - und dann ist Platz f\xfcr inneres Wachstum und Evolution.</p> <p>Jeder Abend beinhaltet auch eine gef\xfchrte Meditation und auch jederzeit eine Frage-Antwort-Runde.</p> <p>Wir freuen uns auf Euch!</p> ",visibility:"public",member_pay_fee:!1},{created:1592331973e3,duration:36e5,id:"bvxjtrybckbvc",name:"offene Meditationsgruppe - M\xfcnchen - STARTET WIEDER VORORT",date_in_series_pattern:!1,status:"upcoming",time:15949206e5,local_date:"2020-07-16",local_time:"19:30",updated:1592331973e3,utc_offset:72e5,waitlist_count:1,yes_rsvp_count:8,rsvp_limit:10,venue:{id:26353279,name:"Sahaja Yoga Zentrum M\xfcnchen",lat:48.13126754760742,lon:11.589075088500977,repinned:!0,address_1:"Am Lilienberg 2a",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},is_online_event:!1,group:{created:1405527637e3,name:"Free Meditation & Yoga \u2013 in Munich / M\xfcnchen",id:15760412,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Free-Meditation-Yoga-Munich",who:"Meditators",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Free-Meditation-Yoga-Munich/events/bvxjtrybckbvb/",description:"<p>STARTET WIEDER VORORT als Pr\xe4senz-Meditation!</p> <p>Einstieg ist jederzeit m\xf6glich, geeignet f\xfcr Anf\xe4nger und Fortgeschrittene.</p> <p>Grundlagen und Wissen von Sahaja Yoga werden vorgestellt: Wissen \xfcber Adi Shakti, Kundalini, Energiezentren, subtile Kan\xe4le in und einfache Reinigungstechniken mit den Elementen, die unterst\xfctzend auf unser inneres Wachstum wirken und uns ins Gleichgewicht bringen.</p> <p>Wir lernen wie wir in unserem t\xe4glichen Leben in Balance kommen und in einem Zustand der Stille Kraft sch\xf6pfen k\xf6nnen.</p> <p>Ein zentraler Punkt ist die Stille in uns, die sp\xfcrbar ist und f\xfcr jeden, jederzeit zug\xe4nglich. Sie ist der Moment im Hier und Jetzt, der uns Inspiration, Freude und vieles mehr schenkt.<br/>In diesem Zustand zu verweilen bedeutet Meditation - und dann ist Platz f\xfcr inneres Wachstum und Evolution.</p> <p>Jeder Abend beinhaltet auch eine gef\xfchrte Meditation und auch jederzeit eine Frage-Antwort-Runde.</p> <p>Wir freuen uns auf Euch!</p> ",visibility:"public",member_pay_fee:!1}]},b=n(59),y=n.n(b);function _(){var e=localStorage.getItem("access_token");if(!e){var t=new URLSearchParams(window.location.search).get("code");return t?E("get",t):(window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=n0mb0fa9rn9eegfm3s91fs5kp5&response_type=code&redirect_uri=https://azheng1991.github.io/meetup/",null)}var n=localStorage.getItem("last_saved_time");return e&&Date.now()-n<36e5?e:E("renew",localStorage.getItem("refresh_token"))}function E(e,t){return w.apply(this,arguments)}function w(){return(w=Object(f.a)(v.a.mark((function e(t,n){var a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"get"===t?a="https://ng7mjmy5ed.execute-api.us-east-1.amazonaws.com/dev/api/token/"+n:"renew"===t&&(a="https://ng7mjmy5ed.execute-api.us-east-1.amazonaws.com/dev/api/refresh/"+n),e.next=3,y.a.get(a);case 3:return r=e.sent,localStorage.setItem("access_token",r.data.access_token),localStorage.setItem("refresh_token",r.data.refresh_token),localStorage.setItem("last_saved_time",Date.now()),e.abrupt("return",r.data.access_token);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return O.apply(this,arguments)}function O(){return(O=Object(f.a)(v.a.mark((function e(t){var n,a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]);case 2:return e.next=4,_();case 4:if(!(n=e.sent)){e.next=11;break}return a="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+t+"&access_token="+n,e.next=9,y.a.get(a);case 9:return r=e.sent,e.abrupt("return",r.data);case 11:return e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t,n){return S.apply(this,arguments)}function S(){return(S=Object(f.a)(v.a.mark((function e(t,n,a){var r,i,s,o,c,l,u;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=4;break}if(r=[],null===a)r=g.events;else for(i=0;i<a;i++)i<2&&r.push(g.events[i]);return e.abrupt("return",r);case 4:if(navigator.onLine){e.next=7;break}return s=localStorage.getItem("lastEvents"),e.abrupt("return",JSON.parse(s));case 7:return e.next=9,_();case 9:if(!(o=e.sent)){e.next=21;break}return c="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+o,t&&n&&(c+="&lat="+t+"&lon="+n),a&&(c+="&page="+a),t&&n&&a&&(c+="&lat="+t+"&lon="+n+"&page="+a),e.next=17,y.a.get(c);case 17:return l=e.sent,(u=l.data.events).length&&localStorage.setItem("lastEvents",JSON.stringify(u)),e.abrupt("return",u);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Alert"},r.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),n}(a.Component),z=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(M),A=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(M),x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({query:n}),k(n).then((function(t){e.setState({suggestions:t}),n&&0===t.length?e.setState({infoText:"We can not find the city you are looking for. Please try another city"}):e.setState({infoText:""})}))},e.handleItemClicked=function(t,n,a){e.setState({query:t,suggestions:[]}),e.props.updateEvents(n,a)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){""===this.state.query&&this.props.updateEvents(null,null,null)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement(z,{text:this.state.infoText}),r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(t){return r.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string,t.lat,t.lon)}},t.name_string)}))))}}]),n}(a.Component),D=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32,errorText:""},e.handleOnChange=function(t){var n=t.target.value;n<1?e.setState({errorText:"Please enter a valid number"}):e.setState({errorText:""}),e.setState({numberOfEvents:n}),e.props.updateEvents(null,null,n)},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"numberOfEvents"},r.a.createElement(A,{text:this.state.errorText}),r.a.createElement("label",null,"Number of Events: "),r.a.createElement("input",{value:this.state.numberOfEvents,onChange:this.handleOnChange,className:"eventsNumberInput"}))}}]),n}(a.Component),T=n(158),W=n.n(T),N=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={events:[],is_mounted:!1,lat:null,lon:null,page:null},e.updateEvents=function(t,n,a){t&&n?j(t,n,e.state.page).then((function(a){e.is_mounted&&e.setState({events:a,lat:t,lon:n})})):a?j(e.state.lat,e.state.lon,a).then((function(t){e.is_mounted&&e.setState({events:t,page:a})})):j(e.state.lat,e.state.lon,e.state.page).then((function(t){e.is_mounted&&e.setState({events:t})}))},e.countEventsOnADate=function(t){for(var n=0,a=0;a<e.state.events.length;a+=1)e.state.events[a].local_date===t&&(n+=1);return n},e.getData=function(){for(var t=[],n=W()(),a=0;a<7;a+=1){n.add(1,"days");var r=n.format("YYYY-MM-DD"),i=e.countEventsOnADate(r);t.push({date:r,number:i})}return t},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.is_mounted=!0}},{key:"componentWillUnmount",value:function(){this.is_mounted=!1}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(x,{updateEvents:this.updateEvents}),r.a.createElement(D,{updateEvents:this.updateEvents}),r.a.createElement("center",null,r.a.createElement(p.f,{height:400},r.a.createElement(p.h,{margin:{top:20,right:20,bottom:20,left:20}},r.a.createElement(p.a,null),r.a.createElement(p.j,{type:"category",dataKey:"date",name:"date"}),r.a.createElement(p.k,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1}),r.a.createElement(p.i,{cursor:{strokeDasharray:"3 3"}}),r.a.createElement(p.g,{data:this.getData(),fill:"#8884d8"})))),r.a.createElement(m,{events:this.state.events}))}}]),n}(a.Component),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var C=n(159);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meetup",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meetup","/service-worker.js");R?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):I(t,e)}))}}(),C.config("4cf59ad0119441d599bc7eba7490a12f").install()}},[[181,1,2]]]);
//# sourceMappingURL=main.aa2bd29c.chunk.js.map