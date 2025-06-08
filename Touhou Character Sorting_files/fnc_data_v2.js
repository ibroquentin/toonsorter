// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'https://iili.io/FFBgwo7.png';
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
[1, "Astro", [1,0,0,0,0,0,0,0], "https://i.imgur.com/phkCl2V.png"],
[1, "Bobette", [1,0,0,0,0,0,0,0], "https://iili.io/FFB4c2s.png"],
[1, "Boxten", [0,1,0,0,0,0,0,0], "https://iili.io/FFqDMba.png"],
[1, "Bassie", [1,0,1,0,0,0,0,0], "https://iili.io/FFB4AQI.png"],
[1, "Brightney", [0,1,0,0,0,0,0,0], "https://iili.io/FFCsddX.png"],
[1, "Blot", [0,1,0,0,0,0,0,0,], "https://iili.io/FFCso1S.png"],
[1, "Coal", [0,1,0,0,0,0,0,0], "https://iili.io/FFB4uhN.png"],
[1, "Connie", [0,1,0,0,0,0,0,0], "https://iili.io/FFCsFmG.png"],
[1, "Cocoa", [0,0,1,0,0,0,0,0], "https://iili.io/FFB4TIp.png"],
[1, "Cosmo", [0,1,0,0,0,0,0,0], "https://iili.io/FFCsBLl.png"],
[1, "Dandy", [1,0,0,0,0,0,0,0], "https://i.imgur.com/5wHMQWD.png"],
[1, "Eggson", [0,0,1,0,0,0,0,0], "https://iili.io/FFB4zpR.png"],
[1, "Finn", [0,1,0,0,0,0,0,0], "https://iili.io/FFCsHgt.png"],
[1, "Flutter", [0,1,0,0,0,0,0,0], "https://iili.io/FFCs27n.png"],
[1, "Flyte", [0,0,1,0,0,0,0,0], "https://iili.io/FFB47EX.png"],
[1, "Gigi", [0,1,0,0,0,0,0,0], "https://iili.io/FFCimsp.png"],
[1, "Ginger", [0,1,0,0,0,0,0,0], "https://i.imgur.com/I6zgpjL.png"],
[1, "Glisten", [0,1,0,0,0,0,0,0], "https://i.imgur.com/9OjAkCk.png"],
[1, "Goob", [0,1,0,0,0,0,0,0], "https://i.imgur.com/X0dA5qW.png"],
[1, "Looey", [0,1,0,0,0,0,0,0], "https://i.imgur.com/0YqFkGw.png"],
[1, "Pebble", [1,0,0,0,0,0,0,0], "https://i.imgur.com/CkbEDdB.png"],
[1, "Poppy", [0,1,0,0,0,0,0,0], "https://i.imgur.com/C4JmnBG.png"],
[1, "Razzle & Dazzle", [0,1,0,0,0,0,0,0], "https://i.imgur.com/zw29gHs.png"],
[1, "Rodger", [0,1,0,0,0,0,0,0], "https://i.imgur.com/FNflQDT.png"],
[1, "Rudie", [0,1,0,0,0,0,0,0], "https://freeimage.host/i/e8.FFB4Y4n"],
[1, "Scraps", [0,1,0,0,0,0,0,0], "https://i.imgur.com/wAsGmHd.png"],
[1, "Shelly", [1,0,0,0,0,0,0,0], "https://i.imgur.com/D1UdHPG.png"],
[1, "Shrimpo", [0,1,0,0,0,0,0,0], "https://i.imgur.com/LQABxLk.png"],
[1, "Sprout", [1,0,0,0,0,0,0,0], "https://i.imgur.com/tEwHjkh.png"],
[1, "Teagan", [0,1,0,0,0,0,0,0], "https://i.imgur.com/V26dDFP.png"],
[1, "Tisha", [0,1,0,0,0,0,0,0], "https://i.imgur.com/nsRbpVS.png"],
[1, "Toodles", [0,1,0,0,0,0,0,0], "https://i.imgur.com/0YqFkGw.png"],
[1, "Vee", [1,0,0,0,0,0,0,0], "https://i.imgur.com/09LwHrf.png"],
[1, "Yatta", [0,1,0,0,0,0,0,0], "https://i.imgur.com/0YqFkGw.png"]
];
