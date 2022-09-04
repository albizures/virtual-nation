import { HorizontalSections } from '../HorizontalSections';
import {
	networkVideo,
	texting1Video,
	texting2Video,
	streamingVideo,
} from '../../assets';
import { Marquee, MarqueeInner } from '../Marquee';
import { LongArrow } from '../Svgs';

export function UseCases() {
	return (
		<HorizontalSections className="bg-white text-stone-6 vertical-top">
			<div className="h-full">
				<div className="flex relative items-center h-full pr-40 md:pr-80">
					<Marquee className="top-0 left-0 w-full">
						<MarqueeInner />
					</Marquee>
					<h2 className="ml-10 mr-8 max-w-screen uppercase font-bold font-sans">
						<span className="block text-2xl md:text-5xl whitespace-nowrap">
							The virtual nation app
						</span>{' '}
						<span className="block text-3xl md:text-7xl">
							gives creators
						</span>
						<span className="block text-4xl md:text-8xl underline-nation underline">
							superpowers
						</span>
					</h2>
					<video
						className="h-full w-[70vw] md:w-auto"
						loop={true}
						muted={true}
						playsInline={true}
						autoPlay={true}
					>
						<source src={networkVideo.webm} type="video/webm" />
						<source src={networkVideo.mp4} type="video/mp4" />
					</video>
					<h3 className="transform uppercase whitespace-nowrap font-sans text-center translate-x-0 rotate-90 text-6xl text-black font-bold">
						Use Cases
					</h3>
				</div>
			</div>

			<div className="px-15 mr-15 h-full">
				<div className="flex h-full justify-center flex-col">
					<h2 className="text-4xl md:text-8xl uppercase font-bold font-sans">
						<span className="block">Immediate</span>
						<span className="block">organized</span>
						<span className="block underline underline-nation">
							communication
						</span>
					</h2>
					<div className="mt-16">
						<button className="btn py-4 md:py-5 pl-5 md:pl-10 pr-4 md:pr-8">
							Know more <LongArrow className="inline-block" />
						</button>
					</div>
				</div>
			</div>
			<div className="py-6 h-full mr-30 w-[70vw] md:w-auto relative">
				<Marquee className="-rotate-90 transform bottom-0 left-15 origin-bottom-left z-10">
					<MarqueeInner className="top-0" />
				</Marquee>
				<video
					className="h-full relative z-12"
					loop={true}
					muted={true}
					playsInline={true}
					autoPlay={true}
				>
					<source src={texting1Video.webm} type="video/webm" />
					<source src={texting1Video.mp4} type="video/mp4" />
				</video>
			</div>
			<div className="h-full mr-30">
				<div className="flex flex-col justify-center h-full">
					<h2 className="text-3xl md:text-7xl font-bold uppercase font-sans max-w-screen">
						Immediate{' '}
						<span className="text-4xl md:text-8xl block underline underline-nation">
							response
						</span>
						<span className="block mt-4 md:whitespace-nowrap">
							from your subscribers
						</span>
						<span className="text-4xl md:text-8xl block whitespace-normal md:whitespace-nowrap">
							24/7 - 365 days
						</span>
					</h2>
					<div className="mt-16">
						<button className="btn py-4 md:py-5 pl-5 md:pl-10 pr-4 md:pr-8">
							Know more <LongArrow className="inline-block " />
						</button>
					</div>
				</div>
			</div>
			<div className="py-6 h-full w-[70vw] md:w-auto mr-30 relative">
				<Marquee className="-rotate-90 transform bottom-0 left-15 origin-bottom-left z-10">
					<MarqueeInner className="top-0" />
				</Marquee>
				<video
					className="h-full relative z-12"
					loop={true}
					muted={true}
					playsInline={true}
					autoPlay={true}
				>
					<source src={texting2Video.webm} type="video/webm" />
					<source src={texting2Video.mp4} type="video/mp4" />
				</video>
			</div>
			<div className="h-full mr-30">
				<div className="h-full flex justify-center flex-col">
					<h3 className="text-2xl md:text-7xl uppercase font-bold">
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
						<button className="btn py-4 md:py-5 pl-5 md:pl-10 pr-4 md:pr-8">
							Know more <LongArrow className="inline-block" />
						</button>
					</div>
				</div>
			</div>
			<div className="py-6 h-full w-[70vw] md:w-auto relative">
				<Marquee className="-rotate-90 transform bottom-0 left-15 origin-bottom-left z-10">
					<MarqueeInner className="top-0" />
				</Marquee>
				<video
					className="h-full relative z-12"
					loop={true}
					muted={true}
					playsInline={true}
					autoPlay={true}
				>
					<source src={streamingVideo.webm} type="video/webm" />
					<source src={streamingVideo.mp4} type="video/mp4" />
				</video>
			</div>
		</HorizontalSections>
	);
}
