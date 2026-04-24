# MUNOLOGY - 模擬国連情報サイト

模擬国連参加者のための国際法・国際関係情報サイトです。

## ドキュメント（設計・運用）

- [docs/PHILOSOPHY.md](./docs/PHILOSOPHY.md) — **MUNOLOGY の存在理由と思想的立脚**（新規執筆・方針の正本）
- [Design.md](./Design.md) — デザイントークン、タイポ、コンポーネント、記事 Markdown ルール
- [docs/DESIGN.md](./docs/DESIGN.md) — エージェント向け [DESIGN.md 形式](https://github.com/google-labs-code/design.md)（YAML トークン＋本文）。`npm run design:lint` で検証
- [AGENTS.md](./AGENTS.md) — リポジトリ作業規約（人間・AI 共通）
- [docs/PREMISES.md](./docs/PREMISES.md) — ブランド・計測・ホスティング等の前提チェックリスト

## プロジェクト構造

```
/
├── public/                 # 静的ファイル
│   ├── images/            # 画像ファイル
│   └── favicon.svg        # ファビコン
├── src/
│   ├── components/        # コンポーネント
│   ├── content/          # 記事コンテンツ
│   ├── layouts/          # レイアウト
│   ├── pages/            # ページ
│   └── styles/           # スタイル（global.css に :root トークン）
├── docs/                 # ドキュメント
│   ├── DESIGN.md         # @google/design.md 形式（エージェント向けトークン）
│   ├── PREMISES.md        # 前提・合意事項
│   ├── GIT_GUIDE.md
│   └── GIT_QUICK_REFERENCE.md
├── Design.md
├── AGENTS.md
└── package.json
```

## コマンド

| コマンド | アクション |
| :------- | :--------- |
| `npm install` | 依存関係をインストール |
| `npm run dev` | ローカル開発サーバーを起動 |
| `npm run build` | 本番用ビルド |
| `npm run preview` | ビルドのプレビュー |
| `npm run type-check` | `astro check` による型・テンプレートチェック |
| `npm run design:lint` | [docs/DESIGN.md](docs/DESIGN.md) を `@google/design.md` で検証（WCAG・参照整合など） |
| `npm run design:export:tailwind` | `docs/DESIGN.md` → Tailwind 風 JSON（stdout。差分確認用） |
| `npm run clean` | ビルドファイルをクリア |

## Git・コーディング

- **Git**: Git Flow 想定、Conventional Commits、PR レビュー（詳細は [docs/GIT_GUIDE.md](./docs/GIT_GUIDE.md)）
- **スタイルの正**: [Design.md](./Design.md) と `src/styles/global.css` の `:root`、および `tailwind.config.mjs` の `mun.*` を同期すること（[AGENTS.md](./AGENTS.md)）

## 技術スタック

- **フレームワーク**: Astro 5
- **スタイリング**: Tailwind CSS
- **コンテンツ**: Markdown + Astro Content Collections（スキーマは `src/content/config.ts`）

## 記事投稿

記事は `src/content/articles/` に Markdown で配置します。

### 記事のフロントマター例

```yaml
---
title: "記事タイトル"
description: "記事の説明"
author: "MUNOLOGY編集部"
date: 2024-12-01T00:00:00.000Z
category: "カテゴリ"
tags: ["タグ1", "タグ2"]
image: ""
draft: false
id: "unique-id"
---
```

## 貢献方法

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/新機能`)
3. 変更をコミット (`git commit -m "feat: 新機能追加"`)
4. ブランチにプッシュ (`git push origin feature/新機能`)
5. プルリクエストを作成

## お問い合わせ

質問や提案があれば、お気軽にお声がけください。

---

*MUNOLOGY - Beyond the Gavel*
