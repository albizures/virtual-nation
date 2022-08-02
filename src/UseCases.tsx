import { HorizontalSections } from './HorizontalSections';
import { networkVideo, texting1Video, texting2Video } from './assets';

export function UseCases() {
	return (
		<HorizontalSections className="bg-white text-stone-6 vertical-top">
			<div className="h-full">
				<div className="flex items-center h-full">
					<h2 className="ml-10 mr-8 uppercase font-bold">
						<span className="block text-5xl whitespace-nowrap">
							The virtual nation app
						</span>{' '}
						<span className="block text-7xl">gives creators</span>
						<span className="block text-8xl underline-yellow-2 underline">
							superpowers
						</span>
					</h2>
					<video
						className="h-full"
						loop={true}
						muted={true}
						autoPlay={true}
						src={networkVideo}
					></video>
					<h3 className="transform whitespace-nowrap text-center translate-x-0 rotate-90 text-7xl text-black font-bold">
						Use Cases
					</h3>
				</div>
			</div>

			<div className="px-15 mr-15 h-full">
				<div className="flex h-full justify-center flex-col">
					<h2 className="text-8xl uppercase font-bold">
						<span className="block">Immediate</span>
						<span className="block">organized</span>
						<span className="block underline underline-yellow-2">
							communication
						</span>
					</h2>
					<div className="mt-16">
						<button className="border text-xl py-5 px-10 border-stone-6">
							know more {'-->'}
						</button>
					</div>
				</div>
			</div>
			<div className="py-10 h-full mr-30">
				<video
					className="h-full"
					loop={true}
					muted={true}
					autoPlay={true}
					src={texting1Video}
				></video>
			</div>
			<div className="h-full mr-30">
				<div className="flex flex-col justify-center h-full">
					<h2 className="text-7xl font-bold uppercase">
						Immediate{' '}
						<span className="text-8xl block underline underline-yellow-2">
							response
						</span>
						<span className="block mt-4 whitespace-nowrap">
							from your subscribers
						</span>
						<span className="text-8xl block whitespace-nowrap">
							24/7 - 365 days
						</span>
					</h2>
					<div className="mt-16">
						<button className="border text-xl py-5 px-10 border-stone-6">
							know more {'-->'}
						</button>
					</div>
				</div>
			</div>
			<div className="py-10 h-full mr-30">
				<video
					className="h-full"
					loop={true}
					muted={true}
					autoPlay={true}
					src={texting2Video}
				></video>
			</div>
			<div className="h-full">
				<div className="h-full flex justify-center flex-col">
					<h3 className="text-7xl uppercase font-bold">
						<span className="block whitespace-nowrap">
							Engage directly
						</span>
						<span className="block whitespace-nowrap">
							with your community,
						</span>
						<span className="block whitespace-nowrap">
							subscribers and fans
						</span>
					</h3>
					<div className="mt-16">
						<button className="border text-xl py-5 px-10 border-stone-6">
							know more {'-->'}
						</button>
					</div>
				</div>
			</div>
		</HorizontalSections>
	);
}
