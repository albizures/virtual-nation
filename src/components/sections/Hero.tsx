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
				playsInline={true}
				autoPlay={true}
			/>
		</ScreenSection>
	);
}
