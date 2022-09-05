import clsx from 'clsx';
import React from 'react';
import { store, createItem, useItemValue } from 'react-take';
import { Logo } from './components/Logo';
import { useOverflowHidden } from './useOverflowHidden';

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

	useOverflowHidden(status === 'shown');

	React.useEffect(() => {
		if (status === 'shown') {
			window.screenTop = 0;
			document.body.style.overflow = 'hidden';
		} else if ('hidden') {
			document.body.style.overflow = '';
		}
	}, [status]);

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
				'fixed transition-opacity duration-400 inset-all bg-white z-20',
				{
					'opacity-0': status === 'hiding',
					'opacity-100': status === 'shown',
				},
			)}
		>
			<div
				className="bg-nation transition-width duration-400 h-full absolute top-0 left-0"
				style={{
					width: `${(progress.progress / progress.total) * 100}%`,
				}}
			/>
			<div className="z-10 text-black z-24 absolute inset-all flex justify-center items-center">
				<Logo className="h-40 animate-pulse-alt" />
			</div>
		</div>
	);
}
let waiting = false;
async function waitForAssets(parent: HTMLElement) {
	if (waiting) {
		return;
	}
	waiting = true;

	const videos = getTagElements<HTMLVideoElement>(parent, 'video');

	store.setValue(progressItem, {
		total: videos.length * 2,
		progress: 0,
	});

	const onDone = (add = 1) => {
		const current = store.getValue(progressItem, defaultProgress);

		store.setValue(progressItem, {
			total: current.total,
			progress: current.progress + add,
		});
	};

	await Promise.allSettled([
		...videos.map((video) => {
			return new Promise((resolve, reject) => {
				video.defaultMuted = true;
				video.muted = true;
				function loadeddata() {
					video.removeEventListener('loadeddata', loadeddata);
					onDone();
				}
				video.addEventListener('loadeddata', loadeddata);
				function canplaythrough() {
					video.removeEventListener('canplaythrough', canplaythrough);
					resolve(null);
					onDone();
				}
				video.addEventListener('canplaythrough', canplaythrough);
				video.onerror = reject;
			}).catch(() => onDone());
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
