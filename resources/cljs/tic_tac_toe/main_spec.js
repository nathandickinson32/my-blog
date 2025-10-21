// Compiled by ClojureScript 1.12.42 {:optimizations :none}
goog.provide('tic_tac_toe.main_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('tic_tac_toe.main');
goog.require('c3kit.wire.spec_helper');
goog.require('tic_tac_toe.boardc');
var description__10061__auto___15995 = speclj.components.new_description.call(null,"main",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__15929_15996 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__15930_15997 = description__10061__auto___15995;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__15930_15997);

try{var seq__15931_15998 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,10,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom.call(null),speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995){
return (function (){
tic_tac_toe.main.reset_game_BANG_.call(null);

return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995))
),speclj.components.new_characteristic.call(null,"renders title",((function (_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995){
return (function (){
var value__10565__auto___16002 = ".container";
var node__10566__auto___16003 = c3kit.wire.spec_helper.select.call(null,value__10565__auto___16002);
if(cljs.core.truth_(node__10566__auto___16003)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10565__auto___16002;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto__ = "Tic Tac Toe";
var actual__10255__auto__ = c3kit.wire.spec_helper.text_BANG_.call(null,".container");
if((actual__10255__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto__ === 'string') && (typeof actual__10255__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto__,expected__10254__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto__)) && (typeof actual__10255__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto__,actual__10255__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto__,expected__10254__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto__,p1__10253__10256__auto__);
}),actual__10255__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto__;
var b__10183__auto__ = actual__10255__auto__;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995))
,false),speclj.components.new_characteristic.call(null,"initializes app-state",((function (_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___16004 = new cljs.core.Keyword(null,"3x3","3x3",570362544);
var actual__10204__auto___16005 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___16004,actual__10204__auto___16005)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___16004;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___16005;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___16006 = new cljs.core.Keyword(null,"X","X",1705996313);
var actual__10204__auto___16007 = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___16006,actual__10204__auto___16007)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___16006;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___16007;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___16008 = new cljs.core.Keyword(null,"human","human",-772334390);
var actual__10204__auto___16009 = new cljs.core.Keyword(null,"X","X",1705996313).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___16008,actual__10204__auto___16009)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___16008;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___16009;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___16010 = new cljs.core.Keyword(null,"human","human",-772334390);
var actual__10204__auto___16011 = new cljs.core.Keyword(null,"O","O",795252742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___16010,actual__10204__auto___16011)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___16010;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___16011;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___16012 = (0);
var actual__10204__auto___16013 = new cljs.core.Keyword(null,"turn-count","turn-count",1105131756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___16012,actual__10204__auto___16013)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___16012;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___16013;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = tic_tac_toe.boardc.starting_nil_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
var actual__10204__auto__ = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995))
,false),speclj.components.new_characteristic.call(null,"renders a 3x3 board",((function (_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995){
return (function (){
var buttons = c3kit.wire.spec_helper.select_all.call(null,".square");
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = (9);
var actual__10204__auto__ = cljs.core.count.call(null,buttons);
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995))
,false),(function (){var description__10061__auto____$1 = speclj.components.new_description.call(null,"handle move",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__15965_16014 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__15966_16015 = description__10061__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__15966_16015);

try{var seq__15967_16016 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"marks token and does not allow moves on occupied squares",((function (_STAR_parent_description_STAR__orig_val__15965_16014,_STAR_parent_description_STAR__temp_val__15966_16015,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(1)");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto___16020 = "X";
var actual__10255__auto___16021 = c3kit.wire.spec_helper.text_BANG_.call(null,"button.square:nth-of-type(1)");
if((actual__10255__auto___16021 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16020;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto___16020 === 'string') && (typeof actual__10255__auto___16021 === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto___16021,expected__10254__auto___16020) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16020;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16021;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto___16020)) && (typeof actual__10255__auto___16021 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto___16020,actual__10255__auto___16021))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto___16021;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto___16020;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto___16021)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto___16021,expected__10254__auto___16020)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16020;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16021;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto___16021)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto___16020,p1__10253__10256__auto__);
}),actual__10255__auto___16021))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16020;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16021;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto___16020;
var b__10183__auto__ = actual__10255__auto___16021;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}

c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(1)");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto___16022 = "X";
var actual__10255__auto___16023 = c3kit.wire.spec_helper.text_BANG_.call(null,"button.square:nth-of-type(1)");
if((actual__10255__auto___16023 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16022;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto___16022 === 'string') && (typeof actual__10255__auto___16023 === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto___16023,expected__10254__auto___16022) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16022;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16023;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto___16022)) && (typeof actual__10255__auto___16023 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto___16022,actual__10255__auto___16023))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto___16023;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto___16022;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto___16023)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto___16023,expected__10254__auto___16022)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16022;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16023;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto___16023)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto___16022,p1__10253__10256__auto__);
}),actual__10255__auto___16023))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16022;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16023;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto___16022;
var b__10183__auto__ = actual__10255__auto___16023;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.Keyword(null,"O","O",795252742);
var actual__10204__auto__ = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__15965_16014,_STAR_parent_description_STAR__temp_val__15966_16015,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995))
,false),speclj.components.new_characteristic.call(null,"handles multiple turns",((function (_STAR_parent_description_STAR__orig_val__15965_16014,_STAR_parent_description_STAR__temp_val__15966_16015,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(1)");

c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(2)");

c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(3)");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto___16024 = "X";
var actual__10255__auto___16025 = c3kit.wire.spec_helper.text_BANG_.call(null,"button.square:nth-of-type(1)");
if((actual__10255__auto___16025 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16024;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto___16024 === 'string') && (typeof actual__10255__auto___16025 === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto___16025,expected__10254__auto___16024) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16024;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16025;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto___16024)) && (typeof actual__10255__auto___16025 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto___16024,actual__10255__auto___16025))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto___16025;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto___16024;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto___16025)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto___16025,expected__10254__auto___16024)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16024;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16025;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto___16025)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto___16024,p1__10253__10256__auto__);
}),actual__10255__auto___16025))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16024;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16025;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto___16024;
var b__10183__auto__ = actual__10255__auto___16025;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto___16026 = "O";
var actual__10255__auto___16027 = c3kit.wire.spec_helper.text_BANG_.call(null,"button.square:nth-of-type(2)");
if((actual__10255__auto___16027 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16026;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto___16026 === 'string') && (typeof actual__10255__auto___16027 === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto___16027,expected__10254__auto___16026) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16026;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16027;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto___16026)) && (typeof actual__10255__auto___16027 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto___16026,actual__10255__auto___16027))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto___16027;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto___16026;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto___16027)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto___16027,expected__10254__auto___16026)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16026;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16027;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto___16027)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto___16026,p1__10253__10256__auto__);
}),actual__10255__auto___16027))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16026;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16027;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto___16026;
var b__10183__auto__ = actual__10255__auto___16027;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto__ = "X";
var actual__10255__auto__ = c3kit.wire.spec_helper.text_BANG_.call(null,"button.square:nth-of-type(3)");
if((actual__10255__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto__ === 'string') && (typeof actual__10255__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto__,expected__10254__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto__)) && (typeof actual__10255__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto__,actual__10255__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto__,expected__10254__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto__,p1__10253__10256__auto__);
}),actual__10255__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto__;
var b__10183__auto__ = actual__10255__auto__;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__15965_16014,_STAR_parent_description_STAR__temp_val__15966_16015,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995))
,false),speclj.components.new_characteristic.call(null,"sets winner flag",((function (_STAR_parent_description_STAR__orig_val__15965_16014,_STAR_parent_description_STAR__temp_val__15966_16015,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"X","X",1705996313),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null)], null),new cljs.core.Keyword(null,"current-token","current-token",428531321),new cljs.core.Keyword(null,"X","X",1705996313));

c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(3)");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.Keyword(null,"X","X",1705996313);
var actual__10204__auto__ = new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__15965_16014,_STAR_parent_description_STAR__temp_val__15966_16015,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995))
,false),speclj.components.new_characteristic.call(null,"sets draw flag",((function (_STAR_parent_description_STAR__orig_val__15965_16014,_STAR_parent_description_STAR__temp_val__15966_16015,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"O","O",795252742)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"X","X",1705996313),null], null)], null),new cljs.core.Keyword(null,"current-token","current-token",428531321),new cljs.core.Keyword(null,"X","X",1705996313));

c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(9)");

speclj.components.inc_assertions_BANG_.call(null);

var value__10191__auto__ = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core.truth_(value__10191__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected truthy but was: ",(function (){var temp__5827__auto__ = value__10191__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),""].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__15965_16014,_STAR_parent_description_STAR__temp_val__15966_16015,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995))
,false),speclj.components.new_characteristic.call(null,"does not allow moves after a win",((function (_STAR_parent_description_STAR__orig_val__15965_16014,_STAR_parent_description_STAR__temp_val__15966_16015,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995){
return (function (){
var state = cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"winner","winner",714604679),new cljs.core.Keyword(null,"X","X",1705996313));
var current_token = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(state);
c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(5)");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___16028 = current_token;
var actual__10204__auto___16029 = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core._EQ_.call(null,expected__10203__auto___16028,actual__10204__auto___16029)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___16028;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___16029;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = null;
var actual__10204__auto__ = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),(1),(1)], null));
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__15965_16014,_STAR_parent_description_STAR__temp_val__15966_16015,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995))
,false),speclj.components.new_characteristic.call(null,"does not allow moves after a draw",((function (_STAR_parent_description_STAR__orig_val__15965_16014,_STAR_parent_description_STAR__temp_val__15966_16015,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"draw","draw",1358331674),true);

var current_token = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(5)");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___16030 = current_token;
var actual__10204__auto___16031 = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___16030,actual__10204__auto___16031)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___16030;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___16031;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = null;
var actual__10204__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,tic_tac_toe.main.game_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),(1),(1)], null));
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__15965_16014,_STAR_parent_description_STAR__temp_val__15966_16015,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995))
,false)],null)));
var chunk__15968_16017 = null;
var count__15969_16018 = (0);
var i__15970_16019 = (0);
while(true){
if((i__15970_16019 < count__15969_16018)){
var component__10062__auto___16032 = cljs.core._nth.call(null,chunk__15968_16017,i__15970_16019);
speclj.components.install.call(null,component__10062__auto___16032,description__10061__auto____$1);


var G__16033 = seq__15967_16016;
var G__16034 = chunk__15968_16017;
var G__16035 = count__15969_16018;
var G__16036 = (i__15970_16019 + (1));
seq__15967_16016 = G__16033;
chunk__15968_16017 = G__16034;
count__15969_16018 = G__16035;
i__15970_16019 = G__16036;
continue;
} else {
var temp__5825__auto___16037 = cljs.core.seq.call(null,seq__15967_16016);
if(temp__5825__auto___16037){
var seq__15967_16038__$1 = temp__5825__auto___16037;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15967_16038__$1)){
var c__5548__auto___16039 = cljs.core.chunk_first.call(null,seq__15967_16038__$1);
var G__16040 = cljs.core.chunk_rest.call(null,seq__15967_16038__$1);
var G__16041 = c__5548__auto___16039;
var G__16042 = cljs.core.count.call(null,c__5548__auto___16039);
var G__16043 = (0);
seq__15967_16016 = G__16040;
chunk__15968_16017 = G__16041;
count__15969_16018 = G__16042;
i__15970_16019 = G__16043;
continue;
} else {
var component__10062__auto___16044 = cljs.core.first.call(null,seq__15967_16038__$1);
speclj.components.install.call(null,component__10062__auto___16044,description__10061__auto____$1);


var G__16045 = cljs.core.next.call(null,seq__15967_16038__$1);
var G__16046 = null;
var G__16047 = (0);
var G__16048 = (0);
seq__15967_16016 = G__16045;
chunk__15968_16017 = G__16046;
count__15969_16018 = G__16047;
i__15970_16019 = G__16048;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__15965_16014);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto____$1);
}

return description__10061__auto____$1;
})(),(function (){var description__10061__auto____$1 = speclj.components.new_description.call(null,"status message",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__15971_16049 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__15972_16050 = description__10061__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__15972_16050);

try{var seq__15973_16051 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"status message for current turn",((function (_STAR_parent_description_STAR__orig_val__15971_16049,_STAR_parent_description_STAR__temp_val__15972_16050,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995){
return (function (){
speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto___16055 = "Turn: :X";
var actual__10255__auto___16056 = c3kit.wire.spec_helper.text_BANG_.call(null,".container");
if((actual__10255__auto___16056 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16055;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto___16055 === 'string') && (typeof actual__10255__auto___16056 === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto___16056,expected__10254__auto___16055) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16055;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16056;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto___16055)) && (typeof actual__10255__auto___16056 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto___16055,actual__10255__auto___16056))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto___16056;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto___16055;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto___16056)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto___16056,expected__10254__auto___16055)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16055;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16056;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto___16056)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto___16055,p1__10253__10256__auto__);
}),actual__10255__auto___16056))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16055;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16056;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto___16055;
var b__10183__auto__ = actual__10255__auto___16056;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}

cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-token","current-token",428531321),new cljs.core.Keyword(null,"O","O",795252742));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto__ = "Turn: :O";
var actual__10255__auto__ = c3kit.wire.spec_helper.text_BANG_.call(null,".container");
if((actual__10255__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto__ === 'string') && (typeof actual__10255__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto__,expected__10254__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto__)) && (typeof actual__10255__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto__,actual__10255__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto__,expected__10254__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto__,p1__10253__10256__auto__);
}),actual__10255__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto__;
var b__10183__auto__ = actual__10255__auto__;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__15971_16049,_STAR_parent_description_STAR__temp_val__15972_16050,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995))
,false),speclj.components.new_characteristic.call(null,"displays winner message",((function (_STAR_parent_description_STAR__orig_val__15971_16049,_STAR_parent_description_STAR__temp_val__15972_16050,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"winner","winner",714604679),new cljs.core.Keyword(null,"X","X",1705996313));

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto__ = "Winner: :X";
var actual__10255__auto__ = c3kit.wire.spec_helper.text_BANG_.call(null,".container");
if((actual__10255__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto__ === 'string') && (typeof actual__10255__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto__,expected__10254__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto__)) && (typeof actual__10255__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto__,actual__10255__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto__,expected__10254__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto__,p1__10253__10256__auto__);
}),actual__10255__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto__;
var b__10183__auto__ = actual__10255__auto__;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__15971_16049,_STAR_parent_description_STAR__temp_val__15972_16050,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995))
,false),speclj.components.new_characteristic.call(null,"displays draw message",((function (_STAR_parent_description_STAR__orig_val__15971_16049,_STAR_parent_description_STAR__temp_val__15972_16050,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"winner","winner",714604679),null,new cljs.core.Keyword(null,"draw","draw",1358331674),true);

c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto__ = "Draw!";
var actual__10255__auto__ = c3kit.wire.spec_helper.text_BANG_.call(null,".container");
if((actual__10255__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto__ === 'string') && (typeof actual__10255__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto__,expected__10254__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto__)) && (typeof actual__10255__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto__,actual__10255__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto__,expected__10254__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto__,p1__10253__10256__auto__);
}),actual__10255__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto__;
var b__10183__auto__ = actual__10255__auto__;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__15971_16049,_STAR_parent_description_STAR__temp_val__15972_16050,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995))
,false)],null)));
var chunk__15974_16052 = null;
var count__15975_16053 = (0);
var i__15976_16054 = (0);
while(true){
if((i__15976_16054 < count__15975_16053)){
var component__10062__auto___16057 = cljs.core._nth.call(null,chunk__15974_16052,i__15976_16054);
speclj.components.install.call(null,component__10062__auto___16057,description__10061__auto____$1);


var G__16058 = seq__15973_16051;
var G__16059 = chunk__15974_16052;
var G__16060 = count__15975_16053;
var G__16061 = (i__15976_16054 + (1));
seq__15973_16051 = G__16058;
chunk__15974_16052 = G__16059;
count__15975_16053 = G__16060;
i__15976_16054 = G__16061;
continue;
} else {
var temp__5825__auto___16062 = cljs.core.seq.call(null,seq__15973_16051);
if(temp__5825__auto___16062){
var seq__15973_16063__$1 = temp__5825__auto___16062;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15973_16063__$1)){
var c__5548__auto___16064 = cljs.core.chunk_first.call(null,seq__15973_16063__$1);
var G__16065 = cljs.core.chunk_rest.call(null,seq__15973_16063__$1);
var G__16066 = c__5548__auto___16064;
var G__16067 = cljs.core.count.call(null,c__5548__auto___16064);
var G__16068 = (0);
seq__15973_16051 = G__16065;
chunk__15974_16052 = G__16066;
count__15975_16053 = G__16067;
i__15976_16054 = G__16068;
continue;
} else {
var component__10062__auto___16069 = cljs.core.first.call(null,seq__15973_16063__$1);
speclj.components.install.call(null,component__10062__auto___16069,description__10061__auto____$1);


var G__16070 = cljs.core.next.call(null,seq__15973_16063__$1);
var G__16071 = null;
var G__16072 = (0);
var G__16073 = (0);
seq__15973_16051 = G__16070;
chunk__15974_16052 = G__16071;
count__15975_16053 = G__16072;
i__15976_16054 = G__16073;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__15971_16049);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto____$1);
}

return description__10061__auto____$1;
})(),(function (){var description__10061__auto____$1 = speclj.components.new_description.call(null,"reset",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__15977_16074 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__15978_16075 = description__10061__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__15978_16075);

try{var seq__15979_16076 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"reset button",((function (_STAR_parent_description_STAR__orig_val__15977_16074,_STAR_parent_description_STAR__temp_val__15978_16075,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995){
return (function (){
var value__10565__auto___16080 = ".reset";
var node__10566__auto___16081 = c3kit.wire.spec_helper.select.call(null,value__10565__auto___16080);
if(cljs.core.truth_(node__10566__auto___16081)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10565__auto___16080;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = "Reset";
var actual__10204__auto__ = c3kit.wire.spec_helper.text_BANG_.call(null,".reset");
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__15977_16074,_STAR_parent_description_STAR__temp_val__15978_16075,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995))
,false),speclj.components.new_characteristic.call(null,"resets game",((function (_STAR_parent_description_STAR__orig_val__15977_16074,_STAR_parent_description_STAR__temp_val__15978_16075,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"X","X",1705996313),null,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null)], null),new cljs.core.Keyword(null,"winner","winner",714604679),new cljs.core.Keyword(null,"X","X",1705996313),new cljs.core.Keyword(null,"draw","draw",1358331674),true);

c3kit.wire.spec_helper.click_BANG_.call(null,".reset");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___16082 = tic_tac_toe.boardc.starting_nil_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
var actual__10204__auto___16083 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___16082,actual__10204__auto___16083)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___16082;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___16083;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___16084 = new cljs.core.Keyword(null,"X","X",1705996313);
var actual__10204__auto___16085 = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___16084,actual__10204__auto___16085)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___16084;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___16085;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___16086 = (0);
var actual__10204__auto___16087 = new cljs.core.Keyword(null,"turn-count","turn-count",1105131756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___16086,actual__10204__auto___16087)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___16086;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___16087;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___16088 = null;
var actual__10204__auto___16089 = new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___16088,actual__10204__auto___16089)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___16088;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___16089;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var temp__5825__auto__ = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core.truth_(temp__5825__auto__)){
var value__10197__auto__ = temp__5825__auto__;
throw cljs.core.ex_info.call(null,["Expected falsy but was: ",(function (){var temp__5827__auto__ = value__10197__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__15977_16074,_STAR_parent_description_STAR__temp_val__15978_16075,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995))
,false),speclj.components.new_characteristic.call(null,"resets to 4x4 board",((function (_STAR_parent_description_STAR__orig_val__15977_16074,_STAR_parent_description_STAR__temp_val__15978_16075,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995){
return (function (){
tic_tac_toe.main.set_board_size.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));

tic_tac_toe.main.handle_move.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));

tic_tac_toe.main.reset_game_BANG_.call(null);

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___16090 = tic_tac_toe.boardc.starting_nil_board.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
var actual__10204__auto___16091 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___16090,actual__10204__auto___16091)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___16090;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___16091;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___16092 = new cljs.core.Keyword(null,"X","X",1705996313);
var actual__10204__auto___16093 = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___16092,actual__10204__auto___16093)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___16092;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___16093;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.Keyword(null,"4x4","4x4",121507723);
var actual__10204__auto__ = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__15977_16074,_STAR_parent_description_STAR__temp_val__15978_16075,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995))
,false),speclj.components.new_characteristic.call(null,"resets to 3x3 board",((function (_STAR_parent_description_STAR__orig_val__15977_16074,_STAR_parent_description_STAR__temp_val__15978_16075,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995){
return (function (){
tic_tac_toe.main.set_board_size.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___16094 = tic_tac_toe.boardc.starting_nil_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
var actual__10204__auto___16095 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___16094,actual__10204__auto___16095)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___16094;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___16095;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___16096 = new cljs.core.Keyword(null,"X","X",1705996313);
var actual__10204__auto___16097 = new cljs.core.Keyword(null,"current-token","current-token",428531321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___16096,actual__10204__auto___16097)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___16096;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___16097;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = new cljs.core.Keyword(null,"3x3","3x3",570362544);
var actual__10204__auto__ = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__15977_16074,_STAR_parent_description_STAR__temp_val__15978_16075,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995))
,false)],null)));
var chunk__15980_16077 = null;
var count__15981_16078 = (0);
var i__15982_16079 = (0);
while(true){
if((i__15982_16079 < count__15981_16078)){
var component__10062__auto___16098 = cljs.core._nth.call(null,chunk__15980_16077,i__15982_16079);
speclj.components.install.call(null,component__10062__auto___16098,description__10061__auto____$1);


var G__16099 = seq__15979_16076;
var G__16100 = chunk__15980_16077;
var G__16101 = count__15981_16078;
var G__16102 = (i__15982_16079 + (1));
seq__15979_16076 = G__16099;
chunk__15980_16077 = G__16100;
count__15981_16078 = G__16101;
i__15982_16079 = G__16102;
continue;
} else {
var temp__5825__auto___16103 = cljs.core.seq.call(null,seq__15979_16076);
if(temp__5825__auto___16103){
var seq__15979_16104__$1 = temp__5825__auto___16103;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15979_16104__$1)){
var c__5548__auto___16105 = cljs.core.chunk_first.call(null,seq__15979_16104__$1);
var G__16106 = cljs.core.chunk_rest.call(null,seq__15979_16104__$1);
var G__16107 = c__5548__auto___16105;
var G__16108 = cljs.core.count.call(null,c__5548__auto___16105);
var G__16109 = (0);
seq__15979_16076 = G__16106;
chunk__15980_16077 = G__16107;
count__15981_16078 = G__16108;
i__15982_16079 = G__16109;
continue;
} else {
var component__10062__auto___16110 = cljs.core.first.call(null,seq__15979_16104__$1);
speclj.components.install.call(null,component__10062__auto___16110,description__10061__auto____$1);


var G__16111 = cljs.core.next.call(null,seq__15979_16104__$1);
var G__16112 = null;
var G__16113 = (0);
var G__16114 = (0);
seq__15979_16076 = G__16111;
chunk__15980_16077 = G__16112;
count__15981_16078 = G__16113;
i__15982_16079 = G__16114;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__15977_16074);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto____$1);
}

return description__10061__auto____$1;
})(),(function (){var description__10061__auto____$1 = speclj.components.new_description.call(null,"board size selector",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__15983_16115 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__15984_16116 = description__10061__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__15984_16116);

try{var seq__15985_16117 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__15983_16115,_STAR_parent_description_STAR__temp_val__15984_16116,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__15983_16115,_STAR_parent_description_STAR__temp_val__15984_16116,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995))
),speclj.components.new_characteristic.call(null,"renders 3x3 and 4x4 buttons",((function (_STAR_parent_description_STAR__orig_val__15983_16115,_STAR_parent_description_STAR__temp_val__15984_16116,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995){
return (function (){
var value__10565__auto___16121 = ".container";
var node__10566__auto___16122 = c3kit.wire.spec_helper.select.call(null,value__10565__auto___16121);
if(cljs.core.truth_(node__10566__auto___16122)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10565__auto___16121;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto___16123 = "Board Size: ";
var actual__10255__auto___16124 = c3kit.wire.spec_helper.text_BANG_.call(null,".container");
if((actual__10255__auto___16124 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16123;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto___16123 === 'string') && (typeof actual__10255__auto___16124 === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto___16124,expected__10254__auto___16123) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16123;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16124;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto___16123)) && (typeof actual__10255__auto___16124 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto___16123,actual__10255__auto___16124))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto___16124;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto___16123;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto___16124)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto___16124,expected__10254__auto___16123)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16123;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16124;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto___16124)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto___16123,p1__10253__10256__auto__);
}),actual__10255__auto___16124))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16123;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16124;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto___16123;
var b__10183__auto__ = actual__10255__auto___16124;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto___16125 = "3x3";
var actual__10255__auto___16126 = c3kit.wire.spec_helper.text_BANG_.call(null,"button:nth-of-type(1)");
if((actual__10255__auto___16126 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16125;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto___16125 === 'string') && (typeof actual__10255__auto___16126 === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto___16126,expected__10254__auto___16125) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16125;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16126;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto___16125)) && (typeof actual__10255__auto___16126 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto___16125,actual__10255__auto___16126))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto___16126;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto___16125;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto___16126)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto___16126,expected__10254__auto___16125)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16125;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16126;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto___16126)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto___16125,p1__10253__10256__auto__);
}),actual__10255__auto___16126))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16125;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16126;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto___16125;
var b__10183__auto__ = actual__10255__auto___16126;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto__ = "4x4";
var actual__10255__auto__ = c3kit.wire.spec_helper.text_BANG_.call(null,"button:nth-of-type(2)");
if((actual__10255__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto__ === 'string') && (typeof actual__10255__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto__,expected__10254__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto__)) && (typeof actual__10255__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto__,actual__10255__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto__,expected__10254__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto__,p1__10253__10256__auto__);
}),actual__10255__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto__;
var b__10183__auto__ = actual__10255__auto__;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__15983_16115,_STAR_parent_description_STAR__temp_val__15984_16116,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995))
,false),speclj.components.new_characteristic.call(null,"clicking 4x4 button changes board size",((function (_STAR_parent_description_STAR__orig_val__15983_16115,_STAR_parent_description_STAR__temp_val__15984_16116,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"button:nth-of-type(2)");

var buttons = c3kit.wire.spec_helper.select_all.call(null,".square");
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___16127 = (16);
var actual__10204__auto___16128 = cljs.core.count.call(null,buttons);
if(cljs.core._EQ_.call(null,expected__10203__auto___16127,actual__10204__auto___16128)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___16127;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___16128;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___16129 = new cljs.core.Keyword(null,"4x4","4x4",121507723);
var actual__10204__auto___16130 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___16129,actual__10204__auto___16130)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___16129;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___16130;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___16131 = tic_tac_toe.boardc.starting_nil_board.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723));
var actual__10204__auto___16132 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___16131,actual__10204__auto___16132)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___16131;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___16132;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = (0);
var actual__10204__auto__ = new cljs.core.Keyword(null,"turn-count","turn-count",1105131756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__15983_16115,_STAR_parent_description_STAR__temp_val__15984_16116,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995))
,false),speclj.components.new_characteristic.call(null,"clicking 3x3 button changes board size",((function (_STAR_parent_description_STAR__orig_val__15983_16115,_STAR_parent_description_STAR__temp_val__15984_16116,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"board-size","board-size",140730505),new cljs.core.Keyword(null,"4x4","4x4",121507723),new cljs.core.Keyword(null,"board","board",-1907017633),tic_tac_toe.boardc.starting_nil_board.call(null,new cljs.core.Keyword(null,"4x4","4x4",121507723)));

c3kit.wire.spec_helper.click_BANG_.call(null,"button:nth-of-type(1)");

var buttons = c3kit.wire.spec_helper.select_all.call(null,".square");
speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___16133 = (9);
var actual__10204__auto___16134 = cljs.core.count.call(null,buttons);
if(cljs.core._EQ_.call(null,expected__10203__auto___16133,actual__10204__auto___16134)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___16133;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___16134;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___16135 = new cljs.core.Keyword(null,"3x3","3x3",570362544);
var actual__10204__auto___16136 = new cljs.core.Keyword(null,"board-size","board-size",140730505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___16135,actual__10204__auto___16136)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___16135;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___16136;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___16137 = tic_tac_toe.boardc.starting_nil_board.call(null,new cljs.core.Keyword(null,"3x3","3x3",570362544));
var actual__10204__auto___16138 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___16137,actual__10204__auto___16138)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___16137;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___16138;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = (0);
var actual__10204__auto__ = new cljs.core.Keyword(null,"turn-count","turn-count",1105131756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__15983_16115,_STAR_parent_description_STAR__temp_val__15984_16116,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995))
,false)],null)));
var chunk__15986_16118 = null;
var count__15987_16119 = (0);
var i__15988_16120 = (0);
while(true){
if((i__15988_16120 < count__15987_16119)){
var component__10062__auto___16139 = cljs.core._nth.call(null,chunk__15986_16118,i__15988_16120);
speclj.components.install.call(null,component__10062__auto___16139,description__10061__auto____$1);


var G__16140 = seq__15985_16117;
var G__16141 = chunk__15986_16118;
var G__16142 = count__15987_16119;
var G__16143 = (i__15988_16120 + (1));
seq__15985_16117 = G__16140;
chunk__15986_16118 = G__16141;
count__15987_16119 = G__16142;
i__15988_16120 = G__16143;
continue;
} else {
var temp__5825__auto___16144 = cljs.core.seq.call(null,seq__15985_16117);
if(temp__5825__auto___16144){
var seq__15985_16145__$1 = temp__5825__auto___16144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15985_16145__$1)){
var c__5548__auto___16146 = cljs.core.chunk_first.call(null,seq__15985_16145__$1);
var G__16147 = cljs.core.chunk_rest.call(null,seq__15985_16145__$1);
var G__16148 = c__5548__auto___16146;
var G__16149 = cljs.core.count.call(null,c__5548__auto___16146);
var G__16150 = (0);
seq__15985_16117 = G__16147;
chunk__15986_16118 = G__16148;
count__15987_16119 = G__16149;
i__15988_16120 = G__16150;
continue;
} else {
var component__10062__auto___16151 = cljs.core.first.call(null,seq__15985_16145__$1);
speclj.components.install.call(null,component__10062__auto___16151,description__10061__auto____$1);


var G__16152 = cljs.core.next.call(null,seq__15985_16145__$1);
var G__16153 = null;
var G__16154 = (0);
var G__16155 = (0);
seq__15985_16117 = G__16152;
chunk__15986_16118 = G__16153;
count__15987_16119 = G__16154;
i__15988_16120 = G__16155;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__15983_16115);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto____$1);
}

return description__10061__auto____$1;
})(),(function (){var description__10061__auto____$1 = speclj.components.new_description.call(null,"Player selector",false,"tic-tac-toe.main-spec");
var _STAR_parent_description_STAR__orig_val__15989_16156 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__15990_16157 = description__10061__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__15990_16157);

try{var seq__15991_16158 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__15989_16156,_STAR_parent_description_STAR__temp_val__15990_16157,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995){
return (function (){
return c3kit.wire.spec_helper.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.main.app], null));
});})(_STAR_parent_description_STAR__orig_val__15989_16156,_STAR_parent_description_STAR__temp_val__15990_16157,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995))
),speclj.components.new_characteristic.call(null,"renders human and Expert AI buttons",((function (_STAR_parent_description_STAR__orig_val__15989_16156,_STAR_parent_description_STAR__temp_val__15990_16157,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995){
return (function (){
var value__10565__auto___16162 = ".container";
var node__10566__auto___16163 = c3kit.wire.spec_helper.select.call(null,value__10565__auto___16162);
if(cljs.core.truth_(node__10566__auto___16163)){
} else {
throw cljs.core.ex_info.call(null,["Expected selector to find node: ",(function (){var temp__5827__auto__ = value__10565__auto___16162;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto___16164 = "Player O: ";
var actual__10255__auto___16165 = c3kit.wire.spec_helper.text_BANG_.call(null,".container");
if((actual__10255__auto___16165 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16164;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto___16164 === 'string') && (typeof actual__10255__auto___16165 === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto___16165,expected__10254__auto___16164) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16164;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16165;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto___16164)) && (typeof actual__10255__auto___16165 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto___16164,actual__10255__auto___16165))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto___16165;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto___16164;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto___16165)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto___16165,expected__10254__auto___16164)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16164;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16165;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto___16165)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto___16164,p1__10253__10256__auto__);
}),actual__10255__auto___16165))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16164;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16165;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto___16164;
var b__10183__auto__ = actual__10255__auto___16165;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto___16166 = "Human";
var actual__10255__auto___16167 = c3kit.wire.spec_helper.text_BANG_.call(null,"button.human");
if((actual__10255__auto___16167 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16166;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto___16166 === 'string') && (typeof actual__10255__auto___16167 === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto___16167,expected__10254__auto___16166) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16166;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16167;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto___16166)) && (typeof actual__10255__auto___16167 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto___16166,actual__10255__auto___16167))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto___16167;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto___16166;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto___16167)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto___16167,expected__10254__auto___16166)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16166;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16167;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto___16167)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto___16166,p1__10253__10256__auto__);
}),actual__10255__auto___16167))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16166;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16167;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto___16166;
var b__10183__auto__ = actual__10255__auto___16167;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto__ = "Expert AI";
var actual__10255__auto__ = c3kit.wire.spec_helper.text_BANG_.call(null,"button.ai");
if((actual__10255__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto__ === 'string') && (typeof actual__10255__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto__,expected__10254__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto__)) && (typeof actual__10255__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto__,actual__10255__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto__,expected__10254__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto__,p1__10253__10256__auto__);
}),actual__10255__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto__;
var b__10183__auto__ = actual__10255__auto__;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__15989_16156,_STAR_parent_description_STAR__temp_val__15990_16157,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995))
,false),speclj.components.new_characteristic.call(null,"clicking expert AI button changes player O",((function (_STAR_parent_description_STAR__orig_val__15989_16156,_STAR_parent_description_STAR__temp_val__15990_16157,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995){
return (function (){
c3kit.wire.spec_helper.click_BANG_.call(null,"button.ai");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___16168 = new cljs.core.Keyword(null,"expert-ai","expert-ai",218432886);
var actual__10204__auto___16169 = new cljs.core.Keyword(null,"O","O",795252742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___16168,actual__10204__auto___16169)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___16168;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___16169;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = (0);
var actual__10204__auto__ = new cljs.core.Keyword(null,"turn-count","turn-count",1105131756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__15989_16156,_STAR_parent_description_STAR__temp_val__15990_16157,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995))
,false),speclj.components.new_characteristic.call(null,"clicking 3x3 button changes board size",((function (_STAR_parent_description_STAR__orig_val__15989_16156,_STAR_parent_description_STAR__temp_val__15990_16157,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"expert-ai","expert-ai",218432886));

c3kit.wire.spec_helper.click_BANG_.call(null,"button.human");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto___16170 = new cljs.core.Keyword(null,"human","human",-772334390);
var actual__10204__auto___16171 = new cljs.core.Keyword(null,"O","O",795252742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10203__auto___16170,actual__10204__auto___16171)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto___16170;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto___16171;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10203__auto__ = (0);
var actual__10204__auto__ = new cljs.core.Keyword(null,"turn-count","turn-count",1105131756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tic_tac_toe.main.game_state));
if(cljs.core._EQ_.call(null,expected__10203__auto__,actual__10204__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10203__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"     got: ",(function (){var temp__5827__auto__ = actual__10204__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
});})(_STAR_parent_description_STAR__orig_val__15989_16156,_STAR_parent_description_STAR__temp_val__15990_16157,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995))
,false),speclj.components.new_characteristic.call(null,"Expert AI move after human move",((function (_STAR_parent_description_STAR__orig_val__15989_16156,_STAR_parent_description_STAR__temp_val__15990_16157,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995){
return (function (){
cljs.core.swap_BANG_.call(null,tic_tac_toe.main.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"O","O",795252742),new cljs.core.Keyword(null,"expert-ai","expert-ai",218432886));

c3kit.wire.spec_helper.click_BANG_.call(null,"button.square:nth-of-type(1)");

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto___16172 = "X";
var actual__10255__auto___16173 = c3kit.wire.spec_helper.text_BANG_.call(null,"button.square:nth-of-type(1)");
if((actual__10255__auto___16173 == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16172;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto___16172 === 'string') && (typeof actual__10255__auto___16173 === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto___16173,expected__10254__auto___16172) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16172;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16173;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto___16172)) && (typeof actual__10255__auto___16173 === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto___16172,actual__10255__auto___16173))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto___16173;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto___16172;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto___16173)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto___16173,expected__10254__auto___16172)){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16172;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16173;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto___16173)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto___16172,p1__10253__10256__auto__);
}),actual__10255__auto___16173))){
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto___16172;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto___16173;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto___16172;
var b__10183__auto__ = actual__10255__auto___16173;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}

speclj.components.inc_assertions_BANG_.call(null);

var expected__10254__auto__ = "O";
var actual__10255__auto__ = c3kit.wire.spec_helper.text_BANG_.call(null,"button.square:nth-of-type(5)");
if((actual__10255__auto__ == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: nil"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
if(((typeof expected__10254__auto__ === 'string') && (typeof actual__10255__auto__ === 'string'))){
if((clojure.string.index_of.call(null,actual__10255__auto__,expected__10254__auto__) == null)){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using .contains)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(((speclj.platform.re_QMARK_.call(null,expected__10254__auto__)) && (typeof actual__10255__auto__ === 'string'))){
if(cljs.core.empty_QMARK_.call(null,cljs.core.re_seq.call(null,expected__10254__auto__,actual__10255__auto__))){
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to match: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using re-seq)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
} else {
return null;
}
} else {
if(cljs.core.map_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.contains_QMARK_.call(null,actual__10255__auto__,expected__10254__auto__)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be a key in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using contains?)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
if(cljs.core.coll_QMARK_.call(null,actual__10255__auto__)){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10253__10256__auto__){
return cljs.core._EQ_.call(null,expected__10254__auto__,p1__10253__10256__auto__);
}),actual__10255__auto__))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Expected: ",(function (){var temp__5827__auto__ = expected__10254__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})(),speclj.platform.endl,"to be in: ",(function (){var temp__5827__auto__ = actual__10255__auto__;
if((temp__5827__auto__ == null)){
return "nil";
} else {
var thing__10171__auto__ = temp__5827__auto__;
return cljs.core.pr_str.call(null,thing__10171__auto__);
}
})()," (using =)"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),speclj.error.failure], null));
}
} else {
throw (new Error((function (){var a__10182__auto__ = expected__10254__auto__;
var b__10183__auto__ = actual__10255__auto__;
var type_a__10184__auto__ = (((a__10182__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,a__10182__auto__)));
var type_b__10185__auto__ = (((b__10183__auto__ == null))?"nil":speclj.platform.type_name.call(null,cljs.core.type.call(null,b__10183__auto__)));
return ["should-contain"," doesn't know how to handle these types: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_a__10184__auto__)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_b__10185__auto__),"]"].join('');
})()));

}
}
}
}
}
});})(_STAR_parent_description_STAR__orig_val__15989_16156,_STAR_parent_description_STAR__temp_val__15990_16157,description__10061__auto____$1,_STAR_parent_description_STAR__orig_val__15929_15996,_STAR_parent_description_STAR__temp_val__15930_15997,description__10061__auto___15995))
,false)],null)));
var chunk__15992_16159 = null;
var count__15993_16160 = (0);
var i__15994_16161 = (0);
while(true){
if((i__15994_16161 < count__15993_16160)){
var component__10062__auto___16174 = cljs.core._nth.call(null,chunk__15992_16159,i__15994_16161);
speclj.components.install.call(null,component__10062__auto___16174,description__10061__auto____$1);


var G__16175 = seq__15991_16158;
var G__16176 = chunk__15992_16159;
var G__16177 = count__15993_16160;
var G__16178 = (i__15994_16161 + (1));
seq__15991_16158 = G__16175;
chunk__15992_16159 = G__16176;
count__15993_16160 = G__16177;
i__15994_16161 = G__16178;
continue;
} else {
var temp__5825__auto___16179 = cljs.core.seq.call(null,seq__15991_16158);
if(temp__5825__auto___16179){
var seq__15991_16180__$1 = temp__5825__auto___16179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15991_16180__$1)){
var c__5548__auto___16181 = cljs.core.chunk_first.call(null,seq__15991_16180__$1);
var G__16182 = cljs.core.chunk_rest.call(null,seq__15991_16180__$1);
var G__16183 = c__5548__auto___16181;
var G__16184 = cljs.core.count.call(null,c__5548__auto___16181);
var G__16185 = (0);
seq__15991_16158 = G__16182;
chunk__15992_16159 = G__16183;
count__15993_16160 = G__16184;
i__15994_16161 = G__16185;
continue;
} else {
var component__10062__auto___16186 = cljs.core.first.call(null,seq__15991_16180__$1);
speclj.components.install.call(null,component__10062__auto___16186,description__10061__auto____$1);


var G__16187 = cljs.core.next.call(null,seq__15991_16180__$1);
var G__16188 = null;
var G__16189 = (0);
var G__16190 = (0);
seq__15991_16158 = G__16187;
chunk__15992_16159 = G__16188;
count__15993_16160 = G__16189;
i__15994_16161 = G__16190;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__15989_16156);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto____$1);
}

return description__10061__auto____$1;
})()],null)));
var chunk__15932_15999 = null;
var count__15933_16000 = (0);
var i__15934_16001 = (0);
while(true){
if((i__15934_16001 < count__15933_16000)){
var component__10062__auto___16191 = cljs.core._nth.call(null,chunk__15932_15999,i__15934_16001);
speclj.components.install.call(null,component__10062__auto___16191,description__10061__auto___15995);


var G__16192 = seq__15931_15998;
var G__16193 = chunk__15932_15999;
var G__16194 = count__15933_16000;
var G__16195 = (i__15934_16001 + (1));
seq__15931_15998 = G__16192;
chunk__15932_15999 = G__16193;
count__15933_16000 = G__16194;
i__15934_16001 = G__16195;
continue;
} else {
var temp__5825__auto___16196 = cljs.core.seq.call(null,seq__15931_15998);
if(temp__5825__auto___16196){
var seq__15931_16197__$1 = temp__5825__auto___16196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15931_16197__$1)){
var c__5548__auto___16198 = cljs.core.chunk_first.call(null,seq__15931_16197__$1);
var G__16199 = cljs.core.chunk_rest.call(null,seq__15931_16197__$1);
var G__16200 = c__5548__auto___16198;
var G__16201 = cljs.core.count.call(null,c__5548__auto___16198);
var G__16202 = (0);
seq__15931_15998 = G__16199;
chunk__15932_15999 = G__16200;
count__15933_16000 = G__16201;
i__15934_16001 = G__16202;
continue;
} else {
var component__10062__auto___16203 = cljs.core.first.call(null,seq__15931_16197__$1);
speclj.components.install.call(null,component__10062__auto___16203,description__10061__auto___15995);


var G__16204 = cljs.core.next.call(null,seq__15931_16197__$1);
var G__16205 = null;
var G__16206 = (0);
var G__16207 = (0);
seq__15931_15998 = G__16204;
chunk__15932_15999 = G__16205;
count__15933_16000 = G__16206;
i__15934_16001 = G__16207;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__15929_15996);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__10061__auto___15995);
}


//# sourceMappingURL=main_spec.js.map
