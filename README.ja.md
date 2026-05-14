# JSHint、JavaScriptの静的コード解析ツール

[ [オンラインで試す](http://jshint.com/) •
[ドキュメント](http://jshint.com/docs/) • [FAQ](http://jshint.com/docs/faq) •
[インストール](http://jshint.com/install/) •
[貢献](http://jshint.com/contribute/) •
[ブログ](http://jshint.com/blog/) • [Twitter](https://twitter.com/jshint/) ]

[
![NPM version](https://img.shields.io/npm/v/jshint.svg?style=flat)
](https://www.npmjs.com/package/jshint)
[
![Linux Build Status](https://img.shields.io/travis/jshint/jshint/master.svg?style=flat&label=Linux%20build)
](https://travis-ci.org/jshint/jshint)
[
![Windows Build status](https://img.shields.io/appveyor/ci/jshint/jshint/master.svg?style=flat&label=Windows%20build)
](https://ci.appveyor.com/project/jshint/jshint/branch/master)
[
![Coverage Status](https://img.shields.io/coveralls/jshint/jshint.svg?style=flat)
](https://coveralls.io/r/jshint/jshint?branch=master)

JSHintは、JavaScriptコード内のエラーや潜在的な問題を検出するコミュニティ主導のツールです。非常に柔軟性が高く、特定のコーディングガイドラインやコードを実行する想定環境に合わせて調整することができます。

## 目標

本プロジェクトは、JavaScript開発者がタイポや言語特有の落とし穴（gotchas）を心配することなく、複雑なプログラムを記述できるよう支援することを目指しています。

## インストール

JSHintはNode.jsモジュールとして配布されています。推奨されるインストール方法は、npmを使用してグローバルにインストールすることです：

```bash
npm install -g jshint
```

## 使用方法

### コマンドラインインターフェース（CLI）

インストールが完了すると、コマンドラインからJavaScriptファイルの静的解析（lint）を行うことができます：

```bash
jshint myfile.js
jshint my/directory/
```

CLIオプションの完全なリストや設定の詳細については、[JSHintのドキュメント](http://jshint.com/docs/cli/)を参照してください。

### プログラマティックAPI

Node.jsアプリケーション内で、JSHintをプログラムから使用することもできます。

```javascript
const { JSHINT } = require("jshint");

const source = [
  "function main() {",
  "  return 'Hello, World!'",
  "}",
  "",
  "main();"
];

// JSHintは、コードがlintを通過した場合に `true` を返します。
if (!JSHINT(source)) {
  console.log("Linting errors:");
  JSHINT.errors.forEach(function(err) {
    if (err) {
      console.log(`- ${err.reason} (line ${err.line}, col ${err.character})`);
    }
  });
}

// `data()` メソッドは、lintの詳細情報を含むオブジェクトを返します。
const data = JSHINT.data();
console.log("\nFunctions found:", data.functions);
```

## バグの報告

バグを報告するには、[新しいGitHub Issue](https://github.com/jshint/jshint/issues/new)を作成し、問題や提案を記述してください。

## JSHintの採用実績

以下の企業やプロジェクトのエンジニアがJSHintを使用しています：

* [Mozilla](https://www.mozilla.org/)
* [Wikipedia](https://wikipedia.org/)
* [Facebook](https://facebook.com/)
* [Twitter](https://twitter.com/)
* [Disqus](https://disqus.com/)
* [Medium](https://medium.com/)
* [Yahoo!](https://yahoo.com/)
* [jQuery UI](https://jqueryui.com/) ([ソース](https://github.com/jquery/jquery-ui/blob/master/package.json))
* [jQuery Mobile](https://jquerymobile.com/) ([ソース](https://github.com/jquery/jquery-mobile/blob/master/package.json#))
* その他多数！

## JSHintチーム

JSHintは現在、[Rick Waldron](https://github.com/rwaldron/)、[Caitlin Potter](https://github.com/caitp/)、[Mike Pennisi](https://github.com/jugglinmike/)、[Luke Page](https://github.com/lukeapage)によってメンテナンスされています。連絡先は admin@jshint.org です。

## ライセンス

JSHintは[MIT Expat license](https://www.gnu.org/licenses/license-list.html#Expat)の下でライセンスされています。

## ありがとうございます！

あらゆるフィードバックや貢献に深く感謝いたします。JSHintをご利用いただき、サポートしていただきありがとうございます。
