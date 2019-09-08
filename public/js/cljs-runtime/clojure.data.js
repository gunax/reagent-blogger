goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__25953){
var vec__25955 = p__25953;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25955,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25955,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__25974 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25974,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25974,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25974,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__26009 = arguments.length;
switch (G__26009) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__26066_26258 = clojure.data.equality_partition;
var G__26067_26259 = "null";
var G__26068_26260 = ((function (G__26066_26258,G__26067_26259){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26066_26258,G__26067_26259))
;
goog.object.set(G__26066_26258,G__26067_26259,G__26068_26260);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__26072_26268 = clojure.data.equality_partition;
var G__26073_26269 = "string";
var G__26074_26270 = ((function (G__26072_26268,G__26073_26269){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26072_26268,G__26073_26269))
;
goog.object.set(G__26072_26268,G__26073_26269,G__26074_26270);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__26078_26274 = clojure.data.equality_partition;
var G__26079_26275 = "number";
var G__26080_26276 = ((function (G__26078_26274,G__26079_26275){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26078_26274,G__26079_26275))
;
goog.object.set(G__26078_26274,G__26079_26275,G__26080_26276);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__26082_26279 = clojure.data.equality_partition;
var G__26083_26280 = "array";
var G__26084_26281 = ((function (G__26082_26279,G__26083_26280){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__26082_26279,G__26083_26280))
;
goog.object.set(G__26082_26279,G__26083_26280,G__26084_26281);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__26093_26284 = clojure.data.equality_partition;
var G__26094_26285 = "function";
var G__26095_26286 = ((function (G__26093_26284,G__26094_26285){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26093_26284,G__26094_26285))
;
goog.object.set(G__26093_26284,G__26094_26285,G__26095_26286);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__26100_26291 = clojure.data.equality_partition;
var G__26101_26292 = "boolean";
var G__26102_26293 = ((function (G__26100_26291,G__26101_26292){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26100_26291,G__26101_26292))
;
goog.object.set(G__26100_26291,G__26101_26292,G__26102_26293);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__26106_26296 = clojure.data.equality_partition;
var G__26107_26297 = "_";
var G__26108_26298 = ((function (G__26106_26296,G__26107_26297){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__26106_26296,G__26107_26297))
;
goog.object.set(G__26106_26296,G__26107_26297,G__26108_26298);
goog.object.set(clojure.data.Diff,"null",true);

var G__26125_26312 = clojure.data.diff_similar;
var G__26126_26313 = "null";
var G__26127_26314 = ((function (G__26125_26312,G__26126_26313){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26125_26312,G__26126_26313))
;
goog.object.set(G__26125_26312,G__26126_26313,G__26127_26314);

goog.object.set(clojure.data.Diff,"string",true);

var G__26130_26322 = clojure.data.diff_similar;
var G__26131_26323 = "string";
var G__26132_26324 = ((function (G__26130_26322,G__26131_26323){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26130_26322,G__26131_26323))
;
goog.object.set(G__26130_26322,G__26131_26323,G__26132_26324);

goog.object.set(clojure.data.Diff,"number",true);

var G__26135_26329 = clojure.data.diff_similar;
var G__26136_26330 = "number";
var G__26137_26331 = ((function (G__26135_26329,G__26136_26330){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26135_26329,G__26136_26330))
;
goog.object.set(G__26135_26329,G__26136_26330,G__26137_26331);

goog.object.set(clojure.data.Diff,"array",true);

var G__26141_26334 = clojure.data.diff_similar;
var G__26142_26335 = "array";
var G__26143_26336 = ((function (G__26141_26334,G__26142_26335){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__26141_26334,G__26142_26335))
;
goog.object.set(G__26141_26334,G__26142_26335,G__26143_26336);

goog.object.set(clojure.data.Diff,"function",true);

var G__26148_26343 = clojure.data.diff_similar;
var G__26149_26344 = "function";
var G__26150_26345 = ((function (G__26148_26343,G__26149_26344){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26148_26343,G__26149_26344))
;
goog.object.set(G__26148_26343,G__26149_26344,G__26150_26345);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__26156_26348 = clojure.data.diff_similar;
var G__26157_26349 = "boolean";
var G__26158_26350 = ((function (G__26156_26348,G__26157_26349){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26156_26348,G__26157_26349))
;
goog.object.set(G__26156_26348,G__26157_26349,G__26158_26350);

goog.object.set(clojure.data.Diff,"_",true);

var G__26161_26363 = clojure.data.diff_similar;
var G__26162_26364 = "_";
var G__26163_26365 = ((function (G__26161_26363,G__26162_26364){
return (function (a,b){
var fexpr__26165 = (function (){var G__26166 = clojure.data.equality_partition(a);
var G__26166__$1 = (((G__26166 instanceof cljs.core.Keyword))?G__26166.fqn:null);
switch (G__26166__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26166__$1)].join('')));

}
})();
return (fexpr__26165.cljs$core$IFn$_invoke$arity$2 ? fexpr__26165.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__26165.call(null,a,b));
});})(G__26161_26363,G__26162_26364))
;
goog.object.set(G__26161_26363,G__26162_26364,G__26163_26365);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
