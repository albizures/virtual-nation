import { defineConfig } from 'unocss';

export default defineConfig({
	theme: {
		fontFamily: {
			sans: ['century-gothic'],
		},
	},
	shortcuts: {
		arrow:
			'inline-block animate-fade-out animate-count-infinite animate-duration-1s',
		btn: 'border text-3xl font-sans border-stone-6',
	},
});
