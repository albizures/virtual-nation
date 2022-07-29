import React from 'react';
import { loadAssets } from './assets';
import { ScreenSection } from './ScreenSection';
import { UseCases } from './UseCases';

export function App() {
	const [status, setStatus] = React.useState('loading');
	React.useEffect(() => {
		loadAssets().then(() => {
			setStatus('load');
		});
	}, []);

	if (status !== 'load') {
		return <div>loading...</div>;
	}

	return (
		<>
			<div className="bg-black text-white">
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
