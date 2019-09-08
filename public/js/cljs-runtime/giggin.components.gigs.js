goog.provide('giggin.components.gigs');
goog.require('cljs.core');
goog.require('giggin.state');
giggin.components.gigs.gigs = (function giggin$components$gigs$gigs(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gigs","div.gigs",-102058002),(function (){var iter__4292__auto__ = (function giggin$components$gigs$gigs_$_iter__26086(s__26087){
return (new cljs.core.LazySeq(null,(function (){
var s__26087__$1 = s__26087;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__26087__$1);
if(temp__5457__auto__){
var s__26087__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26087__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__26087__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__26089 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__26088 = (0);
while(true){
if((i__26088 < size__4291__auto__)){
var map__26090 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__26088);
var map__26090__$1 = ((((!((map__26090 == null)))?(((((map__26090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26090):map__26090);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26090__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26090__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26090__$1,new cljs.core.Keyword(null,"title","title",636505583));
var price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26090__$1,new cljs.core.Keyword(null,"price","price",22129180));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26090__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
cljs.core.chunk_append(b__26089,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig","div.gig",585920249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.gig__artwork","img.gig__artwork",145688453),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),img,new cljs.core.Keyword(null,"alt","alt",-3214426),desc], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig__body","div.gig__body",-51299878),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig__title","div.gig__title",1828713596),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn.btn--primary.float--right.tooltip","div.btn.btn--primary.float--right.tooltip",-597010778),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"add to cart",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26088,map__26090,map__26090__$1,id,img,title,price,desc,c__4290__auto__,size__4291__auto__,b__26089,s__26087__$2,temp__5457__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(giggin.state.orders,cljs.core.update,id,cljs.core.inc);
});})(i__26088,map__26090,map__26090__$1,id,img,title,price,desc,c__4290__auto__,size__4291__auto__,b__26089,s__26087__$2,temp__5457__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon--plus","i.icon.icon--plus",-1882059067)], null)], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.gig__price","p.gig__price",442531190),price], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.gig__desc","p.gig__desc",-23880562),desc], null)], null)], null));

var G__26094 = (i__26088 + (1));
i__26088 = G__26094;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26089),giggin$components$gigs$gigs_$_iter__26086(cljs.core.chunk_rest(s__26087__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26089),null);
}
} else {
var map__26092 = cljs.core.first(s__26087__$2);
var map__26092__$1 = ((((!((map__26092 == null)))?(((((map__26092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26092):map__26092);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26092__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26092__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26092__$1,new cljs.core.Keyword(null,"title","title",636505583));
var price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26092__$1,new cljs.core.Keyword(null,"price","price",22129180));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26092__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig","div.gig",585920249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.gig__artwork","img.gig__artwork",145688453),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),img,new cljs.core.Keyword(null,"alt","alt",-3214426),desc], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig__body","div.gig__body",-51299878),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig__title","div.gig__title",1828713596),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn.btn--primary.float--right.tooltip","div.btn.btn--primary.float--right.tooltip",-597010778),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"add to cart",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__26092,map__26092__$1,id,img,title,price,desc,s__26087__$2,temp__5457__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(giggin.state.orders,cljs.core.update,id,cljs.core.inc);
});})(map__26092,map__26092__$1,id,img,title,price,desc,s__26087__$2,temp__5457__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon--plus","i.icon.icon--plus",-1882059067)], null)], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.gig__price","p.gig__price",442531190),price], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.gig__desc","p.gig__desc",-23880562),desc], null)], null)], null),giggin$components$gigs$gigs_$_iter__26086(cljs.core.rest(s__26087__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(cljs.core.vals(cljs.core.deref(giggin.state.gigs)));
})()], null)], null);
});

//# sourceMappingURL=giggin.components.gigs.js.map
