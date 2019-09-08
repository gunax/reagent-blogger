goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37698 = arguments.length;
var i__4731__auto___37699 = (0);
while(true){
if((i__4731__auto___37699 < len__4730__auto___37698)){
args__4736__auto__.push((arguments[i__4731__auto___37699]));

var G__37700 = (i__4731__auto___37699 + (1));
i__4731__auto___37699 = G__37700;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37385){
var G__37386 = cljs.core.first(seq37385);
var seq37385__$1 = cljs.core.next(seq37385);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37386,seq37385__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__37401){
var map__37402 = p__37401;
var map__37402__$1 = (((((!((map__37402 == null))))?(((((map__37402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37402):map__37402);
var src = map__37402__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37402__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37402__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37405 = cljs.core.seq(sources);
var chunk__37406 = null;
var count__37407 = (0);
var i__37408 = (0);
while(true){
if((i__37408 < count__37407)){
var map__37421 = chunk__37406.cljs$core$IIndexed$_nth$arity$2(null,i__37408);
var map__37421__$1 = (((((!((map__37421 == null))))?(((((map__37421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37421):map__37421);
var src = map__37421__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37421__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37421__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37421__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37421__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e37424){var e_37702 = e37424;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37702);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37702.message)].join('')));
}

var G__37703 = seq__37405;
var G__37704 = chunk__37406;
var G__37705 = count__37407;
var G__37706 = (i__37408 + (1));
seq__37405 = G__37703;
chunk__37406 = G__37704;
count__37407 = G__37705;
i__37408 = G__37706;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37405);
if(temp__5735__auto__){
var seq__37405__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37405__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37405__$1);
var G__37707 = cljs.core.chunk_rest(seq__37405__$1);
var G__37708 = c__4550__auto__;
var G__37709 = cljs.core.count(c__4550__auto__);
var G__37710 = (0);
seq__37405 = G__37707;
chunk__37406 = G__37708;
count__37407 = G__37709;
i__37408 = G__37710;
continue;
} else {
var map__37428 = cljs.core.first(seq__37405__$1);
var map__37428__$1 = (((((!((map__37428 == null))))?(((((map__37428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37428):map__37428);
var src = map__37428__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37428__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37428__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37428__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37428__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e37431){var e_37712 = e37431;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37712);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37712.message)].join('')));
}

var G__37713 = cljs.core.next(seq__37405__$1);
var G__37714 = null;
var G__37715 = (0);
var G__37716 = (0);
seq__37405 = G__37713;
chunk__37406 = G__37714;
count__37407 = G__37715;
i__37408 = G__37716;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37439 = cljs.core.seq(js_requires);
var chunk__37440 = null;
var count__37441 = (0);
var i__37442 = (0);
while(true){
if((i__37442 < count__37441)){
var js_ns = chunk__37440.cljs$core$IIndexed$_nth$arity$2(null,i__37442);
var require_str_37719 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37719);


var G__37720 = seq__37439;
var G__37721 = chunk__37440;
var G__37722 = count__37441;
var G__37723 = (i__37442 + (1));
seq__37439 = G__37720;
chunk__37440 = G__37721;
count__37441 = G__37722;
i__37442 = G__37723;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37439);
if(temp__5735__auto__){
var seq__37439__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37439__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37439__$1);
var G__37724 = cljs.core.chunk_rest(seq__37439__$1);
var G__37725 = c__4550__auto__;
var G__37726 = cljs.core.count(c__4550__auto__);
var G__37727 = (0);
seq__37439 = G__37724;
chunk__37440 = G__37725;
count__37441 = G__37726;
i__37442 = G__37727;
continue;
} else {
var js_ns = cljs.core.first(seq__37439__$1);
var require_str_37730 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37730);


var G__37731 = cljs.core.next(seq__37439__$1);
var G__37732 = null;
var G__37733 = (0);
var G__37734 = (0);
seq__37439 = G__37731;
chunk__37440 = G__37732;
count__37441 = G__37733;
i__37442 = G__37734;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__37446 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__37446) : callback.call(null,G__37446));
} else {
var G__37447 = shadow.cljs.devtools.client.env.files_url();
var G__37448 = ((function (G__37447){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__37447))
;
var G__37449 = "POST";
var G__37450 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__37451 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37447,G__37448,G__37449,G__37450,G__37451);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__37455){
var map__37456 = p__37455;
var map__37456__$1 = (((((!((map__37456 == null))))?(((((map__37456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37456):map__37456);
var msg = map__37456__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37456__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37456__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__37460 = info;
var map__37460__$1 = (((((!((map__37460 == null))))?(((((map__37460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37460):map__37460);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37460__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37460__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__37460,map__37460__$1,sources,compiled,map__37456,map__37456__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37462(s__37463){
return (new cljs.core.LazySeq(null,((function (map__37460,map__37460__$1,sources,compiled,map__37456,map__37456__$1,msg,info,reload_info){
return (function (){
var s__37463__$1 = s__37463;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37463__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__37468 = cljs.core.first(xs__6292__auto__);
var map__37468__$1 = (((((!((map__37468 == null))))?(((((map__37468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37468):map__37468);
var src = map__37468__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37468__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37468__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__37463__$1,map__37468,map__37468__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37460,map__37460__$1,sources,compiled,map__37456,map__37456__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37462_$_iter__37464(s__37465){
return (new cljs.core.LazySeq(null,((function (s__37463__$1,map__37468,map__37468__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37460,map__37460__$1,sources,compiled,map__37456,map__37456__$1,msg,info,reload_info){
return (function (){
var s__37465__$1 = s__37465;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37465__$1);
if(temp__5735__auto____$1){
var s__37465__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37465__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37465__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37467 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37466 = (0);
while(true){
if((i__37466 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37466);
cljs.core.chunk_append(b__37467,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37737 = (i__37466 + (1));
i__37466 = G__37737;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37467),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37462_$_iter__37464(cljs.core.chunk_rest(s__37465__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37467),null);
}
} else {
var warning = cljs.core.first(s__37465__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37462_$_iter__37464(cljs.core.rest(s__37465__$2)));
}
} else {
return null;
}
break;
}
});})(s__37463__$1,map__37468,map__37468__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37460,map__37460__$1,sources,compiled,map__37456,map__37456__$1,msg,info,reload_info))
,null,null));
});})(s__37463__$1,map__37468,map__37468__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37460,map__37460__$1,sources,compiled,map__37456,map__37456__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37462(cljs.core.rest(s__37463__$1)));
} else {
var G__37738 = cljs.core.rest(s__37463__$1);
s__37463__$1 = G__37738;
continue;
}
} else {
var G__37739 = cljs.core.rest(s__37463__$1);
s__37463__$1 = G__37739;
continue;
}
} else {
return null;
}
break;
}
});})(map__37460,map__37460__$1,sources,compiled,map__37456,map__37456__$1,msg,info,reload_info))
,null,null));
});})(map__37460,map__37460__$1,sources,compiled,map__37456,map__37456__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__37477_37740 = cljs.core.seq(warnings);
var chunk__37478_37741 = null;
var count__37479_37742 = (0);
var i__37480_37743 = (0);
while(true){
if((i__37480_37743 < count__37479_37742)){
var map__37485_37744 = chunk__37478_37741.cljs$core$IIndexed$_nth$arity$2(null,i__37480_37743);
var map__37485_37745__$1 = (((((!((map__37485_37744 == null))))?(((((map__37485_37744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37485_37744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37485_37744):map__37485_37744);
var w_37746 = map__37485_37745__$1;
var msg_37747__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37485_37745__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37485_37745__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37485_37745__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37485_37745__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37750)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37748),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37749),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37747__$1)].join(''));


var G__37751 = seq__37477_37740;
var G__37752 = chunk__37478_37741;
var G__37753 = count__37479_37742;
var G__37754 = (i__37480_37743 + (1));
seq__37477_37740 = G__37751;
chunk__37478_37741 = G__37752;
count__37479_37742 = G__37753;
i__37480_37743 = G__37754;
continue;
} else {
var temp__5735__auto___37758 = cljs.core.seq(seq__37477_37740);
if(temp__5735__auto___37758){
var seq__37477_37759__$1 = temp__5735__auto___37758;
if(cljs.core.chunked_seq_QMARK_(seq__37477_37759__$1)){
var c__4550__auto___37760 = cljs.core.chunk_first(seq__37477_37759__$1);
var G__37761 = cljs.core.chunk_rest(seq__37477_37759__$1);
var G__37762 = c__4550__auto___37760;
var G__37763 = cljs.core.count(c__4550__auto___37760);
var G__37764 = (0);
seq__37477_37740 = G__37761;
chunk__37478_37741 = G__37762;
count__37479_37742 = G__37763;
i__37480_37743 = G__37764;
continue;
} else {
var map__37489_37765 = cljs.core.first(seq__37477_37759__$1);
var map__37489_37766__$1 = (((((!((map__37489_37765 == null))))?(((((map__37489_37765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37489_37765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37489_37765):map__37489_37765);
var w_37767 = map__37489_37766__$1;
var msg_37768__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37489_37766__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37769 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37489_37766__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37770 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37489_37766__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37489_37766__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37771)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37769),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37770),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37768__$1)].join(''));


var G__37772 = cljs.core.next(seq__37477_37759__$1);
var G__37773 = null;
var G__37774 = (0);
var G__37775 = (0);
seq__37477_37740 = G__37772;
chunk__37478_37741 = G__37773;
count__37479_37742 = G__37774;
i__37480_37743 = G__37775;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37460,map__37460__$1,sources,compiled,warnings,map__37456,map__37456__$1,msg,info,reload_info){
return (function (p__37492){
var map__37493 = p__37492;
var map__37493__$1 = (((((!((map__37493 == null))))?(((((map__37493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37493):map__37493);
var src = map__37493__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37493__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37493__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__37460,map__37460__$1,sources,compiled,warnings,map__37456,map__37456__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37460,map__37460__$1,sources,compiled,warnings,map__37456,map__37456__$1,msg,info,reload_info){
return (function (p__37495){
var map__37496 = p__37495;
var map__37496__$1 = (((((!((map__37496 == null))))?(((((map__37496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37496):map__37496);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37496__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__37460,map__37460__$1,sources,compiled,warnings,map__37456,map__37456__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37460,map__37460__$1,sources,compiled,warnings,map__37456,map__37456__$1,msg,info,reload_info){
return (function (p__37498){
var map__37499 = p__37498;
var map__37499__$1 = (((((!((map__37499 == null))))?(((((map__37499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37499):map__37499);
var rc = map__37499__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37499__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__37460,map__37460__$1,sources,compiled,warnings,map__37456,map__37456__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__37460,map__37460__$1,sources,compiled,warnings,map__37456,map__37456__$1,msg,info,reload_info){
return (function (p1__37453_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37453_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__37460,map__37460__$1,sources,compiled,warnings,map__37456,map__37456__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__37503){
var map__37504 = p__37503;
var map__37504__$1 = (((((!((map__37504 == null))))?(((((map__37504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37504):map__37504);
var msg = map__37504__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37504__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37507 = cljs.core.seq(updates);
var chunk__37509 = null;
var count__37510 = (0);
var i__37511 = (0);
while(true){
if((i__37511 < count__37510)){
var path = chunk__37509.cljs$core$IIndexed$_nth$arity$2(null,i__37511);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37612_37780 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37624_37781 = null;
var count__37625_37782 = (0);
var i__37626_37783 = (0);
while(true){
if((i__37626_37783 < count__37625_37782)){
var node_37785 = chunk__37624_37781.cljs$core$IIndexed$_nth$arity$2(null,i__37626_37783);
var path_match_37787 = shadow.cljs.devtools.client.browser.match_paths(node_37785.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37787)){
var new_link_37789 = (function (){var G__37637 = node_37785.cloneNode(true);
G__37637.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37787),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37637;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37787], 0));

goog.dom.insertSiblingAfter(new_link_37789,node_37785);

goog.dom.removeNode(node_37785);


var G__37790 = seq__37612_37780;
var G__37791 = chunk__37624_37781;
var G__37792 = count__37625_37782;
var G__37793 = (i__37626_37783 + (1));
seq__37612_37780 = G__37790;
chunk__37624_37781 = G__37791;
count__37625_37782 = G__37792;
i__37626_37783 = G__37793;
continue;
} else {
var G__37794 = seq__37612_37780;
var G__37795 = chunk__37624_37781;
var G__37796 = count__37625_37782;
var G__37797 = (i__37626_37783 + (1));
seq__37612_37780 = G__37794;
chunk__37624_37781 = G__37795;
count__37625_37782 = G__37796;
i__37626_37783 = G__37797;
continue;
}
} else {
var temp__5735__auto___37798 = cljs.core.seq(seq__37612_37780);
if(temp__5735__auto___37798){
var seq__37612_37799__$1 = temp__5735__auto___37798;
if(cljs.core.chunked_seq_QMARK_(seq__37612_37799__$1)){
var c__4550__auto___37800 = cljs.core.chunk_first(seq__37612_37799__$1);
var G__37801 = cljs.core.chunk_rest(seq__37612_37799__$1);
var G__37802 = c__4550__auto___37800;
var G__37803 = cljs.core.count(c__4550__auto___37800);
var G__37804 = (0);
seq__37612_37780 = G__37801;
chunk__37624_37781 = G__37802;
count__37625_37782 = G__37803;
i__37626_37783 = G__37804;
continue;
} else {
var node_37805 = cljs.core.first(seq__37612_37799__$1);
var path_match_37806 = shadow.cljs.devtools.client.browser.match_paths(node_37805.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37806)){
var new_link_37807 = (function (){var G__37639 = node_37805.cloneNode(true);
G__37639.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37806),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37639;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37806], 0));

goog.dom.insertSiblingAfter(new_link_37807,node_37805);

goog.dom.removeNode(node_37805);


var G__37808 = cljs.core.next(seq__37612_37799__$1);
var G__37809 = null;
var G__37810 = (0);
var G__37811 = (0);
seq__37612_37780 = G__37808;
chunk__37624_37781 = G__37809;
count__37625_37782 = G__37810;
i__37626_37783 = G__37811;
continue;
} else {
var G__37814 = cljs.core.next(seq__37612_37799__$1);
var G__37815 = null;
var G__37816 = (0);
var G__37817 = (0);
seq__37612_37780 = G__37814;
chunk__37624_37781 = G__37815;
count__37625_37782 = G__37816;
i__37626_37783 = G__37817;
continue;
}
}
} else {
}
}
break;
}


var G__37822 = seq__37507;
var G__37823 = chunk__37509;
var G__37824 = count__37510;
var G__37825 = (i__37511 + (1));
seq__37507 = G__37822;
chunk__37509 = G__37823;
count__37510 = G__37824;
i__37511 = G__37825;
continue;
} else {
var G__37830 = seq__37507;
var G__37831 = chunk__37509;
var G__37832 = count__37510;
var G__37833 = (i__37511 + (1));
seq__37507 = G__37830;
chunk__37509 = G__37831;
count__37510 = G__37832;
i__37511 = G__37833;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37507);
if(temp__5735__auto__){
var seq__37507__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37507__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37507__$1);
var G__37834 = cljs.core.chunk_rest(seq__37507__$1);
var G__37835 = c__4550__auto__;
var G__37836 = cljs.core.count(c__4550__auto__);
var G__37837 = (0);
seq__37507 = G__37834;
chunk__37509 = G__37835;
count__37510 = G__37836;
i__37511 = G__37837;
continue;
} else {
var path = cljs.core.first(seq__37507__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37640_37838 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37643_37839 = null;
var count__37644_37840 = (0);
var i__37645_37841 = (0);
while(true){
if((i__37645_37841 < count__37644_37840)){
var node_37842 = chunk__37643_37839.cljs$core$IIndexed$_nth$arity$2(null,i__37645_37841);
var path_match_37843 = shadow.cljs.devtools.client.browser.match_paths(node_37842.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37843)){
var new_link_37844 = (function (){var G__37654 = node_37842.cloneNode(true);
G__37654.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37843),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37654;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37843], 0));

goog.dom.insertSiblingAfter(new_link_37844,node_37842);

goog.dom.removeNode(node_37842);


var G__37845 = seq__37640_37838;
var G__37846 = chunk__37643_37839;
var G__37847 = count__37644_37840;
var G__37848 = (i__37645_37841 + (1));
seq__37640_37838 = G__37845;
chunk__37643_37839 = G__37846;
count__37644_37840 = G__37847;
i__37645_37841 = G__37848;
continue;
} else {
var G__37849 = seq__37640_37838;
var G__37851 = chunk__37643_37839;
var G__37852 = count__37644_37840;
var G__37853 = (i__37645_37841 + (1));
seq__37640_37838 = G__37849;
chunk__37643_37839 = G__37851;
count__37644_37840 = G__37852;
i__37645_37841 = G__37853;
continue;
}
} else {
var temp__5735__auto___37854__$1 = cljs.core.seq(seq__37640_37838);
if(temp__5735__auto___37854__$1){
var seq__37640_37855__$1 = temp__5735__auto___37854__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37640_37855__$1)){
var c__4550__auto___37857 = cljs.core.chunk_first(seq__37640_37855__$1);
var G__37858 = cljs.core.chunk_rest(seq__37640_37855__$1);
var G__37859 = c__4550__auto___37857;
var G__37860 = cljs.core.count(c__4550__auto___37857);
var G__37861 = (0);
seq__37640_37838 = G__37858;
chunk__37643_37839 = G__37859;
count__37644_37840 = G__37860;
i__37645_37841 = G__37861;
continue;
} else {
var node_37862 = cljs.core.first(seq__37640_37855__$1);
var path_match_37863 = shadow.cljs.devtools.client.browser.match_paths(node_37862.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37863)){
var new_link_37864 = (function (){var G__37655 = node_37862.cloneNode(true);
G__37655.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37863),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37655;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37863], 0));

goog.dom.insertSiblingAfter(new_link_37864,node_37862);

goog.dom.removeNode(node_37862);


var G__37865 = cljs.core.next(seq__37640_37855__$1);
var G__37866 = null;
var G__37867 = (0);
var G__37868 = (0);
seq__37640_37838 = G__37865;
chunk__37643_37839 = G__37866;
count__37644_37840 = G__37867;
i__37645_37841 = G__37868;
continue;
} else {
var G__37869 = cljs.core.next(seq__37640_37855__$1);
var G__37870 = null;
var G__37871 = (0);
var G__37872 = (0);
seq__37640_37838 = G__37869;
chunk__37643_37839 = G__37870;
count__37644_37840 = G__37871;
i__37645_37841 = G__37872;
continue;
}
}
} else {
}
}
break;
}


var G__37873 = cljs.core.next(seq__37507__$1);
var G__37874 = null;
var G__37875 = (0);
var G__37876 = (0);
seq__37507 = G__37873;
chunk__37509 = G__37874;
count__37510 = G__37875;
i__37511 = G__37876;
continue;
} else {
var G__37877 = cljs.core.next(seq__37507__$1);
var G__37878 = null;
var G__37879 = (0);
var G__37880 = (0);
seq__37507 = G__37877;
chunk__37509 = G__37878;
count__37510 = G__37879;
i__37511 = G__37880;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
return (0,eval)(js);;
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__37658){
var map__37659 = p__37658;
var map__37659__$1 = (((((!((map__37659 == null))))?(((((map__37659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37659):map__37659);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37659__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37659__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__37659,map__37659__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__37659,map__37659__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__37663,done){
var map__37666 = p__37663;
var map__37666__$1 = (((((!((map__37666 == null))))?(((((map__37666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37666):map__37666);
var msg = map__37666__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37666__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37666__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37666__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37666__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37666,map__37666__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__37668){
var map__37669 = p__37668;
var map__37669__$1 = (((((!((map__37669 == null))))?(((((map__37669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37669):map__37669);
var src = map__37669__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37669__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__37666,map__37666__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__37666,map__37666__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e37671){var e = e37671;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}});})(sources_to_load,map__37666,map__37666__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__37675,done){
var map__37676 = p__37675;
var map__37676__$1 = (((((!((map__37676 == null))))?(((((map__37676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37676):map__37676);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37676__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37676__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__37676,map__37676__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__37676,map__37676__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__37678){
var map__37679 = p__37678;
var map__37679__$1 = (((((!((map__37679 == null))))?(((((map__37679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37679):map__37679);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37679__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37679__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__37681,done){
var map__37682 = p__37681;
var map__37682__$1 = (((((!((map__37682 == null))))?(((((map__37682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37682):map__37682);
var msg = map__37682__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37682__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__37684_37892 = type;
var G__37684_37893__$1 = (((G__37684_37892 instanceof cljs.core.Keyword))?G__37684_37892.fqn:null);
switch (G__37684_37893__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__37686 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__37687 = ((function (G__37686){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__37686))
;
var G__37688 = "POST";
var G__37689 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__37690 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37686,G__37687,G__37688,G__37689,G__37690);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e37692){var e = e37692;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___37928 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___37928)){
var s_37929 = temp__5735__auto___37928;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_37929.onclose = ((function (s_37929,temp__5735__auto___37928){
return (function (e){
return null;
});})(s_37929,temp__5735__auto___37928))
;

s_37929.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
