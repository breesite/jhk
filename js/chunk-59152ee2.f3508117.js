(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59152ee2"],{"035c":function(e,t,n){"use strict";n.r(t);var a=n("7a23");Object(a["P"])("data-v-59efcbbc");var i={class:"chat-page"},l={class:"fluid-content"},c={class:"container"},s={class:"left"},o={class:"list-header text-ellipsis"},r=Object(a["n"])("span",null,"聊天列表",-1),u={class:"right"},d={class:"send-box"};function b(e,t,n,b,v,j){var O=Object(a["V"])("Masthead"),g=Object(a["V"])("ChatsList"),m=Object(a["V"])("MessagesHeader"),f=Object(a["V"])("MessagesView"),p=Object(a["V"])("SendSection"),h=Object(a["W"])("loading");return Object(a["M"])(),Object(a["m"])(a["b"],null,[Object(a["n"])("div",{class:Object(a["A"])([j.isMobile&&"hide-masthead"])},[Object(a["q"])(O)],2),Object(a["n"])("div",i,[Object(a["n"])("div",l,[Object(a["n"])("div",c,[Object(a["n"])("div",s,[Object(a["n"])("div",o,[Object(a["n"])("i",{class:"el-icon-arrow-left back-icon",onClick:t[0]||(t[0]=function(t){return e.$router.go(-1)})}),r]),Object(a["lb"])(Object(a["q"])(g,{"chat-id":b.chatId,"show-message-view":b.showMessageView},null,8,["chat-id","show-message-view"]),[[h,b.createLoading]])]),Object(a["n"])("div",u,[Object(a["q"])(m,{chat:b.chat},null,8,["chat"]),Object(a["q"])(f,{ref:"messagesViewRef","chat-id":b.chatId,onSendSuccess:b.sendSuccess},null,8,["chat-id","onSendSuccess"]),Object(a["n"])("div",d,[Object(a["q"])(p,{ref:"sendSectionRef","chat-id":b.chatId,onAppendMessage:b.appendIncomingMessage},null,8,["chat-id","onAppendMessage"])])])])])])],64)}Object(a["N"])();var v=n("3835"),j=n("1da1"),O=(n("96cf"),n("a9e3"),n("d3b7"),n("ac1f"),n("5319"),n("466d"),n("5502")),g=n("6c02"),m=n("4995"),f=n("f685"),p=n("a684"),h=n("d257");n("b0c0");Object(a["P"])("data-v-091678a4");var y={class:"chats-wrap"},M={key:0,class:"loading-box"},k=["infinite-scroll-disabled"],w=["onClick"],_=["onClick"],V=Object(a["n"])("i",{class:"el-icon-close"},null,-1),x=[V],S={class:"avatar-box"},R=["src"],q={class:"chat-info"},C={class:"user-name text-ellipsis"},P={class:"last-message text-ellipsis"},I=["innerHTML"];function U(e,t,n,i,l,c){var s,o=Object(a["V"])("Skeleton"),r=Object(a["V"])("LoadingSpinner"),u=Object(a["W"])("infinite-scroll");return Object(a["M"])(),Object(a["m"])("div",y,[i.loading?(Object(a["M"])(),Object(a["m"])("div",M,[Object(a["q"])(o,{type:"comments"})])):null!==(s=i.chatsData)&&void 0!==s&&s.length?Object(a["lb"])((Object(a["M"])(),Object(a["m"])("ul",{key:1,class:"chats-list","infinite-scroll-disabled":!i.hasMorePages},[(Object(a["M"])(!0),Object(a["m"])(a["b"],null,Object(a["T"])(i.chatsData,(function(e){var t,n,l,s;return Object(a["M"])(),Object(a["m"])("li",{key:null===e||void 0===e?void 0:e.id,class:Object(a["A"])(["chat-item",i.chatId===(null===e||void 0===e?void 0:e.id)&&"active"]),onClick:function(t){return i.showMessageView(e)}},[Object(a["n"])("div",{class:"close-icon",onClick:function(t){return c.removeChat(e)}},x,8,_),Object(a["n"])("div",S,[Object(a["n"])("img",{src:(null===e||void 0===e||null===(t=e.users)||void 0===t?void 0:t.length)>2?null===e||void 0===e?void 0:e.icon:null===e||void 0===e||null===(n=e.withUser)||void 0===n?void 0:n.avatar,alt:"avatar",class:"user-avatar"},null,8,R)]),Object(a["n"])("div",q,[Object(a["n"])("div",C,Object(a["Z"])((null===e||void 0===e||null===(l=e.users)||void 0===l?void 0:l.length)>2?(null===e||void 0===e?void 0:e.subject)||"匿名群聊":null===e||void 0===e||null===(s=e.withUser)||void 0===s?void 0:s.name),1),Object(a["n"])("div",P,[Object(a["n"])("span",{innerHTML:c.lastMessage(e)},null,8,I)])])],10,w)})),128))],8,k)),[[u,i.loadMore]]):Object(a["l"])("",!0),i.loadingMore?(Object(a["M"])(),Object(a["k"])(r,{key:2})):Object(a["l"])("",!0)])}Object(a["N"])();var L=n("2909"),A=(n("c740"),n("a434"),n("a504")),D=n("2d5b"),N=n("d76c"),H={name:"ChatsList",props:{chatId:Number,showMessageView:Function},components:{Skeleton:D["a"],LoadingSpinner:N["a"]},setup:function(e){var t,n,i,l,c,s,o=Object(g["c"])(),r=Object(a["cb"])(e),u=r.showMessageView,d=r.chatId,b=Object(a["R"])(!(null!==(t=o.query)&&void 0!==t&&t.user_id||null!==(n=o.query)&&void 0!==n&&n.chat_id)),v=Object(f["c"])(p["o"]),j=v.mutate,m=Object(O["b"])(),h=Object(a["R"])(null===(i=m.state)||void 0===i||null===(l=i.user)||void 0===l?void 0:l.user),y=Object(p["W"])({user_id:null===(c=h.value)||void 0===c?void 0:c.id},{enabled:!(null===(s=h.value)||void 0===s||!s.id)}),M=y.chats,k=y.loading,w=y.hasMorePages,_=y.loadMore,V=y.loadingMore,x=Object(a["R"])(M.value);return Object(a["ib"])(M,(function(e){x.value=Object(L["a"])(e),b.value&&u.value((null===e||void 0===e?void 0:e[0])||{})})),{chatId:d,chatsData:x,loading:k,hasMorePages:w,loadMore:_,loadingMore:V,deleteChatMutation:j,showMessageView:u}},methods:{removeChat:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function n(){var a,i,l,c,s,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(null===e||void 0===e||!e.id){n.next=12;break}return i=t.chatsData.findIndex((function(t){return t.id===e.id})),null===(a=t.chatsData)||void 0===a||a.splice(i,1),n.next=5,Object(h["b"])((function(){return t.deleteChatMutation({chat_id:null===e||void 0===e?void 0:e.id})}));case 5:l=n.sent,c=Object(v["a"])(l,2),s=c[0],c[1],s&&(m["a"].error("删除聊天失败：".concat(Object(h["a"])(s))),null===(o=t.chatsData)||void 0===o||o.splice(i,0,e)),n.next=13;break;case 12:m["a"].error("当前聊天信息丢失");case 13:case"end":return n.stop()}}),n)})))()},lastMessage:function(e){var t;return Object(A["b"])((null===e||void 0===e||null===(t=e.lastMessage)||void 0===t?void 0:t.message)||(null!==e&&void 0!==e&&e.last_message_id?"":"“还没有发过消息”"))}}};n("d1e2");H.render=U,H.__scopeId="data-v-091678a4";var T=H;Object(a["P"])("data-v-4e53a512");var E={class:"message-header"},G=Object(a["n"])("div",null,null,-1),B={class:"right-box"},Z=Object(a["n"])("div",{class:"more-icon"},[Object(a["n"])("svg",{t:"1637906984352",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1302"},[Object(a["n"])("path",{d:"M697.83096889 63.39394333A484.0440411 484.0440411 0 0 0 512 26.54814777C243.88494222 26.54814777 26.54814777 243.88494222 26.54814777 512s217.33679445 485.45185223 485.45185223 485.45185223 485.45185223-217.33679445 485.45185223-485.45185223c0-64.56509667-12.62174777-127.43111111-36.84579556-185.83096889a24.27259221 24.27259221 0 0 0-44.83147889 18.59280555A435.49885667 435.49885667 0 0 1 948.90666667 512c0 241.29384334-195.61282333 436.90666667-436.90666667 436.90666667S75.09333333 753.29384334 75.09333333 512 270.70615666 75.09333333 512 75.09333333c58.15713223 0 114.688 11.35957333 167.23816334 33.13208889a24.27259221 24.27259221 0 0 0 18.59280555-44.83147889zM269.27407445 560.54518557a48.54518557 48.54518557 0 1 0 0-97.09037114 48.54518557 48.54518557 0 0 0 0 97.09037114z m242.72592555 0a48.54518557 48.54518557 0 1 0 0-97.09037114 48.54518557 48.54518557 0 0 0 0 97.09037114z m242.72592555 0a48.54518557 48.54518557 0 1 0 0-97.09037114 48.54518557 48.54518557 0 0 0 0 97.09037114z","p-id":"1303"})])],-1),Q={key:0},W=Object(a["p"])("取消"),z=Object(a["p"])("修改");function F(e,t,n,i,l,c){var s,o,r,u,d=Object(a["V"])("el-dropdown-item"),b=Object(a["V"])("el-dropdown-menu"),v=Object(a["V"])("el-dropdown"),j=Object(a["V"])("SelectUsers"),O=Object(a["V"])("el-input"),g=Object(a["V"])("el-button"),m=Object(a["V"])("el-dialog");return Object(a["M"])(),Object(a["m"])("div",null,[Object(a["n"])("div",E,[G,Object(a["n"])("span",null,Object(a["Z"])(i.chatName),1),Object(a["n"])("div",B,[null!==(s=i.chat)&&void 0!==s&&null!==(o=s.users)&&void 0!==o&&o.length?(Object(a["M"])(),Object(a["k"])(v,{key:0},{dropdown:Object(a["kb"])((function(){return[Object(a["q"])(b,null,{default:Object(a["kb"])((function(){return[Object(a["q"])(d,null,{default:Object(a["kb"])((function(){return[Object(a["n"])("div",{class:"dropdown-item",onClick:t[0]||(t[0]=function(e){return c.showUsersModal("add")})},Object(a["Z"])(i.isGroupChat?"邀请成员":"创建群聊"),1)]})),_:1}),i.isGroupChat?(Object(a["M"])(),Object(a["m"])("div",Q,[i.isGroupOwner?(Object(a["M"])(),Object(a["k"])(d,{key:0},{default:Object(a["kb"])((function(){return[Object(a["n"])("div",{class:"dropdown-item",onClick:t[1]||(t[1]=function(e){return c.showUsersModal("delete")})},"移除成员")]})),_:1})):Object(a["l"])("",!0),i.isGroupOwner?(Object(a["M"])(),Object(a["k"])(d,{key:1},{default:Object(a["kb"])((function(){return[Object(a["n"])("div",{class:"dropdown-item",onClick:t[2]||(t[2]=function(){return c.toggleVisible&&c.toggleVisible.apply(c,arguments)})},"修改群名")]})),_:1})):Object(a["l"])("",!0),Object(a["q"])(d,null,{default:Object(a["kb"])((function(){return[Object(a["n"])("div",{class:"dropdown-item",onClick:t[3]||(t[3]=function(){return i.deleteGroupChat&&i.deleteGroupChat.apply(i,arguments)})},Object(a["Z"])(i.isGroupOwner?"解散群聊":"退出群聊"),1)]})),_:1})])):Object(a["l"])("",!0)]})),_:1})]})),default:Object(a["kb"])((function(){return[Z]})),_:1})):Object(a["l"])("",!0)])]),Object(a["q"])(j,{users:null===(r=i.chat)||void 0===r?void 0:r.users,"chat-id":null===(u=i.chat)||void 0===u?void 0:u.id},null,8,["users","chat-id"]),Object(a["q"])(m,{modelValue:i.editDialogVisible,"onUpdate:modelValue":t[5]||(t[5]=function(e){return i.editDialogVisible=e}),"custom-class":"groupName-modal",title:"修改群名",width:"90%",center:""},{footer:Object(a["kb"])((function(){return[Object(a["q"])(g,{onClick:c.toggleVisible},{default:Object(a["kb"])((function(){return[W]})),_:1},8,["onClick"]),Object(a["q"])(g,{type:"primary",onClick:i.updateChat},{default:Object(a["kb"])((function(){return[z]})),_:1},8,["onClick"])]})),default:Object(a["kb"])((function(){var e;return[Object(a["q"])(O,{modelValue:i.groupName,"onUpdate:modelValue":t[4]||(t[4]=function(e){return i.groupName=e}),class:"name-input",maxlength:"15","show-word-limit":"",placeholder:(null===(e=i.chat)||void 0===e?void 0:e.subject)||"群聊名称"},null,8,["modelValue","placeholder"])]})),_:1},8,["modelValue"])])}Object(a["N"])();n("d81d");Object(a["P"])("data-v-36b55556");var $={key:0,id:"users-dialog"},J={class:"search-user-bar"},K=Object(a["n"])("div",{class:"input-icon"},[Object(a["n"])("svg",{class:"icon",fill:"rgba(47, 48, 53, 0.4)",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18"},[Object(a["n"])("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.875 1.5a6.375 6.375 0 103.642 11.608l3.063 3.063a1.125 1.125 0 001.59-1.591l-3.062-3.063A6.375 6.375 0 007.875 1.5zM3.75 7.875a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0z"})])],-1),Y=Object(a["n"])("span",{class:"btn-title"},"完成",-1),X={key:0,class:"el-icon-loading"},ee={class:"list-content"},te={key:0},ne={class:"skeleton-wrap"},ae={"infinite-scroll-distance":"300","infinite-scroll-disabled":"disabled"},ie=["src"],le={class:"user-name text-ellipsis"},ce={class:"list-content"},se=["src"],oe={class:"user-name text-ellipsis"};function re(e,t,n,i,l,c){var s=Object(a["V"])("el-input"),o=Object(a["V"])("Skeleton"),r=Object(a["V"])("el-checkbox"),u=Object(a["V"])("el-checkbox-group"),d=Object(a["V"])("LoadingSpinner"),b=Object(a["V"])("Empty"),v=Object(a["V"])("el-dialog"),j=Object(a["W"])("infinite-scroll");return e.visible?(Object(a["M"])(),Object(a["m"])("div",$,[Object(a["q"])(v,{modelValue:e.visible,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.visible=t}),"custom-class":"users-modal",width:"90%","destroy-on-close":!0,center:""},{default:Object(a["kb"])((function(){var n,i,l;return[Object(a["n"])("div",J,[Object(a["q"])(s,{clearable:"",class:"search-input",modelValue:e.content,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.content=t}),placeholder:"".concat(e.content||"搜索用户"),onKeyup:Object(a["mb"])(e.onSearch,["enter"]),onClear:t[1]||(t[1]=function(t){return e.onSearch({q:""})})},{prefix:Object(a["kb"])((function(){return[K]})),_:1},8,["modelValue","placeholder","onKeyup"]),Object(a["n"])("div",{class:Object(a["A"])(["input-button",(null===(n=e.selectedPerson)||void 0===n?void 0:n.length)&&"active"]),onClick:t[2]||(t[2]=function(t){var n;return(null===(n=e.selectedPerson)||void 0===n?void 0:n.length)&&e.onFinish()})},[Y,e.createLoading||e.addLoading||e.deleteLoading?(Object(a["M"])(),Object(a["m"])("i",X)):Object(a["l"])("",!0)],2)]),Object(a["lb"])(Object(a["n"])("div",ee,[e.loading?(Object(a["M"])(),Object(a["m"])("div",te,[Object(a["n"])("div",ne,[Object(a["q"])(o,{type:"comments",count:10})])])):(null===(i=e.searchUsers)||void 0===i?void 0:i.length)>0?(Object(a["M"])(),Object(a["m"])(a["b"],{key:1},[Object(a["lb"])(Object(a["n"])("div",ae,[Object(a["q"])(u,{modelValue:e.selectedPerson,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.selectedPerson=t})},{default:Object(a["kb"])((function(){return[(Object(a["M"])(!0),Object(a["m"])(a["b"],null,Object(a["T"])(e.searchUsers,(function(t){return Object(a["M"])(),Object(a["k"])(r,{class:"user-item-wrap",key:"search"+(null===t||void 0===t?void 0:t.id),label:null===t||void 0===t?void 0:t.id,disabled:e.isDisabled(null===t||void 0===t?void 0:t.id)},{default:Object(a["kb"])((function(){return[Object(a["n"])("img",{src:null===t||void 0===t?void 0:t.avatar,alt:"",class:"user-avatar"},null,8,ie),Object(a["n"])("span",le,Object(a["Z"])(null===t||void 0===t?void 0:t.name),1)]})),_:2},1032,["label","disabled"])})),128))]})),_:1},8,["modelValue"])],512),[[j,e.loadMore]]),e.hasMorePages?(Object(a["M"])(),Object(a["k"])(d,{key:0})):Object(a["l"])("",!0)],64)):(Object(a["M"])(),Object(a["k"])(b,{key:2,type:"content",description:"暂无内容"}))],512),[[a["hb"],e.isAdd]]),Object(a["lb"])(Object(a["n"])("div",ce,[(null===(l=e.users)||void 0===l?void 0:l.length)>0?(Object(a["M"])(),Object(a["k"])(u,{key:0,modelValue:e.selectedPerson,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.selectedPerson=t})},{default:Object(a["kb"])((function(){return[(Object(a["M"])(!0),Object(a["m"])(a["b"],null,Object(a["T"])(e.users,(function(t){return Object(a["M"])(),Object(a["k"])(r,{class:"user-item-wrap",key:"search"+(null===t||void 0===t?void 0:t.id),label:null===t||void 0===t?void 0:t.id,disabled:e.isDisabled(null===t||void 0===t?void 0:t.id)},{default:Object(a["kb"])((function(){return[Object(a["n"])("img",{src:null===t||void 0===t?void 0:t.avatar,alt:"",class:"user-avatar"},null,8,se),Object(a["n"])("span",oe,Object(a["Z"])(null===t||void 0===t?void 0:t.name),1)]})),_:2},1032,["label","disabled"])})),128))]})),_:1},8,["modelValue"])):(Object(a["M"])(),Object(a["k"])(b,{key:1,type:"content",description:"暂无内容"}))],512),[[a["hb"],!e.isAdd]])]})),_:1},8,["modelValue"])])):Object(a["l"])("",!0)}Object(a["N"])();n("4de4"),n("99af");var ue=n("02bc"),de=Object(a["r"])({props:{users:{type:Array,default:[]},chatId:{type:Number}},components:{Skeleton:D["a"],LoadingSpinner:N["a"],Empty:ue["default"]},setup:function(e){var t,n,i=Object(a["cb"])(e),l=i.users,c=i.chatId,s=Object(O["b"])(),o=Object(a["R"])(null===(t=s.state)||void 0===t||null===(n=t.user)||void 0===n?void 0:n.user),r=Object(a["R"])(!1),u=Object(a["R"])(""),d=Object(a["R"])(""),b=Object(a["R"])(""),g=Object(a["R"])([]),y=Object(a["i"])((function(){return"add"===b.value})),M=Object(a["i"])((function(){var e;return Array.isArray(l.value)&&(null===(e=l.value)||void 0===e?void 0:e.length)>2})),k=Object(a["i"])((function(){var e=[];return y.value&&Array.isArray(l.value)&&l.value.filter((function(t){return(null===t||void 0===t?void 0:t.id)&&e.push(null===t||void 0===t?void 0:t.id)})),e})),w=Object(p["jb"])({keywords:d},{fetchPolicy:"network-only"}),_=w.loading,V=w.searchUsers,x=w.refetch,S=w.disabled,R=w.loadMore,q=w.hasMorePages,C=function(e){var t=e.q,n=t||u.value||"";u.value=n,d.value=n,x()},P=Object(f["c"])(p["l"],(function(){return{variables:{uids:g.value.concat(k.value),type:"GROUP_TYPE"},refetchQueries:function(){var e;return[{query:p["f"],variables:{user_id:null===(e=o.value)||void 0===e?void 0:e.id}}]}}})),I=P.mutate,U=P.loading,L=Object(f["c"])(p["b"],(function(){return{variables:{chat_id:c.value,uids:g.value},refetchQueries:function(){var e;return[{query:p["f"],variables:{user_id:null===(e=o.value)||void 0===e?void 0:e.id}},{query:p["g"],variables:{chat_id:c.value}}]}}})),A=L.mutate,D=L.loading,N=Object(f["c"])(p["q"],(function(){return{variables:{chat_id:c.value,uids:g.value},refetchQueries:function(){var e;return[{query:p["f"],variables:{user_id:null===(e=o.value)||void 0===e?void 0:e.id}},{query:p["g"],variables:{chat_id:c.value}}]}}})),H=N.mutate,T=N.loading;function E(){return G.apply(this,arguments)}function G(){return G=Object(j["a"])(regeneratorRuntime.mark((function e(){var t,n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(h["b"])((function(){return y.value?M.value?A():I():H()}));case 2:t=e.sent,n=Object(v["a"])(t,2),a=n[0],i=n[1],a?m["a"].error("操作失败：".concat(Object(h["a"])(a))):i&&(r.value=!1,Object(m["a"])({message:"操作成功",type:"success"}));case 7:case"end":return e.stop()}}),e)}))),G.apply(this,arguments)}return{visible:r,content:u,onSearch:C,isAdd:y,loading:_,searchUsers:V,refetch:x,disabled:S,loadMore:R,hasMorePages:q,operation:b,disabledUids:k,selectedPerson:g,createLoading:U,addLoading:D,deleteLoading:T,onFinish:E}},methods:{isDisabled:function(e){return-1!==this.disabledUids.findIndex((function(t){return t===e}))}},mounted:function(){var e=this;this.$bus.on("SHOW_USERS_MODAL",(function(t){t&&(e.operation=t,e.visible=!0,e.selectedPerson=[],e.refetch())}))}});n("9f63");de.render=re,de.__scopeId="data-v-36b55556";var be=de,ve={props:{chat:Object},components:{SelectUsers:be},setup:function(e){var t,n,i=Object(a["cb"])(e),l=i.chat,c=Object(O["b"])(),s=Object(a["R"])(null===(t=c.state)||void 0===t||null===(n=t.user)||void 0===n?void 0:n.user),o=Object(a["i"])((function(){var e,t;return(null===(e=l.value)||void 0===e||null===(t=e.users)||void 0===t?void 0:t.length)>2})),r=Object(a["i"])((function(){var e,t,n,a;return(null===(e=s.value)||void 0===e?void 0:e.id)&&(null===(t=l.value)||void 0===t||null===(n=t.user)||void 0===n?void 0:n.id)===(null===(a=s.value)||void 0===a?void 0:a.id)})),u=Object(a["i"])((function(){var e,t,n;return o.value?(null===(e=l.value)||void 0===e?void 0:e.subject)||"匿名群聊":(null===(t=l.value)||void 0===t||null===(n=t.withUser)||void 0===n?void 0:n.name)||"聊天消息"})),d=Object(a["i"])((function(){if(r.value){var e,t=[];return null===(e=l.value)||void 0===e||e.users.map((function(e){(null===e||void 0===e?void 0:e.id)&&t.push(null===e||void 0===e?void 0:e.id)})),t}var n;return[null===(n=s.value)||void 0===n?void 0:n.id]})),b=Object(a["R"])(""),g=Object(a["R"])(!1),y=Object(f["c"])(p["O"],(function(){var e;return{variables:{chat_id:null===(e=l.value)||void 0===e?void 0:e.id,subject:b.value}}})),M=y.mutate,k=Object(f["c"])(p["q"],(function(){var e;return{variables:{chat_id:null===(e=l.value)||void 0===e?void 0:e.id,uids:d.value},refetchQueries:function(){var e,t;return[{query:p["f"],variables:{user_id:null===(e=s.value)||void 0===e?void 0:e.id}},{query:p["g"],variables:{chat_id:null===(t=l.value)||void 0===t?void 0:t.id}}]}}})),w=k.mutate,_=Object(f["c"])(p["o"],(function(){var e;return{variables:{chat_id:null===(e=l.value)||void 0===e?void 0:e.id},refetchQueries:function(){var e,t;return[{query:p["f"],variables:{user_id:null===(e=s.value)||void 0===e?void 0:e.id}},{query:p["g"],variables:{chat_id:null===(t=l.value)||void 0===t?void 0:t.id}}]}}})),V=_.mutate;function x(){return S.apply(this,arguments)}function S(){return S=Object(j["a"])(regeneratorRuntime.mark((function e(){var t,n,a,i,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null!==(t=b.value)&&void 0!==t&&t.length){e.next=3;break}return m["a"].error("请输入群聊名称"),e.abrupt("return");case 3:return e.next=5,Object(h["b"])((function(){return M()}));case 5:n=e.sent,a=Object(v["a"])(n,2),i=a[0],l=a[1],i?m["a"].error("修改失败：".concat(Object(h["a"])(i))):null!==l&&void 0!==l&&l.data.updateChat&&(g.value=!1,Object(m["a"])({message:"修改成功",type:"success"}));case 10:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}function R(){return q.apply(this,arguments)}function q(){return q=Object(j["a"])(regeneratorRuntime.mark((function e(){var t,n,a,i,c,s,o,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=r.value,null===(t=l.value)||void 0===t||!t.id||!d.value){e.next=11;break}return e.next=4,Object(h["b"])((function(){return n?V():w()}));case 4:c=e.sent,s=Object(v["a"])(c,2),o=s[0],u=s[1],o?m["a"].error("退群失败：".concat(Object(h["a"])(o)||(n?"解散群聊失败！":"退群失败！"))):null!==u&&void 0!==u&&null!==(a=u.data)&&void 0!==a&&a.removeParticipantsInGroupChat?Object(m["a"])({message:"你已退出该群！",type:"success"}):null!==u&&void 0!==u&&null!==(i=u.data)&&void 0!==i&&i.deleteChat&&Object(m["a"])({message:"已解散群聊！",type:"success"}),e.next=12;break;case 11:m["a"].error("群聊信息丢失!");case 12:case"end":return e.stop()}}),e)}))),q.apply(this,arguments)}return{chat:l,chatName:u,isGroupChat:o,isGroupOwner:r,groupName:b,editDialogVisible:g,updateChat:x,deleteGroupChat:R}},methods:{toggleVisible:function(){this.editDialogVisible=!this.editDialogVisible},showUsersModal:function(e){e&&this.$bus.emit("SHOW_USERS_MODAL",e)}}};n("dca6");ve.render=F,ve.__scopeId="data-v-4e53a512";var je=ve;Object(a["P"])("data-v-3f1099a6");var Oe={id:"message-list",class:"message-list"},ge={key:0,class:"el-icon-loading"},me={key:1},fe={key:0};function pe(e,t,n,i,l,c){var s,o=Object(a["V"])("MessageItem");return Object(a["M"])(),Object(a["m"])("div",Oe,[i.chatId?(Object(a["M"])(),Object(a["m"])(a["b"],{key:0},[Object(a["n"])("div",{class:"msg-center-tips",onClick:t[0]||(t[0]=function(){return i.loadLastPageMessages&&i.loadLastPageMessages.apply(i,arguments)})},[i.loading||i.loadingMore?(Object(a["M"])(),Object(a["m"])("i",ge)):(Object(a["M"])(),Object(a["m"])("div",me,Object(a["Z"])(i.hasMorePages?"加载更多消息":"没有更多消息了~"),1))]),null!==(s=i.messagesData)&&void 0!==s&&s.length?(Object(a["M"])(),Object(a["m"])("div",fe,[(Object(a["M"])(!0),Object(a["m"])(a["b"],null,Object(a["T"])(i.messagesData,(function(t,n){return Object(a["M"])(),Object(a["m"])("div",{key:null===t||void 0===t?void 0:t.id},[Object(a["q"])(o,Object(a["y"])({message:t,index:n,"messages-data":i.messagesData},e.$attrs),null,16,["message","index","messages-data"])])})),128))])):Object(a["l"])("",!0)],64)):Object(a["l"])("",!0)])}Object(a["N"])(),Object(a["P"])("data-v-c8530324");var he={key:0,class:"msg-date msg-date"},ye=["src"],Me={class:"message-wrap"},ke={class:"msg-user-name"},we={class:"flex-row-align-center msg-content"},_e={key:0,class:Object(a["A"])(["send-status","right"])},Ve={key:0,class:"el-icon-loading"},xe={key:1,class:"el-icon-warning send-error-icon"},Se={key:1,class:"message-box msg-text-box"},Re=["innerHTML"],qe={key:2,class:"message-box msg-image-box"},Ce={alt:"图片",class:"msg-img"},Pe={key:3,class:Object(a["A"])(["send-status","left"])},Ie={key:0,class:"el-icon-loading"},Ue={key:1,class:"el-icon-warning send-error-icon"},Le=["src"];function Ae(e,t,n,i,l,c){var s,o,r,u,d,b,v,j,O,g,m,f,p,h,y,M,k,w,_,V,x,S=Object(a["W"])("lazyload");return Object(a["M"])(),Object(a["m"])("div",null,[i.date?(Object(a["M"])(),Object(a["m"])("div",he,Object(a["Z"])(i.date),1)):Object(a["l"])("",!0),Object(a["n"])("div",{class:Object(a["A"])(["message-item",i.isSelf(null===(s=i.message)||void 0===s||null===(o=s.user)||void 0===o?void 0:o.id)&&"message-item-right"])},[i.isSelf(null===(r=i.message)||void 0===r||null===(u=r.user)||void 0===u?void 0:u.id)?Object(a["l"])("",!0):(Object(a["M"])(),Object(a["m"])("img",{key:0,src:null===(d=i.message)||void 0===d||null===(b=d.user)||void 0===b?void 0:b.avatar,alt:"avatar",class:"msg-user-avatar"},null,8,ye)),Object(a["n"])("div",Me,[Object(a["n"])("div",ke,Object(a["Z"])(null===(v=i.message)||void 0===v||null===(j=v.user)||void 0===j?void 0:j.name),1),Object(a["n"])("div",we,[i.isSelf(null===(O=i.message)||void 0===O||null===(g=O.user)||void 0===g?void 0:g.id)?(Object(a["M"])(),Object(a["m"])("div",_e,[i.messageStatus.loading?(Object(a["M"])(),Object(a["m"])("i",Ve)):i.messageStatus.error?(Object(a["M"])(),Object(a["m"])("i",xe)):Object(a["l"])("",!0)])):Object(a["l"])("",!0),"text"===(null===(m=i.message)||void 0===m?void 0:m.type)?(Object(a["M"])(),Object(a["m"])("div",Se,[Object(a["n"])("span",{innerHTML:l.parsingEmoji(null===(f=i.message)||void 0===f?void 0:f.message)},null,8,Re)])):"image"===(null===(p=i.message)||void 0===p?void 0:p.type)?(Object(a["M"])(),Object(a["m"])("div",qe,[Object(a["lb"])(Object(a["n"])("img",Ce,null,512),[[S,null===(h=i.message)||void 0===h||null===(y=h.body)||void 0===y?void 0:y.url]])])):Object(a["l"])("",!0),i.isSelf(null===(M=i.message)||void 0===M||null===(k=M.user)||void 0===k?void 0:k.id)?Object(a["l"])("",!0):(Object(a["M"])(),Object(a["m"])("div",Pe,[i.messageStatus.loading?(Object(a["M"])(),Object(a["m"])("i",Ie)):i.messageStatus.error?(Object(a["M"])(),Object(a["m"])("i",Ue)):Object(a["l"])("",!0)]))])]),i.isSelf(null===(w=i.message)||void 0===w||null===(_=w.user)||void 0===_?void 0:_.id)?(Object(a["M"])(),Object(a["m"])("img",{key:1,src:null===(V=i.message)||void 0===V||null===(x=V.user)||void 0===x?void 0:x.avatar,alt:"avatar",class:"msg-user-avatar"},null,8,Le)):Object(a["l"])("",!0)],2)])}Object(a["N"])();var De=n("5530"),Ne=n("0d27"),He={props:{message:Object,index:Number,messagesData:{type:Array,default:[]}},setup:function(e,t){var n,i,l=Object(a["cb"])(e),c=l.message,s=l.index,o=l.messagesData,r=Object(O["b"])(),u=Object(a["R"])(null===(n=r.state)||void 0===n||null===(i=n.user)||void 0===i?void 0:i.user),d=function(e){var t;return!!e&&e===(null===(t=u.value)||void 0===t?void 0:t.id)},b=Object(a["i"])((function(){var e,t,n;return Ne["a"].messageDateStr(null===(e=c.value)||void 0===e?void 0:e.created_at,(null===(t=o.value)||void 0===t||null===(n=t[s.value-1])||void 0===n?void 0:n.created_at)||"")})),g=Object(f["c"])(p["H"],(function(){var e;return{variables:Object(De["a"])({},null===(e=c.value)||void 0===e?void 0:e.payload),refetchQueries:function(){var e;return[{query:p["f"],variables:{user_id:null===(e=u.value)||void 0===e?void 0:e.id}}]}}})),y=g.mutate,M=Object(a["R"])({loading:!1,error:""});function k(){return w.apply(this,arguments)}function w(){return w=Object(j["a"])(regeneratorRuntime.mark((function e(){var n,a,i,l,s,o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null===(n=c.value)||void 0===n||!n.payload){e.next=9;break}return M.value.loading=!0,e.next=4,Object(h["b"])((function(){return y()}));case 4:i=e.sent,l=Object(v["a"])(i,2),s=l[0],o=l[1],s?(M.value={loading:!1,error:s},m["a"].error("Error：".concat(Object(h["a"])(s)))):null!==o&&void 0!==o&&null!==(a=o.data)&&void 0!==a&&a.sendMessage&&(M.value={loading:!1,error:""},t.emit("sendSuccess"),console.log("发送成功",null===o||void 0===o||null===(r=o.data)||void 0===r?void 0:r.sendMessage));case 9:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}return Object(a["I"])((function(){k()})),{message:c,index:s,messageStatus:M,messagesData:o,date:b,isSelf:d}},data:function(){return{parsingEmoji:A["b"]}}};n("e8c8");He.render=Ae,He.__scopeId="data-v-c8530324";var Te=He,Ee={name:"MessagesView",props:{chatId:Number},components:{MessageItem:Te},setup:function(e){var t=Object(a["cb"])(e),n=t.chatId,i=Object(p["V"])({chat_id:n},{enabled:!!n.value}),l=i.messages,c=(i.refetch,i.loading),s=i.currentPage,o=i.hasMorePages,r=i.disabled,u=i.loadMore,d=i.loadingMore,b=Object(a["R"])(l.value);function v(){r.value||u()}var j=Object(a["R"])(0);function O(e){var t=document.getElementById("message-list");setTimeout((function(){"bottom"===e?t.scrollHeight>t.clientHeight&&(t.scrollTop=t.scrollHeight):t.scrollHeight>t.clientHeight&&j.value>0&&(t.scrollTop=Number(t.scrollHeight-j.value)),j.value=t.scrollHeight}),0)}function g(e){"[object Object]"===Object.prototype.toString.call(e)&&(b.value=b.value.concat(e)),O("bottom")}return Object(a["ib"])(l,(function(){b.value=l.value,1==s.value?O("bottom"):O(),console.log("messagesData",b.value)})),{chatId:n,messagesData:b,loading:c,loadingMore:d,hasMorePages:o,loadLastPageMessages:v,appendMessageObj:g}}};n("506a");Ee.render=pe,Ee.__scopeId="data-v-3f1099a6";var Ge=Ee;Object(a["P"])("data-v-76687f00");var Be={class:"send-section"},Ze={class:"operation-row"},Qe=Object(a["n"])("label",{class:"image-upload-btn"},null,-1),We=Object(a["n"])("label",{class:"emotion-btn-box"},null,-1),ze={class:"emoji-list-wrap"},Fe=["onClick"],$e=["innerHTML"],Je={class:"send-input"},Ke={class:"flex-end-send-btn"},Ye={class:"indicator"},Xe=["disabled"],et=Object(a["n"])("span",{class:"btn-title"},"发送",-1),tt=[et];function nt(e,t,n,i,l,c){var s,o=Object(a["V"])("el-upload"),r=Object(a["V"])("el-popover"),u=Object(a["V"])("el-input");return Object(a["M"])(),Object(a["m"])("div",Be,[Object(a["n"])("div",Ze,[Object(a["q"])(o,{class:"uploader",action:"#",type:"file",accept:"image/png, image/jpeg, image/jpg, image/gif","before-upload":c.onBeforeUpload},{default:Object(a["kb"])((function(){return[Qe]})),_:1},8,["before-upload"]),Object(a["q"])(r,{"popper-class":"emoji-popover",placement:"top",width:360,trigger:"hover"},{reference:Object(a["kb"])((function(){return[We]})),default:Object(a["kb"])((function(){return[Object(a["n"])("div",ze,[(Object(a["M"])(!0),Object(a["m"])(a["b"],null,Object(a["T"])(l.emojiList,(function(e){return Object(a["M"])(),Object(a["m"])("span",{key:null===e||void 0===e?void 0:e.url,onClick:function(t){return i.insetEmoji(null===e||void 0===e?void 0:e.title)}},[Object(a["n"])("span",{innerHTML:l.parsingEmoji("[".concat(null===e||void 0===e?void 0:e.title,"]"))},null,8,$e)],8,Fe)})),128))])]})),_:1})]),Object(a["n"])("div",Je,[Object(a["q"])(u,{type:"textarea",id:"textarea",modelValue:i.content,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.content=e}),clearable:"",maxlength:"300"},null,8,["modelValue"])]),Object(a["n"])("div",Ke,[Object(a["n"])("div",Ye,Object(a["Z"])((null===(s=i.content)||void 0===s?void 0:s.length)||0)+"/300",1),Object(a["n"])("button",{class:Object(a["A"])(["send-button",i.content&&"active"]),disabled:!i.content,onClick:t[1]||(t[1]=function(e){return i.sendPayloadMessage("text")})},tt,10,Xe)])])}Object(a["N"])();var at={__typename:"Message",body:{__typename:"MessageBody",text:"",url:null},created_at:"",id:1,message:"",messageable:null,messageable_id:null,messageable_type:null,time_ago:"1秒前",type:"text",user:{}},it={name:"SendSection",props:{chatId:Number},setup:function(e,t){var n,i,l=Object(a["cb"])(e),c=l.chatId,s=Object(O["b"])(),o=Object(a["R"])(null===(n=s.state)||void 0===n||null===(i=n.user)||void 0===i?void 0:i.user),r=Object(a["R"])(""),u=Object(a["R"])(""),d=Object(a["R"])(null);function b(e){var n,a,i=Object(De["a"])(Object(De["a"])({},at),{},{id:(new Date).getTime(),user:Object(De["a"])({},o.value),created_at:new Date,payload:null});e?(i.type="text",i.message=r.value,i.body.text=r.value,i.payload={user_id:null===(n=o.value)||void 0===n?void 0:n.id,chat_id:c.value,message:r.value,url:""}):(i.type="image",i.message="",i.body.url=u.value,i.payload={user_id:null===(a=o.value)||void 0===a?void 0:a.id,chat_id:c.value,url:u.value,message:""});t.emit("appendMessage",i)}function v(e){var t="image"!==e;console.log("messageType",t,e,r.value,u.value),t&&!r.value||!t&&!u.value?m["a"].error("消息内容不能为空或者您还未选中图片！"):b(t)}function g(){r.value="",u.value=""}function f(e){return p.apply(this,arguments)}function p(){return p=Object(j["a"])(regeneratorRuntime.mark((function e(t){var n,i,l,c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n="["+(t||"")+"]",i=document.querySelector("#textarea"),!i.selectionStart&&0!==i.selectionStart){e.next=14;break}return l=i.selectionStart,c=i.selectionEnd,s=i.value,console.log("startPos,endPos",l,c),r.value=s.substring(0,l)+n+s.substring(c,s.length),e.next=10,Object(a["z"])();case 10:i.focus(),i.setSelectionRange(c+n.length,c+n.length),e.next=15;break;case 14:r.value=n;case 15:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}return{content:r,imageUrl:u,sendPayloadMessage:v,messagesViewRef:d,sendSuccess:g,insetEmoji:f}},methods:{onBeforeUpload:function(e){var t=this;if(e){var n=new FileReader;n.readAsDataURL(e),n.onload=function(e){t.imageUrl=e.target.result,console.log("this.imageUrl",t.imageUrl)}}}},data:function(){return{emojiList:A["a"],parsingEmoji:A["b"]}}};n("6973"),n("5374");it.render=nt,it.__scopeId="data-v-76687f00";var lt=it,ct={components:{ChatsList:T,MessagesHeader:je,MessagesView:Ge,SendSection:lt},setup:function(){var e,t,n,i,l,c=Object(g["c"])(),s=Object(g["d"])(),o=Object(O["b"])(),r=Object(a["R"])(null===(e=o.state)||void 0===e||null===(t=e.user)||void 0===t?void 0:t.user),u=Object(a["R"])(Number(null===c||void 0===c||null===(n=c.query)||void 0===n?void 0:n.chat_id)),d=Object(a["R"])(Number(null===c||void 0===c||null===(i=c.query)||void 0===i?void 0:i.user_id)),b=Object(a["R"])([null===(l=r.value)||void 0===l?void 0:l.id,d.value]),y=Object(a["R"])({id:u.value});function M(e){null!==e&&void 0!==e&&e.id&&(u.value=null===e||void 0===e?void 0:e.id,y.value=e)}var k=Object(f["d"])(p["g"],{chat_id:u.value},{enabled:!!u.value}),w=k.result;Object(a["ib"])(w,(function(){var e,t=null===(e=w.value)||void 0===e?void 0:e.chat;M(t)}));var _=Object(f["c"])(p["l"],(function(){return{variables:{uids:b.value},refetchQueries:function(){var e;return[{query:p["f"],variables:{user_id:null===(e=r.value)||void 0===e?void 0:e.id}}]}}})),V=_.mutate,x=_.loading,S=Object(a["R"])(null),R=Object(a["R"])(null);function q(e){var t,n=null===(t=S.value)||void 0===t?void 0:t.appendMessageObj;e&&"[object Function]"===Object.prototype.toString.call(n)&&n(e)}function C(){var e,t=null===(e=R.value)||void 0===e?void 0:e.sendSuccess;"[object Function]"===Object.prototype.toString.call(t)&&t()}return Object(a["I"])(Object(j["a"])(regeneratorRuntime.mark((function e(){var t,n,a,i,l,c,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=!u.value&&(null===(t=r.value)||void 0===t?void 0:t.id)&&d.value,i=Array.isArray(b.value)&&(null===(n=b.value)||void 0===n?void 0:n.length)>1,!a||!i){e.next=11;break}return console.log("创建聊天"),e.next=6,Object(h["b"])((function(){return V()}));case 6:l=e.sent,c=Object(v["a"])(l,2),s=c[0],o=c[1],s?m["a"].error("创建聊天失败：".concat(Object(h["a"])(s))):null!==o&&void 0!==o&&o.data.createChat&&M(null===o||void 0===o?void 0:o.data.createChat);case 11:case"end":return e.stop()}}),e)})))),Object(a["ib"])(u,(function(){s.replace({query:{chat_id:Number(u.value)}})})),{chat:y,chatId:u,createLoading:x,showMessageView:M,messagesViewRef:S,sendSectionRef:R,appendIncomingMessage:q,sendSuccess:C}},computed:{isMobile:function(){var e=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return console.log("mobile",!!e),!!e}}};n("9d44");ct.render=b,ct.__scopeId="data-v-59efcbbc";t["default"]=ct},"171b":function(e,t,n){},"506a":function(e,t,n){"use strict";n("171b")},5374:function(e,t,n){"use strict";n("9259")},6973:function(e,t,n){"use strict";n("a01f")},"6d1b":function(e,t,n){},9259:function(e,t,n){},"97e1":function(e,t,n){},"9d44":function(e,t,n){"use strict";n("97e1")},"9f63":function(e,t,n){"use strict";n("6d1b")},a01f:function(e,t,n){},b62c:function(e,t,n){},d1e2:function(e,t,n){"use strict";n("e936")},dca6:function(e,t,n){"use strict";n("e5d3")},e5d3:function(e,t,n){},e8c8:function(e,t,n){"use strict";n("b62c")},e936:function(e,t,n){}}]);
//# sourceMappingURL=chunk-59152ee2.f3508117.js.map