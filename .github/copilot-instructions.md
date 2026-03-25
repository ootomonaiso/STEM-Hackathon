# STEM-Hackathon Docusaurus サイト開発ガイド

## 目的
STEM-Hackathon は、ハッカソンイベントの参加ポータル・履歴管理・初心者向けドキュメントを統合したサイトです。Docusaurus で構築し、GitHub Pages で公開します。

---

## 基本方針
- **全て日本語で作成**
- 学生向けで親しみやすい表現を使う
- 見出しは短く、内容は明確に
- 日付は `YYYY-MM-DD` で統一
- 変更が必要な箇所には更新日や更新内容を明記

---

## リポジトリ構成

```
STEM-Hackathon/
├── docs/                      # 永続的なドキュメント
│   ├── intro.md               # サイト概要・ホーム説明
│   ├── handbook/              # 参加の手引き
│   │   ├── _category_.json
│   │   ├── registration.md
│   │   └── schedule.md
│   ├── history/               # ハッカソン履歴（年度順）
│   │   ├── _category_.json
│   │   ├── 2024/
│   │   │   ├── _category_.json
│   │   │   ├── event-1.md
│   │   │   └── event-2.md
│   │   └── 2025/
│   │       ├── _category_.json
│   │       └── hackathon-spring.md
│   └── devdojo/               # 学習用ドキュメント
│       ├── _category_.json
│       ├── github-git/        # GitHub・Git 関連
│       │   ├── _category_.json
│       │   ├── basics.md
│       │   └── workflow.md
│       └── generative-ai/     # 生成AI関連
│           ├── _category_.json
│           └── getting-started.md
├── blog/                      # 最新情報・ニュース（新しい順に表示）
│   ├── YYYY-MM-DD-title.md
│   └── authors.yml
└── src/pages/                 # カスタムページ
    └── index.tsx              # ホームページ
```

---

## セクション別の管理

### ホームページ
- **ファイル**: `src/pages/index.tsx`
- **内容**: 最新のハッカソン情報をビジュアルで表示
- **更新方法**: TypeScript/React を手動で編集

### 参加の手引き
- **場所**: `docs/handbook/`
- **内容**: 申し込み、スケジュール、Q&A など
- **形式**: Markdown + `_category_.json`
- **追加方法**: 新規 `.md` を作成し、Front Matter の `sidebar_position` を設定

```markdown
---
sidebar_position: 1
title: 申し込み方法
description: ハッカソンへの申し込み手順を説明します
---

# 申し込み方法
...
```

### ハッカソン履歴
- **場所**: `docs/history/`
- **構成**: 年度順 → 開催順
- **例**: `docs/history/2024/`、`docs/history/2024/_category_.json`、`docs/history/2024/spring-hackathon.md`

```json
{
  "label": "2024年度",
  "collapsed": false,
  "position": 1
}
```

### DevDojo（学習コンテンツ）
- **場所**: `docs/devdojo/`
- **初期カテゴリ**: `github-git/`、`generative-ai/`
- **拡張方法**: 新カテゴリ用フォルダを作り、`_category_.json` を追加
- **対象**: 初心者向けの丁寧な説明・図解重視

```
devdojo/
├── _category_.json
├── github-git/
│   ├── _category_.json
│   ├── basics.md
│   └── workflow.md
└── generative-ai/
    ├── _category_.json
    └── getting-started.md
```

### 最新情報（Blog）
- **場所**: `blog/`
- **ファイル名**: `YYYY-MM-DD-title.md`
- **例**: `2026-03-25-spring-hackathon-announcement.md`
- **表示順**: 日付の新しい順に自動ソート

```markdown
---
slug: spring-hackathon-announcement
title: 2026年春 STEM-Hackathon 開催案内
authors: [organizer]
date: 2026-03-25
---

# 2026年春 STEM-Hackathon 開催案内

開催日時、会場、申し込み方法などを記載...
```

---

## Markdown の記述ルール

### Front Matter（全ドキュメント共通）
```markdown
---
sidebar_position: 1              # サイドバーでの表示順序（小さいほど上）
title: ページタイトル            # ブラウザタブ・サイドバーに表示
description: 説明文              # SEO・概要に使用
---
```

### よく使う構文

#### 情報ボックス（Callout）
```markdown
:::info
重要な情報やお知らせ
:::

:::tip
ヒント・アドバイス
:::

:::warning
注意が必要な事項
:::
```

#### タブ（複数手順・選択肢）
```markdown
<Tabs>
<TabItem value="github" label="GitHub の場合">
手順 1...
</TabItem>
<TabItem value="git" label="Git コマンドの場合">
手順 2...
</TabItem>
</Tabs>
```

#### コードブロック
````markdown
```bash
# Bash コマンド例
git clone https://github.com/...
```

```python
# Python の例
def hello():
    print("Hello World")
```
````

#### 画像の埋め込み
```markdown
![説明文](./img/screenshot.png)
```

#### テーブル
```markdown
| ヘッダ1 | ヘッダ2 | ヘッダ3 |
|--------|--------|--------|
| データ1 | データ2 | データ3 |
```

---

## 作業フロー

### 新規ドキュメント追加（docs/）
1. 対象フォルダ（`handbook/`, `history/`, `devdojo/` など）に移動
2. `YYYY-MM-DD-title.md` または `title.md` で新規作成
3. Front Matter を記入（`title`, `description`, `sidebar_position`）
4. 日本語で本文を記述
5. 画像が必要な場合は同一フォルダ内に `img/` を作成

### 最新情報追加（blog/）
1. `blog/` に新規ファイルを作成
2. ファイル名は `YYYY-MM-DD-slug.md`
3. Front Matter に `slug`, `title`, `authors`, `date` を指定
4. 本文を記述（新しい順に自動表示）

### カテゴリ追加（階層管理）
1. 新規フォルダを作成
2. `_category_.json` を配置

```json
{
  "label": "カテゴリ表示名",
  "position": 1,
  "collapsed": false
}
```

---

## 設定ファイル（ユーザー管理）

### サイト基本設定
- **ファイル**: `docusaurus.config.ts`
- **管理項目**: サイトタイトル、URL、ロゴ、フッター

### サイドバー構成
- **ファイル**: `sidebars.ts`
- **管理項目**: メニューの順序・階層

### ホームページレイアウト
- **ファイル**: `src/pages/index.tsx`
- **管理項目**: 最新情報表示、フューチャーセクション

### カスタム CSS
- **ファイル**: `src/css/custom.css`
- **管理項目**: 色、フォント、レイアウト微調整

---

## デプロイ・公開

### GitHub Pages へのデプロイ
```bash
npm run build      # 本番用ビルド
npm run deploy     # GitHub Pages にデプロイ
```

---

## 便利なコマンド

```bash
# 開発サーバー起動（ホットリロード）
npm run start

# ビルド確認
npm run build

# 本番デプロイ
npm run deploy
```

---

## CI/CD（GitHub Actions）
GitHub Pages の自動デプロイ用ワークフローは `.github/workflows/` に配置します。

---

## Copilot 依頼テンプレート

> 「ホームページの最新ハッカソン情報セクションに、直近5件のイベントを表示するコンポーネント案をください」

> 「DevDojo の GitHub セクション向けに、初心者向けの基礎ドキュメント案を提案してください」

> 「2024年度のハッカソン履歴を `docs/history/2024/` に追加したいので、ファイル構成案をお願いします」

---

## 参考リソース
- [Docusaurus 公式ドキュメント](https://docusaurus.io/)
- [Markdown ガイド](https://docusaurus.io/docs/markdown-features)
- [GitHub Pages デプロイ](https://docusaurus.io/docs/deployment#deploying-to-github-pages)
