import React from 'react';
import { Hero } from './components/sections/Hero';
import { UseCases } from './components/sections/UseCases';
import { useWaitForAssets, Progress } from './useWaitForAssets';
import { Header, StickyHeader } from './components/Header';
import { Pricing } from './components/sections/Pricing';
import { Footer } from './components/sections/Footer';

export function App() {
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
			<Footer />
		</>
	);
}
