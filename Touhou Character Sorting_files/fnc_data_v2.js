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
[1, "Reimu Hakurei", [1,1,1,1,1,1], "mR5KmTo.png"],
[1, "Marisa Kirisame", [1,1,1,1,1,1], "ALB7C8l.png"],
[1, "Rumia", [1,0,0,0,0,1], "aC3hzWg.png"],
[1, "Daiyousei", [1,0,0,0,0,0], "MvOgtEk.png"],
[1, "Cirno", [1,1,0,0,1,1], "EiCW2ZF.png"],
[1, "Hong Meiling", [1,0,1,0,0,1], "0OycqGh.png"],
[1, "Koakuma", [1,0,0,0,0,0], "ZMgDpcl.png"],
[1, "Patchouli Knowledge", [1,0,1,0,0,1], "kIUEPXS.png"],
[1, "Sakuya Izayoi", [1,1,1,1,1,1], "skUkr0U.png"],
[1, "Remilia Scarlet", [1,0,1,1,0,1], "ms8r6Pv.png"],
[1, "Flandre Scarlet", [1,0,0,0,0,1], "5Sf2NxU.png"],
[1, "Letty Whiterock", [0,1,0,0,0,1], "6gSWmlc.png"],
[1, "Chen", [0,1,1,0,0,1], "2ic3pde.png"],
[1, "Alice Margatroid", [0,1,1,1,0,1], "8upqne9.png"],
[1, "Lily White", [0,1,0,0,1,0], "n0BQ7cR.png"],
[1, "Lunasa Prismriver", [0,1,0,0,1,0], "69RY6Ax.png"],
[1, "Merlin Prismriver", [0,1,0,0,1,0], "erhdtwj.png"],
[1, "Lyrica Prismriver", [0,1,0,0,1,0], "ILgZQCN.png"],
[1, "Youmu Konpaku", [0,1,1,1,1,1], "VNyLSuE.png"],
[1, "Yuyuko Saigyouji", [0,1,1,1,0,1], "AdwciSB.png"],
[1, "Ran Yakumo", [0,1,1,1,0,1], "p2QY4EV.png"],
[1, "Yukari Yakumo", [0,1,1,1,0,1], "UdeK1QS.png"],
[1, "Suika Ibuki", [0,0,1,0,0,1], "4Su4QN8.png"],
[1, "Wriggle Nightbug", [0,0,0,1,0,1], "mlbgoDm.png"],
[1, "Mystia Lorelei", [0,0,0,1,1,1], "yiM9s6u.png"],
[1, "Keine Kamishirasawa", [0,0,0,1,0,1], "UqnLnZ3.png"],
[1, "Tewi Inaba", [0,0,0,1,1,1], "83MENQh.png"],
[1, "Reisen Udongein Inaba", [0 ,0,0,1,1,1], "gUpPwiV.png"],
[1, "Eirin Yagokoro", [0,0,0,1,0,1], "t1ZKLZo.png"],
[1, "Kaguya Houraisan", [0,0,0,1,0,1], "worRgVI.png"],
[1, "Fujiwara no Mokou", [0,0,0,1,0,1], "5GOFhlf.png"],
[1, "Aya Shameimaru", [0,0,0,0,1,1], "FYsu7oL.png"],
[1, "Medicine Melancholy", [0,0,0,0,1,1], "cVuiJGf.png"],
[1, "Yuuka Kazami", [0,0,0,0,1,1], "kVY1gxj.png"],
[1, "Komachi Onozuka", [0,0,0,0,1,1], "504b74s.png"],
[1, "Shikieiki Yamaxanadu", [0,0,0,0,1,1], "pVBMphG.png"],
[1, "Shizuha Aki", [0,0,0,0,0,1], "Yv2Xqzg.png"],
[1, "Minoriko Aki", [0,0,0,0,0,1], "bRwQss8.png"],
[1, "Hina Kagiyama", [0,0,0,0,0,1], "HqZivEs.png"],
[1, "Nitori Kawashiro", [0,0,0,0,0,1], "6poCa43.png"],
[1, "Momiji Inubashiri", [0,0,0,0,0,0], "6D4G8oz.png"],
[1, "Sanae Kochiya", [0,0,0,0,1,1], "l1nxrwH.png"],
[1, "Kanako Yasaka", [0,0,0,0,0,1], "njx8Qqs.png"],
[1, "Suwako Moriya", [0,0,0,0,1,1], "eWzlR6H.png"],
[1, "Iku Nagae", [0,0,0,0,0,1], "pJwYjyI.png"],
[1, "Tenshi Hinanawi", [0,0,0,0,0,1], "8nbPnZp.png"],
[1, "Kisume", [0,0,0,0,1,0], "a1vWaDL.png"],
[1, "Yamame Kurodani", [0,0,0,0,0,1], "MNoWTn8.png"],
[1, "Parsee Mizuhashi", [0,0,0,0,0,1], "QUeorp7.png"],
[1, "Yuugi Hoshiguma", [0,0,0,0,0,1], "VKNukHu.png"],
[1, "Satori Komeiji", [0,0,0,0,0,1], "d5E2hq5.png"],
[1, "Rin Kaenbyou (Orin)", [0,0,0,0,0,1], "CLVPud2.png"],
[1, "Utsuho Reiuji (Okuu)", [0,0,0,0,1,1], "T1l2pch.png"],
[1, "Koishi Komeiji", [0,0,0,0,0,1], "qa21t1u.png"],
[1, "Great Catfish", [0,0,0,0,1,0], "BgRi9Oh.png"],
[1, "Nazrin", [0,0,0,0,0,1], "b3L1hKO.png"],
];
