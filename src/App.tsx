import React from 'react';
import { Hero } from './components/Hero';
import { UseCases } from './components/UseCases';
import { useWaitForAssets, Progress } from './useWaitForAssets';
import { Header, StickyHeader } from './components/Header';
import { Pricing } from './components/Pricing';

export function App() {
	// const status = useItemValue(assetsStatusItem, 'loading');
	const ref = useWaitForAssets();

	return (
		<>
			<Progress />
			<Header />
			<StickyHeader />
			<div ref={ref} className="bg-black text-white">
				<Hero />
				<UseCases />
			</div>
			<Pricing />
			<footer>
				<h2>footer</h2>
			</footer>
		</>
	);
}
