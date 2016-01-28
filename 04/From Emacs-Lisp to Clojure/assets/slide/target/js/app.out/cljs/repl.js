// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8204_8218 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8205_8219 = null;
var count__8206_8220 = (0);
var i__8207_8221 = (0);
while(true){
if((i__8207_8221 < count__8206_8220)){
var f_8222 = cljs.core._nth.call(null,chunk__8205_8219,i__8207_8221);
cljs.core.println.call(null,"  ",f_8222);

var G__8223 = seq__8204_8218;
var G__8224 = chunk__8205_8219;
var G__8225 = count__8206_8220;
var G__8226 = (i__8207_8221 + (1));
seq__8204_8218 = G__8223;
chunk__8205_8219 = G__8224;
count__8206_8220 = G__8225;
i__8207_8221 = G__8226;
continue;
} else {
var temp__4425__auto___8227 = cljs.core.seq.call(null,seq__8204_8218);
if(temp__4425__auto___8227){
var seq__8204_8228__$1 = temp__4425__auto___8227;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8204_8228__$1)){
var c__5709__auto___8229 = cljs.core.chunk_first.call(null,seq__8204_8228__$1);
var G__8230 = cljs.core.chunk_rest.call(null,seq__8204_8228__$1);
var G__8231 = c__5709__auto___8229;
var G__8232 = cljs.core.count.call(null,c__5709__auto___8229);
var G__8233 = (0);
seq__8204_8218 = G__8230;
chunk__8205_8219 = G__8231;
count__8206_8220 = G__8232;
i__8207_8221 = G__8233;
continue;
} else {
var f_8234 = cljs.core.first.call(null,seq__8204_8228__$1);
cljs.core.println.call(null,"  ",f_8234);

var G__8235 = cljs.core.next.call(null,seq__8204_8228__$1);
var G__8236 = null;
var G__8237 = (0);
var G__8238 = (0);
seq__8204_8218 = G__8235;
chunk__8205_8219 = G__8236;
count__8206_8220 = G__8237;
i__8207_8221 = G__8238;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_8239 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4906__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4906__auto__)){
return or__4906__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_8239);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_8239)))?cljs.core.second.call(null,arglists_8239):arglists_8239));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8208 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8209 = null;
var count__8210 = (0);
var i__8211 = (0);
while(true){
if((i__8211 < count__8210)){
var vec__8212 = cljs.core._nth.call(null,chunk__8209,i__8211);
var name = cljs.core.nth.call(null,vec__8212,(0),null);
var map__8213 = cljs.core.nth.call(null,vec__8212,(1),null);
var map__8213__$1 = ((((!((map__8213 == null)))?((((map__8213.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8213.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8213):map__8213);
var doc = cljs.core.get.call(null,map__8213__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8213__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8240 = seq__8208;
var G__8241 = chunk__8209;
var G__8242 = count__8210;
var G__8243 = (i__8211 + (1));
seq__8208 = G__8240;
chunk__8209 = G__8241;
count__8210 = G__8242;
i__8211 = G__8243;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8208);
if(temp__4425__auto__){
var seq__8208__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8208__$1)){
var c__5709__auto__ = cljs.core.chunk_first.call(null,seq__8208__$1);
var G__8244 = cljs.core.chunk_rest.call(null,seq__8208__$1);
var G__8245 = c__5709__auto__;
var G__8246 = cljs.core.count.call(null,c__5709__auto__);
var G__8247 = (0);
seq__8208 = G__8244;
chunk__8209 = G__8245;
count__8210 = G__8246;
i__8211 = G__8247;
continue;
} else {
var vec__8215 = cljs.core.first.call(null,seq__8208__$1);
var name = cljs.core.nth.call(null,vec__8215,(0),null);
var map__8216 = cljs.core.nth.call(null,vec__8215,(1),null);
var map__8216__$1 = ((((!((map__8216 == null)))?((((map__8216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8216):map__8216);
var doc = cljs.core.get.call(null,map__8216__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8216__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8248 = cljs.core.next.call(null,seq__8208__$1);
var G__8249 = null;
var G__8250 = (0);
var G__8251 = (0);
seq__8208 = G__8248;
chunk__8209 = G__8249;
count__8210 = G__8250;
i__8211 = G__8251;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map