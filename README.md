# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## 利用可能なコマンド一覧

### 基本コマンド
- `npm run start` - 開発サーバーを起動（ホットリロード対応）
- `npm run build` - 本番用ビルドを生成
- `npm run deploy` - GitHub Pages にデプロイ

### その他のコマンド
- `npm run serve` - ビルド後のサイトをローカルで確認
- `npm run clear` - Docosaurus のキャッシュをクリア
- `npm run typecheck` - TypeScript の型チェック
- `npm run write-translations` - 多言語化用の翻訳ファイルを生成
- `npm run write-heading-ids` - Markdown の見出し ID を自動生成
