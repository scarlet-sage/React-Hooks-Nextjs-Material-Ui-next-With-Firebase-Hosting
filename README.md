# Next.js, Material-UI v4-alpha And React Hook With Firebase Hosting example

React HooksとMaterial-ui v4で作成したアプリをNext.jsで動かして、FirebaseでSSR(サーバーサイドレンダリング)をする。

[next.js/examples/with-firebase-hosting at canary · zeit/next.js · GitHub](https://github.com/zeit/next.js/tree/canary/examples/with-firebase-hosting)と[material-ui/examples/nextjs-next at next · mui-org/material-ui · GitHub](https://github.com/mui-org/material-ui/tree/next/examples/nextjs-next)を組み合わせたものです。


## How to use

```bash
git clone https://github.com/scarlet-sage/React-Hooks-Nextjs-Material-Ui-next-With-Firebase-Hosting.git
```

* Firebase Toolsをインストールしてください。 `npm i -g firebase-tools`
* Firebaseのプロジェクトを作成してください。 [firebase web console](https://console.firebase.google.com/)
* WebコンソールのURLからプロジェクトIDを取得します。 `https://console.firebase.google.com/project/<projectId>`
* `.firebaserc` デフォルトのプロジェクトIDを取得したプロジェクトIDで上書きしてください。
* Firebase CLIツールでログインしてください。 `firebase login`

### Install Project
```bash
npm install
```

#### Run Next.js development:

```bash
npm run dev
```

#### Run Firebase locally for testing:

```
npm run serve
```

#### Deploy it to the cloud with Firebase:

```bash
npm run deploy
```

#### Clean dist folder

```bash
npm run clean
```

## 作成した背景
目的は、Firebase Hostingのリライトルールを使用してFirebase Cloud FunctionsでNext.jsアプリをホストすることです。
これにより、このアプリはFirebase HostingのURLから配信されます。
個々の `page`バンドルはそれぞれ、最初のサーバーサイドレンダリングを実行するCloud Functionへの新しい呼び出しで実行されます。

## わからん殺しの部分

* Firebase Hostingでは`public/`フォルダが空だとエラー起きるので、`placeholder.html`を入れてあります。
* 静的ファイルを扱う場合はNext.jsでは`src/app/static/`フォルダにおく必要があるが、Firebase Hostingでは`public/`ディレクトリ見てるので、ビルド前に`src/app/static/`から`public/`コピーしてます。
* `firebase.json`のリライトルールで,`public/`フォルダに該当するファイルが存在しない場合、リクエストは全てCloud Functionで処理されます。
* `package.json`に記述してある、`"engines": {"node": "8"}`はFirebase Cloud FunctionsをNode8で動かすのに必要です。これは`src/functions/.babelrc`の設定で、babelはNode6よりコンパクトでモダンなコードを出力します。

### カスタム

Next AppとNext Serverの開発は、2つの異なるフォルダに分けられます。

* Next App - `src/app/`
* Next Server - `src/functions/`

Next Appの設定を変更したい場合は、 `src/app`の内容だけを変更してください。
たとえば、 `src/functions`の` .babelrc`はFirebase Cloud Functionsコードをコンパイルするためにのみ使用されます。
Next Appのコンパイル用に `.babelrc`をカスタマイズしたい場合は、`src/app/.babelrc`を作成して、[カスタマイズガイド](https://github.com/zeit/next.js/#customizing-babel-config)に従ってください。

### _app.js

`_app.js`を使用している場合、デプロイされたクラウド機能で以下のエラーを受け取るかもしれません.

```
{ Error: Cannot find module '@babel/runtime/regenerator'...
```

next.jsは依存関係として `@babel/runtime`を持っていますが、このプロジェクトには依存関係として直接インストールする必要があります。
インストールしてもエラーが出るようなら`node_modules`ディレクトリを削除してから`npm install`を再度実行してください。
それでもエラーが出る場合はnode自体が壊れてる可能性もあります、私が作成中に一度壊れてました。

## 参考記事
[https://github.com/zeit/next.js/tree/canary/examples/with-firebase-hosting](https://github.com/zeit/next.js/tree/canary/examples/with-firebase-hosting) 
 
[ReactHooks + Firebase(Authentication, Firestore)でTodoアプリ作る - Qiita](https://qiita.com/k_tada/items/ed05d14458d1ddfcefae)

[material-ui/examples/nextjs-next at next · mui-org/material-ui · GitHub](https://github.com/mui-org/material-ui/tree/next/examples/nextjs-next)

[フック API リファレンス – React](https://ja.reactjs.org/docs/hooks-reference.html#basic-hooks)

[フック早わかり – React](https://ja.reactjs.org/docs/hooks-overview.html)

[React’s useCallback and useMemo Hooks By Example](https://nikgrozev.com/2019/04/07/reacts-usecallback-and-usememo-hooks-by-example/)

[Next.js を Firebase hosting で動かしてSSRする - Qiita](https://qiita.com/mizchi/items/60722563b8a938e7336f)
