// Compiled by ClojureScript 1.7.122 {}
goog.provide('hipo.interpreter');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('hipo.attribute');
goog.require('hipo.dom');
goog.require('hipo.hiccup');
goog.require('hipo.interceptor');
hipo.interpreter.set_attribute_BANG_ = (function hipo$interpreter$set_attribute_BANG_(el,ns,tag,sok,ov,nv,p__7357){
var map__7360 = p__7357;
var map__7360__$1 = ((((!((map__7360 == null)))?((((map__7360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7360):map__7360);
var m = map__7360__$1;
var interceptors = cljs.core.get.call(null,map__7360__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(!((ov === nv))){
var temp__4423__auto__ = hipo.hiccup.listener_name__GT_event_name.call(null,cljs.core.name.call(null,sok));
if(cljs.core.truth_(temp__4423__auto__)){
var en = temp__4423__auto__;
if(!((cljs.core.map_QMARK_.call(null,ov)) && (cljs.core.map_QMARK_.call(null,nv)) && ((new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ov) === new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nv))))){
var b__6195__auto__ = ((function (en,temp__4423__auto__,map__7360,map__7360__$1,m,interceptors){
return (function (){
var hn = [cljs.core.str("hipo_listener_"),cljs.core.str(en)].join('');
var temp__4423__auto___7362__$1 = (el[hn]);
if(cljs.core.truth_(temp__4423__auto___7362__$1)){
var l_7363 = temp__4423__auto___7362__$1;
el.removeEventListener(en,l_7363);
} else {
}

var temp__4425__auto__ = (function (){var or__4906__auto__ = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(nv);
if(cljs.core.truth_(or__4906__auto__)){
return or__4906__auto__;
} else {
return nv;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var nv__$1 = temp__4425__auto__;
el.addEventListener(en,nv__$1);

return (el[hn] = nv__$1);
} else {
return null;
}
});})(en,temp__4423__auto__,map__7360,map__7360__$1,m,interceptors))
;
var v__6196__auto__ = interceptors;
if((cljs.core.not.call(null,v__6196__auto__)) || (cljs.core.empty_QMARK_.call(null,v__6196__auto__))){
return b__6195__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__6195__auto__,v__6196__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-handler","update-handler",1389859106):new cljs.core.Keyword(null,"remove-handler","remove-handler",389960218)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
}
} else {
return null;
}
} else {
var b__6195__auto__ = ((function (temp__4423__auto__,map__7360,map__7360__$1,m,interceptors){
return (function (){
return hipo.attribute.set_value_BANG_.call(null,el,m,ns,tag,sok,ov,nv);
});})(temp__4423__auto__,map__7360,map__7360__$1,m,interceptors))
;
var v__6196__auto__ = interceptors;
if((cljs.core.not.call(null,v__6196__auto__)) || (cljs.core.empty_QMARK_.call(null,v__6196__auto__))){
return b__6195__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__6195__auto__,v__6196__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530):new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
}
}
} else {
return null;
}
});
hipo.interpreter.create_child;
hipo.interpreter.append_children_BANG_ = (function hipo$interpreter$append_children_BANG_(el,v,m){
if(cljs.core.vector_QMARK_.call(null,v)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v","v",1661996586,null))))].join('')));
}

var v__$1 = hipo.hiccup.flatten_children.call(null,v);
while(true){
if(cljs.core.empty_QMARK_.call(null,v__$1)){
return null;
} else {
var temp__4423__auto___7364 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__4423__auto___7364)){
var h_7365 = temp__4423__auto___7364;
el.appendChild(hipo.interpreter.create_child.call(null,h_7365,m));
} else {
}

var G__7366 = cljs.core.rest.call(null,v__$1);
v__$1 = G__7366;
continue;
}
break;
}
});
hipo.interpreter.default_create_element = (function hipo$interpreter$default_create_element(ns,tag,attrs,m){
var el = hipo.dom.create_element.call(null,ns,tag);
var seq__7373_7379 = cljs.core.seq.call(null,attrs);
var chunk__7374_7380 = null;
var count__7375_7381 = (0);
var i__7376_7382 = (0);
while(true){
if((i__7376_7382 < count__7375_7381)){
var vec__7377_7383 = cljs.core._nth.call(null,chunk__7374_7380,i__7376_7382);
var sok_7384 = cljs.core.nth.call(null,vec__7377_7383,(0),null);
var v_7385 = cljs.core.nth.call(null,vec__7377_7383,(1),null);
if(cljs.core.truth_(v_7385)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_7384,null,v_7385,m);
} else {
}

var G__7386 = seq__7373_7379;
var G__7387 = chunk__7374_7380;
var G__7388 = count__7375_7381;
var G__7389 = (i__7376_7382 + (1));
seq__7373_7379 = G__7386;
chunk__7374_7380 = G__7387;
count__7375_7381 = G__7388;
i__7376_7382 = G__7389;
continue;
} else {
var temp__4425__auto___7390 = cljs.core.seq.call(null,seq__7373_7379);
if(temp__4425__auto___7390){
var seq__7373_7391__$1 = temp__4425__auto___7390;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7373_7391__$1)){
var c__5709__auto___7392 = cljs.core.chunk_first.call(null,seq__7373_7391__$1);
var G__7393 = cljs.core.chunk_rest.call(null,seq__7373_7391__$1);
var G__7394 = c__5709__auto___7392;
var G__7395 = cljs.core.count.call(null,c__5709__auto___7392);
var G__7396 = (0);
seq__7373_7379 = G__7393;
chunk__7374_7380 = G__7394;
count__7375_7381 = G__7395;
i__7376_7382 = G__7396;
continue;
} else {
var vec__7378_7397 = cljs.core.first.call(null,seq__7373_7391__$1);
var sok_7398 = cljs.core.nth.call(null,vec__7378_7397,(0),null);
var v_7399 = cljs.core.nth.call(null,vec__7378_7397,(1),null);
if(cljs.core.truth_(v_7399)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_7398,null,v_7399,m);
} else {
}

var G__7400 = cljs.core.next.call(null,seq__7373_7391__$1);
var G__7401 = null;
var G__7402 = (0);
var G__7403 = (0);
seq__7373_7379 = G__7400;
chunk__7374_7380 = G__7401;
count__7375_7381 = G__7402;
i__7376_7382 = G__7403;
continue;
}
} else {
}
}
break;
}

return el;
});
hipo.interpreter.create_element = (function hipo$interpreter$create_element(ns,tag,attrs,m){
var temp__4423__auto__ = new cljs.core.Keyword(null,"create-element-fn","create-element-fn",827380427).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,ns,tag,attrs,m);
} else {
return hipo.interpreter.default_create_element.call(null,ns,tag,attrs,m);
}
});
hipo.interpreter.create_vector = (function hipo$interpreter$create_vector(h,m){
if(cljs.core.vector_QMARK_.call(null,h)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"h","h",-1544777029,null))))].join('')));
}

var key = hipo.hiccup.keyns.call(null,h);
var tag = hipo.hiccup.tag.call(null,h);
var attrs = hipo.hiccup.attributes.call(null,h);
var children = hipo.hiccup.children.call(null,h);
var el = hipo.interpreter.create_element.call(null,hipo.hiccup.key__GT_namespace.call(null,key,m),tag,attrs,m);
if(cljs.core.truth_(children)){
hipo.interpreter.append_children_BANG_.call(null,el,children,m);
} else {
}

return el;
});
hipo.interpreter.create_child = (function hipo$interpreter$create_child(o,m){
if(cljs.core.truth_((function (){var or__4906__auto__ = hipo.hiccup.literal_QMARK_.call(null,o);
if(cljs.core.truth_(or__4906__auto__)){
return or__4906__auto__;
} else {
return cljs.core.vector_QMARK_.call(null,o);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("hic","literal?","hic/literal?",1992923056,null),new cljs.core.Symbol(null,"o","o",290524299,null)),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"o","o",290524299,null)))))].join('')));
}

if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,o))){
return document.createTextNode(o);
} else {
return hipo.interpreter.create_vector.call(null,o,m);
}
});
hipo.interpreter.append_to_parent = (function hipo$interpreter$append_to_parent(el,o,m){
if(cljs.core.seq_QMARK_.call(null,o)){
return hipo.interpreter.append_children_BANG_.call(null,el,cljs.core.vec.call(null,o),m);
} else {
if(!((o == null))){
return el.appendChild(hipo.interpreter.create_child.call(null,o,m));
} else {
return null;
}
}
});
hipo.interpreter.create = (function hipo$interpreter$create(o,m){
if(cljs.core.seq_QMARK_.call(null,o)){
var f = document.createDocumentFragment();
hipo.interpreter.append_children_BANG_.call(null,f,cljs.core.vec.call(null,o),m);

return f;
} else {
if(!((o == null))){
return hipo.interpreter.create_child.call(null,o,m);
} else {
return null;
}
}
});
hipo.interpreter.reconciliate_attributes_BANG_ = (function hipo$interpreter$reconciliate_attributes_BANG_(el,ns,tag,om,nm,m){
var seq__7416_7428 = cljs.core.seq.call(null,nm);
var chunk__7418_7429 = null;
var count__7419_7430 = (0);
var i__7420_7431 = (0);
while(true){
if((i__7420_7431 < count__7419_7430)){
var vec__7422_7432 = cljs.core._nth.call(null,chunk__7418_7429,i__7420_7431);
var sok_7433 = cljs.core.nth.call(null,vec__7422_7432,(0),null);
var nv_7434 = cljs.core.nth.call(null,vec__7422_7432,(1),null);
var ov_7435 = cljs.core.get.call(null,om,sok_7433);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_7433,ov_7435,nv_7434,m);

var G__7436 = seq__7416_7428;
var G__7437 = chunk__7418_7429;
var G__7438 = count__7419_7430;
var G__7439 = (i__7420_7431 + (1));
seq__7416_7428 = G__7436;
chunk__7418_7429 = G__7437;
count__7419_7430 = G__7438;
i__7420_7431 = G__7439;
continue;
} else {
var temp__4425__auto___7440 = cljs.core.seq.call(null,seq__7416_7428);
if(temp__4425__auto___7440){
var seq__7416_7441__$1 = temp__4425__auto___7440;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7416_7441__$1)){
var c__5709__auto___7442 = cljs.core.chunk_first.call(null,seq__7416_7441__$1);
var G__7443 = cljs.core.chunk_rest.call(null,seq__7416_7441__$1);
var G__7444 = c__5709__auto___7442;
var G__7445 = cljs.core.count.call(null,c__5709__auto___7442);
var G__7446 = (0);
seq__7416_7428 = G__7443;
chunk__7418_7429 = G__7444;
count__7419_7430 = G__7445;
i__7420_7431 = G__7446;
continue;
} else {
var vec__7423_7447 = cljs.core.first.call(null,seq__7416_7441__$1);
var sok_7448 = cljs.core.nth.call(null,vec__7423_7447,(0),null);
var nv_7449 = cljs.core.nth.call(null,vec__7423_7447,(1),null);
var ov_7450 = cljs.core.get.call(null,om,sok_7448);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_7448,ov_7450,nv_7449,m);

var G__7451 = cljs.core.next.call(null,seq__7416_7441__$1);
var G__7452 = null;
var G__7453 = (0);
var G__7454 = (0);
seq__7416_7428 = G__7451;
chunk__7418_7429 = G__7452;
count__7419_7430 = G__7453;
i__7420_7431 = G__7454;
continue;
}
} else {
}
}
break;
}

var seq__7424 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__7425 = null;
var count__7426 = (0);
var i__7427 = (0);
while(true){
if((i__7427 < count__7426)){
var sok = cljs.core._nth.call(null,chunk__7425,i__7427);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);

var G__7455 = seq__7424;
var G__7456 = chunk__7425;
var G__7457 = count__7426;
var G__7458 = (i__7427 + (1));
seq__7424 = G__7455;
chunk__7425 = G__7456;
count__7426 = G__7457;
i__7427 = G__7458;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7424);
if(temp__4425__auto__){
var seq__7424__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7424__$1)){
var c__5709__auto__ = cljs.core.chunk_first.call(null,seq__7424__$1);
var G__7459 = cljs.core.chunk_rest.call(null,seq__7424__$1);
var G__7460 = c__5709__auto__;
var G__7461 = cljs.core.count.call(null,c__5709__auto__);
var G__7462 = (0);
seq__7424 = G__7459;
chunk__7425 = G__7460;
count__7426 = G__7461;
i__7427 = G__7462;
continue;
} else {
var sok = cljs.core.first.call(null,seq__7424__$1);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);

var G__7463 = cljs.core.next.call(null,seq__7424__$1);
var G__7464 = null;
var G__7465 = (0);
var G__7466 = (0);
seq__7424 = G__7463;
chunk__7425 = G__7464;
count__7426 = G__7465;
i__7427 = G__7466;
continue;
}
} else {
return null;
}
}
break;
}
});
hipo.interpreter.reconciliate_BANG_;
hipo.interpreter.child_key = (function hipo$interpreter$child_key(h){
return new cljs.core.Keyword("hipo","key","hipo/key",-1519246363).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,h));
});
hipo.interpreter.keyed_children__GT_indexed_map = (function hipo$interpreter$keyed_children__GT_indexed_map(v){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5678__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__7471(s__7472){
return (new cljs.core.LazySeq(null,(function (){
var s__7472__$1 = s__7472;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7472__$1);
if(temp__4425__auto__){
var s__7472__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7472__$2)){
var c__5676__auto__ = cljs.core.chunk_first.call(null,s__7472__$2);
var size__5677__auto__ = cljs.core.count.call(null,c__5676__auto__);
var b__7474 = cljs.core.chunk_buffer.call(null,size__5677__auto__);
if((function (){var i__7473 = (0);
while(true){
if((i__7473 < size__5677__auto__)){
var ih = cljs.core._nth.call(null,c__5676__auto__,i__7473);
cljs.core.chunk_append.call(null,b__7474,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__7475 = (i__7473 + (1));
i__7473 = G__7475;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7474),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__7471.call(null,cljs.core.chunk_rest.call(null,s__7472__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7474),null);
}
} else {
var ih = cljs.core.first.call(null,s__7472__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__7471.call(null,cljs.core.rest.call(null,s__7472__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5678__auto__.call(null,cljs.core.map_indexed.call(null,((function (iter__5678__auto__){
return (function (idx,itm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,itm], null);
});})(iter__5678__auto__))
,v));
})());
});
/**
 * Reconciliate a vector of children based on their associated key.
 */
hipo.interpreter.reconciliate_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_keyed_children_BANG_(el,och,nch,p__7476){
var map__7489 = p__7476;
var map__7489__$1 = ((((!((map__7489 == null)))?((((map__7489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7489):map__7489);
var m = map__7489__$1;
var interceptors = cljs.core.get.call(null,map__7489__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var om = hipo.interpreter.keyed_children__GT_indexed_map.call(null,och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map.call(null,nch);
var cs = hipo.dom.children.call(null,el,cljs.core.apply.call(null,cljs.core.max,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,nm)),cljs.core.set.call(null,cljs.core.keys.call(null,om)))));
var seq__7491_7501 = cljs.core.seq.call(null,nm);
var chunk__7492_7502 = null;
var count__7493_7503 = (0);
var i__7494_7504 = (0);
while(true){
if((i__7494_7504 < count__7493_7503)){
var vec__7495_7505 = cljs.core._nth.call(null,chunk__7492_7502,i__7494_7504);
var i_7506 = cljs.core.nth.call(null,vec__7495_7505,(0),null);
var vec__7496_7507 = cljs.core.nth.call(null,vec__7495_7505,(1),null);
var ii_7508 = cljs.core.nth.call(null,vec__7496_7507,(0),null);
var h_7509 = cljs.core.nth.call(null,vec__7496_7507,(1),null);
var temp__4423__auto___7510 = cljs.core.get.call(null,om,i_7506);
if(cljs.core.truth_(temp__4423__auto___7510)){
var vec__7497_7511 = temp__4423__auto___7510;
var iii_7512 = cljs.core.nth.call(null,vec__7497_7511,(0),null);
var oh_7513 = cljs.core.nth.call(null,vec__7497_7511,(1),null);
var cel_7514 = cljs.core.nth.call(null,cs,iii_7512);
if((ii_7508 === iii_7512)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_7514,oh_7513,h_7509,m);
} else {
var b__6195__auto___7515 = ((function (seq__7491_7501,chunk__7492_7502,count__7493_7503,i__7494_7504,cel_7514,vec__7497_7511,iii_7512,oh_7513,temp__4423__auto___7510,vec__7495_7505,i_7506,vec__7496_7507,ii_7508,h_7509,om,nm,cs,map__7489,map__7489__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_7514);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_7513,h_7509,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_7508,ncel);
});})(seq__7491_7501,chunk__7492_7502,count__7493_7503,i__7494_7504,cel_7514,vec__7497_7511,iii_7512,oh_7513,temp__4423__auto___7510,vec__7495_7505,i_7506,vec__7496_7507,ii_7508,h_7509,om,nm,cs,map__7489,map__7489__$1,m,interceptors))
;
var v__6196__auto___7516 = interceptors;
if((cljs.core.not.call(null,v__6196__auto___7516)) || (cljs.core.empty_QMARK_.call(null,v__6196__auto___7516))){
b__6195__auto___7515.call(null);
} else {
hipo.interceptor.call.call(null,b__6195__auto___7515,v__6196__auto___7516,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_7509,new cljs.core.Keyword(null,"index","index",-1531685915),ii_7508], null));
}
}
} else {
var b__6195__auto___7517 = ((function (seq__7491_7501,chunk__7492_7502,count__7493_7503,i__7494_7504,temp__4423__auto___7510,vec__7495_7505,i_7506,vec__7496_7507,ii_7508,h_7509,om,nm,cs,map__7489,map__7489__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_7508,hipo.interpreter.create_child.call(null,h_7509,m));
});})(seq__7491_7501,chunk__7492_7502,count__7493_7503,i__7494_7504,temp__4423__auto___7510,vec__7495_7505,i_7506,vec__7496_7507,ii_7508,h_7509,om,nm,cs,map__7489,map__7489__$1,m,interceptors))
;
var v__6196__auto___7518 = interceptors;
if((cljs.core.not.call(null,v__6196__auto___7518)) || (cljs.core.empty_QMARK_.call(null,v__6196__auto___7518))){
b__6195__auto___7517.call(null);
} else {
hipo.interceptor.call.call(null,b__6195__auto___7517,v__6196__auto___7518,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_7509,new cljs.core.Keyword(null,"index","index",-1531685915),ii_7508], null));
}
}

var G__7519 = seq__7491_7501;
var G__7520 = chunk__7492_7502;
var G__7521 = count__7493_7503;
var G__7522 = (i__7494_7504 + (1));
seq__7491_7501 = G__7519;
chunk__7492_7502 = G__7520;
count__7493_7503 = G__7521;
i__7494_7504 = G__7522;
continue;
} else {
var temp__4425__auto___7523 = cljs.core.seq.call(null,seq__7491_7501);
if(temp__4425__auto___7523){
var seq__7491_7524__$1 = temp__4425__auto___7523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7491_7524__$1)){
var c__5709__auto___7525 = cljs.core.chunk_first.call(null,seq__7491_7524__$1);
var G__7526 = cljs.core.chunk_rest.call(null,seq__7491_7524__$1);
var G__7527 = c__5709__auto___7525;
var G__7528 = cljs.core.count.call(null,c__5709__auto___7525);
var G__7529 = (0);
seq__7491_7501 = G__7526;
chunk__7492_7502 = G__7527;
count__7493_7503 = G__7528;
i__7494_7504 = G__7529;
continue;
} else {
var vec__7498_7530 = cljs.core.first.call(null,seq__7491_7524__$1);
var i_7531 = cljs.core.nth.call(null,vec__7498_7530,(0),null);
var vec__7499_7532 = cljs.core.nth.call(null,vec__7498_7530,(1),null);
var ii_7533 = cljs.core.nth.call(null,vec__7499_7532,(0),null);
var h_7534 = cljs.core.nth.call(null,vec__7499_7532,(1),null);
var temp__4423__auto___7535 = cljs.core.get.call(null,om,i_7531);
if(cljs.core.truth_(temp__4423__auto___7535)){
var vec__7500_7536 = temp__4423__auto___7535;
var iii_7537 = cljs.core.nth.call(null,vec__7500_7536,(0),null);
var oh_7538 = cljs.core.nth.call(null,vec__7500_7536,(1),null);
var cel_7539 = cljs.core.nth.call(null,cs,iii_7537);
if((ii_7533 === iii_7537)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_7539,oh_7538,h_7534,m);
} else {
var b__6195__auto___7540 = ((function (seq__7491_7501,chunk__7492_7502,count__7493_7503,i__7494_7504,cel_7539,vec__7500_7536,iii_7537,oh_7538,temp__4423__auto___7535,vec__7498_7530,i_7531,vec__7499_7532,ii_7533,h_7534,seq__7491_7524__$1,temp__4425__auto___7523,om,nm,cs,map__7489,map__7489__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_7539);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_7538,h_7534,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_7533,ncel);
});})(seq__7491_7501,chunk__7492_7502,count__7493_7503,i__7494_7504,cel_7539,vec__7500_7536,iii_7537,oh_7538,temp__4423__auto___7535,vec__7498_7530,i_7531,vec__7499_7532,ii_7533,h_7534,seq__7491_7524__$1,temp__4425__auto___7523,om,nm,cs,map__7489,map__7489__$1,m,interceptors))
;
var v__6196__auto___7541 = interceptors;
if((cljs.core.not.call(null,v__6196__auto___7541)) || (cljs.core.empty_QMARK_.call(null,v__6196__auto___7541))){
b__6195__auto___7540.call(null);
} else {
hipo.interceptor.call.call(null,b__6195__auto___7540,v__6196__auto___7541,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_7534,new cljs.core.Keyword(null,"index","index",-1531685915),ii_7533], null));
}
}
} else {
var b__6195__auto___7542 = ((function (seq__7491_7501,chunk__7492_7502,count__7493_7503,i__7494_7504,temp__4423__auto___7535,vec__7498_7530,i_7531,vec__7499_7532,ii_7533,h_7534,seq__7491_7524__$1,temp__4425__auto___7523,om,nm,cs,map__7489,map__7489__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_7533,hipo.interpreter.create_child.call(null,h_7534,m));
});})(seq__7491_7501,chunk__7492_7502,count__7493_7503,i__7494_7504,temp__4423__auto___7535,vec__7498_7530,i_7531,vec__7499_7532,ii_7533,h_7534,seq__7491_7524__$1,temp__4425__auto___7523,om,nm,cs,map__7489,map__7489__$1,m,interceptors))
;
var v__6196__auto___7543 = interceptors;
if((cljs.core.not.call(null,v__6196__auto___7543)) || (cljs.core.empty_QMARK_.call(null,v__6196__auto___7543))){
b__6195__auto___7542.call(null);
} else {
hipo.interceptor.call.call(null,b__6195__auto___7542,v__6196__auto___7543,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_7534,new cljs.core.Keyword(null,"index","index",-1531685915),ii_7533], null));
}
}

var G__7544 = cljs.core.next.call(null,seq__7491_7524__$1);
var G__7545 = null;
var G__7546 = (0);
var G__7547 = (0);
seq__7491_7501 = G__7544;
chunk__7492_7502 = G__7545;
count__7493_7503 = G__7546;
i__7494_7504 = G__7547;
continue;
}
} else {
}
}
break;
}

var d = cljs.core.count.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
if((d > (0))){
var b__6195__auto__ = ((function (d,om,nm,cs,map__7489,map__7489__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(d,om,nm,cs,map__7489,map__7489__$1,m,interceptors))
;
var v__6196__auto__ = interceptors;
if((cljs.core.not.call(null,v__6196__auto__)) || (cljs.core.empty_QMARK_.call(null,v__6196__auto__))){
return b__6195__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__6195__auto__,v__6196__auto__,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
return null;
}
});
hipo.interpreter.reconciliate_non_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_non_keyed_children_BANG_(el,och,nch,p__7548){
var map__7551 = p__7548;
var map__7551__$1 = ((((!((map__7551 == null)))?((((map__7551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7551):map__7551);
var m = map__7551__$1;
var interceptors = cljs.core.get.call(null,map__7551__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var oc = cljs.core.count.call(null,och);
var nc = cljs.core.count.call(null,nch);
var d = (oc - nc);
if((d > (0))){
var b__6195__auto___7553 = ((function (oc,nc,d,map__7551,map__7551__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(oc,nc,d,map__7551,map__7551__$1,m,interceptors))
;
var v__6196__auto___7554 = interceptors;
if((cljs.core.not.call(null,v__6196__auto___7554)) || (cljs.core.empty_QMARK_.call(null,v__6196__auto___7554))){
b__6195__auto___7553.call(null);
} else {
hipo.interceptor.call.call(null,b__6195__auto___7553,v__6196__auto___7554,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
}

var n__5809__auto___7555 = (function (){var x__5244__auto__ = oc;
var y__5245__auto__ = nc;
return ((x__5244__auto__ < y__5245__auto__) ? x__5244__auto__ : y__5245__auto__);
})();
var i_7556 = (0);
while(true){
if((i_7556 < n__5809__auto___7555)){
var ov_7557 = cljs.core.nth.call(null,och,i_7556);
var nv_7558 = cljs.core.nth.call(null,nch,i_7556);
if(!(((ov_7557 == null)) && ((nv_7558 == null)))){
if((ov_7557 == null)){
var b__6195__auto___7559 = ((function (i_7556,ov_7557,nv_7558,n__5809__auto___7555,oc,nc,d,map__7551,map__7551__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,i_7556,hipo.interpreter.create_child.call(null,nv_7558,m));
});})(i_7556,ov_7557,nv_7558,n__5809__auto___7555,oc,nc,d,map__7551,map__7551__$1,m,interceptors))
;
var v__6196__auto___7560 = interceptors;
if((cljs.core.not.call(null,v__6196__auto___7560)) || (cljs.core.empty_QMARK_.call(null,v__6196__auto___7560))){
b__6195__auto___7559.call(null);
} else {
hipo.interceptor.call.call(null,b__6195__auto___7559,v__6196__auto___7560,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nv_7558,new cljs.core.Keyword(null,"index","index",-1531685915),i_7556], null));
}
} else {
if((nv_7558 == null)){
var b__6195__auto___7561 = ((function (i_7556,ov_7557,nv_7558,n__5809__auto___7555,oc,nc,d,map__7551,map__7551__$1,m,interceptors){
return (function (){
return hipo.dom.remove_child_BANG_.call(null,el,i_7556);
});})(i_7556,ov_7557,nv_7558,n__5809__auto___7555,oc,nc,d,map__7551,map__7551__$1,m,interceptors))
;
var v__6196__auto___7562 = interceptors;
if((cljs.core.not.call(null,v__6196__auto___7562)) || (cljs.core.empty_QMARK_.call(null,v__6196__auto___7562))){
b__6195__auto___7561.call(null);
} else {
hipo.interceptor.call.call(null,b__6195__auto___7561,v__6196__auto___7562,new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"index","index",-1531685915),i_7556], null));
}
} else {
var temp__4423__auto___7563 = hipo.dom.child.call(null,el,i_7556);
if(cljs.core.truth_(temp__4423__auto___7563)){
var cel_7564 = temp__4423__auto___7563;
hipo.interpreter.reconciliate_BANG_.call(null,cel_7564,ov_7557,nv_7558,m);
} else {
}

}
}
} else {
}

var G__7565 = (i_7556 + (1));
i_7556 = G__7565;
continue;
} else {
}
break;
}

if((d < (0))){
if(((-1) === d)){
var temp__4423__auto__ = cljs.core.nth.call(null,nch,oc);
if(cljs.core.truth_(temp__4423__auto__)){
var h = temp__4423__auto__;
var b__6195__auto__ = ((function (h,temp__4423__auto__,oc,nc,d,map__7551,map__7551__$1,m,interceptors){
return (function (){
return el.appendChild(hipo.interpreter.create_child.call(null,h,m));
});})(h,temp__4423__auto__,oc,nc,d,map__7551,map__7551__$1,m,interceptors))
;
var v__6196__auto__ = interceptors;
if((cljs.core.not.call(null,v__6196__auto__)) || (cljs.core.empty_QMARK_.call(null,v__6196__auto__))){
return b__6195__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__6195__auto__,v__6196__auto__,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
}
} else {
return null;
}
} else {
var f = document.createDocumentFragment();
var cs = ((((0) === oc))?nch:cljs.core.subvec.call(null,nch,oc));
var b__6195__auto___7566 = ((function (f,cs,oc,nc,d,map__7551,map__7551__$1,m,interceptors){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs,m);
});})(f,cs,oc,nc,d,map__7551,map__7551__$1,m,interceptors))
;
var v__6196__auto___7567 = interceptors;
if((cljs.core.not.call(null,v__6196__auto___7567)) || (cljs.core.empty_QMARK_.call(null,v__6196__auto___7567))){
b__6195__auto___7566.call(null);
} else {
hipo.interceptor.call.call(null,b__6195__auto___7566,v__6196__auto___7567,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
}

return el.appendChild(f);
}
} else {
return null;
}
});
hipo.interpreter.keyed_children_QMARK_ = (function hipo$interpreter$keyed_children_QMARK_(v){
return !((hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,v,(0))) == null));
});
hipo.interpreter.reconciliate_children_BANG_ = (function hipo$interpreter$reconciliate_children_BANG_(el,och,nch,p__7568){
var map__7571 = p__7568;
var map__7571__$1 = ((((!((map__7571 == null)))?((((map__7571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7571):map__7571);
var m = map__7571__$1;
var interceptors = cljs.core.get.call(null,map__7571__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.empty_QMARK_.call(null,nch)){
if(!(cljs.core.empty_QMARK_.call(null,och))){
var b__6195__auto__ = ((function (map__7571,map__7571__$1,m,interceptors){
return (function (){
return hipo.dom.clear_BANG_.call(null,el);
});})(map__7571,map__7571__$1,m,interceptors))
;
var v__6196__auto__ = interceptors;
if((cljs.core.not.call(null,v__6196__auto__)) || (cljs.core.empty_QMARK_.call(null,v__6196__auto__))){
return b__6195__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__6195__auto__,v__6196__auto__,new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
}
} else {
return null;
}
} else {
if(cljs.core.truth_(hipo.interpreter.keyed_children_QMARK_.call(null,nch))){
return hipo.interpreter.reconciliate_keyed_children_BANG_.call(null,el,och,nch,m);
} else {
return hipo.interpreter.reconciliate_non_keyed_children_BANG_.call(null,el,och,nch,m);
}
}
});
hipo.interpreter.reconciliate_vector_BANG_ = (function hipo$interpreter$reconciliate_vector_BANG_(el,oh,nh,p__7573){
var map__7576 = p__7573;
var map__7576__$1 = ((((!((map__7576 == null)))?((((map__7576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7576):map__7576);
var m = map__7576__$1;
var interceptors = cljs.core.get.call(null,map__7576__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.vector_QMARK_.call(null,nh)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"nh","nh",1280017554,null))))].join('')));
}

if(cljs.core.truth_((function (){var or__4906__auto__ = hipo.hiccup.literal_QMARK_.call(null,oh);
if(cljs.core.truth_(or__4906__auto__)){
return or__4906__auto__;
} else {
return !((hipo.hiccup.tag.call(null,nh) === hipo.hiccup.tag.call(null,oh)));
}
})())){
var nel = hipo.interpreter.create_child.call(null,nh,m);
var b__6195__auto__ = ((function (nel,map__7576,map__7576__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't replace root element. If you want to change root element's type it must be encapsulated in a static element."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentElement",".-parentElement",407983630,null),new cljs.core.Symbol(null,"el","el",22330409,null))))].join('')));
}

return hipo.dom.replace_BANG_.call(null,el,nel);
});})(nel,map__7576,map__7576__$1,m,interceptors))
;
var v__6196__auto__ = interceptors;
if((cljs.core.not.call(null,v__6196__auto__)) || (cljs.core.empty_QMARK_.call(null,v__6196__auto__))){
return b__6195__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__6195__auto__,v__6196__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
var om = hipo.hiccup.attributes.call(null,oh);
var nm = hipo.hiccup.attributes.call(null,nh);
var och = hipo.hiccup.children.call(null,oh);
var nch = hipo.hiccup.children.call(null,nh);
var b__6195__auto___7578 = ((function (om,nm,och,nch,map__7576,map__7576__$1,m,interceptors){
return (function (){
return hipo.interpreter.reconciliate_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),m);
});})(om,nm,och,nch,map__7576,map__7576__$1,m,interceptors))
;
var v__6196__auto___7579 = interceptors;
if((cljs.core.not.call(null,v__6196__auto___7579)) || (cljs.core.empty_QMARK_.call(null,v__6196__auto___7579))){
b__6195__auto___7578.call(null);
} else {
hipo.interceptor.call.call(null,b__6195__auto___7578,v__6196__auto___7579,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),och,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nch], null));
}

return hipo.interpreter.reconciliate_attributes_BANG_.call(null,el,hipo.hiccup.keyns.call(null,nh),hipo.hiccup.tag.call(null,nh),om,nm,m);
}
});
hipo.interpreter.reconciliate_BANG_ = (function hipo$interpreter$reconciliate_BANG_(el,oh,nh,p__7580){
var map__7583 = p__7580;
var map__7583__$1 = ((((!((map__7583 == null)))?((((map__7583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7583):map__7583);
var m = map__7583__$1;
var interceptors = cljs.core.get.call(null,map__7583__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.truth_((function (){var or__4906__auto__ = cljs.core.vector_QMARK_.call(null,nh);
if(or__4906__auto__){
return or__4906__auto__;
} else {
return hipo.hiccup.literal_QMARK_.call(null,nh);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"nh","nh",1280017554,null)),cljs.core.list(new cljs.core.Symbol("hic","literal?","hic/literal?",1992923056,null),new cljs.core.Symbol(null,"nh","nh",1280017554,null)))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

var b__6195__auto__ = ((function (map__7583,map__7583__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,nh))){
if(!((oh === nh))){
var b__6195__auto__ = ((function (map__7583,map__7583__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't replace root element. If you want to change root element's type it must be encapsulated in a static element."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentElement",".-parentElement",407983630,null),new cljs.core.Symbol(null,"el","el",22330409,null))))].join('')));
}

return hipo.dom.replace_text_BANG_.call(null,el,[cljs.core.str(nh)].join(''));
});})(map__7583,map__7583__$1,m,interceptors))
;
var v__6196__auto__ = interceptors;
if((cljs.core.not.call(null,v__6196__auto__)) || (cljs.core.empty_QMARK_.call(null,v__6196__auto__))){
return b__6195__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__6195__auto__,v__6196__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
return null;
}
} else {
return hipo.interpreter.reconciliate_vector_BANG_.call(null,el,oh,nh,m);
}
});})(map__7583,map__7583__$1,m,interceptors))
;
var v__6196__auto__ = interceptors;
if((cljs.core.not.call(null,v__6196__auto__)) || (cljs.core.empty_QMARK_.call(null,v__6196__auto__))){
return b__6195__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__6195__auto__,v__6196__auto__,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),oh,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nh], null));
}
});

//# sourceMappingURL=interpreter.js.map