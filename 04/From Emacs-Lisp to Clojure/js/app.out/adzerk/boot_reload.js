// Compiled by ClojureScript 1.7.122 {}
goog.provide('adzerk.boot_reload');
goog.require('cljs.core');
goog.require('adzerk.boot_reload.client');
goog.require('slide.app');
adzerk.boot_reload.client.connect.call(null,"ws://localhost:49452",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){
return slide.app.init.call(null);
})], null));

//# sourceMappingURL=boot_reload.js.map