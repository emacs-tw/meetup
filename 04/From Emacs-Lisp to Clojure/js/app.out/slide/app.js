// Compiled by ClojureScript 1.7.122 {}
goog.provide('slide.app');
goog.require('cljs.core');
goog.require('hipo.core');
/**
 * Add hiccup element to id.
 */
slide.app.add_element_to_id = (function slide$app$add_element_to_id(id,body){
var dom = document.getElementById(id);
var el = (function (){var v8326 = body;
var el__6577__auto__ = hipo.interpreter.create.call(null,v8326,null);
hipo.core.set_hiccup_BANG_.call(null,el__6577__auto__,v8326);

return el__6577__auto__;
})();
return dom.innerHTML = el.innerHTML;
});
slide.app.add_image_with_link = (function slide$app$add_image_with_link(type,id,child){
var ilink = (function slide$app$add_image_with_link_$_ilink(p__8352){
var map__8356 = p__8352;
var map__8356__$1 = ((((!((map__8356 == null)))?((((map__8356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8356):map__8356);
var image = cljs.core.get.call(null,map__8356__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var url = cljs.core.get.call(null,map__8356__$1,new cljs.core.Keyword(null,"url","url",276297046));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-3","div.col-xs-3",-331276165),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.thumbnail","a.thumbnail",-341788995),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),url,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.img-responsive","img.img-responsive",1870698920),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str((function (){var G__8358 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__8358) {
case "cljs":
return "picts/books-cljs";

break;
case "clj":
return "picts/books-clj";

break;
default:
return "picts";

}
})()),cljs.core.str("/"),cljs.core.str(image)].join('')], null)], null)], null)], null);
});
return slide.app.add_element_to_id.call(null,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(function (){var iter__5678__auto__ = (function slide$app$add_image_with_link_$_iter__8359(s__8360){
return (new cljs.core.LazySeq(null,(function (){
var s__8360__$1 = s__8360;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8360__$1);
if(temp__4425__auto__){
var s__8360__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8360__$2)){
var c__5676__auto__ = cljs.core.chunk_first.call(null,s__8360__$2);
var size__5677__auto__ = cljs.core.count.call(null,c__5676__auto__);
var b__8362 = cljs.core.chunk_buffer.call(null,size__5677__auto__);
if((function (){var i__8361 = (0);
while(true){
if((i__8361 < size__5677__auto__)){
var c = cljs.core._nth.call(null,c__5676__auto__,i__8361);
cljs.core.chunk_append.call(null,b__8362,ilink.call(null,c));

var G__8364 = (i__8361 + (1));
i__8361 = G__8364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8362),slide$app$add_image_with_link_$_iter__8359.call(null,cljs.core.chunk_rest.call(null,s__8360__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8362),null);
}
} else {
var c = cljs.core.first.call(null,s__8360__$2);
return cljs.core.cons.call(null,ilink.call(null,c),slide$app$add_image_with_link_$_iter__8359.call(null,cljs.core.rest.call(null,s__8360__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5678__auto__.call(null,child);
})()], null));
});
slide.app.clojure_books_1 = (function slide$app$clojure_books_1(){
return slide.app.add_image_with_link.call(null,new cljs.core.Keyword(null,"clj","clj",-660495428),"cljbook1",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"Practical Clojure.png",new cljs.core.Keyword(null,"url","url",276297046),"http://amzn.com/1430272317"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"Programming Clojure.png",new cljs.core.Keyword(null,"url","url",276297046),"http://amzn.com/1934356867"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"The Joy of Clojure.png",new cljs.core.Keyword(null,"url","url",276297046),"http://amzn.com/1617291412"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"Clojure Cookbook.png",new cljs.core.Keyword(null,"url","url",276297046),"http://amzn.com/1449366171"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"Living Clojure.png",new cljs.core.Keyword(null,"url","url",276297046),"http://amzn.com/1491909048"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"Clojure Programming.png",new cljs.core.Keyword(null,"url","url",276297046),"http://amzn.com/1449394701"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"Clojure for the Brave and True.png",new cljs.core.Keyword(null,"url","url",276297046),"http://www.braveclojure.com/"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"Clojure in Action.png",new cljs.core.Keyword(null,"url","url",276297046),"http://amzn.com/1617291528"], null)], null));
});
slide.app.clojure_books_2 = (function slide$app$clojure_books_2(){
return slide.app.add_image_with_link.call(null,new cljs.core.Keyword(null,"clj","clj",-660495428),"cljbook2",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"Clojure Applied.png",new cljs.core.Keyword(null,"url","url",276297046),"http://amzn.com/1680500740"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"Mastering Clojure Macros.png",new cljs.core.Keyword(null,"url","url",276297046),"http://amzn.com/1941222226"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"Clojure Data Structures and Algorithms Cookbook.png",new cljs.core.Keyword(null,"url","url",276297046),"http://amzn.com/1785281453"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"Clojure High Performance Programming.png",new cljs.core.Keyword(null,"url","url",276297046),"http://amzn.com/1785283642"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"Clojure Recipes.png",new cljs.core.Keyword(null,"url","url",276297046),"http://amzn.com/0321927737"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"Clojure Reactive Programming.png",new cljs.core.Keyword(null,"url","url",276297046),"http://amzn.com/1783986662"], null)], null));
});
slide.app.clojure_books_3 = (function slide$app$clojure_books_3(){
return slide.app.add_image_with_link.call(null,new cljs.core.Keyword(null,"clj","clj",-660495428),"cljbook3",new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"Clojure for Machine Learning.png",new cljs.core.Keyword(null,"url","url",276297046),"http://amzn.com/1783284358"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"Clojure for Finance.png",new cljs.core.Keyword(null,"url","url",276297046),"http://amzn.com/1785289284"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"Clojure for Data Science.png",new cljs.core.Keyword(null,"url","url",276297046),"http://amzn.com/1784397180"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"Clojure Web Development Essentials.png",new cljs.core.Keyword(null,"url","url",276297046),"http://amzn.com/1784392227"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"Clojure Data Analysis Cookbook.png",new cljs.core.Keyword(null,"url","url",276297046),"http://amzn.com/1784390291"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"Web Development with Clojure.png",new cljs.core.Keyword(null,"url","url",276297046),"http://amzn.com/1680500821"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"Clojure for Domain-specific Languages.png",new cljs.core.Keyword(null,"url","url",276297046),"http://amzn.com/1782166505"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"Mastering Clojure Data Analysis.png",new cljs.core.Keyword(null,"url","url",276297046),"http://amzn.com/1783284137"], null)], null));
});
slide.app.cljs_books_1 = (function slide$app$cljs_books_1(){
return slide.app.add_image_with_link.call(null,new cljs.core.Keyword(null,"cljs","cljs",1492417629),"cljsbook1",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"ClojureScript Up and Running.png",new cljs.core.Keyword(null,"url","url",276297046),"http://amzn.com/1491924993"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"Learning ClojureScript.png",new cljs.core.Keyword(null,"url","url",276297046),"http://amzn.com/B016WKHQ1C"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"Etudes for ClojureScript.png",new cljs.core.Keyword(null,"url","url",276297046),"http://amzn.com/B0184Q1RU8"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"ClojureScript Unraveled.png",new cljs.core.Keyword(null,"url","url",276297046),"https://leanpub.com/clojurescript-unraveled"], null)], null));
});
slide.app.build_system = (function slide$app$build_system(){
var ilink = (function (p__8372){
var map__8373 = p__8372;
var map__8373__$1 = ((((!((map__8373 == null)))?((((map__8373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8373):map__8373);
var image = cljs.core.get.call(null,map__8373__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var url = cljs.core.get.call(null,map__8373__$1,new cljs.core.Keyword(null,"url","url",276297046));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-xs-4","div.col-xs-4",-990350100),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.thumbnail","a.thumbnail",-341788995),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),url,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.img-responsive","img.img-responsive",1870698920),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str("picts/"),cljs.core.str(image)].join('')], null)], null)], null)], null);
});
var child = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"leiningen-text.png",new cljs.core.Keyword(null,"url","url",276297046),"http://leiningen.org/"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"image","image",-58725096),"boot-text.png",new cljs.core.Keyword(null,"url","url",276297046),"http://boot-clj.com/"], null)], null);
return slide.app.add_element_to_id.call(null,"build-system",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(function (){var iter__5678__auto__ = ((function (ilink,child){
return (function slide$app$build_system_$_iter__8375(s__8376){
return (new cljs.core.LazySeq(null,((function (ilink,child){
return (function (){
var s__8376__$1 = s__8376;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8376__$1);
if(temp__4425__auto__){
var s__8376__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8376__$2)){
var c__5676__auto__ = cljs.core.chunk_first.call(null,s__8376__$2);
var size__5677__auto__ = cljs.core.count.call(null,c__5676__auto__);
var b__8378 = cljs.core.chunk_buffer.call(null,size__5677__auto__);
if((function (){var i__8377 = (0);
while(true){
if((i__8377 < size__5677__auto__)){
var c = cljs.core._nth.call(null,c__5676__auto__,i__8377);
cljs.core.chunk_append.call(null,b__8378,ilink.call(null,c));

var G__8379 = (i__8377 + (1));
i__8377 = G__8379;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8378),slide$app$build_system_$_iter__8375.call(null,cljs.core.chunk_rest.call(null,s__8376__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8378),null);
}
} else {
var c = cljs.core.first.call(null,s__8376__$2);
return cljs.core.cons.call(null,ilink.call(null,c),slide$app$build_system_$_iter__8375.call(null,cljs.core.rest.call(null,s__8376__$2)));
}
} else {
return null;
}
break;
}
});})(ilink,child))
,null,null));
});})(ilink,child))
;
return iter__5678__auto__.call(null,child);
})()], null));
});
slide.app.init = (function slide$app$init(){
console.log("load slide.app.cljs");

slide.app.build_system.call(null);

slide.app.clojure_books_1.call(null);

slide.app.clojure_books_2.call(null);

slide.app.clojure_books_3.call(null);

return slide.app.cljs_books_1.call(null);
});
goog.exportSymbol('slide.app.init', slide.app.init);

//# sourceMappingURL=app.js.map