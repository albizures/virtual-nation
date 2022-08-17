import clsx from 'clsx';
import React from 'react';
import { store, createItem, useItemValue } from 'react-take';
import { Logo } from './components/Logo';

interface ProgressState {
	total: number;
	progress: number;
}
const defaultProgress = {
	total: 100,
	progress: 0,
};

export const progressItem = createItem<ProgressState>(
	'progress',
	defaultProgress,
);

function getTagElements<T extends HTMLElement>(
	parent: HTMLElement,
	name: string,
) {
	return Array.from(parent.getElementsByTagName(name) ?? []) as T[];
}

type ProgressStatus = 'shown' | 'hidden' | 'hiding';

export function Progress() {
	const progress = useItemValue(progressItem, defaultProgress);
	const [status, setStatus] = React.useState<ProgressStatus>('shown');

	React.useEffect(() => {
		if (progress.progress >= progress.total) {
			setStatus('hiding');
			const timer = setTimeout(() => {
				setStatus('hidden');
			}, 500);
			return () => {
				clearTimeout(timer);
			};
		}
	}, [progress]);

	if (status === 'hidden') {
		return null;
	}

	return (
		<div
			className={clsx(
				'fixed transition-opacity duration-400 inset-0 bg-white z-20',
				{
					'opacity-0': status === 'hiding',
					'opacity-100': status === 'shown',
				},
			)}
		>
			<div
				className="bg-yellow transition-width duration-400 h-full absolute top-0 left-0"
				style={{
					width: `${(progress.progress / progress.total) * 100}%`,
				}}
			/>
			<div className="z-10 text-black z-24 absolute inset-0 flex justify-center items-center">
				<Logo className="h-40 animate-pulse-alt" />
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
