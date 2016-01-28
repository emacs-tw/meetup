// Compiled by ClojureScript 1.7.122 {}
goog.provide('hipo.hiccup');
goog.require('cljs.core');
goog.require('clojure.string');
hipo.hiccup.id_separator = "#";
hipo.hiccup.class_separator = ".";
hipo.hiccup.default_namespaces = new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null);
hipo.hiccup.key__GT_namespace = (function hipo$hiccup$key__GT_namespace(s,m){
if(cljs.core.truth_(s)){
var or__4906__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(m),s);
if(cljs.core.truth_(or__4906__auto__)){
return or__4906__auto__;
} else {
return cljs.core.get.call(null,hipo.hiccup.default_namespaces,s);
}
} else {
return null;
}
});
hipo.hiccup.parse_tag_name = (function hipo$hiccup$parse_tag_name(s){
var i = s.indexOf(hipo.hiccup.id_separator);
if((i > (0))){
return cljs.core.subs.call(null,s,(0),i);
} else {
var j = s.indexOf(hipo.hiccup.class_separator);
if((j > (0))){
return cljs.core.subs.call(null,s,(0),j);
} else {
return s;
}
}
});
hipo.hiccup.parse_id = (function hipo$hiccup$parse_id(s){
var i = s.indexOf(hipo.hiccup.id_separator);
if((i > (0))){
var j = s.indexOf(hipo.hiccup.class_separator);
if((j > (0))){
return cljs.core.subs.call(null,s,(i + (1)),j);
} else {
return cljs.core.subs.call(null,s,(i + (1)));
}
} else {
return null;
}
});
hipo.hiccup.parse_classes = (function hipo$hiccup$parse_classes(s){
var i = s.indexOf(hipo.hiccup.class_separator);
if((i > (0))){
var cs = cljs.core.subs.call(null,s,(i + (1)));
var s__$1 = cs;
while(true){
var i__$1 = s__$1.indexOf(hipo.hiccup.class_separator);
if((i__$1 > (0))){
var G__7698 = s__$1.replace(hipo.hiccup.class_separator," ");
s__$1 = G__7698;
continue;
} else {
return s__$1;
}
break;
}
} else {
return null;
}
});
hipo.hiccup.literal_QMARK_ = (function hipo$hiccup$literal_QMARK_(o){
return (typeof o === 'string') || (typeof o === 'number') || (o === true) || (o === false);
});
hipo.hiccup.node = (function hipo$hiccup$node(v){
return cljs.core.nth.call(null,v,(0));
});
hipo.hiccup.keyns = (function hipo$hiccup$keyns(h){
return cljs.core.namespace.call(null,hipo.hiccup.node.call(null,h));
});
hipo.hiccup.tag = (function hipo$hiccup$tag(v){
return hipo.hiccup.parse_tag_name.call(null,cljs.core.name.call(null,hipo.hiccup.node.call(null,v)));
});
hipo.hiccup.attributes = (function hipo$hiccup$attributes(v){
if(cljs.core.truth_(v)){
var n = cljs.core.name.call(null,hipo.hiccup.node.call(null,v));
var id = hipo.hiccup.parse_id.call(null,n);
var cs = hipo.hiccup.parse_classes.call(null,n);
var m_QMARK_ = cljs.core.nth.call(null,v,(1),null);
if(cljs.core.map_QMARK_.call(null,m_QMARK_)){
if(cljs.core.truth_((function (){var and__4894__auto__ = id;
if(cljs.core.truth_(and__4894__auto__)){
return cljs.core.contains_QMARK_.call(null,m_QMARK_,new cljs.core.Keyword(null,"id","id",-1388402092));
} else {
return and__4894__auto__;
}
})())){
throw cljs.core.ex_info.call(null,"Cannot define id multiple times",cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core.truth_((function (){var or__4906__auto__ = id;
if(cljs.core.truth_(or__4906__auto__)){
return or__4906__auto__;
} else {
return cs;
}
})())){
return cljs.core.merge.call(null,m_QMARK_,(cljs.core.truth_(id)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null):null),(cljs.core.truth_(cs)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(m_QMARK_);
if(cljs.core.truth_(temp__4423__auto__)){
var c = temp__4423__auto__;
if(cljs.core.truth_(cs)){
return [cljs.core.str(cs),cljs.core.str(" "),cljs.core.str(c)].join('');
} else {
return [cljs.core.str(c)].join('');
}
} else {
return cs;
}
})()], null):null));
} else {
return m_QMARK_;
}
}
} else {
if(cljs.core.truth_((function (){var or__4906__auto__ = id;
if(cljs.core.truth_(or__4906__auto__)){
return or__4906__auto__;
} else {
return cs;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),cs], null);
} else {
return null;
}
}
} else {
return null;
}
});
hipo.hiccup.children = (function hipo$hiccup$children(v){
var i = ((cljs.core.map_QMARK_.call(null,cljs.core.nth.call(null,v,(1),null)))?(2):(1));
if((cljs.core.count.call(null,v) > i)){
return cljs.core.subvec.call(null,v,i);
} else {
return null;
}
});
hipo.hiccup.flattened_QMARK_ = (function hipo$hiccup$flattened_QMARK_(v){
if(((v == null)) || (cljs.core.vector_QMARK_.call(null,v))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"v","v",1661996586,null)),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v","v",1661996586,null)))))].join('')));
}

if(cljs.core.empty_QMARK_.call(null,v)){
return true;
} else {
var c = (cljs.core.count.call(null,v) - (1));
var i = (0);
while(true){
var o = cljs.core.nth.call(null,v,i);
if(cljs.core.truth_((function (){var or__4906__auto__ = hipo.hiccup.literal_QMARK_.call(null,o);
if(cljs.core.truth_(or__4906__auto__)){
return or__4906__auto__;
} else {
return cljs.core.vector_QMARK_.call(null,o);
}
})())){
if(cljs.core._EQ_.call(null,c,i)){
return true;
} else {
var G__7699 = (i + (1));
i = G__7699;
continue;
}
} else {
return false;
}
break;
}
}
});

/**
* @constructor
*/
hipo.hiccup.Sentinel = (function (){
})

hipo.hiccup.Sentinel.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

hipo.hiccup.Sentinel.cljs$lang$type = true;

hipo.hiccup.Sentinel.cljs$lang$ctorStr = "hipo.hiccup/Sentinel";

hipo.hiccup.Sentinel.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__,opt__5506__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"hipo.hiccup/Sentinel");
});

hipo.hiccup.__GT_Sentinel = (function hipo$hiccup$__GT_Sentinel(){
return (new hipo.hiccup.Sentinel());
});

hipo.hiccup.sentinel = (new hipo.hiccup.Sentinel());
hipo.hiccup.conjs_BANG_ = (function hipo$hiccup$conjs_BANG_(v,s){
while(true){
if(cljs.core.seq.call(null,s)){
var G__7700 = (function (){var f = cljs.core.first.call(null,s);
if(cljs.core.truth_((function (){var or__4906__auto__ = hipo.hiccup.literal_QMARK_.call(null,f);
if(cljs.core.truth_(or__4906__auto__)){
return or__4906__auto__;
} else {
return cljs.core.vector_QMARK_.call(null,f);
}
})())){
return cljs.core.conj_BANG_.call(null,v,f);
} else {
return hipo$hiccup$conjs_BANG_.call(null,v,f);
}
})();
var G__7701 = cljs.core.rest.call(null,s);
v = G__7700;
s = G__7701;
continue;
} else {
return v;
}
break;
}
});
hipo.hiccup.flatten_children = (function hipo$hiccup$flatten_children(v){
if(((v == null)) || (cljs.core.vector_QMARK_.call(null,v))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"v","v",1661996586,null)),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v","v",1661996586,null)))))].join('')));
}

var _PERCENT_ = (cljs.core.truth_(hipo.hiccup.flattened_QMARK_.call(null,v))?v:(function (){var acc = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var v__$1 = v;
while(true){
var f = cljs.core.nth.call(null,v__$1,(0),hipo.hiccup.sentinel);
if((hipo.hiccup.sentinel === f)){
return cljs.core.persistent_BANG_.call(null,acc);
} else {
var G__7702 = ((cljs.core.seq_QMARK_.call(null,f))?hipo.hiccup.conjs_BANG_.call(null,acc,f):((!((f == null)))?cljs.core.conj_BANG_.call(null,acc,f):acc
));
var G__7703 = cljs.core.subvec.call(null,v__$1,(1));
acc = G__7702;
v__$1 = G__7703;
continue;
}
break;
}
})());
if(((v == null)) || (cljs.core.vector_QMARK_.call(null,v))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"v","v",1661996586,null)),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v","v",1661996586,null)))))].join('')));
}

return _PERCENT_;
});
hipo.hiccup.listener_name_QMARK_ = (function hipo$hiccup$listener_name_QMARK_(s){
return ((0) === s.indexOf("on-"));
});
hipo.hiccup.listener_name__GT_event_name = (function hipo$hiccup$listener_name__GT_event_name(s){
if(cljs.core.truth_(hipo.hiccup.listener_name_QMARK_.call(null,s))){
return cljs.core.subs.call(null,s,(3));
} else {
return null;
}
});
hipo.hiccup.classes = (function hipo$hiccup$classes(s){
var s__$1 = cljs.core.keep.call(null,cljs.core.identity,s);
if(!(cljs.core.empty_QMARK_.call(null,s__$1))){
return clojure.string.trim.call(null,clojure.string.join.call(null," ",s__$1));
} else {
return null;
}
});

//# sourceMappingURL=hiccup.js.map