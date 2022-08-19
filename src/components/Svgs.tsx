import clsx from 'clsx';

interface IconProps {
	className?: string;
}

export function Arrow(props: IconProps) {
	return (
		<svg
			version="1.1"
			width="2rem"
			height="2em"
			viewBox="0 0 51 78"
			stroke="currentColor"
			fill="currentColor"
			{...props}
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="Layer_2">
				<g>
					<path
						d="M11.04,73.04c-1.02,0-2.05-0.39-2.83-1.17c-1.56-1.56-1.56-4.1,0-5.66L35.43,39L8.21,11.79c-1.56-1.56-1.56-4.09,0-5.66
			c1.56-1.56,4.09-1.56,5.66,0l30.04,30.04c0.75,0.75,1.17,1.77,1.17,2.83s-0.42,2.08-1.17,2.83L13.87,71.87
			C13.09,72.65,12.06,73.04,11.04,73.04z"
					/>
				</g>
			</g>
		</svg>
	);
}

interface ArrowsProps {
	amount?: 2 | 3;
	className?: string;
}

export function Arrows(props: ArrowsProps) {
	const { amount = 2, className } = props;

	return (
		<div className={clsx('max-h-[8em] whitespace-nowrap', className)}>
			<Arrow className="arrow" />
			<Arrow className="-ml-2 arrow animate-delay-100" />
			{amount === 3 && (
				<Arrow className="-ml-2 arrow animate-delay-200" />
			)}
		</div>
	);
}

export function ArrowMessage(props: IconProps) {
	return (
		<svg width="1.5em" height="1.5em" viewBox="0 0 24 24" {...props}>
			<path
				fill="currentColor"
				d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.2L4 17.2V4h16v12M8 9v2h4.5l-1.8 1.8L12 14l4-4l-4-4l-1.2 1.2L12.5 9H8Z"
			/>
		</svg>
	);
}

export function LongArrow(props: IconProps) {
	return (
		<svg
			viewBox="20 0 200 56"
			width="3em"
			height="1em"
			fill="currentColor"
			stroke="currentColor"
			{...props}
		>
			<g>
				<line
					className="stroke-5"
					x1="2"
					x2="198"
					y1="28"
					y2="28"
					strokeLinejoin="round"
					strokeLinecap="round"
					strokeMiterlimit={10}
				/>
				<polyline
					fill="none"
					className="stroke-5"
					strokeLinejoin="round"
					strokeMiterlimit={10}
					strokeLinecap="round"
					points="172,2 198,28 172,54"
				/>
			</g>
		</svg>
	);
}
