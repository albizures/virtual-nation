import textingImg from '../assets/texting.jpeg';

export { textingImg };

const assets = [textingImg];

export async function loadAssets() {
	await Promise.allSettled(
		assets.map((asset) => {
			const img = new Image();

			img.src = asset;

			return new Promise((resolve, reject) => {
				img.onload = resolve;
				img.onerror = reject;
			});
		}),
	);
}
