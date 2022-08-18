import { HorizontalSections } from '../HorizontalSections';
import {
	networkVideo,
	texting1Video,
	texting2Video,
	streamingVideo,
} from '../../assets';
import { Marquee, MarqueeInner } from '../Marquee';

export function UseCases() {
	return (
		<HorizontalSections className="bg-white text-stone-6 vertical-top">
			<div className="h-full">
				<div className="flex items-center h-full pr-80">
					<Marquee className="top-0 left-0">
						<MarqueeInner />
					</Marquee>
					<h2 className="ml-10 mr-8 uppercase font-bold font-sans">
						<span className="block text-5xl whitespace-nowrap">
							The virtual nation app
						</span>{' '}
						<span className="block text-7xl">gives creators</span>
						<span className="block text-8xl underline-nation underline">
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
					<h3 className="transform uppercase whitespace-nowrap font-sans text-center translate-x-0 rotate-90 text-6xl text-black font-bold">
						Use Cases
					</h3>
				</div>
			</div>

			<div className="px-15 mr-15 h-full">
				<div className="flex h-full justify-center flex-col">
					<h2 className="text-8xl uppercase font-bold font-sans">
						<span className="block">Immediate</span>
						<span className="block">organized</span>
						<span className="block underline underline-nation">
							communication
						</span>
					</h2>
					<div className="mt-16">
						<button className="btn py-5 px-10">
							Know more {'-->'}
						</button>
					</div>
				</div>
			</div>
			<div className="py-6 h-full mr-30 relative">
				<Marquee className="-rotate-90 transform bottom-0 left-15 w-screen origin-bottom-left z-10">
					<MarqueeInner className="top-0" />
				</Marquee>
				<video
					className="h-full relative z-12"
					loop={true}
					muted={true}
					autoPlay={true}
					src={texting1Video}
				></video>
			</div>
			<div className="h-full mr-30">
				<div className="flex flex-col justify-center h-full">
					<h2 className="text-7xl font-bold uppercase font-sans">
						Immediate{' '}
						<span className="text-8xl block underline underline-nation">
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
						<button className="btn py-5 px-10">
							Know more {'-->'}
						</button>
					</div>
				</div>
			</div>
			<div className="py-6 h-full mr-30 relative">
				<Marquee className="-rotate-90 transform bottom-0 left-15 w-screen origin-bottom-left z-10">
					<MarqueeInner className="top-0" />
				</Marquee>
				<video
					className="h-full relative z-12"
					loop={true}
					muted={true}
					autoPlay={true}
					src={texting2Video}
				></video>
			</div>
			<div className="h-full mr-30">
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
						<button className="btn py-5 px-10">
							Know more {'-->'}
						</button>
					</div>
				</div>
			</div>
			<div className="py-6 h-full relative">
				<Marquee className="-rotate-90 transform bottom-0 left-15 w-screen origin-bottom-left z-10">
					<MarqueeInner className="top-0" />
				</Marquee>
				<video
					className="h-full relative z-12"
					loop={true}
					muted={true}
					autoPlay={true}
					src={streamingVideo}
				></video>
			</div>
		</HorizontalSections>
	);
}
