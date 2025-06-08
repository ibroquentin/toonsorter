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
// "タイトルID"（先頭から0, 1, 2...）,
// {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
// "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
// [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
  [1, "Astro", [1,1,1,1,1,1,0,0], "mR5KmTo.png"],
  [1, "Bobette", [1,1,1,1,1,1,0,0], "ALB7C8l.png"],
  [1, "Boxten", [1,0,0,0,0,1,0,0], "aC3hzWg.png"],
  [1, "Brightney", [1,0,0,0,0,0,0,0], "MvOgtEk.png"],
  [1, "Coal", [1,1,0,0,1,1,0,0], "EiCW2ZF.png"],
  [1, "Connie", [1,0,1,0,0,1,0,0], "0OycqGh.png"],
  [1, "Cosmo", [1,0,0,0,0,0,0,0], "ZMgDpcl.png"],
  [1, "Dandy", [1,0,1,0,0,1,0,0], "kIUEPXS.png"],
  [1, "Finn", [1,1,1,1,1,1,0,0], "skUkr0U.png"],
  [1, "Flutter", [1,0,1,1,0,1,0,0], "ms8r6Pv.png"],
  [1, "Gigi", [1,0,0,0,0,1,0,0], "5Sf2NxU.png"],
  [1, "Ginger", [0,1,0,0,0,1,0,0], "6gSWmlc.png"],
  [1, "Glisten", [0,1,1,0,0,1,0,0], "2ic3pde.png"],
  [1, "Goob", [0,1,1,1,0,1,0,0], "8upqne9.png"],
  [1, "Looey", [0,1,0,0,1,0,0,0], "n0BQ7cR.png"],
  [1, "Pebble", [0,1,0,0,1,0,0,0], "69RY6Ax.png"],
  [1, "Poppy", [0,1,0,0,1,0,0,0], "erhdtwj.png"],
  [1, "Razzle & Dazzle", [0,1,0,0,1,0,0,0], "ILgZQCN.png"],
  [1, "Rodger", [0,1,1,1,1,1,0,0], "VNyLSuE.png"],
  [1, "Rudie", [0,1,1,1,0,1,0,0], "AdwciSB.png"],
  [1, "Scraps", [0,1,1,1,0,1,0,0], "p2QY4EV.png"],
  [1, "Shelly", [0,1,1,1,0,1,0,0], "UdeK1QS.png"],
  [1, "Shrimpo", [0,0,1,0,0,1,0,0], "4Su4QN8.png"],
  [1, "Sprout", [0,0,0,1,0,1,0,0], "mlbgoDm.png"],
  [1, "Teagan", [0,0,0,1,1,1,0,0], "yiM9s6u.png"],
  [1, "Tisha", [0,0,0,1,0,1,0,0], "UqnLnZ3.png"],
  [1, "Toodles", [0,0,0,1,1,1,0,0], "83MENQh.png"],
  [1, "Vee", [0,0,0,1,1,1,0,0], "gUpPwiV.png"],
  [1, "Yatta", [0,0,0,1,0,1,0,0], "t1ZKLZo.png"],
];
