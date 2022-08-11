import React from 'react';
import {
	useSetItem,
	store,
	createItem,
	useItemValue,
} from 'react-take';
import { assetsStatusItem } from './states';
import throttle from 'lodash.throttle';

interface ProgressStatus {
	total: number;
	progress: number;
}
const defaultProgress = {
	total: 100,
	progress: 0,
};

export const progressItem = createItem<ProgressStatus>(
	'progress',
	defaultProgress,
);

function getTagElements<T extends HTMLElement>(
	parent: HTMLElement,
	name: string,
) {
	return Array.from(parent.getElementsByTagName(name) ?? []) as T[];
}

export function Progress() {
	const progress = useItemValue(progressItem, defaultProgress);
	console.log('progress', progress);

	if (progress.progress >= progress.total) {
		return null;
	}

	return (
		<div className="fixed inset-0 bg-white z-20 flex justify-center items-center">
			<div
				className="bg-yellow transition-all h-full absolute top-0 left-0"
				style={{
					width: `${(progress.progress / progress.total) * 100}%`,
				}}
			/>
			<div className="z-10">
				{progress.progress}/{progress.total}
			</div>
		</div>
	);
}

async function waitForAssets(parent: HTMLElement) {
	const images = getTagElements<HTMLImageElement>(parent, 'img');
	const videos = getTagElements<HTMLVideoElement>(parent, 'video');

	store.setValue(progressItem, {
		total: images.length + videos.length,
		progress: 0,
	});

	const onDone = (event: unknown) => {
		const current = store.getValue(progressItem, defaultProgress);

		store.setValue(progressItem, {
			total: current.total,
			progress: current.progress + 1,
		});
	};

	await Promise.allSettled([
		...images.map((image) => {
			return new Promise((resolve, reject) => {
				image.onload = resolve;
				image.onerror = reject;
			})
				.then(onDone)
				.catch(onDone);
		}),
		...videos.map((video) => {
			return new Promise((resolve, reject) => {
				video.addEventListener('loadeddata', resolve);
				video.onerror = reject;
			})
				.then(onDone)
				.catch(onDone);
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

		waitForAssets(parent);
	}, []);

	return ref;
}
