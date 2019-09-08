goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35184 = coll;
var G__35185 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35184,G__35185) : shadow.dom.lazy_native_coll_seq.call(null,G__35184,G__35185));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__35207 = arguments.length;
switch (G__35207) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__35216 = arguments.length;
switch (G__35216) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35223 = arguments.length;
switch (G__35223) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35228 = arguments.length;
switch (G__35228) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35236 = arguments.length;
switch (G__35236) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__35240 = document;
var G__35241 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35240,G__35241);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__35243 = shadow.dom.dom_node(parent);
var G__35244 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35243,G__35244);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__35245 = shadow.dom.dom_node(el);
var G__35246 = cls;
return goog.dom.classlist.add(G__35245,G__35246);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__35249 = shadow.dom.dom_node(el);
var G__35250 = cls;
return goog.dom.classlist.remove(G__35249,G__35250);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35252 = arguments.length;
switch (G__35252) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__35254 = shadow.dom.dom_node(el);
var G__35255 = cls;
return goog.dom.classlist.toggle(G__35254,G__35255);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35257){if((e35257 instanceof Object)){
var e = e35257;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35257;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35265 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35266 = null;
var count__35267 = (0);
var i__35268 = (0);
while(true){
if((i__35268 < count__35267)){
var el = chunk__35266.cljs$core$IIndexed$_nth$arity$2(null,i__35268);
var handler_35951__$1 = ((function (seq__35265,chunk__35266,count__35267,i__35268,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35265,chunk__35266,count__35267,i__35268,el))
;
var G__35279_35952 = el;
var G__35280_35953 = cljs.core.name(ev);
var G__35281_35954 = handler_35951__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35279_35952,G__35280_35953,G__35281_35954) : shadow.dom.dom_listen.call(null,G__35279_35952,G__35280_35953,G__35281_35954));


var G__35958 = seq__35265;
var G__35959 = chunk__35266;
var G__35960 = count__35267;
var G__35961 = (i__35268 + (1));
seq__35265 = G__35958;
chunk__35266 = G__35959;
count__35267 = G__35960;
i__35268 = G__35961;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35265);
if(temp__5735__auto__){
var seq__35265__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35265__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35265__$1);
var G__35964 = cljs.core.chunk_rest(seq__35265__$1);
var G__35965 = c__4550__auto__;
var G__35966 = cljs.core.count(c__4550__auto__);
var G__35967 = (0);
seq__35265 = G__35964;
chunk__35266 = G__35965;
count__35267 = G__35966;
i__35268 = G__35967;
continue;
} else {
var el = cljs.core.first(seq__35265__$1);
var handler_35970__$1 = ((function (seq__35265,chunk__35266,count__35267,i__35268,el,seq__35265__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35265,chunk__35266,count__35267,i__35268,el,seq__35265__$1,temp__5735__auto__))
;
var G__35284_35972 = el;
var G__35285_35973 = cljs.core.name(ev);
var G__35286_35974 = handler_35970__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35284_35972,G__35285_35973,G__35286_35974) : shadow.dom.dom_listen.call(null,G__35284_35972,G__35285_35973,G__35286_35974));


var G__35977 = cljs.core.next(seq__35265__$1);
var G__35978 = null;
var G__35979 = (0);
var G__35980 = (0);
seq__35265 = G__35977;
chunk__35266 = G__35978;
count__35267 = G__35979;
i__35268 = G__35980;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35291 = arguments.length;
switch (G__35291) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__35292 = shadow.dom.dom_node(el);
var G__35293 = cljs.core.name(ev);
var G__35294 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35292,G__35293,G__35294) : shadow.dom.dom_listen.call(null,G__35292,G__35293,G__35294));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__35295 = shadow.dom.dom_node(el);
var G__35296 = cljs.core.name(ev);
var G__35297 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__35295,G__35296,G__35297) : shadow.dom.dom_listen_remove.call(null,G__35295,G__35296,G__35297));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35301 = cljs.core.seq(events);
var chunk__35302 = null;
var count__35303 = (0);
var i__35304 = (0);
while(true){
if((i__35304 < count__35303)){
var vec__35314 = chunk__35302.cljs$core$IIndexed$_nth$arity$2(null,i__35304);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35314,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35314,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35988 = seq__35301;
var G__35989 = chunk__35302;
var G__35990 = count__35303;
var G__35991 = (i__35304 + (1));
seq__35301 = G__35988;
chunk__35302 = G__35989;
count__35303 = G__35990;
i__35304 = G__35991;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35301);
if(temp__5735__auto__){
var seq__35301__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35301__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35301__$1);
var G__35992 = cljs.core.chunk_rest(seq__35301__$1);
var G__35993 = c__4550__auto__;
var G__35994 = cljs.core.count(c__4550__auto__);
var G__35995 = (0);
seq__35301 = G__35992;
chunk__35302 = G__35993;
count__35303 = G__35994;
i__35304 = G__35995;
continue;
} else {
var vec__35318 = cljs.core.first(seq__35301__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35318,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35318,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35998 = cljs.core.next(seq__35301__$1);
var G__35999 = null;
var G__36000 = (0);
var G__36001 = (0);
seq__35301 = G__35998;
chunk__35302 = G__35999;
count__35303 = G__36000;
i__35304 = G__36001;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35322 = cljs.core.seq(styles);
var chunk__35323 = null;
var count__35324 = (0);
var i__35325 = (0);
while(true){
if((i__35325 < count__35324)){
var vec__35340 = chunk__35323.cljs$core$IIndexed$_nth$arity$2(null,i__35325);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35340,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35340,(1),null);
var G__35343_36005 = dom;
var G__35344_36006 = cljs.core.name(k);
var G__35345_36007 = (((v == null))?"":v);
goog.style.setStyle(G__35343_36005,G__35344_36006,G__35345_36007);


var G__36009 = seq__35322;
var G__36010 = chunk__35323;
var G__36011 = count__35324;
var G__36012 = (i__35325 + (1));
seq__35322 = G__36009;
chunk__35323 = G__36010;
count__35324 = G__36011;
i__35325 = G__36012;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35322);
if(temp__5735__auto__){
var seq__35322__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35322__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35322__$1);
var G__36013 = cljs.core.chunk_rest(seq__35322__$1);
var G__36014 = c__4550__auto__;
var G__36015 = cljs.core.count(c__4550__auto__);
var G__36016 = (0);
seq__35322 = G__36013;
chunk__35323 = G__36014;
count__35324 = G__36015;
i__35325 = G__36016;
continue;
} else {
var vec__35346 = cljs.core.first(seq__35322__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35346,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35346,(1),null);
var G__35349_36019 = dom;
var G__35350_36020 = cljs.core.name(k);
var G__35351_36021 = (((v == null))?"":v);
goog.style.setStyle(G__35349_36019,G__35350_36020,G__35351_36021);


var G__36024 = cljs.core.next(seq__35322__$1);
var G__36025 = null;
var G__36026 = (0);
var G__36027 = (0);
seq__35322 = G__36024;
chunk__35323 = G__36025;
count__35324 = G__36026;
i__35325 = G__36027;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35353_36029 = key;
var G__35353_36030__$1 = (((G__35353_36029 instanceof cljs.core.Keyword))?G__35353_36029.fqn:null);
switch (G__35353_36030__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_36035 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_36035,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_36035,"aria-");
}
})())){
el.setAttribute(ks_36035,value);
} else {
(el[ks_36035] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__35363 = shadow.dom.dom_node(el);
var G__35364 = cls;
return goog.dom.classlist.contains(G__35363,G__35364);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35371){
var map__35372 = p__35371;
var map__35372__$1 = (((((!((map__35372 == null))))?(((((map__35372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35372):map__35372);
var props = map__35372__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35372__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35374 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35374,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35374,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35374,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35378 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35378,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35378;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35381 = arguments.length;
switch (G__35381) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35384){
var vec__35386 = p__35384;
var seq__35387 = cljs.core.seq(vec__35386);
var first__35388 = cljs.core.first(seq__35387);
var seq__35387__$1 = cljs.core.next(seq__35387);
var nn = first__35388;
var first__35388__$1 = cljs.core.first(seq__35387__$1);
var seq__35387__$2 = cljs.core.next(seq__35387__$1);
var np = first__35388__$1;
var nc = seq__35387__$2;
var node = vec__35386;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35390 = nn;
var G__35391 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35390,G__35391) : create_fn.call(null,G__35390,G__35391));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35392 = nn;
var G__35393 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35392,G__35393) : create_fn.call(null,G__35392,G__35393));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35396 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35396,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35396,(1),null);
var seq__35399_36055 = cljs.core.seq(node_children);
var chunk__35400_36056 = null;
var count__35401_36057 = (0);
var i__35402_36058 = (0);
while(true){
if((i__35402_36058 < count__35401_36057)){
var child_struct_36059 = chunk__35400_36056.cljs$core$IIndexed$_nth$arity$2(null,i__35402_36058);
var children_36060 = shadow.dom.dom_node(child_struct_36059);
if(cljs.core.seq_QMARK_(children_36060)){
var seq__35424_36061 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36060));
var chunk__35426_36062 = null;
var count__35427_36063 = (0);
var i__35428_36064 = (0);
while(true){
if((i__35428_36064 < count__35427_36063)){
var child_36065 = chunk__35426_36062.cljs$core$IIndexed$_nth$arity$2(null,i__35428_36064);
if(cljs.core.truth_(child_36065)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36065);


var G__36066 = seq__35424_36061;
var G__36067 = chunk__35426_36062;
var G__36068 = count__35427_36063;
var G__36069 = (i__35428_36064 + (1));
seq__35424_36061 = G__36066;
chunk__35426_36062 = G__36067;
count__35427_36063 = G__36068;
i__35428_36064 = G__36069;
continue;
} else {
var G__36073 = seq__35424_36061;
var G__36074 = chunk__35426_36062;
var G__36075 = count__35427_36063;
var G__36076 = (i__35428_36064 + (1));
seq__35424_36061 = G__36073;
chunk__35426_36062 = G__36074;
count__35427_36063 = G__36075;
i__35428_36064 = G__36076;
continue;
}
} else {
var temp__5735__auto___36077 = cljs.core.seq(seq__35424_36061);
if(temp__5735__auto___36077){
var seq__35424_36078__$1 = temp__5735__auto___36077;
if(cljs.core.chunked_seq_QMARK_(seq__35424_36078__$1)){
var c__4550__auto___36079 = cljs.core.chunk_first(seq__35424_36078__$1);
var G__36080 = cljs.core.chunk_rest(seq__35424_36078__$1);
var G__36081 = c__4550__auto___36079;
var G__36082 = cljs.core.count(c__4550__auto___36079);
var G__36083 = (0);
seq__35424_36061 = G__36080;
chunk__35426_36062 = G__36081;
count__35427_36063 = G__36082;
i__35428_36064 = G__36083;
continue;
} else {
var child_36084 = cljs.core.first(seq__35424_36078__$1);
if(cljs.core.truth_(child_36084)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36084);


var G__36085 = cljs.core.next(seq__35424_36078__$1);
var G__36086 = null;
var G__36087 = (0);
var G__36088 = (0);
seq__35424_36061 = G__36085;
chunk__35426_36062 = G__36086;
count__35427_36063 = G__36087;
i__35428_36064 = G__36088;
continue;
} else {
var G__36089 = cljs.core.next(seq__35424_36078__$1);
var G__36090 = null;
var G__36091 = (0);
var G__36092 = (0);
seq__35424_36061 = G__36089;
chunk__35426_36062 = G__36090;
count__35427_36063 = G__36091;
i__35428_36064 = G__36092;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36060);
}


var G__36093 = seq__35399_36055;
var G__36094 = chunk__35400_36056;
var G__36095 = count__35401_36057;
var G__36096 = (i__35402_36058 + (1));
seq__35399_36055 = G__36093;
chunk__35400_36056 = G__36094;
count__35401_36057 = G__36095;
i__35402_36058 = G__36096;
continue;
} else {
var temp__5735__auto___36098 = cljs.core.seq(seq__35399_36055);
if(temp__5735__auto___36098){
var seq__35399_36101__$1 = temp__5735__auto___36098;
if(cljs.core.chunked_seq_QMARK_(seq__35399_36101__$1)){
var c__4550__auto___36102 = cljs.core.chunk_first(seq__35399_36101__$1);
var G__36103 = cljs.core.chunk_rest(seq__35399_36101__$1);
var G__36104 = c__4550__auto___36102;
var G__36105 = cljs.core.count(c__4550__auto___36102);
var G__36106 = (0);
seq__35399_36055 = G__36103;
chunk__35400_36056 = G__36104;
count__35401_36057 = G__36105;
i__35402_36058 = G__36106;
continue;
} else {
var child_struct_36107 = cljs.core.first(seq__35399_36101__$1);
var children_36108 = shadow.dom.dom_node(child_struct_36107);
if(cljs.core.seq_QMARK_(children_36108)){
var seq__35435_36109 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36108));
var chunk__35437_36110 = null;
var count__35438_36111 = (0);
var i__35439_36112 = (0);
while(true){
if((i__35439_36112 < count__35438_36111)){
var child_36113 = chunk__35437_36110.cljs$core$IIndexed$_nth$arity$2(null,i__35439_36112);
if(cljs.core.truth_(child_36113)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36113);


var G__36114 = seq__35435_36109;
var G__36115 = chunk__35437_36110;
var G__36116 = count__35438_36111;
var G__36117 = (i__35439_36112 + (1));
seq__35435_36109 = G__36114;
chunk__35437_36110 = G__36115;
count__35438_36111 = G__36116;
i__35439_36112 = G__36117;
continue;
} else {
var G__36118 = seq__35435_36109;
var G__36119 = chunk__35437_36110;
var G__36120 = count__35438_36111;
var G__36121 = (i__35439_36112 + (1));
seq__35435_36109 = G__36118;
chunk__35437_36110 = G__36119;
count__35438_36111 = G__36120;
i__35439_36112 = G__36121;
continue;
}
} else {
var temp__5735__auto___36122__$1 = cljs.core.seq(seq__35435_36109);
if(temp__5735__auto___36122__$1){
var seq__35435_36123__$1 = temp__5735__auto___36122__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35435_36123__$1)){
var c__4550__auto___36124 = cljs.core.chunk_first(seq__35435_36123__$1);
var G__36125 = cljs.core.chunk_rest(seq__35435_36123__$1);
var G__36126 = c__4550__auto___36124;
var G__36127 = cljs.core.count(c__4550__auto___36124);
var G__36128 = (0);
seq__35435_36109 = G__36125;
chunk__35437_36110 = G__36126;
count__35438_36111 = G__36127;
i__35439_36112 = G__36128;
continue;
} else {
var child_36129 = cljs.core.first(seq__35435_36123__$1);
if(cljs.core.truth_(child_36129)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36129);


var G__36130 = cljs.core.next(seq__35435_36123__$1);
var G__36131 = null;
var G__36132 = (0);
var G__36133 = (0);
seq__35435_36109 = G__36130;
chunk__35437_36110 = G__36131;
count__35438_36111 = G__36132;
i__35439_36112 = G__36133;
continue;
} else {
var G__36134 = cljs.core.next(seq__35435_36123__$1);
var G__36135 = null;
var G__36136 = (0);
var G__36137 = (0);
seq__35435_36109 = G__36134;
chunk__35437_36110 = G__36135;
count__35438_36111 = G__36136;
i__35439_36112 = G__36137;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36108);
}


var G__36138 = cljs.core.next(seq__35399_36101__$1);
var G__36139 = null;
var G__36140 = (0);
var G__36141 = (0);
seq__35399_36055 = G__36138;
chunk__35400_36056 = G__36139;
count__35401_36057 = G__36140;
i__35402_36058 = G__36141;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__35452 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__35452);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35454 = cljs.core.seq(node);
var chunk__35455 = null;
var count__35456 = (0);
var i__35457 = (0);
while(true){
if((i__35457 < count__35456)){
var n = chunk__35455.cljs$core$IIndexed$_nth$arity$2(null,i__35457);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36145 = seq__35454;
var G__36146 = chunk__35455;
var G__36147 = count__35456;
var G__36148 = (i__35457 + (1));
seq__35454 = G__36145;
chunk__35455 = G__36146;
count__35456 = G__36147;
i__35457 = G__36148;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35454);
if(temp__5735__auto__){
var seq__35454__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35454__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35454__$1);
var G__36149 = cljs.core.chunk_rest(seq__35454__$1);
var G__36150 = c__4550__auto__;
var G__36151 = cljs.core.count(c__4550__auto__);
var G__36152 = (0);
seq__35454 = G__36149;
chunk__35455 = G__36150;
count__35456 = G__36151;
i__35457 = G__36152;
continue;
} else {
var n = cljs.core.first(seq__35454__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36153 = cljs.core.next(seq__35454__$1);
var G__36154 = null;
var G__36155 = (0);
var G__36156 = (0);
seq__35454 = G__36153;
chunk__35455 = G__36154;
count__35456 = G__36155;
i__35457 = G__36156;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__35458 = shadow.dom.dom_node(new$);
var G__35459 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__35458,G__35459);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35461 = arguments.length;
switch (G__35461) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35463 = arguments.length;
switch (G__35463) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35469 = arguments.length;
switch (G__35469) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36185 = arguments.length;
var i__4731__auto___36186 = (0);
while(true){
if((i__4731__auto___36186 < len__4730__auto___36185)){
args__4736__auto__.push((arguments[i__4731__auto___36186]));

var G__36187 = (i__4731__auto___36186 + (1));
i__4731__auto___36186 = G__36187;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35481_36189 = cljs.core.seq(nodes);
var chunk__35482_36190 = null;
var count__35483_36191 = (0);
var i__35484_36192 = (0);
while(true){
if((i__35484_36192 < count__35483_36191)){
var node_36193 = chunk__35482_36190.cljs$core$IIndexed$_nth$arity$2(null,i__35484_36192);
fragment.appendChild(shadow.dom._to_dom(node_36193));


var G__36195 = seq__35481_36189;
var G__36196 = chunk__35482_36190;
var G__36197 = count__35483_36191;
var G__36198 = (i__35484_36192 + (1));
seq__35481_36189 = G__36195;
chunk__35482_36190 = G__36196;
count__35483_36191 = G__36197;
i__35484_36192 = G__36198;
continue;
} else {
var temp__5735__auto___36199 = cljs.core.seq(seq__35481_36189);
if(temp__5735__auto___36199){
var seq__35481_36203__$1 = temp__5735__auto___36199;
if(cljs.core.chunked_seq_QMARK_(seq__35481_36203__$1)){
var c__4550__auto___36206 = cljs.core.chunk_first(seq__35481_36203__$1);
var G__36207 = cljs.core.chunk_rest(seq__35481_36203__$1);
var G__36208 = c__4550__auto___36206;
var G__36209 = cljs.core.count(c__4550__auto___36206);
var G__36210 = (0);
seq__35481_36189 = G__36207;
chunk__35482_36190 = G__36208;
count__35483_36191 = G__36209;
i__35484_36192 = G__36210;
continue;
} else {
var node_36211 = cljs.core.first(seq__35481_36203__$1);
fragment.appendChild(shadow.dom._to_dom(node_36211));


var G__36212 = cljs.core.next(seq__35481_36203__$1);
var G__36213 = null;
var G__36214 = (0);
var G__36215 = (0);
seq__35481_36189 = G__36212;
chunk__35482_36190 = G__36213;
count__35483_36191 = G__36214;
i__35484_36192 = G__36215;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq35479){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35479));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35492_36217 = cljs.core.seq(scripts);
var chunk__35493_36218 = null;
var count__35494_36219 = (0);
var i__35495_36220 = (0);
while(true){
if((i__35495_36220 < count__35494_36219)){
var vec__35506_36224 = chunk__35493_36218.cljs$core$IIndexed$_nth$arity$2(null,i__35495_36220);
var script_tag_36225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35506_36224,(0),null);
var script_body_36226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35506_36224,(1),null);
eval(script_body_36226);


var G__36227 = seq__35492_36217;
var G__36228 = chunk__35493_36218;
var G__36229 = count__35494_36219;
var G__36230 = (i__35495_36220 + (1));
seq__35492_36217 = G__36227;
chunk__35493_36218 = G__36228;
count__35494_36219 = G__36229;
i__35495_36220 = G__36230;
continue;
} else {
var temp__5735__auto___36232 = cljs.core.seq(seq__35492_36217);
if(temp__5735__auto___36232){
var seq__35492_36233__$1 = temp__5735__auto___36232;
if(cljs.core.chunked_seq_QMARK_(seq__35492_36233__$1)){
var c__4550__auto___36234 = cljs.core.chunk_first(seq__35492_36233__$1);
var G__36236 = cljs.core.chunk_rest(seq__35492_36233__$1);
var G__36237 = c__4550__auto___36234;
var G__36238 = cljs.core.count(c__4550__auto___36234);
var G__36239 = (0);
seq__35492_36217 = G__36236;
chunk__35493_36218 = G__36237;
count__35494_36219 = G__36238;
i__35495_36220 = G__36239;
continue;
} else {
var vec__35510_36240 = cljs.core.first(seq__35492_36233__$1);
var script_tag_36241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35510_36240,(0),null);
var script_body_36242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35510_36240,(1),null);
eval(script_body_36242);


var G__36246 = cljs.core.next(seq__35492_36233__$1);
var G__36247 = null;
var G__36248 = (0);
var G__36249 = (0);
seq__35492_36217 = G__36246;
chunk__35493_36218 = G__36247;
count__35494_36219 = G__36248;
i__35495_36220 = G__36249;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__35513){
var vec__35514 = p__35513;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35514,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35514,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__35523 = shadow.dom.dom_node(el);
var G__35524 = cls;
return goog.dom.getAncestorByClass(G__35523,G__35524);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35528 = arguments.length;
switch (G__35528) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__35530 = shadow.dom.dom_node(el);
var G__35531 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__35530,G__35531);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__35533 = shadow.dom.dom_node(el);
var G__35534 = cljs.core.name(tag);
var G__35535 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__35533,G__35534,G__35535);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__35537 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__35537);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__35540 = shadow.dom.dom_node(dom);
var G__35541 = value;
return goog.dom.forms.setValue(G__35540,G__35541);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35551 = cljs.core.seq(style_keys);
var chunk__35552 = null;
var count__35553 = (0);
var i__35554 = (0);
while(true){
if((i__35554 < count__35553)){
var it = chunk__35552.cljs$core$IIndexed$_nth$arity$2(null,i__35554);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36263 = seq__35551;
var G__36264 = chunk__35552;
var G__36265 = count__35553;
var G__36266 = (i__35554 + (1));
seq__35551 = G__36263;
chunk__35552 = G__36264;
count__35553 = G__36265;
i__35554 = G__36266;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35551);
if(temp__5735__auto__){
var seq__35551__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35551__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35551__$1);
var G__36268 = cljs.core.chunk_rest(seq__35551__$1);
var G__36269 = c__4550__auto__;
var G__36270 = cljs.core.count(c__4550__auto__);
var G__36271 = (0);
seq__35551 = G__36268;
chunk__35552 = G__36269;
count__35553 = G__36270;
i__35554 = G__36271;
continue;
} else {
var it = cljs.core.first(seq__35551__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36273 = cljs.core.next(seq__35551__$1);
var G__36274 = null;
var G__36275 = (0);
var G__36276 = (0);
seq__35551 = G__36273;
chunk__35552 = G__36274;
count__35553 = G__36275;
i__35554 = G__36276;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35563,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35569 = k35563;
var G__35569__$1 = (((G__35569 instanceof cljs.core.Keyword))?G__35569.fqn:null);
switch (G__35569__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35563,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35571){
var vec__35572 = p__35571;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35572,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35572,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35562){
var self__ = this;
var G__35562__$1 = this;
return (new cljs.core.RecordIter((0),G__35562__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__35575 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35575(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35564,other35565){
var self__ = this;
var this35564__$1 = this;
return (((!((other35565 == null)))) && ((this35564__$1.constructor === other35565.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35564__$1.x,other35565.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35564__$1.y,other35565.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35564__$1.__extmap,other35565.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35562){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35582 = cljs.core.keyword_identical_QMARK_;
var expr__35583 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35585 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__35586 = expr__35583;
return (pred__35582.cljs$core$IFn$_invoke$arity$2 ? pred__35582.cljs$core$IFn$_invoke$arity$2(G__35585,G__35586) : pred__35582.call(null,G__35585,G__35586));
})())){
return (new shadow.dom.Coordinate(G__35562,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35587 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__35588 = expr__35583;
return (pred__35582.cljs$core$IFn$_invoke$arity$2 ? pred__35582.cljs$core$IFn$_invoke$arity$2(G__35587,G__35588) : pred__35582.call(null,G__35587,G__35588));
})())){
return (new shadow.dom.Coordinate(self__.x,G__35562,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35562),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35562){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35562,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35566){
var extmap__4424__auto__ = (function (){var G__35589 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35566,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35566)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35589);
} else {
return G__35589;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35566),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35566),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__35590 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__35590);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__35591 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__35591);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__35592 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__35592);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35594,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35598 = k35594;
var G__35598__$1 = (((G__35598 instanceof cljs.core.Keyword))?G__35598.fqn:null);
switch (G__35598__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35594,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35599){
var vec__35601 = p__35599;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35601,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35601,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35593){
var self__ = this;
var G__35593__$1 = this;
return (new cljs.core.RecordIter((0),G__35593__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__35617 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35617(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35595,other35596){
var self__ = this;
var this35595__$1 = this;
return (((!((other35596 == null)))) && ((this35595__$1.constructor === other35596.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35595__$1.w,other35596.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35595__$1.h,other35596.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35595__$1.__extmap,other35596.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35593){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35631 = cljs.core.keyword_identical_QMARK_;
var expr__35632 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35634 = new cljs.core.Keyword(null,"w","w",354169001);
var G__35635 = expr__35632;
return (pred__35631.cljs$core$IFn$_invoke$arity$2 ? pred__35631.cljs$core$IFn$_invoke$arity$2(G__35634,G__35635) : pred__35631.call(null,G__35634,G__35635));
})())){
return (new shadow.dom.Size(G__35593,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35637 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__35638 = expr__35632;
return (pred__35631.cljs$core$IFn$_invoke$arity$2 ? pred__35631.cljs$core$IFn$_invoke$arity$2(G__35637,G__35638) : pred__35631.call(null,G__35637,G__35638));
})())){
return (new shadow.dom.Size(self__.w,G__35593,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35593),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35593){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35593,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35597){
var extmap__4424__auto__ = (function (){var G__35657 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35597,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35597)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35657);
} else {
return G__35657;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35597),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35597),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__35665 = shadow.dom.dom_node(el);
return goog.style.getSize(G__35665);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__36344 = (i + (1));
var G__36345 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36344;
ret = G__36345;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35694){
var vec__35697 = p__35694;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35697,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35697,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35711 = arguments.length;
switch (G__35711) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__35725_36348 = new_node;
var G__35726_36349 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__35725_36348,G__35726_36349);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__35729_36352 = new_node;
var G__35730_36353 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__35729_36352,G__35730_36353);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36356 = ps;
var G__36357 = (i + (1));
el__$1 = G__36356;
i = G__36357;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__35742 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__35742);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__35749 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__35749);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__35752 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__35752);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35755 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35755,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35755,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35755,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35758_36371 = cljs.core.seq(props);
var chunk__35759_36372 = null;
var count__35760_36373 = (0);
var i__35761_36374 = (0);
while(true){
if((i__35761_36374 < count__35760_36373)){
var vec__35771_36376 = chunk__35759_36372.cljs$core$IIndexed$_nth$arity$2(null,i__35761_36374);
var k_36377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35771_36376,(0),null);
var v_36378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35771_36376,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_36377);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36377),v_36378);


var G__36383 = seq__35758_36371;
var G__36384 = chunk__35759_36372;
var G__36385 = count__35760_36373;
var G__36386 = (i__35761_36374 + (1));
seq__35758_36371 = G__36383;
chunk__35759_36372 = G__36384;
count__35760_36373 = G__36385;
i__35761_36374 = G__36386;
continue;
} else {
var temp__5735__auto___36388 = cljs.core.seq(seq__35758_36371);
if(temp__5735__auto___36388){
var seq__35758_36390__$1 = temp__5735__auto___36388;
if(cljs.core.chunked_seq_QMARK_(seq__35758_36390__$1)){
var c__4550__auto___36391 = cljs.core.chunk_first(seq__35758_36390__$1);
var G__36393 = cljs.core.chunk_rest(seq__35758_36390__$1);
var G__36394 = c__4550__auto___36391;
var G__36395 = cljs.core.count(c__4550__auto___36391);
var G__36396 = (0);
seq__35758_36371 = G__36393;
chunk__35759_36372 = G__36394;
count__35760_36373 = G__36395;
i__35761_36374 = G__36396;
continue;
} else {
var vec__35778_36398 = cljs.core.first(seq__35758_36390__$1);
var k_36399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35778_36398,(0),null);
var v_36400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35778_36398,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_36399);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36399),v_36400);


var G__36404 = cljs.core.next(seq__35758_36390__$1);
var G__36405 = null;
var G__36406 = (0);
var G__36407 = (0);
seq__35758_36371 = G__36404;
chunk__35759_36372 = G__36405;
count__35760_36373 = G__36406;
i__35761_36374 = G__36407;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35783 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35783,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35783,(1),null);
var seq__35786_36412 = cljs.core.seq(node_children);
var chunk__35788_36413 = null;
var count__35789_36414 = (0);
var i__35790_36415 = (0);
while(true){
if((i__35790_36415 < count__35789_36414)){
var child_struct_36417 = chunk__35788_36413.cljs$core$IIndexed$_nth$arity$2(null,i__35790_36415);
if((!((child_struct_36417 == null)))){
if(typeof child_struct_36417 === 'string'){
var text_36418 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36418),child_struct_36417].join(''));
} else {
var children_36419 = shadow.dom.svg_node(child_struct_36417);
if(cljs.core.seq_QMARK_(children_36419)){
var seq__35816_36420 = cljs.core.seq(children_36419);
var chunk__35818_36421 = null;
var count__35819_36422 = (0);
var i__35820_36423 = (0);
while(true){
if((i__35820_36423 < count__35819_36422)){
var child_36424 = chunk__35818_36421.cljs$core$IIndexed$_nth$arity$2(null,i__35820_36423);
if(cljs.core.truth_(child_36424)){
node.appendChild(child_36424);


var G__36425 = seq__35816_36420;
var G__36426 = chunk__35818_36421;
var G__36427 = count__35819_36422;
var G__36428 = (i__35820_36423 + (1));
seq__35816_36420 = G__36425;
chunk__35818_36421 = G__36426;
count__35819_36422 = G__36427;
i__35820_36423 = G__36428;
continue;
} else {
var G__36430 = seq__35816_36420;
var G__36431 = chunk__35818_36421;
var G__36432 = count__35819_36422;
var G__36433 = (i__35820_36423 + (1));
seq__35816_36420 = G__36430;
chunk__35818_36421 = G__36431;
count__35819_36422 = G__36432;
i__35820_36423 = G__36433;
continue;
}
} else {
var temp__5735__auto___36435 = cljs.core.seq(seq__35816_36420);
if(temp__5735__auto___36435){
var seq__35816_36436__$1 = temp__5735__auto___36435;
if(cljs.core.chunked_seq_QMARK_(seq__35816_36436__$1)){
var c__4550__auto___36437 = cljs.core.chunk_first(seq__35816_36436__$1);
var G__36438 = cljs.core.chunk_rest(seq__35816_36436__$1);
var G__36439 = c__4550__auto___36437;
var G__36440 = cljs.core.count(c__4550__auto___36437);
var G__36441 = (0);
seq__35816_36420 = G__36438;
chunk__35818_36421 = G__36439;
count__35819_36422 = G__36440;
i__35820_36423 = G__36441;
continue;
} else {
var child_36443 = cljs.core.first(seq__35816_36436__$1);
if(cljs.core.truth_(child_36443)){
node.appendChild(child_36443);


var G__36444 = cljs.core.next(seq__35816_36436__$1);
var G__36445 = null;
var G__36446 = (0);
var G__36447 = (0);
seq__35816_36420 = G__36444;
chunk__35818_36421 = G__36445;
count__35819_36422 = G__36446;
i__35820_36423 = G__36447;
continue;
} else {
var G__36450 = cljs.core.next(seq__35816_36436__$1);
var G__36451 = null;
var G__36452 = (0);
var G__36453 = (0);
seq__35816_36420 = G__36450;
chunk__35818_36421 = G__36451;
count__35819_36422 = G__36452;
i__35820_36423 = G__36453;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36419);
}
}


var G__36455 = seq__35786_36412;
var G__36456 = chunk__35788_36413;
var G__36457 = count__35789_36414;
var G__36458 = (i__35790_36415 + (1));
seq__35786_36412 = G__36455;
chunk__35788_36413 = G__36456;
count__35789_36414 = G__36457;
i__35790_36415 = G__36458;
continue;
} else {
var G__36459 = seq__35786_36412;
var G__36460 = chunk__35788_36413;
var G__36461 = count__35789_36414;
var G__36462 = (i__35790_36415 + (1));
seq__35786_36412 = G__36459;
chunk__35788_36413 = G__36460;
count__35789_36414 = G__36461;
i__35790_36415 = G__36462;
continue;
}
} else {
var temp__5735__auto___36463 = cljs.core.seq(seq__35786_36412);
if(temp__5735__auto___36463){
var seq__35786_36465__$1 = temp__5735__auto___36463;
if(cljs.core.chunked_seq_QMARK_(seq__35786_36465__$1)){
var c__4550__auto___36466 = cljs.core.chunk_first(seq__35786_36465__$1);
var G__36467 = cljs.core.chunk_rest(seq__35786_36465__$1);
var G__36468 = c__4550__auto___36466;
var G__36469 = cljs.core.count(c__4550__auto___36466);
var G__36470 = (0);
seq__35786_36412 = G__36467;
chunk__35788_36413 = G__36468;
count__35789_36414 = G__36469;
i__35790_36415 = G__36470;
continue;
} else {
var child_struct_36471 = cljs.core.first(seq__35786_36465__$1);
if((!((child_struct_36471 == null)))){
if(typeof child_struct_36471 === 'string'){
var text_36472 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36472),child_struct_36471].join(''));
} else {
var children_36473 = shadow.dom.svg_node(child_struct_36471);
if(cljs.core.seq_QMARK_(children_36473)){
var seq__35830_36475 = cljs.core.seq(children_36473);
var chunk__35832_36476 = null;
var count__35833_36477 = (0);
var i__35834_36478 = (0);
while(true){
if((i__35834_36478 < count__35833_36477)){
var child_36480 = chunk__35832_36476.cljs$core$IIndexed$_nth$arity$2(null,i__35834_36478);
if(cljs.core.truth_(child_36480)){
node.appendChild(child_36480);


var G__36483 = seq__35830_36475;
var G__36484 = chunk__35832_36476;
var G__36485 = count__35833_36477;
var G__36486 = (i__35834_36478 + (1));
seq__35830_36475 = G__36483;
chunk__35832_36476 = G__36484;
count__35833_36477 = G__36485;
i__35834_36478 = G__36486;
continue;
} else {
var G__36487 = seq__35830_36475;
var G__36488 = chunk__35832_36476;
var G__36489 = count__35833_36477;
var G__36490 = (i__35834_36478 + (1));
seq__35830_36475 = G__36487;
chunk__35832_36476 = G__36488;
count__35833_36477 = G__36489;
i__35834_36478 = G__36490;
continue;
}
} else {
var temp__5735__auto___36491__$1 = cljs.core.seq(seq__35830_36475);
if(temp__5735__auto___36491__$1){
var seq__35830_36492__$1 = temp__5735__auto___36491__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35830_36492__$1)){
var c__4550__auto___36493 = cljs.core.chunk_first(seq__35830_36492__$1);
var G__36494 = cljs.core.chunk_rest(seq__35830_36492__$1);
var G__36495 = c__4550__auto___36493;
var G__36496 = cljs.core.count(c__4550__auto___36493);
var G__36497 = (0);
seq__35830_36475 = G__36494;
chunk__35832_36476 = G__36495;
count__35833_36477 = G__36496;
i__35834_36478 = G__36497;
continue;
} else {
var child_36498 = cljs.core.first(seq__35830_36492__$1);
if(cljs.core.truth_(child_36498)){
node.appendChild(child_36498);


var G__36499 = cljs.core.next(seq__35830_36492__$1);
var G__36500 = null;
var G__36501 = (0);
var G__36502 = (0);
seq__35830_36475 = G__36499;
chunk__35832_36476 = G__36500;
count__35833_36477 = G__36501;
i__35834_36478 = G__36502;
continue;
} else {
var G__36504 = cljs.core.next(seq__35830_36492__$1);
var G__36505 = null;
var G__36506 = (0);
var G__36507 = (0);
seq__35830_36475 = G__36504;
chunk__35832_36476 = G__36505;
count__35833_36477 = G__36506;
i__35834_36478 = G__36507;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36473);
}
}


var G__36508 = cljs.core.next(seq__35786_36465__$1);
var G__36509 = null;
var G__36510 = (0);
var G__36511 = (0);
seq__35786_36412 = G__36508;
chunk__35788_36413 = G__36509;
count__35789_36414 = G__36510;
i__35790_36415 = G__36511;
continue;
} else {
var G__36512 = cljs.core.next(seq__35786_36465__$1);
var G__36513 = null;
var G__36514 = (0);
var G__36515 = (0);
seq__35786_36412 = G__36512;
chunk__35788_36413 = G__36513;
count__35789_36414 = G__36514;
i__35790_36415 = G__36515;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__35840_36516 = shadow.dom._to_svg;
var G__35841_36517 = "string";
var G__35842_36518 = ((function (G__35840_36516,G__35841_36517){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__35840_36516,G__35841_36517))
;
goog.object.set(G__35840_36516,G__35841_36517,G__35842_36518);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__35850_36519 = shadow.dom._to_svg;
var G__35851_36520 = "null";
var G__35852_36521 = ((function (G__35850_36519,G__35851_36520){
return (function (_){
return null;
});})(G__35850_36519,G__35851_36520))
;
goog.object.set(G__35850_36519,G__35851_36520,G__35852_36521);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36522 = arguments.length;
var i__4731__auto___36524 = (0);
while(true){
if((i__4731__auto___36524 < len__4730__auto___36522)){
args__4736__auto__.push((arguments[i__4731__auto___36524]));

var G__36527 = (i__4731__auto___36524 + (1));
i__4731__auto___36524 = G__36527;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq35856){
var G__35857 = cljs.core.first(seq35856);
var seq35856__$1 = cljs.core.next(seq35856);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35857,seq35856__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35868 = arguments.length;
switch (G__35868) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__35877_36530 = shadow.dom.dom_node(el);
var G__35878_36531 = cljs.core.name(event);
var G__35879_36532 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35877_36530,G__35878_36531,G__35879_36532) : shadow.dom.dom_listen.call(null,G__35877_36530,G__35878_36531,G__35879_36532));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__33571__auto___36537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33571__auto___36537,buf,chan,event_fn){
return (function (){
var f__33572__auto__ = (function (){var switch__33471__auto__ = ((function (c__33571__auto___36537,buf,chan,event_fn){
return (function (state_35888){
var state_val_35889 = (state_35888[(1)]);
if((state_val_35889 === (1))){
var state_35888__$1 = state_35888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35888__$1,(2),once_or_cleanup);
} else {
if((state_val_35889 === (2))){
var inst_35885 = (state_35888[(2)]);
var inst_35886 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35888__$1 = (function (){var statearr_35896 = state_35888;
(statearr_35896[(7)] = inst_35885);

return statearr_35896;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35888__$1,inst_35886);
} else {
return null;
}
}
});})(c__33571__auto___36537,buf,chan,event_fn))
;
return ((function (switch__33471__auto__,c__33571__auto___36537,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__33472__auto__ = null;
var shadow$dom$state_machine__33472__auto____0 = (function (){
var statearr_35901 = [null,null,null,null,null,null,null,null];
(statearr_35901[(0)] = shadow$dom$state_machine__33472__auto__);

(statearr_35901[(1)] = (1));

return statearr_35901;
});
var shadow$dom$state_machine__33472__auto____1 = (function (state_35888){
while(true){
var ret_value__33473__auto__ = (function (){try{while(true){
var result__33474__auto__ = switch__33471__auto__(state_35888);
if(cljs.core.keyword_identical_QMARK_(result__33474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33474__auto__;
}
break;
}
}catch (e35903){if((e35903 instanceof Object)){
var ex__33475__auto__ = e35903;
var statearr_35904_36544 = state_35888;
(statearr_35904_36544[(5)] = ex__33475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35903;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36545 = state_35888;
state_35888 = G__36545;
continue;
} else {
return ret_value__33473__auto__;
}
break;
}
});
shadow$dom$state_machine__33472__auto__ = function(state_35888){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33472__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33472__auto____1.call(this,state_35888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33472__auto____0;
shadow$dom$state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33472__auto____1;
return shadow$dom$state_machine__33472__auto__;
})()
;})(switch__33471__auto__,c__33571__auto___36537,buf,chan,event_fn))
})();
var state__33573__auto__ = (function (){var statearr_35909 = (f__33572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33572__auto__.cljs$core$IFn$_invoke$arity$0() : f__33572__auto__.call(null));
(statearr_35909[(6)] = c__33571__auto___36537);

return statearr_35909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33573__auto__);
});})(c__33571__auto___36537,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
