import React, { useRef } from 'react';
import { useItem } from 'react-take';
import { ScreenSection } from './ScreenSection';
import { assetsStatusItem } from './states';
import { UseCases } from './UseCases';

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

export function App() {
	const [status, setStatus] = useItem(assetsStatusItem, 'loading');
	const ref = useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		const parent = ref.current!;
		if (!parent) {
			return;
		}

		waitForAssets(parent).then(() => {
			setStatus('loaded');
		});
	}, []);

	return (
		<>
			{status === 'loading' && (
				<div className="fixed inset-0 bg-white z-10">loading...</div>
			)}
			<div ref={ref} className="bg-black text-white">
				<ScreenSection className="flex justify-center items-center">
					<h1 className="text-4xl text-center">
						The virtual nation app gives creators superpowers
					</h1>
				</ScreenSection>
				<UseCases />
				<ScreenSection className="flex text-center items-center">
					<h2>Pricing</h2>
				</ScreenSection>
				<ScreenSection className="flex text-center items-center">
					<h2>Contact</h2>
				</ScreenSection>
			</div>
			<footer>
				<h2>footer</h2>
			</footer>
		</>
	);
}
