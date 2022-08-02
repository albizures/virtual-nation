import { createItem } from 'react-take';

export const assetsStatusItem = createItem<'loading' | 'loaded'>(
	'assets-status',
);
