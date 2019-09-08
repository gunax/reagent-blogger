goog.provide('giggin.components.orders');
goog.require('cljs.core');
goog.require('giggin.state');
giggin.components.orders.orders = (function giggin$components$orders$orders(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside","aside",1414397537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order","div.order",-190189494),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.body","div.body",-96313067),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = (function giggin$components$orders$orders_$_iter__26326(s__26327){
return (new cljs.core.LazySeq(null,(function (){
var s__26327__$1 = s__26327;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__26327__$1);
if(temp__5457__auto__){
var s__26327__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26327__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__26327__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__26329 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__26328 = (0);
while(true){
if((i__26328 < size__4291__auto__)){
var vec__26330 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__26328);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26330,(0),null);
var quantity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26330,(1),null);
cljs.core.chunk_append(b__26329,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.img","div.img",2113685181),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(giggin.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"img","img",1442687358)], null)),new cljs.core.Keyword(null,"alt","alt",-3214426),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(giggin.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",-1265013094),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(giggin.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null)))," \u00D7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quantity)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.action","div.action",-2064981372),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.price","div.price",1541719866),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(giggin.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"price","price",22129180)], null)) * quantity)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn--link.tooltip","button.btn.btn--link.tooltip",-1501154667),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Remove",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26328,vec__26330,id,quantity,c__4290__auto__,size__4291__auto__,b__26329,s__26327__$2,temp__5457__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(giggin.state.orders,cljs.core.dissoc,id);
});})(i__26328,vec__26330,id,quantity,c__4290__auto__,size__4291__auto__,b__26329,s__26327__$2,temp__5457__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon--cross","i.icon.icon--cross",-1116124260)], null)], null)], null)], null)], null));

var G__26336 = (i__26328 + (1));
i__26328 = G__26336;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26329),giggin$components$orders$orders_$_iter__26326(cljs.core.chunk_rest(s__26327__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26329),null);
}
} else {
var vec__26333 = cljs.core.first(s__26327__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26333,(0),null);
var quantity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26333,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.img","div.img",2113685181),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(giggin.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"img","img",1442687358)], null)),new cljs.core.Keyword(null,"alt","alt",-3214426),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(giggin.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",-1265013094),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(giggin.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null)))," \u00D7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quantity)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.action","div.action",-2064981372),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.price","div.price",1541719866),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(giggin.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"price","price",22129180)], null)) * quantity)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn--link.tooltip","button.btn.btn--link.tooltip",-1501154667),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Remove",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__26333,id,quantity,s__26327__$2,temp__5457__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(giggin.state.orders,cljs.core.dissoc,id);
});})(vec__26333,id,quantity,s__26327__$2,temp__5457__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon--cross","i.icon.icon--cross",-1116124260)], null)], null)], null)], null)], null),giggin$components$orders$orders_$_iter__26326(cljs.core.rest(s__26327__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(cljs.core.deref(giggin.state.orders));
})())], null)], null)], null);
});

//# sourceMappingURL=giggin.components.orders.js.map
