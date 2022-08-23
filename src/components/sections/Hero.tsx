import {
	appleImg,
	backgroundVideo,
	configImg,
	googleImg,
	lockImg,
	supportImg,
} from '../../assets';
import { ScreenSection } from '../ScreenSection';
import { Arrow, Arrows } from '../Svgs';

interface FeatureProps {
	label: string;
	img: string;
}
function Feature(props: FeatureProps) {
	const { label, img } = props;
	return (
		<div className="flex flex-col items-center w-15">
			<div className="w-15 h-15">
				<img className="" src={img} alt={label} />
			</div>
			<p className="capitalize text-center font-sans">{label}</p>
		</div>
	);
}

export function Hero() {
	return (
		<ScreenSection className="flex justify-center relative">
			<video
				className="absolute top-1/2 left-1/2 -translate-1/2"
				src={backgroundVideo}
				loop={true}
				muted={true}
				autoPlay={true}
			/>
			<h1 className="text-2xl md:text-4xl relative mt-30 text-center font-sans uppercase font-bold text-shadow-sm">
				<span className="block">The virtual nation app </span>
				<span className="block">gives creators</span>
				<span className="block underline underline-nation underline-4">
					superpowers
				</span>
			</h1>

			<div className="absolute w-full bottom-0 flex justify-between p-8">
				<div className="md:flex items-center -ml-4 hidden ">
					<Arrows
						amount={3}
						className="transform rotate-90 text-2xl -mr-3"
					/>
					<span className="uppercase write-orient-upright write-vertical-left text-xs">
						scroll
					</span>
				</div>
				<div className="flex flex-col md:flex-row items-center">
					<div className="flex md:mr-12 items-center space-x-12 justify-center">
						<Feature label="24/7 Support" img={supportImg} />
						<Feature label="Easy to use" img={configImg} />
						<Feature label="Private Data" img={lockImg} />
					</div>
					<div className="flex items-center space-x-4 md:space-x-12 mt-8 md:mt-0">
						<div>
							<img
								className="grow-1 md:h-12"
								src={googleImg}
								alt="google"
							/>
						</div>
						<div>
							<img
								className="grow-1 md:h-12"
								src={appleImg}
								alt="apple"
							/>
						</div>
					</div>
				</div>
				<div>{/* space */}</div>
			</div>
		</ScreenSection>
	);
}