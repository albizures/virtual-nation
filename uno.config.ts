import { defineConfig } from 'unocss';

function shortcut(...values: string[]) {
	return values.join(' ');
}

export default defineConfig({
	theme: {
		colors: {
			nation: {
				DEFAULT: '#ffe600',
				light: '#ffff00',
			},
		},
		fontFamily: {
			sans: ['century-gothic'],
		},
	},
	shortcuts: {
		'v-h3': 'text-2xl font-sans font-bold',
		tree: shortcut(
			'ml-1 mt-4 text-sm font-medium',
			'border-l-1 border-gray relative border-opacity-30',
			'before:(-top-2 -left-1 w-2 h-2 absolute border-gray border-opacity-30 content-empty inline-block rounded border-1)',
		),
		'tree-item': shortcut(
			'my-3 translate-y-2 flex items-center',
			'before:(border-t-1 border-gray border-opacity-30 mr-2 inline-block w-2 align-middle content-empty)',
		),
		arrow:
			'inline-block animate-fade-out animate-count-infinite animate-duration-1s',
		btn: 'border text-3xl font-sans border-stone-6',
	},
});
