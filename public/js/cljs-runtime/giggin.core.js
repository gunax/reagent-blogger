goog.provide('giggin.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('giggin.components.header');
goog.require('giggin.components.gigs');
goog.require('giggin.components.orders');
goog.require('giggin.components.footer');
giggin.core.app = (function giggin$core$app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [giggin.components.header.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [giggin.components.gigs.gigs], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [giggin.components.orders.orders], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [giggin.components.footer.footer], null)], null);
});
giggin.core.main = (function giggin$core$main(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [giggin.core.app], null),document.getElementById("app"));
});
goog.exportSymbol('giggin.core.main', giggin.core.main);

//# sourceMappingURL=giggin.core.js.map
