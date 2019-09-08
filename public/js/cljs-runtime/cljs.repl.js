goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31776){
var map__31777 = p__31776;
var map__31777__$1 = (((((!((map__31777 == null))))?(((((map__31777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31777):map__31777);
var m = map__31777__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31777__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31777__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31779_32012 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31780_32013 = null;
var count__31781_32014 = (0);
var i__31782_32015 = (0);
while(true){
if((i__31782_32015 < count__31781_32014)){
var f_32017 = chunk__31780_32013.cljs$core$IIndexed$_nth$arity$2(null,i__31782_32015);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_32017], 0));


var G__32019 = seq__31779_32012;
var G__32020 = chunk__31780_32013;
var G__32021 = count__31781_32014;
var G__32022 = (i__31782_32015 + (1));
seq__31779_32012 = G__32019;
chunk__31780_32013 = G__32020;
count__31781_32014 = G__32021;
i__31782_32015 = G__32022;
continue;
} else {
var temp__5735__auto___32023 = cljs.core.seq(seq__31779_32012);
if(temp__5735__auto___32023){
var seq__31779_32024__$1 = temp__5735__auto___32023;
if(cljs.core.chunked_seq_QMARK_(seq__31779_32024__$1)){
var c__4550__auto___32025 = cljs.core.chunk_first(seq__31779_32024__$1);
var G__32026 = cljs.core.chunk_rest(seq__31779_32024__$1);
var G__32027 = c__4550__auto___32025;
var G__32028 = cljs.core.count(c__4550__auto___32025);
var G__32029 = (0);
seq__31779_32012 = G__32026;
chunk__31780_32013 = G__32027;
count__31781_32014 = G__32028;
i__31782_32015 = G__32029;
continue;
} else {
var f_32030 = cljs.core.first(seq__31779_32024__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_32030], 0));


var G__32031 = cljs.core.next(seq__31779_32024__$1);
var G__32032 = null;
var G__32033 = (0);
var G__32034 = (0);
seq__31779_32012 = G__32031;
chunk__31780_32013 = G__32032;
count__31781_32014 = G__32033;
i__31782_32015 = G__32034;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32035 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_32035], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_32035)))?cljs.core.second(arglists_32035):arglists_32035)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31794_32040 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31795_32041 = null;
var count__31796_32042 = (0);
var i__31797_32043 = (0);
while(true){
if((i__31797_32043 < count__31796_32042)){
var vec__31815_32044 = chunk__31795_32041.cljs$core$IIndexed$_nth$arity$2(null,i__31797_32043);
var name_32045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31815_32044,(0),null);
var map__31818_32046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31815_32044,(1),null);
var map__31818_32047__$1 = (((((!((map__31818_32046 == null))))?(((((map__31818_32046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31818_32046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31818_32046):map__31818_32046);
var doc_32048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31818_32047__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32049 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31818_32047__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_32045], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_32049], 0));

if(cljs.core.truth_(doc_32048)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_32048], 0));
} else {
}


var G__32050 = seq__31794_32040;
var G__32051 = chunk__31795_32041;
var G__32052 = count__31796_32042;
var G__32053 = (i__31797_32043 + (1));
seq__31794_32040 = G__32050;
chunk__31795_32041 = G__32051;
count__31796_32042 = G__32052;
i__31797_32043 = G__32053;
continue;
} else {
var temp__5735__auto___32054 = cljs.core.seq(seq__31794_32040);
if(temp__5735__auto___32054){
var seq__31794_32055__$1 = temp__5735__auto___32054;
if(cljs.core.chunked_seq_QMARK_(seq__31794_32055__$1)){
var c__4550__auto___32056 = cljs.core.chunk_first(seq__31794_32055__$1);
var G__32057 = cljs.core.chunk_rest(seq__31794_32055__$1);
var G__32058 = c__4550__auto___32056;
var G__32059 = cljs.core.count(c__4550__auto___32056);
var G__32060 = (0);
seq__31794_32040 = G__32057;
chunk__31795_32041 = G__32058;
count__31796_32042 = G__32059;
i__31797_32043 = G__32060;
continue;
} else {
var vec__31828_32061 = cljs.core.first(seq__31794_32055__$1);
var name_32062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31828_32061,(0),null);
var map__31831_32063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31828_32061,(1),null);
var map__31831_32064__$1 = (((((!((map__31831_32063 == null))))?(((((map__31831_32063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31831_32063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31831_32063):map__31831_32063);
var doc_32065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31831_32064__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31831_32064__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_32062], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_32066], 0));

if(cljs.core.truth_(doc_32065)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_32065], 0));
} else {
}


var G__32068 = cljs.core.next(seq__31794_32055__$1);
var G__32069 = null;
var G__32070 = (0);
var G__32071 = (0);
seq__31794_32040 = G__32068;
chunk__31795_32041 = G__32069;
count__31796_32042 = G__32070;
i__31797_32043 = G__32071;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__31833 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31834 = null;
var count__31835 = (0);
var i__31836 = (0);
while(true){
if((i__31836 < count__31835)){
var role = chunk__31834.cljs$core$IIndexed$_nth$arity$2(null,i__31836);
var temp__5735__auto___32075__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___32075__$1)){
var spec_32076 = temp__5735__auto___32075__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_32076)], 0));
} else {
}


var G__32079 = seq__31833;
var G__32080 = chunk__31834;
var G__32081 = count__31835;
var G__32082 = (i__31836 + (1));
seq__31833 = G__32079;
chunk__31834 = G__32080;
count__31835 = G__32081;
i__31836 = G__32082;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__31833);
if(temp__5735__auto____$1){
var seq__31833__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__31833__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__31833__$1);
var G__32083 = cljs.core.chunk_rest(seq__31833__$1);
var G__32084 = c__4550__auto__;
var G__32085 = cljs.core.count(c__4550__auto__);
var G__32086 = (0);
seq__31833 = G__32083;
chunk__31834 = G__32084;
count__31835 = G__32085;
i__31836 = G__32086;
continue;
} else {
var role = cljs.core.first(seq__31833__$1);
var temp__5735__auto___32087__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___32087__$2)){
var spec_32088 = temp__5735__auto___32087__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_32088)], 0));
} else {
}


var G__32089 = cljs.core.next(seq__31833__$1);
var G__32090 = null;
var G__32091 = (0);
var G__32092 = (0);
seq__31833 = G__32089;
chunk__31834 = G__32090;
count__31835 = G__32091;
i__31836 = G__32092;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__32095 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__32096 = cljs.core.ex_cause(t);
via = G__32095;
t = G__32096;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__31861 = datafied_throwable;
var map__31861__$1 = (((((!((map__31861 == null))))?(((((map__31861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31861):map__31861);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31861__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31861__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31861__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31862 = cljs.core.last(via);
var map__31862__$1 = (((((!((map__31862 == null))))?(((((map__31862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31862):map__31862);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31862__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31862__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31862__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31863 = data;
var map__31863__$1 = (((((!((map__31863 == null))))?(((((map__31863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31863):map__31863);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31863__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31863__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31863__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31864 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__31864__$1 = (((((!((map__31864 == null))))?(((((map__31864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31864):map__31864);
var top_data = map__31864__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31864__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__31871 = phase;
var G__31871__$1 = (((G__31871 instanceof cljs.core.Keyword))?G__31871.fqn:null);
switch (G__31871__$1) {
case "read-source":
var map__31873 = data;
var map__31873__$1 = (((((!((map__31873 == null))))?(((((map__31873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31873):map__31873);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31873__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31873__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31880 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__31880__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31880,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31880);
var G__31880__$2 = (cljs.core.truth_((function (){var fexpr__31881 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31881.cljs$core$IFn$_invoke$arity$1 ? fexpr__31881.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31881.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31880__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31880__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31880__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31880__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31884 = top_data;
var G__31884__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31884,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31884);
var G__31884__$2 = (cljs.core.truth_((function (){var fexpr__31886 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31886.cljs$core$IFn$_invoke$arity$1 ? fexpr__31886.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31886.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31884__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31884__$1);
var G__31884__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31884__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31884__$2);
var G__31884__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31884__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31884__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31884__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31884__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31888 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31888,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31888,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31888,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31888,(3),null);
var G__31891 = top_data;
var G__31891__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31891,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31891);
var G__31891__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31891__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31891__$1);
var G__31891__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31891__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31891__$2);
var G__31891__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31891__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31891__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31891__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31891__$4;
}

break;
case "execution":
var vec__31893 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31893,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31893,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31893,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31893,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__31893,source__$1,method,file,line,G__31871,G__31871__$1,map__31861,map__31861__$1,via,trace,phase,map__31862,map__31862__$1,type,message,data,map__31863,map__31863__$1,problems,fn,caller,map__31864,map__31864__$1,top_data,source){
return (function (p1__31854_SHARP_){
var or__4131__auto__ = (p1__31854_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__31900 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31900.cljs$core$IFn$_invoke$arity$1 ? fexpr__31900.cljs$core$IFn$_invoke$arity$1(p1__31854_SHARP_) : fexpr__31900.call(null,p1__31854_SHARP_));
}
});})(vec__31893,source__$1,method,file,line,G__31871,G__31871__$1,map__31861,map__31861__$1,via,trace,phase,map__31862,map__31862__$1,type,message,data,map__31863,map__31863__$1,problems,fn,caller,map__31864,map__31864__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__31902 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31902__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31902,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31902);
var G__31902__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31902__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31902__$1);
var G__31902__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31902__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31902__$2);
var G__31902__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31902__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31902__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31902__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31902__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31871__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31927){
var map__31928 = p__31927;
var map__31928__$1 = (((((!((map__31928 == null))))?(((((map__31928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31928):map__31928);
var triage_data = map__31928__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31928__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31928__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31928__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31928__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31928__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31928__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31928__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31928__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31940 = phase;
var G__31940__$1 = (((G__31940 instanceof cljs.core.Keyword))?G__31940.fqn:null);
switch (G__31940__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__31947 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__31948 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31949 = loc;
var G__31950 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31957_32131 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31958_32132 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31959_32133 = true;
var _STAR_print_fn_STAR__temp_val__31960_32134 = ((function (_STAR_print_newline_STAR__orig_val__31957_32131,_STAR_print_fn_STAR__orig_val__31958_32132,_STAR_print_newline_STAR__temp_val__31959_32133,sb__4661__auto__,G__31947,G__31948,G__31949,G__31940,G__31940__$1,loc,class_name,simple_class,cause_type,format,map__31928,map__31928__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31957_32131,_STAR_print_fn_STAR__orig_val__31958_32132,_STAR_print_newline_STAR__temp_val__31959_32133,sb__4661__auto__,G__31947,G__31948,G__31949,G__31940,G__31940__$1,loc,class_name,simple_class,cause_type,format,map__31928,map__31928__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31959_32133;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31960_32134;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31957_32131,_STAR_print_fn_STAR__orig_val__31958_32132,_STAR_print_newline_STAR__temp_val__31959_32133,_STAR_print_fn_STAR__temp_val__31960_32134,sb__4661__auto__,G__31947,G__31948,G__31949,G__31940,G__31940__$1,loc,class_name,simple_class,cause_type,format,map__31928,map__31928__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__31957_32131,_STAR_print_fn_STAR__orig_val__31958_32132,_STAR_print_newline_STAR__temp_val__31959_32133,_STAR_print_fn_STAR__temp_val__31960_32134,sb__4661__auto__,G__31947,G__31948,G__31949,G__31940,G__31940__$1,loc,class_name,simple_class,cause_type,format,map__31928,map__31928__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31914_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31914_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31957_32131,_STAR_print_fn_STAR__orig_val__31958_32132,_STAR_print_newline_STAR__temp_val__31959_32133,_STAR_print_fn_STAR__temp_val__31960_32134,sb__4661__auto__,G__31947,G__31948,G__31949,G__31940,G__31940__$1,loc,class_name,simple_class,cause_type,format,map__31928,map__31928__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31957_32131,_STAR_print_fn_STAR__orig_val__31958_32132,_STAR_print_newline_STAR__temp_val__31959_32133,_STAR_print_fn_STAR__temp_val__31960_32134,sb__4661__auto__,G__31947,G__31948,G__31949,G__31940,G__31940__$1,loc,class_name,simple_class,cause_type,format,map__31928,map__31928__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31958_32132;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31957_32131;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31947,G__31948,G__31949,G__31950) : format.call(null,G__31947,G__31948,G__31949,G__31950));

break;
case "macroexpansion":
var G__31968 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__31969 = cause_type;
var G__31970 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31971 = loc;
var G__31972 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31968,G__31969,G__31970,G__31971,G__31972) : format.call(null,G__31968,G__31969,G__31970,G__31971,G__31972));

break;
case "compile-syntax-check":
var G__31974 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__31975 = cause_type;
var G__31976 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31977 = loc;
var G__31978 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31974,G__31975,G__31976,G__31977,G__31978) : format.call(null,G__31974,G__31975,G__31976,G__31977,G__31978));

break;
case "compilation":
var G__31979 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__31980 = cause_type;
var G__31981 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31982 = loc;
var G__31983 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31979,G__31980,G__31981,G__31982,G__31983) : format.call(null,G__31979,G__31980,G__31981,G__31982,G__31983));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__31987 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__31988 = symbol;
var G__31989 = loc;
var G__31990 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31992_32135 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31993_32136 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31994_32137 = true;
var _STAR_print_fn_STAR__temp_val__31995_32138 = ((function (_STAR_print_newline_STAR__orig_val__31992_32135,_STAR_print_fn_STAR__orig_val__31993_32136,_STAR_print_newline_STAR__temp_val__31994_32137,sb__4661__auto__,G__31987,G__31988,G__31989,G__31940,G__31940__$1,loc,class_name,simple_class,cause_type,format,map__31928,map__31928__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31992_32135,_STAR_print_fn_STAR__orig_val__31993_32136,_STAR_print_newline_STAR__temp_val__31994_32137,sb__4661__auto__,G__31987,G__31988,G__31989,G__31940,G__31940__$1,loc,class_name,simple_class,cause_type,format,map__31928,map__31928__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31994_32137;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31995_32138;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31992_32135,_STAR_print_fn_STAR__orig_val__31993_32136,_STAR_print_newline_STAR__temp_val__31994_32137,_STAR_print_fn_STAR__temp_val__31995_32138,sb__4661__auto__,G__31987,G__31988,G__31989,G__31940,G__31940__$1,loc,class_name,simple_class,cause_type,format,map__31928,map__31928__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__31992_32135,_STAR_print_fn_STAR__orig_val__31993_32136,_STAR_print_newline_STAR__temp_val__31994_32137,_STAR_print_fn_STAR__temp_val__31995_32138,sb__4661__auto__,G__31987,G__31988,G__31989,G__31940,G__31940__$1,loc,class_name,simple_class,cause_type,format,map__31928,map__31928__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31918_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31918_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31992_32135,_STAR_print_fn_STAR__orig_val__31993_32136,_STAR_print_newline_STAR__temp_val__31994_32137,_STAR_print_fn_STAR__temp_val__31995_32138,sb__4661__auto__,G__31987,G__31988,G__31989,G__31940,G__31940__$1,loc,class_name,simple_class,cause_type,format,map__31928,map__31928__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31992_32135,_STAR_print_fn_STAR__orig_val__31993_32136,_STAR_print_newline_STAR__temp_val__31994_32137,_STAR_print_fn_STAR__temp_val__31995_32138,sb__4661__auto__,G__31987,G__31988,G__31989,G__31940,G__31940__$1,loc,class_name,simple_class,cause_type,format,map__31928,map__31928__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31993_32136;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31992_32135;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31987,G__31988,G__31989,G__31990) : format.call(null,G__31987,G__31988,G__31989,G__31990));
} else {
var G__32001 = "Execution error%s at %s(%s).\n%s\n";
var G__32002 = cause_type;
var G__32003 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32004 = loc;
var G__32005 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32001,G__32002,G__32003,G__32004,G__32005) : format.call(null,G__32001,G__32002,G__32003,G__32004,G__32005));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31940__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
