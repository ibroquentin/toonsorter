// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'https://github.com/ibroquentin/toonsorter/tree/9732dfd4476130d4a33c930f089cb365cb737215/Touhou%20Character%20Sorting_files/waa/';
// 0:順番に　1:昔の
var bln_ResultMode = 1;
// 0:テキスト　1:イラスト　2:テキスト＋イラスト
var int_ResultImg = 2;
// イラスト表示時、何位までをイラスト表示にするか。
var int_ResultRank = 3;

// ソート用のテーブルを
// 0:残す　1:消す
var bln_ResultStyle = 0;

// ソート進捗バーの表示
// 0:表示　1:消す
var bln_ProgessBar = 1;

// Maximum number of result rows before being broken off into another table.
var maxRows = 35;

// * タイトル情報（編集可能。最後の行に”,”を付けないようにしてください）
var int_Colspan = 3;
var ary_TitleData = [
"Main Toons",
"Regular Toons",
"Event Toons",
"Main Twisteds",
"Regular Twisteds",
"Event Twisteds",
"Toon Handlers",
"Others"
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）,
// "タイトルID"（先頭から0, 1, 2...）,
// {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
// "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
// [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
[1, "Astro", [1,0,0,0,0,0,0,0], "m5.png"],
[1, "Bobette", [1,0,1,0,0,0,0,0], "Bobette.png"],
[1, "Boxten", [0,1,0,0,0,0,0,0], "Boxten.png"],
[1, "Bassie", [1,0,1,0,0,0,0,0], "Bassie.png"],
[1, "Brightney", [0,1,0,0,0,0,0,0], "Brightney.png"],
[1, "Blot", [0,1,0,0,0,0,0,0,], "Blot.png"],
[1, "Coal", [0,1,0,0,0,0,0,0], "Coal.png"],
[1, "Connie", [0,1,0,0,0,0,0,0], "Connie.png"],
[1, "Cocoa", [0,0,1,0,0,0,0,0], "Cocoa.png"],
[1, "Cosmo", [0,1,0,0,0,0,0,0], "Cosmo.png"],
[1, "Dandy", [1,0,0,0,0,0,0,0], "m2.png"],
[1, "Eggson", [0,0,1,0,0,0,0,0], "Eggson.png"],
[1, "Finn", [0,1,0,0,0,0,0,0], "Finn.png"],
[1, "Flutter", [0,1,0,0,0,0,0,0], "Flutter.png"],
[1, "Flyte", [0,0,1,0,0,0,0,0], "Flyte.png"],
[1, "Gigi", [0,1,0,0,0,0,0,0], "Gigi.png"],
[1, "Ginger", [0,1,0,0,0,0,0,0], "Ginger.png"],
[1, "Glisten", [0,1,0,0,0,0,0,0], "Glisten.png"],
[1, "Goob", [0,1,0,0,0,0,0,0], "Goob.png"],
[1, "Looey", [0,1,0,0,0,0,0,0], "Looey.png"],
[1, "Pebble", [1,0,0,0,0,0,0,0], "m6.png"],
[1, "Poppy", [0,1,0,0,0,0,0,0], "Poppy.png"],
[1, "Razzle & Dazzle", [0,1,0,0,0,0,0,0], "Razzle & Dazzle.png"],
[1, "Rodger", [0,1,0,0,0,0,0,0], "Rodger.png"],
[1, "Rudie", [0,1,0,0,0,0,0,0], "Rudie.png"],
[1, "Scraps", [0,1,0,0,0,0,0,0], "Scraps.png"],
[1, "Shelly", [1,0,0,0,0,0,0,0], "m3.png"],
[1, "Shrimpo", [0,1,0,0,0,0,0,0], "Shrimpo.png"],
[1, "Sprout", [1,0,0,0,0,0,0,0], "m4.png"],
[1, "Teagan", [0,1,0,0,0,0,0,0], "Teagan.png"],
[1, "Tisha", [0,1,0,0,0,0,0,0], "Tisha.png"],
[1, "Toodles", [0,1,0,0,0,0,0,0], "Toodles.png"],
[1, "Vee", [1,0,0,0,0,0,0,0], "m1.png"],
[1, "Yatta", [0,1,0,0,0,0,0,0], "Yatta.png"],

  <!-- twisteds -->

[1, "Twisted Astro", [0,0,0,1,0,0,0,0], "Twisted_Astro_Render.png"],
[1, "Twisted Bobette", [0,0,0,1,0,1,0,0], "Twisted_Bobette_Render.png"],
[1, "Twisted Boxten", [0,0,0,0,1,0,0,0], "TwistedBoxtenRender.png"],
[1, "Twisted Bassie", [0,0,0,1,0,1,0,0], "Twisted_Bassie_Render.png"],
[1, "Twisted Brightney", [0,0,0,0,1,0,0,0], "TwistedBrightneyRender.png"],
[1, "Twisted Blot", [0,0,0,0,1,0,0,0], "TwistedBlotRender.png"],
[1, "Twisted Coal", [0,0,0,0,0,1,0,0], "TwistedCoalRender.png"],
[1, "Twisted Connie", [0,0,0,0,1,0,0,0], "TwistedConnieRender.png"],
[1, "Twisted Cocoa", [0,0,0,0,0,1,0,0], "TwistedCocoaRender.png"],
[1, "Twisted Cosmo", [0,0,0,0,1,0,0,0], "TwistedCosmoRender.png"],
[1, "Twisted Dandy", [0,0,0,1,0,0,0,0], "Twisted_Dandy_Render.png"],
[1, "Twisted Eggson", [0,0,0,0,0,1,0,0], "TwistedEggsonRender.png"],
[1, "Twisted Finn", [0,0,0,0,1,0,0,0], "TwistedFinnRender.png"],
[1, "Twisted Flutter", [0,0,0,0,1,0,0,0], "TwistedFlutterRender.png"],
[1, "Twisted Flyte", [0,0,0,0,0,1,0,0], "TwistedFlyteRender.png"],
[1, "Twisted Gigi", [0,0,0,0,1,0,0,0], "TwistedGigiRender.png"],
[1, "Twisted Ginger", [0,0,0,0,0,1,0,0], "TwistedGingerRender.png"],
[1, "Twisted Glisten", [0,0,0,0,1,0,0,0], "TwistedGlistenRender.png"],
[1, "Twisted Goob", [0,0,0,0,1,0,0,0], "TwistedGoobRender.png"],
[1, "Twisted Looey", [0,0,0,0,1,0,0,0], "TwistedLooeyRender.png"],
[1, "Twisted Pebble", [0,0,0,1,0,0,0,0], "Twisted_Pebble_Render.png"],
[1, "Twisted Poppy", [0,0,0,0,1,0,0,0], "TwistedPoppyRender.png"],
[1, "Twisted Razzle & Dazzle", [0,0,0,0,1,0,0,0], "TwistedRazzleDazzleRender.png"],
[1, "Twisted Rodger", [0,0,0,0,1,0,0,0], "TwistedRodgerRender.png"],
[1, "Twisted Rudie", [0,0,0,0,0,1,0,0], "TwistedRudieRender.png"],
[1, "Twisted Scraps", [0,0,0,0,1,0,0,0], "TwistedScrapsRender.png"],
[1, "Twisted Shelly", [0,0,0,1,0,0,0,0], "Twisted_Shelly_Render.png"],
[1, "Twisted Shrimpo", [0,0,0,0,1,0,0,0], "TwistedShrimpoRender.png"],
[1, "Twisted Sprout", [0,0,0,1,0,0,0,0], "Twisted_Sprout_Render.png"],
[1, "Twisted Teagan", [0,0,0,0,1,0,0,0], "TwistedTeaganRender.png"],
[1, "Twisted Tisha", [0,0,0,0,1,0,0,0], "TwistedTishaRender.png"],
[1, "Twisted Toodles", [0,0,0,0,1,0,0,0], "TwistedToodlesRender.png"],
[1, "Twisted Vee", [0,0,0,1,0,0,0,0], "Twisted_Vee_Render.png"],
[1, "Twisted Yatta", [0,0,0,0,1,0,0,0], "TwistedYattaRender.png"]

  
];
