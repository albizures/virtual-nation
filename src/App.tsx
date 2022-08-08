import React from 'react';
import { useItemValue } from 'react-take';
import { Hero } from './components/Hero';
import { ScreenSection } from './components/ScreenSection';
import { assetsStatusItem } from './states';
import { UseCases } from './components/UseCases';
import { useWaitForAssets } from './useWaitForAssets';
import { Header, StickyHeader } from './components/Header';

export function App() {
	const status = useItemValue(assetsStatusItem, 'loading');
	const ref = useWaitForAssets();

	return (
		<>
			{status === 'loading' && (
				<div className="fixed inset-0 bg-white z-20">loading...</div>
			)}
			<Header />
			<StickyHeader />
			<div ref={ref} className="bg-black text-white">
				<Hero />
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
