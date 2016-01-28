// Compiled by ClojureScript 1.7.122 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__8006_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__8006_SHARP_),path);
});})(path))
,changed)))){
return goog.Uri.parse(path);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__8011 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__8012 = null;
var count__8013 = (0);
var i__8014 = (0);
while(true){
if((i__8014 < count__8013)){
var s = cljs.core._nth.call(null,chunk__8012,i__8014);
var temp__4425__auto___8015 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8015)){
var sheet_8016 = temp__4425__auto___8015;
var temp__4425__auto___8017__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8016.href,changed);
if(cljs.core.truth_(temp__4425__auto___8017__$1)){
var href_uri_8018 = temp__4425__auto___8017__$1;
sheet_8016.ownerNode.href = href_uri_8018.makeUnique().toString();
} else {
}
} else {
}

var G__8019 = seq__8011;
var G__8020 = chunk__8012;
var G__8021 = count__8013;
var G__8022 = (i__8014 + (1));
seq__8011 = G__8019;
chunk__8012 = G__8020;
count__8013 = G__8021;
i__8014 = G__8022;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8011);
if(temp__4425__auto__){
var seq__8011__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8011__$1)){
var c__5709__auto__ = cljs.core.chunk_first.call(null,seq__8011__$1);
var G__8023 = cljs.core.chunk_rest.call(null,seq__8011__$1);
var G__8024 = c__5709__auto__;
var G__8025 = cljs.core.count.call(null,c__5709__auto__);
var G__8026 = (0);
seq__8011 = G__8023;
chunk__8012 = G__8024;
count__8013 = G__8025;
i__8014 = G__8026;
continue;
} else {
var s = cljs.core.first.call(null,seq__8011__$1);
var temp__4425__auto___8027__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___8027__$1)){
var sheet_8028 = temp__4425__auto___8027__$1;
var temp__4425__auto___8029__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_8028.href,changed);
if(cljs.core.truth_(temp__4425__auto___8029__$2)){
var href_uri_8030 = temp__4425__auto___8029__$2;
sheet_8028.ownerNode.href = href_uri_8030.makeUnique().toString();
} else {
}
} else {
}

var G__8031 = cljs.core.next.call(null,seq__8011__$1);
var G__8032 = null;
var G__8033 = (0);
var G__8034 = (0);
seq__8011 = G__8031;
chunk__8012 = G__8032;
count__8013 = G__8033;
i__8014 = G__8034;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__8039 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__8040 = null;
var count__8041 = (0);
var i__8042 = (0);
while(true){
if((i__8042 < count__8041)){
var s = cljs.core._nth.call(null,chunk__8040,i__8042);
var temp__4425__auto___8043 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8043)){
var image_8044 = temp__4425__auto___8043;
var temp__4425__auto___8045__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8044.src,changed);
if(cljs.core.truth_(temp__4425__auto___8045__$1)){
var href_uri_8046 = temp__4425__auto___8045__$1;
image_8044.src = href_uri_8046.makeUnique().toString();
} else {
}
} else {
}

var G__8047 = seq__8039;
var G__8048 = chunk__8040;
var G__8049 = count__8041;
var G__8050 = (i__8042 + (1));
seq__8039 = G__8047;
chunk__8040 = G__8048;
count__8041 = G__8049;
i__8042 = G__8050;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8039);
if(temp__4425__auto__){
var seq__8039__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8039__$1)){
var c__5709__auto__ = cljs.core.chunk_first.call(null,seq__8039__$1);
var G__8051 = cljs.core.chunk_rest.call(null,seq__8039__$1);
var G__8052 = c__5709__auto__;
var G__8053 = cljs.core.count.call(null,c__5709__auto__);
var G__8054 = (0);
seq__8039 = G__8051;
chunk__8040 = G__8052;
count__8041 = G__8053;
i__8042 = G__8054;
continue;
} else {
var s = cljs.core.first.call(null,seq__8039__$1);
var temp__4425__auto___8055__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___8055__$1)){
var image_8056 = temp__4425__auto___8055__$1;
var temp__4425__auto___8057__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_8056.src,changed);
if(cljs.core.truth_(temp__4425__auto___8057__$2)){
var href_uri_8058 = temp__4425__auto___8057__$2;
image_8056.src = href_uri_8058.makeUnique().toString();
} else {
}
} else {
}

var G__8059 = cljs.core.next.call(null,seq__8039__$1);
var G__8060 = null;
var G__8061 = (0);
var G__8062 = (0);
seq__8039 = G__8059;
chunk__8040 = G__8060;
count__8041 = G__8061;
i__8042 = G__8062;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__8065){
var map__8068 = p__8065;
var map__8068__$1 = ((((!((map__8068 == null)))?((((map__8068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8068):map__8068);
var on_jsload = cljs.core.get.call(null,map__8068__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__8068,map__8068__$1,on_jsload){
return (function (p1__8063_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__8063_SHARP_,".js");
});})(map__8068,map__8068__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__8068,map__8068__$1,on_jsload){
return (function (p1__8064_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__8064_SHARP_).makeUnique());
});})(js_files,map__8068,map__8068__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__8068,map__8068__$1,on_jsload){
return (function() { 
var G__8070__delegate = function (_){
return on_jsload.call(null);
};
var G__8070 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__8071__i = 0, G__8071__a = new Array(arguments.length -  0);
while (G__8071__i < G__8071__a.length) {G__8071__a[G__8071__i] = arguments[G__8071__i + 0]; ++G__8071__i;}
  _ = new cljs.core.IndexedSeq(G__8071__a,0);
} 
return G__8070__delegate.call(this,_);};
G__8070.cljs$lang$maxFixedArity = 0;
G__8070.cljs$lang$applyTo = (function (arglist__8072){
var _ = cljs.core.seq(arglist__8072);
return G__8070__delegate(_);
});
G__8070.cljs$core$IFn$_invoke$arity$variadic = G__8070__delegate;
return G__8070;
})()
;})(js_files,map__8068,map__8068__$1,on_jsload))
,((function (js_files,map__8068,map__8068__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__8068,map__8068__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__8077_8081 = cljs.core.seq.call(null,things_to_log);
var chunk__8078_8082 = null;
var count__8079_8083 = (0);
var i__8080_8084 = (0);
while(true){
if((i__8080_8084 < count__8079_8083)){
var t_8085 = cljs.core._nth.call(null,chunk__8078_8082,i__8080_8084);
console.log(t_8085);

var G__8086 = seq__8077_8081;
var G__8087 = chunk__8078_8082;
var G__8088 = count__8079_8083;
var G__8089 = (i__8080_8084 + (1));
seq__8077_8081 = G__8086;
chunk__8078_8082 = G__8087;
count__8079_8083 = G__8088;
i__8080_8084 = G__8089;
continue;
} else {
var temp__4425__auto___8090 = cljs.core.seq.call(null,seq__8077_8081);
if(temp__4425__auto___8090){
var seq__8077_8091__$1 = temp__4425__auto___8090;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8077_8091__$1)){
var c__5709__auto___8092 = cljs.core.chunk_first.call(null,seq__8077_8091__$1);
var G__8093 = cljs.core.chunk_rest.call(null,seq__8077_8091__$1);
var G__8094 = c__5709__auto___8092;
var G__8095 = cljs.core.count.call(null,c__5709__auto___8092);
var G__8096 = (0);
seq__8077_8081 = G__8093;
chunk__8078_8082 = G__8094;
count__8079_8083 = G__8095;
i__8080_8084 = G__8096;
continue;
} else {
var t_8097 = cljs.core.first.call(null,seq__8077_8091__$1);
console.log(t_8097);

var G__8098 = cljs.core.next.call(null,seq__8077_8091__$1);
var G__8099 = null;
var G__8100 = (0);
var G__8101 = (0);
seq__8077_8081 = G__8098;
chunk__8078_8082 = G__8099;
count__8079_8083 = G__8100;
i__8080_8084 = G__8101;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__8103 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__8103,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__8103);

adzerk.boot_reload.reload.reload_css.call(null,G__8103);

adzerk.boot_reload.reload.reload_img.call(null,G__8103);

return G__8103;
});

//# sourceMappingURL=reload.js.map