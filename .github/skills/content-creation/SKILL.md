---
name: content-creation
description: "Use when: creating new Markdown documents for STEM-Hackathon (blog posts, handbook pages, history records, DevDojo materials). Provides templates, folder structure guidance, and best practices for Docosaurus content. Helps with file naming, Front Matter setup, and consistent formatting."
---

# STEM-Hackathon コンテンツ作成スキル

## 使用場面
- ✅ ハッカソン履歴ドキュメント作成
- ✅ DevDojo 学習教材作成
- ✅ ブログ投稿（最新情報）
- ✅ 参加の手引きドキュメント作成
- ✅ Markdown ファイルの新規追加

---

## クイックスタート

### 1. どこに追加するのか確認

| セクション | フォルダ | ファイル形式 |
|-----------|---------|-----------|
| 参加の手引き | `docs/handbook/` | `topic-name.md` |
| ハッカソン履歴 | `docs/history/YYYY/` | `event-name.md` |
| 学習教材（DevDojo） | `docs/devdojo/category/` | `lesson-name.md` |
| 最新情報 | `blog/` | `YYYY-MM-DD-slug.md` |

### 2. Front Matter テンプレート

#### docs/ 用（永続ドキュメント）
```markdown
---
sidebar_position: 1
title: ページタイトル
description: このページについての簡潔な説明
---

# ページタイトル

本文...
```

#### blog/ 用（最新情報）
```markdown
---
slug: unique-identifier
title: ブログタイトル
authors: [author-name]
date: YYYY-MM-DD
---

# ブログタイトル

本文...
```

### 3. ため置き用フォルダ構成の作成

新しいセクション・カテゴリを追加する際は、`_category_.json` をフォルダに配置：

```json
{
  "label": "表示名",
  "position": 1,
  "collapsed": false
}
```

---

## コンテンツ別ガイド

### 📚 ハッカソン履歴
**場所**: `docs/history/YYYY/event-name.md`

**Front Matter 例**:
```markdown
---
sidebar_position: 1
title: 2025春 STEM-Hackathon
description: 2025年春開催のハッカソン結果と参加チーム情報
---
```

**コンテンツ構成案**:
```markdown
# 2025春 STEM-Hackathon

## 開催概要
- **開催日**: 2025-04-15
- **会場**: ○○大学
- **参加チーム数**: XX チーム

## 受賞作品
### 🥇 最優秀賞
**チーム名**: Team A
**作品**: ○○○
**概要**: 説明...

### 🥈 優秀賞
...

## 参加チーム一覧
[テーブルまたはリスト]

## 写真・レポート
![イベント写真](./img/event-2025-spring.jpg)
```

### 🎓 DevDojo 教材
**場所**: `docs/devdojo/category/lesson-name.md`

**Front Matter 例**:
```markdown
---
sidebar_position: 1
title: GitHub とは？
description: GitHub の基礎を学ぶための入門ガイド
---
```

**コンテンツ構成案（初心者向け）**:
```markdown
# GitHub とは？

## はじめに
このページでは、GitHub の基本概念を学びます。

:::tip
初めての方は、このページから始めることをお勧めします
:::

## 概要
[説明]

## ステップバイステップ
1. [手順1]
2. [手順2]

## よくある質問
**Q. ○○○**
A. [回答]

## 次に学ぶこと
[次のレッスンへのリンク]
```

### 📰 ブログ投稿（最新情報）
**場所**: `blog/YYYY-MM-DD-slug.md`

**ファイル名形式**:
- `2026-03-25-spring-hackathon-announcement.md`
- `2026-04-10-competition-results.md`

**Front Matter 例**:
```markdown
---
slug: spring-hackathon-announcement
title: 2026年春 STEM-Hackathon 開催案内！
authors: [organizer-account]
date: 2026-03-25
---
```

**コンテンツ構成案**:
```markdown
# 2026年春 STEM-Hackathon 開催案内！

## 📅 開催日時
[日時]

## 📍 会場
[会場情報]

## 🎯 申し込み
[申し込み方法・リンク]

## ❓ よくある質問
[FAQ]
```

### 📋 参加の手引き
**場所**: `docs/handbook/topic.md`

**Front Matter 例**:
```markdown
---
sidebar_position: 1
title: 申し込み方法
description: ハッカソンへの申し込み手順
---
```

**コンテンツ構成案**:
```markdown
# 申し込み方法

## ステップ 1: 事前登録
[説明]

## ステップ 2: チーム編成
[説明]

:::warning
注意: 申し込み期限はイベント2週間前までです
:::

## トラブルシューティング
**Q. 申し込みフォームが送信できません**
A. [解決策]
```

---

## Markdown ベストプラクティス

### ✅ やること
- 見出しは階層を守る（# → ## → ###）
- 重要な情報は `:::info` で枠囲み
- 複数手順は `<Tabs>` で使い分け
- 画像は相対パス使用（`./img/filename.png`）
- 日付は `YYYY-MM-DD` 形式

### ❌ やらないこと
- HTML タグの過度な使用
- 見出しのスキップ（`#` の次に `###` など）
- 日本語と英数の混在時の半角スペース忘れ

---

## テンプレート集

### 情報ボックス
```markdown
:::info
ここに情報を入力
:::

:::tip
ここにヒントを入力
:::

:::warning
ここに警告を入力
:::

:::danger
ここに危険な情報を入力
:::
```

### タブ（複数選択肢）
```markdown
<Tabs>
<TabItem value="option1" label="選択肢1">
内容1
</TabItem>
<TabItem value="option2" label="選択肢2">
内容2
</TabItem>
</Tabs>
```

### コードブロック
````markdown
```bash
# コマンド例
git clone https://github.com/...
```

```jsx
// JavaScript/React 例
const greeting = "Hello, World!";
console.log(greeting);
```
````

### テーブル
```markdown
| カラムA | カラムB | カラムC |
|--------|--------|--------|
| データ1 | データ2 | データ3 |
| データ4 | データ5 | データ6 |
```

---

## 質問例

**スキルを活用するときの聞き方**:

> 「2025年度のハッカソン履歴として、`docs/history/2025/` に新しいドキュメントを作成したいのですが、ファイル構成とテンプレートを提案してください」

> 「DevDojo の GitHub セクションに、初心者向けの『リポジトリクローン方法』ガイドを作成してほしいです」

> 「春ハッカソンの開催案内をブログに投稿したいのですが、Front Matter とコンテンツ構成のテンプレートをください」

---

## 関連資料
- [../copilot-instructions.md](../copilot-instructions.md) - プロジェクト全体ガイド
- [Docosaurus Markdown 機能](https://docosaurus.io/docs/markdown-features)
