// Compiled by ClojureScript 1.7.122 {}
goog.provide('weasel.impls.websocket');
goog.require('cljs.core');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('goog.net.WebSocket');

/**
 * @interface
 */
weasel.impls.websocket.IWebSocket = function(){};

weasel.impls.websocket.open_QMARK_ = (function weasel$impls$websocket$open_QMARK_(this$){
if((!((this$ == null))) && (!((this$.weasel$impls$websocket$IWebSocket$open_QMARK_$arity$1 == null)))){
return this$.weasel$impls$websocket$IWebSocket$open_QMARK_$arity$1(this$);
} else {
var x__5561__auto__ = (((this$ == null))?null:this$);
var m__5562__auto__ = (weasel.impls.websocket.open_QMARK_[goog.typeOf(x__5561__auto__)]);
if(!((m__5562__auto__ == null))){
return m__5562__auto__.call(null,this$);
} else {
var m__5562__auto____$1 = (weasel.impls.websocket.open_QMARK_["_"]);
if(!((m__5562__auto____$1 == null))){
return m__5562__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWebSocket.open?",this$);
}
}
}
});

weasel.impls.websocket.websocket_connection = (function weasel$impls$websocket$websocket_connection(var_args){
var args8132 = [];
var len__5964__auto___8135 = arguments.length;
var i__5965__auto___8136 = (0);
while(true){
if((i__5965__auto___8136 < len__5964__auto___8135)){
args8132.push((arguments[i__5965__auto___8136]));

var G__8137 = (i__5965__auto___8136 + (1));
i__5965__auto___8136 = G__8137;
continue;
} else {
}
break;
}

var G__8134 = args8132.length;
switch (G__8134) {
case 0:
return weasel.impls.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return weasel.impls.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return weasel.impls.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8132.length)].join('')));

}
});

weasel.impls.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$0 = (function (){
return weasel.impls.websocket.websocket_connection.call(null,null,null);
});

weasel.impls.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$1 = (function (auto_reconnect_QMARK_){
return weasel.impls.websocket.websocket_connection.call(null,auto_reconnect_QMARK_,null);
});

weasel.impls.websocket.websocket_connection.cljs$core$IFn$_invoke$arity$2 = (function (auto_reconnect_QMARK_,next_reconnect_fn){
return (new goog.net.WebSocket(auto_reconnect_QMARK_,next_reconnect_fn));
});

weasel.impls.websocket.websocket_connection.cljs$lang$maxFixedArity = 2;
goog.net.WebSocket.prototype.weasel$impls$websocket$IWebSocket$ = true;

goog.net.WebSocket.prototype.weasel$impls$websocket$IWebSocket$open_QMARK_$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.isOpen(cljs.core.List.EMPTY);
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$ = true;

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$connect$arity$2 = (function (this$,url){
var this$__$1 = this;
return clojure.browser.net.connect.call(null,this$__$1,url,null);
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$connect$arity$3 = (function (this$,url,protocol){
var this$__$1 = this;
return this$__$1.open(url,protocol);
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$transmit$arity$2 = (function (this$,message){
var this$__$1 = this;
return this$__$1.send(message);
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$close$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.close(cljs.core.List.EMPTY);
});

goog.net.WebSocket.prototype.clojure$browser$event$IEventType$ = true;

goog.net.WebSocket.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (this$__$1){
return (function (p__8139){
var vec__8140 = p__8139;
var k = cljs.core.nth.call(null,vec__8140,(0),null);
var v = cljs.core.nth.call(null,vec__8140,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.WebSocket.EventType))));
});

//# sourceMappingURL=websocket.js.map