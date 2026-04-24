// tailwind.config.mjs
// トークンは Design.md / src/styles/global.css :root と同期すること（AGENTS.md 参照）
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'Noto Sans JP', 'system-ui', 'sans-serif'],
			},
			colors: {
				mun: {
					bg: '#0b0f14',
					'bg-subtle': '#101820',
					surface: '#131b26',
					elevated: '#1a2435',
					border: 'rgba(148, 163, 184, 0.14)',
					text: '#e6e8eb',
					'text-secondary': '#a8b0bd',
					'text-muted': '#7a8494',
					accent: '#6b9eff',
					'accent-strong': '#8f7df0',
					link: '#8cc4ff',
					focus: '#6b9eff',
				},
			},
		},
	},
	plugins: [],
};
