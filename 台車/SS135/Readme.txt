SS135台車

~~~~~~~~~~~~~~~~~~~~特徴~~~~~~~~~~~~~~~~~~~~

　SS135っぽいやつです
　車輪が回ります

~~~~~~~~~~~~~~~~~~~~規約~~~~~~~~~~~~~~~~~~~~

使ったときはBuilder_256（Twitter:@Builder_256）が製作した作品を使用していることをReadmeに明記してください

改造は自由（鉄道車両用台車以外のものに改造することは禁止します）
無改造での再配布は禁止
使用した車両を配布するときは言ってくれると嬉しいな（必須ではありません）
使用したスクリーンショット、動画の投稿は自由
商用利用は一部の例外を除き原則禁止
この素材を使用した作品のアフィリエイト収入を認める
ここに「明記していない事項」については直接Builder_256にTwitterの「リプライ」で質問してください

~~~~~~~~~~~~~~~~~~~~使い方~~~~~~~~~~~~~~~~~~~~

1.ファイルの準備

SS135.mqoを
assets/minecraft/modelsに
SS135.pngを
assets/minecraft/textures/trainに
Render_SS135.jsを
assets/minecraft/scriptsに
それぞれぶち込んでください

2.jsonの編集

"bogieModel2"の項目を以下のように書き換えてください（コピペでOK）

"bogieModel2": { "modelFile": "SS135.mqo",
                   "textures": [["default", "textures/train/SS135.png"]],
                   "rendererPath": "scripts/Render_SS135.js"},

編集が終わったら文法ミスや文字コード（UTF-8のBOM無し）など確認してください

この状態で正常に動作していることを確認してください

正常に動作していなかった場合は以下のサイトが参考になると思います
https://staticwind.soragoto.net/rtm/tkmtk/index.html

~~~~~~~~~~~~~~~~~~~~連絡先~~~~~~~~~~~~~~~~~~~~
Builder(Twitter:@Builder_256)