// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'http://i.imgur.com/';
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
//   "タイトルID"（先頭から0, 1, 2...）, 
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
var ary_CharacterData = [
   [1, "Reimu Hakurei",			[1,1,1,1,1,1], "mR5KmTo.png"], 
   [1, "Marisa Kirisame",		[1,1,1,1,1,1], "ALB7C8l.png"], 
   [1, "Rumia",					[1,0,0,0,1,1], "aC3hzWg.png"], 
   [1, "Daiyousei",				[1,0,0,0,0,0], "MvOgtEk.png"], 
   [1, "Cirno",					[1,1,0,1,1,1], "EiCW2ZF.png"],
   [1, "Hong Meiling",			[1,0,1,0,0,1], "0OycqGh.png"], 
   [1, "Koakuma",				[1,0,0,0,0,1], "ZMgDpcl.png"],
   [1, "Patchouli Knowledge",	[1,0,1,0,1,1], "kIUEPXS.png"], 
   [1, "Sakuya Izayoi",			[1,1,1,1,1,1], "skUkr0U.png"], 
   [1, "Remilia Scarlet",		[1,0,1,1,0,1], "ms8r6Pv.png"], 
   [1, "Flandre Scarlet",		[1,0,0,0,0,1], "5Sf2NxU.png"], 
   [1, "Letty Whiterock",		[0,1,0,0,1,1], "6gSWmlc.png"], 
   [1, "Chen",					[0,1,1,0,1,1], "2ic3pde.png"], 
   [1, "Alice Margatroid",		[0,1,1,1,1,1], "8upqne9.png"],
   [1, "Lily White",			[0,1,0,1,1,0], "n0BQ7cR.png"], 
   [1, "Lunasa Prismriver",		[0,1,0,1,1,0], "69RY6Ax.png"], 
   [1, "Merlin Prismriver",		[0,1,0,1,1,0], "erhdtwj.png"],
   [1, "Lyrica Prismriver",		[0,1,0,1,1,0], "ILgZQCN.png"], 
   [1, "Youmu Konpaku",			[0,1,1,1,1,1], "VNyLSuE.png"], 
   [1, "Yuyuko Saigyouji",		[0,1,1,1,1,1], "AdwciSB.png"], 
   [1, "Ran Yakumo",			[0,1,1,0,1,1], "p2QY4EV.png"], 
   [1, "Yukari Yakumo",			[0,1,1,0,1,1], "UdeK1QS.png"],
   [1, "Suika Ibuki",			[0,0,1,1,1,1], "4Su4QN8.png"],
   [1, "Wriggle Nightbug",		[0,0,0,1,1,1], "mlbgoDm.png"], 
   [1, "Mystia Lorelei",		[0,0,0,1,1,1], "yiM9s6u.png"], 
   [1, "Keine Kamishirasawa",	[0,0,0,1,1,1], "UqnLnZ3.png"], 
   [1, "Tewi Inaba",			[0,0,0,1,1,1], "83MENQh.png"],
   [1, "Reisen Udongein Inaba",	[0,0,0,1,1,1], "gUpPwiV.png"], 
   [1, "Eirin Yagokoro",		[0,0,0,1,1,1], "t1ZKLZo.png"], 
];
