import React from 'react';
import { useItem, useSetItem } from 'react-take';
import { assetsStatusItem } from './states';

function getTagElements<T extends HTMLElement>(
	parent: HTMLElement,
	name: string,
) {
	return Array.from(parent.getElementsByTagName(name) ?? []) as T[];
}

async function waitForAssets(parent: HTMLElement) {
	const images = getTagElements<HTMLImageElement>(parent, 'img');
	const videos = getTagElements<HTMLVideoElement>(parent, 'video');

	await Promise.allSettled([
		...images.map((image) => {
			return new Promise((resolve, reject) => {
				image.onload = resolve;
				image.onerror = reject;
			});
		}),
		...videos.map((video) => {
			return new Promise((resolve, reject) => {
				video.addEventListener('loadeddata', resolve);
				video.onerror = reject;
			});
		}),
	]);
}

export function useWaitForAssets() {
	const setStatus = useSetItem(assetsStatusItem);
	const ref = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		const parent = ref.current!;
		if (!parent) {
			return;
		}

		waitForAssets(parent).then(() => {
			setStatus('loaded');
		});
	}, []);

	return ref;
}
