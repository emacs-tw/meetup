// Compiled by ClojureScript 1.7.122 {}
goog.provide('hipo.core');
goog.require('cljs.core');
goog.require('hipo.interceptor');
goog.require('hipo.interpreter');
hipo.core.hiccup_property = "hipo_hiccup";
hipo.core.get_hiccup = (function hipo$core$get_hiccup(el){
return (el[hipo.core.hiccup_property]);
});
hipo.core.set_hiccup_BANG_ = (function hipo$core$set_hiccup_BANG_(el,h){
return (el[hipo.core.hiccup_property] = h);
});
/**
 * Reconciliate an existing DOM element to match an hiccup style vector.
 * Reconciliation works by diffing the hiccup used to create the DOM element with a new hiccup. Element created with `hipo.core/create` can be reconcilied without providing the previous hiccup.
 * Last argument is an optional map of options.
 * 
 * Options:
 * 
 * * force-compilation? fail create if DOM construction can't be fully compiled
 * * force-interpretation? bypass the DOM construction compilation
 * * create-element-fn
 * * namespaces
 * * attribute-handlers
 * * interceptors
 *   
 */
hipo.core.reconciliate_BANG_ = (function hipo$core$reconciliate_BANG_(var_args){
var args7348 = [];
var len__5964__auto___7351 = arguments.length;
var i__5965__auto___7352 = (0);
while(true){
if((i__5965__auto___7352 < len__5964__auto___7351)){
args7348.push((arguments[i__5965__auto___7352]));

var G__7353 = (i__5965__auto___7352 + (1));
i__5965__auto___7352 = G__7353;
continue;
} else {
}
break;
}

var G__7350 = args7348.length;
switch (G__7350) {
case 2:
return hipo.core.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hipo.core.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hipo.core.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7348.length)].join('')));

}
});

hipo.core.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (el,nh){
return hipo.core.reconciliate_BANG_.call(null,el,nh,cljs.core.PersistentArrayMap.EMPTY);
});

hipo.core.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (el,nh,m){
return hipo.core.reconciliate_BANG_.call(null,el,hipo.core.get_hiccup.call(null,el),nh,m);
});

hipo.core.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (el,oh,nh,m){
if(!((oh == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Previous hiccup can't be nil"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"oh","oh",-129769339,null)))))].join('')));
}

hipo.core.set_hiccup_BANG_.call(null,el,nh);

return hipo.interpreter.reconciliate_BANG_.call(null,el,oh,nh,m);
});

hipo.core.reconciliate_BANG_.cljs$lang$maxFixedArity = 4;

//# sourceMappingURL=core.js.map