interface OutlineText {
	text: string;
	id: string;
	className?: string;
	width?: string;
	height?: string;
}

export function OutlineText(props: OutlineText) {
	const {
		text,
		id,
		className,
		width = '840',
		height = '140',
	} = props;
	return (
		<span className={`inline-block ${className}`}>
			<svg
				width={width}
				height={height}
				xmlns="http://www.w3.org/2000/svg"
			>
				<symbol id={id}>
					<text
						className="font-sans text-9xl"
						fontWeight="bold"
						textAnchor="middle"
						x="50%"
						y="80%"
					>
						{text}
					</text>
				</symbol>
				<g>
					<use
						xlinkHref={`#${id}`}
						className="fill-none stroke-black stroke-2"
					></use>
				</g>
			</svg>
		</span>
	);
}
