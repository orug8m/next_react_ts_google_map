# Next React TypeScript GoogleMap

```
React 16.13.1
Next 9.4.0
TypeScript 3.8.3
```

## with

[google-map-react](https://github.com/google-map-react/google-map-react/blob/master/src/google_map.js)

## install

```
$ yarn create next-app next_google_map( <- app name)
$ cd next_google_map
# `install` has been replaced with `add` to add new dependencies. Run "yarn add install next react react-dom" instead. Visit https://yarnpkg.com/en/docs/cli/install

# need to add
$ yarn add install next react react-dom

# easy to handle google map api on React
$ yarn add google-map-react

# if you want to use
$ yarn add typescript prettier eslint

# if want to use redux, and redux-toolkit
$ yarn add react-redux @reduxjs/toolkit

# # options
$ yarn add styled-components @zeit/next-css @zeit/next-sass sanitize.css core-js react-app-polyfill

# install packages
$ yarn

# in package.json, scripts.dev
# -p option sets for changing port that default is 3000
{
  ...
  "scripts": {
    "dev": "next dev -p 3333",
    ...
  }
  ...
}

# if use Firebase for Hosting
# Next will use Cloud Function for Firebase
# Cloud Function needs node 10 or 8
# Next 9.4 needs node over 10.13
# wirite this to restric if need.
# and you can ignore by `$ yarn add xxx --ignore-engines`
{
  ...
  "engines": {
    "node": "10",
    ...
  }
  ...
}

# I changed pages directory to src/, writtend in tsconfig

# start dev nextJsServer
$ yarn dev
```

## Google Map を Next React 上で表示する

### Google Map Api key を取得

**memo**
取得しなくても、後半の `bootstrapURLKeys` 部分をコメントアウトしてなにも渡さなければ `developer mode` （薄暗い画面に developer mode の文字がでる）になるので初期のデザイン段階ではなくてもレイアウトくらいなら見れる
[Google Map API key 取得](https://developers.google.com/maps/documentation/javascript/get-api-key?hl=ja)

### 環境変数に Api Key を保存して Next のフロントで使えるようにする

.gitignore に.env .next(cache など入る)を追加
.env を作成
next.config.js で.env を読み込んで env プロパティにする
Next では通常の React と環境変数の渡し方が違った（生成の場所とかタイミングの問題？）

```
//.env
HOGE=12aswe12

// next.config.js
module.export = {
  env: {
    HOGE_ENV: process.env.HOGE // ここで渡すと場合FEで環境変数として使える。
    // サーバー側はこうしなくても `process.env.HOGE` で取得できる。
  }
}

// pages/index.tsxなど
process.env.HOGE_ENV => 12aswe12 //これでフロントが環境変数を使える。例えば<script></script>などに渡す際に使える
process.env.HOGE => ブラウザのconsoleとかに出してみれば `undefined` が見れる(server consoleには `12aswe12` が出る)
```

### フロントにコードを追加して動作を見る

#### default center と Maker をつけたい場所は GoogleMap の URL などから取得

```
// src/pages/index.tsx
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 35.78,
      lng: 139.89,
    },
    zoom: 7,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          // bootstrapURLKeys={{
          //   key: process.env.googleMapApiKey,
          //   libraries: ["places"],
          // }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={35.7806392}
            lng={139.9002746}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

``
```

### localhost:3333 (-p で変えて無ければ 3000)にアクセス

## その他

- tsconfig.json の paths 欄でroot pathを `@` に設定
- styled-component の ThemeProvidor を使用
- redux 使えるようにしておく（最近は recoil が Facebook から出た）
- Next9.4にしたからか、 `Warning: Built-in CSS support is being disabled due to custom CSS configuration being detected.` が出てる
