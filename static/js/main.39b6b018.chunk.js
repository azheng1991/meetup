(this.webpackJsonpmeetup=this.webpackJsonpmeetup||[]).push([[0],{21:function(e,t,n){e.exports=n(46)},26:function(e,t,n){},27:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(19),s=n.n(i),o=(n(26),n(1)),u=n(5),c=n(3),l=n(2),p=(n(27),function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.handleShowDetails=function(){!1===e.state.showDetails?e.setState({showDetails:!0}):e.setState({showDetails:!1})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Event"},r.a.createElement("div",{className:"event__Overview"},r.a.createElement("p",{className:"event__Overview--localTime"},this.props.event.local_time),r.a.createElement("p",{className:"event__Overview--localDate"},this.props.event.local_date),r.a.createElement("p",{className:"event__Overview--name"},this.props.event.name),this.props.event.group&&this.props.event.group.name&&r.a.createElement("p",{className:"event__Overview--groupName"},this.props.event.group.name),r.a.createElement("p",{className:"event__Overview--peopleGoing"},this.props.event.yes_rsvp_count),r.a.createElement("button",{className:"details-btn",onClick:function(){return e.handleShowDetails()}},"show details")),this.state.showDetails&&r.a.createElement("div",{className:"event__Details"},r.a.createElement("p",{className:"event__Details--description"},this.props.event.description)))}}]),n}(a.Component)),d=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={events:[]},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("ul",{className:"EventList"},this.props.events.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(p,{event:e}))})))}}]),n}(a.Component),m=n(6),h=n.n(m),v=n(7),g={city:{id:1007700,city:"M\xfcnchen",lat:48.14,lon:11.58,state:"",country:"de",zip:"meetup3",member_count:1257},events:[{created:1592331973e3,duration:36e5,id:"bvxjtrybckbvb",name:"offene Meditationsgruppe - M\xfcnchen - STARTET WIEDER VORORT",date_in_series_pattern:!1,status:"upcoming",time:15949206e5,local_date:"2020-07-16",local_time:"19:30",updated:1592331973e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:8,venue:{id:26353279,name:"Sahaja Yoga Zentrum M\xfcnchen",lat:48.13126754760742,lon:11.589075088500977,repinned:!0,address_1:"Am Lilienberg 2a",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},is_online_event:!1,group:{created:1405527637e3,name:"Free Meditation & Yoga \u2013 in Munich / M\xfcnchen",id:15760412,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Free-Meditation-Yoga-Munich",who:"Meditators",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Free-Meditation-Yoga-Munich/events/bvxjtrybckbvb/",description:"<p>STARTET WIEDER VORORT als Pr\xe4senz-Meditation!</p> <p>Einstieg ist jederzeit m\xf6glich, geeignet f\xfcr Anf\xe4nger und Fortgeschrittene.</p> <p>Grundlagen und Wissen von Sahaja Yoga werden vorgestellt: Wissen \xfcber Adi Shakti, Kundalini, Energiezentren, subtile Kan\xe4le in und einfache Reinigungstechniken mit den Elementen, die unterst\xfctzend auf unser inneres Wachstum wirken und uns ins Gleichgewicht bringen.</p> <p>Wir lernen wie wir in unserem t\xe4glichen Leben in Balance kommen und in einem Zustand der Stille Kraft sch\xf6pfen k\xf6nnen.</p> <p>Ein zentraler Punkt ist die Stille in uns, die sp\xfcrbar ist und f\xfcr jeden, jederzeit zug\xe4nglich. Sie ist der Moment im Hier und Jetzt, der uns Inspiration, Freude und vieles mehr schenkt.<br/>In diesem Zustand zu verweilen bedeutet Meditation - und dann ist Platz f\xfcr inneres Wachstum und Evolution.</p> <p>Jeder Abend beinhaltet auch eine gef\xfchrte Meditation und auch jederzeit eine Frage-Antwort-Runde.</p> <p>Wir freuen uns auf Euch!</p> ",visibility:"public",member_pay_fee:!1},{created:1592331973e3,duration:36e5,id:"bvxjtrybckbvc",name:"offene Meditationsgruppe - M\xfcnchen - STARTET WIEDER VORORT",date_in_series_pattern:!1,status:"upcoming",time:15949206e5,local_date:"2020-07-16",local_time:"19:30",updated:1592331973e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:8,venue:{id:26353279,name:"Sahaja Yoga Zentrum M\xfcnchen",lat:48.13126754760742,lon:11.589075088500977,repinned:!0,address_1:"Am Lilienberg 2a",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},is_online_event:!1,group:{created:1405527637e3,name:"Free Meditation & Yoga \u2013 in Munich / M\xfcnchen",id:15760412,join_mode:"approval",lat:48.13999938964844,lon:11.579999923706055,urlname:"Free-Meditation-Yoga-Munich",who:"Meditators",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/Free-Meditation-Yoga-Munich/events/bvxjtrybckbvb/",description:"<p>STARTET WIEDER VORORT als Pr\xe4senz-Meditation!</p> <p>Einstieg ist jederzeit m\xf6glich, geeignet f\xfcr Anf\xe4nger und Fortgeschrittene.</p> <p>Grundlagen und Wissen von Sahaja Yoga werden vorgestellt: Wissen \xfcber Adi Shakti, Kundalini, Energiezentren, subtile Kan\xe4le in und einfache Reinigungstechniken mit den Elementen, die unterst\xfctzend auf unser inneres Wachstum wirken und uns ins Gleichgewicht bringen.</p> <p>Wir lernen wie wir in unserem t\xe4glichen Leben in Balance kommen und in einem Zustand der Stille Kraft sch\xf6pfen k\xf6nnen.</p> <p>Ein zentraler Punkt ist die Stille in uns, die sp\xfcrbar ist und f\xfcr jeden, jederzeit zug\xe4nglich. Sie ist der Moment im Hier und Jetzt, der uns Inspiration, Freude und vieles mehr schenkt.<br/>In diesem Zustand zu verweilen bedeutet Meditation - und dann ist Platz f\xfcr inneres Wachstum und Evolution.</p> <p>Jeder Abend beinhaltet auch eine gef\xfchrte Meditation und auch jederzeit eine Frage-Antwort-Runde.</p> <p>Wir freuen uns auf Euch!</p> ",visibility:"public",member_pay_fee:!1}]},f=n(8),b=n.n(f);function _(){var e=localStorage.getItem("access_token");if(!e){var t=new URLSearchParams(window.location.search).get("code");return t?y("get",t):(window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=n0mb0fa9rn9eegfm3s91fs5kp5&response_type=code&redirect_uri=https://azheng1991.github.io/meetup/",null)}var n=localStorage.getItem("last_saved_time");return e&&Date.now()-n<36e5?e:y("renew",localStorage.getItem("refresh_token"))}function y(e,t){return w.apply(this,arguments)}function w(){return(w=Object(v.a)(h.a.mark((function e(t,n){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"get"===t?a="https://ng7mjmy5ed.execute-api.us-east-1.amazonaws.com/dev/api/token/"+n:"renew"===t&&(a="https://ng7mjmy5ed.execute-api.us-east-1.amazonaws.com/dev/api/refresh/"+n),e.next=3,b.a.get(a);case 3:return r=e.sent,localStorage.setItem("access_token",r.data.access_token),localStorage.setItem("refresh_token",r.data.refresh_token),localStorage.setItem("last_saved_time",Date.now()),e.abrupt("return",r.data.access_token);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return k.apply(this,arguments)}function k(){return(k=Object(v.a)(h.a.mark((function e(t){var n,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]);case 2:return e.next=4,_();case 4:if(!(n=e.sent)){e.next=11;break}return a="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+t+"&access_token="+n,e.next=9,b.a.get(a);case 9:return r=e.sent,e.abrupt("return",r.data);case 11:return e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t,n){return O.apply(this,arguments)}function O(){return(O=Object(v.a)(h.a.mark((function e(t,n,a){var r,i,s,o,u;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=4;break}if(r=[],null===a)r=g.events;else for(i=0;i<a;i++)i<2&&r.push(g.events[i]);return e.abrupt("return",r);case 4:return e.next=6,_();case 6:if(!(s=e.sent)){e.next=16;break}return o="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+s,t&&n&&(o+="&lat="+t+"&lon="+n),a&&(o+="&page="+a),t&&n&&a&&(o+="&lat="+t+"&lon="+n+"&page="+a),e.next=14,b.a.get(o);case 14:return u=e.sent,e.abrupt("return",u.data.events);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.Component;var M=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[]},e.handleInputChanged=function(t){var n=t.target.value;e.setState({query:n}),E(n).then((function(t){e.setState({suggestions:t}),n&&0===t.length?e.setState({infoText:"We can not find the city you are looking for. Please try another city"}):e.setState({infoText:""})}))},e.handleItemClicked=function(t,n,a){e.setState({query:t,suggestions:[]}),e.props.updateEvents(n,a)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){""===this.state.query&&this.props.updateEvents(null,null,null)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(t){return r.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string,t.lat,t.lon)}},t.name_string)}))))}}]),n}(a.Component),S=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32},e.handleOnChange=function(t){var n=t.target.value;e.setState({numberOfEvents:n}),e.props.updateEvents(null,null,n)},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"numberOfEvents"},r.a.createElement("center",null,r.a.createElement("form",null,r.a.createElement("label",null,"Number of Events: "),r.a.createElement("input",{type:"number",value:this.state.numberOfEvents,onChange:this.handleOnChange,className:"eventsNumberInput"}))))}}]),n}(a.Component),z=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={events:[],is_mounted:!1,lat:null,lon:null,page:null},e.updateEvents=function(t,n,a){t&&n?j(t,n,e.state.page).then((function(a){return e.setState({events:a,lat:t,lon:n})})):a?j(e.state.lat,e.state.lon,a).then((function(t){return e.setState({events:t,page:a})})):j(e.state.lat,e.state.lon,e.state.page).then((function(t){e.is_mounted&&e.setState({events:t})}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.is_mounted=!0}},{key:"componentWillUnmount",value:function(){this.is_mounted=!1}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(M,{updateEvents:this.updateEvents}),r.a.createElement(S,{updateEvents:this.updateEvents}),r.a.createElement(d,{events:this.state.events}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=n(20);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),x.config("4cf59ad0119441d599bc7eba7490a12f").install()}},[[21,1,2]]]);
//# sourceMappingURL=main.39b6b018.chunk.js.map