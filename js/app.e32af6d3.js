(function(e){function a(a){for(var n,o,i=a[0],c=a[1],l=a[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(a);while(p.length)p.shift()();return s.push.apply(s,l||[]),t()}function t(){for(var e,a=0;a<s.length;a++){for(var t=s[a],n=!0,i=1;i<t.length;i++){var c=t[i];0!==r[c]&&(n=!1)}n&&(s.splice(a--,1),e=o(o.s=t[0]))}return e}var n={},r={app:0},s=[];function o(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=n,o.d=function(e,a,t){o.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,a){if(1&a&&(e=o(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)o.d(t,n,function(a){return e[a]}.bind(null,n));return t},o.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(a,"a",a),a},o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var u=c;s.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-app",[t("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[t("h3",[e._v("CVR Teams Channel Archiver")]),t("v-spacer")],1),t("v-main",[t("MessageArchiver")],1)],1)},s=[],o=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{},[n("v-expansion-panels",{staticClass:"pb-2"},[n("v-expansion-panel",{staticClass:"grey lighten-2"},[n("v-expansion-panel-header",[n("span",[n("v-icon",{attrs:{color:"red darken-2",left:""}},[e._v(" mdi-help ")]),e._v(" How to get an Access Token?")],1)]),n("v-expansion-panel-content",{staticStyle:{"text-align":"left"}},[n("ul",[n("li",[n("span",[e._v("1. Navigate to "),n("a",{attrs:{href:"https://developer.microsoft.com/en-us/graph/graph-explorer"}},[e._v("https://developer.microsoft.com/en-us/graph/graph-explorer")])])]),n("li",[n("span",[e._v("2. Sign in with your CVR Teams account ")])]),n("li",[n("span",[e._v("3. Click the 'Access Token' tab and copy the token. ")])])]),n("br"),n("img",{attrs:{src:t("c080"),alt:"ex",title:"token",width:"600"}})])],1)],1),n("v-text-field",{attrs:{label:"Enter your access token"},model:{value:e.accessToken,callback:function(a){e.accessToken=a},expression:"accessToken"}}),n("v-btn",{attrs:{color:"green lighten-2"},on:{click:function(a){return a.stopPropagation(),e.getListOfTeams(a)}}},[e._v("List Channels")])],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("v-simple-table",{attrs:{dense:"",height:"500px"},scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[e._v("Team")]),n("th",{staticClass:"text-left"},[e._v("Name")]),n("th",{staticClass:"text-left"},[e._v("Download")])])]),n("tbody",e._l(e.myListOfChannels,(function(a){return n("tr",{key:a.id},[n("td",{staticStyle:{"text-align":"left"}},[e._v(e._s(a.teamName))]),n("td",{staticStyle:{"text-align":"left"}},[e._v(e._s(a.displayName))]),n("td",[n("v-btn",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return t.stopPropagation(),e.saveToHTMLFile(a)}}},[e._v("HTML")]),n("v-btn",{attrs:{small:""},on:{click:function(t){return t.stopPropagation(),e.saveToJSONFile(a)}}},[e._v("JSON")])],1)])})),0)]},proxy:!0}])}),n("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:e.isLoading,callback:function(a){e.isLoading=a},expression:"isLoading"}},[n("v-card",{attrs:{color:"primary",dark:""}},[n("v-card-text",[e._v(" "+e._s(e.loadingText)+" "),n("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1)],1)],1)},i=[],c=t("53ca"),l=t("1da1"),u=t("b85c"),d=(t("99af"),t("ac1f"),t("5319"),t("96cf"),t("bc3a")),p=t.n(d),f=t("21a6"),h={name:"MessageArchiver",data:function(){return{accessToken:"",myListOfChannels:[],allMessagesRaw:[],errors:"",isLoading:!1,loadingText:""}},computed:{headers:function(){return{Authorization:this.accessToken}}},methods:{getListOfTeams:function(){var e=this;this.isLoading=!0,this.loadingText="Getting your Teams and Channels",this.myListOfChannels=[];var a="https://graph.microsoft.com/beta/me/joinedTeams";p.a.get(a,{headers:this.headers}).then((function(a){var t,n=Object(u["a"])(a.data["value"]);try{var r=function(){var a=t.value;p.a.get("https://graph.microsoft.com/beta/teams/"+a["id"]+"/channels",{headers:e.headers}).then((function(t){var n,r=Object(u["a"])(t.data["value"]);try{for(r.s();!(n=r.n()).done;){var s=n.value;s["teamName"]=a["displayName"],s["teamID"]=a["id"],e.myListOfChannels.push(s)}}catch(o){r.e(o)}finally{r.f()}e.isLoading=!1})).catch((function(a){e.errors=a,e.isLoading=!1}))};for(n.s();!(t=n.n()).done;)r()}catch(s){n.e(s)}finally{n.f()}})).catch((function(a){e.errors=a,e.isLoading=!1}))},downloadRawMessages:function(e){var a=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,r,s,o,i,c,l,d,f,h;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="",r="https://graph.microsoft.com/beta/teams/"+e["teamID"]+"/channels/"+e["id"]+"/messages?$top=100",t.next=4,p.a.get(r,{headers:a.headers});case 4:s=t.sent,o=Object(u["a"])(s.data["value"]);try{for(o.s();!(i=o.n()).done;)c=i.value,a.allMessagesRaw.push(c)}catch(g){o.e(g)}finally{o.f()}if(!a.isThereMoreMessages(s)){t.next=29;break}n=s.data["@odata.nextLink"],console.log("more messages found",s);case 10:return t.prev=11,t.next=14,p.a.get(n,{headers:a.headers});case 14:l=t.sent,t.next=20;break;case 17:t.prev=17,t.t0=t["catch"](11),console.log(t.t0);case 20:d=Object(u["a"])(l.data["value"]);try{for(d.s();!(f=d.n()).done;)h=f.value,a.allMessagesRaw.push(h)}catch(g){d.e(g)}finally{d.f()}if(!a.isThereMoreMessages(l)){t.next=26;break}n=l.data["@odata.nextLink"],t.next=27;break;case 26:return t.abrupt("break",29);case 27:t.next=10;break;case 29:return t.next=31,a.addRepliesToRawMessages(e["teamID"],e["id"]);case 31:case"end":return t.stop()}}),t,null,[[11,17]])})))()},addRepliesToRawMessages:function(e,a){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function n(){var r,s,o,i,c,l,d,f,h,g,v,m,b;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log("start adding in replies"),r="",s=Object(u["a"])(t.allMessagesRaw),n.prev=3,s.s();case 5:if((o=s.n()).done){n.next=32;break}return i=o.value,c="https://graph.microsoft.com/beta/teams/"+e+"/channels/"+a+"/messages/"+i["id"]+"/replies",n.next=10,p.a.get(c,{headers:t.headers});case 10:l=n.sent,i["replies"]=[],d=Object(u["a"])(l.data["value"]);try{for(d.s();!(f=d.n()).done;)h=f.value,i["replies"].push(h)}catch(x){d.e(x)}finally{d.f()}if(!t.isThereMoreMessages(l)){n.next=30;break}r=l.data["@odata.nextLink"],g=void 0;case 17:return n.next=20,p.a.get(r,{headers:t.headers});case 20:g=n.sent,v=Object(u["a"])(g.data["value"]);try{for(v.s();!(m=v.n()).done;)b=m.value,i["replies"].push(b)}catch(x){v.e(x)}finally{v.f()}if(!t.isThereMoreMessages(g)){n.next=27;break}r=g.data["@odata.nextLink"],n.next=28;break;case 27:return n.abrupt("break",30);case 28:n.next=17;break;case 30:n.next=5;break;case 32:n.next=37;break;case 34:n.prev=34,n.t0=n["catch"](3),s.e(n.t0);case 37:return n.prev=37,s.f(),n.finish(37);case 40:case"end":return n.stop()}}),n,null,[[3,34,37,40]])})))()},isThereMoreMessages:function(e){var a=Object(c["a"])(e.data["@odata.nextLink"]);return"undefined"!=a?(console.log("more? yes",a),!0):(console.log("more? no",a),!1)},saveToJSONFile:function(e){var a=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a.isLoading=!0,a.loadingText="Downloading all messages. This may take a while...",t.next=4,a.downloadRawMessages(e);case 4:a.isLoading=!1,n=new Blob([JSON.stringify(a.allMessagesRaw)],{type:"text/plain;charset=utf-8"}),r=new Date,f.saveAs(n,"".concat(e.teamName,"_").concat(e.displayName,"_archive_").concat(r.toISOString(),".txt"));case 8:case"end":return t.stop()}}),t)})))()},saveToHTMLFile:function(e){var a=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,r,s,o,i,c,l,d,p,h,g,v,m,b,x;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a.isLoading=!0,a.loadingText="Downloading all messages. This may take a while...",t.next=4,a.downloadRawMessages(e);case 4:n="",a.allMessagesRaw.sort((function(e,a){var t=new Date(e.createdDateTime),n=new Date(a.createdDateTime);return t-n})),r=Object(u["a"])(a.allMessagesRaw);try{for(r.s();!(s=r.n()).done;){o=s.value,i=a.lodash.get(o,"body.content","unknown"),c=a.lodash.get(o,"from.user.displayName","unknown"),l=a.lodash.get(o,"createdDateTime","unknown"),i&&(i=i.replace(/\n+/g,""),i=i.replace(/\t+/g,""),console.log("fixed",i)),n+="<hr><hr><h3>"+c+":</h3><h5>Created: "+l+"</h5>"+i+"<blockquote>",o["replies"].sort((function(e,a){var t=new Date(e.createdDateTime),n=new Date(a.createdDateTime);return t-n})),d=Object(u["a"])(o["replies"]);try{for(d.s();!(p=d.n()).done;)h=p.value,g=a.lodash.get(h,"from.user.displayName","unknown"),v=a.lodash.get(h,"body.content","unknown"),m=a.lodash.get(h,"createdDateTime","unknown"),v&&(v=v.replace(/\n+/g,""),v=v.replace(/\t+/g,"")),n+="<h3>Reply From: "+g+"</h3><h5>Created: "+m+"</h5>"+v}catch(y){d.e(y)}finally{d.f()}n+="</blockquote>"}}catch(y){r.e(y)}finally{r.f()}a.isLoading=!1,b=new Blob([JSON.stringify(n)],{type:"text/plain;charset=utf-8"}),x=new Date,f.saveAs(b,"".concat(e.teamName,"_").concat(e.displayName,"_archive_").concat(x.toISOString(),".html"));case 12:case"end":return t.stop()}}),t)})))()}}},g=h,v=t("2877"),m=t("6544"),b=t.n(m),x=t("8336"),y=t("b0af"),w=t("99d9"),k=t("62ad"),T=t("a523"),O=t("169a"),_=t("cd55"),M=t("49e2"),L=t("c865"),j=t("0393"),C=t("132d"),R=t("8e36"),S=t("0fd9"),V=t("1f4f"),D=t("8654"),N=Object(v["a"])(g,o,i,!1,null,null,null),P=N.exports;b()(N,{VBtn:x["a"],VCard:y["a"],VCardText:w["a"],VCol:k["a"],VContainer:T["a"],VDialog:O["a"],VExpansionPanel:_["a"],VExpansionPanelContent:M["a"],VExpansionPanelHeader:L["a"],VExpansionPanels:j["a"],VIcon:C["a"],VProgressLinear:R["a"],VRow:S["a"],VSimpleTable:V["a"],VTextField:D["a"]});var A={name:"App",components:{MessageArchiver:P},data:function(){return{}}},E=A,J=t("7496"),F=t("40dc"),I=t("f6c4"),H=t("2fa4"),B=Object(v["a"])(E,r,s,!1,null,null,null),$=B.exports;b()(B,{VApp:J["a"],VAppBar:F["a"],VMain:I["a"],VSpacer:H["a"]});var q=t("f309");n["a"].use(q["a"]);var z=new q["a"]({}),G=t("9955"),K=t.n(G),Q=t("2ef0"),U=t.n(Q);n["a"].config.productionTip=!1,n["a"].use(K.a,{name:"custom",lodash:U.a}),new n["a"]({vuetify:z,render:function(e){return e($)}}).$mount("#app")},c080:function(e,a,t){e.exports=t.p+"img/token.80b04f6e.png"}});
//# sourceMappingURL=app.e32af6d3.js.map