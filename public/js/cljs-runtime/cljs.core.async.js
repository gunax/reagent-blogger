goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33630 = arguments.length;
switch (G__33630) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33631 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33631 = (function (f,blockable,meta33632){
this.f = f;
this.blockable = blockable;
this.meta33632 = meta33632;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33633,meta33632__$1){
var self__ = this;
var _33633__$1 = this;
return (new cljs.core.async.t_cljs$core$async33631(self__.f,self__.blockable,meta33632__$1));
});

cljs.core.async.t_cljs$core$async33631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33633){
var self__ = this;
var _33633__$1 = this;
return self__.meta33632;
});

cljs.core.async.t_cljs$core$async33631.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33631.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33631.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33631.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33631.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33632","meta33632",-1362224375,null)], null);
});

cljs.core.async.t_cljs$core$async33631.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33631.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33631";

cljs.core.async.t_cljs$core$async33631.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33631");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33631.
 */
cljs.core.async.__GT_t_cljs$core$async33631 = (function cljs$core$async$__GT_t_cljs$core$async33631(f__$1,blockable__$1,meta33632){
return (new cljs.core.async.t_cljs$core$async33631(f__$1,blockable__$1,meta33632));
});

}

return (new cljs.core.async.t_cljs$core$async33631(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33638 = arguments.length;
switch (G__33638) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33640 = arguments.length;
switch (G__33640) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33642 = arguments.length;
switch (G__33642) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35090 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35090) : fn1.call(null,val_35090));
} else {
cljs.core.async.impl.dispatch.run(((function (val_35090,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35090) : fn1.call(null,val_35090));
});})(val_35090,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33644 = arguments.length;
switch (G__33644) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5733__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___35107 = n;
var x_35108 = (0);
while(true){
if((x_35108 < n__4607__auto___35107)){
(a[x_35108] = x_35108);

var G__35109 = (x_35108 + (1));
x_35108 = G__35109;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33645 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33645 = (function (flag,meta33646){
this.flag = flag;
this.meta33646 = meta33646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33647,meta33646__$1){
var self__ = this;
var _33647__$1 = this;
return (new cljs.core.async.t_cljs$core$async33645(self__.flag,meta33646__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33645.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33647){
var self__ = this;
var _33647__$1 = this;
return self__.meta33646;
});})(flag))
;

cljs.core.async.t_cljs$core$async33645.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33645.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33645.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33645.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33645.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33646","meta33646",-314948612,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33645.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33645.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33645";

cljs.core.async.t_cljs$core$async33645.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33645");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33645.
 */
cljs.core.async.__GT_t_cljs$core$async33645 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33645(flag__$1,meta33646){
return (new cljs.core.async.t_cljs$core$async33645(flag__$1,meta33646));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33645(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33648 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33648 = (function (flag,cb,meta33649){
this.flag = flag;
this.cb = cb;
this.meta33649 = meta33649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33650,meta33649__$1){
var self__ = this;
var _33650__$1 = this;
return (new cljs.core.async.t_cljs$core$async33648(self__.flag,self__.cb,meta33649__$1));
});

cljs.core.async.t_cljs$core$async33648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33650){
var self__ = this;
var _33650__$1 = this;
return self__.meta33649;
});

cljs.core.async.t_cljs$core$async33648.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33648.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async33648.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33648.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33649","meta33649",637761193,null)], null);
});

cljs.core.async.t_cljs$core$async33648.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33648";

cljs.core.async.t_cljs$core$async33648.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33648");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33648.
 */
cljs.core.async.__GT_t_cljs$core$async33648 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33648(flag__$1,cb__$1,meta33649){
return (new cljs.core.async.t_cljs$core$async33648(flag__$1,cb__$1,meta33649));
});

}

return (new cljs.core.async.t_cljs$core$async33648(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33651_SHARP_){
var G__33653 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33651_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33653) : fret.call(null,G__33653));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33652_SHARP_){
var G__33654 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33652_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33654) : fret.call(null,G__33654));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35137 = (i + (1));
i = G__35137;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35140 = arguments.length;
var i__4731__auto___35141 = (0);
while(true){
if((i__4731__auto___35141 < len__4730__auto___35140)){
args__4736__auto__.push((arguments[i__4731__auto___35141]));

var G__35143 = (i__4731__auto___35141 + (1));
i__4731__auto___35141 = G__35143;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33657){
var map__33658 = p__33657;
var map__33658__$1 = (((((!((map__33658 == null))))?(((((map__33658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33658):map__33658);
var opts = map__33658__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33655){
var G__33656 = cljs.core.first(seq33655);
var seq33655__$1 = cljs.core.next(seq33655);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33656,seq33655__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33661 = arguments.length;
switch (G__33661) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33571__auto___35149 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33571__auto___35149){
return (function (){
var f__33572__auto__ = (function (){var switch__33471__auto__ = ((function (c__33571__auto___35149){
return (function (state_33685){
var state_val_33686 = (state_33685[(1)]);
if((state_val_33686 === (7))){
var inst_33681 = (state_33685[(2)]);
var state_33685__$1 = state_33685;
var statearr_33687_35152 = state_33685__$1;
(statearr_33687_35152[(2)] = inst_33681);

(statearr_33687_35152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33686 === (1))){
var state_33685__$1 = state_33685;
var statearr_33688_35154 = state_33685__$1;
(statearr_33688_35154[(2)] = null);

(statearr_33688_35154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33686 === (4))){
var inst_33664 = (state_33685[(7)]);
var inst_33664__$1 = (state_33685[(2)]);
var inst_33665 = (inst_33664__$1 == null);
var state_33685__$1 = (function (){var statearr_33689 = state_33685;
(statearr_33689[(7)] = inst_33664__$1);

return statearr_33689;
})();
if(cljs.core.truth_(inst_33665)){
var statearr_33690_35159 = state_33685__$1;
(statearr_33690_35159[(1)] = (5));

} else {
var statearr_33691_35166 = state_33685__$1;
(statearr_33691_35166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33686 === (13))){
var state_33685__$1 = state_33685;
var statearr_33692_35167 = state_33685__$1;
(statearr_33692_35167[(2)] = null);

(statearr_33692_35167[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33686 === (6))){
var inst_33664 = (state_33685[(7)]);
var state_33685__$1 = state_33685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33685__$1,(11),to,inst_33664);
} else {
if((state_val_33686 === (3))){
var inst_33683 = (state_33685[(2)]);
var state_33685__$1 = state_33685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33685__$1,inst_33683);
} else {
if((state_val_33686 === (12))){
var state_33685__$1 = state_33685;
var statearr_33693_35173 = state_33685__$1;
(statearr_33693_35173[(2)] = null);

(statearr_33693_35173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33686 === (2))){
var state_33685__$1 = state_33685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33685__$1,(4),from);
} else {
if((state_val_33686 === (11))){
var inst_33674 = (state_33685[(2)]);
var state_33685__$1 = state_33685;
if(cljs.core.truth_(inst_33674)){
var statearr_33694_35174 = state_33685__$1;
(statearr_33694_35174[(1)] = (12));

} else {
var statearr_33695_35175 = state_33685__$1;
(statearr_33695_35175[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33686 === (9))){
var state_33685__$1 = state_33685;
var statearr_33696_35176 = state_33685__$1;
(statearr_33696_35176[(2)] = null);

(statearr_33696_35176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33686 === (5))){
var state_33685__$1 = state_33685;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33697_35177 = state_33685__$1;
(statearr_33697_35177[(1)] = (8));

} else {
var statearr_33698_35178 = state_33685__$1;
(statearr_33698_35178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33686 === (14))){
var inst_33679 = (state_33685[(2)]);
var state_33685__$1 = state_33685;
var statearr_33699_35179 = state_33685__$1;
(statearr_33699_35179[(2)] = inst_33679);

(statearr_33699_35179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33686 === (10))){
var inst_33671 = (state_33685[(2)]);
var state_33685__$1 = state_33685;
var statearr_33700_35180 = state_33685__$1;
(statearr_33700_35180[(2)] = inst_33671);

(statearr_33700_35180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33686 === (8))){
var inst_33668 = cljs.core.async.close_BANG_(to);
var state_33685__$1 = state_33685;
var statearr_33701_35181 = state_33685__$1;
(statearr_33701_35181[(2)] = inst_33668);

(statearr_33701_35181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33571__auto___35149))
;
return ((function (switch__33471__auto__,c__33571__auto___35149){
return (function() {
var cljs$core$async$state_machine__33472__auto__ = null;
var cljs$core$async$state_machine__33472__auto____0 = (function (){
var statearr_33702 = [null,null,null,null,null,null,null,null];
(statearr_33702[(0)] = cljs$core$async$state_machine__33472__auto__);

(statearr_33702[(1)] = (1));

return statearr_33702;
});
var cljs$core$async$state_machine__33472__auto____1 = (function (state_33685){
while(true){
var ret_value__33473__auto__ = (function (){try{while(true){
var result__33474__auto__ = switch__33471__auto__(state_33685);
if(cljs.core.keyword_identical_QMARK_(result__33474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33474__auto__;
}
break;
}
}catch (e33703){if((e33703 instanceof Object)){
var ex__33475__auto__ = e33703;
var statearr_33704_35182 = state_33685;
(statearr_33704_35182[(5)] = ex__33475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35183 = state_33685;
state_33685 = G__35183;
continue;
} else {
return ret_value__33473__auto__;
}
break;
}
});
cljs$core$async$state_machine__33472__auto__ = function(state_33685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33472__auto____1.call(this,state_33685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33472__auto____0;
cljs$core$async$state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33472__auto____1;
return cljs$core$async$state_machine__33472__auto__;
})()
;})(switch__33471__auto__,c__33571__auto___35149))
})();
var state__33573__auto__ = (function (){var statearr_33705 = (f__33572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33572__auto__.cljs$core$IFn$_invoke$arity$0() : f__33572__auto__.call(null));
(statearr_33705[(6)] = c__33571__auto___35149);

return statearr_33705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33573__auto__);
});})(c__33571__auto___35149))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__33706){
var vec__33707 = p__33706;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33707,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33707,(1),null);
var job = vec__33707;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33571__auto___35186 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33571__auto___35186,res,vec__33707,v,p,job,jobs,results){
return (function (){
var f__33572__auto__ = (function (){var switch__33471__auto__ = ((function (c__33571__auto___35186,res,vec__33707,v,p,job,jobs,results){
return (function (state_33714){
var state_val_33715 = (state_33714[(1)]);
if((state_val_33715 === (1))){
var state_33714__$1 = state_33714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33714__$1,(2),res,v);
} else {
if((state_val_33715 === (2))){
var inst_33711 = (state_33714[(2)]);
var inst_33712 = cljs.core.async.close_BANG_(res);
var state_33714__$1 = (function (){var statearr_33716 = state_33714;
(statearr_33716[(7)] = inst_33711);

return statearr_33716;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33714__$1,inst_33712);
} else {
return null;
}
}
});})(c__33571__auto___35186,res,vec__33707,v,p,job,jobs,results))
;
return ((function (switch__33471__auto__,c__33571__auto___35186,res,vec__33707,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____0 = (function (){
var statearr_33717 = [null,null,null,null,null,null,null,null];
(statearr_33717[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__);

(statearr_33717[(1)] = (1));

return statearr_33717;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____1 = (function (state_33714){
while(true){
var ret_value__33473__auto__ = (function (){try{while(true){
var result__33474__auto__ = switch__33471__auto__(state_33714);
if(cljs.core.keyword_identical_QMARK_(result__33474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33474__auto__;
}
break;
}
}catch (e33718){if((e33718 instanceof Object)){
var ex__33475__auto__ = e33718;
var statearr_33719_35192 = state_33714;
(statearr_33719_35192[(5)] = ex__33475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33718;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35193 = state_33714;
state_33714 = G__35193;
continue;
} else {
return ret_value__33473__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__ = function(state_33714){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____1.call(this,state_33714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__;
})()
;})(switch__33471__auto__,c__33571__auto___35186,res,vec__33707,v,p,job,jobs,results))
})();
var state__33573__auto__ = (function (){var statearr_33720 = (f__33572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33572__auto__.cljs$core$IFn$_invoke$arity$0() : f__33572__auto__.call(null));
(statearr_33720[(6)] = c__33571__auto___35186);

return statearr_33720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33573__auto__);
});})(c__33571__auto___35186,res,vec__33707,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33721){
var vec__33722 = p__33721;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33722,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33722,(1),null);
var job = vec__33722;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___35197 = n;
var __35198 = (0);
while(true){
if((__35198 < n__4607__auto___35197)){
var G__33725_35199 = type;
var G__33725_35200__$1 = (((G__33725_35199 instanceof cljs.core.Keyword))?G__33725_35199.fqn:null);
switch (G__33725_35200__$1) {
case "compute":
var c__33571__auto___35202 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35198,c__33571__auto___35202,G__33725_35199,G__33725_35200__$1,n__4607__auto___35197,jobs,results,process,async){
return (function (){
var f__33572__auto__ = (function (){var switch__33471__auto__ = ((function (__35198,c__33571__auto___35202,G__33725_35199,G__33725_35200__$1,n__4607__auto___35197,jobs,results,process,async){
return (function (state_33738){
var state_val_33739 = (state_33738[(1)]);
if((state_val_33739 === (1))){
var state_33738__$1 = state_33738;
var statearr_33740_35204 = state_33738__$1;
(statearr_33740_35204[(2)] = null);

(statearr_33740_35204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33739 === (2))){
var state_33738__$1 = state_33738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33738__$1,(4),jobs);
} else {
if((state_val_33739 === (3))){
var inst_33736 = (state_33738[(2)]);
var state_33738__$1 = state_33738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33738__$1,inst_33736);
} else {
if((state_val_33739 === (4))){
var inst_33728 = (state_33738[(2)]);
var inst_33729 = process(inst_33728);
var state_33738__$1 = state_33738;
if(cljs.core.truth_(inst_33729)){
var statearr_33741_35209 = state_33738__$1;
(statearr_33741_35209[(1)] = (5));

} else {
var statearr_33742_35210 = state_33738__$1;
(statearr_33742_35210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33739 === (5))){
var state_33738__$1 = state_33738;
var statearr_33743_35211 = state_33738__$1;
(statearr_33743_35211[(2)] = null);

(statearr_33743_35211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33739 === (6))){
var state_33738__$1 = state_33738;
var statearr_33744_35213 = state_33738__$1;
(statearr_33744_35213[(2)] = null);

(statearr_33744_35213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33739 === (7))){
var inst_33734 = (state_33738[(2)]);
var state_33738__$1 = state_33738;
var statearr_33745_35215 = state_33738__$1;
(statearr_33745_35215[(2)] = inst_33734);

(statearr_33745_35215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35198,c__33571__auto___35202,G__33725_35199,G__33725_35200__$1,n__4607__auto___35197,jobs,results,process,async))
;
return ((function (__35198,switch__33471__auto__,c__33571__auto___35202,G__33725_35199,G__33725_35200__$1,n__4607__auto___35197,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____0 = (function (){
var statearr_33746 = [null,null,null,null,null,null,null];
(statearr_33746[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__);

(statearr_33746[(1)] = (1));

return statearr_33746;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____1 = (function (state_33738){
while(true){
var ret_value__33473__auto__ = (function (){try{while(true){
var result__33474__auto__ = switch__33471__auto__(state_33738);
if(cljs.core.keyword_identical_QMARK_(result__33474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33474__auto__;
}
break;
}
}catch (e33747){if((e33747 instanceof Object)){
var ex__33475__auto__ = e33747;
var statearr_33748_35220 = state_33738;
(statearr_33748_35220[(5)] = ex__33475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33747;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35222 = state_33738;
state_33738 = G__35222;
continue;
} else {
return ret_value__33473__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__ = function(state_33738){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____1.call(this,state_33738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__;
})()
;})(__35198,switch__33471__auto__,c__33571__auto___35202,G__33725_35199,G__33725_35200__$1,n__4607__auto___35197,jobs,results,process,async))
})();
var state__33573__auto__ = (function (){var statearr_33749 = (f__33572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33572__auto__.cljs$core$IFn$_invoke$arity$0() : f__33572__auto__.call(null));
(statearr_33749[(6)] = c__33571__auto___35202);

return statearr_33749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33573__auto__);
});})(__35198,c__33571__auto___35202,G__33725_35199,G__33725_35200__$1,n__4607__auto___35197,jobs,results,process,async))
);


break;
case "async":
var c__33571__auto___35224 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35198,c__33571__auto___35224,G__33725_35199,G__33725_35200__$1,n__4607__auto___35197,jobs,results,process,async){
return (function (){
var f__33572__auto__ = (function (){var switch__33471__auto__ = ((function (__35198,c__33571__auto___35224,G__33725_35199,G__33725_35200__$1,n__4607__auto___35197,jobs,results,process,async){
return (function (state_33762){
var state_val_33763 = (state_33762[(1)]);
if((state_val_33763 === (1))){
var state_33762__$1 = state_33762;
var statearr_33764_35225 = state_33762__$1;
(statearr_33764_35225[(2)] = null);

(statearr_33764_35225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33763 === (2))){
var state_33762__$1 = state_33762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33762__$1,(4),jobs);
} else {
if((state_val_33763 === (3))){
var inst_33760 = (state_33762[(2)]);
var state_33762__$1 = state_33762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33762__$1,inst_33760);
} else {
if((state_val_33763 === (4))){
var inst_33752 = (state_33762[(2)]);
var inst_33753 = async(inst_33752);
var state_33762__$1 = state_33762;
if(cljs.core.truth_(inst_33753)){
var statearr_33765_35227 = state_33762__$1;
(statearr_33765_35227[(1)] = (5));

} else {
var statearr_33766_35229 = state_33762__$1;
(statearr_33766_35229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33763 === (5))){
var state_33762__$1 = state_33762;
var statearr_33767_35230 = state_33762__$1;
(statearr_33767_35230[(2)] = null);

(statearr_33767_35230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33763 === (6))){
var state_33762__$1 = state_33762;
var statearr_33768_35231 = state_33762__$1;
(statearr_33768_35231[(2)] = null);

(statearr_33768_35231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33763 === (7))){
var inst_33758 = (state_33762[(2)]);
var state_33762__$1 = state_33762;
var statearr_33769_35232 = state_33762__$1;
(statearr_33769_35232[(2)] = inst_33758);

(statearr_33769_35232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35198,c__33571__auto___35224,G__33725_35199,G__33725_35200__$1,n__4607__auto___35197,jobs,results,process,async))
;
return ((function (__35198,switch__33471__auto__,c__33571__auto___35224,G__33725_35199,G__33725_35200__$1,n__4607__auto___35197,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____0 = (function (){
var statearr_33770 = [null,null,null,null,null,null,null];
(statearr_33770[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__);

(statearr_33770[(1)] = (1));

return statearr_33770;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____1 = (function (state_33762){
while(true){
var ret_value__33473__auto__ = (function (){try{while(true){
var result__33474__auto__ = switch__33471__auto__(state_33762);
if(cljs.core.keyword_identical_QMARK_(result__33474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33474__auto__;
}
break;
}
}catch (e33771){if((e33771 instanceof Object)){
var ex__33475__auto__ = e33771;
var statearr_33772_35233 = state_33762;
(statearr_33772_35233[(5)] = ex__33475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35234 = state_33762;
state_33762 = G__35234;
continue;
} else {
return ret_value__33473__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__ = function(state_33762){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____1.call(this,state_33762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__;
})()
;})(__35198,switch__33471__auto__,c__33571__auto___35224,G__33725_35199,G__33725_35200__$1,n__4607__auto___35197,jobs,results,process,async))
})();
var state__33573__auto__ = (function (){var statearr_33773 = (f__33572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33572__auto__.cljs$core$IFn$_invoke$arity$0() : f__33572__auto__.call(null));
(statearr_33773[(6)] = c__33571__auto___35224);

return statearr_33773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33573__auto__);
});})(__35198,c__33571__auto___35224,G__33725_35199,G__33725_35200__$1,n__4607__auto___35197,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33725_35200__$1)].join('')));

}

var G__35237 = (__35198 + (1));
__35198 = G__35237;
continue;
} else {
}
break;
}

var c__33571__auto___35238 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33571__auto___35238,jobs,results,process,async){
return (function (){
var f__33572__auto__ = (function (){var switch__33471__auto__ = ((function (c__33571__auto___35238,jobs,results,process,async){
return (function (state_33795){
var state_val_33796 = (state_33795[(1)]);
if((state_val_33796 === (7))){
var inst_33791 = (state_33795[(2)]);
var state_33795__$1 = state_33795;
var statearr_33797_35239 = state_33795__$1;
(statearr_33797_35239[(2)] = inst_33791);

(statearr_33797_35239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33796 === (1))){
var state_33795__$1 = state_33795;
var statearr_33798_35242 = state_33795__$1;
(statearr_33798_35242[(2)] = null);

(statearr_33798_35242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33796 === (4))){
var inst_33776 = (state_33795[(7)]);
var inst_33776__$1 = (state_33795[(2)]);
var inst_33777 = (inst_33776__$1 == null);
var state_33795__$1 = (function (){var statearr_33799 = state_33795;
(statearr_33799[(7)] = inst_33776__$1);

return statearr_33799;
})();
if(cljs.core.truth_(inst_33777)){
var statearr_33800_35247 = state_33795__$1;
(statearr_33800_35247[(1)] = (5));

} else {
var statearr_33801_35248 = state_33795__$1;
(statearr_33801_35248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33796 === (6))){
var inst_33781 = (state_33795[(8)]);
var inst_33776 = (state_33795[(7)]);
var inst_33781__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33782 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33783 = [inst_33776,inst_33781__$1];
var inst_33784 = (new cljs.core.PersistentVector(null,2,(5),inst_33782,inst_33783,null));
var state_33795__$1 = (function (){var statearr_33802 = state_33795;
(statearr_33802[(8)] = inst_33781__$1);

return statearr_33802;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33795__$1,(8),jobs,inst_33784);
} else {
if((state_val_33796 === (3))){
var inst_33793 = (state_33795[(2)]);
var state_33795__$1 = state_33795;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33795__$1,inst_33793);
} else {
if((state_val_33796 === (2))){
var state_33795__$1 = state_33795;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33795__$1,(4),from);
} else {
if((state_val_33796 === (9))){
var inst_33788 = (state_33795[(2)]);
var state_33795__$1 = (function (){var statearr_33803 = state_33795;
(statearr_33803[(9)] = inst_33788);

return statearr_33803;
})();
var statearr_33804_35253 = state_33795__$1;
(statearr_33804_35253[(2)] = null);

(statearr_33804_35253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33796 === (5))){
var inst_33779 = cljs.core.async.close_BANG_(jobs);
var state_33795__$1 = state_33795;
var statearr_33805_35256 = state_33795__$1;
(statearr_33805_35256[(2)] = inst_33779);

(statearr_33805_35256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33796 === (8))){
var inst_33781 = (state_33795[(8)]);
var inst_33786 = (state_33795[(2)]);
var state_33795__$1 = (function (){var statearr_33806 = state_33795;
(statearr_33806[(10)] = inst_33786);

return statearr_33806;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33795__$1,(9),results,inst_33781);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__33571__auto___35238,jobs,results,process,async))
;
return ((function (switch__33471__auto__,c__33571__auto___35238,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____0 = (function (){
var statearr_33807 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33807[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__);

(statearr_33807[(1)] = (1));

return statearr_33807;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____1 = (function (state_33795){
while(true){
var ret_value__33473__auto__ = (function (){try{while(true){
var result__33474__auto__ = switch__33471__auto__(state_33795);
if(cljs.core.keyword_identical_QMARK_(result__33474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33474__auto__;
}
break;
}
}catch (e33808){if((e33808 instanceof Object)){
var ex__33475__auto__ = e33808;
var statearr_33809_35258 = state_33795;
(statearr_33809_35258[(5)] = ex__33475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33808;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35259 = state_33795;
state_33795 = G__35259;
continue;
} else {
return ret_value__33473__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__ = function(state_33795){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____1.call(this,state_33795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__;
})()
;})(switch__33471__auto__,c__33571__auto___35238,jobs,results,process,async))
})();
var state__33573__auto__ = (function (){var statearr_33810 = (f__33572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33572__auto__.cljs$core$IFn$_invoke$arity$0() : f__33572__auto__.call(null));
(statearr_33810[(6)] = c__33571__auto___35238);

return statearr_33810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33573__auto__);
});})(c__33571__auto___35238,jobs,results,process,async))
);


var c__33571__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33571__auto__,jobs,results,process,async){
return (function (){
var f__33572__auto__ = (function (){var switch__33471__auto__ = ((function (c__33571__auto__,jobs,results,process,async){
return (function (state_33848){
var state_val_33849 = (state_33848[(1)]);
if((state_val_33849 === (7))){
var inst_33844 = (state_33848[(2)]);
var state_33848__$1 = state_33848;
var statearr_33850_35260 = state_33848__$1;
(statearr_33850_35260[(2)] = inst_33844);

(statearr_33850_35260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (20))){
var state_33848__$1 = state_33848;
var statearr_33851_35261 = state_33848__$1;
(statearr_33851_35261[(2)] = null);

(statearr_33851_35261[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (1))){
var state_33848__$1 = state_33848;
var statearr_33852_35262 = state_33848__$1;
(statearr_33852_35262[(2)] = null);

(statearr_33852_35262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (4))){
var inst_33813 = (state_33848[(7)]);
var inst_33813__$1 = (state_33848[(2)]);
var inst_33814 = (inst_33813__$1 == null);
var state_33848__$1 = (function (){var statearr_33853 = state_33848;
(statearr_33853[(7)] = inst_33813__$1);

return statearr_33853;
})();
if(cljs.core.truth_(inst_33814)){
var statearr_33854_35263 = state_33848__$1;
(statearr_33854_35263[(1)] = (5));

} else {
var statearr_33855_35264 = state_33848__$1;
(statearr_33855_35264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (15))){
var inst_33826 = (state_33848[(8)]);
var state_33848__$1 = state_33848;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33848__$1,(18),to,inst_33826);
} else {
if((state_val_33849 === (21))){
var inst_33839 = (state_33848[(2)]);
var state_33848__$1 = state_33848;
var statearr_33856_35269 = state_33848__$1;
(statearr_33856_35269[(2)] = inst_33839);

(statearr_33856_35269[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (13))){
var inst_33841 = (state_33848[(2)]);
var state_33848__$1 = (function (){var statearr_33857 = state_33848;
(statearr_33857[(9)] = inst_33841);

return statearr_33857;
})();
var statearr_33858_35273 = state_33848__$1;
(statearr_33858_35273[(2)] = null);

(statearr_33858_35273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (6))){
var inst_33813 = (state_33848[(7)]);
var state_33848__$1 = state_33848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33848__$1,(11),inst_33813);
} else {
if((state_val_33849 === (17))){
var inst_33834 = (state_33848[(2)]);
var state_33848__$1 = state_33848;
if(cljs.core.truth_(inst_33834)){
var statearr_33859_35277 = state_33848__$1;
(statearr_33859_35277[(1)] = (19));

} else {
var statearr_33860_35278 = state_33848__$1;
(statearr_33860_35278[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (3))){
var inst_33846 = (state_33848[(2)]);
var state_33848__$1 = state_33848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33848__$1,inst_33846);
} else {
if((state_val_33849 === (12))){
var inst_33823 = (state_33848[(10)]);
var state_33848__$1 = state_33848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33848__$1,(14),inst_33823);
} else {
if((state_val_33849 === (2))){
var state_33848__$1 = state_33848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33848__$1,(4),results);
} else {
if((state_val_33849 === (19))){
var state_33848__$1 = state_33848;
var statearr_33861_35282 = state_33848__$1;
(statearr_33861_35282[(2)] = null);

(statearr_33861_35282[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (11))){
var inst_33823 = (state_33848[(2)]);
var state_33848__$1 = (function (){var statearr_33862 = state_33848;
(statearr_33862[(10)] = inst_33823);

return statearr_33862;
})();
var statearr_33863_35283 = state_33848__$1;
(statearr_33863_35283[(2)] = null);

(statearr_33863_35283[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (9))){
var state_33848__$1 = state_33848;
var statearr_33864_35287 = state_33848__$1;
(statearr_33864_35287[(2)] = null);

(statearr_33864_35287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (5))){
var state_33848__$1 = state_33848;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33865_35288 = state_33848__$1;
(statearr_33865_35288[(1)] = (8));

} else {
var statearr_33866_35289 = state_33848__$1;
(statearr_33866_35289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (14))){
var inst_33826 = (state_33848[(8)]);
var inst_33828 = (state_33848[(11)]);
var inst_33826__$1 = (state_33848[(2)]);
var inst_33827 = (inst_33826__$1 == null);
var inst_33828__$1 = cljs.core.not(inst_33827);
var state_33848__$1 = (function (){var statearr_33867 = state_33848;
(statearr_33867[(8)] = inst_33826__$1);

(statearr_33867[(11)] = inst_33828__$1);

return statearr_33867;
})();
if(inst_33828__$1){
var statearr_33868_35298 = state_33848__$1;
(statearr_33868_35298[(1)] = (15));

} else {
var statearr_33869_35299 = state_33848__$1;
(statearr_33869_35299[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (16))){
var inst_33828 = (state_33848[(11)]);
var state_33848__$1 = state_33848;
var statearr_33870_35300 = state_33848__$1;
(statearr_33870_35300[(2)] = inst_33828);

(statearr_33870_35300[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (10))){
var inst_33820 = (state_33848[(2)]);
var state_33848__$1 = state_33848;
var statearr_33871_35305 = state_33848__$1;
(statearr_33871_35305[(2)] = inst_33820);

(statearr_33871_35305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (18))){
var inst_33831 = (state_33848[(2)]);
var state_33848__$1 = state_33848;
var statearr_33872_35309 = state_33848__$1;
(statearr_33872_35309[(2)] = inst_33831);

(statearr_33872_35309[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (8))){
var inst_33817 = cljs.core.async.close_BANG_(to);
var state_33848__$1 = state_33848;
var statearr_33873_35310 = state_33848__$1;
(statearr_33873_35310[(2)] = inst_33817);

(statearr_33873_35310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33571__auto__,jobs,results,process,async))
;
return ((function (switch__33471__auto__,c__33571__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____0 = (function (){
var statearr_33874 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33874[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__);

(statearr_33874[(1)] = (1));

return statearr_33874;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____1 = (function (state_33848){
while(true){
var ret_value__33473__auto__ = (function (){try{while(true){
var result__33474__auto__ = switch__33471__auto__(state_33848);
if(cljs.core.keyword_identical_QMARK_(result__33474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33474__auto__;
}
break;
}
}catch (e33875){if((e33875 instanceof Object)){
var ex__33475__auto__ = e33875;
var statearr_33876_35317 = state_33848;
(statearr_33876_35317[(5)] = ex__33475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33875;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35321 = state_33848;
state_33848 = G__35321;
continue;
} else {
return ret_value__33473__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__ = function(state_33848){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____1.call(this,state_33848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33472__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33472__auto__;
})()
;})(switch__33471__auto__,c__33571__auto__,jobs,results,process,async))
})();
var state__33573__auto__ = (function (){var statearr_33877 = (f__33572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33572__auto__.cljs$core$IFn$_invoke$arity$0() : f__33572__auto__.call(null));
(statearr_33877[(6)] = c__33571__auto__);

return statearr_33877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33573__auto__);
});})(c__33571__auto__,jobs,results,process,async))
);

return c__33571__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33879 = arguments.length;
switch (G__33879) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33881 = arguments.length;
switch (G__33881) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33883 = arguments.length;
switch (G__33883) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33571__auto___35354 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33571__auto___35354,tc,fc){
return (function (){
var f__33572__auto__ = (function (){var switch__33471__auto__ = ((function (c__33571__auto___35354,tc,fc){
return (function (state_33909){
var state_val_33910 = (state_33909[(1)]);
if((state_val_33910 === (7))){
var inst_33905 = (state_33909[(2)]);
var state_33909__$1 = state_33909;
var statearr_33911_35355 = state_33909__$1;
(statearr_33911_35355[(2)] = inst_33905);

(statearr_33911_35355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (1))){
var state_33909__$1 = state_33909;
var statearr_33912_35356 = state_33909__$1;
(statearr_33912_35356[(2)] = null);

(statearr_33912_35356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (4))){
var inst_33886 = (state_33909[(7)]);
var inst_33886__$1 = (state_33909[(2)]);
var inst_33887 = (inst_33886__$1 == null);
var state_33909__$1 = (function (){var statearr_33913 = state_33909;
(statearr_33913[(7)] = inst_33886__$1);

return statearr_33913;
})();
if(cljs.core.truth_(inst_33887)){
var statearr_33914_35357 = state_33909__$1;
(statearr_33914_35357[(1)] = (5));

} else {
var statearr_33915_35358 = state_33909__$1;
(statearr_33915_35358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (13))){
var state_33909__$1 = state_33909;
var statearr_33916_35359 = state_33909__$1;
(statearr_33916_35359[(2)] = null);

(statearr_33916_35359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (6))){
var inst_33886 = (state_33909[(7)]);
var inst_33892 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33886) : p.call(null,inst_33886));
var state_33909__$1 = state_33909;
if(cljs.core.truth_(inst_33892)){
var statearr_33917_35360 = state_33909__$1;
(statearr_33917_35360[(1)] = (9));

} else {
var statearr_33918_35361 = state_33909__$1;
(statearr_33918_35361[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (3))){
var inst_33907 = (state_33909[(2)]);
var state_33909__$1 = state_33909;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33909__$1,inst_33907);
} else {
if((state_val_33910 === (12))){
var state_33909__$1 = state_33909;
var statearr_33919_35362 = state_33909__$1;
(statearr_33919_35362[(2)] = null);

(statearr_33919_35362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (2))){
var state_33909__$1 = state_33909;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33909__$1,(4),ch);
} else {
if((state_val_33910 === (11))){
var inst_33886 = (state_33909[(7)]);
var inst_33896 = (state_33909[(2)]);
var state_33909__$1 = state_33909;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33909__$1,(8),inst_33896,inst_33886);
} else {
if((state_val_33910 === (9))){
var state_33909__$1 = state_33909;
var statearr_33920_35365 = state_33909__$1;
(statearr_33920_35365[(2)] = tc);

(statearr_33920_35365[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (5))){
var inst_33889 = cljs.core.async.close_BANG_(tc);
var inst_33890 = cljs.core.async.close_BANG_(fc);
var state_33909__$1 = (function (){var statearr_33921 = state_33909;
(statearr_33921[(8)] = inst_33889);

return statearr_33921;
})();
var statearr_33922_35366 = state_33909__$1;
(statearr_33922_35366[(2)] = inst_33890);

(statearr_33922_35366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (14))){
var inst_33903 = (state_33909[(2)]);
var state_33909__$1 = state_33909;
var statearr_33923_35367 = state_33909__$1;
(statearr_33923_35367[(2)] = inst_33903);

(statearr_33923_35367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (10))){
var state_33909__$1 = state_33909;
var statearr_33924_35368 = state_33909__$1;
(statearr_33924_35368[(2)] = fc);

(statearr_33924_35368[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (8))){
var inst_33898 = (state_33909[(2)]);
var state_33909__$1 = state_33909;
if(cljs.core.truth_(inst_33898)){
var statearr_33925_35369 = state_33909__$1;
(statearr_33925_35369[(1)] = (12));

} else {
var statearr_33926_35370 = state_33909__$1;
(statearr_33926_35370[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33571__auto___35354,tc,fc))
;
return ((function (switch__33471__auto__,c__33571__auto___35354,tc,fc){
return (function() {
var cljs$core$async$state_machine__33472__auto__ = null;
var cljs$core$async$state_machine__33472__auto____0 = (function (){
var statearr_33927 = [null,null,null,null,null,null,null,null,null];
(statearr_33927[(0)] = cljs$core$async$state_machine__33472__auto__);

(statearr_33927[(1)] = (1));

return statearr_33927;
});
var cljs$core$async$state_machine__33472__auto____1 = (function (state_33909){
while(true){
var ret_value__33473__auto__ = (function (){try{while(true){
var result__33474__auto__ = switch__33471__auto__(state_33909);
if(cljs.core.keyword_identical_QMARK_(result__33474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33474__auto__;
}
break;
}
}catch (e33928){if((e33928 instanceof Object)){
var ex__33475__auto__ = e33928;
var statearr_33929_35377 = state_33909;
(statearr_33929_35377[(5)] = ex__33475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33928;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35379 = state_33909;
state_33909 = G__35379;
continue;
} else {
return ret_value__33473__auto__;
}
break;
}
});
cljs$core$async$state_machine__33472__auto__ = function(state_33909){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33472__auto____1.call(this,state_33909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33472__auto____0;
cljs$core$async$state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33472__auto____1;
return cljs$core$async$state_machine__33472__auto__;
})()
;})(switch__33471__auto__,c__33571__auto___35354,tc,fc))
})();
var state__33573__auto__ = (function (){var statearr_33930 = (f__33572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33572__auto__.cljs$core$IFn$_invoke$arity$0() : f__33572__auto__.call(null));
(statearr_33930[(6)] = c__33571__auto___35354);

return statearr_33930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33573__auto__);
});})(c__33571__auto___35354,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33571__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33571__auto__){
return (function (){
var f__33572__auto__ = (function (){var switch__33471__auto__ = ((function (c__33571__auto__){
return (function (state_33951){
var state_val_33952 = (state_33951[(1)]);
if((state_val_33952 === (7))){
var inst_33947 = (state_33951[(2)]);
var state_33951__$1 = state_33951;
var statearr_33953_35382 = state_33951__$1;
(statearr_33953_35382[(2)] = inst_33947);

(statearr_33953_35382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (1))){
var inst_33931 = init;
var state_33951__$1 = (function (){var statearr_33954 = state_33951;
(statearr_33954[(7)] = inst_33931);

return statearr_33954;
})();
var statearr_33955_35383 = state_33951__$1;
(statearr_33955_35383[(2)] = null);

(statearr_33955_35383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (4))){
var inst_33934 = (state_33951[(8)]);
var inst_33934__$1 = (state_33951[(2)]);
var inst_33935 = (inst_33934__$1 == null);
var state_33951__$1 = (function (){var statearr_33956 = state_33951;
(statearr_33956[(8)] = inst_33934__$1);

return statearr_33956;
})();
if(cljs.core.truth_(inst_33935)){
var statearr_33957_35385 = state_33951__$1;
(statearr_33957_35385[(1)] = (5));

} else {
var statearr_33958_35389 = state_33951__$1;
(statearr_33958_35389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (6))){
var inst_33931 = (state_33951[(7)]);
var inst_33938 = (state_33951[(9)]);
var inst_33934 = (state_33951[(8)]);
var inst_33938__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33931,inst_33934) : f.call(null,inst_33931,inst_33934));
var inst_33939 = cljs.core.reduced_QMARK_(inst_33938__$1);
var state_33951__$1 = (function (){var statearr_33959 = state_33951;
(statearr_33959[(9)] = inst_33938__$1);

return statearr_33959;
})();
if(inst_33939){
var statearr_33960_35394 = state_33951__$1;
(statearr_33960_35394[(1)] = (8));

} else {
var statearr_33961_35395 = state_33951__$1;
(statearr_33961_35395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (3))){
var inst_33949 = (state_33951[(2)]);
var state_33951__$1 = state_33951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33951__$1,inst_33949);
} else {
if((state_val_33952 === (2))){
var state_33951__$1 = state_33951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33951__$1,(4),ch);
} else {
if((state_val_33952 === (9))){
var inst_33938 = (state_33951[(9)]);
var inst_33931 = inst_33938;
var state_33951__$1 = (function (){var statearr_33962 = state_33951;
(statearr_33962[(7)] = inst_33931);

return statearr_33962;
})();
var statearr_33963_35409 = state_33951__$1;
(statearr_33963_35409[(2)] = null);

(statearr_33963_35409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (5))){
var inst_33931 = (state_33951[(7)]);
var state_33951__$1 = state_33951;
var statearr_33964_35410 = state_33951__$1;
(statearr_33964_35410[(2)] = inst_33931);

(statearr_33964_35410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (10))){
var inst_33945 = (state_33951[(2)]);
var state_33951__$1 = state_33951;
var statearr_33965_35411 = state_33951__$1;
(statearr_33965_35411[(2)] = inst_33945);

(statearr_33965_35411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33952 === (8))){
var inst_33938 = (state_33951[(9)]);
var inst_33941 = cljs.core.deref(inst_33938);
var state_33951__$1 = state_33951;
var statearr_33966_35412 = state_33951__$1;
(statearr_33966_35412[(2)] = inst_33941);

(statearr_33966_35412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__33571__auto__))
;
return ((function (switch__33471__auto__,c__33571__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33472__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33472__auto____0 = (function (){
var statearr_33967 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33967[(0)] = cljs$core$async$reduce_$_state_machine__33472__auto__);

(statearr_33967[(1)] = (1));

return statearr_33967;
});
var cljs$core$async$reduce_$_state_machine__33472__auto____1 = (function (state_33951){
while(true){
var ret_value__33473__auto__ = (function (){try{while(true){
var result__33474__auto__ = switch__33471__auto__(state_33951);
if(cljs.core.keyword_identical_QMARK_(result__33474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33474__auto__;
}
break;
}
}catch (e33968){if((e33968 instanceof Object)){
var ex__33475__auto__ = e33968;
var statearr_33969_35413 = state_33951;
(statearr_33969_35413[(5)] = ex__33475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33968;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35414 = state_33951;
state_33951 = G__35414;
continue;
} else {
return ret_value__33473__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33472__auto__ = function(state_33951){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33472__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33472__auto____1.call(this,state_33951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33472__auto____0;
cljs$core$async$reduce_$_state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33472__auto____1;
return cljs$core$async$reduce_$_state_machine__33472__auto__;
})()
;})(switch__33471__auto__,c__33571__auto__))
})();
var state__33573__auto__ = (function (){var statearr_33970 = (f__33572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33572__auto__.cljs$core$IFn$_invoke$arity$0() : f__33572__auto__.call(null));
(statearr_33970[(6)] = c__33571__auto__);

return statearr_33970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33573__auto__);
});})(c__33571__auto__))
);

return c__33571__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33571__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33571__auto__,f__$1){
return (function (){
var f__33572__auto__ = (function (){var switch__33471__auto__ = ((function (c__33571__auto__,f__$1){
return (function (state_33976){
var state_val_33977 = (state_33976[(1)]);
if((state_val_33977 === (1))){
var inst_33971 = cljs.core.async.reduce(f__$1,init,ch);
var state_33976__$1 = state_33976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33976__$1,(2),inst_33971);
} else {
if((state_val_33977 === (2))){
var inst_33973 = (state_33976[(2)]);
var inst_33974 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33973) : f__$1.call(null,inst_33973));
var state_33976__$1 = state_33976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33976__$1,inst_33974);
} else {
return null;
}
}
});})(c__33571__auto__,f__$1))
;
return ((function (switch__33471__auto__,c__33571__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33472__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33472__auto____0 = (function (){
var statearr_33978 = [null,null,null,null,null,null,null];
(statearr_33978[(0)] = cljs$core$async$transduce_$_state_machine__33472__auto__);

(statearr_33978[(1)] = (1));

return statearr_33978;
});
var cljs$core$async$transduce_$_state_machine__33472__auto____1 = (function (state_33976){
while(true){
var ret_value__33473__auto__ = (function (){try{while(true){
var result__33474__auto__ = switch__33471__auto__(state_33976);
if(cljs.core.keyword_identical_QMARK_(result__33474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33474__auto__;
}
break;
}
}catch (e33979){if((e33979 instanceof Object)){
var ex__33475__auto__ = e33979;
var statearr_33980_35421 = state_33976;
(statearr_33980_35421[(5)] = ex__33475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33979;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35422 = state_33976;
state_33976 = G__35422;
continue;
} else {
return ret_value__33473__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33472__auto__ = function(state_33976){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33472__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33472__auto____1.call(this,state_33976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33472__auto____0;
cljs$core$async$transduce_$_state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33472__auto____1;
return cljs$core$async$transduce_$_state_machine__33472__auto__;
})()
;})(switch__33471__auto__,c__33571__auto__,f__$1))
})();
var state__33573__auto__ = (function (){var statearr_33981 = (f__33572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33572__auto__.cljs$core$IFn$_invoke$arity$0() : f__33572__auto__.call(null));
(statearr_33981[(6)] = c__33571__auto__);

return statearr_33981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33573__auto__);
});})(c__33571__auto__,f__$1))
);

return c__33571__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33983 = arguments.length;
switch (G__33983) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33571__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33571__auto__){
return (function (){
var f__33572__auto__ = (function (){var switch__33471__auto__ = ((function (c__33571__auto__){
return (function (state_34008){
var state_val_34009 = (state_34008[(1)]);
if((state_val_34009 === (7))){
var inst_33990 = (state_34008[(2)]);
var state_34008__$1 = state_34008;
var statearr_34010_35430 = state_34008__$1;
(statearr_34010_35430[(2)] = inst_33990);

(statearr_34010_35430[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (1))){
var inst_33984 = cljs.core.seq(coll);
var inst_33985 = inst_33984;
var state_34008__$1 = (function (){var statearr_34011 = state_34008;
(statearr_34011[(7)] = inst_33985);

return statearr_34011;
})();
var statearr_34012_35431 = state_34008__$1;
(statearr_34012_35431[(2)] = null);

(statearr_34012_35431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (4))){
var inst_33985 = (state_34008[(7)]);
var inst_33988 = cljs.core.first(inst_33985);
var state_34008__$1 = state_34008;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34008__$1,(7),ch,inst_33988);
} else {
if((state_val_34009 === (13))){
var inst_34002 = (state_34008[(2)]);
var state_34008__$1 = state_34008;
var statearr_34013_35432 = state_34008__$1;
(statearr_34013_35432[(2)] = inst_34002);

(statearr_34013_35432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (6))){
var inst_33993 = (state_34008[(2)]);
var state_34008__$1 = state_34008;
if(cljs.core.truth_(inst_33993)){
var statearr_34014_35433 = state_34008__$1;
(statearr_34014_35433[(1)] = (8));

} else {
var statearr_34015_35434 = state_34008__$1;
(statearr_34015_35434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (3))){
var inst_34006 = (state_34008[(2)]);
var state_34008__$1 = state_34008;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34008__$1,inst_34006);
} else {
if((state_val_34009 === (12))){
var state_34008__$1 = state_34008;
var statearr_34016_35441 = state_34008__$1;
(statearr_34016_35441[(2)] = null);

(statearr_34016_35441[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (2))){
var inst_33985 = (state_34008[(7)]);
var state_34008__$1 = state_34008;
if(cljs.core.truth_(inst_33985)){
var statearr_34017_35442 = state_34008__$1;
(statearr_34017_35442[(1)] = (4));

} else {
var statearr_34018_35443 = state_34008__$1;
(statearr_34018_35443[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (11))){
var inst_33999 = cljs.core.async.close_BANG_(ch);
var state_34008__$1 = state_34008;
var statearr_34019_35444 = state_34008__$1;
(statearr_34019_35444[(2)] = inst_33999);

(statearr_34019_35444[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (9))){
var state_34008__$1 = state_34008;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34020_35445 = state_34008__$1;
(statearr_34020_35445[(1)] = (11));

} else {
var statearr_34021_35446 = state_34008__$1;
(statearr_34021_35446[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (5))){
var inst_33985 = (state_34008[(7)]);
var state_34008__$1 = state_34008;
var statearr_34022_35447 = state_34008__$1;
(statearr_34022_35447[(2)] = inst_33985);

(statearr_34022_35447[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (10))){
var inst_34004 = (state_34008[(2)]);
var state_34008__$1 = state_34008;
var statearr_34023_35448 = state_34008__$1;
(statearr_34023_35448[(2)] = inst_34004);

(statearr_34023_35448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34009 === (8))){
var inst_33985 = (state_34008[(7)]);
var inst_33995 = cljs.core.next(inst_33985);
var inst_33985__$1 = inst_33995;
var state_34008__$1 = (function (){var statearr_34024 = state_34008;
(statearr_34024[(7)] = inst_33985__$1);

return statearr_34024;
})();
var statearr_34025_35449 = state_34008__$1;
(statearr_34025_35449[(2)] = null);

(statearr_34025_35449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33571__auto__))
;
return ((function (switch__33471__auto__,c__33571__auto__){
return (function() {
var cljs$core$async$state_machine__33472__auto__ = null;
var cljs$core$async$state_machine__33472__auto____0 = (function (){
var statearr_34026 = [null,null,null,null,null,null,null,null];
(statearr_34026[(0)] = cljs$core$async$state_machine__33472__auto__);

(statearr_34026[(1)] = (1));

return statearr_34026;
});
var cljs$core$async$state_machine__33472__auto____1 = (function (state_34008){
while(true){
var ret_value__33473__auto__ = (function (){try{while(true){
var result__33474__auto__ = switch__33471__auto__(state_34008);
if(cljs.core.keyword_identical_QMARK_(result__33474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33474__auto__;
}
break;
}
}catch (e34027){if((e34027 instanceof Object)){
var ex__33475__auto__ = e34027;
var statearr_34028_35450 = state_34008;
(statearr_34028_35450[(5)] = ex__33475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34027;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35451 = state_34008;
state_34008 = G__35451;
continue;
} else {
return ret_value__33473__auto__;
}
break;
}
});
cljs$core$async$state_machine__33472__auto__ = function(state_34008){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33472__auto____1.call(this,state_34008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33472__auto____0;
cljs$core$async$state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33472__auto____1;
return cljs$core$async$state_machine__33472__auto__;
})()
;})(switch__33471__auto__,c__33571__auto__))
})();
var state__33573__auto__ = (function (){var statearr_34029 = (f__33572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33572__auto__.cljs$core$IFn$_invoke$arity$0() : f__33572__auto__.call(null));
(statearr_34029[(6)] = c__33571__auto__);

return statearr_34029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33573__auto__);
});})(c__33571__auto__))
);

return c__33571__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34030 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34030 = (function (ch,cs,meta34031){
this.ch = ch;
this.cs = cs;
this.meta34031 = meta34031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34032,meta34031__$1){
var self__ = this;
var _34032__$1 = this;
return (new cljs.core.async.t_cljs$core$async34030(self__.ch,self__.cs,meta34031__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34030.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34032){
var self__ = this;
var _34032__$1 = this;
return self__.meta34031;
});})(cs))
;

cljs.core.async.t_cljs$core$async34030.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34030.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34030.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34030.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34030.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34030.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34030.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34031","meta34031",165616303,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34030.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34030";

cljs.core.async.t_cljs$core$async34030.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34030");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34030.
 */
cljs.core.async.__GT_t_cljs$core$async34030 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34030(ch__$1,cs__$1,meta34031){
return (new cljs.core.async.t_cljs$core$async34030(ch__$1,cs__$1,meta34031));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34030(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33571__auto___35464 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33571__auto___35464,cs,m,dchan,dctr,done){
return (function (){
var f__33572__auto__ = (function (){var switch__33471__auto__ = ((function (c__33571__auto___35464,cs,m,dchan,dctr,done){
return (function (state_34167){
var state_val_34168 = (state_34167[(1)]);
if((state_val_34168 === (7))){
var inst_34163 = (state_34167[(2)]);
var state_34167__$1 = state_34167;
var statearr_34169_35465 = state_34167__$1;
(statearr_34169_35465[(2)] = inst_34163);

(statearr_34169_35465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (20))){
var inst_34066 = (state_34167[(7)]);
var inst_34078 = cljs.core.first(inst_34066);
var inst_34079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34078,(0),null);
var inst_34080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34078,(1),null);
var state_34167__$1 = (function (){var statearr_34170 = state_34167;
(statearr_34170[(8)] = inst_34079);

return statearr_34170;
})();
if(cljs.core.truth_(inst_34080)){
var statearr_34171_35466 = state_34167__$1;
(statearr_34171_35466[(1)] = (22));

} else {
var statearr_34172_35467 = state_34167__$1;
(statearr_34172_35467[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (27))){
var inst_34035 = (state_34167[(9)]);
var inst_34110 = (state_34167[(10)]);
var inst_34115 = (state_34167[(11)]);
var inst_34108 = (state_34167[(12)]);
var inst_34115__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34108,inst_34110);
var inst_34116 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34115__$1,inst_34035,done);
var state_34167__$1 = (function (){var statearr_34173 = state_34167;
(statearr_34173[(11)] = inst_34115__$1);

return statearr_34173;
})();
if(cljs.core.truth_(inst_34116)){
var statearr_34174_35470 = state_34167__$1;
(statearr_34174_35470[(1)] = (30));

} else {
var statearr_34175_35471 = state_34167__$1;
(statearr_34175_35471[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (1))){
var state_34167__$1 = state_34167;
var statearr_34176_35472 = state_34167__$1;
(statearr_34176_35472[(2)] = null);

(statearr_34176_35472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (24))){
var inst_34066 = (state_34167[(7)]);
var inst_34085 = (state_34167[(2)]);
var inst_34086 = cljs.core.next(inst_34066);
var inst_34044 = inst_34086;
var inst_34045 = null;
var inst_34046 = (0);
var inst_34047 = (0);
var state_34167__$1 = (function (){var statearr_34177 = state_34167;
(statearr_34177[(13)] = inst_34047);

(statearr_34177[(14)] = inst_34085);

(statearr_34177[(15)] = inst_34045);

(statearr_34177[(16)] = inst_34046);

(statearr_34177[(17)] = inst_34044);

return statearr_34177;
})();
var statearr_34178_35473 = state_34167__$1;
(statearr_34178_35473[(2)] = null);

(statearr_34178_35473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (39))){
var state_34167__$1 = state_34167;
var statearr_34182_35474 = state_34167__$1;
(statearr_34182_35474[(2)] = null);

(statearr_34182_35474[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (4))){
var inst_34035 = (state_34167[(9)]);
var inst_34035__$1 = (state_34167[(2)]);
var inst_34036 = (inst_34035__$1 == null);
var state_34167__$1 = (function (){var statearr_34183 = state_34167;
(statearr_34183[(9)] = inst_34035__$1);

return statearr_34183;
})();
if(cljs.core.truth_(inst_34036)){
var statearr_34184_35475 = state_34167__$1;
(statearr_34184_35475[(1)] = (5));

} else {
var statearr_34185_35476 = state_34167__$1;
(statearr_34185_35476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (15))){
var inst_34047 = (state_34167[(13)]);
var inst_34045 = (state_34167[(15)]);
var inst_34046 = (state_34167[(16)]);
var inst_34044 = (state_34167[(17)]);
var inst_34062 = (state_34167[(2)]);
var inst_34063 = (inst_34047 + (1));
var tmp34179 = inst_34045;
var tmp34180 = inst_34046;
var tmp34181 = inst_34044;
var inst_34044__$1 = tmp34181;
var inst_34045__$1 = tmp34179;
var inst_34046__$1 = tmp34180;
var inst_34047__$1 = inst_34063;
var state_34167__$1 = (function (){var statearr_34186 = state_34167;
(statearr_34186[(13)] = inst_34047__$1);

(statearr_34186[(18)] = inst_34062);

(statearr_34186[(15)] = inst_34045__$1);

(statearr_34186[(16)] = inst_34046__$1);

(statearr_34186[(17)] = inst_34044__$1);

return statearr_34186;
})();
var statearr_34187_35477 = state_34167__$1;
(statearr_34187_35477[(2)] = null);

(statearr_34187_35477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (21))){
var inst_34089 = (state_34167[(2)]);
var state_34167__$1 = state_34167;
var statearr_34191_35478 = state_34167__$1;
(statearr_34191_35478[(2)] = inst_34089);

(statearr_34191_35478[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (31))){
var inst_34115 = (state_34167[(11)]);
var inst_34119 = done(null);
var inst_34120 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34115);
var state_34167__$1 = (function (){var statearr_34192 = state_34167;
(statearr_34192[(19)] = inst_34119);

return statearr_34192;
})();
var statearr_34193_35480 = state_34167__$1;
(statearr_34193_35480[(2)] = inst_34120);

(statearr_34193_35480[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (32))){
var inst_34110 = (state_34167[(10)]);
var inst_34107 = (state_34167[(20)]);
var inst_34109 = (state_34167[(21)]);
var inst_34108 = (state_34167[(12)]);
var inst_34122 = (state_34167[(2)]);
var inst_34123 = (inst_34110 + (1));
var tmp34188 = inst_34107;
var tmp34189 = inst_34109;
var tmp34190 = inst_34108;
var inst_34107__$1 = tmp34188;
var inst_34108__$1 = tmp34190;
var inst_34109__$1 = tmp34189;
var inst_34110__$1 = inst_34123;
var state_34167__$1 = (function (){var statearr_34194 = state_34167;
(statearr_34194[(10)] = inst_34110__$1);

(statearr_34194[(20)] = inst_34107__$1);

(statearr_34194[(22)] = inst_34122);

(statearr_34194[(21)] = inst_34109__$1);

(statearr_34194[(12)] = inst_34108__$1);

return statearr_34194;
})();
var statearr_34195_35485 = state_34167__$1;
(statearr_34195_35485[(2)] = null);

(statearr_34195_35485[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (40))){
var inst_34135 = (state_34167[(23)]);
var inst_34139 = done(null);
var inst_34140 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34135);
var state_34167__$1 = (function (){var statearr_34196 = state_34167;
(statearr_34196[(24)] = inst_34139);

return statearr_34196;
})();
var statearr_34197_35486 = state_34167__$1;
(statearr_34197_35486[(2)] = inst_34140);

(statearr_34197_35486[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (33))){
var inst_34126 = (state_34167[(25)]);
var inst_34128 = cljs.core.chunked_seq_QMARK_(inst_34126);
var state_34167__$1 = state_34167;
if(inst_34128){
var statearr_34198_35487 = state_34167__$1;
(statearr_34198_35487[(1)] = (36));

} else {
var statearr_34199_35488 = state_34167__$1;
(statearr_34199_35488[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (13))){
var inst_34056 = (state_34167[(26)]);
var inst_34059 = cljs.core.async.close_BANG_(inst_34056);
var state_34167__$1 = state_34167;
var statearr_34200_35489 = state_34167__$1;
(statearr_34200_35489[(2)] = inst_34059);

(statearr_34200_35489[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (22))){
var inst_34079 = (state_34167[(8)]);
var inst_34082 = cljs.core.async.close_BANG_(inst_34079);
var state_34167__$1 = state_34167;
var statearr_34201_35490 = state_34167__$1;
(statearr_34201_35490[(2)] = inst_34082);

(statearr_34201_35490[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (36))){
var inst_34126 = (state_34167[(25)]);
var inst_34130 = cljs.core.chunk_first(inst_34126);
var inst_34131 = cljs.core.chunk_rest(inst_34126);
var inst_34132 = cljs.core.count(inst_34130);
var inst_34107 = inst_34131;
var inst_34108 = inst_34130;
var inst_34109 = inst_34132;
var inst_34110 = (0);
var state_34167__$1 = (function (){var statearr_34202 = state_34167;
(statearr_34202[(10)] = inst_34110);

(statearr_34202[(20)] = inst_34107);

(statearr_34202[(21)] = inst_34109);

(statearr_34202[(12)] = inst_34108);

return statearr_34202;
})();
var statearr_34203_35491 = state_34167__$1;
(statearr_34203_35491[(2)] = null);

(statearr_34203_35491[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (41))){
var inst_34126 = (state_34167[(25)]);
var inst_34142 = (state_34167[(2)]);
var inst_34143 = cljs.core.next(inst_34126);
var inst_34107 = inst_34143;
var inst_34108 = null;
var inst_34109 = (0);
var inst_34110 = (0);
var state_34167__$1 = (function (){var statearr_34204 = state_34167;
(statearr_34204[(10)] = inst_34110);

(statearr_34204[(20)] = inst_34107);

(statearr_34204[(27)] = inst_34142);

(statearr_34204[(21)] = inst_34109);

(statearr_34204[(12)] = inst_34108);

return statearr_34204;
})();
var statearr_34205_35498 = state_34167__$1;
(statearr_34205_35498[(2)] = null);

(statearr_34205_35498[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (43))){
var state_34167__$1 = state_34167;
var statearr_34206_35500 = state_34167__$1;
(statearr_34206_35500[(2)] = null);

(statearr_34206_35500[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (29))){
var inst_34151 = (state_34167[(2)]);
var state_34167__$1 = state_34167;
var statearr_34207_35501 = state_34167__$1;
(statearr_34207_35501[(2)] = inst_34151);

(statearr_34207_35501[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (44))){
var inst_34160 = (state_34167[(2)]);
var state_34167__$1 = (function (){var statearr_34208 = state_34167;
(statearr_34208[(28)] = inst_34160);

return statearr_34208;
})();
var statearr_34209_35505 = state_34167__$1;
(statearr_34209_35505[(2)] = null);

(statearr_34209_35505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (6))){
var inst_34099 = (state_34167[(29)]);
var inst_34098 = cljs.core.deref(cs);
var inst_34099__$1 = cljs.core.keys(inst_34098);
var inst_34100 = cljs.core.count(inst_34099__$1);
var inst_34101 = cljs.core.reset_BANG_(dctr,inst_34100);
var inst_34106 = cljs.core.seq(inst_34099__$1);
var inst_34107 = inst_34106;
var inst_34108 = null;
var inst_34109 = (0);
var inst_34110 = (0);
var state_34167__$1 = (function (){var statearr_34210 = state_34167;
(statearr_34210[(10)] = inst_34110);

(statearr_34210[(20)] = inst_34107);

(statearr_34210[(30)] = inst_34101);

(statearr_34210[(21)] = inst_34109);

(statearr_34210[(12)] = inst_34108);

(statearr_34210[(29)] = inst_34099__$1);

return statearr_34210;
})();
var statearr_34211_35509 = state_34167__$1;
(statearr_34211_35509[(2)] = null);

(statearr_34211_35509[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (28))){
var inst_34107 = (state_34167[(20)]);
var inst_34126 = (state_34167[(25)]);
var inst_34126__$1 = cljs.core.seq(inst_34107);
var state_34167__$1 = (function (){var statearr_34212 = state_34167;
(statearr_34212[(25)] = inst_34126__$1);

return statearr_34212;
})();
if(inst_34126__$1){
var statearr_34213_35517 = state_34167__$1;
(statearr_34213_35517[(1)] = (33));

} else {
var statearr_34214_35518 = state_34167__$1;
(statearr_34214_35518[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (25))){
var inst_34110 = (state_34167[(10)]);
var inst_34109 = (state_34167[(21)]);
var inst_34112 = (inst_34110 < inst_34109);
var inst_34113 = inst_34112;
var state_34167__$1 = state_34167;
if(cljs.core.truth_(inst_34113)){
var statearr_34215_35519 = state_34167__$1;
(statearr_34215_35519[(1)] = (27));

} else {
var statearr_34216_35520 = state_34167__$1;
(statearr_34216_35520[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (34))){
var state_34167__$1 = state_34167;
var statearr_34217_35521 = state_34167__$1;
(statearr_34217_35521[(2)] = null);

(statearr_34217_35521[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (17))){
var state_34167__$1 = state_34167;
var statearr_34218_35522 = state_34167__$1;
(statearr_34218_35522[(2)] = null);

(statearr_34218_35522[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (3))){
var inst_34165 = (state_34167[(2)]);
var state_34167__$1 = state_34167;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34167__$1,inst_34165);
} else {
if((state_val_34168 === (12))){
var inst_34094 = (state_34167[(2)]);
var state_34167__$1 = state_34167;
var statearr_34219_35525 = state_34167__$1;
(statearr_34219_35525[(2)] = inst_34094);

(statearr_34219_35525[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (2))){
var state_34167__$1 = state_34167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34167__$1,(4),ch);
} else {
if((state_val_34168 === (23))){
var state_34167__$1 = state_34167;
var statearr_34220_35527 = state_34167__$1;
(statearr_34220_35527[(2)] = null);

(statearr_34220_35527[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (35))){
var inst_34149 = (state_34167[(2)]);
var state_34167__$1 = state_34167;
var statearr_34221_35529 = state_34167__$1;
(statearr_34221_35529[(2)] = inst_34149);

(statearr_34221_35529[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (19))){
var inst_34066 = (state_34167[(7)]);
var inst_34070 = cljs.core.chunk_first(inst_34066);
var inst_34071 = cljs.core.chunk_rest(inst_34066);
var inst_34072 = cljs.core.count(inst_34070);
var inst_34044 = inst_34071;
var inst_34045 = inst_34070;
var inst_34046 = inst_34072;
var inst_34047 = (0);
var state_34167__$1 = (function (){var statearr_34222 = state_34167;
(statearr_34222[(13)] = inst_34047);

(statearr_34222[(15)] = inst_34045);

(statearr_34222[(16)] = inst_34046);

(statearr_34222[(17)] = inst_34044);

return statearr_34222;
})();
var statearr_34223_35532 = state_34167__$1;
(statearr_34223_35532[(2)] = null);

(statearr_34223_35532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (11))){
var inst_34066 = (state_34167[(7)]);
var inst_34044 = (state_34167[(17)]);
var inst_34066__$1 = cljs.core.seq(inst_34044);
var state_34167__$1 = (function (){var statearr_34224 = state_34167;
(statearr_34224[(7)] = inst_34066__$1);

return statearr_34224;
})();
if(inst_34066__$1){
var statearr_34225_35536 = state_34167__$1;
(statearr_34225_35536[(1)] = (16));

} else {
var statearr_34226_35538 = state_34167__$1;
(statearr_34226_35538[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (9))){
var inst_34096 = (state_34167[(2)]);
var state_34167__$1 = state_34167;
var statearr_34227_35539 = state_34167__$1;
(statearr_34227_35539[(2)] = inst_34096);

(statearr_34227_35539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (5))){
var inst_34042 = cljs.core.deref(cs);
var inst_34043 = cljs.core.seq(inst_34042);
var inst_34044 = inst_34043;
var inst_34045 = null;
var inst_34046 = (0);
var inst_34047 = (0);
var state_34167__$1 = (function (){var statearr_34228 = state_34167;
(statearr_34228[(13)] = inst_34047);

(statearr_34228[(15)] = inst_34045);

(statearr_34228[(16)] = inst_34046);

(statearr_34228[(17)] = inst_34044);

return statearr_34228;
})();
var statearr_34229_35542 = state_34167__$1;
(statearr_34229_35542[(2)] = null);

(statearr_34229_35542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (14))){
var state_34167__$1 = state_34167;
var statearr_34230_35543 = state_34167__$1;
(statearr_34230_35543[(2)] = null);

(statearr_34230_35543[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (45))){
var inst_34157 = (state_34167[(2)]);
var state_34167__$1 = state_34167;
var statearr_34231_35544 = state_34167__$1;
(statearr_34231_35544[(2)] = inst_34157);

(statearr_34231_35544[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (26))){
var inst_34099 = (state_34167[(29)]);
var inst_34153 = (state_34167[(2)]);
var inst_34154 = cljs.core.seq(inst_34099);
var state_34167__$1 = (function (){var statearr_34232 = state_34167;
(statearr_34232[(31)] = inst_34153);

return statearr_34232;
})();
if(inst_34154){
var statearr_34233_35545 = state_34167__$1;
(statearr_34233_35545[(1)] = (42));

} else {
var statearr_34234_35546 = state_34167__$1;
(statearr_34234_35546[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (16))){
var inst_34066 = (state_34167[(7)]);
var inst_34068 = cljs.core.chunked_seq_QMARK_(inst_34066);
var state_34167__$1 = state_34167;
if(inst_34068){
var statearr_34235_35547 = state_34167__$1;
(statearr_34235_35547[(1)] = (19));

} else {
var statearr_34236_35548 = state_34167__$1;
(statearr_34236_35548[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (38))){
var inst_34146 = (state_34167[(2)]);
var state_34167__$1 = state_34167;
var statearr_34237_35549 = state_34167__$1;
(statearr_34237_35549[(2)] = inst_34146);

(statearr_34237_35549[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (30))){
var state_34167__$1 = state_34167;
var statearr_34238_35550 = state_34167__$1;
(statearr_34238_35550[(2)] = null);

(statearr_34238_35550[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (10))){
var inst_34047 = (state_34167[(13)]);
var inst_34045 = (state_34167[(15)]);
var inst_34055 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34045,inst_34047);
var inst_34056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34055,(0),null);
var inst_34057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34055,(1),null);
var state_34167__$1 = (function (){var statearr_34239 = state_34167;
(statearr_34239[(26)] = inst_34056);

return statearr_34239;
})();
if(cljs.core.truth_(inst_34057)){
var statearr_34240_35555 = state_34167__$1;
(statearr_34240_35555[(1)] = (13));

} else {
var statearr_34241_35556 = state_34167__$1;
(statearr_34241_35556[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (18))){
var inst_34092 = (state_34167[(2)]);
var state_34167__$1 = state_34167;
var statearr_34242_35557 = state_34167__$1;
(statearr_34242_35557[(2)] = inst_34092);

(statearr_34242_35557[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (42))){
var state_34167__$1 = state_34167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34167__$1,(45),dchan);
} else {
if((state_val_34168 === (37))){
var inst_34035 = (state_34167[(9)]);
var inst_34135 = (state_34167[(23)]);
var inst_34126 = (state_34167[(25)]);
var inst_34135__$1 = cljs.core.first(inst_34126);
var inst_34136 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34135__$1,inst_34035,done);
var state_34167__$1 = (function (){var statearr_34243 = state_34167;
(statearr_34243[(23)] = inst_34135__$1);

return statearr_34243;
})();
if(cljs.core.truth_(inst_34136)){
var statearr_34244_35558 = state_34167__$1;
(statearr_34244_35558[(1)] = (39));

} else {
var statearr_34245_35559 = state_34167__$1;
(statearr_34245_35559[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (8))){
var inst_34047 = (state_34167[(13)]);
var inst_34046 = (state_34167[(16)]);
var inst_34049 = (inst_34047 < inst_34046);
var inst_34050 = inst_34049;
var state_34167__$1 = state_34167;
if(cljs.core.truth_(inst_34050)){
var statearr_34246_35560 = state_34167__$1;
(statearr_34246_35560[(1)] = (10));

} else {
var statearr_34247_35561 = state_34167__$1;
(statearr_34247_35561[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33571__auto___35464,cs,m,dchan,dctr,done))
;
return ((function (switch__33471__auto__,c__33571__auto___35464,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33472__auto__ = null;
var cljs$core$async$mult_$_state_machine__33472__auto____0 = (function (){
var statearr_34248 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34248[(0)] = cljs$core$async$mult_$_state_machine__33472__auto__);

(statearr_34248[(1)] = (1));

return statearr_34248;
});
var cljs$core$async$mult_$_state_machine__33472__auto____1 = (function (state_34167){
while(true){
var ret_value__33473__auto__ = (function (){try{while(true){
var result__33474__auto__ = switch__33471__auto__(state_34167);
if(cljs.core.keyword_identical_QMARK_(result__33474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33474__auto__;
}
break;
}
}catch (e34249){if((e34249 instanceof Object)){
var ex__33475__auto__ = e34249;
var statearr_34250_35567 = state_34167;
(statearr_34250_35567[(5)] = ex__33475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34249;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35568 = state_34167;
state_34167 = G__35568;
continue;
} else {
return ret_value__33473__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33472__auto__ = function(state_34167){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33472__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33472__auto____1.call(this,state_34167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33472__auto____0;
cljs$core$async$mult_$_state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33472__auto____1;
return cljs$core$async$mult_$_state_machine__33472__auto__;
})()
;})(switch__33471__auto__,c__33571__auto___35464,cs,m,dchan,dctr,done))
})();
var state__33573__auto__ = (function (){var statearr_34251 = (f__33572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33572__auto__.cljs$core$IFn$_invoke$arity$0() : f__33572__auto__.call(null));
(statearr_34251[(6)] = c__33571__auto___35464);

return statearr_34251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33573__auto__);
});})(c__33571__auto___35464,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34253 = arguments.length;
switch (G__34253) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35576 = arguments.length;
var i__4731__auto___35577 = (0);
while(true){
if((i__4731__auto___35577 < len__4730__auto___35576)){
args__4736__auto__.push((arguments[i__4731__auto___35577]));

var G__35578 = (i__4731__auto___35577 + (1));
i__4731__auto___35577 = G__35578;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34258){
var map__34259 = p__34258;
var map__34259__$1 = (((((!((map__34259 == null))))?(((((map__34259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34259):map__34259);
var opts = map__34259__$1;
var statearr_34261_35579 = state;
(statearr_34261_35579[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__34259,map__34259__$1,opts){
return (function (val){
var statearr_34262_35580 = state;
(statearr_34262_35580[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__34259,map__34259__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_34263_35581 = state;
(statearr_34263_35581[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34254){
var G__34255 = cljs.core.first(seq34254);
var seq34254__$1 = cljs.core.next(seq34254);
var G__34256 = cljs.core.first(seq34254__$1);
var seq34254__$2 = cljs.core.next(seq34254__$1);
var G__34257 = cljs.core.first(seq34254__$2);
var seq34254__$3 = cljs.core.next(seq34254__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34255,G__34256,G__34257,seq34254__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34264 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34264 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34265){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34265 = meta34265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34266,meta34265__$1){
var self__ = this;
var _34266__$1 = this;
return (new cljs.core.async.t_cljs$core$async34264(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34265__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34264.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34266){
var self__ = this;
var _34266__$1 = this;
return self__.meta34265;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34264.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34264.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34264.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34264.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34264.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34264.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34264.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34264.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34264.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34265","meta34265",273850019,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34264.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34264";

cljs.core.async.t_cljs$core$async34264.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34264");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34264.
 */
cljs.core.async.__GT_t_cljs$core$async34264 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34264(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34265){
return (new cljs.core.async.t_cljs$core$async34264(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34265));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34264(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33571__auto___35609 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33571__auto___35609,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33572__auto__ = (function (){var switch__33471__auto__ = ((function (c__33571__auto___35609,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34368){
var state_val_34369 = (state_34368[(1)]);
if((state_val_34369 === (7))){
var inst_34283 = (state_34368[(2)]);
var state_34368__$1 = state_34368;
var statearr_34370_35610 = state_34368__$1;
(statearr_34370_35610[(2)] = inst_34283);

(statearr_34370_35610[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (20))){
var inst_34295 = (state_34368[(7)]);
var state_34368__$1 = state_34368;
var statearr_34371_35612 = state_34368__$1;
(statearr_34371_35612[(2)] = inst_34295);

(statearr_34371_35612[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (27))){
var state_34368__$1 = state_34368;
var statearr_34372_35615 = state_34368__$1;
(statearr_34372_35615[(2)] = null);

(statearr_34372_35615[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (1))){
var inst_34270 = (state_34368[(8)]);
var inst_34270__$1 = calc_state();
var inst_34272 = (inst_34270__$1 == null);
var inst_34273 = cljs.core.not(inst_34272);
var state_34368__$1 = (function (){var statearr_34373 = state_34368;
(statearr_34373[(8)] = inst_34270__$1);

return statearr_34373;
})();
if(inst_34273){
var statearr_34374_35618 = state_34368__$1;
(statearr_34374_35618[(1)] = (2));

} else {
var statearr_34375_35619 = state_34368__$1;
(statearr_34375_35619[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (24))){
var inst_34319 = (state_34368[(9)]);
var inst_34328 = (state_34368[(10)]);
var inst_34342 = (state_34368[(11)]);
var inst_34342__$1 = (inst_34319.cljs$core$IFn$_invoke$arity$1 ? inst_34319.cljs$core$IFn$_invoke$arity$1(inst_34328) : inst_34319.call(null,inst_34328));
var state_34368__$1 = (function (){var statearr_34376 = state_34368;
(statearr_34376[(11)] = inst_34342__$1);

return statearr_34376;
})();
if(cljs.core.truth_(inst_34342__$1)){
var statearr_34377_35621 = state_34368__$1;
(statearr_34377_35621[(1)] = (29));

} else {
var statearr_34378_35622 = state_34368__$1;
(statearr_34378_35622[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (4))){
var inst_34286 = (state_34368[(2)]);
var state_34368__$1 = state_34368;
if(cljs.core.truth_(inst_34286)){
var statearr_34379_35625 = state_34368__$1;
(statearr_34379_35625[(1)] = (8));

} else {
var statearr_34380_35626 = state_34368__$1;
(statearr_34380_35626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (15))){
var inst_34313 = (state_34368[(2)]);
var state_34368__$1 = state_34368;
if(cljs.core.truth_(inst_34313)){
var statearr_34381_35629 = state_34368__$1;
(statearr_34381_35629[(1)] = (19));

} else {
var statearr_34382_35630 = state_34368__$1;
(statearr_34382_35630[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (21))){
var inst_34318 = (state_34368[(12)]);
var inst_34318__$1 = (state_34368[(2)]);
var inst_34319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34318__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34318__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34318__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34368__$1 = (function (){var statearr_34383 = state_34368;
(statearr_34383[(12)] = inst_34318__$1);

(statearr_34383[(9)] = inst_34319);

(statearr_34383[(13)] = inst_34320);

return statearr_34383;
})();
return cljs.core.async.ioc_alts_BANG_(state_34368__$1,(22),inst_34321);
} else {
if((state_val_34369 === (31))){
var inst_34350 = (state_34368[(2)]);
var state_34368__$1 = state_34368;
if(cljs.core.truth_(inst_34350)){
var statearr_34384_35639 = state_34368__$1;
(statearr_34384_35639[(1)] = (32));

} else {
var statearr_34385_35640 = state_34368__$1;
(statearr_34385_35640[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (32))){
var inst_34327 = (state_34368[(14)]);
var state_34368__$1 = state_34368;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34368__$1,(35),out,inst_34327);
} else {
if((state_val_34369 === (33))){
var inst_34318 = (state_34368[(12)]);
var inst_34295 = inst_34318;
var state_34368__$1 = (function (){var statearr_34386 = state_34368;
(statearr_34386[(7)] = inst_34295);

return statearr_34386;
})();
var statearr_34387_35645 = state_34368__$1;
(statearr_34387_35645[(2)] = null);

(statearr_34387_35645[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (13))){
var inst_34295 = (state_34368[(7)]);
var inst_34302 = inst_34295.cljs$lang$protocol_mask$partition0$;
var inst_34303 = (inst_34302 & (64));
var inst_34304 = inst_34295.cljs$core$ISeq$;
var inst_34305 = (cljs.core.PROTOCOL_SENTINEL === inst_34304);
var inst_34306 = ((inst_34303) || (inst_34305));
var state_34368__$1 = state_34368;
if(cljs.core.truth_(inst_34306)){
var statearr_34388_35647 = state_34368__$1;
(statearr_34388_35647[(1)] = (16));

} else {
var statearr_34389_35648 = state_34368__$1;
(statearr_34389_35648[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (22))){
var inst_34328 = (state_34368[(10)]);
var inst_34327 = (state_34368[(14)]);
var inst_34326 = (state_34368[(2)]);
var inst_34327__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34326,(0),null);
var inst_34328__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34326,(1),null);
var inst_34329 = (inst_34327__$1 == null);
var inst_34330 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34328__$1,change);
var inst_34331 = ((inst_34329) || (inst_34330));
var state_34368__$1 = (function (){var statearr_34390 = state_34368;
(statearr_34390[(10)] = inst_34328__$1);

(statearr_34390[(14)] = inst_34327__$1);

return statearr_34390;
})();
if(cljs.core.truth_(inst_34331)){
var statearr_34391_35653 = state_34368__$1;
(statearr_34391_35653[(1)] = (23));

} else {
var statearr_34392_35654 = state_34368__$1;
(statearr_34392_35654[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (36))){
var inst_34318 = (state_34368[(12)]);
var inst_34295 = inst_34318;
var state_34368__$1 = (function (){var statearr_34393 = state_34368;
(statearr_34393[(7)] = inst_34295);

return statearr_34393;
})();
var statearr_34394_35656 = state_34368__$1;
(statearr_34394_35656[(2)] = null);

(statearr_34394_35656[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (29))){
var inst_34342 = (state_34368[(11)]);
var state_34368__$1 = state_34368;
var statearr_34395_35658 = state_34368__$1;
(statearr_34395_35658[(2)] = inst_34342);

(statearr_34395_35658[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (6))){
var state_34368__$1 = state_34368;
var statearr_34396_35661 = state_34368__$1;
(statearr_34396_35661[(2)] = false);

(statearr_34396_35661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (28))){
var inst_34338 = (state_34368[(2)]);
var inst_34339 = calc_state();
var inst_34295 = inst_34339;
var state_34368__$1 = (function (){var statearr_34397 = state_34368;
(statearr_34397[(15)] = inst_34338);

(statearr_34397[(7)] = inst_34295);

return statearr_34397;
})();
var statearr_34398_35664 = state_34368__$1;
(statearr_34398_35664[(2)] = null);

(statearr_34398_35664[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (25))){
var inst_34364 = (state_34368[(2)]);
var state_34368__$1 = state_34368;
var statearr_34399_35666 = state_34368__$1;
(statearr_34399_35666[(2)] = inst_34364);

(statearr_34399_35666[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (34))){
var inst_34362 = (state_34368[(2)]);
var state_34368__$1 = state_34368;
var statearr_34400_35668 = state_34368__$1;
(statearr_34400_35668[(2)] = inst_34362);

(statearr_34400_35668[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (17))){
var state_34368__$1 = state_34368;
var statearr_34401_35669 = state_34368__$1;
(statearr_34401_35669[(2)] = false);

(statearr_34401_35669[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (3))){
var state_34368__$1 = state_34368;
var statearr_34402_35672 = state_34368__$1;
(statearr_34402_35672[(2)] = false);

(statearr_34402_35672[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (12))){
var inst_34366 = (state_34368[(2)]);
var state_34368__$1 = state_34368;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34368__$1,inst_34366);
} else {
if((state_val_34369 === (2))){
var inst_34270 = (state_34368[(8)]);
var inst_34275 = inst_34270.cljs$lang$protocol_mask$partition0$;
var inst_34276 = (inst_34275 & (64));
var inst_34277 = inst_34270.cljs$core$ISeq$;
var inst_34278 = (cljs.core.PROTOCOL_SENTINEL === inst_34277);
var inst_34279 = ((inst_34276) || (inst_34278));
var state_34368__$1 = state_34368;
if(cljs.core.truth_(inst_34279)){
var statearr_34403_35675 = state_34368__$1;
(statearr_34403_35675[(1)] = (5));

} else {
var statearr_34404_35676 = state_34368__$1;
(statearr_34404_35676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (23))){
var inst_34327 = (state_34368[(14)]);
var inst_34333 = (inst_34327 == null);
var state_34368__$1 = state_34368;
if(cljs.core.truth_(inst_34333)){
var statearr_34405_35677 = state_34368__$1;
(statearr_34405_35677[(1)] = (26));

} else {
var statearr_34406_35679 = state_34368__$1;
(statearr_34406_35679[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (35))){
var inst_34353 = (state_34368[(2)]);
var state_34368__$1 = state_34368;
if(cljs.core.truth_(inst_34353)){
var statearr_34407_35680 = state_34368__$1;
(statearr_34407_35680[(1)] = (36));

} else {
var statearr_34408_35683 = state_34368__$1;
(statearr_34408_35683[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (19))){
var inst_34295 = (state_34368[(7)]);
var inst_34315 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34295);
var state_34368__$1 = state_34368;
var statearr_34409_35687 = state_34368__$1;
(statearr_34409_35687[(2)] = inst_34315);

(statearr_34409_35687[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (11))){
var inst_34295 = (state_34368[(7)]);
var inst_34299 = (inst_34295 == null);
var inst_34300 = cljs.core.not(inst_34299);
var state_34368__$1 = state_34368;
if(inst_34300){
var statearr_34410_35693 = state_34368__$1;
(statearr_34410_35693[(1)] = (13));

} else {
var statearr_34411_35700 = state_34368__$1;
(statearr_34411_35700[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (9))){
var inst_34270 = (state_34368[(8)]);
var state_34368__$1 = state_34368;
var statearr_34412_35703 = state_34368__$1;
(statearr_34412_35703[(2)] = inst_34270);

(statearr_34412_35703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (5))){
var state_34368__$1 = state_34368;
var statearr_34413_35706 = state_34368__$1;
(statearr_34413_35706[(2)] = true);

(statearr_34413_35706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (14))){
var state_34368__$1 = state_34368;
var statearr_34414_35712 = state_34368__$1;
(statearr_34414_35712[(2)] = false);

(statearr_34414_35712[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (26))){
var inst_34328 = (state_34368[(10)]);
var inst_34335 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34328);
var state_34368__$1 = state_34368;
var statearr_34415_35716 = state_34368__$1;
(statearr_34415_35716[(2)] = inst_34335);

(statearr_34415_35716[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (16))){
var state_34368__$1 = state_34368;
var statearr_34416_35719 = state_34368__$1;
(statearr_34416_35719[(2)] = true);

(statearr_34416_35719[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (38))){
var inst_34358 = (state_34368[(2)]);
var state_34368__$1 = state_34368;
var statearr_34417_35722 = state_34368__$1;
(statearr_34417_35722[(2)] = inst_34358);

(statearr_34417_35722[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (30))){
var inst_34319 = (state_34368[(9)]);
var inst_34320 = (state_34368[(13)]);
var inst_34328 = (state_34368[(10)]);
var inst_34345 = cljs.core.empty_QMARK_(inst_34319);
var inst_34346 = (inst_34320.cljs$core$IFn$_invoke$arity$1 ? inst_34320.cljs$core$IFn$_invoke$arity$1(inst_34328) : inst_34320.call(null,inst_34328));
var inst_34347 = cljs.core.not(inst_34346);
var inst_34348 = ((inst_34345) && (inst_34347));
var state_34368__$1 = state_34368;
var statearr_34418_35724 = state_34368__$1;
(statearr_34418_35724[(2)] = inst_34348);

(statearr_34418_35724[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (10))){
var inst_34270 = (state_34368[(8)]);
var inst_34291 = (state_34368[(2)]);
var inst_34292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34291,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34291,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34291,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34295 = inst_34270;
var state_34368__$1 = (function (){var statearr_34419 = state_34368;
(statearr_34419[(16)] = inst_34292);

(statearr_34419[(17)] = inst_34293);

(statearr_34419[(18)] = inst_34294);

(statearr_34419[(7)] = inst_34295);

return statearr_34419;
})();
var statearr_34420_35731 = state_34368__$1;
(statearr_34420_35731[(2)] = null);

(statearr_34420_35731[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (18))){
var inst_34310 = (state_34368[(2)]);
var state_34368__$1 = state_34368;
var statearr_34421_35734 = state_34368__$1;
(statearr_34421_35734[(2)] = inst_34310);

(statearr_34421_35734[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (37))){
var state_34368__$1 = state_34368;
var statearr_34422_35735 = state_34368__$1;
(statearr_34422_35735[(2)] = null);

(statearr_34422_35735[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34369 === (8))){
var inst_34270 = (state_34368[(8)]);
var inst_34288 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34270);
var state_34368__$1 = state_34368;
var statearr_34423_35737 = state_34368__$1;
(statearr_34423_35737[(2)] = inst_34288);

(statearr_34423_35737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33571__auto___35609,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33471__auto__,c__33571__auto___35609,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33472__auto__ = null;
var cljs$core$async$mix_$_state_machine__33472__auto____0 = (function (){
var statearr_34424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34424[(0)] = cljs$core$async$mix_$_state_machine__33472__auto__);

(statearr_34424[(1)] = (1));

return statearr_34424;
});
var cljs$core$async$mix_$_state_machine__33472__auto____1 = (function (state_34368){
while(true){
var ret_value__33473__auto__ = (function (){try{while(true){
var result__33474__auto__ = switch__33471__auto__(state_34368);
if(cljs.core.keyword_identical_QMARK_(result__33474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33474__auto__;
}
break;
}
}catch (e34425){if((e34425 instanceof Object)){
var ex__33475__auto__ = e34425;
var statearr_34426_35746 = state_34368;
(statearr_34426_35746[(5)] = ex__33475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34425;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35750 = state_34368;
state_34368 = G__35750;
continue;
} else {
return ret_value__33473__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33472__auto__ = function(state_34368){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33472__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33472__auto____1.call(this,state_34368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33472__auto____0;
cljs$core$async$mix_$_state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33472__auto____1;
return cljs$core$async$mix_$_state_machine__33472__auto__;
})()
;})(switch__33471__auto__,c__33571__auto___35609,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33573__auto__ = (function (){var statearr_34427 = (f__33572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33572__auto__.cljs$core$IFn$_invoke$arity$0() : f__33572__auto__.call(null));
(statearr_34427[(6)] = c__33571__auto___35609);

return statearr_34427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33573__auto__);
});})(c__33571__auto___35609,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34429 = arguments.length;
switch (G__34429) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34432 = arguments.length;
switch (G__34432) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__34430_SHARP_){
if(cljs.core.truth_((p1__34430_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34430_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34430_SHARP_.call(null,topic)))){
return p1__34430_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34430_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34433 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34433 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34434){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34434 = meta34434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34435,meta34434__$1){
var self__ = this;
var _34435__$1 = this;
return (new cljs.core.async.t_cljs$core$async34433(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34434__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34433.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34435){
var self__ = this;
var _34435__$1 = this;
return self__.meta34434;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34433.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34433.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34433.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34433.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34433.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34433.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34433.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34433.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34434","meta34434",-948508387,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34433.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34433";

cljs.core.async.t_cljs$core$async34433.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34433");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34433.
 */
cljs.core.async.__GT_t_cljs$core$async34433 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34433(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34434){
return (new cljs.core.async.t_cljs$core$async34433(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34434));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34433(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33571__auto___35811 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33571__auto___35811,mults,ensure_mult,p){
return (function (){
var f__33572__auto__ = (function (){var switch__33471__auto__ = ((function (c__33571__auto___35811,mults,ensure_mult,p){
return (function (state_34507){
var state_val_34508 = (state_34507[(1)]);
if((state_val_34508 === (7))){
var inst_34503 = (state_34507[(2)]);
var state_34507__$1 = state_34507;
var statearr_34509_35812 = state_34507__$1;
(statearr_34509_35812[(2)] = inst_34503);

(statearr_34509_35812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (20))){
var state_34507__$1 = state_34507;
var statearr_34510_35813 = state_34507__$1;
(statearr_34510_35813[(2)] = null);

(statearr_34510_35813[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (1))){
var state_34507__$1 = state_34507;
var statearr_34511_35814 = state_34507__$1;
(statearr_34511_35814[(2)] = null);

(statearr_34511_35814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (24))){
var inst_34486 = (state_34507[(7)]);
var inst_34495 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34486);
var state_34507__$1 = state_34507;
var statearr_34512_35815 = state_34507__$1;
(statearr_34512_35815[(2)] = inst_34495);

(statearr_34512_35815[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (4))){
var inst_34438 = (state_34507[(8)]);
var inst_34438__$1 = (state_34507[(2)]);
var inst_34439 = (inst_34438__$1 == null);
var state_34507__$1 = (function (){var statearr_34513 = state_34507;
(statearr_34513[(8)] = inst_34438__$1);

return statearr_34513;
})();
if(cljs.core.truth_(inst_34439)){
var statearr_34514_35822 = state_34507__$1;
(statearr_34514_35822[(1)] = (5));

} else {
var statearr_34515_35823 = state_34507__$1;
(statearr_34515_35823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (15))){
var inst_34480 = (state_34507[(2)]);
var state_34507__$1 = state_34507;
var statearr_34516_35824 = state_34507__$1;
(statearr_34516_35824[(2)] = inst_34480);

(statearr_34516_35824[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (21))){
var inst_34500 = (state_34507[(2)]);
var state_34507__$1 = (function (){var statearr_34517 = state_34507;
(statearr_34517[(9)] = inst_34500);

return statearr_34517;
})();
var statearr_34518_35825 = state_34507__$1;
(statearr_34518_35825[(2)] = null);

(statearr_34518_35825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (13))){
var inst_34462 = (state_34507[(10)]);
var inst_34464 = cljs.core.chunked_seq_QMARK_(inst_34462);
var state_34507__$1 = state_34507;
if(inst_34464){
var statearr_34519_35826 = state_34507__$1;
(statearr_34519_35826[(1)] = (16));

} else {
var statearr_34520_35827 = state_34507__$1;
(statearr_34520_35827[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (22))){
var inst_34492 = (state_34507[(2)]);
var state_34507__$1 = state_34507;
if(cljs.core.truth_(inst_34492)){
var statearr_34521_35828 = state_34507__$1;
(statearr_34521_35828[(1)] = (23));

} else {
var statearr_34522_35829 = state_34507__$1;
(statearr_34522_35829[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (6))){
var inst_34438 = (state_34507[(8)]);
var inst_34488 = (state_34507[(11)]);
var inst_34486 = (state_34507[(7)]);
var inst_34486__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34438) : topic_fn.call(null,inst_34438));
var inst_34487 = cljs.core.deref(mults);
var inst_34488__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34487,inst_34486__$1);
var state_34507__$1 = (function (){var statearr_34523 = state_34507;
(statearr_34523[(11)] = inst_34488__$1);

(statearr_34523[(7)] = inst_34486__$1);

return statearr_34523;
})();
if(cljs.core.truth_(inst_34488__$1)){
var statearr_34524_35836 = state_34507__$1;
(statearr_34524_35836[(1)] = (19));

} else {
var statearr_34525_35837 = state_34507__$1;
(statearr_34525_35837[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (25))){
var inst_34497 = (state_34507[(2)]);
var state_34507__$1 = state_34507;
var statearr_34526_35838 = state_34507__$1;
(statearr_34526_35838[(2)] = inst_34497);

(statearr_34526_35838[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (17))){
var inst_34462 = (state_34507[(10)]);
var inst_34471 = cljs.core.first(inst_34462);
var inst_34472 = cljs.core.async.muxch_STAR_(inst_34471);
var inst_34473 = cljs.core.async.close_BANG_(inst_34472);
var inst_34474 = cljs.core.next(inst_34462);
var inst_34448 = inst_34474;
var inst_34449 = null;
var inst_34450 = (0);
var inst_34451 = (0);
var state_34507__$1 = (function (){var statearr_34527 = state_34507;
(statearr_34527[(12)] = inst_34451);

(statearr_34527[(13)] = inst_34450);

(statearr_34527[(14)] = inst_34473);

(statearr_34527[(15)] = inst_34449);

(statearr_34527[(16)] = inst_34448);

return statearr_34527;
})();
var statearr_34528_35839 = state_34507__$1;
(statearr_34528_35839[(2)] = null);

(statearr_34528_35839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (3))){
var inst_34505 = (state_34507[(2)]);
var state_34507__$1 = state_34507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34507__$1,inst_34505);
} else {
if((state_val_34508 === (12))){
var inst_34482 = (state_34507[(2)]);
var state_34507__$1 = state_34507;
var statearr_34529_35843 = state_34507__$1;
(statearr_34529_35843[(2)] = inst_34482);

(statearr_34529_35843[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (2))){
var state_34507__$1 = state_34507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34507__$1,(4),ch);
} else {
if((state_val_34508 === (23))){
var state_34507__$1 = state_34507;
var statearr_34530_35846 = state_34507__$1;
(statearr_34530_35846[(2)] = null);

(statearr_34530_35846[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (19))){
var inst_34438 = (state_34507[(8)]);
var inst_34488 = (state_34507[(11)]);
var inst_34490 = cljs.core.async.muxch_STAR_(inst_34488);
var state_34507__$1 = state_34507;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34507__$1,(22),inst_34490,inst_34438);
} else {
if((state_val_34508 === (11))){
var inst_34462 = (state_34507[(10)]);
var inst_34448 = (state_34507[(16)]);
var inst_34462__$1 = cljs.core.seq(inst_34448);
var state_34507__$1 = (function (){var statearr_34531 = state_34507;
(statearr_34531[(10)] = inst_34462__$1);

return statearr_34531;
})();
if(inst_34462__$1){
var statearr_34532_35854 = state_34507__$1;
(statearr_34532_35854[(1)] = (13));

} else {
var statearr_34533_35855 = state_34507__$1;
(statearr_34533_35855[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (9))){
var inst_34484 = (state_34507[(2)]);
var state_34507__$1 = state_34507;
var statearr_34534_35858 = state_34507__$1;
(statearr_34534_35858[(2)] = inst_34484);

(statearr_34534_35858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (5))){
var inst_34445 = cljs.core.deref(mults);
var inst_34446 = cljs.core.vals(inst_34445);
var inst_34447 = cljs.core.seq(inst_34446);
var inst_34448 = inst_34447;
var inst_34449 = null;
var inst_34450 = (0);
var inst_34451 = (0);
var state_34507__$1 = (function (){var statearr_34535 = state_34507;
(statearr_34535[(12)] = inst_34451);

(statearr_34535[(13)] = inst_34450);

(statearr_34535[(15)] = inst_34449);

(statearr_34535[(16)] = inst_34448);

return statearr_34535;
})();
var statearr_34536_35862 = state_34507__$1;
(statearr_34536_35862[(2)] = null);

(statearr_34536_35862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (14))){
var state_34507__$1 = state_34507;
var statearr_34540_35864 = state_34507__$1;
(statearr_34540_35864[(2)] = null);

(statearr_34540_35864[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (16))){
var inst_34462 = (state_34507[(10)]);
var inst_34466 = cljs.core.chunk_first(inst_34462);
var inst_34467 = cljs.core.chunk_rest(inst_34462);
var inst_34468 = cljs.core.count(inst_34466);
var inst_34448 = inst_34467;
var inst_34449 = inst_34466;
var inst_34450 = inst_34468;
var inst_34451 = (0);
var state_34507__$1 = (function (){var statearr_34541 = state_34507;
(statearr_34541[(12)] = inst_34451);

(statearr_34541[(13)] = inst_34450);

(statearr_34541[(15)] = inst_34449);

(statearr_34541[(16)] = inst_34448);

return statearr_34541;
})();
var statearr_34542_35867 = state_34507__$1;
(statearr_34542_35867[(2)] = null);

(statearr_34542_35867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (10))){
var inst_34451 = (state_34507[(12)]);
var inst_34450 = (state_34507[(13)]);
var inst_34449 = (state_34507[(15)]);
var inst_34448 = (state_34507[(16)]);
var inst_34456 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34449,inst_34451);
var inst_34457 = cljs.core.async.muxch_STAR_(inst_34456);
var inst_34458 = cljs.core.async.close_BANG_(inst_34457);
var inst_34459 = (inst_34451 + (1));
var tmp34537 = inst_34450;
var tmp34538 = inst_34449;
var tmp34539 = inst_34448;
var inst_34448__$1 = tmp34539;
var inst_34449__$1 = tmp34538;
var inst_34450__$1 = tmp34537;
var inst_34451__$1 = inst_34459;
var state_34507__$1 = (function (){var statearr_34543 = state_34507;
(statearr_34543[(12)] = inst_34451__$1);

(statearr_34543[(13)] = inst_34450__$1);

(statearr_34543[(15)] = inst_34449__$1);

(statearr_34543[(17)] = inst_34458);

(statearr_34543[(16)] = inst_34448__$1);

return statearr_34543;
})();
var statearr_34544_35869 = state_34507__$1;
(statearr_34544_35869[(2)] = null);

(statearr_34544_35869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (18))){
var inst_34477 = (state_34507[(2)]);
var state_34507__$1 = state_34507;
var statearr_34545_35874 = state_34507__$1;
(statearr_34545_35874[(2)] = inst_34477);

(statearr_34545_35874[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34508 === (8))){
var inst_34451 = (state_34507[(12)]);
var inst_34450 = (state_34507[(13)]);
var inst_34453 = (inst_34451 < inst_34450);
var inst_34454 = inst_34453;
var state_34507__$1 = state_34507;
if(cljs.core.truth_(inst_34454)){
var statearr_34546_35875 = state_34507__$1;
(statearr_34546_35875[(1)] = (10));

} else {
var statearr_34547_35876 = state_34507__$1;
(statearr_34547_35876[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33571__auto___35811,mults,ensure_mult,p))
;
return ((function (switch__33471__auto__,c__33571__auto___35811,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33472__auto__ = null;
var cljs$core$async$state_machine__33472__auto____0 = (function (){
var statearr_34548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34548[(0)] = cljs$core$async$state_machine__33472__auto__);

(statearr_34548[(1)] = (1));

return statearr_34548;
});
var cljs$core$async$state_machine__33472__auto____1 = (function (state_34507){
while(true){
var ret_value__33473__auto__ = (function (){try{while(true){
var result__33474__auto__ = switch__33471__auto__(state_34507);
if(cljs.core.keyword_identical_QMARK_(result__33474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33474__auto__;
}
break;
}
}catch (e34549){if((e34549 instanceof Object)){
var ex__33475__auto__ = e34549;
var statearr_34550_35890 = state_34507;
(statearr_34550_35890[(5)] = ex__33475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34549;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35893 = state_34507;
state_34507 = G__35893;
continue;
} else {
return ret_value__33473__auto__;
}
break;
}
});
cljs$core$async$state_machine__33472__auto__ = function(state_34507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33472__auto____1.call(this,state_34507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33472__auto____0;
cljs$core$async$state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33472__auto____1;
return cljs$core$async$state_machine__33472__auto__;
})()
;})(switch__33471__auto__,c__33571__auto___35811,mults,ensure_mult,p))
})();
var state__33573__auto__ = (function (){var statearr_34551 = (f__33572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33572__auto__.cljs$core$IFn$_invoke$arity$0() : f__33572__auto__.call(null));
(statearr_34551[(6)] = c__33571__auto___35811);

return statearr_34551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33573__auto__);
});})(c__33571__auto___35811,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34553 = arguments.length;
switch (G__34553) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34555 = arguments.length;
switch (G__34555) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34557 = arguments.length;
switch (G__34557) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__33571__auto___35912 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33571__auto___35912,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33572__auto__ = (function (){var switch__33471__auto__ = ((function (c__33571__auto___35912,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34596){
var state_val_34597 = (state_34596[(1)]);
if((state_val_34597 === (7))){
var state_34596__$1 = state_34596;
var statearr_34598_35913 = state_34596__$1;
(statearr_34598_35913[(2)] = null);

(statearr_34598_35913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (1))){
var state_34596__$1 = state_34596;
var statearr_34599_35914 = state_34596__$1;
(statearr_34599_35914[(2)] = null);

(statearr_34599_35914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (4))){
var inst_34560 = (state_34596[(7)]);
var inst_34562 = (inst_34560 < cnt);
var state_34596__$1 = state_34596;
if(cljs.core.truth_(inst_34562)){
var statearr_34600_35915 = state_34596__$1;
(statearr_34600_35915[(1)] = (6));

} else {
var statearr_34601_35916 = state_34596__$1;
(statearr_34601_35916[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (15))){
var inst_34592 = (state_34596[(2)]);
var state_34596__$1 = state_34596;
var statearr_34602_35917 = state_34596__$1;
(statearr_34602_35917[(2)] = inst_34592);

(statearr_34602_35917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (13))){
var inst_34585 = cljs.core.async.close_BANG_(out);
var state_34596__$1 = state_34596;
var statearr_34603_35919 = state_34596__$1;
(statearr_34603_35919[(2)] = inst_34585);

(statearr_34603_35919[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (6))){
var state_34596__$1 = state_34596;
var statearr_34604_35920 = state_34596__$1;
(statearr_34604_35920[(2)] = null);

(statearr_34604_35920[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (3))){
var inst_34594 = (state_34596[(2)]);
var state_34596__$1 = state_34596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34596__$1,inst_34594);
} else {
if((state_val_34597 === (12))){
var inst_34582 = (state_34596[(8)]);
var inst_34582__$1 = (state_34596[(2)]);
var inst_34583 = cljs.core.some(cljs.core.nil_QMARK_,inst_34582__$1);
var state_34596__$1 = (function (){var statearr_34605 = state_34596;
(statearr_34605[(8)] = inst_34582__$1);

return statearr_34605;
})();
if(cljs.core.truth_(inst_34583)){
var statearr_34606_35923 = state_34596__$1;
(statearr_34606_35923[(1)] = (13));

} else {
var statearr_34607_35924 = state_34596__$1;
(statearr_34607_35924[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (2))){
var inst_34559 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34560 = (0);
var state_34596__$1 = (function (){var statearr_34608 = state_34596;
(statearr_34608[(7)] = inst_34560);

(statearr_34608[(9)] = inst_34559);

return statearr_34608;
})();
var statearr_34609_35925 = state_34596__$1;
(statearr_34609_35925[(2)] = null);

(statearr_34609_35925[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (11))){
var inst_34560 = (state_34596[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_34596,(10),Object,null,(9));
var inst_34569 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34560) : chs__$1.call(null,inst_34560));
var inst_34570 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34560) : done.call(null,inst_34560));
var inst_34571 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34569,inst_34570);
var state_34596__$1 = state_34596;
var statearr_34610_35927 = state_34596__$1;
(statearr_34610_35927[(2)] = inst_34571);


cljs.core.async.impl.ioc_helpers.process_exception(state_34596__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (9))){
var inst_34560 = (state_34596[(7)]);
var inst_34573 = (state_34596[(2)]);
var inst_34574 = (inst_34560 + (1));
var inst_34560__$1 = inst_34574;
var state_34596__$1 = (function (){var statearr_34611 = state_34596;
(statearr_34611[(7)] = inst_34560__$1);

(statearr_34611[(10)] = inst_34573);

return statearr_34611;
})();
var statearr_34612_35928 = state_34596__$1;
(statearr_34612_35928[(2)] = null);

(statearr_34612_35928[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (5))){
var inst_34580 = (state_34596[(2)]);
var state_34596__$1 = (function (){var statearr_34613 = state_34596;
(statearr_34613[(11)] = inst_34580);

return statearr_34613;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34596__$1,(12),dchan);
} else {
if((state_val_34597 === (14))){
var inst_34582 = (state_34596[(8)]);
var inst_34587 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34582);
var state_34596__$1 = state_34596;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34596__$1,(16),out,inst_34587);
} else {
if((state_val_34597 === (16))){
var inst_34589 = (state_34596[(2)]);
var state_34596__$1 = (function (){var statearr_34614 = state_34596;
(statearr_34614[(12)] = inst_34589);

return statearr_34614;
})();
var statearr_34615_35933 = state_34596__$1;
(statearr_34615_35933[(2)] = null);

(statearr_34615_35933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (10))){
var inst_34564 = (state_34596[(2)]);
var inst_34565 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34596__$1 = (function (){var statearr_34616 = state_34596;
(statearr_34616[(13)] = inst_34564);

return statearr_34616;
})();
var statearr_34617_35934 = state_34596__$1;
(statearr_34617_35934[(2)] = inst_34565);


cljs.core.async.impl.ioc_helpers.process_exception(state_34596__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34597 === (8))){
var inst_34578 = (state_34596[(2)]);
var state_34596__$1 = state_34596;
var statearr_34618_35935 = state_34596__$1;
(statearr_34618_35935[(2)] = inst_34578);

(statearr_34618_35935[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33571__auto___35912,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33471__auto__,c__33571__auto___35912,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33472__auto__ = null;
var cljs$core$async$state_machine__33472__auto____0 = (function (){
var statearr_34619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34619[(0)] = cljs$core$async$state_machine__33472__auto__);

(statearr_34619[(1)] = (1));

return statearr_34619;
});
var cljs$core$async$state_machine__33472__auto____1 = (function (state_34596){
while(true){
var ret_value__33473__auto__ = (function (){try{while(true){
var result__33474__auto__ = switch__33471__auto__(state_34596);
if(cljs.core.keyword_identical_QMARK_(result__33474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33474__auto__;
}
break;
}
}catch (e34620){if((e34620 instanceof Object)){
var ex__33475__auto__ = e34620;
var statearr_34621_35940 = state_34596;
(statearr_34621_35940[(5)] = ex__33475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34620;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35942 = state_34596;
state_34596 = G__35942;
continue;
} else {
return ret_value__33473__auto__;
}
break;
}
});
cljs$core$async$state_machine__33472__auto__ = function(state_34596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33472__auto____1.call(this,state_34596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33472__auto____0;
cljs$core$async$state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33472__auto____1;
return cljs$core$async$state_machine__33472__auto__;
})()
;})(switch__33471__auto__,c__33571__auto___35912,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33573__auto__ = (function (){var statearr_34622 = (f__33572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33572__auto__.cljs$core$IFn$_invoke$arity$0() : f__33572__auto__.call(null));
(statearr_34622[(6)] = c__33571__auto___35912);

return statearr_34622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33573__auto__);
});})(c__33571__auto___35912,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34625 = arguments.length;
switch (G__34625) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33571__auto___35946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33571__auto___35946,out){
return (function (){
var f__33572__auto__ = (function (){var switch__33471__auto__ = ((function (c__33571__auto___35946,out){
return (function (state_34657){
var state_val_34658 = (state_34657[(1)]);
if((state_val_34658 === (7))){
var inst_34636 = (state_34657[(7)]);
var inst_34637 = (state_34657[(8)]);
var inst_34636__$1 = (state_34657[(2)]);
var inst_34637__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34636__$1,(0),null);
var inst_34638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34636__$1,(1),null);
var inst_34639 = (inst_34637__$1 == null);
var state_34657__$1 = (function (){var statearr_34659 = state_34657;
(statearr_34659[(7)] = inst_34636__$1);

(statearr_34659[(9)] = inst_34638);

(statearr_34659[(8)] = inst_34637__$1);

return statearr_34659;
})();
if(cljs.core.truth_(inst_34639)){
var statearr_34660_35947 = state_34657__$1;
(statearr_34660_35947[(1)] = (8));

} else {
var statearr_34661_35948 = state_34657__$1;
(statearr_34661_35948[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34658 === (1))){
var inst_34626 = cljs.core.vec(chs);
var inst_34627 = inst_34626;
var state_34657__$1 = (function (){var statearr_34662 = state_34657;
(statearr_34662[(10)] = inst_34627);

return statearr_34662;
})();
var statearr_34663_35950 = state_34657__$1;
(statearr_34663_35950[(2)] = null);

(statearr_34663_35950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34658 === (4))){
var inst_34627 = (state_34657[(10)]);
var state_34657__$1 = state_34657;
return cljs.core.async.ioc_alts_BANG_(state_34657__$1,(7),inst_34627);
} else {
if((state_val_34658 === (6))){
var inst_34653 = (state_34657[(2)]);
var state_34657__$1 = state_34657;
var statearr_34664_35956 = state_34657__$1;
(statearr_34664_35956[(2)] = inst_34653);

(statearr_34664_35956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34658 === (3))){
var inst_34655 = (state_34657[(2)]);
var state_34657__$1 = state_34657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34657__$1,inst_34655);
} else {
if((state_val_34658 === (2))){
var inst_34627 = (state_34657[(10)]);
var inst_34629 = cljs.core.count(inst_34627);
var inst_34630 = (inst_34629 > (0));
var state_34657__$1 = state_34657;
if(cljs.core.truth_(inst_34630)){
var statearr_34666_35962 = state_34657__$1;
(statearr_34666_35962[(1)] = (4));

} else {
var statearr_34667_35963 = state_34657__$1;
(statearr_34667_35963[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34658 === (11))){
var inst_34627 = (state_34657[(10)]);
var inst_34646 = (state_34657[(2)]);
var tmp34665 = inst_34627;
var inst_34627__$1 = tmp34665;
var state_34657__$1 = (function (){var statearr_34668 = state_34657;
(statearr_34668[(11)] = inst_34646);

(statearr_34668[(10)] = inst_34627__$1);

return statearr_34668;
})();
var statearr_34669_35969 = state_34657__$1;
(statearr_34669_35969[(2)] = null);

(statearr_34669_35969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34658 === (9))){
var inst_34637 = (state_34657[(8)]);
var state_34657__$1 = state_34657;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34657__$1,(11),out,inst_34637);
} else {
if((state_val_34658 === (5))){
var inst_34651 = cljs.core.async.close_BANG_(out);
var state_34657__$1 = state_34657;
var statearr_34670_35975 = state_34657__$1;
(statearr_34670_35975[(2)] = inst_34651);

(statearr_34670_35975[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34658 === (10))){
var inst_34649 = (state_34657[(2)]);
var state_34657__$1 = state_34657;
var statearr_34671_35976 = state_34657__$1;
(statearr_34671_35976[(2)] = inst_34649);

(statearr_34671_35976[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34658 === (8))){
var inst_34636 = (state_34657[(7)]);
var inst_34627 = (state_34657[(10)]);
var inst_34638 = (state_34657[(9)]);
var inst_34637 = (state_34657[(8)]);
var inst_34641 = (function (){var cs = inst_34627;
var vec__34632 = inst_34636;
var v = inst_34637;
var c = inst_34638;
return ((function (cs,vec__34632,v,c,inst_34636,inst_34627,inst_34638,inst_34637,state_val_34658,c__33571__auto___35946,out){
return (function (p1__34623_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34623_SHARP_);
});
;})(cs,vec__34632,v,c,inst_34636,inst_34627,inst_34638,inst_34637,state_val_34658,c__33571__auto___35946,out))
})();
var inst_34642 = cljs.core.filterv(inst_34641,inst_34627);
var inst_34627__$1 = inst_34642;
var state_34657__$1 = (function (){var statearr_34672 = state_34657;
(statearr_34672[(10)] = inst_34627__$1);

return statearr_34672;
})();
var statearr_34673_35982 = state_34657__$1;
(statearr_34673_35982[(2)] = null);

(statearr_34673_35982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33571__auto___35946,out))
;
return ((function (switch__33471__auto__,c__33571__auto___35946,out){
return (function() {
var cljs$core$async$state_machine__33472__auto__ = null;
var cljs$core$async$state_machine__33472__auto____0 = (function (){
var statearr_34674 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34674[(0)] = cljs$core$async$state_machine__33472__auto__);

(statearr_34674[(1)] = (1));

return statearr_34674;
});
var cljs$core$async$state_machine__33472__auto____1 = (function (state_34657){
while(true){
var ret_value__33473__auto__ = (function (){try{while(true){
var result__33474__auto__ = switch__33471__auto__(state_34657);
if(cljs.core.keyword_identical_QMARK_(result__33474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33474__auto__;
}
break;
}
}catch (e34675){if((e34675 instanceof Object)){
var ex__33475__auto__ = e34675;
var statearr_34676_35984 = state_34657;
(statearr_34676_35984[(5)] = ex__33475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34675;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35985 = state_34657;
state_34657 = G__35985;
continue;
} else {
return ret_value__33473__auto__;
}
break;
}
});
cljs$core$async$state_machine__33472__auto__ = function(state_34657){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33472__auto____1.call(this,state_34657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33472__auto____0;
cljs$core$async$state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33472__auto____1;
return cljs$core$async$state_machine__33472__auto__;
})()
;})(switch__33471__auto__,c__33571__auto___35946,out))
})();
var state__33573__auto__ = (function (){var statearr_34677 = (f__33572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33572__auto__.cljs$core$IFn$_invoke$arity$0() : f__33572__auto__.call(null));
(statearr_34677[(6)] = c__33571__auto___35946);

return statearr_34677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33573__auto__);
});})(c__33571__auto___35946,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34679 = arguments.length;
switch (G__34679) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33571__auto___36002 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33571__auto___36002,out){
return (function (){
var f__33572__auto__ = (function (){var switch__33471__auto__ = ((function (c__33571__auto___36002,out){
return (function (state_34703){
var state_val_34704 = (state_34703[(1)]);
if((state_val_34704 === (7))){
var inst_34685 = (state_34703[(7)]);
var inst_34685__$1 = (state_34703[(2)]);
var inst_34686 = (inst_34685__$1 == null);
var inst_34687 = cljs.core.not(inst_34686);
var state_34703__$1 = (function (){var statearr_34705 = state_34703;
(statearr_34705[(7)] = inst_34685__$1);

return statearr_34705;
})();
if(inst_34687){
var statearr_34706_36023 = state_34703__$1;
(statearr_34706_36023[(1)] = (8));

} else {
var statearr_34707_36028 = state_34703__$1;
(statearr_34707_36028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (1))){
var inst_34680 = (0);
var state_34703__$1 = (function (){var statearr_34708 = state_34703;
(statearr_34708[(8)] = inst_34680);

return statearr_34708;
})();
var statearr_34709_36032 = state_34703__$1;
(statearr_34709_36032[(2)] = null);

(statearr_34709_36032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (4))){
var state_34703__$1 = state_34703;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34703__$1,(7),ch);
} else {
if((state_val_34704 === (6))){
var inst_34698 = (state_34703[(2)]);
var state_34703__$1 = state_34703;
var statearr_34710_36033 = state_34703__$1;
(statearr_34710_36033[(2)] = inst_34698);

(statearr_34710_36033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (3))){
var inst_34700 = (state_34703[(2)]);
var inst_34701 = cljs.core.async.close_BANG_(out);
var state_34703__$1 = (function (){var statearr_34711 = state_34703;
(statearr_34711[(9)] = inst_34700);

return statearr_34711;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34703__$1,inst_34701);
} else {
if((state_val_34704 === (2))){
var inst_34680 = (state_34703[(8)]);
var inst_34682 = (inst_34680 < n);
var state_34703__$1 = state_34703;
if(cljs.core.truth_(inst_34682)){
var statearr_34712_36034 = state_34703__$1;
(statearr_34712_36034[(1)] = (4));

} else {
var statearr_34713_36036 = state_34703__$1;
(statearr_34713_36036[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (11))){
var inst_34680 = (state_34703[(8)]);
var inst_34690 = (state_34703[(2)]);
var inst_34691 = (inst_34680 + (1));
var inst_34680__$1 = inst_34691;
var state_34703__$1 = (function (){var statearr_34714 = state_34703;
(statearr_34714[(10)] = inst_34690);

(statearr_34714[(8)] = inst_34680__$1);

return statearr_34714;
})();
var statearr_34715_36037 = state_34703__$1;
(statearr_34715_36037[(2)] = null);

(statearr_34715_36037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (9))){
var state_34703__$1 = state_34703;
var statearr_34716_36038 = state_34703__$1;
(statearr_34716_36038[(2)] = null);

(statearr_34716_36038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (5))){
var state_34703__$1 = state_34703;
var statearr_34717_36039 = state_34703__$1;
(statearr_34717_36039[(2)] = null);

(statearr_34717_36039[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (10))){
var inst_34695 = (state_34703[(2)]);
var state_34703__$1 = state_34703;
var statearr_34718_36040 = state_34703__$1;
(statearr_34718_36040[(2)] = inst_34695);

(statearr_34718_36040[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (8))){
var inst_34685 = (state_34703[(7)]);
var state_34703__$1 = state_34703;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34703__$1,(11),out,inst_34685);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33571__auto___36002,out))
;
return ((function (switch__33471__auto__,c__33571__auto___36002,out){
return (function() {
var cljs$core$async$state_machine__33472__auto__ = null;
var cljs$core$async$state_machine__33472__auto____0 = (function (){
var statearr_34719 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34719[(0)] = cljs$core$async$state_machine__33472__auto__);

(statearr_34719[(1)] = (1));

return statearr_34719;
});
var cljs$core$async$state_machine__33472__auto____1 = (function (state_34703){
while(true){
var ret_value__33473__auto__ = (function (){try{while(true){
var result__33474__auto__ = switch__33471__auto__(state_34703);
if(cljs.core.keyword_identical_QMARK_(result__33474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33474__auto__;
}
break;
}
}catch (e34720){if((e34720 instanceof Object)){
var ex__33475__auto__ = e34720;
var statearr_34721_36044 = state_34703;
(statearr_34721_36044[(5)] = ex__33475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34720;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36045 = state_34703;
state_34703 = G__36045;
continue;
} else {
return ret_value__33473__auto__;
}
break;
}
});
cljs$core$async$state_machine__33472__auto__ = function(state_34703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33472__auto____1.call(this,state_34703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33472__auto____0;
cljs$core$async$state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33472__auto____1;
return cljs$core$async$state_machine__33472__auto__;
})()
;})(switch__33471__auto__,c__33571__auto___36002,out))
})();
var state__33573__auto__ = (function (){var statearr_34722 = (f__33572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33572__auto__.cljs$core$IFn$_invoke$arity$0() : f__33572__auto__.call(null));
(statearr_34722[(6)] = c__33571__auto___36002);

return statearr_34722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33573__auto__);
});})(c__33571__auto___36002,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34724 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34724 = (function (f,ch,meta34725){
this.f = f;
this.ch = ch;
this.meta34725 = meta34725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34726,meta34725__$1){
var self__ = this;
var _34726__$1 = this;
return (new cljs.core.async.t_cljs$core$async34724(self__.f,self__.ch,meta34725__$1));
});

cljs.core.async.t_cljs$core$async34724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34726){
var self__ = this;
var _34726__$1 = this;
return self__.meta34725;
});

cljs.core.async.t_cljs$core$async34724.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34724.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34724.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34724.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34724.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34727 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34727 = (function (f,ch,meta34725,_,fn1,meta34728){
this.f = f;
this.ch = ch;
this.meta34725 = meta34725;
this._ = _;
this.fn1 = fn1;
this.meta34728 = meta34728;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34729,meta34728__$1){
var self__ = this;
var _34729__$1 = this;
return (new cljs.core.async.t_cljs$core$async34727(self__.f,self__.ch,self__.meta34725,self__._,self__.fn1,meta34728__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34727.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34729){
var self__ = this;
var _34729__$1 = this;
return self__.meta34728;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34727.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34727.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34727.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34727.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34723_SHARP_){
var G__34730 = (((p1__34723_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34723_SHARP_) : self__.f.call(null,p1__34723_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34730) : f1.call(null,G__34730));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34727.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34725","meta34725",1160552325,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34724","cljs.core.async/t_cljs$core$async34724",1573334319,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34728","meta34728",-1346747444,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34727.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34727.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34727";

cljs.core.async.t_cljs$core$async34727.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34727");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34727.
 */
cljs.core.async.__GT_t_cljs$core$async34727 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34727(f__$1,ch__$1,meta34725__$1,___$2,fn1__$1,meta34728){
return (new cljs.core.async.t_cljs$core$async34727(f__$1,ch__$1,meta34725__$1,___$2,fn1__$1,meta34728));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34727(self__.f,self__.ch,self__.meta34725,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34731 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34731) : self__.f.call(null,G__34731));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34724.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34724.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34724.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34725","meta34725",1160552325,null)], null);
});

cljs.core.async.t_cljs$core$async34724.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34724.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34724";

cljs.core.async.t_cljs$core$async34724.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34724");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34724.
 */
cljs.core.async.__GT_t_cljs$core$async34724 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34724(f__$1,ch__$1,meta34725){
return (new cljs.core.async.t_cljs$core$async34724(f__$1,ch__$1,meta34725));
});

}

return (new cljs.core.async.t_cljs$core$async34724(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34732 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34732 = (function (f,ch,meta34733){
this.f = f;
this.ch = ch;
this.meta34733 = meta34733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34734,meta34733__$1){
var self__ = this;
var _34734__$1 = this;
return (new cljs.core.async.t_cljs$core$async34732(self__.f,self__.ch,meta34733__$1));
});

cljs.core.async.t_cljs$core$async34732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34734){
var self__ = this;
var _34734__$1 = this;
return self__.meta34733;
});

cljs.core.async.t_cljs$core$async34732.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34732.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34732.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34732.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34732.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34732.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async34732.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34733","meta34733",1825785563,null)], null);
});

cljs.core.async.t_cljs$core$async34732.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34732.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34732";

cljs.core.async.t_cljs$core$async34732.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34732");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34732.
 */
cljs.core.async.__GT_t_cljs$core$async34732 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34732(f__$1,ch__$1,meta34733){
return (new cljs.core.async.t_cljs$core$async34732(f__$1,ch__$1,meta34733));
});

}

return (new cljs.core.async.t_cljs$core$async34732(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34735 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34735 = (function (p,ch,meta34736){
this.p = p;
this.ch = ch;
this.meta34736 = meta34736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34737,meta34736__$1){
var self__ = this;
var _34737__$1 = this;
return (new cljs.core.async.t_cljs$core$async34735(self__.p,self__.ch,meta34736__$1));
});

cljs.core.async.t_cljs$core$async34735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34737){
var self__ = this;
var _34737__$1 = this;
return self__.meta34736;
});

cljs.core.async.t_cljs$core$async34735.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34735.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34735.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34735.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34735.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34735.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34735.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34735.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34736","meta34736",209761263,null)], null);
});

cljs.core.async.t_cljs$core$async34735.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34735.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34735";

cljs.core.async.t_cljs$core$async34735.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34735");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34735.
 */
cljs.core.async.__GT_t_cljs$core$async34735 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34735(p__$1,ch__$1,meta34736){
return (new cljs.core.async.t_cljs$core$async34735(p__$1,ch__$1,meta34736));
});

}

return (new cljs.core.async.t_cljs$core$async34735(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34739 = arguments.length;
switch (G__34739) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33571__auto___36162 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33571__auto___36162,out){
return (function (){
var f__33572__auto__ = (function (){var switch__33471__auto__ = ((function (c__33571__auto___36162,out){
return (function (state_34760){
var state_val_34761 = (state_34760[(1)]);
if((state_val_34761 === (7))){
var inst_34756 = (state_34760[(2)]);
var state_34760__$1 = state_34760;
var statearr_34762_36164 = state_34760__$1;
(statearr_34762_36164[(2)] = inst_34756);

(statearr_34762_36164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34761 === (1))){
var state_34760__$1 = state_34760;
var statearr_34763_36168 = state_34760__$1;
(statearr_34763_36168[(2)] = null);

(statearr_34763_36168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34761 === (4))){
var inst_34742 = (state_34760[(7)]);
var inst_34742__$1 = (state_34760[(2)]);
var inst_34743 = (inst_34742__$1 == null);
var state_34760__$1 = (function (){var statearr_34764 = state_34760;
(statearr_34764[(7)] = inst_34742__$1);

return statearr_34764;
})();
if(cljs.core.truth_(inst_34743)){
var statearr_34765_36170 = state_34760__$1;
(statearr_34765_36170[(1)] = (5));

} else {
var statearr_34766_36171 = state_34760__$1;
(statearr_34766_36171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34761 === (6))){
var inst_34742 = (state_34760[(7)]);
var inst_34747 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34742) : p.call(null,inst_34742));
var state_34760__$1 = state_34760;
if(cljs.core.truth_(inst_34747)){
var statearr_34767_36172 = state_34760__$1;
(statearr_34767_36172[(1)] = (8));

} else {
var statearr_34768_36173 = state_34760__$1;
(statearr_34768_36173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34761 === (3))){
var inst_34758 = (state_34760[(2)]);
var state_34760__$1 = state_34760;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34760__$1,inst_34758);
} else {
if((state_val_34761 === (2))){
var state_34760__$1 = state_34760;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34760__$1,(4),ch);
} else {
if((state_val_34761 === (11))){
var inst_34750 = (state_34760[(2)]);
var state_34760__$1 = state_34760;
var statearr_34769_36174 = state_34760__$1;
(statearr_34769_36174[(2)] = inst_34750);

(statearr_34769_36174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34761 === (9))){
var state_34760__$1 = state_34760;
var statearr_34770_36175 = state_34760__$1;
(statearr_34770_36175[(2)] = null);

(statearr_34770_36175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34761 === (5))){
var inst_34745 = cljs.core.async.close_BANG_(out);
var state_34760__$1 = state_34760;
var statearr_34771_36176 = state_34760__$1;
(statearr_34771_36176[(2)] = inst_34745);

(statearr_34771_36176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34761 === (10))){
var inst_34753 = (state_34760[(2)]);
var state_34760__$1 = (function (){var statearr_34772 = state_34760;
(statearr_34772[(8)] = inst_34753);

return statearr_34772;
})();
var statearr_34773_36181 = state_34760__$1;
(statearr_34773_36181[(2)] = null);

(statearr_34773_36181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34761 === (8))){
var inst_34742 = (state_34760[(7)]);
var state_34760__$1 = state_34760;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34760__$1,(11),out,inst_34742);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33571__auto___36162,out))
;
return ((function (switch__33471__auto__,c__33571__auto___36162,out){
return (function() {
var cljs$core$async$state_machine__33472__auto__ = null;
var cljs$core$async$state_machine__33472__auto____0 = (function (){
var statearr_34774 = [null,null,null,null,null,null,null,null,null];
(statearr_34774[(0)] = cljs$core$async$state_machine__33472__auto__);

(statearr_34774[(1)] = (1));

return statearr_34774;
});
var cljs$core$async$state_machine__33472__auto____1 = (function (state_34760){
while(true){
var ret_value__33473__auto__ = (function (){try{while(true){
var result__33474__auto__ = switch__33471__auto__(state_34760);
if(cljs.core.keyword_identical_QMARK_(result__33474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33474__auto__;
}
break;
}
}catch (e34775){if((e34775 instanceof Object)){
var ex__33475__auto__ = e34775;
var statearr_34776_36188 = state_34760;
(statearr_34776_36188[(5)] = ex__33475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34775;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36194 = state_34760;
state_34760 = G__36194;
continue;
} else {
return ret_value__33473__auto__;
}
break;
}
});
cljs$core$async$state_machine__33472__auto__ = function(state_34760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33472__auto____1.call(this,state_34760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33472__auto____0;
cljs$core$async$state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33472__auto____1;
return cljs$core$async$state_machine__33472__auto__;
})()
;})(switch__33471__auto__,c__33571__auto___36162,out))
})();
var state__33573__auto__ = (function (){var statearr_34777 = (f__33572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33572__auto__.cljs$core$IFn$_invoke$arity$0() : f__33572__auto__.call(null));
(statearr_34777[(6)] = c__33571__auto___36162);

return statearr_34777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33573__auto__);
});})(c__33571__auto___36162,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34779 = arguments.length;
switch (G__34779) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33571__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33571__auto__){
return (function (){
var f__33572__auto__ = (function (){var switch__33471__auto__ = ((function (c__33571__auto__){
return (function (state_34841){
var state_val_34842 = (state_34841[(1)]);
if((state_val_34842 === (7))){
var inst_34837 = (state_34841[(2)]);
var state_34841__$1 = state_34841;
var statearr_34843_36216 = state_34841__$1;
(statearr_34843_36216[(2)] = inst_34837);

(statearr_34843_36216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34842 === (20))){
var inst_34807 = (state_34841[(7)]);
var inst_34818 = (state_34841[(2)]);
var inst_34819 = cljs.core.next(inst_34807);
var inst_34793 = inst_34819;
var inst_34794 = null;
var inst_34795 = (0);
var inst_34796 = (0);
var state_34841__$1 = (function (){var statearr_34844 = state_34841;
(statearr_34844[(8)] = inst_34796);

(statearr_34844[(9)] = inst_34793);

(statearr_34844[(10)] = inst_34818);

(statearr_34844[(11)] = inst_34795);

(statearr_34844[(12)] = inst_34794);

return statearr_34844;
})();
var statearr_34845_36231 = state_34841__$1;
(statearr_34845_36231[(2)] = null);

(statearr_34845_36231[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34842 === (1))){
var state_34841__$1 = state_34841;
var statearr_34846_36235 = state_34841__$1;
(statearr_34846_36235[(2)] = null);

(statearr_34846_36235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34842 === (4))){
var inst_34782 = (state_34841[(13)]);
var inst_34782__$1 = (state_34841[(2)]);
var inst_34783 = (inst_34782__$1 == null);
var state_34841__$1 = (function (){var statearr_34847 = state_34841;
(statearr_34847[(13)] = inst_34782__$1);

return statearr_34847;
})();
if(cljs.core.truth_(inst_34783)){
var statearr_34848_36250 = state_34841__$1;
(statearr_34848_36250[(1)] = (5));

} else {
var statearr_34849_36251 = state_34841__$1;
(statearr_34849_36251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34842 === (15))){
var state_34841__$1 = state_34841;
var statearr_34853_36252 = state_34841__$1;
(statearr_34853_36252[(2)] = null);

(statearr_34853_36252[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34842 === (21))){
var state_34841__$1 = state_34841;
var statearr_34854_36253 = state_34841__$1;
(statearr_34854_36253[(2)] = null);

(statearr_34854_36253[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34842 === (13))){
var inst_34796 = (state_34841[(8)]);
var inst_34793 = (state_34841[(9)]);
var inst_34795 = (state_34841[(11)]);
var inst_34794 = (state_34841[(12)]);
var inst_34803 = (state_34841[(2)]);
var inst_34804 = (inst_34796 + (1));
var tmp34850 = inst_34793;
var tmp34851 = inst_34795;
var tmp34852 = inst_34794;
var inst_34793__$1 = tmp34850;
var inst_34794__$1 = tmp34852;
var inst_34795__$1 = tmp34851;
var inst_34796__$1 = inst_34804;
var state_34841__$1 = (function (){var statearr_34855 = state_34841;
(statearr_34855[(8)] = inst_34796__$1);

(statearr_34855[(9)] = inst_34793__$1);

(statearr_34855[(14)] = inst_34803);

(statearr_34855[(11)] = inst_34795__$1);

(statearr_34855[(12)] = inst_34794__$1);

return statearr_34855;
})();
var statearr_34856_36259 = state_34841__$1;
(statearr_34856_36259[(2)] = null);

(statearr_34856_36259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34842 === (22))){
var state_34841__$1 = state_34841;
var statearr_34857_36260 = state_34841__$1;
(statearr_34857_36260[(2)] = null);

(statearr_34857_36260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34842 === (6))){
var inst_34782 = (state_34841[(13)]);
var inst_34791 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34782) : f.call(null,inst_34782));
var inst_34792 = cljs.core.seq(inst_34791);
var inst_34793 = inst_34792;
var inst_34794 = null;
var inst_34795 = (0);
var inst_34796 = (0);
var state_34841__$1 = (function (){var statearr_34858 = state_34841;
(statearr_34858[(8)] = inst_34796);

(statearr_34858[(9)] = inst_34793);

(statearr_34858[(11)] = inst_34795);

(statearr_34858[(12)] = inst_34794);

return statearr_34858;
})();
var statearr_34859_36261 = state_34841__$1;
(statearr_34859_36261[(2)] = null);

(statearr_34859_36261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34842 === (17))){
var inst_34807 = (state_34841[(7)]);
var inst_34811 = cljs.core.chunk_first(inst_34807);
var inst_34812 = cljs.core.chunk_rest(inst_34807);
var inst_34813 = cljs.core.count(inst_34811);
var inst_34793 = inst_34812;
var inst_34794 = inst_34811;
var inst_34795 = inst_34813;
var inst_34796 = (0);
var state_34841__$1 = (function (){var statearr_34860 = state_34841;
(statearr_34860[(8)] = inst_34796);

(statearr_34860[(9)] = inst_34793);

(statearr_34860[(11)] = inst_34795);

(statearr_34860[(12)] = inst_34794);

return statearr_34860;
})();
var statearr_34861_36262 = state_34841__$1;
(statearr_34861_36262[(2)] = null);

(statearr_34861_36262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34842 === (3))){
var inst_34839 = (state_34841[(2)]);
var state_34841__$1 = state_34841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34841__$1,inst_34839);
} else {
if((state_val_34842 === (12))){
var inst_34827 = (state_34841[(2)]);
var state_34841__$1 = state_34841;
var statearr_34862_36267 = state_34841__$1;
(statearr_34862_36267[(2)] = inst_34827);

(statearr_34862_36267[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34842 === (2))){
var state_34841__$1 = state_34841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34841__$1,(4),in$);
} else {
if((state_val_34842 === (23))){
var inst_34835 = (state_34841[(2)]);
var state_34841__$1 = state_34841;
var statearr_34863_36272 = state_34841__$1;
(statearr_34863_36272[(2)] = inst_34835);

(statearr_34863_36272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34842 === (19))){
var inst_34822 = (state_34841[(2)]);
var state_34841__$1 = state_34841;
var statearr_34864_36277 = state_34841__$1;
(statearr_34864_36277[(2)] = inst_34822);

(statearr_34864_36277[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34842 === (11))){
var inst_34793 = (state_34841[(9)]);
var inst_34807 = (state_34841[(7)]);
var inst_34807__$1 = cljs.core.seq(inst_34793);
var state_34841__$1 = (function (){var statearr_34865 = state_34841;
(statearr_34865[(7)] = inst_34807__$1);

return statearr_34865;
})();
if(inst_34807__$1){
var statearr_34866_36278 = state_34841__$1;
(statearr_34866_36278[(1)] = (14));

} else {
var statearr_34867_36281 = state_34841__$1;
(statearr_34867_36281[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34842 === (9))){
var inst_34829 = (state_34841[(2)]);
var inst_34830 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34841__$1 = (function (){var statearr_34868 = state_34841;
(statearr_34868[(15)] = inst_34829);

return statearr_34868;
})();
if(cljs.core.truth_(inst_34830)){
var statearr_34869_36283 = state_34841__$1;
(statearr_34869_36283[(1)] = (21));

} else {
var statearr_34870_36284 = state_34841__$1;
(statearr_34870_36284[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34842 === (5))){
var inst_34785 = cljs.core.async.close_BANG_(out);
var state_34841__$1 = state_34841;
var statearr_34871_36285 = state_34841__$1;
(statearr_34871_36285[(2)] = inst_34785);

(statearr_34871_36285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34842 === (14))){
var inst_34807 = (state_34841[(7)]);
var inst_34809 = cljs.core.chunked_seq_QMARK_(inst_34807);
var state_34841__$1 = state_34841;
if(inst_34809){
var statearr_34872_36286 = state_34841__$1;
(statearr_34872_36286[(1)] = (17));

} else {
var statearr_34873_36287 = state_34841__$1;
(statearr_34873_36287[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34842 === (16))){
var inst_34825 = (state_34841[(2)]);
var state_34841__$1 = state_34841;
var statearr_34874_36289 = state_34841__$1;
(statearr_34874_36289[(2)] = inst_34825);

(statearr_34874_36289[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34842 === (10))){
var inst_34796 = (state_34841[(8)]);
var inst_34794 = (state_34841[(12)]);
var inst_34801 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34794,inst_34796);
var state_34841__$1 = state_34841;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34841__$1,(13),out,inst_34801);
} else {
if((state_val_34842 === (18))){
var inst_34807 = (state_34841[(7)]);
var inst_34816 = cljs.core.first(inst_34807);
var state_34841__$1 = state_34841;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34841__$1,(20),out,inst_34816);
} else {
if((state_val_34842 === (8))){
var inst_34796 = (state_34841[(8)]);
var inst_34795 = (state_34841[(11)]);
var inst_34798 = (inst_34796 < inst_34795);
var inst_34799 = inst_34798;
var state_34841__$1 = state_34841;
if(cljs.core.truth_(inst_34799)){
var statearr_34875_36290 = state_34841__$1;
(statearr_34875_36290[(1)] = (10));

} else {
var statearr_34876_36291 = state_34841__$1;
(statearr_34876_36291[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33571__auto__))
;
return ((function (switch__33471__auto__,c__33571__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33472__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33472__auto____0 = (function (){
var statearr_34877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34877[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33472__auto__);

(statearr_34877[(1)] = (1));

return statearr_34877;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33472__auto____1 = (function (state_34841){
while(true){
var ret_value__33473__auto__ = (function (){try{while(true){
var result__33474__auto__ = switch__33471__auto__(state_34841);
if(cljs.core.keyword_identical_QMARK_(result__33474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33474__auto__;
}
break;
}
}catch (e34878){if((e34878 instanceof Object)){
var ex__33475__auto__ = e34878;
var statearr_34879_36292 = state_34841;
(statearr_34879_36292[(5)] = ex__33475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34878;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36294 = state_34841;
state_34841 = G__36294;
continue;
} else {
return ret_value__33473__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33472__auto__ = function(state_34841){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33472__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33472__auto____1.call(this,state_34841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33472__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33472__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33472__auto__;
})()
;})(switch__33471__auto__,c__33571__auto__))
})();
var state__33573__auto__ = (function (){var statearr_34880 = (f__33572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33572__auto__.cljs$core$IFn$_invoke$arity$0() : f__33572__auto__.call(null));
(statearr_34880[(6)] = c__33571__auto__);

return statearr_34880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33573__auto__);
});})(c__33571__auto__))
);

return c__33571__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34882 = arguments.length;
switch (G__34882) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34884 = arguments.length;
switch (G__34884) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34886 = arguments.length;
switch (G__34886) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33571__auto___36305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33571__auto___36305,out){
return (function (){
var f__33572__auto__ = (function (){var switch__33471__auto__ = ((function (c__33571__auto___36305,out){
return (function (state_34910){
var state_val_34911 = (state_34910[(1)]);
if((state_val_34911 === (7))){
var inst_34905 = (state_34910[(2)]);
var state_34910__$1 = state_34910;
var statearr_34912_36306 = state_34910__$1;
(statearr_34912_36306[(2)] = inst_34905);

(statearr_34912_36306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (1))){
var inst_34887 = null;
var state_34910__$1 = (function (){var statearr_34913 = state_34910;
(statearr_34913[(7)] = inst_34887);

return statearr_34913;
})();
var statearr_34914_36308 = state_34910__$1;
(statearr_34914_36308[(2)] = null);

(statearr_34914_36308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (4))){
var inst_34890 = (state_34910[(8)]);
var inst_34890__$1 = (state_34910[(2)]);
var inst_34891 = (inst_34890__$1 == null);
var inst_34892 = cljs.core.not(inst_34891);
var state_34910__$1 = (function (){var statearr_34915 = state_34910;
(statearr_34915[(8)] = inst_34890__$1);

return statearr_34915;
})();
if(inst_34892){
var statearr_34916_36313 = state_34910__$1;
(statearr_34916_36313[(1)] = (5));

} else {
var statearr_34917_36315 = state_34910__$1;
(statearr_34917_36315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (6))){
var state_34910__$1 = state_34910;
var statearr_34918_36316 = state_34910__$1;
(statearr_34918_36316[(2)] = null);

(statearr_34918_36316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (3))){
var inst_34907 = (state_34910[(2)]);
var inst_34908 = cljs.core.async.close_BANG_(out);
var state_34910__$1 = (function (){var statearr_34919 = state_34910;
(statearr_34919[(9)] = inst_34907);

return statearr_34919;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34910__$1,inst_34908);
} else {
if((state_val_34911 === (2))){
var state_34910__$1 = state_34910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34910__$1,(4),ch);
} else {
if((state_val_34911 === (11))){
var inst_34890 = (state_34910[(8)]);
var inst_34899 = (state_34910[(2)]);
var inst_34887 = inst_34890;
var state_34910__$1 = (function (){var statearr_34920 = state_34910;
(statearr_34920[(10)] = inst_34899);

(statearr_34920[(7)] = inst_34887);

return statearr_34920;
})();
var statearr_34921_36317 = state_34910__$1;
(statearr_34921_36317[(2)] = null);

(statearr_34921_36317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (9))){
var inst_34890 = (state_34910[(8)]);
var state_34910__$1 = state_34910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34910__$1,(11),out,inst_34890);
} else {
if((state_val_34911 === (5))){
var inst_34890 = (state_34910[(8)]);
var inst_34887 = (state_34910[(7)]);
var inst_34894 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34890,inst_34887);
var state_34910__$1 = state_34910;
if(inst_34894){
var statearr_34923_36319 = state_34910__$1;
(statearr_34923_36319[(1)] = (8));

} else {
var statearr_34924_36320 = state_34910__$1;
(statearr_34924_36320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (10))){
var inst_34902 = (state_34910[(2)]);
var state_34910__$1 = state_34910;
var statearr_34925_36321 = state_34910__$1;
(statearr_34925_36321[(2)] = inst_34902);

(statearr_34925_36321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34911 === (8))){
var inst_34887 = (state_34910[(7)]);
var tmp34922 = inst_34887;
var inst_34887__$1 = tmp34922;
var state_34910__$1 = (function (){var statearr_34926 = state_34910;
(statearr_34926[(7)] = inst_34887__$1);

return statearr_34926;
})();
var statearr_34927_36322 = state_34910__$1;
(statearr_34927_36322[(2)] = null);

(statearr_34927_36322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33571__auto___36305,out))
;
return ((function (switch__33471__auto__,c__33571__auto___36305,out){
return (function() {
var cljs$core$async$state_machine__33472__auto__ = null;
var cljs$core$async$state_machine__33472__auto____0 = (function (){
var statearr_34928 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34928[(0)] = cljs$core$async$state_machine__33472__auto__);

(statearr_34928[(1)] = (1));

return statearr_34928;
});
var cljs$core$async$state_machine__33472__auto____1 = (function (state_34910){
while(true){
var ret_value__33473__auto__ = (function (){try{while(true){
var result__33474__auto__ = switch__33471__auto__(state_34910);
if(cljs.core.keyword_identical_QMARK_(result__33474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33474__auto__;
}
break;
}
}catch (e34929){if((e34929 instanceof Object)){
var ex__33475__auto__ = e34929;
var statearr_34930_36330 = state_34910;
(statearr_34930_36330[(5)] = ex__33475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34929;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36331 = state_34910;
state_34910 = G__36331;
continue;
} else {
return ret_value__33473__auto__;
}
break;
}
});
cljs$core$async$state_machine__33472__auto__ = function(state_34910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33472__auto____1.call(this,state_34910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33472__auto____0;
cljs$core$async$state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33472__auto____1;
return cljs$core$async$state_machine__33472__auto__;
})()
;})(switch__33471__auto__,c__33571__auto___36305,out))
})();
var state__33573__auto__ = (function (){var statearr_34931 = (f__33572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33572__auto__.cljs$core$IFn$_invoke$arity$0() : f__33572__auto__.call(null));
(statearr_34931[(6)] = c__33571__auto___36305);

return statearr_34931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33573__auto__);
});})(c__33571__auto___36305,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34933 = arguments.length;
switch (G__34933) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33571__auto___36333 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33571__auto___36333,out){
return (function (){
var f__33572__auto__ = (function (){var switch__33471__auto__ = ((function (c__33571__auto___36333,out){
return (function (state_34971){
var state_val_34972 = (state_34971[(1)]);
if((state_val_34972 === (7))){
var inst_34967 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_34973_36334 = state_34971__$1;
(statearr_34973_36334[(2)] = inst_34967);

(statearr_34973_36334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (1))){
var inst_34934 = (new Array(n));
var inst_34935 = inst_34934;
var inst_34936 = (0);
var state_34971__$1 = (function (){var statearr_34974 = state_34971;
(statearr_34974[(7)] = inst_34935);

(statearr_34974[(8)] = inst_34936);

return statearr_34974;
})();
var statearr_34975_36335 = state_34971__$1;
(statearr_34975_36335[(2)] = null);

(statearr_34975_36335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (4))){
var inst_34939 = (state_34971[(9)]);
var inst_34939__$1 = (state_34971[(2)]);
var inst_34940 = (inst_34939__$1 == null);
var inst_34941 = cljs.core.not(inst_34940);
var state_34971__$1 = (function (){var statearr_34976 = state_34971;
(statearr_34976[(9)] = inst_34939__$1);

return statearr_34976;
})();
if(inst_34941){
var statearr_34977_36337 = state_34971__$1;
(statearr_34977_36337[(1)] = (5));

} else {
var statearr_34978_36338 = state_34971__$1;
(statearr_34978_36338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (15))){
var inst_34961 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_34979_36339 = state_34971__$1;
(statearr_34979_36339[(2)] = inst_34961);

(statearr_34979_36339[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (13))){
var state_34971__$1 = state_34971;
var statearr_34980_36340 = state_34971__$1;
(statearr_34980_36340[(2)] = null);

(statearr_34980_36340[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (6))){
var inst_34936 = (state_34971[(8)]);
var inst_34957 = (inst_34936 > (0));
var state_34971__$1 = state_34971;
if(cljs.core.truth_(inst_34957)){
var statearr_34981_36342 = state_34971__$1;
(statearr_34981_36342[(1)] = (12));

} else {
var statearr_34982_36343 = state_34971__$1;
(statearr_34982_36343[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (3))){
var inst_34969 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34971__$1,inst_34969);
} else {
if((state_val_34972 === (12))){
var inst_34935 = (state_34971[(7)]);
var inst_34959 = cljs.core.vec(inst_34935);
var state_34971__$1 = state_34971;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34971__$1,(15),out,inst_34959);
} else {
if((state_val_34972 === (2))){
var state_34971__$1 = state_34971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34971__$1,(4),ch);
} else {
if((state_val_34972 === (11))){
var inst_34951 = (state_34971[(2)]);
var inst_34952 = (new Array(n));
var inst_34935 = inst_34952;
var inst_34936 = (0);
var state_34971__$1 = (function (){var statearr_34983 = state_34971;
(statearr_34983[(10)] = inst_34951);

(statearr_34983[(7)] = inst_34935);

(statearr_34983[(8)] = inst_34936);

return statearr_34983;
})();
var statearr_34984_36347 = state_34971__$1;
(statearr_34984_36347[(2)] = null);

(statearr_34984_36347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (9))){
var inst_34935 = (state_34971[(7)]);
var inst_34949 = cljs.core.vec(inst_34935);
var state_34971__$1 = state_34971;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34971__$1,(11),out,inst_34949);
} else {
if((state_val_34972 === (5))){
var inst_34944 = (state_34971[(11)]);
var inst_34935 = (state_34971[(7)]);
var inst_34936 = (state_34971[(8)]);
var inst_34939 = (state_34971[(9)]);
var inst_34943 = (inst_34935[inst_34936] = inst_34939);
var inst_34944__$1 = (inst_34936 + (1));
var inst_34945 = (inst_34944__$1 < n);
var state_34971__$1 = (function (){var statearr_34985 = state_34971;
(statearr_34985[(11)] = inst_34944__$1);

(statearr_34985[(12)] = inst_34943);

return statearr_34985;
})();
if(cljs.core.truth_(inst_34945)){
var statearr_34986_36350 = state_34971__$1;
(statearr_34986_36350[(1)] = (8));

} else {
var statearr_34987_36351 = state_34971__$1;
(statearr_34987_36351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (14))){
var inst_34964 = (state_34971[(2)]);
var inst_34965 = cljs.core.async.close_BANG_(out);
var state_34971__$1 = (function (){var statearr_34989 = state_34971;
(statearr_34989[(13)] = inst_34964);

return statearr_34989;
})();
var statearr_34990_36354 = state_34971__$1;
(statearr_34990_36354[(2)] = inst_34965);

(statearr_34990_36354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (10))){
var inst_34955 = (state_34971[(2)]);
var state_34971__$1 = state_34971;
var statearr_34991_36355 = state_34971__$1;
(statearr_34991_36355[(2)] = inst_34955);

(statearr_34991_36355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34972 === (8))){
var inst_34944 = (state_34971[(11)]);
var inst_34935 = (state_34971[(7)]);
var tmp34988 = inst_34935;
var inst_34935__$1 = tmp34988;
var inst_34936 = inst_34944;
var state_34971__$1 = (function (){var statearr_34992 = state_34971;
(statearr_34992[(7)] = inst_34935__$1);

(statearr_34992[(8)] = inst_34936);

return statearr_34992;
})();
var statearr_34993_36358 = state_34971__$1;
(statearr_34993_36358[(2)] = null);

(statearr_34993_36358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33571__auto___36333,out))
;
return ((function (switch__33471__auto__,c__33571__auto___36333,out){
return (function() {
var cljs$core$async$state_machine__33472__auto__ = null;
var cljs$core$async$state_machine__33472__auto____0 = (function (){
var statearr_34994 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34994[(0)] = cljs$core$async$state_machine__33472__auto__);

(statearr_34994[(1)] = (1));

return statearr_34994;
});
var cljs$core$async$state_machine__33472__auto____1 = (function (state_34971){
while(true){
var ret_value__33473__auto__ = (function (){try{while(true){
var result__33474__auto__ = switch__33471__auto__(state_34971);
if(cljs.core.keyword_identical_QMARK_(result__33474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33474__auto__;
}
break;
}
}catch (e34995){if((e34995 instanceof Object)){
var ex__33475__auto__ = e34995;
var statearr_34996_36363 = state_34971;
(statearr_34996_36363[(5)] = ex__33475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34995;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36366 = state_34971;
state_34971 = G__36366;
continue;
} else {
return ret_value__33473__auto__;
}
break;
}
});
cljs$core$async$state_machine__33472__auto__ = function(state_34971){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33472__auto____1.call(this,state_34971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33472__auto____0;
cljs$core$async$state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33472__auto____1;
return cljs$core$async$state_machine__33472__auto__;
})()
;})(switch__33471__auto__,c__33571__auto___36333,out))
})();
var state__33573__auto__ = (function (){var statearr_34997 = (f__33572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33572__auto__.cljs$core$IFn$_invoke$arity$0() : f__33572__auto__.call(null));
(statearr_34997[(6)] = c__33571__auto___36333);

return statearr_34997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33573__auto__);
});})(c__33571__auto___36333,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34999 = arguments.length;
switch (G__34999) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33571__auto___36370 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33571__auto___36370,out){
return (function (){
var f__33572__auto__ = (function (){var switch__33471__auto__ = ((function (c__33571__auto___36370,out){
return (function (state_35041){
var state_val_35042 = (state_35041[(1)]);
if((state_val_35042 === (7))){
var inst_35037 = (state_35041[(2)]);
var state_35041__$1 = state_35041;
var statearr_35043_36375 = state_35041__$1;
(statearr_35043_36375[(2)] = inst_35037);

(statearr_35043_36375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (1))){
var inst_35000 = [];
var inst_35001 = inst_35000;
var inst_35002 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35041__$1 = (function (){var statearr_35044 = state_35041;
(statearr_35044[(7)] = inst_35002);

(statearr_35044[(8)] = inst_35001);

return statearr_35044;
})();
var statearr_35045_36380 = state_35041__$1;
(statearr_35045_36380[(2)] = null);

(statearr_35045_36380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (4))){
var inst_35005 = (state_35041[(9)]);
var inst_35005__$1 = (state_35041[(2)]);
var inst_35006 = (inst_35005__$1 == null);
var inst_35007 = cljs.core.not(inst_35006);
var state_35041__$1 = (function (){var statearr_35046 = state_35041;
(statearr_35046[(9)] = inst_35005__$1);

return statearr_35046;
})();
if(inst_35007){
var statearr_35047_36382 = state_35041__$1;
(statearr_35047_36382[(1)] = (5));

} else {
var statearr_35048_36387 = state_35041__$1;
(statearr_35048_36387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (15))){
var inst_35031 = (state_35041[(2)]);
var state_35041__$1 = state_35041;
var statearr_35049_36389 = state_35041__$1;
(statearr_35049_36389[(2)] = inst_35031);

(statearr_35049_36389[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (13))){
var state_35041__$1 = state_35041;
var statearr_35050_36392 = state_35041__$1;
(statearr_35050_36392[(2)] = null);

(statearr_35050_36392[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (6))){
var inst_35001 = (state_35041[(8)]);
var inst_35026 = inst_35001.length;
var inst_35027 = (inst_35026 > (0));
var state_35041__$1 = state_35041;
if(cljs.core.truth_(inst_35027)){
var statearr_35051_36402 = state_35041__$1;
(statearr_35051_36402[(1)] = (12));

} else {
var statearr_35052_36403 = state_35041__$1;
(statearr_35052_36403[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (3))){
var inst_35039 = (state_35041[(2)]);
var state_35041__$1 = state_35041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35041__$1,inst_35039);
} else {
if((state_val_35042 === (12))){
var inst_35001 = (state_35041[(8)]);
var inst_35029 = cljs.core.vec(inst_35001);
var state_35041__$1 = state_35041;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35041__$1,(15),out,inst_35029);
} else {
if((state_val_35042 === (2))){
var state_35041__$1 = state_35041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35041__$1,(4),ch);
} else {
if((state_val_35042 === (11))){
var inst_35005 = (state_35041[(9)]);
var inst_35009 = (state_35041[(10)]);
var inst_35019 = (state_35041[(2)]);
var inst_35020 = [];
var inst_35021 = inst_35020.push(inst_35005);
var inst_35001 = inst_35020;
var inst_35002 = inst_35009;
var state_35041__$1 = (function (){var statearr_35053 = state_35041;
(statearr_35053[(7)] = inst_35002);

(statearr_35053[(11)] = inst_35021);

(statearr_35053[(12)] = inst_35019);

(statearr_35053[(8)] = inst_35001);

return statearr_35053;
})();
var statearr_35054_36416 = state_35041__$1;
(statearr_35054_36416[(2)] = null);

(statearr_35054_36416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (9))){
var inst_35001 = (state_35041[(8)]);
var inst_35017 = cljs.core.vec(inst_35001);
var state_35041__$1 = state_35041;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35041__$1,(11),out,inst_35017);
} else {
if((state_val_35042 === (5))){
var inst_35005 = (state_35041[(9)]);
var inst_35002 = (state_35041[(7)]);
var inst_35009 = (state_35041[(10)]);
var inst_35009__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35005) : f.call(null,inst_35005));
var inst_35010 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35009__$1,inst_35002);
var inst_35011 = cljs.core.keyword_identical_QMARK_(inst_35002,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35012 = ((inst_35010) || (inst_35011));
var state_35041__$1 = (function (){var statearr_35055 = state_35041;
(statearr_35055[(10)] = inst_35009__$1);

return statearr_35055;
})();
if(cljs.core.truth_(inst_35012)){
var statearr_35056_36429 = state_35041__$1;
(statearr_35056_36429[(1)] = (8));

} else {
var statearr_35057_36434 = state_35041__$1;
(statearr_35057_36434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (14))){
var inst_35034 = (state_35041[(2)]);
var inst_35035 = cljs.core.async.close_BANG_(out);
var state_35041__$1 = (function (){var statearr_35059 = state_35041;
(statearr_35059[(13)] = inst_35034);

return statearr_35059;
})();
var statearr_35060_36442 = state_35041__$1;
(statearr_35060_36442[(2)] = inst_35035);

(statearr_35060_36442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (10))){
var inst_35024 = (state_35041[(2)]);
var state_35041__$1 = state_35041;
var statearr_35061_36448 = state_35041__$1;
(statearr_35061_36448[(2)] = inst_35024);

(statearr_35061_36448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35042 === (8))){
var inst_35005 = (state_35041[(9)]);
var inst_35009 = (state_35041[(10)]);
var inst_35001 = (state_35041[(8)]);
var inst_35014 = inst_35001.push(inst_35005);
var tmp35058 = inst_35001;
var inst_35001__$1 = tmp35058;
var inst_35002 = inst_35009;
var state_35041__$1 = (function (){var statearr_35062 = state_35041;
(statearr_35062[(7)] = inst_35002);

(statearr_35062[(14)] = inst_35014);

(statearr_35062[(8)] = inst_35001__$1);

return statearr_35062;
})();
var statearr_35063_36464 = state_35041__$1;
(statearr_35063_36464[(2)] = null);

(statearr_35063_36464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33571__auto___36370,out))
;
return ((function (switch__33471__auto__,c__33571__auto___36370,out){
return (function() {
var cljs$core$async$state_machine__33472__auto__ = null;
var cljs$core$async$state_machine__33472__auto____0 = (function (){
var statearr_35064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35064[(0)] = cljs$core$async$state_machine__33472__auto__);

(statearr_35064[(1)] = (1));

return statearr_35064;
});
var cljs$core$async$state_machine__33472__auto____1 = (function (state_35041){
while(true){
var ret_value__33473__auto__ = (function (){try{while(true){
var result__33474__auto__ = switch__33471__auto__(state_35041);
if(cljs.core.keyword_identical_QMARK_(result__33474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33474__auto__;
}
break;
}
}catch (e35065){if((e35065 instanceof Object)){
var ex__33475__auto__ = e35065;
var statearr_35066_36474 = state_35041;
(statearr_35066_36474[(5)] = ex__33475__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35065;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33473__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36482 = state_35041;
state_35041 = G__36482;
continue;
} else {
return ret_value__33473__auto__;
}
break;
}
});
cljs$core$async$state_machine__33472__auto__ = function(state_35041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33472__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33472__auto____1.call(this,state_35041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33472__auto____0;
cljs$core$async$state_machine__33472__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33472__auto____1;
return cljs$core$async$state_machine__33472__auto__;
})()
;})(switch__33471__auto__,c__33571__auto___36370,out))
})();
var state__33573__auto__ = (function (){var statearr_35067 = (f__33572__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33572__auto__.cljs$core$IFn$_invoke$arity$0() : f__33572__auto__.call(null));
(statearr_35067[(6)] = c__33571__auto___36370);

return statearr_35067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33573__auto__);
});})(c__33571__auto___36370,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
