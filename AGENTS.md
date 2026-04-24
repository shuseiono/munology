# AGENTS.md — MUNOLOGY リポジトリ作業ガイド

人間・コーディングエージェント共通の作業規約。迷ったら **[Design.md](./Design.md)** を先に確認する。

## プロジェクト概要

- **Astro 5** 静的サイト。記事は **Content Collections**（`src/content/articles/`）。
- **スタイル**: Tailwind CSS + `src/styles/global.css`（デザイントークンは `:root` と Tailwind `mun.*` の両方で一致させる）。
- **本番 URL**: `astro.config.mjs` の `site`（sitemap・OG の前提）。

## ディレクトリ

| パス | 内容 |
|------|------|
| `src/pages/` | ルーティング。`.astro` が URL になる。 |
| `src/layouts/BaseLayout.astro` | `<html>`、計測、**唯一の `<main id="main-content">`**、Header/Footer。 |
| `src/components/` | 再利用 UI。 |
| `src/content/` | `articles` コレクションとスキーマ `config.ts`。 |
| `public/` | 静的配信（画像・ファビコン）。 |
| `docs/` | Git 手順など。デザイン前提は `docs/PREMISES.md`。 |

## レイアウトと HTML の鉄則

- **ページ `.astro` 内に `<main>` を置かない**。スロットは既に `BaseLayout` の `<main>` 内にある。
- ページ全体のラッパーには `<div class="page-main …">` を使う（ホームはヒーロー優先で `pt-16` なしでも可）。
- **スキップリンク**は `BaseLayout` が `#main-content` に対して付与済み。`id` を変えない。

## 記事の追加・修正

1. `src/content/articles/` に `.md` を追加（またはテンプレート `_template*.md` を複製）。
2. フロントマターは [src/content/config.ts](src/content/config.ts) の Zod スキーマ必須: `title`, `description`, `author`, `date`, `category`, `tags`, `id` 等。
3. `draft: true` は本番ビルドから除外される。
4. スラッグはファイル名（拡張子除く）。日本語ファイル名は URL エンコードされるため、**英語スラッグ推奨**。

## スタイル変更の「正」の所在

1. **Design.md** — トークン・ルールの仕様書。
2. **`src/styles/global.css`** — `:root` 変数、`.markdown-content`、`.hero-gradient-text`、`.card-bg` 等。
3. **`tailwind.config.mjs`** — `theme.extend.colors.mun` と `fontFamily.sans`。

新しい色を足す場合は **三箇所を同期**する。

## Tailwind の注意

- **動的クラス名は禁止**（例: `` `text-${x}-400` ``）。ビルドに含まれない。条件分岐で **完全なクラス文字列**をマップする。
- 記事カードのカテゴリ色は [src/components/ArticleCard.astro](src/components/ArticleCard.astro) のパターンに従う。

## 計測（GTM / GA）

- **GTM を正**（コンテナ ID は `BaseLayout` 参照）。GA4 測定 IDは GTM 経由で送る前提。
- ページ head に **二重の gtag 埋め込みを増やさない**（二重送信防止）。変更時は [docs/PREMISES.md](docs/PREMISES.md) 6 節と整合させる。

## コマンド

```bash
npm install
npm run dev      # 開発
npm run build    # 本番ビルド
npm run preview  # ビルドプレビュー
npm run type-check
```

（ESLint / Prettier は未導入。導入する場合は `package.json` と本ファイルを更新すること。）

## Cursor / AI 向け

- ユーザールールで **日本語応答**が指定されている場合がある（チャット側）。
- 大きなリファクタより、**Design.md に書かれた範囲**に収める。
- `.canvas.tsx` を触る作業でなければ Canvas スキルは不要。

## 参考リンク

- [Design.md](./Design.md) — トークン・コンポーネント・ Markdown ルール
- [docs/PREMISES.md](./docs/PREMISES.md) — ステークホルダー前提
- [README.md](./README.md) — 起動・構造の概要
