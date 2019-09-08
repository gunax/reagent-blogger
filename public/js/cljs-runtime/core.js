goog.provide('microblogger.core');
goog.require('cljs.core');
goog.require('reagent.core');
microblogger.core.app = (function microblogger$core$app(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),"Microblogger"], null);
});
microblogger.core.main = (function microblogger$core$main(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [microblogger.core.app], null),document.getElementById("app"));
});
goog.exportSymbol('microblogger.core.main', microblogger.core.main);

//# sourceMappingURL=core.js.map
