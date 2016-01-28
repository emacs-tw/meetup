// Compiled by ClojureScript 1.7.122 {}
goog.provide('hipo.interceptor');
goog.require('cljs.core');

/**
 * @interface
 */
hipo.interceptor.Interceptor = function(){};

hipo.interceptor._intercept = (function hipo$interceptor$_intercept(this$,t,m,f){
if((!((this$ == null))) && (!((this$.hipo$interceptor$Interceptor$_intercept$arity$4 == null)))){
return this$.hipo$interceptor$Interceptor$_intercept$arity$4(this$,t,m,f);
} else {
var x__5561__auto__ = (((this$ == null))?null:this$);
var m__5562__auto__ = (hipo.interceptor._intercept[goog.typeOf(x__5561__auto__)]);
if(!((m__5562__auto__ == null))){
return m__5562__auto__.call(null,this$,t,m,f);
} else {
var m__5562__auto____$1 = (hipo.interceptor._intercept["_"]);
if(!((m__5562__auto____$1 == null))){
return m__5562__auto____$1.call(null,this$,t,m,f);
} else {
throw cljs.core.missing_protocol.call(null,"Interceptor.-intercept",this$);
}
}
}
});

hipo.interceptor.call = (function hipo$interceptor$call(f,v,t,m){
var i = cljs.core.first.call(null,v);
return hipo.interceptor._intercept.call(null,i,t,m,((function (i){
return (function (){
var s = cljs.core.rest.call(null,v);
if(cljs.core.seq.call(null,s)){
return hipo$interceptor$call.call(null,f,s,t,m);
} else {
return f.call(null);
}
});})(i))
);
});

/**
* @constructor
 * @implements {hipo.interceptor.Interceptor}
*/
hipo.interceptor.LogInterceptor = (function (b){
this.b = b;
})
hipo.interceptor.LogInterceptor.prototype.hipo$interceptor$Interceptor$ = true;

hipo.interceptor.LogInterceptor.prototype.hipo$interceptor$Interceptor$_intercept$arity$4 = (function (_,t,m,f){
var self__ = this;
var ___$1 = this;
if((cljs.core.not.call(null,self__.b)) || (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),t))){
console.log(cljs.core.name.call(null,t)," ",cljs.core.clj__GT_js.call(null,m));
} else {
}

return f.call(null);
});

hipo.interceptor.LogInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",-1172211299,null)], null);
});

hipo.interceptor.LogInterceptor.cljs$lang$type = true;

hipo.interceptor.LogInterceptor.cljs$lang$ctorStr = "hipo.interceptor/LogInterceptor";

hipo.interceptor.LogInterceptor.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__,opt__5506__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"hipo.interceptor/LogInterceptor");
});

hipo.interceptor.__GT_LogInterceptor = (function hipo$interceptor$__GT_LogInterceptor(b){
return (new hipo.interceptor.LogInterceptor(b));
});


/**
* @constructor
 * @implements {hipo.interceptor.Interceptor}
*/
hipo.interceptor.TimeInterceptor = (function (s){
this.s = s;
})
hipo.interceptor.TimeInterceptor.prototype.hipo$interceptor$Interceptor$ = true;

hipo.interceptor.TimeInterceptor.prototype.hipo$interceptor$Interceptor$_intercept$arity$4 = (function (_,t,___$1,f){
var self__ = this;
var ___$2 = this;
var label = [cljs.core.str(self__.s),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,t))].join('');
console.time(label);

f.call(null);

return console.timeEnd(label);
});

hipo.interceptor.TimeInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null)], null);
});

hipo.interceptor.TimeInterceptor.cljs$lang$type = true;

hipo.interceptor.TimeInterceptor.cljs$lang$ctorStr = "hipo.interceptor/TimeInterceptor";

hipo.interceptor.TimeInterceptor.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__,opt__5506__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"hipo.interceptor/TimeInterceptor");
});

hipo.interceptor.__GT_TimeInterceptor = (function hipo$interceptor$__GT_TimeInterceptor(s){
return (new hipo.interceptor.TimeInterceptor(s));
});


/**
* @constructor
 * @implements {hipo.interceptor.Interceptor}
*/
hipo.interceptor.ProfileInterceptor = (function (label){
this.label = label;
})
hipo.interceptor.ProfileInterceptor.prototype.hipo$interceptor$Interceptor$ = true;

hipo.interceptor.ProfileInterceptor.prototype.hipo$interceptor$Interceptor$_intercept$arity$4 = (function (_,t,___$1,f){
var self__ = this;
var ___$2 = this;
if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739))){
console.profile(self__.label);

f.call(null);

console.profileEnd(self__.label);
} else {
}

return f.call(null);
});

hipo.interceptor.ProfileInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"label","label",-936024965,null)], null);
});

hipo.interceptor.ProfileInterceptor.cljs$lang$type = true;

hipo.interceptor.ProfileInterceptor.cljs$lang$ctorStr = "hipo.interceptor/ProfileInterceptor";

hipo.interceptor.ProfileInterceptor.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__,opt__5506__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"hipo.interceptor/ProfileInterceptor");
});

hipo.interceptor.__GT_ProfileInterceptor = (function hipo$interceptor$__GT_ProfileInterceptor(label){
return (new hipo.interceptor.ProfileInterceptor(label));
});


/**
* @constructor
 * @implements {hipo.interceptor.Interceptor}
*/
hipo.interceptor.PerformanceInterceptor = (function (label){
this.label = label;
})
hipo.interceptor.PerformanceInterceptor.prototype.hipo$interceptor$Interceptor$ = true;

hipo.interceptor.PerformanceInterceptor.prototype.hipo$interceptor$Interceptor$_intercept$arity$4 = (function (_,t,___$1,f){
var self__ = this;
var ___$2 = this;
var mark_begin = [cljs.core.str(self__.label),cljs.core.str(" begin "),cljs.core.str(t)].join('');
var mark_end = [cljs.core.str(self__.label),cljs.core.str(" end "),cljs.core.str(t)].join('');
performance.mark(mark_begin);

f.call(null);

performance.mark(mark_end);

return performance.measure([cljs.core.str(self__.label),cljs.core.str(" "),cljs.core.str(t)].join(''),mark_begin,mark_end);
});

hipo.interceptor.PerformanceInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"label","label",-936024965,null)], null);
});

hipo.interceptor.PerformanceInterceptor.cljs$lang$type = true;

hipo.interceptor.PerformanceInterceptor.cljs$lang$ctorStr = "hipo.interceptor/PerformanceInterceptor";

hipo.interceptor.PerformanceInterceptor.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__,opt__5506__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"hipo.interceptor/PerformanceInterceptor");
});

hipo.interceptor.__GT_PerformanceInterceptor = (function hipo$interceptor$__GT_PerformanceInterceptor(label){
return (new hipo.interceptor.PerformanceInterceptor(label));
});


/**
* @constructor
 * @implements {hipo.interceptor.Interceptor}
*/
hipo.interceptor.StateInterceptor = (function (a){
this.a = a;
})
hipo.interceptor.StateInterceptor.prototype.hipo$interceptor$Interceptor$ = true;

hipo.interceptor.StateInterceptor.prototype.hipo$interceptor$Interceptor$_intercept$arity$4 = (function (_,t,o,f){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.a,((function (___$1){
return (function (p1__7742_SHARP_,p2__7741_SHARP_){
return cljs.core.cons.call(null,p2__7741_SHARP_,p1__7742_SHARP_);
});})(___$1))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),t,new cljs.core.Keyword(null,"value","value",305978217),o], null));

return f.call(null);
});

hipo.interceptor.StateInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null)], null);
});

hipo.interceptor.StateInterceptor.cljs$lang$type = true;

hipo.interceptor.StateInterceptor.cljs$lang$ctorStr = "hipo.interceptor/StateInterceptor";

hipo.interceptor.StateInterceptor.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__,opt__5506__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"hipo.interceptor/StateInterceptor");
});

hipo.interceptor.__GT_StateInterceptor = (function hipo$interceptor$__GT_StateInterceptor(a){
return (new hipo.interceptor.StateInterceptor(a));
});


/**
* @constructor
 * @implements {hipo.interceptor.Interceptor}
*/
hipo.interceptor.StaticReconciliationInterceptor = (function (){
})
hipo.interceptor.StaticReconciliationInterceptor.prototype.hipo$interceptor$Interceptor$ = true;

hipo.interceptor.StaticReconciliationInterceptor.prototype.hipo$interceptor$Interceptor$_intercept$arity$4 = (function (_,t,o,f){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),t)){
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.meta.call(null,new cljs.core.Keyword(null,"new-value","new-value",1087038368).cljs$core$IFn$_invoke$arity$1(o)),new cljs.core.Keyword("hipo","static","hipo/static",1217561835)))){
return f.call(null);
} else {
return null;
}
} else {
return f.call(null);
}
});

hipo.interceptor.StaticReconciliationInterceptor.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

hipo.interceptor.StaticReconciliationInterceptor.cljs$lang$type = true;

hipo.interceptor.StaticReconciliationInterceptor.cljs$lang$ctorStr = "hipo.interceptor/StaticReconciliationInterceptor";

hipo.interceptor.StaticReconciliationInterceptor.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__,opt__5506__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"hipo.interceptor/StaticReconciliationInterceptor");
});

hipo.interceptor.__GT_StaticReconciliationInterceptor = (function hipo$interceptor$__GT_StaticReconciliationInterceptor(){
return (new hipo.interceptor.StaticReconciliationInterceptor());
});


/**
* @constructor
 * @implements {hipo.interceptor.Interceptor}
*/
hipo.interceptor.IdentityReconciliationInterceptor = (function (){
})
hipo.interceptor.IdentityReconciliationInterceptor.prototype.hipo$interceptor$Interceptor$ = true;

hipo.interceptor.IdentityReconciliationInterceptor.prototype.hipo$interceptor$Interceptor$_intercept$arity$4 = (function (_,t,o,f){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),t)){
if(!((new cljs.core.Keyword(null,"old-value","old-value",862546795).cljs$core$IFn$_invoke$arity$1(o) === new cljs.core.Keyword(null,"new-value","new-value",1087038368).cljs$core$IFn$_invoke$arity$1(o)))){
return f.call(null);
} else {
return null;
}
} else {
return f.call(null);
}
});

hipo.interceptor.IdentityReconciliationInterceptor.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

hipo.interceptor.IdentityReconciliationInterceptor.cljs$lang$type = true;

hipo.interceptor.IdentityReconciliationInterceptor.cljs$lang$ctorStr = "hipo.interceptor/IdentityReconciliationInterceptor";

hipo.interceptor.IdentityReconciliationInterceptor.cljs$lang$ctorPrWriter = (function (this__5504__auto__,writer__5505__auto__,opt__5506__auto__){
return cljs.core._write.call(null,writer__5505__auto__,"hipo.interceptor/IdentityReconciliationInterceptor");
});

hipo.interceptor.__GT_IdentityReconciliationInterceptor = (function hipo$interceptor$__GT_IdentityReconciliationInterceptor(){
return (new hipo.interceptor.IdentityReconciliationInterceptor());
});


//# sourceMappingURL=interceptor.js.map