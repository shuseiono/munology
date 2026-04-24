---
version: alpha
name: MUNOLOGY
description: >-
  模擬国連・国際法・国際政治の編集型メディア。人間可読の詳細は Design.md、
  思想的正本は PHILOSOPHY.md。実装の CSS/Tailwind は src/styles/global.css
  および tailwind.config.mjs と同期すること。
colors:
  primary: "#6b9eff"
  mun-bg: "#0b0f14"
  mun-bg-subtle: "#101820"
  mun-surface: "#131b26"
  mun-elevated: "#1a2435"
  mun-border: "#2a3544"
  mun-text: "#e6e8eb"
  mun-text-secondary: "#a8b0bd"
  mun-text-muted: "#7a8494"
  mun-accent: "#6b9eff"
  mun-accent-strong: "#8f7df0"
  mun-link: "#8cc4ff"
  mun-focus: "#6b9eff"
typography:
  page-display:
    fontFamily: Inter, Noto Sans JP, system-ui, sans-serif
    fontSize: 3rem
    fontWeight: 800
    lineHeight: 1.2
  section-heading:
    fontFamily: Inter, Noto Sans JP, system-ui, sans-serif
    fontSize: 1.5rem
    fontWeight: 700
  body-article:
    fontFamily: Noto Sans JP, system-ui, sans-serif
    fontSize: 1.125rem
    lineHeight: 1.8
    letterSpacing: 0.025em
  body-ui:
    fontFamily: Inter, Noto Sans JP, system-ui, sans-serif
    fontSize: 1rem
    lineHeight: 1.6
rounded:
  sm: 8px
  md: 12px
  lg: 16px
  full: 9999px
spacing:
  container-x: 24px
  section-y: 64px
  section-y-lg: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.mun-bg}"
    rounded: "{rounded.sm}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.mun-text-secondary}"
  link-body:
    textColor: "{colors.mun-link}"
  card-article:
    backgroundColor: "{colors.mun-surface}"
    rounded: "{rounded.md}"
  prose-on-canvas:
    textColor: "{colors.mun-text}"
    backgroundColor: "{colors.mun-bg}"
  page-hero:
    textColor: "{colors.mun-text}"
    backgroundColor: "{colors.mun-bg-subtle}"
  focus-ring:
    textColor: "{colors.mun-focus}"
    backgroundColor: "{colors.mun-bg}"
  accent-gradient-end:
    textColor: "{colors.mun-accent-strong}"
    backgroundColor: "{colors.mun-bg}"
  meta-caption:
    textColor: "{colors.mun-text-muted}"
    backgroundColor: "{colors.mun-bg}"
  elevated-surface:
    textColor: "{colors.mun-text}"
    backgroundColor: "{colors.mun-elevated}"
  border-subtle:
    textColor: "{colors.mun-text-secondary}"
    backgroundColor: "{colors.mun-border}"
  secondary-prose:
    textColor: "{colors.mun-text-secondary}"
    backgroundColor: "{colors.mun-bg}"
  accent-match:
    textColor: "{colors.mun-accent}"
    backgroundColor: "{colors.mun-bg}"
---

## Overview

MUNOLOGY は、会期の外側の学び（*Beyond the Gavel*）を支える**静かな学術系エディトリアル**の見た目を目指す。派手な議場比喩より、図書室・新聞解説欄の落ち着き。思想的・禁止事項の詳細は [PHILOSOPHY.md](./PHILOSOPHY.md) と [Design.md](../Design.md) の「PHILOSOPHY との対応」節。YAML のトークンはエージェント向けの**正規化された値**；**実装の正**は従来どおり `global.css` / Tailwind `mun.*` などコード側と突き合わせる。

## Colors

ダーク基調。本文と背景の分離、低く抑えた境界、単一系のアクセント（`primary` / `mun-accent` 系）。カテゴリ用の4色（sky / emerald / amber / violet 相当）はセマンティック用途であり、YAML では省略し [Design.md](../Design.md) の表に従う。`primary` はインタラクションの基準色（CTA・フォーカス）として定義。`mun-border` の hex は [Design.md](../Design.md) 記載の `rgba(148, 163, 184, 0.14)` を @google/design.md の Color 型（hex 必須）向けに近似した **代表値**（本番表示は実装の `rgba` を正とする）。

## Typography

欧文は `Inter`、和文は `Noto Sans JP`；記事はやや大きい本文（`body-article`）と寛いだ行間。UI 用は `body-ui`。見出し階層はページテンプレと `.markdown-content` のルール（Design.md / AGENTS）に従う。

## Layout

コンテナ中央寄せ、横 `px-6`（`spacing.container-x` 相当）。セクション縦方向は `py-16`〜`24` クラス。固定ヘッダー下は `pt-16`（`.page-main`）。

## Elevation & Depth

ダーク面は `mun-surface` / `mun-elevated` で軽い階層。大きいドロップシャドウやネオン風の発光は避ける（PHILOSOPHY 対応表）。

## Shapes

角丸は `rounded` スケールに集約。カードは `md`、主ボタンは `sm`、ピル CTA のみ `full` を限定的に使用。

## Components

- **Button**: primary / secondary。primary は `mun-accent` 上に `mun-bg` 系の濃色テキスト。Secondary は境界 `mun-border`。
- **Card / Badge**: 半透明面とバッジのセマンティック色は [Design.md](../Design.md) の `ArticleCard` パターンに従う（YAML 未列挙分）。
- **Markdown 記事**: `.markdown-content` の見出し・引用・リンクは [Design.md](../Design.md) の Markdown 章。

## Do's and Don'ts

- **Do**: 根拠の追える階層、メタデータの明示、スキップリンク、フォーカス可視。カテゴリ色は4系に抑える。  
- **Don't**: セクション装飾記号、グラデ見出しの乱用、動的 Tailwind クラス連結、`main` のネスト。  
- 詳細は [Design.md](../Design.md) の「禁止・非推奨」と「PHILOSOPHY との対応」。
