goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__35792__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35792 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35793__i = 0, G__35793__a = new Array(arguments.length -  0);
while (G__35793__i < G__35793__a.length) {G__35793__a[G__35793__i] = arguments[G__35793__i + 0]; ++G__35793__i;}
  args = new cljs.core.IndexedSeq(G__35793__a,0,null);
} 
return G__35792__delegate.call(this,args);};
G__35792.cljs$lang$maxFixedArity = 0;
G__35792.cljs$lang$applyTo = (function (arglist__35794){
var args = cljs.core.seq(arglist__35794);
return G__35792__delegate(args);
});
G__35792.cljs$core$IFn$_invoke$arity$variadic = G__35792__delegate;
return G__35792;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__35796__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35796 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35803__i = 0, G__35803__a = new Array(arguments.length -  0);
while (G__35803__i < G__35803__a.length) {G__35803__a[G__35803__i] = arguments[G__35803__i + 0]; ++G__35803__i;}
  args = new cljs.core.IndexedSeq(G__35803__a,0,null);
} 
return G__35796__delegate.call(this,args);};
G__35796.cljs$lang$maxFixedArity = 0;
G__35796.cljs$lang$applyTo = (function (arglist__35804){
var args = cljs.core.seq(arglist__35804);
return G__35796__delegate(args);
});
G__35796.cljs$core$IFn$_invoke$arity$variadic = G__35796__delegate;
return G__35796;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
